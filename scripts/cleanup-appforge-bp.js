#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const target = path.join(__dirname, '..', 'appforge', 'index.html');
let html = fs.readFileSync(target, 'utf8');
const rep = (a, b) => { html = html.split(a).join(b); };

// 时间轴（未替换成功的条目）
rep('街机时代', '桌面软件时代');
rep('游戏进入公共空间，娱乐从私人走向社交', 'Office、Photoshop 定义生产力，软件仍是程序员专属');
rep('主机家庭时代', '互联网应用时代');
rep('游戏进入每个家庭，传统软件巨头与索尼奠定行业结构', 'Web 应用爆发，但仍需专业开发团队交付');
rep('游戏变成社交基础设施，MMO 连接亿级用户', 'App Store 打开长尾，移动应用触达全球用户');
rep('App Store 打开长尾，游戏触达全球 30 亿用户', '低代码平台出现，但复杂应用仍需工程师');

// AI 演进残留
rep('AI 第一次走进游戏工作室。单人产能提升 2–3×，但游戏本身还是老样子，用户毫无感知，结构性冲击尚未到来。', 'AI 第一次走进开发团队。Copilot 补全代码，工程师产能提升 2–3×，但应用交付模式未变。');
rep('游戏即平台，使用应用就是造游戏', '应用即平台，用工具就是造工具');
rep('创造权从开发工作室转移到用户手中：游玩过程中即可调用 AI 生成新关卡、新剧情、新规则并发布给其他用户。创作者数量从几万家工作室，扩展到数亿用户——UGC 从"素材"升维到"完整游戏系统"。', '创造权从开发公司转移到用户手中：使用过程中即可调用 AI 修改功能、添加模块、调整界面并分享。创作者从数百万开发者扩展到数十亿用户。');
rep('创造门槛彻底归零：任何人只需一个想法，AI 自动完成所有制作与发行。"开发者"与"用户"的身份边界消失。游戏不再是需要多年开发的产品——而是人人都能使用的新社交语言，生产关系完成根本性重构。', '创造门槛彻底归零：任何人只需一个想法，AI 自动完成开发与发布。"开发者"与"用户"的身份边界消失。应用不再是需要数月外包的产品——而是人人都能定制的个人工具。');
rep('全球专业游戏开发者不足百万，而全球用户超 30 亿', '全球专业开发者不足 3000 万，而全球智能手机用户超 50 亿');

// 先例 Roblox
rep(`                    <p class="text-xs font-bold text-blue-200/70 uppercase tracking-wider mb-1">Roblox</p>
                    <p class="text-sm text-blue-100/85 leading-relaxed">7000 万个 UGC 游戏、月活 3.8 亿——不是专业团队做的，是用户做的。在 AI 工具出现之前。<strong class="text-white">AI 到来后，这个数字会是多少？</strong></p>`, `                    <p class="text-xs font-bold text-blue-200/70 uppercase tracking-wider mb-1">App Store</p>
                    <p class="text-sm text-blue-100/85 leading-relaxed">200 万+ 应用在架——但每一个都需要专业开发者。<strong class="text-white">AI 到来后，50 亿用户都能成为创造者。</strong></p>`);

