#!/usr/bin/env node
/**
 * AppForge BP 全面迁移：品牌更名 + 游戏内容 → App 生成场景
 */
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'appforge', 'index.html');
let html = fs.readFileSync(target, 'utf8');

function rep(from, to) {
  if (typeof from === 'string') {
    html = html.split(from).join(to);
  } else {
    html = html.replace(from, to);
  }
}

// ── 品牌 ──
const brandPairs = [
  ['商业计划书-Lingguang', '商业计划书-AppForge'],
  ['Lingguang · AI App Builder BP', 'AppForge · AI App Builder BP'],
  ['Lingguang：AI 原生应用创作平台', 'AppForge：AI 原生应用创作平台'],
  ['Lingguang AI 应用创作平台', 'AppForge AI 应用创作平台'],
  ['Lingguang 不是', 'AppForge 不是'],
  ['Lingguang App', 'AppForge App'],
  ['Lingguang 核心能力', 'AppForge 核心能力'],
  ['Lingguang 工作台', 'AppForge 工作台'],
  ['Lingguang（本产品）', 'AppForge（本产品）'],
  ['Lingguang: AI App Builder', 'AppForge: AI App Builder'],
  ['Lingguang AI', 'AppForge AI'],
  ['Lingguang', 'AppForge'],
  ['灵光', 'AppForge'],
  ['lingguang-secret-logo', 'appforge-secret-logo'],
  ['data-lg-asset', 'data-af-asset'],
  ['/FuseAIGame/lingguang/', '/FuseAIGame/appforge/'],
  ['id="lingguang-secret-logo"', 'id="appforge-secret-logo"'],
];
brandPairs.forEach(([a, b]) => rep(a, b));

// ── Fuse / 任天堂 / 掌机 全局替换 ──
const globalPairs = [
  ['Fuse · AI 创造时代原生模式', 'AppForge · AI 创造时代原生模式'],
  ['Fuse 下一代模式', 'AppForge 下一代模式'],
  ['Fuse 要做的', 'AppForge 要做的'],
  ['Fuse 的机会', 'AppForge 的机会'],
  ['Fuse 掌机', 'AppForge'],
  ['Fuse Store', 'AppForge 工作台'],
  ['Fuse IP', 'AppForge 模板库'],
  ['Fuse AI', 'AppForge'],
  ['Fuse 不是', 'AppForge 不是'],
  ['Fuse 在', 'AppForge 在'],
  ['Fuse ', 'AppForge '],
  ['任天堂模式', '传统软件开发模式'],
  ['任天堂 Switch', '传统 IDE + 工程团队'],
  ['任天堂', '传统软件巨头'],
  ['掌机', '移动端'],
  ['全球掌机', '全球 AI 应用创作'],
  ['掌机市场', '应用创作市场'],
  ['掌机平台', '应用创作平台'],
  ['掌机行业', '应用开发行业'],
  ['掌机游戏', '移动应用'],
  ['主机', '企业软件'],
  ['街机时代', '桌面软件时代'],
  ['主机家庭时代', '互联网应用时代'],
  ['网络在线时代', '移动 App 时代'],
  ['玩游戏', '使用应用'],
  ['做游戏', '做应用'],
  ['玩家', '用户'],
  ['游戏行业', '应用开发行业'],
  ['游戏产业', '软件产业'],
  ['游戏创造', '应用创造'],
  ['游戏生成', '应用生成'],
  ['游戏模板生态', '游戏场景'],
  ['游戏分享分发', '教育场景'],
  ['游戏 N 创', '生活工具场景'],
  ['游戏销售', '应用增值'],
  ['游戏内购', '积分充值'],
  ['生成游戏', '生成应用'],
  ['可玩小游戏', '可运行应用'],
  ['可玩的游戏', '可用的应用'],
  ['AI 做游戏', 'AI 做应用'],
  ['AI 游戏', 'AI 应用'],
  ['UGC 游戏', 'UGC 应用'],
  ['官方 IP 游戏', '官方模板'],
  ['模板生态、分享分发、N 创', '游戏、教育、生活工具'],
  ['模板生态', '游戏场景'],
  ['分享分发', '教育场景'],
  ['N 创', '生活工具'],
  ['创作者经济', '场景模板库'],
  ['PART 07 · FUSE STORE', 'PART 07 · WORKBENCH'],
  ['PART 08 · GAMEPLAY SCENARIOS', 'PART 08 · GAME SCENARIOS'],
  ['PART 10 · LOOP STORYBOARD', 'PART 10 · LIFESTYLE TOOLS'],
  ['PART 06 · IP ROADMAP', 'PART 11 · TEMPLATE LIBRARY'],
  ['nintendo-red', 'red-500'],
  ['nintendo', 'legacy-dev'],
  ['BOSS · HANDHELD MONOPOLY', 'BOSS · CLOSED DEV TOOLS'],
  ['用Apple的模式，重做任天堂的生意', '用 AI 的模式，重做应用开发的生意'],
  ['任天堂赢在了消费时代', '传统开发赢在了工程师时代'],
  ['任天堂对标', '竞品对标'],
  ['任天堂财报', 'AI 应用创作赛道'],
  ['chart-nintendo-combo', 'chart-competitor-combo'],
  ['巨人的软肋', '旧范式的软肋'],
  ['游戏化', '互动化'],
];
globalPairs.forEach(([a, b]) => rep(a, b));

// ── 导航 ──
rep(`      ['模板生态', '#s-game-1'],
      ['分享分发', '#s-game-2'],
      ['开发者 API', '#s-game-n'],
      ['创作者经济', '#s-ip-plan-reserved']`, `      ['游戏场景', '#s-game-1'],
      ['教育场景', '#s-game-2'],
      ['生活工具', '#s-game-n'],
      ['场景模板库', '#s-ip-plan-reserved']`);

