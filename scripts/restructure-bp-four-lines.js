#!/usr/bin/env node
/**
 * BP 四条线逻辑重构：工具 / 游戏 / 连载短剧 / 教育
 * 运行: node scripts/restructure-bp-four-lines.js
 */
const fs = require('fs');
const path = require('path');

const HTML = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(HTML, 'utf8');

function rep(oldStr, newStr, label) {
  if (!html.includes(oldStr)) {
    console.warn('SKIP (not found):', label || oldStr.slice(0, 60));
    return false;
  }
  html = html.split(oldStr).join(newStr);
  console.log('OK:', label || oldStr.slice(0, 50));
  return true;
}

// ── 1. s-market-opportunity 收尾 ──
rep(
  '先建好创作基础设施的团队，将抢先定义互动内容行业的新标准。',
  '谁先跑通「Token → 可付费作品」的闭环，谁就能在工具、游戏、连载短剧、教育四条线上拿到最高的单位溢价。',
  'market-opportunity closing'
);

// ── 2. s-ai-evolution 底部总结 ──
rep(
  '<p class="mt-4 text-sm text-slate-700 leading-relaxed max-w-4xl">阶段 3 已到来——一句想法就能变成可互动原型。Fuse 正站在 Stage 3→4 的窗口：抢先定义 AI 互动内容从「原型」到「完整作品」的行业标准，让创造门槛真正归零。</p>',
  '<p class="mt-4 text-sm text-slate-700 leading-relaxed max-w-4xl">阶段 3 已到来——Lingguang（工具）与 Fusee（游戏）正在验证 Stage 3→4 的窗口；ZAKA（连载短剧）与教育将把 Token 消耗从一次性生成延伸到追更与高频学习。</p>',
  'ai-evolution bottom'
);

// ── 3. s-market-global 导语 ──
rep(
  'FuseAI 的核心机会是 AI 互动内容生成与交易平台，而非单一硬件品类。',
  'FuseAI 的机会是把 Token 消耗锁在工具、游戏、连载短剧、教育四条产品线上——Fuse Store 是共用底座，而非单一硬件品类。',
  'market-global intro'
);

rep(
  '以 Fuse Store 承接创作、分发、交易和分成，而不是只做单点工具。',
  '以 Fuse Store 承接四条线的创作、分发、交易和 Token 计费，而不是只做单点工具。',
  'market-global fuse cut'
);

rep(
  'FuseAI 应以 Fuse Store 平台切入，把 AI 生成能力变成可交易、可分发、可持续复用的内容生态。',
  'FuseAI 应以四条线切入：工具已验证付费、游戏刚发布、短剧与教育把消耗做深——共用 Fuse Store 与同一套 AI 引擎。',
  'market-global insight'
);

// ── 4. s-console-platform ──
rep(
  '纯游戏主机和 PC 游戏商店解决的是「专业团队做内容、用户来消费」。Fuse 所在的是另一条赛道：<strong class="text-slate-800">普通人也能生成、分享、变现互动内容</strong>。Roblox 和 Canva 分别从「UGC 平台」和「AI 辅助创作」两侧证明了这条路的商业规模——AI 原生互动内容平台，是把两条路径在生成端再压缩一层门槛。',
  'Roblox 与 Canva 分别从「UGC 供给 + 创作者分成」和「模板 + AI + 订阅」证明了平台规模。Fuse 把同一逻辑映射到<strong class="text-slate-800">工具、游戏、连载短剧、教育</strong>四条线：共用一套 Token 引擎，每条线承接不同频次的消耗与溢价。',
  'console-platform intro'
);

rep(
  'Fuse 的差异在于平台深度、多场景供给与可选硬件入口。',
  'Fuse 的差异在于四条线已/将上线、商业化稀缺性，以及可选硬件入口。',
  'console-platform fuse diff'
);

// ── 5. s-market-vs 整段替换 ──
const marketVsOld = `            <p class="section-kicker mb-2">PART 03 · STRUCTURAL CONTRAST</p>
            <h2 class="text-2xl md:text-[2rem] lg:text-[2.4rem] font-extrabold text-gradient leading-snug tracking-tight">破局点：百年变局撕开的结构性裂缝</h2>
            <p class="mt-4 text-slate-600 text-sm md:text-base max-w-3xl">任天堂的整个商业模式，建立在"消费时代"的假设上——少数专业团队制作内容，数十亿玩家被动消费。AI 创造时代的到来，正在从根本上瓦解这一假设，而任天堂根本没有做好准备。</p>`;

const marketVsNew = `            <p class="section-kicker mb-2">PART 03 · STRUCTURAL CONTRAST</p>
            <h2 class="text-2xl md:text-[2rem] lg:text-[2.4rem] font-extrabold text-gradient leading-snug tracking-tight">破局点：高月活不等于会变现</h2>
            <p class="mt-4 text-slate-600 text-sm md:text-base max-w-3xl">多数 AI 产品把 Token 用在聊天与一次性生成上，月活很大，付费却摊得很薄。我们的路径相反：让付费发生在真正消耗 Token 的创作行为上——工具、游戏、连载短剧、教育四条线，逐级抬高单位 Token 溢价。</p>`;

rep(marketVsOld, marketVsNew, 'market-vs header');

rep(
  '当 AI 把"做互动内容"的门槛从百人团队、百万资金降到任何人都能参与，传统内容平台由谁主导生产和分发的权力结构就开始松动。垄断的根基开始脆弱——这是互动内容行业五十年来第一次真正的权力转移机会。',
  '当 AI 把创作压缩成一次次 Token 调用，胜负手不再是 DAU，而是「这枚 Token 能不能变成用户愿意付费的作品」。谁先跑通四条线的商业化闭环，谁就拿到这一轮的定价权。',
  'market-vs crack'
);

rep(
  '<h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-nintendo-red"></span>消费时代的霸主：封闭内容平台（以任天堂为代表）</h3>',
  '<h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-slate-400"></span>常见路径：超大月活，付费摊薄</h3>',
  'market-vs left title'
);

rep(
  '<p class="text-sm text-slate-700"><strong class="text-slate-900">为"消费时代"而生：</strong>拥有塞尔达、马里奥等顶尖第一方 IP，整个商业模式建立在"大团队造精品、大众来消费"的假设上。</p>',
  '<p class="text-sm text-slate-700"><strong class="text-slate-900">聊天与生成：</strong>Token 主要消耗在对话、问答与一次性生成，用户用完即走，难以形成可持续付费习惯。</p>',
  'market-vs left card1'
);

