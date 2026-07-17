/* global gsap, ScrollTrigger */
gsap.registerPlugin(ScrollTrigger);

const shell = document.querySelector(".site-shell");
const loader = document.querySelector(".loader");
const counter = document.querySelector(".loader-count");
const enterButtons = document.querySelectorAll(".enter-button, .silent-enter");
const brand = document.querySelector(".brand");
const projectList = document.querySelector(".project-list");
const projectLinks = gsap.utils.toArray(".project");
const listPreview = document.querySelector(".list-preview");
const listPreviewImage = listPreview.querySelector("img");
const spiralScene = document.querySelector(".spiral-scene");
const spiralWorld = document.querySelector(".spiral-world");
const spiralHint = document.querySelector(".spiral-hint");
const menu = document.querySelector(".menu-panel");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const menuProjectLink = document.querySelector('[data-menu-action="projects"]');
const menuPageLinks = document.querySelectorAll("[data-menu-page]");
const menuSubpages = document.querySelectorAll(".menu-subpage");
const menuSubpageCloses = document.querySelectorAll(".menu-subpage-close");
const viewButtons = document.querySelectorAll(".view-button");
const soundToggle = document.querySelector(".sound-toggle");
const detail = document.querySelector(".project-detail");
const detailClose = document.querySelector(".detail-close");
const detailGallery = document.querySelector(".detail-gallery");
const detailStage = document.querySelector(".detail-stage");
const detailViewport = document.querySelector(".detail-viewport");
const detailTrack = document.querySelector(".detail-track");
const detailPrev = document.querySelector(".detail-prev");
const detailNext = document.querySelector(".detail-next");
const detailCounter = document.querySelector(".detail-counter");
const detailPeekPrevCard = document.querySelector(".detail-peek-prev");
const detailPeekNextCard = document.querySelector(".detail-peek-next");
const detailPeekCards = [detailPeekPrevCard, detailPeekNextCard];
const detailTitle = document.querySelector(".detail-title");
const detailCaption = document.querySelector(".detail-caption");
const detailScrollNext = document.querySelector(".detail-scroll-next");
const aplusSection = document.querySelector(".aplus-section");
const aplusList = document.querySelector(".aplus-list");
const backgroundMusic = document.querySelector(".background-music");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let aplusAutoplayTimer = null;

document.body.classList.add("spiral-active");
gsap.set(shell, { autoAlpha: 0 });
gsap.set([".loader-copy span", ".enter-button", ".silent-enter"], { autoAlpha: 0, y: 28 });

const projectCaptions = [
  "P5 50000mAh移动电源",
  "H9 无线头戴式蓝牙耳机",
  "W5 5000mAh磁吸充电宝",
  "M100 头戴式话务耳机",
  "W16 磁吸支架充电宝",
  "T07 运动蓝牙耳机",
  "K11 墙插充电宝",
  "G8 挂耳式话务耳机",
  "P8 50000mAh移动电源",
  "A1 TWS蓝牙耳机",
  "W7 5000mAh磁吸充电宝"
];

const projectGalleries = {
  "P5 50000mAh移动电源": [
    "assets/p5/p5-black-01.jpg",
    "assets/p5/p5-black-02.jpg",
    "assets/p5/p5-black-03.jpg",
    "assets/p5/p5-black-04.jpg",
    "assets/p5/p5-black-05.jpg",
    "assets/p5/p5-black-06.jpg",
    "assets/p5/p5-black-07.jpg",
    "assets/p5/p5-black-08.jpg"
  ],
  "H9 无线头戴式蓝牙耳机": [
    "assets/h9/h9-black-01.jpg",
    "assets/h9/h9-black-02.jpg",
    "assets/h9/h9-black-03.jpg",
    "assets/h9/h9-black-04.jpg",
    "assets/h9/h9-black-05.jpg",
    "assets/h9/h9-black-06.jpg",
    "assets/h9/h9-black-07.jpg",
    "assets/h9/h9-black-08.jpg"
  ],
  "W5 5000mAh磁吸充电宝": [
    "assets/w5/w5-gray-01.jpg",
    "assets/w5/w5-gray-02.jpg",
    "assets/w5/w5-gray-03.jpg",
    "assets/w5/w5-gray-04.jpg",
    "assets/w5/w5-gray-05.jpg",
    "assets/w5/w5-gray-06.jpg",
    "assets/w5/w5-gray-07.jpg"
  ],
  "M100 头戴式话务耳机": [
    "assets/m100/m100-black-01.jpg",
    "assets/m100/m100-black-02.jpg",
    "assets/m100/m100-black-03.jpg",
    "assets/m100/m100-black-04.jpg",
    "assets/m100/m100-black-05.jpg",
    "assets/m100/m100-black-06.jpg"
  ],
  "W16 磁吸支架充电宝": [
    "assets/w16/w16-01.jpg",
    "assets/w16/w16-02.jpg",
    "assets/w16/w16-03.jpg",
    "assets/w16/w16-04.jpg",
    "assets/w16/w16-05.jpg",
    "assets/w16/w16-06.jpg"
  ],
  "T07 运动蓝牙耳机": [
    "assets/t07/t07-01.jpg",
    "assets/t07/t07-02.jpg",
    "assets/t07/t07-03.jpg",
    "assets/t07/t07-04.jpg",
    "assets/t07/t07-05.jpg",
    "assets/t07/t07-06.jpg"
  ],
  "K11 墙插充电宝": [
    "assets/k11/k11-01.jpg",
    "assets/k11/k11-02.jpg",
    "assets/k11/k11-03.jpg",
    "assets/k11/k11-04.jpg",
    "assets/k11/k11-05.jpg",
    "assets/k11/k11-06.jpg",
    "assets/k11/k11-07.jpg"
  ],
  "G8 挂耳式话务耳机": [
    "assets/g8/g8-01.jpg",
    "assets/g8/g8-02.jpg",
    "assets/g8/g8-03.jpg",
    "assets/g8/g8-04.jpg",
    "assets/g8/g8-05.jpg",
    "assets/g8/g8-06.jpg",
    "assets/g8/g8-07.jpg",
    "assets/g8/g8-08.jpg",
    "assets/g8/g8-09.jpg"
  ],
  "P8 50000mAh移动电源": [
    "assets/p8/p8-01.jpg",
    "assets/p8/p8-02.jpg",
    "assets/p8/p8-03.jpg",
    "assets/p8/p8-04.jpg",
    "assets/p8/p8-05.jpg",
    "assets/p8/p8-06.jpg",
    "assets/p8/p8-07.jpg"
  ],
  "A1 TWS蓝牙耳机": [
    "assets/a1/a1-01.jpg",
    "assets/a1/a1-02.jpg",
    "assets/a1/a1-03.jpg",
    "assets/a1/a1-04.jpg",
    "assets/a1/a1-05.jpg",
    "assets/a1/a1-06.jpg"
  ],
  "W7 5000mAh磁吸充电宝": [
    "assets/w7/w7-01.jpg",
    "assets/w7/w7-02.jpg",
    "assets/w7/w7-03.jpg",
    "assets/w7/w7-04.jpg",
    "assets/w7/w7-05.jpg",
    "assets/w7/w7-06.jpg"
  ]
};