rep("done: '产品生态通关：AI 引擎、创作工作台、分享分发与创作者经济已连成闭环。'", "done: '产品生态通关：AI 引擎、创作工作台、游戏/教育/生活工具三大场景已连成闭环。'");

// ── 百年变局时间轴 ──
rep(`                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">1970s</p>
                <p class="mt-1 text-xs font-bold text-slate-700">街机时代</p>
                <p class="mt-1 text-[11px] text-slate-500 leading-relaxed">游戏进入公共空间，娱乐从私人走向社交</p>`, `                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">1990s</p>
                <p class="mt-1 text-xs font-bold text-slate-700">桌面软件时代</p>
                <p class="mt-1 text-[11px] text-slate-500 leading-relaxed">Office、Photoshop 定义生产力，软件仍是程序员专属</p>`);

rep(`                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">1983–2000</p>
                <p class="mt-1 text-xs font-bold text-slate-700">主机家庭时代</p>
                <p class="mt-1 text-[11px] text-slate-500 leading-relaxed">游戏进入每个家庭，任天堂与索尼奠定行业结构</p>`, `                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">2000–2008</p>
                <p class="mt-1 text-xs font-bold text-slate-700">互联网应用时代</p>
                <p class="mt-1 text-[11px] text-slate-500 leading-relaxed">Web 应用爆发，但仍需专业开发团队交付</p>`);

rep(`                <p class="text-[10px] font-bold text-blue-500 uppercase tracking-wider">2000s</p>
                <p class="mt-1 text-xs font-bold text-slate-700">网络在线时代</p>
                <p class="mt-1 text-[11px] text-slate-500 leading-relaxed">游戏变成社交基础设施，MMO 连接亿级玩家</p>`, `                <p class="text-[10px] font-bold text-blue-500 uppercase tracking-wider">2008–2020</p>
                <p class="mt-1 text-xs font-bold text-slate-700">移动 App 时代</p>
                <p class="mt-1 text-[11px] text-slate-500 leading-relaxed">App Store 打开长尾，全球 30 亿用户触达移动应用</p>`);

rep(`                <p class="mt-1 text-[11px] text-slate-500 leading-relaxed">App Store 打开长尾，游戏触达全球 30 亿用户</p>`, `                <p class="mt-1 text-[11px] text-slate-500 leading-relaxed">低代码平台出现，但复杂应用仍需工程师</p>`);

rep(`                    <div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-slate-400 shrink-0"></div><p class="text-sm text-blue-100/80">扩大玩游戏的人群</p></div>
                    <div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-slate-400 shrink-0"></div><p class="text-sm text-blue-100/80">创作者始终是专业团队</p></div>
                    <div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-slate-400 shrink-0"></div><p class="text-sm text-blue-100/80">内容供给受资金和人力严格约束</p></div>`, `                    <div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-slate-400 shrink-0"></div><p class="text-sm text-blue-100/80">扩大用软件的人群</p></div>
                    <div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-slate-400 shrink-0"></div><p class="text-sm text-blue-100/80">开发者始终是专业工程师</p></div>
                    <div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-slate-400 shrink-0"></div><p class="text-sm text-blue-100/80">应用供给受资金和人力严格约束</p></div>`);

rep(`                    <div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-orange-400 shrink-0"></div><p class="text-sm text-orange-100">游戏本质：从消费品变为创作媒介</p></div>`, `                    <div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-orange-400 shrink-0"></div><p class="text-sm text-orange-100">应用本质：从工具变为创作媒介</p></div>`);

rep(`              <p class="mt-3 text-sm text-slate-600 leading-relaxed">传统独立游戏核心原型需 1～3 个月。AI 赋能后，同等规模原型可在 1～24 小时内生成并可玩。这不是效率提升，是时间维度的坍缩。</p>`, `              <p class="mt-3 text-sm text-slate-600 leading-relaxed">传统 App 原型开发需 2～8 周。AI 赋能后，同等功能应用可在 1～24 小时内生成并可运行。这不是效率提升，是时间维度的坍缩。</p>`);

rep(`              <p class="mt-3 text-sm text-slate-600 leading-relaxed">传统小型游戏开发资金门槛 $10 万+ 起步。AI 工具链将同等输出的创作成本压缩至 $1,000 级别，供给端的壁垒正在全面崩塌。</p>`, `              <p class="mt-3 text-sm text-slate-600 leading-relaxed">传统小型 App 外包开发门槛 ¥5 万+ 起步。AI 工具链将同等输出的创作成本压缩至积分充值级别，供给端的壁垒正在全面崩塌。</p>`);

rep(`              <p class="mt-3 text-sm text-slate-600 leading-relaxed">全球专业游戏开发者不足百万，而全球玩家超 30 亿。AI 让每个玩家都有机会成为创造者，这是整个产业从未面对过的供给爆炸前夜。</p>`, `              <p class="mt-3 text-sm text-slate-600 leading-relaxed">全球专业开发者不足 3000 万，而全球智能手机用户超 50 亿。AI 让每个用户都有机会成为应用创造者，这是整个产业从未面对过的供给爆炸前夜。</p>`);

rep(`                <span class="text-2xl font-black text-fuse-orange">30亿</span>
                <span class="text-xs text-slate-500">潜在创造者规模</span>`, `                <span class="text-2xl font-black text-fuse-orange">50亿</span>
                <span class="text-xs text-slate-500">潜在创造者规模</span>`);

rep(`              <p class="mt-2 text-sm text-slate-700 leading-relaxed max-w-3xl">大模型在 2022–2025 年的能力跃迁，已经让"AI 做应用"从实验室概念变成了可量产的现实。但真正的浪潮才刚刚开始——Agent、多模态、世界模型的叠加，将在未来 2–3 年内把"人人创造"从可能推向必然。<strong class="text-fuse-orange">先建好创作基础设施的团队，将抢先定义游戏行业的新标准。</strong></p>`, `              <p class="mt-2 text-sm text-slate-700 leading-relaxed max-w-3xl">大模型在 2022–2025 年的能力跃迁，已经让"AI 做应用"从实验室概念变成了可量产的现实。但真正的浪潮才刚刚开始——Agent、多模态的叠加，将在未来 2–3 年内把"人人做应用"从可能推向必然。<strong class="text-fuse-orange">先建好创作基础设施的团队，将抢先定义应用开发行业的新标准。</strong></p>`);