rep(
  '<p class="text-sm text-slate-700"><strong class="text-slate-900">封闭即护城河，也是软肋：</strong>封闭生态虽保护了品牌体验，但同时堵死了 UGC 和 AI 创作生态的入口，在创造时代到来时无法快速转型。</p>',
  '<p class="text-sm text-slate-700"><strong class="text-slate-900">DAU 不等于 ARPU：</strong>以豆包为代表，月活 3.45 亿，付费用户仅小几十万——超大流量摊薄了单用户价值，变现留在行业中下档。</p>',
  'market-vs left card2'
);

rep(
  '<p class="text-sm text-slate-700"><strong class="text-slate-900">变局面前的结构性盲区：</strong>AI 能力的指数级跃迁不在任天堂的体系内——他们没有大模型、没有 AI 创作平台、没有为"人人创造"设计的生态，且内部文化难以快速迭代。</p>',
  '<p class="text-sm text-slate-700"><strong class="text-slate-900">单位 Token 溢价低：</strong>同一枚 Token 停在「用完即走」的场景里，很难卖出高毛利；需要可玩、可追更、可学习的作品才能把消耗锁在用户账户里。</p>',
  'market-vs left card3'
);

rep(
  '<h3 class="text-lg font-bold text-fuse-blue mb-4 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-fuse-blue"></span>Fuse 选择的路：为 AI 创造时代原生设计</h3>',
  '<h3 class="text-lg font-bold text-fuse-blue mb-4 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-fuse-blue"></span>Fuse 的路径：四条线 × 最高 Token 溢价</h3>',
  'market-vs right title'
);

rep(
  '<p class="text-sm text-slate-700"><strong class="text-fuse-blue">乘势百年变局：</strong>不是复制 Switch，而是打造为 AI 创造时代原生设计的创意入口与内容生态——把"人人都能做互动内容"作为核心产品价值。</p>',
  '<p class="text-sm text-slate-700"><strong class="text-fuse-blue">工具已验证：</strong>Lingguang 跑通「生成 → 使用 → 付费消耗 Token」，证明付费发生在创作行为上，而不是靠超大 DAU 摊薄。</p>',
  'market-vs right card1'
);

rep(
  '<p class="text-sm text-slate-700"><strong class="text-fuse-blue">占据创造时代的标准位：</strong>抢先定义 AI 互动内容创作的平台标准与分发机制，让竞争对手跟随我们的规则而不是反过来。</p>',
  '<p class="text-sm text-slate-700"><strong class="text-fuse-blue">游戏 + 短剧抬溢价：</strong>Fusee 用更低成本做出更好作品；ZAKA 把一次性消耗变成可追更的持续消耗——同一枚 Token 卖出更高毛利。</p>',
  'market-vs right card2'
);

rep(
  '<p class="text-sm text-slate-700"><strong class="text-fuse-blue">用创造者网络效应构建护城河：</strong>每一个加入平台的创造者，都在为下一个创造者制造理由。这是消费平台不具备的飞轮——内容越多创造者越多，创造者越多内容越丰富。</p>',
  '<p class="text-sm text-slate-700"><strong class="text-fuse-blue">教育拉长消耗：</strong>四条线共用一套 Token 计费，把用户每天的创作、娱乐、追更与学习锁在同一账户——目标成为 C 端 Token 消耗的主入口之一。</p>',
  'market-vs right card3'
);

rep(
  'AI 创造时代正在重写互动内容生态的规则',
  '付费发生在创作行为上，我们的转化与变现处在最好的一档',
  'market-vs cta'
);

// ── 6. s-model-compare 三范式 ──
rep(
  '「消费时代 / 开发者时代 / AI 创造时代」三范式对比',
  '「聊天消耗 / 一次性生成 / 可付费作品」三档 Token 溢价对比',
  'model-compare title'
);

rep(
  '任天堂代表“消费时代”的极致——少数人做内容，多数人消费。苹果代表“开发者时代”的突破——专业开发者提供内容，平台做分发。Fuse 要做的，是百年变局带来的第三种范式：<strong class="text-fuse-orange">AI 让每个人都成为内容的创造者</strong>，平台不只是分发，而是创造的基础设施。',
  '第一档：Token 主要消耗在聊天与问答，月活大、付费薄。第二档：一次性生成，用完即走。第三档：<strong class="text-fuse-orange">可生成、可玩、可付费的作品</strong>——工具、游戏、连载短剧、教育四条线，Fuse 要拿的是这一档里最高的单位 Token 溢价。',
  'model-compare intro'
);

// Column 1
rep(
  '<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">消费时代 · 1983–2026</p>\n            <h3 class="text-xl font-bold text-slate-900">任天堂模式</h3>',
  '<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">第一档 · 聊天消耗</p>\n            <h3 class="text-xl font-bold text-slate-900">对话型 AI</h3>',
  'model col1 header'
);

rep(
  '<span class="compare-label">谁来创造内容</span>\n                  <span class="compare-value">厂商专业团队 · 百人以上</span>',
  '<span class="compare-label">Token 用在哪</span>\n                  <span class="compare-value">对话、问答、轻量生成</span>',
  'model col1 row1'
);

rep(
  '<span class="compare-label">内容供给规模</span>\n                  <span class="compare-value">每年数款旗舰，百款新游</span>',
  '<span class="compare-label">付费习惯</span>\n                  <span class="compare-value">月活极大，付费用户占比极低</span>',
  'model col1 row2'
);

rep(
  '<span class="compare-label">核心收入来源</span>\n                  <span class="compare-value">硬件销售 + 自研游戏售卖</span>',
  '<span class="compare-label">单位 Token 溢价</span>\n                  <span class="compare-value">低 · 流量摊薄</span>',
  'model col1 row3'
);

rep(
  '<span class="compare-label">增长上限</span>\n                  <span class="compare-value">线性 · 受团队产能硬约束</span>',
  '<span class="compare-label">典型代表</span>\n                  <span class="compare-value">豆包等超大 DAU 产品</span>',
  'model col1 row4'
);

