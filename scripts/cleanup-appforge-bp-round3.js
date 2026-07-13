#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const target = path.join(__dirname, '..', 'appforge', 'index.html');
let html = fs.readFileSync(target, 'utf8');
const rep = (a, b) => { html = html.split(a).join(b); };

// ── 市场洞察（弯引号） ──
html = html.replace(
  /250–300 亿美元为 2025 年扩展生态口径估算，不是单一硬件市场。应用开发行业通常呈[""]硬件换代 \+ 爆款内容 \+ 宏观消费[""]共同驱动的周期：2020–2021 疫情红利推高基数，2022–2024 进入后疫情回落与 Switch 后周期，2025 以后由 Switch 2、低代码平台、AI 编程助手和内容服务化带来恢复增长。/g,
  '80–120 亿美元为 2025 年 AI 应用创作赛道估算。行业呈"大模型跃迁 + 用户需求爆发 + 移动端渗透"三重驱动：2022–2024 AI 编程助手快速普及，2025 以后自然语言生成应用进入主流。'
);

// ── 时间轴残留 ──
rep('混合企业软件重启移动端需求，硬件与第一方内容同步放量。', 'iPhone 与 App Store 重新定义软件分发，移动应用井喷。');
rep('收入重心从硬件换代转向内容、订阅、UGC 与平台服务。', '收入重心从一次性授权转向订阅、积分充值、UGC 与平台服务。');

// ── 现状五 ──
rep('硬件利润见顶，平台服务成为增长核心', '一次性授权见顶，平台服务成为增长核心');
rep('硬件溢价空间持续压缩，Notion、Airtable 等个性化工具验证了"用户自建应用"的巨大需求，AI 将把这个市场扩大 100 倍。平台经常性收入（ARR）正成为估值最重要的驱动因素。', '传统 App 外包成本高、周期长，Notion、Airtable 等个性化工具验证了"用户自建应用"的巨大需求，AI 将把这个市场扩大 100 倍。平台经常性收入（ARR）正成为估值最重要的驱动因素。');
rep('软件即服务模式重塑移动端商业逻辑', '软件即服务模式重塑应用创作商业逻辑');

// ── 时机章节 ──
rep('AI 新时代下，游戏移动端市场需要一位新领导者', 'AI 新时代下，移动端应用创作需要一位新领导者');
rep('AI 时代的移动端不只是硬件，而是生成能力、内容生态和创作入口。新范式还没有领导者，但是需要一位领导者。', 'AI 时代的应用创作不只是工具，而是生成能力、模板生态和分发入口。新范式还没有领导者，但是需要一位领导者。');

// ── 收入流 ──
rep('收入不只来自硬件售卖，而是来自 AI 生成、内容交易、平台分成和 IP 模板复用形成的持续消费。', '收入不只来自积分充值，而是来自 AI 生成、模板交易、平台分成和创作者分润形成的持续消费。');

// ── 产品展示区：硬件卡片 → 三大场景 + 平台能力 ──
rep(`            <p class="mt-1 text-xs text-slate-500 leading-relaxed">黑色性能款：大散热、金属摇杆、重度用户与高帧率场景。</p>`, `            <p class="mt-1 text-xs text-slate-500 leading-relaxed">深色主题：专注创作模式，减少视觉干扰，适合长时间使用。</p>`);
rep(`alt="AppForge 深色主题界面 黑色高性能款实机渲染图"`, `alt="AppForge 深色主题界面预览"`);