// ── AI 六阶段 ──
const stages = [
  ['AI 第一次走进游戏工作室。单人产能提升 2–3×，但游戏本身还是老样子，玩家毫无感知', 'AI 第一次走进开发团队。Copilot 补全代码，工程师产能提升 2–3×，但应用交付模式未变'],
  ['阶段 2 · 素材爆发', '阶段 2 · 组件爆发'],
  ['角色、音效、剧本，一句话到位', 'UI 组件、表单、图表，一句话生成'],
  ['输入一句话，AI 给出角色设定、配音、台词、场景——一个人的产出顶过去一支小团队', '输入一句话，AI 给出页面布局、交互逻辑、数据模型——一个人的产出顶过去一支小团队'],
  ['阶段 3 · 原型可玩 ← 当前', '阶段 3 · 原型可用 ← 当前'],
  ['一句想法 → 可玩小游戏', '一句描述 → 可运行应用'],
  ['想法即游戏：AI 生成规则、关卡、UI，非程序员也能做出可发布的小游戏。创造门槛第一次跌至普通人可触及——<strong class="text-fuse-orange">谁在这里建好基础设施，谁就定义了下一代游戏规则。</strong>', '描述即应用：AI 生成界面、逻辑、数据，非程序员也能做出可发布的背单词工具、汇率计算器、小游戏。创造门槛第一次跌至普通人可触及——<strong class="text-fuse-orange">谁在这里建好基础设施，谁就定义了下一代应用开发规则。</strong>'],
  ['阶段 4 · AI 接管制作', '阶段 4 · AI 端到端交付'],
  ['不止是原型——AI 开始端到端生产完整游戏：关卡逻辑、剧情系统、数值配置、美术资产，全部按需生成。创作者只需提供方向，AI 包揽所有执行。独立开发者首次能在内容体量上与大厂正面竞争。', '不止是原型——AI 开始端到端生产完整应用：业务逻辑、数据存储、支付集成、多端适配，全部按需生成。创作者只需描述需求，AI 包揽所有执行。'],
  ['阶段 5 · 玩家成为制作人', '阶段 5 · 用户成为开发者'],
  ['游戏即平台，玩游戏就是造游戏', '应用即平台，用工具就是造工具'],
  ['创造权从开发工作室转移到玩家手中：游玩过程中即可调用 AI 生成新关卡、新剧情、新规则并发布给其他玩家。创作者数量从几万家工作室，扩展到数亿玩家——UGC 从"素材"升维到"完整游戏系统"。', '创造权从开发公司转移到用户手中：使用过程中即可调用 AI 修改功能、添加模块、调整界面并分享给他人。创作者从数百万开发者，扩展到数十亿用户。'],
  ['阶段 6 · 创造者即玩家', '阶段 6 · 人人皆开发者'],
  ['每个人可以像发朋友圈一样即时创造并分享游戏乐趣', '每个人可以像发朋友圈一样即时创造并分享专属应用'],
  ['创造门槛彻底归零：任何人只需一个想法，AI 自动完成所有制作与发行。"开发者"与"玩家"的身份边界消失。游戏不再是需要多年开发的产品——而是人人都能使用的新社交语言，生产关系完成根本性重构。', '创造门槛彻底归零：任何人只需一个想法，AI 自动完成所有开发与发布。"开发者"与"用户"的身份边界消失。应用不再是需要数月外包的产品——而是人人都能定制的个人工具，生产关系完成根本性重构。'],
  ['AI 对游戏创造的影响力：跃迁式指数增长', 'AI 对应用创造的影响力：跃迁式指数增长'],
  ['示意曲线表达 AI 能力对游戏创造的影响节奏', '示意曲线表达 AI 能力对应用创造的影响节奏'],
  ['直到普通人也能把创意变成可玩的游戏。', '直到普通人也能把创意变成可用的应用。'],
  ['创造游戏的权力，正在从专业工作室一步步向每一个普通人转移。', '创造应用的权力，正在从专业工程师一步步向每一个普通人转移。'],
  ['谁就能定义 AI 游戏时代的生产规则。', '谁就能定义 AI 应用时代的生产规则。'],
  ['阶段 3 已到来：<span class="text-orange-300">AI 可玩原型已是现实，下一轮路径正在开辟</span>', '阶段 3 已到来：<span class="text-orange-300">AI 可用原型已是现实，下一轮路径正在开辟</span>'],
];
stages.forEach(([a, b]) => rep(a, b));

// ── 先例案例 ──
rep(`                    <p class="text-xs font-bold text-blue-200/70 uppercase tracking-wider mb-1">Roblox</p>
                    <p class="text-sm text-blue-100/85 leading-relaxed">7000 万个 UGC 游戏、月活 3.8 亿——不是专业团队做的，是玩家做的。在 AI 工具出现之前。<strong class="text-white">AI 到来后，这个数字会是多少？</strong></p>`, `                    <p class="text-xs font-bold text-blue-200/70 uppercase tracking-wider mb-1">App Store</p>
                    <p class="text-sm text-blue-100/85 leading-relaxed">200 万+ 应用在架、全球 30 亿用户——但每一个都需要专业开发者。<strong class="text-white">AI 到来后，创造者会是 50 亿用户中的每一个。</strong></p>`);

