#!/usr/bin/env node
/**
 * FuseAI BP → 横版 PPT（16:9）完整正式版
 * 与 FuseAI商业计划书-BP正式版.pdf 内容一致：含天使轮，不含财务预测。
 * 每章第一页必为新 slide，逐章独立渲染。
 *
 * 紧凑版：面向短时间路演 —— 更低放大倍数 + 压缩间距，页数更少；
 * 分页按元素边界精确断页：不切断卡片/图表，标题不与正文分离，页与页零重叠；
 * 续页顶部留白、底部固定页脚安全区，补白色自动采样章节背景。
 *
 * KEEP_TMP=1 可保留中间截图便于检查。
 */
const puppeteer = require('puppeteer-core');
const PptxGenJS = require('pptxgenjs');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'index.html');
const OUTPUT_PPT = path.join(ROOT, 'FuseAI商业计划书-BP正式版.pptx');
const TMP_DIR = path.join(__dirname, '.ppt-slides-full');
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const VIEWPORT_W = 1920;
const VIEWPORT_H = 1080;
const SCALE = 2;
const CONTENT_ZOOM = 1.0; // 紧凑版：不放大，每页装更多内容（调大更易读但页数变多）

const TOP_PAD_CONT = 24;   // 续页顶部留白（CSS px）
const FOOTER_ZONE = 36;    // 底部页脚安全区（CSS px）
const BOTTOM_SAFE = 24;    // 断点距内容区底部的最小距离
const MIN_PROGRESS = 80;   // 断点距当前页顶的最小距离
const SLIDE_BG = { r: 240, g: 244, b: 248, alpha: 1 };

const KEEP_TMP = process.env.KEEP_TMP === '1';

const EXCLUDE_IDS = new Set([
  'gate-finance', 'gate-market', 'gate-ecosystem', 'gate-success', 'gate-boss',
  's-demo', 's-demo-code',
]);