rep(
  '<span class="compare-label">AI 时代适应性</span>\n                  <span class="compare-value text-red-500">封闭体系，难以转型</span>',
  '<span class="compare-label">Fuse 差异</span>\n                  <span class="compare-value text-red-500">不是我们的战场</span>',
  'model col1 row5'
);

// Column 2
rep(
  '<p class="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">开发者时代 · 2008–今</p>\n            <h3 class="text-xl font-bold text-slate-900">苹果 App Store 模式</h3>',
  '<p class="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">第二档 · 一次性生成</p>\n            <h3 class="text-xl font-bold text-slate-900">生成型 AI 工具</h3>',
  'model col2 header'
);

rep(
  '<span class="compare-label">谁来创造内容</span>\n                  <span class="compare-value">专业开发者 · 需编程能力</span>',
  '<span class="compare-label">Token 用在哪</span>\n                  <span class="compare-value">图片、文案、单次代码/素材生成</span>',
  'model col2 row1'
);

rep(
  '<span class="compare-label">内容供给规模</span>\n                  <span class="compare-value">每年百万级 APP</span>',
  '<span class="compare-label">付费习惯</span>\n                  <span class="compare-value">订阅或按次，用完即走</span>',
  'model col2 row2'
);

rep(
  '<span class="compare-label">核心收入来源</span>\n                  <span class="compare-value">平台 30% 抽成 + 开发者订阅</span>',
  '<span class="compare-label">单位 Token 溢价</span>\n                  <span class="compare-value">中 · 难沉淀持续消耗</span>',
  'model col2 row3'
);

rep(
  '<span class="compare-label">增长上限</span>\n                  <span class="compare-value">指数级 · 受开发者数量约束</span>',
  '<span class="compare-label">典型代表</span>\n                  <span class="compare-value">Midjourney、Copilot 等</span>',
  'model col2 row4'
);

rep(
  '<span class="compare-label">AI 时代适应性</span>\n                  <span class="compare-value text-blue-600">开放生态，但需编程门槛</span>',
  '<span class="compare-label">Fuse 差异</span>\n                  <span class="compare-value text-blue-600">我们做得更深：可运行作品</span>',
  'model col2 row5'
);

// Column 3
rep(
  '<p class="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-2">AI 创造时代 · 2026+</p>\n            <h3 class="text-xl font-bold text-slate-900">Fuse · AI 创造时代原生模式</h3>',
  '<p class="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-2">第三档 · 可付费作品</p>\n            <h3 class="text-xl font-bold text-slate-900">Fuse · 四条线 Token 引擎</h3>',
  'model col3 header'
);

rep(
  '<span class="compare-label">谁来创造内容</span>\n                  <span class="compare-value text-fuse-orange font-semibold">每个人 · 一句话创造</span>',
  '<span class="compare-label">Token 用在哪</span>\n                  <span class="compare-value text-fuse-orange font-semibold">工具 / 游戏 / 短剧 / 教育</span>',
  'model col3 row1'
);

rep(
  '<span class="compare-label">内容供给规模</span>\n                  <span class="compare-value text-fuse-orange font-semibold">亿级互动内容 · UGC 无限供给</span>',
  '<span class="compare-label">付费习惯</span>\n                  <span class="compare-value text-fuse-orange font-semibold">创作即付费 · 追更即消耗</span>',
  'model col3 row2'
);

rep(
  '<span class="compare-label">核心收入来源</span>\n                  <span class="compare-value text-fuse-orange font-semibold">Token 订阅 + 平台抽成 + API</span>',
  '<span class="compare-label">单位 Token 溢价</span>\n                  <span class="compare-value text-fuse-orange font-semibold">高 · 行业最好一档</span>',
  'model col3 row3'
);

rep(
  '<span class="compare-label">增长上限</span>\n                  <span class="compare-value text-fuse-orange font-semibold">超指数 · 创造者网络效应</span>',
  '<span class="compare-label">产品验证</span>\n                  <span class="compare-value text-fuse-orange font-semibold">Lingguang 已上线 · Fusee 刚发布</span>',
  'model col3 row4'
);

rep(
  '<span class="compare-label">AI 时代适应性</span>\n                  <span class="compare-value text-emerald-600 font-semibold">原生 AI · 创造即平台</span>',
  '<span class="compare-label">下一步</span>\n                  <span class="compare-value text-emerald-600 font-semibold">ZAKA 短剧 · 教育</span>',
  'model col3 row5'
);

rep(
  'AI 创造时代还没有赢家。Fuse 的机会，是成为<strong class="text-fuse-orange"> AI 创造时代的基础设施</strong>——不是复制任天堂，也不是复制 App Store，而是定义第三种范式。',
  '第三档里还没有赢家。Fuse 的机会，是用<strong class="text-fuse-orange">工具、游戏、连载短剧、教育</strong>四条线，拿下最高的单位 Token 溢价，成为 C 端 Token 消耗的主入口之一。',
  'model-compare footer'
);

// ── 7. s-nintendo → s-monetization-benchmark ──
const nintendoSectionOld = `      <!-- NINTENDO CHART -->
      <section id="s-nintendo" class="section-pad bg-white/40">
        <div class="max-w-5xl mx-auto glass rounded-3xl p-6 md:p-10 shadow-glass card-hover">
          <div class="rounded-2xl bg-slate-950 text-white p-5 border border-white/10 shadow-inner" data-quest-ui>
            <div class="flex items-center justify-between gap-4 mb-3">
              <p class="text-xs font-black tracking-[0.22em] text-red-200">BOSS · CLOSED CONTENT MONOPOLY</p>
              <p id="boss-meter-label" class="text-xs font-bold text-amber-200">Boss 关已发现</p>
            </div>
            <div id="boss-meter" class="boss-meter" aria-hidden="true"><span></span></div>
            <p class="mt-3 text-xs text-slate-300 leading-relaxed"></p>
          </div>
          <h2 class="mt-10 text-xl md:text-2xl font-bold" style="color:#E60012">封闭内容平台财报参照（任天堂 2020–2025E）</h2>
          <p class="text-xs text-slate-500 mt-2">单位：亿美元 · 数据来源：任天堂年度财报（汇率换算基于各财年平均日元/美元）</p>
          <div class="h-96 mt-8"><canvas id="chart-nintendo-combo"></canvas></div>
          <div class="mt-8 glass rounded-2xl p-5 flex gap-4 items-start border border-blue-100">
            <div class="w-10 h-10 rounded-full bg-fuse-blue text-white flex items-center justify-center shrink-0 bp-li bp-li-md shadow-sm" aria-hidden="true"><i data-lucide="badge-info"></i></div>
            <div><p class="font-bold text-fuse-blue text-sm">市场洞察</p>
            <p class="text-sm text-slate-600 mt-2 leading-relaxed">任天堂营收 2021 年见顶后进入调整期；2025E 受益于 Switch 2 预期回暖。软硬件销量高度相关，体现「软硬件一体化」生态协同。</p></div>
          </div>
                    <div class="mt-10 rounded-[2rem] bg-white p-6 md:p-8 shadow-glass ring-1 ring-slate-100 flex flex-col items-center text-center gap-6">
            <h3 class="text-2xl md:text-[2rem] font-extrabold text-slate-900 leading-tight">旧垄断的软肋与我们的机会</h3>
            <div class="mt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#s-market-vs" class="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-fuse-orange text-white font-bold text-base shadow-lg hover:opacity-90 transition-opacity">
                <i data-lucide="shield-alert"></i>
                旧垄断的软肋 · 破局点
              </a>
              <a href="#s-why-success" class="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-fuse-blue text-white font-bold text-base shadow-lg hover:opacity-90 transition-opacity">
                <i data-lucide="trophy"></i>
                为什么成功
              </a>
            </div>
          </div>
        </div>
      </section>`;