rep(`                    <p class="text-xs font-bold text-blue-200/70 uppercase tracking-wider mb-1">Minecraft</p>
                    <p class="text-sm text-blue-100/85 leading-relaxed">1.4 亿月活。核心玩法不是"玩游戏"，而是"建造世界"。卖的是创造本身，不是内容消费。</p>`, `                    <p class="text-xs font-bold text-blue-200/70 uppercase tracking-wider mb-1">Notion / Airtable</p>
                    <p class="text-sm text-blue-100/85 leading-relaxed">用户自建工作流和数据库。核心不是"用工具"，而是"造工具"。验证了个性化应用的巨大需求。</p>`);

rep(`                    <p class="text-sm text-orange-100/85 leading-relaxed">孩子说"做一关恐龙跑酷"，情侣说"把我们的旅行照做成冒险游戏"，朋友说"把今天的笑话变成派对关卡"——当场发生，当场分享。<strong class="text-white">这不是功能，这是一种全新的社交语言。</strong></p>`, `                    <p class="text-sm text-orange-100/85 leading-relaxed">学生说"做一个托福背单词工具"，妈妈说"做一个家庭记账本"，股民说"做一个炒股模拟器"——当场描述，当场可用。<strong class="text-white">这不是功能，这是个人软件的民主化。</strong></p>`);

// ── 模式对比第三列 ──
rep(`                  <span class="compare-value">每一个玩家 · 一句话即可</span>`, `                  <span class="compare-value">每一个用户 · 一句话即可</span>`);
rep(`                  <span class="compare-value">亿级游戏生成 · 无上限</span>`, `                  <span class="compare-value">亿级应用生成 · 无上限</span>`);
rep(`                  <span class="compare-value">硬件 + 平台税 + AI 创作订阅</span>`, `                  <span class="compare-value">积分充值 + 订阅 + 平台抽成</span>`);
rep(`            <p class="text-base md:text-lg font-bold leading-snug">传统开发赢在了工程师时代，苹果定义了开发者时代。<span class="text-orange-300">AI 创造时代还没有赢家——这正是 AppForge 的机会所在。</span></p>`, `            <p class="text-base md:text-lg font-bold leading-snug">传统开发赢在了工程师时代，低代码平台打开了部分大门。<span class="text-orange-300">AI 创造时代还没有赢家——这正是 AppForge 的机会所在。</span></p>`);
rep(`          <p class="mt-3 text-slate-600 text-sm md:text-base max-w-3xl">传统软件巨头代表"消费时代"的极致——少数人做内容，多数人消费。苹果代表"开发者时代"的突破——专业开发者提供内容，平台做分发。AppForge 要做的，是百年变局带来的第三种范式：<strong class="text-fuse-orange">AI 让每个人都成为内容的创造者</strong>，平台不只是分发，而是创造的基础设施。</p>`, `          <p class="mt-3 text-slate-600 text-sm md:text-base max-w-3xl">传统软件开发代表"工程师时代"——只有会写代码的人才能做应用。低代码平台代表"半开放时代"——仍需学习拖拽和配置。AppForge 要做的，是 AI 创造时代的第三种范式：<strong class="text-fuse-orange">AI 让每个人都能用自然语言创造应用</strong>，覆盖游戏、教育、生活工具全场景。</p>`);

// ── s-game-1 游戏场景 ──
rep(`            <h2 class="text-2xl md:text-[2rem] font-extrabold text-gradient tracking-tight">游戏场景</h2>
            <p class="mt-3 max-w-3xl text-sm md:text-base text-slate-600 leading-relaxed">游戏场景分两条内容源头：用户从生活、情绪和脑洞生成个人游戏；官方围绕 场景模板库 生成高品质首发内容作为品质锚点。以下案例均来自用户游戏场景。</p>`, `            <h2 class="text-2xl md:text-[2rem] font-extrabold text-gradient tracking-tight">游戏场景</h2>
            <p class="mt-3 max-w-3xl text-sm md:text-base text-slate-600 leading-relaxed">用自然语言描述，即可生成可运行的小游戏。AppForge 覆盖休闲、社交、创意表达等游戏类应用——无需游戏引擎经验，一句话启动创作。</p>`);

rep(`            <h3 class="font-black text-lg text-slate-900">用户游戏场景</h3>
            <span class="text-xs text-slate-400">— 下列案例均为玩家真实创作场景</span>`, `            <h3 class="font-black text-lg text-slate-900">用户游戏创作案例</h3>
            <span class="text-xs text-slate-400">— 下列为真实可生成的游戏类应用场景</span>`);

rep(`              <div class="flex items-start gap-3"><span class="shrink-0 w-11 h-11 rounded-xl bg-rose-50 text-rose-500 bp-li bp-li-lg flex items-center justify-center mt-0.5 ring-1 ring-rose-100" aria-hidden="true"><i data-lucide="heart"></i></span><div><h3 class="font-bold text-slate-900">亲子时光</h3><p class="text-xs text-slate-500 mt-1">将爱与陪伴融入专属游戏</p></div></div>
              <details class="mt-4 group">
                <summary class="text-sm font-bold text-fuse-blue [&::-webkit-details-marker]:hidden marker:content-none">场景示例 ▾</summary>
                <ul class="mt-4 space-y-3 text-sm text-slate-600 list-disc pl-5">
                  <li><strong class="text-slate-800">亲子合照闯关：</strong>户外合照做人像主角，生成双人协作闯关小游戏。</li>
                  <li><strong class="text-slate-800">爸爸的专属童话：</strong>口述冒险故事，生成专属闯关冒险，把父爱做成童年游戏。</li>
                </ul>
              </details>`, `              <div class="flex items-start gap-3"><span class="shrink-0 w-11 h-11 rounded-xl bg-rose-50 text-rose-500 bp-li bp-li-lg flex items-center justify-center mt-0.5 ring-1 ring-rose-100" aria-hidden="true"><i data-lucide="gamepad-2"></i></span><div><h3 class="font-bold text-slate-900">休闲小游戏</h3><p class="text-xs text-slate-500 mt-1">一句话生成可玩的休闲应用</p></div></div>
              <details class="mt-4 group">
                <summary class="text-sm font-bold text-fuse-blue [&::-webkit-details-marker]:hidden marker:content-none">场景示例 ▾</summary>
                <ul class="mt-4 space-y-3 text-sm text-slate-600 list-disc pl-5">
                  <li><strong class="text-slate-800">恐龙跑酷：</strong>"做一个恐龙躲避障碍的跑酷游戏"，即时生成可运行版本。</li>
                  <li><strong class="text-slate-800">派对问答：</strong>"朋友聚会 trivia 问答游戏，支持自定义题目"，当场可玩。</li>
                </ul>
              </details>`);