const p5AplusModules = [
  ["assets/aplus/A+_01.jpg"],
  ["assets/aplus/A+_02.jpg"],
  ["assets/aplus/A+_03.jpg"],
  ["assets/aplus/A+_04.jpg", "assets/aplus/A+_13.jpg", "assets/aplus/A+_08.jpg", "assets/aplus/A+_09.jpg"],
  ["assets/aplus/A+_05.jpg", "assets/aplus/A+_11.jpg", "assets/aplus/A+_10.jpg"],
  ["assets/aplus/A+_06.jpg", "assets/aplus/A+_12.jpg", "assets/aplus/A+_15.jpg"],
  ["assets/aplus/A+_07.jpg", "assets/aplus/A+_14.jpg"]
];

const h9AplusModules = [
  ["assets/h9-aplus/A+_01.jpg"],
  ["assets/h9-aplus/A+_02.jpg"],
  ["assets/h9-aplus/A+_03.jpg"],
  ["assets/h9-aplus/A+_04.jpg", "assets/h9-aplus/A+_08.jpg", "assets/h9-aplus/A+_09.jpg"],
  ["assets/h9-aplus/A+_05.jpg", "assets/h9-aplus/A+_10.jpg", "assets/h9-aplus/A+_12.jpg", "assets/h9-aplus/A+_13.jpg"],
  ["assets/h9-aplus/A+_06.jpg", "assets/h9-aplus/A+_11.jpg", "assets/h9-aplus/A+_14.jpg"],
  ["assets/h9-aplus/A+_07.jpg", "assets/h9-aplus/A+_15.jpg"]
];

const w5AplusModules = [
  ["assets/w5-aplus/A+_01.jpg"],
  ["assets/w5-aplus/A+_02.jpg", "assets/w5-aplus/A+_06.jpg", "assets/w5-aplus/A+_09.jpg"],
  ["assets/w5-aplus/A+_03.jpg"],
  ["assets/w5-aplus/A+_04.jpg"],
  ["assets/w5-aplus/A+_05.jpg", "assets/w5-aplus/A+_07.jpg", "assets/w5-aplus/A+_08.jpg"],
  ["assets/w5-aplus/A+_13.jpg", "assets/w5-aplus/A+_12.jpg", "assets/w5-aplus/A+_11.jpg", "assets/w5-aplus/A+_14.jpg", "assets/w5-aplus/A+_15.jpg"],
  ["assets/w5-aplus/A+_10.jpg", "assets/w5-aplus/A+_16.jpg"]
];

const m100AplusModules = [
  ["assets/m100-aplus/A+_01.jpg"],
  ["assets/m100-aplus/A+_02.jpg"],
  ["assets/m100-aplus/A+_03.jpg"],
  ["assets/m100-aplus/A+_04.jpg", "assets/m100-aplus/A+_07.jpg", "assets/m100-aplus/A+_08.jpg"],
  ["assets/m100-aplus/A+_05.jpg", "assets/m100-aplus/A+_09.jpg"],
  ["assets/m100-aplus/A+_06.jpg", "assets/m100-aplus/A+_10.jpg", "assets/m100-aplus/A+_11.jpg", "assets/m100-aplus/A+_12.jpg"]
];

const w16AplusModules = [
  ["assets/w16-aplus/A+_01.jpg"],
  ["assets/w16-aplus/A+_02.jpg"],
  ["assets/w16-aplus/A+_03.jpg"],
  ["assets/w16-aplus/A+_04.jpg", "assets/w16-aplus/A+_07.jpg", "assets/w16-aplus/A+_08.jpg"],
  ["assets/w16-aplus/A+_05.jpg", "assets/w16-aplus/A+_10.jpg", "assets/w16-aplus/A+_09.jpg"],
  ["assets/w16-aplus/A+_06.jpg"]
];

const t07AplusModules = [
  ["assets/t07-aplus/A+_01.jpg"],
  ["assets/t07-aplus/A+_02.jpg"],
  ["assets/t07-aplus/A+_03.jpg", "assets/t07-aplus/A+_08.jpg"],
  ["assets/t07-aplus/A+_04.jpg", "assets/t07-aplus/A+_09.jpg"],
  ["assets/t07-aplus/A+_05.jpg"],
  ["assets/t07-aplus/A+_06.jpg"],
  ["assets/t07-aplus/A+_07.jpg", "assets/t07-aplus/A+_10.jpg"]
];

const k11AplusModules = [
  ["assets/k11-aplus/A+_01.jpg"],
  ["assets/k11-aplus/A+_02.jpg"],
  ["assets/k11-aplus/A+_03.jpg"],
  ["assets/k11-aplus/A+_04.jpg", "assets/k11-aplus/A+_07.jpg"],
  ["assets/k11-aplus/A+_05.jpg", "assets/k11-aplus/A+_08.jpg"],
  ["assets/k11-aplus/A+_06.jpg", "assets/k11-aplus/A+_09.jpg", "assets/k11-aplus/A+_10.jpg", "assets/k11-aplus/A+_11.jpg"]
];

const g8AplusModules = [
  ["assets/g8-aplus/A+_01.jpg"],
  ["assets/g8-aplus/A+_02.jpg"],
  ["assets/g8-aplus/A+_03.jpg"],
  ["assets/g8-aplus/A+_04.jpg", "assets/g8-aplus/A+_05.jpg", "assets/g8-aplus/A+_06.jpg"],
  ["assets/g8-aplus/A+_07.jpg", "assets/g8-aplus/A+_08.jpg", "assets/g8-aplus/A+_09.jpg"],
  ["assets/g8-aplus/A+_10.jpg", "assets/g8-aplus/A+_11.jpg", "assets/g8-aplus/A+_12.jpg"],
  ["assets/g8-aplus/A+_13.jpg", "assets/g8-aplus/A+_14.jpg", "assets/g8-aplus/A+_15.jpg"]
];

const p8AplusModules = [
  ["assets/p8-aplus/A+_01.jpg"],
  ["assets/p8-aplus/A+_02.jpg"],
  ["assets/p8-aplus/A+_03.jpg"],
  ["assets/p8-aplus/A+_04.jpg", "assets/p8-aplus/A+_08.jpg", "assets/p8-aplus/A+_09.jpg"],
  ["assets/p8-aplus/A+_05.jpg"],
  ["assets/p8-aplus/A+_06.jpg", "assets/p8-aplus/A+_10.jpg", "assets/p8-aplus/A+_11.jpg"],
  ["assets/p8-aplus/A+_07.jpg"]
];