const monetizationSectionNew = `      <!-- MONETIZATION BENCHMARK -->
      <section id="s-monetization-benchmark" class="section-pad bg-white/40">
        <div class="max-w-5xl mx-auto glass rounded-3xl p-6 md:p-10 shadow-glass card-hover">
          <div class="rounded-2xl bg-slate-950 text-white p-5 border border-white/10 shadow-inner" data-quest-ui>
            <div class="flex items-center justify-between gap-4 mb-3">
              <p class="text-xs font-black tracking-[0.22em] text-amber-200">BOSS · MONETIZATION TIER</p>
              <p id="boss-meter-label" class="text-xs font-bold text-amber-200">Boss 关已发现</p>
            </div>
            <div id="boss-meter" class="boss-meter" aria-hidden="true"><span></span></div>
            <p class="mt-3 text-xs text-slate-300 leading-relaxed">读完变现档位对比后，通关打开完整愿景与核心论点。</p>
          </div>
          <p class="section-kicker mb-2 text-slate-500 mt-10">BENCHMARK · MONETIZATION</p>
          <h2 class="text-2xl md:text-[2rem] font-extrabold text-gradient leading-snug tracking-tight">变现档位：我们处在最好的一档</h2>
          <p class="mt-4 text-slate-600 text-sm md:text-base max-w-3xl">超大月活不等于会变现。对比行业常见路径，我们的付费发生在真正消耗 Token 的创作行为上。</p>

          <div class="mt-10 grid md:grid-cols-2 gap-6">
            <article class="rounded-3xl bg-slate-50 border border-slate-200 p-6 md:p-7">
              <p class="text-[10px] font-black tracking-[0.18em] text-slate-500">行业常见路径</p>
              <h3 class="mt-3 text-xl font-black text-slate-900 leading-snug">豆包：超大 DAU，付费极薄</h3>
              <p class="mt-3 text-sm text-slate-600 leading-relaxed">月活 <strong class="text-slate-900">3.45 亿</strong>，付费用户仅小几十万。Token 主要消耗在对话与轻量生成，用户用完即走——流量很大，单用户变现留在行业中下档。</p>
              <div class="mt-5 rounded-2xl bg-white border border-slate-200 p-4">
                <p class="text-[10px] font-black tracking-[0.16em] text-slate-500">结构特征</p>
                <ul class="mt-2 space-y-2 text-sm text-slate-600">
                  <li>· 高月活、低付费转化</li>
                  <li>· Token 停在聊天，难形成作品级消耗</li>
                  <li>· 单位 Token 溢价低</li>
                </ul>
              </div>
            </article>
            <article class="rounded-3xl bg-gradient-to-br from-fuse-blue to-indigo-700 text-white p-6 md:p-7 shadow-xl shadow-blue-900/18">
              <p class="text-[10px] font-black tracking-[0.18em] text-cyan-100">FUSE · 四条线</p>
              <h3 class="mt-3 text-xl font-black leading-snug">付费发生在创作行为上</h3>
              <p class="mt-3 text-sm text-blue-50/85 leading-relaxed">Lingguang 已验证：用户为「生成 → 使用 → 继续创作」付费，而不是为聊天付费。Fusee、ZAKA、教育把同一枚 Token 的消耗做深，转化与变现在行业里是最好的那一档。</p>
              <div class="mt-5 rounded-2xl bg-white/10 border border-white/15 p-4">
                <p class="text-[10px] font-black tracking-[0.16em] text-amber-200">结构特征</p>
                <ul class="mt-2 space-y-2 text-sm text-blue-50/90">
                  <li>· 工具 / 游戏 / 短剧 / 教育四条线</li>
                  <li>· 可玩、可追更、可学习的作品级消耗</li>
                  <li>· 目标：最高单位 Token 溢价</li>
                </ul>
              </div>
            </article>
          </div>

          <div class="mt-8 rounded-2xl bg-amber-50 border border-amber-200/80 p-5 md:p-6">
            <p class="text-[10px] font-black tracking-[0.18em] text-amber-800">THE POINT</p>
            <p class="mt-2 text-sm md:text-base text-slate-800 leading-relaxed font-semibold">不是 DAU 竞赛，是 Token 能不能变成用户愿意付费的作品。完整数据与产品证据见<a href="#s-core-thesis" class="text-fuse-blue font-bold underline underline-offset-4 hover:text-fuse-orange">核心论点</a>。</p>
          </div>

          <div class="mt-10 rounded-[2rem] bg-white p-6 md:p-8 shadow-glass ring-1 ring-slate-100 flex flex-col items-center text-center gap-6">
            <h3 class="text-2xl md:text-[2rem] font-extrabold text-slate-900 leading-tight">变现档位看清了，下一步看为什么是我们</h3>
            <div class="mt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#s-market-vs" class="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-fuse-orange text-white font-bold text-base shadow-lg hover:opacity-90 transition-opacity">
                <i data-lucide="zap"></i>
                破局点 · 结构性对比
              </a>
              <a href="#s-core-thesis" class="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-fuse-blue text-white font-bold text-base shadow-lg hover:opacity-90 transition-opacity">
                <i data-lucide="target"></i>
                核心论点 · 完整证据
              </a>
            </div>
          </div>
        </div>
      </section>`;