rep(`              <div class="flex items-start gap-3"><span class="shrink-0 w-11 h-11 rounded-xl bg-pink-50 text-pink-500 bp-li bp-li-lg flex items-center justify-center mt-0.5 ring-1 ring-pink-100" aria-hidden="true"><i data-lucide="heart-handshake"></i></span><div><h3 class="font-bold text-slate-900">浪漫关系</h3><p class="text-xs text-slate-500 mt-1">用游戏说尽悄悄话</p></div></div>
              <details class="mt-4">
                <summary class="text-sm font-bold text-fuse-blue">场景示例 ▾</summary>
                <ul class="mt-4 space-y-3 text-sm text-slate-600 list-disc pl-5">
                  <li><strong class="text-slate-800">情侣旅行照定制：</strong>上传打卡照，生成恋爱跑酷、约会闯关小游戏。</li>
                  <li><strong class="text-slate-800">恋爱梗游戏：</strong>输入小约定与小故事，生成解谜，剧情尽是专属回忆。</li>
                  <li><strong class="text-slate-800">新婚拍照·婚礼世界：</strong>以婚纱照、婚礼现场与誓言等为素材，生成可漫步、可互动、可重温仪式的专属结婚纪念场景（广义上的游戏世界）；作品归档后，下次打开即可回到同一时空，回味当日光影与情绪。</li>
                </ul>
              </details>`, `              <div class="flex items-start gap-3"><span class="shrink-0 w-11 h-11 rounded-xl bg-pink-50 text-pink-500 bp-li bp-li-lg flex items-center justify-center mt-0.5 ring-1 ring-pink-100" aria-hidden="true"><i data-lucide="users"></i></span><div><h3 class="font-bold text-slate-900">社交互动</h3><p class="text-xs text-slate-500 mt-1">为社交场景定制互动游戏</p></div></div>
              <details class="mt-4">
                <summary class="text-sm font-bold text-fuse-blue">场景示例 ▾</summary>
                <ul class="mt-4 space-y-3 text-sm text-slate-600 list-disc pl-5">
                  <li><strong class="text-slate-800">情侣默契测试：</strong>输入两人信息，生成互动问答小游戏。</li>
                  <li><strong class="text-slate-800">团队破冰：</strong>"公司团建破冰小游戏，随机抽取话题"，当场分享链接。</li>
                </ul>
              </details>`);

rep(`              <div class="flex items-start gap-3"><span class="shrink-0 w-11 h-11 rounded-xl bg-amber-50 text-amber-600 bp-li bp-li-lg flex items-center justify-center mt-0.5 ring-1 ring-amber-100" aria-hidden="true"><i data-lucide="cat"></i></span><div><h3 class="font-bold text-slate-900">自我表达</h3><p class="text-xs text-slate-500 mt-1">每一种热爱都值得被看见</p></div></div>
              <details class="mt-4">
                <summary class="text-sm font-bold text-fuse-blue">场景示例 ▾</summary>
                <ul class="mt-4 space-y-3 text-sm text-slate-600 list-disc pl-5">
                  <li><strong class="text-slate-800">萌宠主角：</strong>日常照驱动，生成以宠物为主角的跑酷、寻宝小游戏。</li>
                  <li><strong class="text-slate-800">向往的生活：</strong>口述田园／海边愿景，一键生成治愈系休闲游戏。</li>
                </ul>
              </details>`, `              <div class="flex items-start gap-3"><span class="shrink-0 w-11 h-11 rounded-xl bg-amber-50 text-amber-600 bp-li bp-li-lg flex items-center justify-center mt-0.5 ring-1 ring-amber-100" aria-hidden="true"><i data-lucide="sparkles"></i></span><div><h3 class="font-bold text-slate-900">创意表达</h3><p class="text-xs text-slate-500 mt-1">把脑洞变成可玩作品</p></div></div>
              <details class="mt-4">
                <summary class="text-sm font-bold text-fuse-blue">场景示例 ▾</summary>
                <ul class="mt-4 space-y-3 text-sm text-slate-600 list-disc pl-5">
                  <li><strong class="text-slate-800">像素冒险：</strong>"复古像素风地下城探险，回合制战斗"，一键生成。</li>
                  <li><strong class="text-slate-800">治愈放置：</strong>"种田放置类游戏，每日浇水收菜"，适合碎片时间。</li>
                </ul>
              </details>`);

