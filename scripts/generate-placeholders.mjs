// scripts/generate-placeholders.mjs
// Run: node scripts/generate-placeholders.mjs
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";

const PUBLIC = join(import.meta.dirname, "..", "public", "images");

function ensureDir(path) {
  mkdirSync(dirname(path), { recursive: true });
}

// ---- SVG Generators ----

function productSVG({ title, subtitle, w = 600, h = 800, hue, accent, motif }) {
  const bg1 = hue;
  const bg2 = accent;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
    <linearGradient id="overlay" x1="0%" y1="60%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3D2817" stop-opacity="0"/>
      <stop offset="100%" stop-color="#2C3E36" stop-opacity="0.6"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  ${motif}
  <rect width="${w}" height="${h}" fill="url(#overlay)"/>
  <text x="${w / 2}" y="${h - 80}" text-anchor="middle" font-family="Georgia,serif" font-size="28" fill="#FAF5ED" font-weight="600">${title}</text>
  <text x="${w / 2}" y="${h - 48}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="16" fill="#D4C5A9">${subtitle}</text>
</svg>`;
}

function sceneSVG({ title, subtitle, w = 800, h = 600, hue, accent, motif }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${hue}"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
    <linearGradient id="overlay" x1="0%" y1="60%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3D2817" stop-opacity="0"/>
      <stop offset="100%" stop-color="#2C3E36" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  ${motif}
  <rect width="${w}" height="${h}" fill="url(#overlay)"/>
  <text x="${w / 2}" y="${h - 60}" text-anchor="middle" font-family="Georgia,serif" font-size="24" fill="#FAF5ED" font-weight="600">${title}</text>
  <text x="${w / 2}" y="${h - 32}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" fill="#D4C5A9">${subtitle}</text>
</svg>`;
}

function squareSVG({ title, subtitle, size = 600, hue, accent, motif }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${hue}"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#bg)"/>
  ${motif}
  <text x="${size / 2}" y="${size / 2 - 10}" text-anchor="middle" font-family="Georgia,serif" font-size="22" fill="#FAF5ED" font-weight="600">${title}</text>
  <text x="${size / 2}" y="${size / 2 + 20}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" fill="#FAF5ED" opacity="0.7">${subtitle}</text>
</svg>`;
}

// Botanical motifs
const leafMotif = (cx, cy, s = 1, rot = 0) =>
  `<g transform="translate(${cx},${cy}) rotate(${rot}) scale(${s})">
    <path d="M0-60C-30-40,-40 0,-20 30C-10 50,0 60,0 60S10 50,20 30C40 0,30-40,0-60Z" fill="#FAF5ED" opacity="0.08"/>
    <path d="M0 60V-30" stroke="#FAF5ED" stroke-width="1.5" opacity="0.1" stroke-linecap="round"/>
    <path d="M0-10C-12-18,-18-14,-22-6" stroke="#FAF5ED" stroke-width="1" opacity="0.08" fill="none" stroke-linecap="round"/>
    <path d="M0 10C12 2,18 6,22 14" stroke="#FAF5ED" stroke-width="1" opacity="0.08" fill="none" stroke-linecap="round"/>
  </g>`;

const fernMotif = (cx, cy, s = 1, rot = 0) =>
  `<g transform="translate(${cx},${cy}) rotate(${rot}) scale(${s})">
    <path d="M0 80V-60" stroke="#FAF5ED" stroke-width="2" opacity="0.1" stroke-linecap="round"/>
    ${[-50, -30, -10, 10, 30, 50].map((y, i) =>
      `<path d="M0 ${y}C${i % 2 === 0 ? '-' : ''}25 ${y - 15},${i % 2 === 0 ? '-' : ''}35 ${y - 5},${i % 2 === 0 ? '-' : ''}20 ${y + 5}" stroke="#FAF5ED" stroke-width="1.2" opacity="0.07" fill="none" stroke-linecap="round"/>`
    ).join("\n    ")}
  </g>`;

const circlePattern = (cx, cy, r, count = 8) => {
  let result = "";
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    const size = 3 + Math.random() * 6;
    result += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${size.toFixed(1)}" fill="#FAF5ED" opacity="${(0.04 + Math.random() * 0.06).toFixed(2)}"/>`;
  }
  return result;
};

