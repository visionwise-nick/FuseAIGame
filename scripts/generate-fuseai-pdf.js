#!/usr/bin/env node
/**
 * FuseAI BP → 逐章截图 → 16:9 PDF
 * 完整正式版（含天使轮，不含财务预测），不含闯关闸门与 Demo。
 */
const puppeteer = require('puppeteer-core');
const sharp = require('sharp');
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'index.html');
const OUTPUT_PDF = path.join(ROOT, 'FuseAI商业计划书-BP正式版.pdf');
const TMP_DIR = path.join(__dirname, '.pdf-slides');
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const VIEWPORT_W = 1440;
const VIEWPORT_H = 810;
const SCALE = 1;
const SLIDE_BG = { r: 240, g: 244, b: 248, alpha: 1 };

const EXCLUDE_IDS = new Set([
  'gate-finance', 'gate-market', 'gate-ecosystem', 'gate-success', 'gate-boss',
  's-demo', 's-demo-code',
]);

const CHAPTERS = [
  { id: 's-hero', title: '封面' },
  { id: 's-thesis-brief', title: '总纲 · 四条线' },
  { id: 's-market-opportunity', title: '百年变局' },
  { id: 's-ai-evolution', title: 'AI 演进' },
  { id: 's-market-global', title: 'AI 互动内容生成市场' },
  { id: 's-console-platform', title: '赛道龙头' },
  { id: 's-market-vs', title: '破局点' },
  { id: 's-model-compare', title: '模式对比' },
  { id: 's-solution', title: '解决方案' },
  { id: 's-fuse-store-reserved', title: '共用后台' },
  { id: 's-hardware', title: '多端触达 · PlayCanvas' },
  { id: 's-game-1', title: '互动一创' },
  { id: 's-game-2', title: '互动二创' },
  { id: 's-game-n', title: '互动 N 创' },
  { id: 's-ip-plan-reserved', title: '示范模板库' },
  { id: 's-why-success', title: '为什么成功' },
  { id: 's-ai-native-business', title: '四条线 Token 引擎' },
  { id: 's-timing', title: '时机' },
  { id: 's-team', title: '人才团队' },
  { id: 's-milestones', title: '里程碑' },
  { id: 's-fiveyear', title: '六年路径' },
  { id: 's-pre-a', title: '天使轮' },
  { id: 's-monetization-benchmark', title: '变现档位' },
  { id: 's-vision', title: '愿景' },
  { id: 's-core-thesis', title: '核心论点' },
];

const EXPORT_STYLE = `
  body.mode-gate-open, body, html {
    overflow: visible !important;
    height: auto !important;
    background: #f0f4f8 !important;
  }
  #mode-gate, .mode-gate-overlay,
  #bp-nav, #read-progress, #scroll-cta, #bp-mobile-menu,
  #interaction-fab, #toast-container, #quest-hud, #achievement-toast,
  #mesh-canvas { display: none !important; }

  :root { --bp-sidebar-gutter: 0px !important; }

  html { font-size: 100% !important; }
  body.pdf-export { zoom: 1 !important; }

  .bp-main-safe {
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 0 !important;
  }

  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
  .reveal { opacity: 1 !important; transform: none !important; }

  .ppt-hidden-chapter { display: none !important; }
`;