// 全球市场时间线
rep('Switch 扩张', '移动 App 爆发');
rep('混合主机重启移动端需求，硬件与第一方内容同步放量。', 'iPhone 与 App Store 重新定义软件分发，移动应用井喷。');
rep('居家娱乐拉动游戏消费，硬件装机与数字内容双升。', '疫情推动远程办公，SaaS 与效率工具需求激增。');
rep('Switch 老化、疫情红利消退；Steam Deck 打开 PC 移动端新品类。', '低代码平台崛起，但复杂应用仍需工程师团队。');
rep('Switch 2、SteamOS 阵营、串流移动端共同推动结构性恢复。', 'AI 编程助手爆发，Vibe Coding 降低创作门槛。');
rep('250–300 亿美元为 2025 年扩展生态口径估算，不是单一硬件市场。应用开发行业通常呈"硬件换代 + 爆款内容 + 宏观消费"共同驱动的周期：2020–2021 疫情红利推高基数，2022–2024 进入后疫情回落与 Switch 后周期，2025 以后由 Switch 2、PC 移动端、串流移动端和内容服务化带来恢复增长。', '80–120 亿美元为 2025 年 AI 应用创作赛道估算。行业呈"大模型能力跃迁 + 用户需求爆发 + 移动端渗透"三重驱动：2022–2024 AI 编程助手快速普及，2025 以后自然语言生成应用进入主流。');
rep('Switch 生态', '传统 IDE');
rep('PC 移动端', '低代码平台');
rep('串流移动端', 'AI 编程助手');
rep('移动端市场高度集中，Switch 生态长期把持约三分之二份额，第一方独占内容构筑极深护城河，竞争对手难以正面突破。', 'AI 应用创作市场仍处早期，尚无绝对垄断者。Bolt、Replit、Cursor 等竞品各据一方，但均面向桌面端开发者，移动端原生创作工具仍是空白。');
rep('全球游戏用户已超 30 亿，但专属移动端拥有者不足其中 10%', '全球智能手机用户已超 50 亿，但能用自然语言做应用的人不足其中 1%');
rep('全球职业游戏开发者不足百万，一款 AA 级移动端游戏动辄需要数十人历时两年以上', '全球职业开发者不足 3000 万，一款定制 App 外包动辄数万元、数周交付');
rep('传统软件巨头 Nintendo Switch Online、微软 Game Pass 等订阅服务已占行业增量收入主体', 'Notion、Airtable 等个性化工具验证了"用户自建应用"的巨大需求，AI 将把这个市场扩大 100 倍');
rep('让"普通人做应用"第一次变得可行。AI 将把内容生产门槛从百人团队降至个人，移动端平台的竞争维度将彻底改变。', '让"普通人做应用"第一次变得可行。AI 将把开发门槛从工程师降至每一个用户，应用创作平台的竞争维度将彻底改变。');
rep('AI 创造时代正在重写移动端行业的规则', 'AI 创造时代正在重写应用开发行业的规则');

// 模式对比
rep('硬件销售 + 自研游戏售卖', '软件授权 + 定制开发服务');
rep('厂商专业团队 · 百人以上', '专业工程师团队 · 需编程能力');

// 硬件展示区
rep('data-af-asset="handheldRetroMain" alt="AppForge 移动端高级金属实机渲染主图', 'data-af-asset="appPreviewMain" alt="AppForge 应用创作界面预览');
rep('Dui-Dui Hero Render', 'App Preview');
rep('AI-Powered Handheld Console', 'AI-Powered App Builder');
rep('data-af-asset="handheldMidnightPro" alt="AppForge 移动端 Midnight Pro', 'data-af-asset="appPreviewDark" alt="AppForge 深色主题界面');
rep('Midnight Pro', '深色主题');
rep('黑色性能款：大散热、金属摇杆、重度玩家与高帧率场景。', '深色主题：专注创作模式，减少视觉干扰。');
rep('data-af-asset="handheldSplitCloud" alt="AppForge 移动端 Split Cloud 分体云游戏款实机渲染图"', 'data-af-asset="appPreviewEdu" alt="AppForge 教育场景界面预览"');
rep('Split Cloud', '教育场景');
rep('分体形态：平板创作 + 手柄操控，适合云游戏和 AI 创作者。', '教育场景：背单词、刷题、知识卡片一键生成。');

// 收入流
rep('道具、皮肤、DLC、解锁内容、限定关卡。用户在游戏内持续消费，是存量用户的高频复购来源。', '高级模板、专属主题、批量生成额度。用户在创作过程中持续消费，是存量用户的高频复购来源。');
rep('官方 IP + UGC）与内购覆盖消费侧', '模板增值与积分充值覆盖消费侧');

// 游戏场景残留卡片
rep(`              <div class="flex items-start gap-3"><span class="shrink-0 w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 bp-li bp-li-lg flex items-center justify-center mt-0.5 ring-1 ring-indigo-100" aria-hidden="true"><i data-lucide="graduation-cap"></i></span><div><h3 class="font-bold text-slate-900">情感共鸣</h3><p class="text-xs text-slate-500 mt-1">用游戏治愈与怀念</p></div></div>
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
                  <li><strong class="text-slate-800">反应力测试：</strong>"30 秒点击反应速度测试，记录最高分"。</li>
                  <li><strong class="text-slate-800">每日挑战：</strong>"每日一关解谜游戏，关卡自动生成"。</li>
                </ul>
              </details>`);