rep(nintendoSectionOld, monetizationSectionNew, 'nintendo → monetization section');

// gate-boss text
rep(
  '<h2 class="text-2xl md:text-3xl font-black">垄断破局 Boss · 飞机大战</h2>\n              <p class="mt-3 text-sm text-white/78 leading-relaxed">读完行业对标后，击穿封闭内容垄断的护盾，通关后直接打开完整最终愿景页。Boss 关作为「对标与愿景」模块的触发节点。</p>',
  '<h2 class="text-2xl md:text-3xl font-black">变现档位 Boss · 飞机大战</h2>\n              <p class="mt-3 text-sm text-white/78 leading-relaxed">读完变现档位对比后，通关后直接打开完整最终愿景页与核心论点。</p>',
  'gate-boss text'
);

rep(
  '请挑战垄断破局 Boss 飞机大战；Boss 通关后会直接打开完整最终愿景页。',
  '请挑战变现档位 Boss 飞机大战；Boss 通关后会直接打开完整最终愿景页。',
  'vision locked text'
);

// ── 8. s-solution ──
rep(
  '我们的解决方案：FuseAI 互动内容生成平台',
  '我们的解决方案：一套 Token 引擎 × 四个消耗场景',
  'solution title'
);

rep(
  '三位一体核心架构：平台为核心 · 引擎做生成 · 场景做验证',
  '四条线共用引擎 · Fuse Store 做计费与分发 · 硬件为可选入口',
  'solution subtitle'
);

rep(
  '<strong class="text-slate-800">收入结构对齐：</strong>合并报表自上而下拆为三块——<strong>平台服务经常性收入</strong>（AI Token 订阅/充值、API 与 Fuse Store 抽成，核心增长引擎）；<strong>示范内容与模板</strong>（官方示范作品与模板交易）；<strong>硬件入口</strong>（Fuse PlayCanvas 等可选远期设备，非当前主赌注）。',
  '<strong class="text-slate-800">四条线：</strong><strong>工具</strong>（Lingguang，已验证）· <strong>游戏</strong>（Fusee，刚发布）· <strong>连载短剧</strong>（ZAKA，即将上线）· <strong>教育</strong>（准备中）。共用 Fuse Store 与 AI 引擎，硬件为可选远期入口。',
  'solution revenue intro'
);

rep(
  '❶ Fuse Store · 核心平台',
  '❶ 四条线 · Token 场景',
  'solution tab1'
);

rep(
  '<h3 class="text-xl font-bold text-amber-600">Fuse Store：创作 · 分发 · 交易中枢</h3>',
  '<h3 class="text-xl font-bold text-amber-600">四条线：工具 / 游戏 / 短剧 / 教育</h3>',
  'solution pillar1 title'
);

rep(
  '<span class="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-orange-50 text-amber-700 ring-1 ring-orange-100">平台为核心 · 经常性收入主引擎</span>',
  '<span class="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-orange-50 text-amber-700 ring-1 ring-orange-100">同一套 Token 计费 · 逐级抬高溢价</span>',
  'solution pillar1 badge'
);

rep(
  '<strong class="text-slate-900">产品设计：</strong>Fuse Store 是整个生态的核心：自然语言生成、交互逻辑编排、多端预览、审核上架、版本树、交易结算与分成。用户一句话生成互动内容，平台自动完成模板匹配、资产组装、交互调试与分发。',
  '<strong class="text-slate-900">产品设计：</strong>Lingguang 验证工具线；Fusee 验证游戏线；ZAKA 把消耗延伸到连载短剧；教育覆盖高频学习。四条线共用 Fuse Store 的分发、版本树、交易与 Token 计费。',
  'solution pillar1 body'
);

rep(
  '<strong class="text-amber-700">差异化点：</strong>传统商店分发成品，Fuse Store 分发「可继续被 AI 改造的互动内容种子」——游戏、叙事、教育、工具、生活服务等均可上架。',
  '<strong class="text-amber-700">差异化点：</strong>不是聊天型 AI，也不是一次性生成工具——每一枚 Token 都变成可运行、可玩、可追更的作品，付费发生在创作行为上。',
  'solution pillar1 diff'
);

rep(
  '<strong class="text-slate-900">场景验证：</strong>UGC 以游戏为主，同步覆盖工具、生活、教育、社交等场景——同一引擎，多类互动内容。',
  '<strong class="text-slate-900">场景验证：</strong>工具、游戏、连载短剧、教育四条线共用同一引擎——Lingguang 与 Fusee 已上线，ZAKA 与教育接力抬升单位 Token 价值。',
  'solution pillar2 verify'
);

rep(
  '<h3 class="mt-3 text-xl font-black">平台优先如何闭环增长</h3>',
  '<h3 class="mt-3 text-xl font-black">四条线如何闭环 Token 消耗</h3>',
  'solution closed loop title'
);

rep(
  '<p class="font-bold text-orange-100">Store 承接全链路</p>\n                  <p class="mt-2 text-white/68 leading-relaxed">生成、上架、发现、交易、二创与分成均在 Fuse Store 完成，平台经常性收入为核心。</p>',
  '<p class="font-bold text-orange-100">工具 · 游戏</p>\n                  <p class="mt-2 text-white/68 leading-relaxed">Lingguang 与 Fusee 已跑通生成→使用→付费，证明 Token 能卖出高毛利。</p>',
  'solution loop1'
);

rep(
  '<p class="font-bold text-violet-100">引擎驱动 UGC 供给</p>\n                  <p class="mt-2 text-white/68 leading-relaxed">AI 降低创作门槛，互动内容供给从专业团队扩展到每一个用户。</p>',
  '<p class="font-bold text-violet-100">短剧 · 教育</p>\n                  <p class="mt-2 text-white/68 leading-relaxed">ZAKA 把一次性消耗变成追更；教育把消耗锁进高频学习场景。</p>',
  'solution loop2'
);

