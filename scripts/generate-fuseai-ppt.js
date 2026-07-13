#!/usr/bin/env node
/**
 * FuseAI BP → 横版 PPT（16:9）
 * - 逐章独立渲染，章节之间零混杂
 * - 每章第一页必为新 slide
 * - 放大字号/zoom，适合投屏
 */
const puppeteer = require('puppeteer-core');
const PptxGenJS = require('pptxgenjs');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'index.html');
const OUTPUT_PPT = path.join(ROOT, '商业计划书-FuseAI-离线版.pptx');
const TMP_DIR = path.join(__dirname, '.ppt-slides');
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const VIEWPORT_W = 1920;
const VIEWPORT_H = 1080;
const SCALE = 2;
const CONTENT_ZOOM = 1.55; // 投屏字号放大

const EXCLUDE_IDS = new Set([
  's-finance', 's-valuation', 's-pre-a',
  'gate-finance', 'gate-market', 'gate-ecosystem', 'gate-success', 'gate-boss',
  's-demo', 's-demo-code',
]);

const CHAPTERS = [
  { id: 's-hero', title: '封面' },
  { id: 's-market-opportunity', title: '百年变局' },
  { id: 's-ai-evolution', title: 'AI 演进' },
  { id: 's-market-global', title: 'AI 游戏市场' },
  { id: 's-console-platform', title: '龙头启发' },
  { id: 's-market-vs', title: '破局点' },
  { id: 's-model-compare', title: '模式对比' },
  { id: 's-solution', title: '解决方案' },
  { id: 's-hardware', title: 'Fuse PlayCanvas' },
  { id: 's-fuse-store-reserved', title: 'Fuse Store' },
  { id: 's-game-1', title: '一创' },
  { id: 's-game-2', title: '二创' },
  { id: 's-game-n', title: 'N 创' },
  { id: 's-ip-plan-reserved', title: 'Fuse IP' },
  { id: 's-why-success', title: '为什么成功' },
  { id: 's-ai-native-business', title: 'AI Native 商业模式' },
  { id: 's-timing', title: '时机' },
  { id: 's-team', title: '人才团队' },
  { id: 's-milestones', title: '里程碑' },
  { id: 's-fiveyear', title: '六年路径' },
  { id: 's-nintendo', title: '任天堂对标' },
  { id: 's-vision', title: '愿景' },
];

const PPT_STYLE = `
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

  /* 铺满 + 投屏放大 */
  html { font-size: 112% !important; }
  body.ppt-export { zoom: ${CONTENT_ZOOM}; }

  .bp-main-safe, .bp-wrap, main {
    max-width: 100% !important;
    width: 100% !important;
    margin: 0 !important;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
  .max-w-7xl, .max-w-6xl, .max-w-5xl, .max-w-4xl, .max-w-3xl, .max-w-2xl {
    max-width: 100% !important;
    width: 100% !important;
  }
  .section-pad {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
  .text-sm { font-size: 0.95rem !important; }
  .text-xs { font-size: 0.82rem !important; }
  h2.text-2xl, h2 { font-size: 2.1rem !important; line-height: 1.25 !important; }
  h3 { font-size: 1.45rem !important; }

  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
  .reveal { opacity: 1 !important; transform: none !important; }

  /* 非当前章节隐藏 */
  .ppt-hidden-chapter { display: none !important; }
`;