rep('用户游戏场景', '游戏创作案例');
rep(`          <p class="max-w-3xl mx-auto text-center text-sm md:text-base text-slate-600 leading-relaxed mb-8">教育场景同样分两条链：一条基于用户游戏场景作品继续改造，一条基于官方模板/IP 模板改剧情、关卡、NPC 和玩法规则；每一次教育场景都能回到 创作工作台 分发、交易并继续被 生活工具。</p>`, `          <p class="max-w-3xl mx-auto text-center text-sm md:text-base text-slate-600 leading-relaxed mb-8">教育类应用是 AppForge 的高频场景——学生、教师、自学者均可按需生成专属学习工具，无需编程，描述需求即可。</p>`);
rep('社区基于其他用户的游戏场景作品改关卡、素材、叙事和规则，创作者按版本树获得分润。', '"做一个托福核心词汇背单词工具，每日 50 词，艾宾浩斯复习曲线"——即刻生成专属词库应用。');
rep('用户基于官方首发游戏、角色与模板生成分支剧情、特殊关卡和新玩法，官方 IP 获得持续授权收益。', '"高考数学公式速查 + 随机出题练习"、"公务员行测计时刷题"——按考试场景定制。');

// 场景模板库整段替换
const ipOld = html.match(/      <section id="s-ip-plan-reserved"[\s\S]*?      <\/section>\n\n      <section id="gate-ecosystem"/);
if (ipOld) {
  const ipNew = `      <section id="s-ip-plan-reserved" class="section-pad bg-white/40">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:flex-row lg:items-end gap-8 mb-10">
            <div class="flex flex-1 gap-4 items-start min-w-0">
              <span class="bp-title-dot shrink-0 mt-1 hidden sm:block"></span>
              <div>
                <p class="section-kicker mb-2 text-slate-500">PART 11 · TEMPLATE LIBRARY</p>
                <h2 class="text-2xl md:text-[2rem] lg:text-[2.4rem] font-extrabold text-gradient leading-snug tracking-tight">场景模板库：三大赛道精选模板</h2>
                <p class="mt-4 text-slate-500 text-sm md:text-base max-w-3xl">官方精选高完成度模板，覆盖游戏、教育、生活工具三大场景。用户可一键 fork、个性化改造，降低创作门槛。</p>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <article class="glass rounded-[2rem] p-7 shadow-glass card-hover border border-violet-100/70">
              <div class="w-12 h-12 rounded-xl bg-violet-100 text-violet-700 bp-li bp-li-lg flex items-center justify-center mb-5"><i data-lucide="gamepad-2"></i></div>
              <p class="text-xs font-bold tracking-[0.24em] uppercase text-violet-500">GAME TEMPLATES</p>
              <h3 class="mt-3 text-xl font-black text-slate-900">游戏场景模板</h3>
              <ul class="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>▸ 休闲跑酷 · 恐龙躲避障碍</li>
                <li>▸ 派对问答 · 自定义题库</li>
                <li>▸ 放置种田 · 每日浇水收菜</li>
                <li>▸ 像素冒险 · 回合制战斗</li>
              </ul>
            </article>
            <article class="glass rounded-[2rem] p-7 shadow-glass card-hover border border-blue-100/70">
              <div class="w-12 h-12 rounded-xl bg-blue-100 text-fuse-blue bp-li bp-li-lg flex items-center justify-center mb-5"><i data-lucide="graduation-cap"></i></div>
              <p class="text-xs font-bold tracking-[0.24em] uppercase text-blue-500">EDU TEMPLATES</p>
              <h3 class="mt-3 text-xl font-black text-slate-900">教育场景模板</h3>
              <ul class="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>▸ 托福/GRE 背单词 · 艾宾浩斯曲线</li>
                <li>▸ 高考刷题 · 公式速查 + 随机出题</li>
                <li>▸ 课堂互动 · 随机点名 + 积分排行</li>
                <li>▸ 儿童启蒙 · 认字卡片 + 拼音练习</li>
              </ul>
            </article>
            <article class="glass rounded-[2rem] p-7 shadow-glass card-hover border border-emerald-100/70">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 bp-li bp-li-lg flex items-center justify-center mb-5"><i data-lucide="calculator"></i></div>
              <p class="text-xs font-bold tracking-[0.24em] uppercase text-emerald-600">LIFE TOOL TEMPLATES</p>
              <h3 class="mt-3 text-xl font-black text-slate-900">生活工具模板</h3>
              <ul class="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>▸ 汇率计算器 · 20 种货币实时换算</li>
                <li>▸ 炒股模拟器 · 虚拟资金 A 股交易</li>
                <li>▸ 房贷计算器 · 月供与总利息</li>
                <li>▸ 旅行规划 · 行程表 + 预算统计</li>
              </ul>
            </article>
          </div>
          <div class="mt-10 rounded-[2rem] bg-gradient-to-r from-violet-50 via-white to-blue-50 border border-white shadow-glass p-6 md:p-7">
            <h3 class="font-black text-slate-900">模板飞轮：官方精选 → 用户 fork → 社区沉淀</h3>
            <p class="mt-3 text-sm text-slate-600 leading-relaxed">官方维护三大赛道精选模板作为品质锚点；用户 fork 后个性化改造并分享；优质作品回流模板库，形成长尾供给。平台按模板交易与积分消耗获得持续收入。</p>
          </div>
        </div>
      </section>

      <section id="gate-ecosystem"`;
  html = html.replace(ipOld[0], ipNew);
}