const a1AplusModules = [
  ["assets/a1-aplus/A+_01.jpg"],
  ["assets/a1-aplus/A+_02.jpg"],
  ["assets/a1-aplus/A+_03.jpg"],
  ["assets/a1-aplus/A+_04.jpg"],
  ["assets/a1-aplus/A+_05.jpg"],
  ["assets/a1-aplus/A+_06.jpg"],
  ["assets/a1-aplus/A+_07.jpg", "assets/a1-aplus/A+_08.jpg"]
];

const w7AplusModules = [
  ["assets/w7-aplus/A+_01.jpg"],
  ["assets/w7-aplus/A+_02.jpg"],
  ["assets/w7-aplus/A+_03.jpg"],
  ["assets/w7-aplus/A+_05.jpg", "assets/w7-aplus/A+_04.jpg"],
  ["assets/w7-aplus/A+_06.jpg", "assets/w7-aplus/A+_07.jpg"],
  ["assets/w7-aplus/A+_08.jpg", "assets/w7-aplus/A+_09.jpg", "assets/w7-aplus/A+_10.jpg"]
];

// Add a project title here when its own product imagery is ready. Until then,
// every project uses the same complete detail-page template as the P5 project.
const projectAplusModules = {
  "P5 50000mAh移动电源": p5AplusModules,
  "H9 无线头戴式蓝牙耳机": h9AplusModules,
  "W5 5000mAh磁吸充电宝": w5AplusModules,
  "M100 头戴式话务耳机": m100AplusModules,
  "W16 磁吸支架充电宝": w16AplusModules,
  "T07 运动蓝牙耳机": t07AplusModules,
  "K11 墙插充电宝": k11AplusModules,
  "G8 挂耳式话务耳机": g8AplusModules,
  "P8 50000mAh移动电源": p8AplusModules,
  "A1 TWS蓝牙耳机": a1AplusModules,
  "W7 5000mAh磁吸充电宝": w7AplusModules
};

const createPlaceholderGallery = (image) => Array.from({ length: 8 }, () => image);
const createPlaceholderAplus = () => p5AplusModules.map((moduleFrames) => [...moduleFrames]);

const projects = projectLinks.map((link, index) => {
  const title = link.querySelector("span").textContent;
  return {
    title,
    year: link.querySelector("small").textContent,
    image: link.dataset.image,
    gallery: projectGalleries[title] || createPlaceholderGallery(link.dataset.image),
    aplus: projectAplusModules[title] || createPlaceholderAplus(),
    caption: projectCaptions[index],
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  };
});

// SOURCE: deployed ProjectPlane creates [...projects, ...projects] for a seamless loop.
const spiralCards = [...projects, ...projects].map((project, index) => {
  const card = document.createElement("a");
  card.className = "spiral-card";
  card.href = `#project/${project.slug}`;
  card.dataset.index = String(index);
  card.setAttribute("aria-label", project.title);
  card.innerHTML = `<img src="${project.image}" alt="" draggable="false" decoding="async"><span class="spiral-card-echo" style="--echo-image: url('${project.image}')" aria-hidden="true"></span><span class="spiral-card-label">${project.title}</span>`;
  spiralWorld.appendChild(card);
  return card;
});

const spiralState = {
  offset: 0,
  velocity: 0,
  targetVelocity: 0,
  direction: 1,
  reveal: 0,
  active: true,
  paused: false
};

const clamp = gsap.utils.clamp;
const wrap = (value, length) => ((value % length) + length) % length;
const spiralLayout = { width: innerWidth, height: innerHeight, mobile: innerWidth <= 760 };

function refreshSpiralLayout() {
  spiralLayout.width = innerWidth;
  spiralLayout.height = innerHeight;
  spiralLayout.mobile = innerWidth <= 760;
}

function updateSpiral() {
  if (!spiralState.active || spiralState.paused) return;
  const tickerRatio = gsap.ticker.deltaRatio(60);
  const deltaRatio = Number.isFinite(tickerRatio) ? tickerRatio : 1;
  spiralState.velocity += (spiralState.targetVelocity - spiralState.velocity) * Math.min(.1 * deltaRatio, 1);
  spiralState.offset += spiralState.velocity * deltaRatio;
  spiralState.targetVelocity *= Math.pow(.9, deltaRatio);
  if (Math.abs(spiralState.targetVelocity) < .002) {
    spiralState.targetVelocity = reducedMotion ? 0 : spiralState.direction * .002;
  }

  const count = spiralCards.length;
  const centerIndex = Math.floor(count / 2);
  const radiusX = Math.min(spiralLayout.width * (spiralLayout.mobile ? .25 : .225), spiralLayout.mobile ? 112 : 430);
  const radiusZ = Math.min(spiralLayout.width * (spiralLayout.mobile ? .16 : .15), spiralLayout.mobile ? 76 : 285);
  const verticalGap = clamp(spiralLayout.mobile ? 98 : 52, spiralLayout.mobile ? 116 : 76, spiralLayout.height * (spiralLayout.mobile ? .12 : .074));
  const verticalOffset = spiralLayout.mobile ? 0 : Math.max(24, spiralLayout.height * .035);
  const frontRelative = Math.PI / 2 / .85;
  const hiddenLift = (1 - spiralState.reveal) * 420;
  const radiusReveal = .48 + spiralState.reveal * .52;
  const speedBend = clamp(-10, 10, spiralState.velocity * 190);
  const motionBlur = reducedMotion || spiralLayout.mobile ? 0 : clamp(0, 2.1, Math.abs(spiralState.velocity) * 2.4);

  spiralCards.forEach((card, index) => {
    // SOURCE constants from ProjectPlane.update(): verticalGap=.5, angleGap=.85, baseRadius=2.
    let normalized = wrap(index - spiralState.offset, count);
    const relative = normalized - centerIndex;
    const angle = relative * .85;
    const x = Math.cos(angle) * radiusX * radiusReveal;
    const y = (relative - frontRelative) * verticalGap + verticalOffset - hiddenLift;
    const z = Math.sin(angle) * radiusZ * radiusReveal;
    const rotationY = (-angle + Math.PI / 2) * 180 / Math.PI;
    const edgeStart = spiralLayout.mobile ? 1.65 : 5.2;
    const edgeRange = spiralLayout.mobile ? .65 : 1.6;
    const edgeDistance = spiralLayout.mobile ? Math.abs(relative - frontRelative) : Math.abs(relative);
    const edgeFade = clamp(0, 1, 1 - Math.max(0, edgeDistance - edgeStart) / edgeRange);
    const viewportCenterY = spiralLayout.height / 2 + y;
    const menuSafeFade = spiralLayout.mobile
      ? clamp(0, 1, (viewportCenterY - 128) / 72)
      : clamp(0, 1, (Math.abs(x) - 180) / 140 + (viewportCenterY - 110) / 90);
    const depth = clamp(0, 1, (z + radiusZ) / (radiusZ * 2));
    const focus = Math.pow(depth, 2.25);
    const opacity = edgeFade * menuSafeFade * spiralState.reveal;
    const rawBlur = spiralLayout.mobile ? (1 - focus) * 1.1 : (1 - focus) * 3.1 + motionBlur;
    const blur = Math.round(clamp(0, spiralLayout.mobile ? 1.2 : 4.2, rawBlur) * 4) / 4;
    const scale = spiralLayout.mobile ? .78 + focus * .3 : .83 + focus * .47;
    const mosaic = reducedMotion || spiralLayout.mobile ? 0 : clamp(0, .42, Math.abs(spiralState.velocity) * .75) * (.45 + (1 - focus) * .75);
    const echoShift = clamp(-18, 18, spiralState.velocity * 20 + Math.sin(angle) * 5);

    const bendValue = (Math.round(speedBend * 4) / 4).toFixed(2);
    const blurValue = `${blur.toFixed(2)}px`;
    if (card.dataset.bend !== bendValue) {
      card.dataset.bend = bendValue;
      card.style.setProperty("--bend", bendValue);
    }
    if (card.dataset.blur !== blurValue) {
      card.dataset.blur = blurValue;
      card.style.setProperty("--blur", blurValue);
    }
    card.style.setProperty("--mosaic", mosaic.toFixed(3));
    card.style.setProperty("--echo-shift", `${echoShift.toFixed(1)}px`);
    card.classList.toggle("is-focus", focus > .92 && edgeFade > .8 && Math.abs(y) < verticalGap * 1.25);
    gsap.set(card, {
      x,
      y,
      z,
      xPercent: -50,
      yPercent: -50,
      rotationY,
      rotationX: speedBend * .42 + Math.cos(angle) * 3.2,
      rotationZ: Math.sin(angle * .72) * -7 + speedBend * .16,
      scale,
      opacity,
      zIndex: Math.round(z + radiusZ),
      force3D: true
    });
  });
}