const fabricTexture = (w, h, density = 30) => {
  let lines = "";
  for (let i = 0; i < density; i++) {
    const x1 = Math.random() * w;
    const y1 = Math.random() * h;
    const x2 = x1 + (Math.random() - 0.5) * 80;
    const y2 = y1 + (Math.random() - 0.5) * 80;
    lines += `<line x1="${x1.toFixed(0)}" y1="${y1.toFixed(0)}" x2="${x2.toFixed(0)}" y2="${y2.toFixed(0)}" stroke="#FAF5ED" stroke-width="0.5" opacity="${(0.03 + Math.random() * 0.05).toFixed(2)}"/>`;
  }
  return lines;
};

const wavePattern = (w, h) => {
  let paths = "";
  for (let i = 0; i < 5; i++) {
    const y = h * 0.3 + i * 40;
    paths += `<path d="M0 ${y} Q${w * 0.25} ${y - 20 + i * 5},${w * 0.5} ${y} T${w} ${y}" stroke="#FAF5ED" stroke-width="1" opacity="${(0.04 + i * 0.01).toFixed(2)}" fill="none"/>`;
  }
  return paths;
};

// ---- Generate All Images ----

const images = [];

// Products
const productConfigs = [
  { file: "products/long-shirt-1.svg", title: "Botanical Print Long Shirt", subtitle: "Pure Hemp · Botanical Printed", hue: "#5A8A76", accent: "#3D6B5A", motifFn: () => leafMotif(300, 300, 1.5, 15) + leafMotif(450, 200, 1, -20) + fernMotif(150, 400, 0.8, 10) + fabricTexture(600, 800, 25) },
  { file: "products/long-shirt-2.svg", title: "Earthy Tunic Shirt", subtitle: "Bamboo Fabric · Natural Indigo", hue: "#4A6A7A", accent: "#3D5A6A", motifFn: () => wavePattern(600, 800) + leafMotif(300, 250, 1.2, 0) + circlePattern(300, 400, 120, 10) },
  { file: "products/dress-1.svg", title: "Forest Fern Dress", subtitle: "Hemp · Fern Botanical Print", hue: "#5A7A5E", accent: "#3D6040", motifFn: () => fernMotif(300, 300, 1.8, 0) + fernMotif(150, 500, 1, 15) + fernMotif(450, 450, 1.2, -10) + fabricTexture(600, 800, 20) },
  { file: "products/dress-2.svg", title: "Sunset Wrap Dress", subtitle: "Banana Fabric · Terracotta Dyed", hue: "#B8705A", accent: "#9A5040", motifFn: () => leafMotif(200, 300, 1.3, 25) + leafMotif(400, 250, 1, -15) + wavePattern(600, 800) + circlePattern(300, 500, 100, 12) },
  { file: "products/bottom-1.svg", title: "Hemp Wide-Leg Pants", subtitle: "Pure Hemp · Walnut Dyed", hue: "#8A7E60", accent: "#6B6048", motifFn: () => fabricTexture(600, 800, 40) + leafMotif(300, 350, 1, 0) + circlePattern(300, 250, 80, 6) },
  { file: "products/bottom-2.svg", title: "Bamboo Lounge Pants", subtitle: "Bamboo · Chlorophyll Dyed", hue: "#7A9A6E", accent: "#5A7A4E", motifFn: () => wavePattern(600, 800) + leafMotif(200, 400, 1.2, 20) + leafMotif(400, 300, 0.9, -25) + fabricTexture(600, 800, 15) },
  { file: "products/bag-1.svg", title: "Botanical Tote Bag", subtitle: "Hemp Canvas · Leaf Printed", hue: "#9A8E70", accent: "#7A6E50", motifFn: () => leafMotif(300, 300, 2, 0) + leafMotif(180, 450, 1.2, 30) + leafMotif(420, 420, 1, -20) + fabricTexture(600, 800, 30) },
  { file: "products/bag-2.svg", title: "Banana Fiber Crossbody", subtitle: "Banana Fiber · Handwoven", hue: "#B08A60", accent: "#8A6A40", motifFn: () => wavePattern(600, 800) + circlePattern(300, 350, 60, 8) + circlePattern(300, 350, 120, 12) + fabricTexture(600, 800, 35) },
  { file: "products/coming-soon-mens.svg", title: "Men's Hemp Shirts", subtitle: "Coming Soon", hue: "#7A8A7E", accent: "#5A6A5E", motifFn: () => leafMotif(300, 350, 1.5, 0) + fabricTexture(600, 800, 20) },
  { file: "products/coming-soon-couple.svg", title: "Couple / Partner Outfits", subtitle: "Coming Soon", hue: "#9A7A6A", accent: "#7A5A4A", motifFn: () => leafMotif(220, 350, 1.3, 15) + leafMotif(380, 350, 1.3, -15) + circlePattern(300, 400, 100, 10) },
];