// gate / why success
rep('PART 11 · WHY FUSE WINS', 'PART 12 · WHY APPFORGE WINS');
rep('不是赌一台硬件爆款', '不是赌单点爆款');
rep('你已经看完硬件入口、创作工作台、游戏场景/教育场景/生活工具循环和官方 IP 内容线。闯关模式下，完成生态消消乐，把「移动端入口、Store 分发、AI 游戏场景、教育场景/生活工具、官方 IP」连成闭环。', '你已经看完核心能力、创作工作台、游戏/教育/生活工具三大场景和场景模板库。闯关模式下，完成生态消消乐，把「移动端入口、AI 生成、三大场景、模板库」连成闭环。');

// 竞品对标
rep('数据来源：传统软件巨头年度财报（汇率换算基于各财年平均日元/美元）', '数据来源：公开市场融资数据与行业报告（Bolt、Replit、Cursor、v0 等）');
rep('传统软件巨头营收 2021 年见顶后进入调整期；2025E 受益于 Switch 2 预期回暖。软硬件销量高度相关，体现「软硬件一体化」生态协同。', 'AI 应用创作赛道 2023–2025 年融资总额超 30 亿美元。Bolt.new ARR 破亿、Replit 估值 30 亿美元——但竞品均面向桌面端开发者，移动端原生创作工具仍是蓝海。');
rep('请挑战传统软件巨头 Boss 飞机大战', '请挑战封闭开发工具 Boss 飞机大战');