async function preparePage(page) {
  await page.addStyleTag({ content: EXPORT_STYLE });

  await page.evaluate(() => {
    document.body.classList.add('pdf-export');
    document.body.classList.remove('mode-gate-open');
    document.body.classList.add('mode-normal');
    document.body.classList.remove('mode-quest');
    window.__BP_EARLY_MODE = 'normal';

    document.querySelectorAll('details').forEach(el => (el.open = true));
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));

    document.querySelectorAll('#mode-gate, .mode-gate-overlay, #bp-nav, #read-progress, #scroll-cta, #bp-mobile-menu, #interaction-fab, #toast-container, #quest-hud, #achievement-toast, #mesh-canvas').forEach(el => el.remove());

    ['gate-finance', 'gate-market', 'gate-ecosystem', 'gate-success', 'gate-boss', 's-demo', 's-demo-code'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });

    const hero = document.getElementById('s-hero');
    if (hero) {
      hero.querySelectorAll('#hero-normal-btn, #hero-start-btn, .secret-arrow-hint').forEach(el => (el.style.display = 'none'));
    }

    document.body.style.overflow = 'visible';
    document.documentElement.style.overflow = 'visible';
  });

  await new Promise(r => setTimeout(r, 1000));
}

async function showOnlyChapter(page, chapterId, allIds) {
  await page.evaluate(({ activeId, ids }) => {
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (id === activeId) {
        el.classList.remove('ppt-hidden-chapter');
        el.style.display = '';
      } else {
        el.classList.add('ppt-hidden-chapter');
        el.style.display = 'none';
      }
    });
    window.scrollTo(0, 0);
  }, { activeId: chapterId, ids: allIds });
  await new Promise(r => setTimeout(r, 500));
}

async function getChapterRect(page, chapterId) {
  return page.evaluate(id => {
    const el = document.getElementById(id);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      top: Math.floor(r.top + window.scrollY),
      height: Math.ceil(r.height),
    };
  }, chapterId);
}

function findBreakInRange(blocks, from, to, chapterTop, chapterBottom) {
  const searchFrom = from + Math.floor(VIEWPORT_H * 0.58);
  const searchTo = Math.min(to, chapterBottom);
  let best = to;
  let bestGap = -1;

  const inner = blocks.filter(b => b.top >= chapterTop && b.bottom <= chapterBottom + 50);
  for (let i = 0; i < inner.length - 1; i++) {
    const gapMid = Math.floor((inner[i].bottom + inner[i + 1].top) / 2);
    if (gapMid >= searchFrom && gapMid <= searchTo) {
      const gap = inner[i + 1].top - inner[i].bottom;
      if (gap > bestGap) { bestGap = gap; best = gapMid; }
    }
  }
  if (bestGap < 0) {
    for (const b of inner) {
      if (b.top >= searchFrom && b.top <= searchTo) { best = b.top; break; }
    }
  }
  if (best <= from) best = to;
  return Math.min(best, chapterBottom);
}

async function captureChapter(page, chapter, allIds) {
  await showOnlyChapter(page, chapter.id, allIds);

  const rect = await getChapterRect(page, chapter.id);
  if (!rect || rect.height < 20) return [];

  const blocks = await page.evaluate(id => {
    const root = document.getElementById(id);
    if (!root) return [];
    const out = [];
    root.querySelectorAll('.glass, details, article, .grid > div, .grid > div > div').forEach(el => {
      if (getComputedStyle(el).display === 'none') return;
      const r = el.getBoundingClientRect();
      const t = r.top + window.scrollY;
      const b = r.bottom + window.scrollY;
      if (b - t > 40) out.push({ top: Math.floor(t), bottom: Math.ceil(b) });
    });
    return out.sort((a, b) => a.top - b.top);
  }, chapter.id);

  const { top: chapterTop, height: chapterHeight } = rect;
  const chapterBottom = chapterTop + chapterHeight;
  const images = [];
  const slideStarts = [chapterTop];
  let pos = chapterTop;

  while (pos + VIEWPORT_H < chapterBottom - 40) {
    const pageEnd = Math.min(pos + VIEWPORT_H, chapterBottom);
    const next = findBreakInRange(blocks, pos, pageEnd, chapterTop, chapterBottom);
    if (next >= chapterBottom - 40 || next <= pos) break;
    slideStarts.push(next);
    pos = next;
  }

  for (let i = 0; i < slideStarts.length; i++) {
    const scrollY = slideStarts[i];
    const segmentBottom = i + 1 < slideStarts.length ? slideStarts[i + 1] : chapterBottom;
    const clipH = Math.min(VIEWPORT_H, Math.max(1, Math.ceil(segmentBottom - scrollY)));
    const pngPath = path.join(TMP_DIR, `${chapter.id}-${i}.png`);
    const jpgPath = path.join(TMP_DIR, `${chapter.id}-${i}.jpg`);

    await page.evaluate(y => window.scrollTo(0, y), scrollY);
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({
      path: pngPath,
      clip: { x: 0, y: scrollY, width: VIEWPORT_W, height: clipH },
    });

    let pipeline = sharp(pngPath);
    if (clipH < VIEWPORT_H) {
      pipeline = pipeline.extend({
        bottom: VIEWPORT_H - clipH,
        background: SLIDE_BG,
      });
    }
    await pipeline.jpeg({ quality: 90, mozjpeg: true }).toFile(jpgPath);
    fs.unlinkSync(pngPath);
    images.push(jpgPath);
  }

  return images;
}