// ── 9. s-fuse-store intro ──
rep(
  'Fuse Store：AI 互动内容创作与分发中枢',
  'Fuse Store：四条线共用的 Token 计费与分发底座',
  'fuse-store title'
);

rep(
  '一句话概括：Fuse Store 是 FuseAI 的核心平台，把自然语言生成、交互逻辑编排、多端预览、审核上架、版本树、交易分成与 Token 计费放进同一个闭环。Web / 手机 / PC 承担规模化触达，PlayCanvas 为可选远期沉浸入口。',
  '一句话概括：工具、游戏、连载短剧、教育四条线共用 Fuse Store——生成、上架、版本树、交易与 Token 计费在同一闭环里。Web / 手机 / PC 承担规模化触达，PlayCanvas 为可选远期入口。',
  'fuse-store intro'
);

// ── 10. s-game-n 去掉虚构数据 ──
rep(
  '一周 10 万下载',
  '快速传播',
  'game-n fake download'
);

// ── 11. s-why-success ──
rep(
  '为什么成功：不是单点产品，而是方法、模式、时机与团队的叠加',
  '为什么成功：商业化稀缺性 × 四条线 × 时机与团队',
  'why-success title'
);

rep(
  '<strong class="text-violet-800">AI Native 的商业模式</strong> — 收入来自 AI 生成、内容交易、平台分成、IP 模板复用',
  '<strong class="text-violet-800">商业化稀缺性</strong> — 工具与游戏已验证付费；同一枚 Token 在四条线里卖出更高毛利',
  'why-success business'
);

rep(
  '<strong class="text-orange-700">时机</strong> — AI 互动内容爆发前夜；Astrocade、Aippy 融资说明资本寻找下一代游戏创作与分发生态',
  '<strong class="text-orange-700">时机</strong> — 工具/游戏/短剧/教育四条线梯次上线；资本已在押注 AI 原生互动创作',
  'why-success timing'
);

rep(
  '<strong class="text-emerald-700">人才团队</strong> — AI 产品、资本、游戏工程、IP 美术全覆盖',
  '<strong class="text-emerald-700">人才团队</strong> — 覆盖工具、游戏、平台与 Token 商业化全链路',
  'why-success team'
);

rep(
  'Fuse 负责把 AI 互动内容机会做成平台生态',
  'Fuse 负责把 Token 消耗锁在工具、游戏、短剧、教育四条线上',
  'why-success one sentence'
);

// ── 12. 财务五分部 HTML ──
const finInputsOld = `              <div class="grid sm:grid-cols-3 gap-3 items-end">
                <label class="block"><span class="text-slate-500 font-semibold">硬件营收（亿美元）</span><input type="number" step="any" id="fin-inp-rev-hw" class="fin-num-inp mt-1" value="60" /></label>
                <label class="block"><span class="text-slate-500 font-semibold">示范内容营收（亿美元）</span><input type="number" step="any" id="fin-inp-rev-ct" class="fin-num-inp mt-1" value="15" /></label>
                <label class="block"><span class="text-slate-500 font-semibold">平台经常性营收（亿美元）</span><input type="number" step="any" id="fin-inp-rev-svc" class="fin-num-inp mt-1" value="100" /></label>
              </div>`;

const finInputsNew = `              <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 items-end">
                <label class="block"><span class="text-slate-500 font-semibold">工具线营收（亿美元）</span><input type="number" step="any" id="fin-inp-rev-tool" class="fin-num-inp mt-1" value="45" /></label>
                <label class="block"><span class="text-slate-500 font-semibold">游戏线营收（亿美元）</span><input type="number" step="any" id="fin-inp-rev-game" class="fin-num-inp mt-1" value="50" /></label>
                <label class="block"><span class="text-slate-500 font-semibold">连载短剧营收（亿美元）</span><input type="number" step="any" id="fin-inp-rev-drama" class="fin-num-inp mt-1" value="40" /></label>
                <label class="block"><span class="text-slate-500 font-semibold">教育线营收（亿美元）</span><input type="number" step="any" id="fin-inp-rev-edu" class="fin-num-inp mt-1" value="25" /></label>
                <label class="block"><span class="text-slate-500 font-semibold">硬件入口营收（亿美元）</span><input type="number" step="any" id="fin-inp-rev-hw" class="fin-num-inp mt-1" value="15" /></label>
              </div>`;

rep(finInputsOld, finInputsNew, 'finance inputs');

rep(
  '<p class="text-xs text-slate-500 mt-1">三部营收之和 · 公式</p>',
  '<p class="text-xs text-slate-500 mt-1">五部营收之和 · 公式</p>',
  'finance kpi caption'
);

// ── 13. recalcBpFinance JS ──
const recalcOld = `    var revHw = finParseInput('fin-inp-rev-hw', 25);
    var revCt = finParseInput('fin-inp-rev-ct', 10);
    var revSvc = finParseInput('fin-inp-rev-svc', 140);
    var marginPct = finParseInput('fin-inp-margin-pct', 10);
    var msg = document.getElementById('fin-msg');
    if (msg) msg.textContent = '';

    var wan = (asp > 0 && fx > 0) ? (revHw * 1e8 * fx / asp / 1e4) : NaN;
    var revSum = revHw + revCt + revSvc;`;

const recalcNew = `    var revTool = finParseInput('fin-inp-rev-tool', 45);
    var revGame = finParseInput('fin-inp-rev-game', 50);
    var revDrama = finParseInput('fin-inp-rev-drama', 40);
    var revEdu = finParseInput('fin-inp-rev-edu', 25);
    var revHw = finParseInput('fin-inp-rev-hw', 15);
    var marginPct = finParseInput('fin-inp-margin-pct', 10);
    var msg = document.getElementById('fin-msg');
    if (msg) msg.textContent = '';

    var wan = (asp > 0 && fx > 0) ? (revHw * 1e8 * fx / asp / 1e4) : NaN;
    var revSum = revTool + revGame + revDrama + revEdu + revHw;`;

rep(recalcOld, recalcNew, 'recalcBpFinance vars');

