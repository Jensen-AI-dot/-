import { createHash } from "node:crypto";
import { mkdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const assets = join(root, "assets");
const manifestPath = join(root, ".image-optimization.json");
const supported = new Set([".jpg", ".jpeg", ".png"]);

async function digest(path) {
  return createHash("sha256").update(await readFile(path)).digest("hex");
}

async function walk(directory) {
  const { readdir } = await import("node:fs/promises");
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (supported.has(extname(entry.name).toLowerCase())) files.push(path);
  }
  return files;
}

async function optimize(path) {
  const extension = extname(path).toLowerCase();
  const temporary = join(dirname(path), `.${Date.now()}-${Math.random().toString(16).slice(2)}${extension}`);
  const before = (await stat(path)).size;
  let pipeline = sharp(path, { failOn: "warning" }).rotate().withMetadata({ orientation: undefined });
  pipeline = extension === ".png"
    ? pipeline.png({ compressionLevel: 9, effort: 8 })
    : pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true });
  await pipeline.toFile(temporary);
  const after = (await stat(temporary)).size;
  if (after < before) {
    await rm(path);
    await rename(temporary, path);
    return { before, after };
  }
  await rm(temporary);
  return { before, after: before };
}

await mkdir(assets, { recursive: true });
let manifest = {};
try {
  manifest = JSON.parse(await readFile(manifestPath, "utf8"));
} catch {}

let processed = 0;
let skipped = 0;
let totalBefore = 0;
let totalAfter = 0;

for (const path of (await walk(assets)).sort()) {
  const key = relative(root, path).replaceAll("\\", "/");
  const currentHash = await digest(path);
  if (manifest[key] === currentHash) {
    skipped += 1;
    continue;
  }
  const result = await optimize(path);
  processed += 1;
  totalBefore += result.before;
  totalAfter += result.after;
  manifest[key] = await digest(path);
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
const saved = totalBefore - totalAfter;
const percent = totalBefore ? saved / totalBefore * 100 : 0;
console.log(`Processed: ${processed}; skipped: ${skipped}`);
console.log(`Saved: ${(saved / 1024 / 1024).toFixed(2)} MB (${percent.toFixed(1)}%)`);