gsap.ticker.add(updateSpiral);

function nudgeSpiral(delta) {
  if (!spiralState.active || spiralState.paused || reducedMotion) return;
  spiralState.targetVelocity += delta * .00015;
  spiralState.targetVelocity = clamp(-2, 2, spiralState.targetVelocity);
  spiralState.direction = delta >= 0 ? 1 : -1;
  gsap.to(spiralHint, { autoAlpha: 0, y: 8, duration: .35, overwrite: true });
}

spiralScene.addEventListener("wheel", (event) => {
  if (!spiralState.active) return;
  event.preventDefault();
  nudgeSpiral(event.deltaY);
}, { passive: false });

let dragStartX = 0;
let lastDragX = 0;
let isDragging = false;
let didDrag = false;
let pressedCard = null;
spiralScene.addEventListener("pointerdown", (event) => {
  if (!spiralState.active || spiralState.paused) return;
  dragStartX = lastDragX = event.clientX;
  isDragging = true;
  didDrag = false;
  pressedCard = event.target.closest(".spiral-card");
  spiralScene.setPointerCapture?.(event.pointerId);
});
spiralScene.addEventListener("pointermove", (event) => {
  if (!isDragging || !spiralState.active) return;
  const delta = -(event.clientX - lastDragX) * 3;
  if (Math.abs(event.clientX - dragStartX) > 5) {
    didDrag = true;
    nudgeSpiral(delta);
  }
  lastDragX = event.clientX;
});
spiralScene.addEventListener("pointerup", () => {
  isDragging = false;
  if (!didDrag && pressedCard) {
    const index = Number(pressedCard.dataset.index) % projects.length;
    openDetail(projects[index], { trigger: pressedCard });
  }
  pressedCard = null;
});
spiralScene.addEventListener("pointercancel", () => {
  isDragging = false;
  pressedCard = null;
});

let detailTimeline = null;
let detailProject = null;
let detailTrigger = null;
let detailSlideIndex = 0;
let detailPhysicalIndex = 1;
let galleryAnimating = false;
let detailFrames = [];
let galleryTransition = null;
let detailScrollTween = null;

function updateDetailCounter() {
  detailCounter.textContent = `${String(detailSlideIndex + 1).padStart(2, "0")} / ${String(detailFrames.length).padStart(2, "0")}`;
}

function updateDetailPreviews() {
  const previewCount = Math.min(spiralLayout.mobile ? 1 : 3, Math.max(detailFrames.length - 1, 1));
  const renderStack = (direction) => Array.from({ length: previewCount }, (_, index) => {
    const source = detailFrames[wrap(detailSlideIndex + direction * (index + 1), detailFrames.length)];
    return `<figure class="detail-peek-card"><img src="${source}" alt="" draggable="false" decoding="async"></figure>`;
  }).join("");
  detailPeekPrevCard.innerHTML = renderStack(-1);
  detailPeekNextCard.innerHTML = renderStack(1);
}

function fitDetailStage(source) {
  const image = new Image();
  image.onload = () => {
    if (source !== detailFrames[detailSlideIndex]) return;
    const ratio = image.naturalWidth / image.naturalHeight || 1;
    const mobile = innerWidth <= 760;
    const maxWidth = innerWidth * (mobile ? .9 : .68);
    const maxHeight = innerHeight * (mobile ? .6 : .78);
    const width = Math.min(maxWidth, maxHeight * ratio);
    const height = width / ratio;
    detailGallery.style.setProperty("--detail-width", `${Math.round(width)}px`);
    detailGallery.style.setProperty("--detail-height", `${Math.round(height)}px`);
  };
  image.src = source;
}

function renderGallery(project) {
  galleryTransition?.kill();
  detailFrames = project.gallery?.length ? project.gallery : Array.from({ length: 4 }, () => project.image);
  const loopedFrames = [detailFrames.at(-1), ...detailFrames, detailFrames[0]];
  detailTrack.innerHTML = loopedFrames.map((image, index) => {
    const clone = index === 0 || index === loopedFrames.length - 1;
    const alt = clone ? "" : `${project.title}, image ${index} of ${detailFrames.length}`;
    const loading = index === 1 ? "eager" : "lazy";
    const priority = index === 1 ? ' fetchpriority="high"' : "";
    return `<figure class="detail-slide"${clone ? ' aria-hidden="true"' : ""}><img src="${image}" alt="${alt}" draggable="false" loading="${loading}" decoding="async"${priority}></figure>`;
  }).join("");
  detailSlideIndex = 0;
  detailPhysicalIndex = 1;
  galleryAnimating = false;
  gsap.set(detailTrack, { x: 0, xPercent: -100 });
  updateDetailCounter();
  updateDetailPreviews();
  fitDetailStage(detailFrames[0]);
}