const showcaseOld = html.match(/        <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">[\s\S]*?        <\/div>\n      <\/section>\n\n      <!-- FUSE STORE -->/);
if (showcaseOld) {
  const showcaseNew = `        <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <article class="glass rounded-3xl p-4 shadow-glass card-hover border border-slate-100/80">
            <div class="aspect-[16/10] rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
              <img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E" data-af-asset="appPreviewDark" alt="AppForge 深色主题界面预览" class="w-full h-full object-cover">
            </div>
            <p class="mt-4 text-sm font-black text-slate-900">深色主题</p>
            <p class="mt-1 text-xs text-slate-500 leading-relaxed">深色主题：专注创作模式，减少视觉干扰，适合长时间使用。</p>
          </article>
          <article class="glass rounded-3xl p-4 shadow-glass card-hover border border-slate-100/80">
            <div class="aspect-[16/10] rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
              <img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E" data-af-asset="appPreviewGame" alt="AppForge 游戏场景界面预览" class="w-full h-full object-cover">
            </div>
            <p class="mt-4 text-sm font-black text-slate-900">游戏场景</p>
            <p class="mt-1 text-xs text-slate-500 leading-relaxed">休闲跑酷、派对问答、放置种田——一句话生成可玩小游戏。</p>
          </article>
          <article class="glass rounded-3xl p-4 shadow-glass card-hover border border-slate-100/80">
            <div class="aspect-[16/10] rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
              <img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E" data-af-asset="appPreviewEdu" alt="AppForge 教育场景界面预览" class="w-full h-full object-cover">
            </div>
            <p class="mt-4 text-sm font-black text-slate-900">教育场景</p>
            <p class="mt-1 text-xs text-slate-500 leading-relaxed">背单词、刷题、知识卡片——按学习目标一键生成。</p>
          </article>
          <article class="glass rounded-3xl p-4 shadow-glass card-hover border border-slate-100/80">
            <div class="aspect-[16/10] rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
              <img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E" data-af-asset="appPreviewLife" alt="AppForge 生活工具场景界面预览" class="w-full h-full object-cover">
            </div>
            <p class="mt-4 text-sm font-black text-slate-900">生活工具</p>
            <p class="mt-1 text-xs text-slate-500 leading-relaxed">汇率计算器、炒股模拟器、房贷计算——实用工具即时可用。</p>
          </article>
          <article class="glass rounded-3xl p-4 shadow-glass card-hover border border-slate-100/80">
            <div class="aspect-[16/10] rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
              <img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E" data-af-asset="appPreviewMulti" alt="AppForge 多平台预览" class="w-full h-full object-cover">
            </div>
            <p class="mt-4 text-sm font-black text-slate-900">多平台发布</p>
            <p class="mt-1 text-xs text-slate-500 leading-relaxed">iOS / Android / Web 同步生成，一键分享链接或上架商店。</p>
          </article>
          <article class="glass rounded-3xl p-4 shadow-glass card-hover border border-slate-100/80">
            <div class="aspect-[16/10] rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
              <img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E" data-af-asset="appPreviewShare" alt="AppForge 分享与分发界面" class="w-full h-full object-cover">
            </div>
            <p class="mt-4 text-sm font-black text-slate-900">分享与分发</p>
            <p class="mt-1 text-xs text-slate-500 leading-relaxed">生成即分享：链接、二维码、应用商店，触达好友与社区。</p>
          </article>
          <article class="glass rounded-3xl p-4 shadow-glass card-hover border border-slate-100/80">
            <div class="aspect-[16/10] rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
              <img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E" data-af-asset="appPreviewCreator" alt="AppForge 创作者经济界面" class="w-full h-full object-cover">
            </div>
            <p class="mt-4 text-sm font-black text-slate-900">创作者经济</p>
            <p class="mt-1 text-xs text-slate-500 leading-relaxed">模板 fork、积分分润、邀请裂变——创作即变现。</p>
          </article>
          <article class="glass rounded-3xl p-4 shadow-glass card-hover border border-slate-100/80">
            <div class="aspect-[16/10] rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
              <img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E" data-af-asset="appPreviewApi" alt="AppForge API 开放平台" class="w-full h-full object-cover">
            </div>
            <p class="mt-4 text-sm font-black text-slate-900">API 开放</p>
            <p class="mt-1 text-xs text-slate-500 leading-relaxed">面向第三方工作室开放生成能力，接入自有产品与工作流。</p>
          </article>
        </div>
      </section>

      <!-- FUSE STORE -->`;
  html = html.replace(showcaseOld[0], showcaseNew);
}

// ── 里程碑整段替换 ──
const msOld = html.match(/      <!-- MILESTONES -->[\s\S]*?      <!-- SIX YEAR PATH -->/);
if (msOld) {
  const msNew = `      <!-- MILESTONES -->
      <section id="s-milestones" class="section-pad max-w-5xl mx-auto">
        <h2 class="text-2xl md:text-[2rem] font-extrabold text-gradient mb-2">短期里程碑</h2>
        <p class="text-fuse-orange font-semibold mb-2">0 → 24 个月 · 三大支柱全阶段交付物与验收节点</p>

        <div class="relative mb-10 hidden md:flex items-center gap-0">
          <div class="flex-1 grid grid-cols-6 gap-0">
            <div class="flex flex-col items-center"><div class="w-4 h-4 rounded-full bg-fuse-blue ring-4 ring-blue-100 z-10"></div><p class="mt-2 text-[10px] font-bold text-fuse-blue text-center leading-tight">M1–3<br/>原型验证</p></div>
            <div class="flex flex-col items-center"><div class="w-4 h-4 rounded-full bg-sky-400 ring-4 ring-sky-100 z-10"></div><p class="mt-2 text-[10px] font-bold text-sky-600 text-center leading-tight">M4–6<br/>内测验证</p></div>
            <div class="flex flex-col items-center"><div class="w-4 h-4 rounded-full bg-violet-500 ring-4 ring-violet-100 z-10"></div><p class="mt-2 text-[10px] font-bold text-violet-700 text-center leading-tight">M7–9<br/>公测上线</p></div>
            <div class="flex flex-col items-center"><div class="w-4 h-4 rounded-full bg-fuse-orange ring-4 ring-orange-100 z-10"></div><p class="mt-2 text-[10px] font-bold text-fuse-orange text-center leading-tight">M10–12<br/>全球发布</p></div>
            <div class="flex flex-col items-center"><div class="w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100 z-10"></div><p class="mt-2 text-[10px] font-bold text-emerald-600 text-center leading-tight">M13–18<br/>规模增长</p></div>
            <div class="flex flex-col items-center"><div class="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-100 z-10"></div><p class="mt-2 text-[10px] font-bold text-amber-600 text-center leading-tight">M19–24<br/>规模扩张</p></div>
          </div>
        </div>

        <div class="space-y-5">

          <details class="group rounded-2xl border border-blue-200 bg-blue-50/60 p-5 md:p-6 open:ring-2 open:ring-blue-300/40 transition">
            <summary class="flex gap-4 items-start cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span class="w-14 h-14 rounded-2xl bg-fuse-blue text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25" aria-hidden="true"><i data-lucide="circuit-board" class="w-6 h-6"></i></span>
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="text-[10px] font-bold tracking-widest uppercase text-blue-400">Phase 01 · M1–3</span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-fuse-blue font-semibold ring-1 ring-blue-200">已启动</span>
                </div>
                <p class="font-extrabold text-slate-900 text-base md:text-lg mt-1">原型验证期 · 核心链路验证</p>
                <p class="text-sm text-slate-500 mt-0.5">核心目标：验证三支柱技术可行性，核心团队满员，内部评审通过</p>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 shrink-0 mt-1 group-open:rotate-180 transition-transform"></i>
            </summary>
            <div class="mt-5 grid md:grid-cols-3 gap-4 text-sm">
              <div class="rounded-xl bg-white/80 border border-blue-100 p-4">
                <p class="flex items-center gap-2 font-bold text-fuse-blue mb-3"><i data-lucide="smartphone" class="w-4 h-4"></i>移动端 App</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-blue-400 shrink-0 mt-0.5">▸</span>Android / iOS 双端技术栈验证，完成 Gemini API 集成与性能优化</li>
                  <li class="flex gap-2"><span class="text-blue-400 shrink-0 mt-0.5">▸</span>AI 应用生成引擎 PoC：自然语言→可运行应用 Demo（灵光 Demo 已验证）</li>
                  <li class="flex gap-2"><span class="text-blue-400 shrink-0 mt-0.5">▸</span>WebView 实时预览 + 版本迭代功能集成</li>
                  <li class="flex gap-2"><span class="text-blue-400 shrink-0 mt-0.5">▸</span>三大场景（游戏 / 教育 / 生活工具）最小可用链路跑通</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-orange-100 p-4">
                <p class="flex items-center gap-2 font-bold text-fuse-orange mb-3"><i data-lucide="store" class="w-4 h-4"></i>创作工作台</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>创作工作台 MVP：生成 + 预览 + 分享 + 积分计费原型</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>AI 应用生成引擎 v0.1：自然语言→三大场景应用，耗时 ≤60s</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>内部 Dogfood：团队生成应用 ≥200 个，收集体验问题清单</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>后端基础设施：AI 推理集群、CDN、用户账号与积分体系上线</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-violet-100 p-4">
                <p class="flex items-center gap-2 font-bold text-violet-700 mb-3"><i data-lucide="layout-template" class="w-4 h-4"></i>场景模板库</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>教育场景模板「背单词」设计文档完成（词库结构 / 复习算法 / UI 规范）</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>背单词模板可运行 Demo，用于天使轮路演与用户测试</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>游戏场景 + 生活工具各 1 款种子模板完成</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>品牌商标在中美同步申请</li>
                </ul>
              </div>
            </div>
            <div class="mt-4 flex flex-wrap gap-3">
              <div class="rounded-xl bg-blue-600/10 border border-blue-200 px-4 py-2 text-xs font-semibold text-fuse-blue">🎯 核心团队满员：AI 引擎 / 移动端 / 平台 / 产品设计各就位</div>
              <div class="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700">✅ 月末门控：内部技术评审通过，Demo 可对外展示</div>
              <div class="rounded-xl bg-amber-50 border border-amber-200 px-4 py-2 text-xs font-semibold text-amber-700">💰 融资节点：天使轮完成，资金到位</div>
            </div>
          </details>

          <details class="group rounded-2xl border border-sky-200 bg-sky-50/60 p-5 md:p-6 open:ring-2 open:ring-sky-300/40 transition">
            <summary class="flex gap-4 items-start cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span class="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/25" aria-hidden="true"><i data-lucide="flask-conical" class="w-6 h-6"></i></span>
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="text-[10px] font-bold tracking-widest uppercase text-sky-500">Phase 02 · M4–6</span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 font-semibold ring-1 ring-sky-200">封闭内测</span>
                </div>
                <p class="font-extrabold text-slate-900 text-base md:text-lg mt-1">封闭内测 · 三大场景验证</p>
                <p class="text-sm text-slate-500 mt-0.5">核心目标：Beta 版本出炉，平台进入外部小范围内测，三大场景可用性达标</p>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 shrink-0 mt-1 group-open:rotate-180 transition-transform"></i>
            </summary>
            <div class="mt-5 grid md:grid-cols-3 gap-4 text-sm">
              <div class="rounded-xl bg-white/80 border border-sky-100 p-4">
                <p class="flex items-center gap-2 font-bold text-sky-600 mb-3"><i data-lucide="smartphone" class="w-4 h-4"></i>移动端 App</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-sky-400 shrink-0 mt-0.5">▸</span>AppForge Beta 版完成，游戏 / 教育 / 生活工具全链路可运行</li>
                  <li class="flex gap-2"><span class="text-sky-400 shrink-0 mt-0.5">▸</span>AI 推理性能达标：应用生成延迟 ≤3s，预览帧率稳定</li>
                  <li class="flex gap-2"><span class="text-sky-400 shrink-0 mt-0.5">▸</span>多机型兼容性测试（主流 Android + iPhone 覆盖 ≥20 款）</li>
                  <li class="flex gap-2"><span class="text-sky-400 shrink-0 mt-0.5">▸</span>崩溃率 ≤0.5%，核心流程可用性 ≥99%</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-orange-100 p-4">
                <p class="flex items-center gap-2 font-bold text-fuse-orange mb-3"><i data-lucide="store" class="w-4 h-4"></i>创作工作台</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>AI 应用引擎 v0.3：支持游戏 / 教育 / 生活工具三类框架自动生成</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>创作工作台 Alpha 上线：邀请制内测，首批创作者 ≥100 人</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>内测期应用生成次数 ≥10,000 次，P0 Bug 归零</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>积分计费内测：充值→消耗→创作者分成全流程跑通</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-violet-100 p-4">
                <p class="flex items-center gap-2 font-bold text-violet-700 mb-3"><i data-lucide="layout-template" class="w-4 h-4"></i>场景模板库</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>背单词模板完整 Demo（AI 引擎生成），可在 Beta 版完整使用</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>汇率计算器 + 炒股模拟器模板上线内测</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>休闲跑酷游戏模板完成，支持用户 fork 改造</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>种子创作者社群：Discord + 微信群活跃用户 ≥1,000</li>
                </ul>
              </div>
            </div>
            <div class="mt-4 flex flex-wrap gap-3">
              <div class="rounded-xl bg-sky-600/10 border border-sky-200 px-4 py-2 text-xs font-semibold text-sky-700">📦 交付物：Beta 版 App、Alpha 平台、三大场景各 1 款模板 Demo</div>
              <div class="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700">✅ 月末门控：内测 NPS ≥40，三大场景可用性评审通过</div>
            </div>
          </details>

          <details class="group rounded-2xl border border-violet-200 bg-violet-50/60 p-5 md:p-6 open:ring-2 open:ring-violet-300/40 transition">
            <summary class="flex gap-4 items-start cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span class="w-14 h-14 rounded-2xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-violet-500/25" aria-hidden="true"><i data-lucide="globe" class="w-6 h-6"></i></span>
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="text-[10px] font-bold tracking-widest uppercase text-violet-500">Phase 03 · M7–9</span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-700 font-semibold ring-1 ring-violet-200">公开测试</span>
                </div>
                <p class="font-extrabold text-slate-900 text-base md:text-lg mt-1">公开测试 · 变现验证 · A 轮材料成型</p>
                <p class="text-sm text-slate-500 mt-0.5">核心目标：创作工作台 Beta 对外开放，首笔 UGC 变现产生，A 轮 BP 完整</p>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 shrink-0 mt-1 group-open:rotate-180 transition-transform"></i>
            </summary>
            <div class="mt-5 grid md:grid-cols-3 gap-4 text-sm">
              <div class="rounded-xl bg-white/80 border border-violet-100 p-4">
                <p class="flex items-center gap-2 font-bold text-violet-700 mb-3"><i data-lucide="smartphone" class="w-4 h-4"></i>移动端 App</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>AppForge 正式版候选完成，UI/UX 设计冻结</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>积分定价体系锁定，毛利率验算：单次生成成本 vs 充值收入</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>应用商店合规材料准备（隐私政策 / 内容审核 / 年龄分级）</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>多语言界面支持（中 / 英）完成</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-orange-100 p-4">
                <p class="flex items-center gap-2 font-bold text-fuse-orange mb-3"><i data-lucide="store" class="w-4 h-4"></i>创作工作台</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>创作工作台 Beta 向公众开放注册，支持 Web + App 双端访问</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>创作者变现上线：应用分享 → 邀请裂变 → 积分充值（平台抽 30%）</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>注册用户 ≥20,000，上架 UGC 应用 ≥500 个，DAU ≥3,000</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>积分套餐上线（月卡 / 季卡），付费转化率目标 ≥8%</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-violet-100 p-4">
                <p class="flex items-center gap-2 font-bold text-violet-700 mb-3"><i data-lucide="layout-template" class="w-4 h-4"></i>场景模板库</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>背单词模板正式版上线，官方模板首个付费应用</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>用户 AI 教育工具开放：修改功能 / 界面 / 数据 / 交互逻辑并上传分发</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>生活工具模板扩充至 5 款（汇率 / 炒股 / 房贷 / 旅行 / 记账）</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>KOL 合作：科技 / 教育 / 生活类 UP 主 ≥50 位内测体验</li>
                </ul>
              </div>
            </div>
            <div class="mt-4 flex flex-wrap gap-3">
              <div class="rounded-xl bg-violet-600/10 border border-violet-200 px-4 py-2 text-xs font-semibold text-violet-700">📦 交付物：正式版候选 App、创作工作台 Beta、背单词模板正式版</div>
              <div class="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700">✅ 月末门控：Beta 用户 NPS ≥50，首笔 UGC 变现产生</div>
              <div class="rounded-xl bg-amber-50 border border-amber-200 px-4 py-2 text-xs font-semibold text-amber-700">💰 融资节点：A 轮 BP + 数据室完整，开始机构路演</div>
            </div>
          </details>

          <details class="group rounded-2xl border border-orange-200 bg-orange-50/60 p-5 md:p-6 open:ring-2 open:ring-orange-300/40 transition">
            <summary class="flex gap-4 items-start cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span class="w-14 h-14 rounded-2xl bg-fuse-orange text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/25" aria-hidden="true"><i data-lucide="rocket" class="w-6 h-6"></i></span>
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="text-[10px] font-bold tracking-widest uppercase text-orange-400">Phase 04 · M10–12</span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 font-semibold ring-1 ring-orange-200">全球发布</span>
                </div>
                <p class="font-extrabold text-slate-900 text-base md:text-lg mt-1">全球发布 · 双端上架 · A 轮完成</p>
                <p class="text-sm text-slate-500 mt-0.5">核心目标：Google Play + App Store 双端上线，首月下载目标 50,000，A 轮资金到位</p>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 shrink-0 mt-1 group-open:rotate-180 transition-transform"></i>
            </summary>
            <div class="mt-5 grid md:grid-cols-3 gap-4 text-sm">
              <div class="rounded-xl bg-white/80 border border-orange-100 p-4">
                <p class="flex items-center gap-2 font-bold text-fuse-orange mb-3"><i data-lucide="smartphone" class="w-4 h-4"></i>移动端 App</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>App Store / Google Play 上架审核通过，AppForge 正式版发布</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>首月下载目标 ≥50,000，留存率 D7 ≥25%</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>全球投放启动：ASO 优化 + 社交媒体 + KOL 合作</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>应用内购买与积分充值双轨变现上线</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-orange-100 p-4">
                <p class="flex items-center gap-2 font-bold text-fuse-orange mb-3"><i data-lucide="store" class="w-4 h-4"></i>创作工作台</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>创作工作台 1.0 正式版发布，Web + App 同步上线</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>注册用户突破 <strong>100,000</strong>，UGC 应用上架 ≥3,000 个</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>月 GMV 突破 <strong>¥500 万</strong>（积分订阅 + 模板购买 + 平台抽成合计）</li>
                  <li class="flex gap-2"><span class="text-orange-400 shrink-0 mt-0.5">▸</span>API 开放计划公布：面向第三方 AI 应用开发者开放接入通道</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-violet-100 p-4">
                <p class="flex items-center gap-2 font-bold text-violet-700 mb-3"><i data-lucide="layout-template" class="w-4 h-4"></i>场景模板库</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>预装 ≥3 款官方模板（背单词 + 汇率计算器 + 休闲跑酷）</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>UGC 创作大赛举办（奖金池 ≥¥100 万），引爆社区热度</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>模板市场正式开放，支持付费模板购买与 fork</li>
                </ul>
              </div>
            </div>
            <div class="mt-4 flex flex-wrap gap-3">
              <div class="rounded-xl bg-orange-600/10 border border-orange-200 px-4 py-2 text-xs font-semibold text-orange-700">📦 交付物：AppForge 1.0、创作工作台 1.0、3 款官方模板、首月下载 ≥50,000</div>
              <div class="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700">✅ 月末门控：平台月 GMV 达标，媒体评测正面覆盖 ≥20 篇</div>
              <div class="rounded-xl bg-amber-50 border border-amber-200 px-4 py-2 text-xs font-semibold text-amber-700">💰 融资节点：A 轮完成交割，资金到位用于全球推广</div>
            </div>
          </details>

          <details class="group rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 md:p-6 open:ring-2 open:ring-emerald-300/40 transition">
            <summary class="flex gap-4 items-start cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span class="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/25" aria-hidden="true"><i data-lucide="zap" class="w-6 h-6"></i></span>
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="text-[10px] font-bold tracking-widest uppercase text-emerald-500">Phase 05 · M13–18</span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold ring-1 ring-emerald-200">规模增长</span>
                </div>
                <p class="font-extrabold text-slate-900 text-base md:text-lg mt-1">用户增长 · 口碑建立 · 生态飞轮启动</p>
                <p class="text-sm text-slate-500 mt-0.5">核心目标：用户突破 50 万，生态进入正向飞轮，月流水突破 $1M</p>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 shrink-0 mt-1 group-open:rotate-180 transition-transform"></i>
            </summary>
            <div class="mt-5 grid md:grid-cols-3 gap-4 text-sm">
              <div class="rounded-xl bg-white/80 border border-emerald-100 p-4">
                <p class="flex items-center gap-2 font-bold text-emerald-700 mb-3"><i data-lucide="smartphone" class="w-4 h-4"></i>移动端 App</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">▸</span>累计下载突破 <strong>500,000</strong>，D30 留存 ≥15%</li>
                  <li class="flex gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">▸</span>海外版本（英文 / 日文）上线，覆盖东南亚 / 日本 / 北美</li>
                  <li class="flex gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">▸</span>应用商店评分维持 ≥4.5 星，用户口碑驱动自然增长</li>
                  <li class="flex gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">▸</span>推送与运营体系建立，召回率提升 ≥20%</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-emerald-100 p-4">
                <p class="flex items-center gap-2 font-bold text-emerald-700 mb-3"><i data-lucide="store" class="w-4 h-4"></i>创作工作台</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">▸</span>注册用户突破 <strong>500,000</strong>，MAU ≥100,000，付费率 ≥12%</li>
                  <li class="flex gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">▸</span>平台月 GMV 突破 <strong>¥2,000 万</strong>（约 $280 万），ARR 曲线进入 $1M+</li>
                  <li class="flex gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">▸</span>UGC 应用上架 ≥10,000 个，Top 100 应用月流水各 ≥¥10,000</li>
                  <li class="flex gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">▸</span>创作工作台 API Beta：首批 10 家第三方工作室接入</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-violet-100 p-4">
                <p class="flex items-center gap-2 font-bold text-violet-700 mb-3"><i data-lucide="layout-template" class="w-4 h-4"></i>场景模板库</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>官方模板扩充至 10 款，覆盖游戏 / 教育 / 生活工具全品类</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>背单词模板 Season 2 更新（新词库 + AI 自适应复习算法）</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>用户创作者 Top 10 月入 ≥¥50,000，形成可公开变现案例</li>
                </ul>
              </div>
            </div>
            <div class="mt-4 flex flex-wrap gap-3">
              <div class="rounded-xl bg-emerald-600/10 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700">📦 交付物：累计下载 ≥500,000、平台月 GMV ¥2,000 万、10 款官方模板在线</div>
              <div class="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700">✅ 月末门控：App NPS ≥60，平台 MAU 环比增长 ≥20%，生态飞轮可观测</div>
            </div>
          </details>

          <details class="group rounded-2xl border border-amber-200 bg-amber-50/60 p-5 md:p-6 open:ring-2 open:ring-amber-300/40 transition">
            <summary class="flex gap-4 items-start cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span class="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/25" aria-hidden="true"><i data-lucide="trophy" class="w-6 h-6"></i></span>
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="text-[10px] font-bold tracking-widest uppercase text-amber-500">Phase 06 · M19–24</span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold ring-1 ring-amber-200">规模扩张</span>
                </div>
                <p class="font-extrabold text-slate-900 text-base md:text-lg mt-1">规模扩张 · 百万用户 · A+ / B 轮融资</p>
                <p class="text-sm text-slate-500 mt-0.5">核心目标：累计用户进入百万级，ARR $10M+，对齐六年路径第 1 年终局</p>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 shrink-0 mt-1 group-open:rotate-180 transition-transform"></i>
            </summary>
            <div class="mt-5 grid md:grid-cols-3 gap-4 text-sm">
              <div class="rounded-xl bg-white/80 border border-amber-100 p-4">
                <p class="flex items-center gap-2 font-bold text-amber-700 mb-3"><i data-lucide="smartphone" class="w-4 h-4"></i>移动端 App</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-amber-400 shrink-0 mt-0.5">▸</span>累计下载冲刺 <strong>1,000,000</strong>，进入六年路径「百万用户通道」起跑线</li>
                  <li class="flex gap-2"><span class="text-amber-400 shrink-0 mt-0.5">▸</span>海外电商与独立站月销售额 ≥$200,000</li>
                  <li class="flex gap-2"><span class="text-amber-400 shrink-0 mt-0.5">▸</span>企业版 / 教育版 SKU 上线，拓展 B 端与校园市场</li>
                  <li class="flex gap-2"><span class="text-amber-400 shrink-0 mt-0.5">▸</span>用户支持与反馈体系完善，投诉处理 SLA ≤24h</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-amber-100 p-4">
                <p class="flex items-center gap-2 font-bold text-amber-700 mb-3"><i data-lucide="store" class="w-4 h-4"></i>创作工作台</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-amber-400 shrink-0 mt-0.5">▸</span>创作工作台海外版本（英文 / 日文 / 东南亚）正式上线</li>
                  <li class="flex gap-2"><span class="text-amber-400 shrink-0 mt-0.5">▸</span>注册用户突破 <strong>2,000,000</strong>，MAU ≥500,000，平台 ARR 突破 <strong>$10M</strong></li>
                  <li class="flex gap-2"><span class="text-amber-400 shrink-0 mt-0.5">▸</span>创作工作台 API 正式商业化：接入工作室 ≥50 家</li>
                  <li class="flex gap-2"><span class="text-amber-400 shrink-0 mt-0.5">▸</span>UGC 应用总量 ≥50,000 个，生态内容自给率 ≥70%</li>
                </ul>
              </div>
              <div class="rounded-xl bg-white/80 border border-violet-100 p-4">
                <p class="flex items-center gap-2 font-bold text-violet-700 mb-3"><i data-lucide="layout-template" class="w-4 h-4"></i>场景模板库</p>
                <ul class="space-y-2 text-slate-600 leading-relaxed">
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>≥20 款官方模板在线，覆盖游戏 / 教育 / 生活工具全品类</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>模板市场月交易额 ≥¥500 万，创作者分成体系成熟</li>
                  <li class="flex gap-2"><span class="text-violet-400 shrink-0 mt-0.5">▸</span>月入 ¥10,000 以上的职业创作者 ≥500 人</li>
                </ul>
              </div>
            </div>
            <div class="mt-4 flex flex-wrap gap-3">
              <div class="rounded-xl bg-amber-600/10 border border-amber-200 px-4 py-2 text-xs font-semibold text-amber-700">📦 交付物：累计下载 ≥100 万、ARR $10M+、平台全球化上线、20 款官方模板</div>
              <div class="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700">✅ 月末门控：三部收入曲线（应用 / 模板 / 平台）对齐财务预测第 1 年终局值</div>
              <div class="rounded-xl bg-amber-50 border border-amber-200 px-4 py-2 text-xs font-semibold text-amber-700">💰 融资节点：A+ 轮或 B 轮启动，资金支撑第 2–3 年规模化扩张</div>
            </div>
          </details>

        </div>
      </section>

      <!-- SIX YEAR PATH -->`;
  html = html.replace(msOld[0], msNew);
}

// ── 六年路径 ──
rep('第 1 年 · 从量产到商业闭环', '第 1 年 · 从发布到商业闭环');
rep('完成预售、首批量产、创作工作台平台上线获取非经常性收入、场景模板库 验证和渠道建设，之后进入正常增长通道。', '完成双端上架、创作工作台平台上线、场景模板库验证和全球渠道建设，之后进入正常增长通道。');
rep('用户数向<strong>百万级</strong>、硬件累计销量<strong>数百万台级</strong>推进；内容供给、创作者分成和平台经常性收入开始拉开增长曲线。', '用户数向<strong>百万级</strong>、累计下载<strong>数百万次</strong>推进；模板供给、创作者分成和平台经常性收入开始拉开增长曲线。');
rep('第 4 年 · 生态进入千万台通道', '第 4 年 · 生态进入千万用户通道');
rep('产品与生态进入<strong>千万台累计</strong>通道；硬件、内容、平台三条收入线由同一参数板即时更新，并反馈到财务图表。', '产品与生态进入<strong>千万用户累计</strong>通道；应用、模板、平台三条收入线由同一参数板即时更新，并反馈到财务图表。');

// ── 财务模型：硬件 → 应用订阅 ──
rep('硬件等价年出货量（万台）', '应用付费用户折算（万人）');
rep('硬件分部营收(亿美元)×10⁸ USD × USD/CNY ÷ 硬件综合ASP(元/台) ÷ 10⁴', '应用分部营收(亿美元)×10⁸ USD × USD/CNY ÷ 应用 ARPU(元/人/年) ÷ 10⁴');
rep('PS<sub>平台</sub>=(目标隐含−硬件营收×PS<sub>硬件</sub>−内容营收×PS<sub>内容</sub>)÷平台营收', 'PS<sub>平台</sub>=(目标隐含−应用营收×PS<sub>应用</sub>−模板营收×PS<sub>模板</sub>)÷平台营收');
rep('硬件 ASP（元人民币/台）', '应用 ARPU（元人民币/人/年）');
rep('硬件营收（亿美元）', '应用增值营收（亿美元）');
rep('游戏内容营收（亿美元）', '模板市场营收（亿美元）');
rep('分部 PS · 硬件', '分部 PS · 应用');
rep('分部 PS · 内容', '分部 PS · 模板');
rep('硬件年出货量折算（万台）', '应用付费用户折算（万人）');
rep('由参数表公式自动计算；与硬件分部营收、汇率、ASP 联动', '由参数表公式自动计算；与应用分部营收、汇率、ARPU 联动');
rep('低毛利、渠道型／代工型硬件长期在<strong>极低 PS</strong>带；品牌化企业软件与消费电子整机通常<strong>高于纯代工</strong>。内容与软件售卖更接近<strong>软件／发行／数字内容</strong>估值带。', '移动应用 IAP 与订阅通常在<strong>中等 PS</strong>带；模板市场与数字内容更接近<strong>软件／发行</strong>估值带。');

// ── 资金用途 ──
rep('硬件研发与生产', '移动端 App 研发');
rep('用于 AppForge 移动端芯片选型、ID/MD 设计、模具开发与小批量量产验证，保障移动端产品领先与可落地性。', '用于 AppForge iOS / Android 双端开发、AI 引擎集成、性能优化与上架合规，保障移动端原生体验。');
rep('首发高品质独占 IP《起源：零号世界》研发、UGC 激励与分发体系、核心创作者扶持，建立内容护城河。', '三大场景官方模板研发、UGC 激励与分发体系、核心创作者扶持，建立模板护城河。');
rep('引进全球顶尖人才（硬件、软件、AI、设计、游戏研发等），覆盖未来 18～24 个月日常运营。', '引进全球顶尖人才（移动端、AI、平台、产品设计等），覆盖未来 18～24 个月日常运营。');

// ── JS：打砖块 / 资金分配 / 飞轮 ──
rep("desc: '经典打砖块玩法：移动挡板接住资金球，击碎硬件、平台、市场、AI 引擎、内容、团队六类用途砖块。砖块耐久对应天使轮资金占比。'", "desc: '经典打砖块玩法：移动挡板接住资金球，击碎 App、平台、市场、AI 引擎、模板、团队六类用途砖块。砖块耐久对应天使轮资金占比。'");
rep("{ key: 'hardware', name: '硬件研发', target: 10, color: '#3b82f6' }", "{ key: 'hardware', name: 'App 研发', target: 10, color: '#3b82f6' }");
rep("{ key: 'content', name: '内容生态', target: 30, color: '#f59e0b' }", "{ key: 'content', name: '模板生态', target: 30, color: '#f59e0b' }");
rep("labels: ['硬件研发与生产 10%', '平台建设与运营 15%', '市场推广与品牌 15%', 'AI 引擎研发 15%', '内容生态建设 30%', '团队建设与运营 15%']", "labels: ['App 研发 10%', '平台建设与运营 15%', '市场推广与品牌 15%', 'AI 引擎研发 15%', '模板生态建设 30%', '团队建设与运营 15%']");

rep('核心能力建立高粘性入口 → 用户创作与官方模板双轨供给内容 → 创作工作台 分发交易 → Token、抽成和 IP 收益反哺模型、硬件与下一批内容。', '核心能力建立高粘性入口 → 用户创作与官方模板双轨供给 → 创作工作台分发交易 → 积分、抽成和模板收益反哺模型、平台与下一批内容。');
rep('核心能力承接高粘性沉浸体验，手机端同步扩大用户盘子，硬件先把入口占住。', '核心能力承接高粘性创作体验，手机端同步扩大用户盘子，App 先把入口占住。');
rep('用户作品与官方模板都进入游戏、教育、生活工具链条，角色、世界观、玩法规则和模板不断扩写内容供给。', '用户作品与官方模板都进入游戏、教育、生活工具三大场景，功能模块和模板不断扩写供给。');
rep('Token、抽成和 IP 收益反哺 AI 模型、移动端硬件、工具链和下一批官方内容，生态继续变厚。', '积分、抽成和模板收益反哺 AI 模型、移动端平台、工具链和下一批官方模板，生态继续变厚。');
rep('商业飞轮已激活：移动端产品、AI 内容供给、Store 交易与硬件生态反哺完成一次循环。', '商业飞轮已激活：移动端 App、AI 模板供给、平台交易与创作者生态反哺完成一次循环。');

// ── 财务 JS 文案 ──
rep('硬件&nbsp;', '应用&nbsp;');
rep('游戏内容&nbsp;', '模板市场&nbsp;');
rep('硬件分部营收', '应用分部营收');
rep('硬件综合ASP', '应用 ARPU');
rep('等价出货', '等价付费用户');
rep('万台', '万人');
rep('元/台', '元/人/年');
rep('校准得到的平台分部 PS 为负，说明在当前硬件/内容与目标隐含下假设不可行；请调高目标、降低硬件/分部 PS，或调整分部营收。', '校准得到的平台分部 PS 为负，说明在当前应用/模板与目标隐含下假设不可行；请调高目标、降低应用/分部 PS，或调整分部营收。');

// ── 团队背景（保留 3C 经历但弱化硬件叙事） ──
rep('早期负责名都执法记录仪整机产品经理，经历完整消费类 3C 电子产品链路：PCBA 方案 → 硬件 ID → MD → 试产 → 量产。', '早期负责消费类 3C 产品整机产品经理，经历完整产品链路：需求定义 → 设计 → 开发 → 测试 → 上线。');

// ── 全局清扫 ──
rep('移动端产品', '移动端 App');
rep('tablet-smartphone', 'smartphone');
rep('完成移动端工业设计草案与人机工程评审（3 版概念方向→1 版收敛）', '完成 App UI/UX 设计草案与人机工程评审（3 版概念方向→1 版收敛）');
rep('Steam Deck 与 低代码平台份额', '低代码平台份额');
rep('Roguelike / 解谜 / 跑酷三类玩法框架', '游戏 / 教育 / 生活工具三类场景框架');
rep('IP 游戏', '官方模板');
rep('IP 持续变现', '模板持续变现');
rep('IP 联名', '品牌联名');
rep('IP 变现', '模板变现');
rep('世界观文档', '产品设计文档');
rep('核心玩法框架', '核心功能框架');
rep('角色设定 / 美术风格指南', '功能模块 / UI 风格指南');
rep('IP 法务注册：商标 + 美术版权', '品牌注册：商标 + 软件著作权');
rep('起源：零号世界', '三大场景精选模板');
rep('掌机', '应用创作器');
rep('游戏机', '应用工厂');
rep('Switch', '移动 App');
rep('任天堂', '传统 IDE');
rep('Dui-Dui', '背单词模板');
rep('Fuse Store', 'AppForge Store');
rep('FUSE STORE', 'APPFORGE STORE');

fs.writeFileSync(target, html, 'utf8');
const checks = ['Switch', '掌机', '任天堂', 'Dui-Dui', '游戏机', 'EVT', 'DVT', 'PVT', '量产', 'Compact Lite', '摇杆', '模具'];
checks.forEach(k => {
  const n = (html.match(new RegExp(k, 'g')) || []).length;
  if (n > 0) console.log(`  remaining "${k}": ${n}`);
});
console.log('Round 3 cleanup done.');