rep(`              <div class="flex items-start gap-3"><span class="shrink-0 w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 bp-li bp-li-lg flex items-center justify-center mt-0.5 ring-1 ring-rose-100" aria-hidden="true"><i data-lucide="graduation-cap"></i></span><div><h3 class="font-bold text-slate-900">情感共鸣</h3><p class="text-xs text-slate-500 mt-1">用游戏治愈与怀念</p></div></div>
              <details class="mt-4">
                <summary class="text-sm font-bold text-fuse-blue">场景示例 ▾</summary>
                <ul class="mt-4 space-y-3 text-sm text-slate-600 list-disc pl-5">
                  <li><strong class="text-slate-800">毕业合照校园闯关：</strong>班级／宿舍照生成 Q 版角色与校园闯关联机游戏。</li>
                  <li><strong class="text-slate-800">复刻青春往事：</strong>描述青春故事，生成联机团战，重温羁绊。</li>
                </ul>
              </details>`, `              <div class="flex items-start gap-3"><span class="shrink-0 w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 bp-li bp-li-lg flex items-center justify-center mt-0.5 ring-1 ring-indigo-100" aria-hidden="true"><i data-lucide="trophy"></i></span><div><h3 class="font-bold text-slate-900">竞技挑战</h3><p class="text-xs text-slate-500 mt-1">排行榜与挑战赛类应用</p></div></div>
              <details class="mt-4">
                <summary class="text-sm font-bold text-fuse-blue">场景示例 ▾</summary>
                <ul class="mt-4 space-y-3 text-sm text-slate-600 list-disc pl-5">
                  <li><strong class="text-slate-800">反应力测试：</strong>"30 秒点击反应速度测试，记录最高分"，即时可用。</li>
                  <li><strong class="text-slate-800">每日挑战：</strong>"每日一关解谜游戏，关卡自动生成"，保持新鲜感。</li>
                </ul>
              </details>`);

rep(`          <p class="text-xs text-slate-600 leading-relaxed"><span class="font-bold text-violet-700">官方 IP 游戏游戏场景</span>同样是游戏场景来源之一——官方基于 场景模板库 生成首发游戏、模板包与 DLC 原型，作为平台品质锚点。具体见 <a href="#s-ip-plan-reserved" class="font-semibold text-violet-600 underline underline-offset-2 hover:text-violet-800">场景模板库 →</a></p>`, `          <p class="text-xs text-slate-600 leading-relaxed"><span class="font-bold text-violet-700">官方游戏模板</span>作为品质锚点——平台精选高完成度游戏模板，用户可一键 fork 并个性化改造。详见 <a href="#s-ip-plan-reserved" class="font-semibold text-violet-600 underline underline-offset-2 hover:text-violet-800">场景模板库 →</a></p>`);

// ── s-game-2 教育场景 ──
rep(`          <h2 class="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-4">教育场景：用户作品教育场景 + 官方 IP 游戏教育场景</h2>
          <p class="max-w-3xl mx-auto text-center text-sm md:text-base text-slate-600 leading-relaxed mb-8">教育场景同样分两条链：一条基于用户游戏场景作品继续改造，一条基于官方 IP 游戏/IP 模板改剧情、关卡、NPC 和玩法规则；每一次教育场景都能回到 创作工作台 分发、交易并继续被 生活工具。</p>`, `          <h2 class="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-4">教育场景：个性化学习工具，一句话生成</h2>
          <p class="max-w-3xl mx-auto text-center text-sm md:text-base text-slate-600 leading-relaxed mb-8">教育类应用是 AppForge 的高频场景——学生、教师、自学者均可按需生成专属学习工具，无需编程，描述需求即可。</p>`);

rep(`              <h3 class="mt-3 font-black text-slate-900">用户作品教育场景</h3>
              <p class="mt-3 text-sm text-slate-600 leading-relaxed">社区基于其他玩家的游戏场景作品改关卡、素材、叙事和规则，创作者按版本树获得分润。</p>`, `              <h3 class="mt-3 font-black text-slate-900">背单词与语言学习</h3>
              <p class="mt-3 text-sm text-slate-600 leading-relaxed">"做一个托福核心词汇背单词工具，每日 50 词，艾宾浩斯复习曲线"——即刻生成专属词库应用。</p>`);

rep(`              <h3 class="mt-3 font-black text-slate-900">官方 IP 游戏教育场景</h3>
              <p class="mt-3 text-sm text-slate-600 leading-relaxed">玩家基于官方首发游戏、角色与模板生成分支剧情、特殊关卡和新玩法，官方 IP 获得持续授权收益。</p>`, `              <h3 class="mt-3 font-black text-slate-900">考试刷题与知识卡片</h3>
              <p class="mt-3 text-sm text-slate-600 leading-relaxed">"高考数学公式速查 + 随机出题练习"、"公务员行测计时刷题"——按考试场景定制。</p>`);

rep(`              <h3 class="font-bold text-slate-900">剧情魔改：改写英雄命运</h3>
              <p class="mt-3 text-sm text-slate-600">主角加入反派阵营，亲手改写结局，体验不同人生。</p>
              <details class="mt-4">
                <summary class="text-xs font-bold text-fuse-blue">用户原声 ▾</summary>
                <p class="mt-2 text-xs text-slate-500 leading-relaxed">「我让主角站在了故事的对立面——结局第一次真正属于我。」</p>
              </details>`, `              <h3 class="font-bold text-slate-900">单词卡片：定制词库</h3>
              <p class="mt-3 text-sm text-slate-600">按考试、教材或兴趣自建词库，支持听写、拼写、选择题多种模式。</p>
              <details class="mt-4">
                <summary class="text-xs font-bold text-fuse-blue">描述示例 ▾</summary>
                <p class="mt-2 text-xs text-slate-500 leading-relaxed">「做一个 GRE 高频词汇 App，分组记忆，每日打卡提醒。」</p>
              </details>`);

rep(`              <h3 class="font-bold text-slate-900">关卡自定义：创造无限世界</h3>
              <p class="mt-3 text-sm text-slate-600">AI 生成空中浮岛，机关与怪物由你设计，专属冒险乐园。</p>
              <details class="mt-4"><summary class="text-xs font-bold text-fuse-orange">用户原声 ▾</summary>
                <p class="mt-2 text-xs text-slate-500">「浮岛每一块砖都在回应我的脑洞。」</p>
              </details>`, `              <h3 class="font-bold text-slate-900">课堂互动：教师专属</h3>
              <p class="mt-3 text-sm text-slate-600">随机点名、课堂测验、小组积分——教师描述即可生成班级管理小工具。</p>
              <details class="mt-4"><summary class="text-xs font-bold text-fuse-orange">描述示例 ▾</summary>
                <p class="mt-2 text-xs text-slate-500">「小学语文古诗背诵打卡，共 80 首，带朗读音频。」</p>
              </details>`);