const CHAPTERS = [
  { id: 's-hero', title: '封面' },
  { id: 's-thesis-brief', title: '总纲 · 四条线' },
  { id: 's-market-opportunity', title: '百年变局' },
  { id: 's-ai-evolution', title: 'AI 演进' },
  { id: 's-market-global', title: 'AI 互动内容市场' },
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

  /* 铺满 + 轻度放大（紧凑优先） */
  html { font-size: 100% !important; }
  body.ppt-export { zoom: ${CONTENT_ZOOM}; }

  .bp-main-safe, .bp-wrap, main {
    max-width: 100% !important;
    width: 100% !important;
    margin: 0 !important;
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }
  .max-w-7xl, .max-w-6xl, .max-w-5xl, .max-w-4xl, .max-w-3xl, .max-w-2xl {
    max-width: 100% !important;
    width: 100% !important;
  }

  /* 压缩垂直留白，提升单页信息密度 */
  .section-pad {
    padding-top: 0.8rem !important;
    padding-bottom: 0.8rem !important;
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
  }
  .mb-10 { margin-bottom: 0.8rem !important; }
  .mt-12 { margin-top: 0.9rem !important; }
  .mt-10 { margin-top: 0.8rem !important; }
  .mt-8 { margin-top: 0.7rem !important; }
  .mt-6 { margin-top: 0.6rem !important; }
  .space-y-8 > * + * { margin-top: 0.7rem !important; }
  .space-y-6 > * + * { margin-top: 0.55rem !important; }
  .space-y-4 > * + * { margin-top: 0.45rem !important; }
  .gap-8 { gap: 0.9rem !important; }
  .gap-6 { gap: 0.75rem !important; }
  .gap-5 { gap: 0.65rem !important; }
  .gap-4 { gap: 0.6rem !important; }
  .p-8, .md\\:p-8 { padding: 0.95rem !important; }
  .md\\:p-10 { padding: 1.1rem !important; }
  .p-6, .md\\:p-6 { padding: 0.8rem !important; }
  .p-5 { padding: 0.7rem !important; }
  .p-4 { padding: 0.6rem !important; }

  h2.text-2xl, h2 { font-size: 1.6rem !important; line-height: 1.2 !important; }
  h3 { font-size: 1.2rem !important; }

  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
  .reveal { opacity: 1 !important; transform: none !important; }

  /* 非当前章节隐藏 */
  .ppt-hidden-chapter { display: none !important; }
`;

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function preparePage(page) {
  await page.addStyleTag({ content: PPT_STYLE });

  await page.evaluate(() => {
    document.body.classList.add('ppt-export');
    document.body.classList.remove('mode-gate-open');
    window.__BP_EARLY_MODE = 'normal';

    document.querySelectorAll('details').forEach(el => (el.open = true));
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));

    document.querySelectorAll('#mode-gate, .mode-gate-overlay, #bp-nav, #read-progress, #scroll-cta, #bp-mobile-menu, #interaction-fab, #toast-container, #quest-hud, #achievement-toast, #mesh-canvas').forEach(el => el.remove());

    // 闯关闸门与 Demo 不进入正式版
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

  await sleep(1000);
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
  await sleep(500);
}

/**
 * 采集章节布局：位置、候选断点（元素顶边）、标题区间。
 * 候选断点不得落在「原子块」（卡片/图表/图片/短 details）的纵向跨度内，
 * 否则断页会把跨列内容（如左图右卡）拦腰切断；
 * 接近一页高的超高容器允许在其内部断页。
 */
async function collectChapterLayout(page, chapterId) {
  return page.evaluate(({ id, maxAtomicH }) => {
    const root = document.getElementById(id);
    if (!root) return null;
    const rootRect = root.getBoundingClientRect();
    const top = Math.floor(rootRect.top + window.scrollY);
    const bottom = Math.ceil(rootRect.bottom + window.scrollY);

    const CAND_SEL = 'h2, h3, h4, p, li, .glass, article, details, summary, .grid > div, canvas, img, table, .section-kicker';
    const ATOMIC_SEL = '.glass, article, canvas, img, table, details';
    const HEAD_SEL = 'h2, h3, h4, .section-kicker';

    const atomics = [...root.querySelectorAll(ATOMIC_SEL)]
      .map(el => {
        const r = el.getBoundingClientRect();
        return { top: r.top + window.scrollY, bottom: r.bottom + window.scrollY };
      })
      .filter(b => b.bottom - b.top > 8 && b.bottom - b.top < maxAtomicH);

    const seen = new Set();
    const breaks = [];
    root.querySelectorAll(CAND_SEL).forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return;
      const y = Math.floor(r.top + window.scrollY);
      if (y <= top + 8 || y >= bottom - 8) return;
      const insideAtomic = atomics.some(a => y > a.top + 2 && y < a.bottom - 2);
      if (insideAtomic) return;
      if (seen.has(y)) return;
      seen.add(y);
      breaks.push(y);
    });
    breaks.sort((a, b) => a - b);

    const headings = [...root.querySelectorAll(HEAD_SEL)]
      .map(el => {
        const r = el.getBoundingClientRect();
        return { top: r.top + window.scrollY, bottom: r.bottom + window.scrollY };
      })
      .filter(h => h.bottom - h.top > 4)
      .sort((a, b) => a.top - b.top);

    return { top, bottom, breaks, headings };
  }, { id: chapterId, maxAtomicH: VIEWPORT_H * 0.92 });
}

/**
 * 计算每页起始 y：断点取「当前页能完整放下的最后一个元素边界」，
 * 断点正上方紧贴标题时下移断点到标题顶（标题不作上一页孤儿）；
 * 无候选时硬切（单个块超过一页，无法避免）。
 */
function planSlides(layout) {
  const { top, bottom, breaks, headings } = layout;
  const CONTENT_H = VIEWPORT_H - FOOTER_ZONE;
  const starts = [top];
  let pos = top;
  let guard = 0;

  while (pos + CONTENT_H < bottom - 30 && guard++ < 80) {
    const isFirst = starts.length === 1;
    const avail = CONTENT_H - (isFirst ? 0 : TOP_PAD_CONT);
    const limit = pos + avail;

    let best = -1;
    for (const y of breaks) {
      if (y > pos + MIN_PROGRESS && y <= limit - BOTTOM_SAFE) best = y;
      else if (y > limit - BOTTOM_SAFE) break;
    }

    let next = best;
    if (next > 0) {
      for (let iter = 0; iter < 3; iter++) {
        const h = headings.find(h => next - h.bottom >= -2 && next - h.bottom <= 18 && h.top > pos + MIN_PROGRESS);
        if (h) next = Math.floor(h.top);
        else break;
      }
      if (next <= pos + MIN_PROGRESS) next = -1;
    }
    if (next < 0) next = Math.min(limit, bottom);
    if (next >= bottom - 30) break;

    starts.push(next);
    pos = next;
  }
  return starts;
}

/** 从截图左上角采样章节背景色，保证补白与章节底色一致 */
async function sampleBg(imgPath) {
  try {
    const { data } = await sharp(imgPath)
      .extract({ left: 4, top: 4, width: 1, height: 1 })
      .raw()
      .toBuffer({ resolveWithObject: true });
    return { r: data[0], g: data[1], b: data[2], alpha: 1 };
  } catch (e) {
    return SLIDE_BG;
  }
}

async function captureChapter(page, chapter, allIds) {
  await showOnlyChapter(page, chapter.id, allIds);

  const layout = await collectChapterLayout(page, chapter.id);
  if (!layout || layout.bottom - layout.top < 20) return [];

  const starts = planSlides(layout);
  const images = [];

  for (let i = 0; i < starts.length; i++) {
    const scrollY = starts[i];
    const isFirst = i === 0;
    const padTop = isFirst ? 0 : TOP_PAD_CONT;
    const maxH = VIEWPORT_H - FOOTER_ZONE - padTop;
    // 严格截取到下一页起点，页与页零重叠、零重复
    const nextStart = i + 1 < starts.length ? starts[i + 1] : layout.bottom;
    const captureH = Math.max(60, Math.min(maxH, nextStart - scrollY));

    await page.evaluate(y => window.scrollTo(0, y), scrollY);
    await sleep(400);

    const fpath = path.join(TMP_DIR, `${chapter.id}-${i}.png`);
    await page.screenshot({
      path: fpath,
      clip: { x: 0, y: scrollY, width: VIEWPORT_W, height: captureH },
    });

    const padBottom = VIEWPORT_H - padTop - captureH;
    if (padTop > 0 || padBottom > 0) {
      const bg = await sampleBg(fpath);
      const padded = await sharp(fpath)
        .extend({
          top: padTop * SCALE,
          bottom: padBottom * SCALE,
          background: bg,
        })
        .png().toBuffer();
      fs.writeFileSync(fpath, padded);
    }

    images.push({ path: fpath, title: chapter.title, isChapterStart: isFirst });
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
  await sleep(3000);
  await preparePage(page);

  const allIds = CHAPTERS.map(c => c.id).filter(id => !EXCLUDE_IDS.has(id));

  // 加载后一次性确认章节存在性，避免逐章查询时的偶发误判
  const existingIds = new Set(await page.evaluate(ids => {
    return ids.filter(id => document.getElementById(id));
  }, allIds));

  const allImages = [];
  for (const ch of CHAPTERS) {
    if (EXCLUDE_IDS.has(ch.id)) continue;
    if (!existingIds.has(ch.id)) {
      console.log(`\n跳过 ${ch.title}（页面中不存在）`);
      continue;
    }

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
  pptx.title = 'FuseAI 商业计划书（正式版）';

  allImages.forEach((item, idx) => {
    const slide = pptx.addSlide();
    slide.addImage({ path: item.path, x: 0, y: 0, w: 10, h: 5.625 });
    // 页脚：品牌色块 + 章节名（每页），居中品牌字，右侧页码
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.35, y: 5.435, w: 0.085, h: 0.085,
      fill: { color: 'F59E0B' }, line: { type: 'none' },
    });
    slide.addText(item.title, {
      x: 0.5, y: 5.36, w: 4.5, h: 0.24, fontSize: 10, bold: true, color: '334155',
    });
    slide.addText('FuseAI · 商业计划书', {
      x: 3.5, y: 5.385, w: 3, h: 0.2, fontSize: 8, color: '94A3B8', align: 'center',
    });
    slide.addText(String(idx + 1), {
      x: 9.1, y: 5.36, w: 0.55, h: 0.24, fontSize: 10, bold: true, color: '64748B', align: 'right',
    });
  });

  await pptx.writeFile({ fileName: OUTPUT_PPT });
  if (!KEEP_TMP) fs.rmSync(TMP_DIR, { recursive: true, force: true });

  const stat = fs.statSync(OUTPUT_PPT);
  console.log(`\n✅ PPT 已生成: ${OUTPUT_PPT}`);
  console.log(`   ${CHAPTERS.length} 章 / ${allImages.length} 页 / ${(stat.size / 1024 / 1024).toFixed(1)} MB`);
  if (KEEP_TMP) console.log(`   中间截图保留在: ${TMP_DIR}`);
}

run().catch(err => {
  console.error('生成失败:', err);
  process.exit(1);
});