const fiOld = `fi.innerHTML = '本图承接上方<strong>六年发展路径</strong>：合并营收柱与净利线与参数板分部营收联动。<strong>第 6 年</strong>终局：<strong>' + finFmtMoney(revSum, 2) + ' </strong>亿美元分部营收之和（硬件&nbsp;' + finFmtMoney(revHw, 2) + ' · 示范内容&nbsp;' + finFmtMoney(revCt, 2) + ' · 平台经常性&nbsp;' + finFmtMoney(revSvc, 2) + '）；柱状第<strong> 1 </strong>年封顶 <strong>' + finFmtMoney(FIN_YEAR1_MERGED_REV_CAP_USD, 2) + '</strong> 亿美元；第<strong> 6 </strong>年净利＝终局营收×<strong>' + finFmtMoney(marginPct, 2) + '%</strong>。';`;

const fiNew = `fi.innerHTML = '本图承接上方<strong>六年发展路径</strong>：合并营收柱与净利线与参数板分部营收联动。<strong>第 6 年</strong>终局：<strong>' + finFmtMoney(revSum, 2) + ' </strong>亿美元分部营收之和（工具&nbsp;' + finFmtMoney(revTool, 2) + ' · 游戏&nbsp;' + finFmtMoney(revGame, 2) + ' · 短剧&nbsp;' + finFmtMoney(revDrama, 2) + ' · 教育&nbsp;' + finFmtMoney(revEdu, 2) + ' · 硬件&nbsp;' + finFmtMoney(revHw, 2) + '）；柱状第<strong> 1 </strong>年封顶 <strong>' + finFmtMoney(FIN_YEAR1_MERGED_REV_CAP_USD, 2) + '</strong> 亿美元；第<strong> 6 </strong>年净利＝终局营收×<strong>' + finFmtMoney(marginPct, 2) + '%</strong>。';`;

rep(fiOld, fiNew, 'fin-finance-intro template');

const fbOld = `fb.innerHTML = '<strong>第 6 年</strong>：平台经常性营收<strong>' + finFmtMoney(revSvc, 2) + ' </strong>亿美元作为核心增长主轴；示范内容营收<strong>' + finFmtMoney(revCt, 2) + ' </strong>亿美元、硬件入口营收<strong>' + finFmtMoney(revHw, 2) + ' </strong>亿美元共同支撑。PlayCanvas 进入 AI 创意控制台形态，硬件等价出货约<strong>' + (isFinite(wan) ? Math.round(wan).toLocaleString('zh-CN') : '—') + '</strong> 万台（' + finCaptionWanTai(wan) + '），作为入口规模参考；合并营收<strong>' + finFmtMoney(revSum, 2) + ' </strong>亿美元。';`;

const fbNew = `fb.innerHTML = '<strong>第 6 年</strong>：工具<strong>' + finFmtMoney(revTool, 2) + '</strong> · 游戏<strong>' + finFmtMoney(revGame, 2) + '</strong> · 短剧<strong>' + finFmtMoney(revDrama, 2) + '</strong> · 教育<strong>' + finFmtMoney(revEdu, 2) + '</strong> 亿美元四条线为主轴；硬件入口<strong>' + finFmtMoney(revHw, 2) + ' </strong>亿美元。PlayCanvas 等价出货约<strong>' + (isFinite(wan) ? Math.round(wan).toLocaleString('zh-CN') : '—') + '</strong> 万台；合并营收<strong>' + finFmtMoney(revSum, 2) + ' </strong>亿美元。';`;

rep(fbOld, fbNew, 'fin-fiveyear-ipo template');

rep(
  "var finIds = ['fin-inp-fx', 'fin-inp-asp-cny', 'fin-inp-margin-pct', 'fin-inp-rev-hw', 'fin-inp-rev-ct', 'fin-inp-rev-svc'];",
  "var finIds = ['fin-inp-fx', 'fin-inp-asp-cny', 'fin-inp-margin-pct', 'fin-inp-rev-tool', 'fin-inp-rev-game', 'fin-inp-rev-drama', 'fin-inp-rev-edu', 'fin-inp-rev-hw'];",
  'finIds array'
);

// Remove nintendo chart JS
rep(
  "  /* 任天堂营收与同比 — 幻灯片所载 */\n  makeComboChart('chart-nintendo-combo', '营业总收入（亿美元）', [122.6,160.1,130,114.5,113.9,136.1], '#E60012', '同比增长率（%）', [0,30.6,-18.8,-11.9,-0.5,19.5], true);\n\n",
  '',
  'remove nintendo chart js'
);

// ── 14. NAV & quest modules ──
rep(
  "    { title: '00 封面', items: [\n      ['封面', '#s-hero']\n    ] },",
  "    { title: '00 封面', items: [\n      ['封面', '#s-hero'],\n      ['总纲 · 四条线', '#s-thesis-brief']\n    ] },",
  'nav thesis brief'
);

rep(
  "      ['行业对标 · 垄断破局', '#s-nintendo'],",
  "      ['变现档位', '#s-monetization-benchmark'],",
  'nav monetization'
);

rep(
  "    { key: 'finance', gate: '#gate-finance', next: '#s-nintendo', title: '模块四：增长与融资', done: '增长融资通关：天使轮资金分配与增长路径已对齐。' },\n    { key: 'boss', gate: '#gate-boss',      next: '#s-vision',       title: '模块五：对标与愿景 Boss', done: '对标愿景通关：完整最终愿景已打开。' }",
  "    { key: 'finance', gate: '#gate-finance', next: '#s-monetization-benchmark', title: '模块四：增长与融资', done: '增长融资通关：天使轮资金分配与增长路径已对齐。' },\n    { key: 'boss', gate: '#gate-boss',      next: '#s-vision',       title: '模块五：变现档位 Boss', done: '变现档位通关：完整最终愿景已打开。' }",
  'quest modules'
);

rep(
  "    var bossTriggerIdx = NAV_INDEX['#s-nintendo'] || 0;",
  "    var bossTriggerIdx = NAV_INDEX['#s-monetization-benchmark'] || 0;",
  'bossTriggerIdx'
);

rep(
  '      #s-nintendo .glass {',
  '      #s-monetization-benchmark .glass {',
  'css monetization benchmark'
);

rep(
  "    { id: 's-nintendo', title: 'Boss · 垄断破局' },",
  "    { id: 's-monetization-benchmark', title: '变现档位' },",
  'pdf chapters nintendo'
);

// ── 15. 天使轮用途 ──
rep(
  '平台建设为核心投入，内容、入口、AI、市场和团队共同支撑。',
  '四条线产品与 Token 引擎为核心，市场、团队与硬件预研共同支撑。',
  'pre-a intro'
);