// 愿景
rep('中国的传统软件巨头，', '让每个人都拥有，');
rep('<span class="text-gradient">世界的 Fuse</span>', '<span class="text-gradient">专属应用工厂</span>');
rep('以东方创造力与工程师文化，重写「一方硬件 × 世界级 IP × 代代相传的陪伴」——', '以 AI 创造力，重写「自然语言 × 即时生成 × 三大场景」——');
rep('让全球用户想起中国，不再只联想到代工与流量，而是<strong class="text-red-700">原创标准、原创叙事、原创的快乐</strong>。', '让全球用户想起个性化软件，不再只联想到下载现成 App，而是<strong class="text-red-700">描述即应用、人人皆开发者</strong>。');
rep('「未来世界上，人人都应该有一台游戏机。」', '「未来世界上，人人都应该有一个专属应用工厂。」');
rep('不是奢侈品，也不是少年时代的告别礼——而是像计算设备一样普及的<strong class="text-slate-900">创造性接口</strong>：人人掌心里，都有一块可随时进入、可被 AI 延展、可与世界对话的<strong class="text-slate-900">互动屏幕</strong>。', '不是程序员专属——而是像搜索引擎一样普及的<strong class="text-slate-900">创作接口</strong>：人人手机里，都能用一句话生成游戏、教育工具、生活计算器，并即时分享给他人。');
rep('启航期 · 破局全球垄断', '启航期 · 验证核心链路');
rep('这个世界需要新的挑战者，传统软件巨头已经住在顶峰太久了。AppForge 从第一天起就布局全球，中国拥有最顶尖的工程师、最强大的供应链，拥有最好的 AI 创造力，首发 AppForge 移动端。我们不仅是在做硬件，更是在输出中国原创的 AI 应用生成标准，让世界看到中国团队在硬核科技与文化创意结合点上的统治力。', 'AppForge 以灵光 Demo 验证了自然语言生成应用的核心链路（Google Play 已盈利）。正式版将覆盖游戏、教育、生活工具三大场景，面向全球 50 亿智能手机用户，做移动端原生的 AI 应用创作器。');
rep('扩张期 · 输出文化自信', '扩张期 · 三大场景规模化');
rep('创作工作台 成为全球创作者的沃土。我们通过 AI 技术抹平语言与创作门槛，让中国原创 IP 与全球 UGC 生态深度融合。这不仅是技术的扩张，更是中国游戏梦的全球化表达——让中国定义的「互动屏幕」成为全人类的基础设施。', 'AppForge 成为全球用户的应用创作沃土。游戏、教育、生活工具三大场景模板库持续扩充，用户描述即生成、生成即分享。移动端原生体验 + 积分商业模式，驱动全球创作者生态。');
rep('巅峰期 · 定义文明尺度', '巅峰期 · 定义行业标准');
rep('当 AppForge 站在全球 AI 应用范式制定者的位置，我们实现的不仅是商业的成功，更是中国游戏称霸全球的梦想。从世界模型到人机协同创作，AppForge 将作为这一代中国公司留给行星级别的礼物，打破旧有的垄断格局，让公平、可爱、可被创造的游戏属于地球上的每一个人。', '当 AppForge 站在全球 AI 应用创作范式制定者的位置，我们让游戏、教育、生活工具三大场景的个性化创作成为人类基础设施。从一句话到可运行应用，AppForge 让地球上的每一个人都能成为自己生活的软件开发者。');

// 团队
rep('<strong class="text-slate-800">AppForge（本产品）已在 Google Play 上线并开始盈利</strong>，1K+ 下载，支持应用内购买，Powered by Gemini AI。', '<strong class="text-slate-800">灵光 Demo 已在 Google Play 上线并盈利</strong>，验证了 AppForge 核心链路。正式版 AppForge 筹备中。');

// 全局清扫
rep('WHY FUSE', 'WHY APPFORGE');
rep('世界的 Fuse', '专属应用工厂');
rep('Fuse ', 'AppForge ');
rep('中国游戏梦', '个性化软件梦');
rep('中国游戏称霸全球的梦想', '个性化软件民主化的梦想');
rep('可被创造的游戏属于', '可被创造的应用属于');
rep('s-nintendo', 's-legacy-dev');