function renderAplus(project) {
  stopAplusAutoplay();
  const modules = project.aplus || [];
  const hasAplus = modules.length > 0;
  detail.classList.toggle("has-aplus", hasAplus);
  aplusList.replaceChildren();
  if (!hasAplus) return;

  aplusList.innerHTML = modules.map((moduleFrames, moduleIndex) => {
    const slides = moduleFrames.map((image, slideIndex) => {
      const loading = moduleIndex === 0 && slideIndex === 0 ? "eager" : "lazy";
      return `<figure class="aplus-slide"><img src="${image}" alt="${project.title}, Advanced A+ module ${moduleIndex + 1}, slide ${slideIndex + 1}" draggable="false" loading="${loading}" decoding="async"></figure>`;
    }).join("");
    return `<article class="aplus-module" data-slide="0" data-module-label="Module ${String(moduleIndex + 1).padStart(2, "0")}">
      <div class="aplus-track">${slides}</div>
      ${moduleFrames.length > 1 ? `<button class="aplus-arrow aplus-prev" type="button" data-aplus-direction="-1" aria-label="Previous A+ image"></button>
      <button class="aplus-arrow aplus-next" type="button" data-aplus-direction="1" aria-label="Next A+ image"></button>` : ""}
    </article>`;
  }).join("");
  startAplusAutoplay();
}

function stopAplusAutoplay() {
  if (!aplusAutoplayTimer) return;
  window.clearInterval(aplusAutoplayTimer);
  aplusAutoplayTimer = null;
}

function startAplusAutoplay() {
  stopAplusAutoplay();
  if (reducedMotion) return;
  const modules = [...aplusList.querySelectorAll(".aplus-module")]
    .filter((module) => module.querySelector(".aplus-track").children.length > 1);
  if (!modules.length) return;
  aplusAutoplayTimer = window.setInterval(() => {
    if (document.hidden || detail.getAttribute("aria-hidden") === "true") return;
    modules.forEach((module) => goToAplusSlide(module, 1));
  }, 3000);
}

function goToAplusSlide(module, direction) {
  const track = module.querySelector(".aplus-track");
  const slideCount = track.children.length;
  const nextIndex = wrap(Number(module.dataset.slide || 0) + direction, slideCount);
  module.dataset.slide = String(nextIndex);
  gsap.to(track, {
    xPercent: -nextIndex * 100,
    duration: reducedMotion ? 0 : .72,
    ease: "power4.inOut",
    force3D: true,
    overwrite: true
  });
}

function goToDetailSlide(direction) {
  if (galleryAnimating || detail.getAttribute("aria-hidden") === "true") return;
  galleryAnimating = true;
  galleryTransition?.kill();
  const incomingPreview = direction > 0 ? detailPeekNextCard : detailPeekPrevCard;
  const outgoingPreview = direction > 0 ? detailPeekPrevCard : detailPeekNextCard;
  detailSlideIndex = wrap(detailSlideIndex + direction, detailFrames.length);
  detailPhysicalIndex += direction;
  updateDetailCounter();
  galleryTransition = gsap.timeline({
    defaults: { overwrite: true },
    onComplete: () => {
      if (detailPhysicalIndex === 0) detailPhysicalIndex = detailFrames.length;
      if (detailPhysicalIndex === detailFrames.length + 1) detailPhysicalIndex = 1;
      gsap.set(detailTrack, { x: 0, xPercent: -detailPhysicalIndex * 100 });
      gsap.set([detailStage, ...detailPeekCards], { clearProps: "transform,opacity,visibility,filter" });
      updateDetailPreviews();
      fitDetailStage(detailFrames[detailSlideIndex]);
      galleryAnimating = false;
    }
  })
    .to(detailTrack, { x: 0, xPercent: -detailPhysicalIndex * 100, duration: reducedMotion ? 0 : .68, ease: "power4.inOut", force3D: true }, 0)
    .to(detailStage, { x: -direction * 18, scale: .985, autoAlpha: .9, duration: reducedMotion ? 0 : .3, ease: "power2.inOut", force3D: true }, 0)
    .to(detailStage, { x: 0, scale: 1, autoAlpha: 1, duration: reducedMotion ? 0 : .38, ease: "power3.out", force3D: true }, reducedMotion ? 0 : .27)
    .to(incomingPreview, {
      x: -direction * 64,
      scale: 1.025,
      autoAlpha: 1,
      duration: reducedMotion ? 0 : .58,
      ease: "power3.inOut",
      force3D: true
    }, 0)
    .to(outgoingPreview, { x: -direction * 20, scale: .97, autoAlpha: .55, duration: reducedMotion ? 0 : .38, ease: "power2.inOut", force3D: true }, 0);
}

function renderDetail(project) {
  detailProject = project;
  renderGallery(project);
  renderAplus(project);
  detailTitle.textContent = project.caption;
  detailCaption.textContent = project.title;
}

function openDetail(project, { updateHistory = true, trigger = null } = {}) {
  if (!project || detail.getAttribute("aria-hidden") === "false" && detailProject === project) return;
  renderDetail(project);
  detailTrigger = trigger || document.activeElement;
  detail.scrollTop = 0;
  detail.setAttribute("aria-hidden", "false");
  document.body.classList.add("detail-active");
  spiralState.paused = true;
  if (updateHistory && location.hash !== `#project/${project.slug}`) {
    history.pushState({ project: project.slug }, "", `#project/${project.slug}`);
  }

  detailTimeline?.kill();
  detailTimeline = gsap.timeline({ defaults: { ease: "power3.inOut" }, onComplete: () => detailClose.focus() })
    .set(detail, { autoAlpha: 1 })
    .fromTo(".detail-stage", { autoAlpha: 0, scale: .78, rotationX: -5 }, { autoAlpha: 1, scale: 1, rotationX: 0, duration: reducedMotion ? 0 : .75 })
    .fromTo(".detail-close", { autoAlpha: 0, scale: .4, rotation: -70 }, { autoAlpha: 1, scale: 1, rotation: 0, duration: reducedMotion ? 0 : .48, ease: "back.out(1.5)" }, "<.16")
    .fromTo([".detail-title", ".detail-caption"], { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, stagger: .06, duration: reducedMotion ? 0 : .42 }, "<.14");
}

function closeDetail({ updateHistory = true } = {}) {
  if (detail.getAttribute("aria-hidden") === "true") return;
  stopAplusAutoplay();
  galleryTransition?.kill();
  galleryAnimating = false;
  galleryDragging = false;
  detailViewport.classList.remove("is-dragging");
  detailTimeline?.kill();
  detailTimeline = gsap.timeline({
    defaults: { ease: "power3.inOut" },
    onComplete: () => {
      detail.setAttribute("aria-hidden", "true");
      document.body.classList.remove("detail-active");
      spiralState.paused = false;
      detailTrack.replaceChildren();
      detailPeekPrevCard.replaceChildren();
      detailPeekNextCard.replaceChildren();
      aplusList.replaceChildren();
      detail.classList.remove("has-aplus");
      detail.scrollTop = 0;
      detailFrames = [];
      detailTrigger?.focus?.();
      detailTrigger = null;
    }
  })
    .to([".detail-title", ".detail-caption", ".detail-close"], { autoAlpha: 0, y: -10, duration: reducedMotion ? 0 : .22 })
    .to(".detail-stage", { autoAlpha: 0, scale: .84, duration: reducedMotion ? 0 : .5 }, "<")
    .to(detail, { autoAlpha: 0, duration: reducedMotion ? 0 : .32 }, "-=.18");

  if (updateHistory && location.hash.startsWith("#project/")) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  }
}