for (const cfg of productConfigs) {
  const path = join(PUBLIC, cfg.file);
  ensureDir(path);
  const svg = productSVG({
    title: cfg.title,
    subtitle: cfg.subtitle,
    hue: cfg.hue,
    accent: cfg.accent,
    motif: cfg.motifFn(),
  });
  writeFileSync(path, svg);
  images.push(cfg.file);
}

// Process
const processConfigs = [
  { file: "process/sourcing.svg", title: "Ethical Sourcing", subtitle: "Hemp · Bamboo · Banana fiber from trusted farms", hue: "#7A9A5E", accent: "#5A7A3E", motifFn: () => leafMotif(400, 250, 2, 0) + leafMotif(200, 350, 1.5, 25) + leafMotif(600, 300, 1.2, -15) + circlePattern(400, 300, 150, 15) },
  { file: "process/dyeing.svg", title: "Natural Dyeing", subtitle: "Plant-based pigments · Zero chemical waste", hue: "#6A5A8A", accent: "#8A6A5A", motifFn: () => wavePattern(800, 600) + circlePattern(400, 300, 100, 10) + circlePattern(400, 300, 180, 14) + circlePattern(250, 200, 60, 6) },
  { file: "process/printing.svg", title: "Botanical Printing", subtitle: "Real leaves & flowers pressed into fabric", hue: "#5A8A5E", accent: "#4A7A4E", motifFn: () => fernMotif(400, 280, 2, 0) + leafMotif(200, 200, 1.4, 30) + leafMotif(600, 350, 1.2, -20) + fernMotif(600, 200, 1, 15) },
  { file: "process/crafting.svg", title: "Artisan Craftsmanship", subtitle: "Handmade · Small-batch · Fair-wage production", hue: "#8A7A5A", accent: "#6A5A3A", motifFn: () => fabricTexture(800, 600, 50) + circlePattern(400, 300, 80, 8) + leafMotif(400, 300, 1.5, 0) },
];

for (const cfg of processConfigs) {
  const path = join(PUBLIC, cfg.file);
  ensureDir(path);
  const svg = sceneSVG({
    title: cfg.title,
    subtitle: cfg.subtitle,
    hue: cfg.hue,
    accent: cfg.accent,
    motif: cfg.motifFn(),
  });
  writeFileSync(path, svg);
  images.push(cfg.file);
}