function assemblePdf(imagePaths) {
  const manifest = path.join(TMP_DIR, 'manifest.json');
  fs.writeFileSync(manifest, JSON.stringify({ images: imagePaths, output: OUTPUT_PDF }));

  const py = `
import json, sys
from PIL import Image

data = json.load(open(sys.argv[1], encoding='utf-8'))
pages = []
for p in data['images']:
    im = Image.open(p).convert('RGB')
    pages.append(im)
if not pages:
    raise SystemExit('no pages')
first, rest = pages[0], pages[1:]
first.save(data['output'], save_all=True, append_images=rest, resolution=144.0)
print(len(pages))
`;
  const result = spawnSync('python3', ['-c', py, manifest], { encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || 'PDF assemble failed');
  }
  return Number(String(result.stdout).trim());
}

async function run() {
  if (fs.existsSync(TMP_DIR)) fs.rmSync(TMP_DIR, { recursive: true });
  fs.mkdirSync(TMP_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.emulateMediaType('screen');
  await page.setViewport({ width: VIEWPORT_W, height: VIEWPORT_H, deviceScaleFactor: SCALE });

  console.log('加载 BP 页面...');
  await page.goto(`file://${HTML_PATH}`, { waitUntil: 'networkidle2', timeout: 120000 });
  await new Promise(r => setTimeout(r, 3000));
  await preparePage(page);

  const allIds = CHAPTERS.map(c => c.id).filter(id => !EXCLUDE_IDS.has(id));
  const allImages = [];

  for (const ch of CHAPTERS) {
    if (EXCLUDE_IDS.has(ch.id)) continue;
    const exists = await page.$(`#${ch.id}`);
    if (!exists) {
      console.log(`\n跳过 ${ch.title}（页面中不存在）`);
      continue;
    }
    await exists.dispose();

    process.stdout.write(`\n📌 ${ch.title}`);
    const imgs = await captureChapter(page, ch, allIds);
    allImages.push(...imgs);
    process.stdout.write(` → ${imgs.length} 页`);
  }

  console.log('\n\n合并 PDF...');
  await browser.close();

  const pageCount = assemblePdf(allImages);
  fs.rmSync(TMP_DIR, { recursive: true, force: true });

  const stat = fs.statSync(OUTPUT_PDF);
  fs.copyFileSync(OUTPUT_PDF, path.join(ROOT, 'FuseAI-BP.pdf'));
  console.log(`\n✅ PDF 已生成: ${OUTPUT_PDF}`);
  console.log(`   同步部署文件: ${path.join(ROOT, 'FuseAI-BP.pdf')}`);
  console.log(`   ${CHAPTERS.length} 章 / ${pageCount} 页 / ${(stat.size / 1024 / 1024).toFixed(1)} MB`);
}

run().catch(err => {
  console.error('生成失败:', err);
  process.exit(1);
});