rep(`              <h3 class="font-bold text-slate-900">NPC 个性化：赋予灵魂</h3>
              <p class="mt-3 text-sm text-slate-600">铁匠变吟游诗人，讲述传说并交付特殊任务。</p>
              <details class="mt-4"><summary class="text-xs font-bold text-emerald-600">用户原声 ▾</summary>
                <p class="mt-2 text-xs text-slate-500">「村口不再是铁匠铺，而是一个会唱歌的任务枢纽。」</p>
              </details>`, `              <h3 class="font-bold text-slate-900">儿童启蒙：趣味学习</h3>
              <p class="mt-3 text-sm text-slate-600">数字认知、拼音练习、英语启蒙——家长描述孩子年龄和兴趣即可生成。</p>
              <details class="mt-4"><summary class="text-xs font-bold text-emerald-600">描述示例 ▾</summary>
                <p class="mt-2 text-xs text-slate-500">「5 岁儿童认字卡片，每天 10 个字，配卡通插图。」</p>
              </details>`);

rep(`              <h3 class="font-bold text-slate-900">玩法重构：颠覆规则</h3>
              <p class="mt-3 text-sm text-slate-600">开放世界变塔防战场，以巨龙守基地，玩法瞬间不同。</p>
              <details class="mt-4"><summary class="text-xs font-bold text-violet-700">用户原声 ▾</summary>
                <p class="mt-2 text-xs text-slate-500">「同一世界观，换一种规则就是另一款大作。」</p>
              </details>`, `              <h3 class="font-bold text-slate-900">技能训练：刻意练习</h3>
              <p class="mt-3 text-sm text-slate-600">速算训练、逻辑推理、编程入门——按难度梯度自动生成练习题。</p>
              <details class="mt-4"><summary class="text-xs font-bold text-violet-700">描述示例 ▾</summary>
                <p class="mt-2 text-xs text-slate-500">「心算 100 以内加减法，限时 60 秒，记录历史最高分。」</p>
              </details>`);

// ── s-game-n 生活工具 ──
rep(`        <h2 class="text-2xl md:text-[2rem] font-extrabold text-gradient mb-6">生活工具场景：用户作品链 + 官方 IP 游戏链持续扩散</h2>
        <p id="game-n-hint" class="mb-8 max-w-3xl text-sm text-slate-600 leading-relaxed">优秀用户作品或官方 IP 游戏 → 用户教育场景 → 社区继续 生活工具 → 新版本回到 创作工作台 分发，用户链与官方 IP 链都可无限延伸。</p>`, `        <h2 class="text-2xl md:text-[2rem] font-extrabold text-gradient mb-6">生活工具场景：日常刚需，按需生成</h2>
        <p id="game-n-hint" class="mb-8 max-w-3xl text-sm text-slate-600 leading-relaxed">生活工具是 AppForge 最高频的使用场景——汇率换算、理财模拟、健康计算、旅行规划……描述需求，秒级生成，即刻使用。</p>`);

rep(`            <h3 class="mt-3 font-black text-slate-900">用户作品 生活工具</h3>
            <p class="mt-3 text-sm text-slate-600 leading-relaxed">一个用户作品被多人继续改造，形成玩法、素材、剧情和难度的多分支版本树，长尾内容持续回流 Store。</p>`, `            <h3 class="mt-3 font-black text-slate-900">汇率与理财工具</h3>
            <p class="mt-3 text-sm text-slate-600 leading-relaxed">"美元兑人民币实时汇率换算，支持 20 种货币"、"复利计算器，输入本金和年化收益率"——个人财务管理利器。</p>`);

rep(`            <h3 class="mt-3 font-black text-slate-900">官方 IP 游戏 生活工具</h3>
            <p class="mt-3 text-sm text-slate-600 leading-relaxed">官方 IP 游戏从首发内容延伸出社区赛季、联名玩法和角色分支，官方持续获得授权、模板和交易收益。</p>`, `            <h3 class="mt-3 font-black text-slate-900">炒股模拟与健康计算</h3>
            <p class="mt-3 text-sm text-slate-600 leading-relaxed">"虚拟 10 万炒股模拟器，实时行情"、"BMI 计算器 + 每日热量摄入记录"——精准匹配个人生活场景。</p>`);

rep(`            <h3 class="font-bold text-slate-900 text-sm leading-snug">下载与体验：发现无限可能</h3>
            <p class="mt-4 text-xs text-slate-600 leading-relaxed text-left">下载用户自制《废土余生》，怪物设计出色，AI 依行为生成不同遭遇。</p>`, `            <h3 class="font-bold text-slate-900 text-sm leading-snug">汇率计算器</h3>
            <p class="mt-4 text-xs text-slate-600 leading-relaxed text-left">"出国旅游汇率换算，支持 USD/EUR/JPY，离线也能用。"</p>`);

rep(`            <h3 class="font-bold text-slate-900 text-sm leading-snug">学习与借鉴：站在巨人肩上</h3>
            <p class="mt-4 text-xs text-slate-600 leading-relaxed text-left">作者用 AI 做动态昼夜与随机雷雨，启发创作思路。</p>`, `            <h3 class="font-bold text-slate-900 text-sm leading-snug">炒股模拟器</h3>
            <p class="mt-4 text-xs text-slate-600 leading-relaxed text-left">"虚拟资金 50 万，A 股模拟交易，记录收益率曲线。"</p>`);

rep(`            <h3 class="font-bold text-slate-900 text-sm leading-snug">改造与升级：注入创意</h3>
            <p class="mt-4 text-xs text-slate-600 leading-relaxed text-left">枪械换法杖，加入「火焰风暴」「治疗术」，战斗焕然一新。</p>`, `            <h3 class="font-bold text-slate-900 text-sm leading-snug">房贷计算器</h3>
            <p class="mt-4 text-xs text-slate-600 leading-relaxed text-left">"30 年房贷，输入贷款金额和利率，输出月供和总利息。"</p>`);