// Materials
const materialConfigs = [
  { file: "materials/hemp.svg", title: "Hemp", subtitle: "The ancient super-fiber · 10,000+ years of use", hue: "#3D6B5A", accent: "#5A8A76", motifFn: () => leafMotif(300, 250, 2.5, 0) + leafMotif(150, 400, 1.5, 30) + leafMotif(450, 380, 1.3, -20) + fabricTexture(600, 600, 30) + circlePattern(300, 300, 200, 16) },
  { file: "materials/bamboo.svg", title: "Bamboo", subtitle: "Nature's fastest renewable resource", hue: "#5A8A4A", accent: "#7AAA6A", motifFn: () => {
    let stalks = "";
    for (let i = 0; i < 8; i++) {
      const x = 80 + i * 65;
      stalks += `<line x1="${x}" y1="600" x2="${x}" y2="${60 + Math.random() * 100}" stroke="#FAF5ED" stroke-width="${2 + Math.random() * 3}" opacity="${(0.05 + Math.random() * 0.08).toFixed(2)}" stroke-linecap="round"/>`;
      for (let j = 1; j < 5; j++) {
        const y = 600 - j * 110;
        if (y > 60) stalks += `<line x1="${x - 12}" y1="${y}" x2="${x + 12}" y2="${y}" stroke="#FAF5ED" stroke-width="1" opacity="0.04"/>`;
      }
    }
    return stalks + leafMotif(300, 250, 1.5, 10);
  }},
  { file: "materials/banana.svg", title: "Banana Fabric", subtitle: "Beauty from agricultural waste", hue: "#B08A50", accent: "#D4A870", motifFn: () => {
    let bigLeaves = "";
    for (let i = 0; i < 3; i++) {
      const cx = 150 + i * 150;
      const cy = 200 + i * 80;
      bigLeaves += `<ellipse cx="${cx}" cy="${cy}" rx="60" ry="100" fill="#FAF5ED" opacity="0.06" transform="rotate(${-20 + i * 20} ${cx} ${cy})"/>`;
      bigLeaves += `<line x1="${cx}" y1="${cy - 80}" x2="${cx}" y2="${cy + 80}" stroke="#FAF5ED" stroke-width="1.5" opacity="0.05" transform="rotate(${-20 + i * 20} ${cx} ${cy})" stroke-linecap="round"/>`;
    }
    return bigLeaves + wavePattern(600, 600) + circlePattern(300, 300, 150, 12);
  }},
];

for (const cfg of materialConfigs) {
  const path = join(PUBLIC, cfg.file);
  ensureDir(path);
  const svg = squareSVG({
    title: cfg.title,
    subtitle: cfg.subtitle,
    hue: cfg.hue,
    accent: cfg.accent,
    motif: cfg.motifFn(),
  });
  writeFileSync(path, svg);
  images.push(cfg.file);
}