const preaCards = [
  ['硬件研发与生产', '10%', '四条线产品与内容', '40%', 'Lingguang、Fusee、ZAKA、教育四条线的产品迭代、内容生态与上线推广，以及 Fuse Store 平台能力。'],
  ['平台建设与运营', '30%', 'AI 引擎与 Token 成本', '20%', '共用 AI 创作引擎、Token 成本优化、多场景生成能力与 Fuse Store 计费链路。'],
  ['市场推广与品牌', '20%', '市场推广与品牌', '20%', ''],
  ['AI 引擎研发', '10%', '团队建设与运营', '15%', ''],
  ['内容生态建设', '15%', '硬件预研', '5%', 'Fuse PlayCanvas 远期形态验证与小批量试产，非当前主赌注。'],
  ['团队建设与运营', '15%', '', '', ''],
];

// Update pre-a cards - do simpler replacements
rep(
  '<p class="font-bold text-fuse-blue">硬件研发与生产</p>\n                      <p class="text-xs font-semibold text-slate-500 mt-0.5">10%</p>\n                      <p class="text-sm text-slate-600 mt-2 leading-relaxed">用于 Fuse PlayCanvas 芯片选型、ID/MD 设计、模具开发与小批量量产验证，保障新型硬件入口领先与可落地性。</p>',
  '<p class="font-bold text-fuse-blue">四条线产品与内容</p>\n                      <p class="text-xs font-semibold text-slate-500 mt-0.5">40%</p>\n                      <p class="text-sm text-slate-600 mt-2 leading-relaxed">Lingguang、Fusee、ZAKA、教育四条线的产品迭代、内容生态与上线推广，以及 Fuse Store 平台能力。</p>',
  'pre-a card1'
);

rep(
  '<p class="font-bold text-fuse-blue">平台建设与运营</p>\n                      <p class="text-xs font-semibold text-slate-500 mt-0.5">30%</p>',
  '<p class="font-bold text-fuse-blue">AI 引擎与 Token 成本</p>\n                      <p class="text-xs font-semibold text-slate-500 mt-0.5">20%</p>',
  'pre-a card2 header'
);

rep(
  '用于 Fuse Store 平台核心功能开发、服务器与 CDN、审核系统、版本树与交易结算，保障平台 MVP 到 1.0 商业闭环落地。',
  '共用 AI 创作引擎、Token 成本优化、多场景生成能力与 Fuse Store 计费链路。',
  'pre-a card2 body'
);

rep(
  '<p class="font-bold text-emerald-700">AI 引擎研发</p>\n                      <p class="text-xs font-semibold text-slate-500 mt-0.5">10%</p>',
  '<p class="font-bold text-emerald-700">团队建设与运营</p>\n                      <p class="text-xs font-semibold text-slate-500 mt-0.5">15%</p>',
  'pre-a card5 header'
);

rep(
  '<p class="font-bold text-violet-700">内容生态建设</p>\n                      <p class="text-xs font-semibold text-slate-500 mt-0.5">15%</p>',
  '<p class="font-bold text-violet-700">硬件预研</p>\n                      <p class="text-xs font-semibold text-slate-500 mt-0.5">5%</p>',
  'pre-a card4 header'
);

rep(
  '官方 IP 示范模板、UGC 激励、创作者分成与内容运营，构建平台早期供给与品质锚点。',
  'Fuse PlayCanvas 远期形态验证与小批量试产，非当前主赌注。',
  'pre-a card4 body'
);

rep(
  "        labels: ['平台建设与运营 30%', '市场推广与品牌 20%', '内容生态建设 15%', '团队建设与运营 15%', '硬件研发与生产 10%', 'AI 引擎研发 10%'],\n        datasets: [{\n          data: [30, 20, 15, 15, 10, 10],",
  "        labels: ['四条线产品与内容 40%', 'AI 引擎与 Token 20%', '市场推广与品牌 20%', '团队建设与运营 15%', '硬件预研 5%'],\n        datasets: [{\n          data: [40, 20, 20, 15, 5],",
  'pre-a chart data'
);

rep(
  "          backgroundColor: ['#3B82F6', '#059669', '#DC2626', '#8B5CF6', '#F59E0B', '#0891B2'],",
  "          backgroundColor: ['#3B82F6', '#0891B2', '#059669', '#8B5CF6', '#F59E0B'],",
  'pre-a chart colors'
);

// ── 16. s-core-thesis intro tweak ──
rep(
  '两款已上线产品验证商业化稀缺性，后续产品承接更高 Token 溢价。目标不是做又一个 AI 工具，而是成为 C 端 Token 消耗的主入口之一。',
  '上文从市场、破局、产品、增长与融资论证了同一结论：工具与游戏已验证稀缺性，短剧与教育把入口做宽。目标不是做又一个 AI 工具，而是成为 C 端 Token 消耗的主入口之一。',
  'core-thesis intro'
);

// ── 17. s-fiveyear card 1 ──
rep(
  'M1–12：Fuse Store 1.0 商业闭环、多端触达、官方 IP 示范、PlayCanvas 小批量验证。',
  'M1–12：Lingguang 放大、Fusee 起量、Fuse Store 1.0 闭环、PlayCanvas 小批量验证。',
  'fiveyear y1'
);

rep(
  '会员 / Token / 平台抽成构成经常性收入主线；PlayCanvas 迭代与 UGC 供给扩张。',
  '工具 + 游戏双线 Token 收入为主线；ZAKA 短剧启动内测。',
  'fiveyear y2-3'
);

rep(
  'API 开放、创作者工具与平台生态；PlayCanvas 演进为模块化 AI 创意控制台。',
  '短剧与教育正式上线；API 开放；PlayCanvas 演进为模块化创意控制台。',
  'fiveyear y4'
);

// ── 18. challengeCopy boss ──
rep(
  "      title: '挑战 05 · 对标愿景 Boss',",
  "      title: '挑战 05 · 变现档位 Boss',",
  'challenge boss title'
);

rep(
  '击穿「封闭内容垄断」护盾，8 次命中后打开完整愿景页。',
  '击穿「低溢价消耗」护盾，8 次命中后打开完整愿景页。',
  'challenge boss desc'
);

fs.writeFileSync(HTML, html, 'utf8');
console.log('\nDone. Wrote', HTML);