function projectFromHash() {
  const slug = location.hash.startsWith("#project/") ? location.hash.slice(9) : "";
  return projects.find((item) => item.slug === slug);
}

spiralCards.forEach((card, index) => card.addEventListener("click", (event) => {
  event.preventDefault();
  if (didDrag) return;
  openDetail(projects[index % projects.length], { trigger: card });
}));
projectLinks.forEach((link, index) => link.addEventListener("click", (event) => {
  event.preventDefault();
  openDetail(projects[index], { trigger: link });
}));
detailClose.addEventListener("click", () => closeDetail());
detailPrev.addEventListener("click", () => goToDetailSlide(-1));
detailNext.addEventListener("click", () => goToDetailSlide(1));
detailScrollNext.addEventListener("click", () => {
  detailScrollTween?.kill();
  if (reducedMotion) {
    detail.scrollTop = aplusSection.offsetTop;
    return;
  }
  const scrollState = { top: detail.scrollTop };
  detailScrollTween = gsap.to(scrollState, {
    top: aplusSection.offsetTop,
    duration: .95,
    ease: "power3.inOut",
    overwrite: true,
    onUpdate: () => { detail.scrollTop = scrollState.top; },
    onComplete: () => { detailScrollTween = null; }
  });
});
detail.addEventListener("wheel", () => detailScrollTween?.kill(), { passive: true });
detail.addEventListener("touchstart", () => detailScrollTween?.kill(), { passive: true });
aplusList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-aplus-direction]");
  if (!button) return;
  goToAplusSlide(button.closest(".aplus-module"), Number(button.dataset.aplusDirection));
  startAplusAutoplay();
});
detail.addEventListener("click", (event) => { if (event.target === detail) closeDetail(); });
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (detail.getAttribute("aria-hidden") === "false") closeDetail();
    else if (activeMenuSubpage) closeMenuSubpage();
    else if (menu.getAttribute("aria-hidden") === "false") setMenu(false);
  }
  if (detail.getAttribute("aria-hidden") === "false" && event.key === "ArrowLeft") goToDetailSlide(-1);
  if (detail.getAttribute("aria-hidden") === "false" && event.key === "ArrowRight") goToDetailSlide(1);
});

let galleryDragStartX = 0;
let galleryDragX = 0;
let galleryDragging = false;

detailViewport.addEventListener("pointerdown", (event) => {
  if (galleryAnimating) return;
  galleryDragStartX = galleryDragX = event.clientX;
  galleryDragging = true;
  detailViewport.classList.add("is-dragging");
  detailViewport.setPointerCapture?.(event.pointerId);
  gsap.killTweensOf([detailTrack, detailStage, ...detailPeekCards]);
});
detailViewport.addEventListener("pointermove", (event) => {
  if (!galleryDragging) return;
  galleryDragX = event.clientX;
  const delta = galleryDragX - galleryDragStartX;
  const progress = clamp(0, 1, Math.abs(delta) / Math.max(detailViewport.clientWidth * .3, 1));
  const movingNext = delta < 0;
  const incomingPreview = movingNext ? detailPeekNextCard : detailPeekPrevCard;
  const outgoingPreview = movingNext ? detailPeekPrevCard : detailPeekNextCard;
  gsap.set(detailTrack, { x: delta, force3D: true });
  gsap.set(detailStage, { x: delta * .05, scale: 1 - progress * .02, force3D: true });
  gsap.set(incomingPreview, {
    x: delta * .22,
    scale: 1 + progress * .025,
    autoAlpha: 1,
    force3D: true
  });
  gsap.set(outgoingPreview, { x: delta * .04, scale: 1 - progress * .025, autoAlpha: 1 - progress * .42, force3D: true });
});
function finishGalleryDrag() {
  if (!galleryDragging) return;
  galleryDragging = false;
  detailViewport.classList.remove("is-dragging");
  const delta = galleryDragX - galleryDragStartX;
  const threshold = Math.max(50, detailViewport.clientWidth * .08);
  if (Math.abs(delta) >= threshold) {
    goToDetailSlide(delta < 0 ? 1 : -1);
  } else {
    gsap.timeline({
      defaults: { duration: reducedMotion ? 0 : .34, ease: "power3.out", overwrite: true },
      onComplete: () => gsap.set([detailStage, ...detailPeekCards], { clearProps: "transform,opacity,visibility,filter" })
    })
      .to(detailTrack, { x: 0 }, 0)
      .to(detailStage, { x: 0, scale: 1 }, 0)
      .to(detailPeekCards, { x: 0, scale: 1, autoAlpha: 1, force3D: true }, 0);
  }
}
detailViewport.addEventListener("pointerup", finishGalleryDrag);
detailViewport.addEventListener("pointercancel", finishGalleryDrag);
window.addEventListener("popstate", () => {
  const project = projectFromHash();
  project ? openDetail(project, { updateHistory: false }) : closeDetail({ updateHistory: false });
});

const loadState = { value: 0 };
gsap.to(loadState, {
  value: 100,
  duration: reducedMotion ? .1 : 1.25,
  ease: "power2.inOut",
  onUpdate: () => { counter.textContent = Math.round(loadState.value); }
});

gsap.timeline({ defaults: { ease: "power3.out" } })
  .from(".loader-mark", { scale: .68, autoAlpha: 0, duration: .9, ease: "back.out(1.45)" })
  .from(".loader-mark img", { scale: 1.18, filter: "blur(14px)", duration: .86, ease: "power3.out" }, "<")
  .to(".loader-mark img", { scale: 1.025, repeat: 1, yoyo: true, duration: .34, ease: "sine.inOut" }, "-=.2")
  .to(".loader-copy span", { autoAlpha: 1, y: 0, stagger: .09, duration: .7 }, "-=.35")
  .to([".enter-button", ".silent-enter"], { autoAlpha: 1, y: 0, stagger: .08, duration: .5 }, "-=.3");

if (!reducedMotion) {
  gsap.to(".loader-mark", { y: -7, scale: 1.018, duration: 2.25, repeat: -1, yoyo: true, ease: "sine.inOut" });
}

function animateSoundBars(active) {
  gsap.killTweensOf(".sound-toggle span");
  if (active) {
    gsap.to(".sound-toggle span", { scaleY: () => gsap.utils.random(.35, 1.5), repeat: -1, yoyo: true, duration: .28, stagger: .055, ease: "sine.inOut" });
  } else {
    gsap.to(".sound-toggle span", { scaleY: 1, duration: .25 });
  }
}

function setSoundActive(active) {
  soundToggle.setAttribute("aria-pressed", String(active));
  animateSoundBars(active);
  if (active) {
    backgroundMusic.volume = .42;
    backgroundMusic.play().catch(() => {
      soundToggle.setAttribute("aria-pressed", "false");
      animateSoundBars(false);
    });
  } else {
    backgroundMusic.pause();
  }
}