async function preparePage(page) {
  await page.addStyleTag({ content: PPT_STYLE });

  await page.evaluate(() => {
    document.body.classList.add('ppt-export');
    document.body.classList.remove('mode-gate-open');
    window.__BP_EARLY_MODE = 'normal';

    document.querySelectorAll('details').forEach(el => (el.open = true));
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));

    document.querySelectorAll('#mode-gate, .mode-gate-overlay, #bp-nav, #read-progress, #scroll-cta, #bp-mobile-menu, #interaction-fab, #toast-container, #quest-hud, #achievement-toast, #mesh-canvas').forEach(el => el.remove());

    // 融资整节隐藏
    ['s-finance', 's-valuation', 's-pre-a', 'gate-finance', 'gate-market', 'gate-ecosystem', 'gate-success', 'gate-boss', 's-demo', 's-demo-code'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });

    document.querySelectorAll('#s-milestones .rounded-xl.bg-amber-50').forEach(el => {
      if (/融资/.test(el.textContent)) el.style.display = 'none';
    });

    const timing = document.getElementById('s-timing');
    if (timing) {
      timing.querySelectorAll('a[href*="funding"], a[href*="raises"]').forEach(el => {
        const card = el.closest('.rounded-2xl, .glass, div[class*="grid"] > div');
        if (card) card.style.display = 'none';
      });
    }

    ['s-why-success', 's-team'].forEach(id => {
      const sec = document.getElementById(id);
      if (!sec) return;
      sec.querySelectorAll('p, li').forEach(el => {
        if (/千万美元级融资|完成.*融资|融资经验|融资热度|融资新闻/.test(el.textContent)) {
          el.style.display = 'none';
        }
      });
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

/** 只显示当前章节，其余全部隐藏 */
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

/** 获取当前章节在页面上的绝对位置与高度 */
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

/** 在章节内部找分页点（仅用于续页，第一章节页固定从 top 开始） */
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
    root.querySelectorAll('.glass, details, .grid > div, .grid > div > div').forEach(el => {
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

  let slideStarts = [chapterTop];
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
    const remaining = chapterBottom - scrollY;
    const clipH = Math.min(VIEWPORT_H, remaining);

    await page.evaluate(y => window.scrollTo(0, y), scrollY);
    await new Promise(r => setTimeout(r, 400));

    const fpath = path.join(TMP_DIR, `${chapter.id}-${i}.png`);
    await page.screenshot({
      path: fpath,
      clip: { x: 0, y: scrollY, width: VIEWPORT_W, height: clipH },
    });

    if (clipH < VIEWPORT_H) {
      const padded = await sharp(fpath)
        .extend({ bottom: VIEWPORT_H - clipH, background: { r: 240, g: 244, b: 248, alpha: 1 } })
        .png().toBuffer();
      fs.writeFileSync(fpath, padded);
    }

    images.push({ path: fpath, title: chapter.title, isChapterStart: i === 0 });
  }

  return images;
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
    if (!exists) continue;
    await exists.dispose();

    process.stdout.write(`\n📌 ${ch.title}`);
    const imgs = await captureChapter(page, ch, allIds);
    imgs.forEach(img => allImages.push(img));
    process.stdout.write(` → ${imgs.length} 页`);
  }

  console.log('\n\n合并 PPT...');
  await browser.close();

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Fuse AI';
  pptx.title = 'FuseAI 商业计划书';

  allImages.forEach((item, idx) => {
    const slide = pptx.addSlide();
    slide.addImage({ path: item.path, x: 0, y: 0, w: 10, h: 5.625 });
    if (item.isChapterStart) {
      slide.addText(item.title, {
        x: 0.35, y: 5.35, w: 5, h: 0.22, fontSize: 9, color: '64748B',
      });
    }
    slide.addText(String(idx + 1), {
      x: 9.2, y: 5.35, w: 0.5, h: 0.22, fontSize: 9, color: '94A3B8', align: 'right',
    });
  });

  await pptx.writeFile({ fileName: OUTPUT_PPT });
  fs.rmSync(TMP_DIR, { recursive: true, force: true });

  const stat = fs.statSync(OUTPUT_PPT);
  console.log(`\n✅ PPT 已生成: ${OUTPUT_PPT}`);
  console.log(`   ${CHAPTERS.length} 章 / ${allImages.length} 页 / ${(stat.size / 1024 / 1024).toFixed(1)} MB`);
}

run().catch(err => {
  console.error('生成失败:', err);
  process.exit(1);
});