rep(`            <h3 class="font-bold text-slate-900 text-sm leading-snug">分享与循环：成为链条一环</h3>
            <p class="mt-4 text-xs text-slate-600 leading-relaxed text-left">上传《废土余生：魔法觉醒》一周 10 万下载，更有用户叠加修仙系统。</p>`, `            <h3 class="font-bold text-slate-900 text-sm leading-snug">旅行行程规划</h3>
            <p class="mt-4 text-xs text-slate-600 leading-relaxed text-left">"日本 7 日游行程表，含预算统计和打卡清单，可分享给旅伴。"</p>`);

// ── Demo：Lingguang 仅作验证 Demo ──
rep(`          <p class="text-center text-xs text-fuse-orange mt-8">Turn Ideas into Reality with Natural Language — 用自然语言，让创意成真。</p>`, `          <div class="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 text-center">
            <p class="text-sm font-bold text-slate-800">技术验证 Demo · 灵光（Lingguang）</p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">灵光为 AppForge 早期技术验证产品，已在 Google Play 上线并盈利，验证了自然语言生成应用的核心链路。AppForge 为正式产品品牌。</p>
            <a href="https://play.google.com/store/apps/details?id=com.lingguang.app" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 text-xs text-fuse-blue font-semibold hover:underline">查看灵光 Demo →</a>
          </div>
          <p class="text-center text-xs text-fuse-orange mt-6">用一句话，熔铸你的专属应用 — AppForge</p>`);

rep(`              <p class="text-sm font-bold text-slate-800 text-center">AppForge: AI App Builder</p>
              <a href="https://play.google.com/store/apps/details?id=com.lingguang.app" target="_blank" rel="noopener noreferrer" class="block rounded-xl bg-fuse-blue text-white p-6 hover:brightness-110 transition shadow-lg text-center">
                <span class="text-lg font-bold">Google Play 下载</span>
                <span class="block text-xs opacity-90 mt-1">1K+ 下载 · 应用内购买 · 已盈利</span>
              </a>`, `              <p class="text-sm font-bold text-slate-800 text-center">AppForge · 即将发布</p>
              <div class="block rounded-xl bg-gradient-to-r from-fuse-blue to-indigo-600 text-white p-6 shadow-lg text-center">
                <span class="text-lg font-bold">正式版筹备中</span>
                <span class="block text-xs opacity-90 mt-1">技术验证 Demo「灵光」已在 Google Play 盈利运行</span>
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.lingguang.app" target="_blank" rel="noopener noreferrer" class="block rounded-xl border-2 border-fuse-blue text-fuse-blue p-4 hover:bg-blue-50 transition text-center mt-3">
                <span class="text-sm font-bold">体验验证 Demo · 灵光</span>
              </a>`);

// ── Hero 副标题 ──
rep('用自然语言，让创意成真', '用一句话，熔铸你的专属应用');
rep('AppForge：AI 原生应用创作平台 · 零代码 · Gemini 驱动 · 即时生成 · 一键分享。', 'AppForge：AI 原生应用创作平台 · 游戏 · 教育 · 生活工具 · 零代码 · 即时生成。');

// ── 创作工作台商业闭环 ──
rep(`              <p class="mt-4 text-slate-600 text-sm md:text-base max-w-4xl leading-relaxed">一句话概括：创作工作台 把用户创作、官方 IP 游戏创作、移动端分发、Token 消耗和收益分成放进同一个交易闭环。移动端负责高粘性体验，普通手机移动端手游同步兼容，扩大用户盘子与商业天花板。</p>`, `              <p class="mt-4 text-slate-600 text-sm md:text-base max-w-4xl leading-relaxed">一句话概括：AppForge 工作台把描述、生成、预览、分享和积分变现放进同一个闭环。覆盖游戏、教育、生活工具三大场景，移动端原生体验，按需付费。</p>`);

rep(`                  <p class="mt-2 text-white/68 leading-relaxed">用户创作与官方 IP 游戏双轨供给，游戏场景、教育场景、生活工具共同扩张内容。</p>`, `                  <p class="mt-2 text-white/68 leading-relaxed">用户按需生成游戏、教育、生活工具类应用，场景持续扩张。</p>`);

rep(`                  <p class="mt-2 text-white/68 leading-relaxed">榜单、专题、搜索、推荐把内容推给合适玩家。</p>`, `                  <p class="mt-2 text-white/68 leading-relaxed">模板库、搜索、推荐把应用推给合适用户。</p>`);

rep(`                  <p class="mt-2 text-white/68 leading-relaxed">核心能力 + 普通手机移动端手游同步兼容。</p>`, `                  <p class="mt-2 text-white/68 leading-relaxed">Android / iOS 移动端原生，随时创作。</p>`);

rep(`                  <p class="mt-2 text-white/68 leading-relaxed">生成应用、教育场景改造、素材调用都消耗 Token。</p>`, `                  <p class="mt-2 text-white/68 leading-relaxed">每次应用生成消耗积分，迭代修改持续计费。</p>`);

rep(`                <strong class="text-white">商业关键：</strong>移动端不是唯一入口，而是高价值入口；手机移动端负责规模化获客和日活，二者共同放大 Token 订阅、内容消费和平台抽成。`, `                <strong class="text-white">商业关键：</strong>移动端原生入口 + 积分按次计费 + 套餐订阅，三大场景（游戏/教育/生活工具）共同驱动复购。`);

fs.writeFileSync(target, html, 'utf8');

const gameCount = (html.match(/游戏|掌机|任天堂|Fuse/g) || []).length;
console.log('AppForge BP migrated:', target);
console.log('Remaining game/Fuse refs (may include valid 游戏场景):', gameCount);