const portfolioText = document.querySelector(".portfolio-text");
portfolioText.innerHTML = [...portfolioText.textContent].map((character) => {
  const spaceClass = character === " " ? " is-space" : "";
  return `<span class="portfolio-letter${spaceClass}">${character === " " ? "&nbsp;" : character}</span>`;
}).join("");
const portfolioLetters = gsap.utils.toArray(".portfolio-letter");
const projectTitleSpans = gsap.utils.toArray(".project > span");

let brandMotionStarted = false;
function startBrandMotion() {
  if (brandMotionStarted || reducedMotion) return;
  brandMotionStarted = true;
  gsap.to(".brand", { y: 4, rotation: 1.4, repeat: -1, yoyo: true, duration: 2.8, ease: "sine.inOut" });
  gsap.to(portfolioLetters, {
    y: (index) => index % 2 ? -3 : 3,
    rotation: (index) => index % 3 - 1,
    repeat: -1,
    yoyo: true,
    duration: 1.6,
    stagger: { each: .055, from: "center" },
    ease: "sine.inOut",
    force3D: true
  });
  gsap.to(".portfolio-line", { scaleX: .62, xPercent: 18, autoAlpha: .72, repeat: -1, yoyo: true, duration: 2.2, ease: "sine.inOut", force3D: true });
  gsap.to(projectTitleSpans, {
    y: (index) => index % 2 ? -2.5 : 2.5,
    rotation: (index) => index % 3 === 0 ? -.18 : .18,
    repeat: -1,
    yoyo: true,
    duration: (index) => 2.6 + index % 4 * .18,
    stagger: { each: .08, from: "center" },
    ease: "sine.inOut",
    force3D: true
  });
}

function enterSite(event) {
  if (loader.dataset.leaving) return;
  loader.dataset.leaving = "true";
  setSoundActive(!event.currentTarget.classList.contains("silent-enter"));
  shell.setAttribute("aria-hidden", "false");
  gsap.timeline({ defaults: { ease: "power3.inOut" } })
    .to(".loader > *", { autoAlpha: 0, y: -22, stagger: .025, duration: reducedMotion ? 0 : .35 })
    .set(shell, { visibility: "visible" })
    .to(loader, { yPercent: 105, duration: reducedMotion ? 0 : .72 })
    .to(shell, { autoAlpha: 1, duration: .25 }, "<.18")
    .from([".brand", ".view-switch", ".menu-toggle", ".sound-toggle"], { y: -24, autoAlpha: 0, stagger: .055, duration: .65, ease: "power3.out" }, "<")
    .from(".showreel", { x: -48, y: 18, autoAlpha: 0, duration: .8, ease: "back.out(1.5)" }, "<.1")
    .to(spiralState, { reveal: 1, duration: reducedMotion ? 0 : 1.15, ease: "power3.out" }, "<")
    .from(spiralHint, { autoAlpha: 0, y: 10, duration: .5 }, "-=.25")
    .set(loader, { display: "none" })
    .add(() => {
      startBrandMotion();
      const project = projectFromHash();
      if (project) openDetail(project, { updateHistory: false });
    });
}
enterButtons.forEach((button) => button.addEventListener("click", enterSite));

function returnToLoader(event) {
  event.preventDefault();
  setSoundActive(false);
  if (detail.getAttribute("aria-hidden") === "false") closeDetail({ updateHistory: false });
  history.replaceState(null, "", `${location.pathname}${location.search}`);
  loader.dataset.leaving = "true";
  loader.setAttribute("aria-hidden", "false");
  shell.setAttribute("aria-hidden", "true");

  gsap.timeline({ defaults: { ease: "power3.inOut" } })
    .set(loader, { display: "grid", yPercent: 0, autoAlpha: 0 })
    .set(".loader > *", { autoAlpha: 1, y: 0 })
    .to(shell, { autoAlpha: 0, duration: reducedMotion ? 0 : .3 }, 0)
    .to(loader, { autoAlpha: 1, duration: reducedMotion ? 0 : .38 }, 0)
    .set(shell, { visibility: "hidden" })
    .add(() => { delete loader.dataset.leaving; });
}
brand.addEventListener("click", returnToLoader);

gsap.set(menu, { xPercent: 108, autoAlpha: 0 });
const menuTimeline = gsap.timeline({ paused: true, defaults: { ease: "power4.inOut" } })
  .to(menu, { xPercent: 0, autoAlpha: 1, duration: reducedMotion ? 0 : .58, force3D: true })
  .fromTo(".menu-panel nav a", { x: 36, autoAlpha: 0 }, { x: 0, autoAlpha: 1, stagger: .045, duration: reducedMotion ? 0 : .34, ease: "power3.out", force3D: true }, "-=.2")
  .fromTo(".menu-footer", { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: reducedMotion ? 0 : .3, ease: "power3.out" }, "-=.25")
  .fromTo(menuClose, { scale: .55, rotation: -35, autoAlpha: 0 }, { scale: 1, rotation: 0, autoAlpha: 1, duration: reducedMotion ? 0 : .34, ease: "back.out(1.45)" }, "-=.3");

function setMenu(open) {
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  spiralState.paused = open || document.body.classList.contains("menu-subpage-active");
  open ? menuTimeline.play() : menuTimeline.reverse();
}
menuToggle.addEventListener("click", () => setMenu(menu.getAttribute("aria-hidden") === "true"));
menuClose.addEventListener("click", () => setMenu(false));

let activeMenuSubpage = null;
let menuSubpageTimeline = null;

function openMenuSubpage(name) {
  const page = document.querySelector(`.menu-subpage[data-page="${name}"]`);
  if (!page) return;
  setMenu(false);
  activeMenuSubpage = page;
  document.body.classList.add("menu-subpage-active");
  page.setAttribute("aria-hidden", "false");
  spiralState.paused = true;
  menuSubpageTimeline?.kill();
  menuSubpageTimeline = gsap.timeline({ defaults: { ease: "power4.inOut" }, onComplete: () => page.querySelector(".menu-subpage-close")?.focus() })
    .fromTo(page, { xPercent: 8, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: reducedMotion ? 0 : .55, force3D: true })
    .fromTo(page.querySelector(".menu-subpage-close"), { scale: .55, rotation: -45, autoAlpha: 0 }, { scale: 1, rotation: 0, autoAlpha: 1, duration: reducedMotion ? 0 : .36, ease: "back.out(1.5)" }, "-=.25")
    .fromTo(page.querySelectorAll(".eyebrow, h2, .contact-email, .contact-socials, .menu-subpage-content > p:last-child"), { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: .045, duration: reducedMotion ? 0 : .4, ease: "power3.out" }, "-=.22");
}

function closeMenuSubpage() {
  if (!activeMenuSubpage) return;
  const page = activeMenuSubpage;
  menuSubpageTimeline?.kill();
  menuSubpageTimeline = gsap.timeline({
    onComplete: () => {
      page.setAttribute("aria-hidden", "true");
      document.body.classList.remove("menu-subpage-active");
      activeMenuSubpage = null;
      spiralState.paused = false;
      menuToggle.focus();
    }
  }).to(page, { xPercent: 6, autoAlpha: 0, duration: reducedMotion ? 0 : .4, ease: "power3.inOut", force3D: true });
}