// Hero background
{
  const path = join(PUBLIC, "hero", "hero-bg.svg");
  ensureDir(path);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#E8DFD0"/>
      <stop offset="50%" stop-color="#F5F0E8"/>
      <stop offset="100%" stop-color="#FAF5ED"/>
    </linearGradient>
    <radialGradient id="glow1" cx="20%" cy="30%" r="40%">
      <stop offset="0%" stop-color="#3D6B5A" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#3D6B5A" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="75%" cy="60%" r="35%">
      <stop offset="0%" stop-color="#B8705A" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#B8705A" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#bg)"/>
  <rect width="1920" height="1080" fill="url(#glow1)"/>
  <rect width="1920" height="1080" fill="url(#glow2)"/>
  ${leafMotif(250, 300, 3, 15)}
  ${leafMotif(1650, 250, 2.5, -20)}
  ${fernMotif(800, 600, 2, 10)}
  ${fernMotif(1400, 400, 1.8, -15)}
  ${leafMotif(500, 800, 2, 35)}
  ${leafMotif(1200, 750, 1.5, -30)}
  ${circlePattern(960, 540, 300, 20)}
  ${circlePattern(400, 300, 150, 10)}
  ${circlePattern(1500, 700, 180, 12)}
  ${fabricTexture(1920, 1080, 60)}
</svg>`;
  writeFileSync(path, svg);
  images.push("hero/hero-bg.svg");
}

// About page — founder & lifestyle
const aboutConfigs = [
  { file: "about/founder.svg", title: "The Founder", subtitle: "A journey from nature to fashion", hue: "#9A8A70", accent: "#7A6A50", motifFn: () => leafMotif(300, 350, 1.5, 0) + circlePattern(300, 350, 100, 8) + fabricTexture(600, 800, 15) },
  { file: "about/lifestyle.svg", title: "Living Consciously", subtitle: "Fashion meets mindful living", hue: "#7A9A6E", accent: "#5A7A4E", motifFn: () => fernMotif(300, 350, 1.5, 0) + leafMotif(450, 250, 1, -20) + wavePattern(600, 800) },
];

for (const cfg of aboutConfigs) {
  const path = join(PUBLIC, cfg.file);
  ensureDir(path);
  const svg = productSVG({
    title: cfg.title,
    subtitle: cfg.subtitle,
    hue: cfg.hue,
    accent: cfg.accent,
    motif: cfg.motifFn(),
  });
  writeFileSync(path, svg);
  images.push(cfg.file);
}

// Instagram grid (6 images)
const instaColors = [
  { hue: "#5A8A76", accent: "#3D6B5A" },
  { hue: "#B8705A", accent: "#9A5040" },
  { hue: "#7A9A5E", accent: "#5A7A3E" },
  { hue: "#B08A60", accent: "#8A6A40" },
  { hue: "#5A8A5E", accent: "#3D6040" },
  { hue: "#9A7A6A", accent: "#7A5A4A" },
];

const instaMotifs = [
  () => leafMotif(200, 200, 2, 0) + fabricTexture(400, 400, 15),
  () => fernMotif(200, 200, 1.5, 10) + circlePattern(200, 200, 80, 8),
  () => leafMotif(150, 200, 1.3, 20) + leafMotif(280, 180, 1, -15),
  () => wavePattern(400, 400) + circlePattern(200, 200, 100, 10),
  () => fernMotif(200, 180, 1.8, 0) + fabricTexture(400, 400, 20),
  () => leafMotif(200, 200, 1.8, -10) + circlePattern(200, 200, 60, 6),
];

for (let i = 0; i < 6; i++) {
  const path = join(PUBLIC, "instagram", `insta-${i + 1}.svg`);
  ensureDir(path);
  const svg = squareSVG({
    title: "",
    subtitle: "",
    size: 400,
    hue: instaColors[i].hue,
    accent: instaColors[i].accent,
    motif: instaMotifs[i](),
  });
  writeFileSync(path, svg);
  images.push(`instagram/insta-${i + 1}.svg`);
}

// Sustainability / behind-the-scenes (6 images)
const susBehindScenes = [
  { title: "Fabric Sourcing", hue: "#7A9A5E", accent: "#5A7A3E" },
  { title: "Dye Preparation", hue: "#6A5A8A", accent: "#8A6A5A" },
  { title: "Leaf Selection", hue: "#5A8A5E", accent: "#4A7A4E" },
  { title: "Hand Stitching", hue: "#8A7A5A", accent: "#6A5A3A" },
  { title: "Quality Check", hue: "#9A8A70", accent: "#7A6A50" },
  { title: "Final Touch", hue: "#7A8A7E", accent: "#5A6A5E" },
];

for (let i = 0; i < 6; i++) {
  const path = join(PUBLIC, "sustainability", `bts-${i + 1}.svg`);
  ensureDir(path);
  const svg = sceneSVG({
    title: susBehindScenes[i].title,
    subtitle: "Behind the scenes",
    w: 600,
    h: 450,
    hue: susBehindScenes[i].hue,
    accent: susBehindScenes[i].accent,
    motif: fabricTexture(600, 450, 20) + leafMotif(300, 200, 1.2, i * 15) + circlePattern(300, 225, 80, 8),
  });
  writeFileSync(path, svg);
  images.push(`sustainability/bts-${i + 1}.svg`);
}

console.log(`✅ Generated ${images.length} placeholder images:`);
images.forEach((img) => console.log(`   public/images/${img}`));