// 残留块
rep('Roblox', 'App Store');
rep('7000 万个 UGC 应用、月活 3.8 亿——不是专业团队做的，是用户做的。', '200 万+ 应用在架——但每一个都需要专业开发者。');
rep('Minecraft', 'Notion');
rep('1.4 亿月活。核心玩法不是"使用应用"，而是"建造世界"。', '用户自建工作流和数据库。核心不是"用工具"，而是"造工具"。');
rep('alt="AppForge 应用创作界面预览：暖白机身、闪耀香槟金属中框、玫红复古十字键与 XYAB、黄金摇杆、三星堆 Dui-Dui 游戏画面"', 'alt="AppForge 应用创作界面预览：对话式生成、实时预览、一键分享"');
rep('250–300 亿美元为 2025 年扩展生态口径估算，不是单一硬件市场。应用开发行业通常呈"硬件换代 + 爆款内容 + 宏观消费"共同驱动的周期：2020–2021 疫情红利推高基数，2022–2024 进入后疫情回落与 Switch 后周期，2025 以后由 Switch 2、低代码平台、AI 编程助手和内容服务化带来恢复增长。', '80–120 亿美元为 2025 年 AI 应用创作赛道估算。行业呈"大模型能力跃迁 + 用户需求爆发 + 移动端渗透"三重驱动，自然语言生成应用进入主流。');
rep('不直接卷 AI 眼镜、手机、手表、机器人等红海品类，而是用游戏移动端这一稀缺标的承接 AI 创造力，切开窗口。"未来人人都需要一台AI游戏机"', '不直接卷 AI 眼镜、机器人等红海品类，而是用移动端 AI 应用创作这一稀缺标的承接创造力。"未来人人都应该有一个专属应用工厂"');
rep('Dui-Dui', '背单词模板');
rep('三星堆·背单词模板', '教育场景');
rep('官方 IP', '官方模板');
rep('硬件入口', '移动端产品');
rep('三位一体技术 PoC', '核心链路验证');
rep('SoC 芯片方案（高通/联发科 AI 算力测评），完成功耗与散热模拟', 'Android / iOS 双端技术栈验证，完成 Gemini API 集成与性能优化');
rep('AI 应用引擎与移动端交互层 PoC：语音指令→实时游戏元素生成 Demo 可运行', 'AI 应用生成引擎 PoC：自然语言→可运行应用 Demo（灵光 Demo 已验证）');
rep('摄像头手势识别与游戏世界联动 Demo（手势触发游戏事件≥5 种）', 'WebView 实时预览 + 版本迭代功能集成');
rep('AI 应用生成引擎 v0.1：自然语言输入→简单 2D 游戏关卡生成，耗时 ≤60s', 'AI 应用生成引擎 v0.1：自然语言→三大场景应用生成，耗时 ≤60s');
rep('内部 Dogfood 测试：团队内部生成应用 ≥200 局', '内部 Dogfood 测试：团队内部生成应用 ≥200 个');
rep('EVT 样机', 'Beta 版本');
rep('DVT 样机', '正式版候选');
rep('PVT 验证完成，工厂生产线完全 Ready，首批 <strong>10,000 台</strong>量产启动', 'App Store / Google Play 上架审核通过，正式版发布');
rep('黄金摇杆手感调校完成', 'UI/UX 设计冻结');
rep('BOM 成本锁定，毛利率验算：硬件 ASP 4,000 元下 GM ≥30%', '积分定价体系锁定，毛利率验算：单次生成成本 vs 充值收入');
rep('量产预售', '全球发布');
rep('M10–12<br/>量产预售', 'M10–12<br/>全球发布');
rep('M13–18<br/>正式上市', 'M13–18<br/>规模增长');
rep('首批 1 万台量产，预售目标 5,000 台', 'Google Play + App Store 双端上线，首月下载目标 50,000');
rep('累计发货 ≥10,000 台', '累计下载 ≥100,000');
rep('硬件 NPS ≥60', 'App NPS ≥60');
rep('Top 100 游戏月流水', 'Top 100 应用月流水');
rep('游戏上架 → 用户购买 → 创作者分成', '应用分享 → 邀请裂变 → 积分充值');
rep('上架 UGC 应用', '上架 UGC 应用');
rep('Token 订阅包', '积分套餐');
rep('AI Token 订阅', '积分充值');
rep('游戏购买', '模板购买');
rep('修改关卡 / NPC / 剧情 / 任务规则', '修改功能 / 界面 / 数据 / 交互逻辑');
rep('游戏 / 科技 UP 主', '科技 / 教育 UP 主');
rep('KOL 合作：科技 / 教育 UP 主', 'KOL 合作：科技 / 教育 / 生活类 UP 主');

// 图表数据改为竞品赛道
rep("makeComboChart('chart-legacy-dev-combo', '营业总收入（亿美元）', [122.6,160.1,130,114.5,113.9,136.1], '#E60012', '同比增长率（%）', [0,30.6,-18.8,-11.9,-0.5,19.5], true);",
  "makeComboChart('chart-legacy-dev-combo', '赛道融资规模（亿美元）', [5,12,18,25,32,45], '#1E6BFF', '同比增长率（%）', [0,140,50,39,28,41], true);");

fs.writeFileSync(target, html, 'utf8');
const left = (html.match(/掌机|任天堂|Switch|Roblox|Dui-Dui|Fuse|游戏机/g) || []).length;
console.log('Cleanup done. Remaining critical refs:', left);