menuPageLinks.forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  openMenuSubpage(link.dataset.menuPage);
}));
menuSubpageCloses.forEach((button) => button.addEventListener("click", closeMenuSubpage));
menuProjectLink.addEventListener("click", (event) => {
  event.preventDefault();
  setMenu(false);
  gsap.delayedCall(reducedMotion ? 0 : .28, () => {
    playViewSwitchSound("list");
    setView("list");
  });
});

function setView(mode) {
  const spiral = mode === "spiral";
  viewButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.view === mode));
  if (spiral === spiralState.active) return;

  if (spiral) {
    document.body.classList.add("spiral-active");
    document.body.classList.remove("list-active");
    scrollTo(0, 0);
    spiralState.active = true;
    spiralState.reveal = 0;
    gsap.set(spiralScene, { visibility: "visible" });
    gsap.to(spiralState, { reveal: 1, duration: .85, ease: "power3.out" });
    gsap.fromTo(spiralScene, { autoAlpha: 0 }, { autoAlpha: 1, duration: .45 });
  } else {
    gsap.to(spiralScene, {
      autoAlpha: 0,
      duration: .35,
      onComplete: () => {
        spiralState.active = false;
        document.body.classList.remove("spiral-active");
        document.body.classList.add("list-active");
        gsap.set(spiralScene, { visibility: "hidden" });
        scrollTo(0, 0);
        gsap.fromTo(projectLinks, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, stagger: .035, duration: .48, ease: "power2.out" });
        ScrollTrigger.refresh();
      }
    });
  }
}
viewButtons.forEach((button) => button.addEventListener("click", () => {
  const mode = button.dataset.view;
  if ((mode === "spiral") !== spiralState.active) playViewSwitchSound(mode);
  setView(mode);
}));

soundToggle.addEventListener("click", () => setSoundActive(soundToggle.getAttribute("aria-pressed") !== "true"));

let uiAudioContext = null;
function playViewSwitchSound(mode) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  uiAudioContext ||= new AudioContext();
  if (uiAudioContext.state === "suspended") uiAudioContext.resume();

  const now = uiAudioContext.currentTime;
  const gain = uiAudioContext.createGain();
  const low = uiAudioContext.createOscillator();
  const high = uiAudioContext.createOscillator();
  const ascending = mode === "spiral";
  low.type = "sine";
  high.type = "triangle";
  low.frequency.setValueAtTime(ascending ? 240 : 410, now);
  low.frequency.exponentialRampToValueAtTime(ascending ? 420 : 230, now + .18);
  high.frequency.setValueAtTime(ascending ? 520 : 760, now);
  high.frequency.exponentialRampToValueAtTime(ascending ? 760 : 480, now + .14);
  gain.gain.setValueAtTime(.0001, now);
  gain.gain.exponentialRampToValueAtTime(.055, now + .018);
  gain.gain.exponentialRampToValueAtTime(.0001, now + .22);
  low.connect(gain);
  high.connect(gain);
  gain.connect(uiAudioContext.destination);
  low.start(now);
  high.start(now + .012);
  low.stop(now + .23);
  high.stop(now + .2);
}

const mm = gsap.matchMedia();
mm.add({ desktop: "(min-width: 761px)", reduce: "(prefers-reduced-motion: reduce)" }, (context) => {
  const { desktop, reduce } = context.conditions;
  if (desktop && !reduce) {
    const xTo = gsap.quickTo(".cursor-orb", "x", { duration: .35, ease: "power3.out" });
    const yTo = gsap.quickTo(".cursor-orb", "y", { duration: .35, ease: "power3.out" });
    const onMove = (event) => { xTo(event.clientX); yTo(event.clientY); };
    const positionPreview = (link) => {
      const title = link.querySelector("span") || link;
      const rect = title.getBoundingClientRect();
      const previewWidth = clamp(220, 300, innerWidth * .16);
      const previewHeight = previewWidth / 1.7;
      const gap = clamp(22, 42, innerWidth * .022);
      const x = clamp(previewWidth / 2 + 18, innerWidth - previewWidth / 2 - 18, rect.right + gap + previewWidth / 2);
      const y = clamp(previewHeight / 2 + 18, innerHeight - previewHeight / 2 - 18, rect.top + rect.height / 2);
      gsap.to(listPreview, {
        x,
        y,
        rotation: clamp(-2.4, 2.4, (y / innerHeight - .5) * 4.8),
        duration: .44,
        ease: "power3.out",
        overwrite: "auto",
        force3D: true
      });
    };
    const showPreview = (event) => {
      const link = event.currentTarget;
      if (listPreviewImage.getAttribute("src") !== link.dataset.image) listPreviewImage.src = link.dataset.image;
      positionPreview(link);
      gsap.fromTo(listPreview,
        { autoAlpha: 0, scale: .82 },
        { autoAlpha: 1, scale: 1, duration: .42, ease: "power3.out", overwrite: "auto", force3D: true }
      );
    };
    const hidePreview = () => gsap.to(listPreview, { autoAlpha: 0, scale: .88, duration: .24, ease: "power2.out", overwrite: true });
    const previewHandlers = projectLinks.map((link) => {
      const onFocus = () => showPreview({ currentTarget: link });
      link.addEventListener("mouseenter", showPreview);
      link.addEventListener("mouseleave", hidePreview);
      link.addEventListener("focus", onFocus);
      link.addEventListener("blur", hidePreview);
      return { link, onFocus };
    });
    gsap.set(listPreview, { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" });
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      previewHandlers.forEach(({ link, onFocus }) => {
        link.removeEventListener("mouseenter", showPreview);
        link.removeEventListener("mouseleave", hidePreview);
        link.removeEventListener("focus", onFocus);
        link.removeEventListener("blur", hidePreview);
      });
      gsap.set(listPreview, { autoAlpha: 0 });
    };
  }
});

gsap.timeline({
  scrollTrigger: { trigger: ".about", start: "top 78%", toggleActions: "play none none reverse" }
})
  .from(".about .eyebrow", { y: 20, autoAlpha: 0, duration: .45 })
  .from(".about h1", { y: 90, autoAlpha: 0, rotationX: -12, duration: .95, ease: "power3.out" }, "-=.15")
  .from(".about > p:last-child", { y: 35, autoAlpha: 0, duration: .65 }, "-=.4");

let resizeFrame = 0;
window.addEventListener("resize", () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => {
    refreshSpiralLayout();
    updateSpiral();
    if (detail.getAttribute("aria-hidden") === "false" && detailFrames.length) {
      updateDetailPreviews();
      fitDetailStage(detailFrames[detailSlideIndex]);
    }
  });
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) gsap.ticker.sleep();
  else gsap.ticker.wake();
});
window.addEventListener("load", () => {
  updateSpiral();
  ScrollTrigger.refresh();
});
