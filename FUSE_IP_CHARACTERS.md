# Fuse IP 角色设计方案

本文档详细记录了三个面向全球掌机玩家的 Fuse 第一方 IP 角色：**Dui-Dui**、**Mira** 与 **Cera-Bot**。它们借鉴东方文化中的材质、工艺和视觉语言，但命名、世界观和玩法表达以欧美、日韩玩家都能快速理解的国际化方式呈现。

Fuse IP 采用“3 IP Worlds for Global Handheld Play”的第一方内容矩阵：每个角色不是同一个大世界里的配角，而是一条可独立发售、可持续更新、可被 AI UGC 扩写的游戏内容线。

- **Relic Circuit**：3D Puzzle Adventure / Exploration，对应掌机上的短章节探索体验。
- **Prism Stage**：2.5D Action Platformer / Light & Shadow，对应掌机上的高辨识度动作关卡。
- **Goldline Forge**：Co-op Roguelite / Repair & Rebuild，对应掌机上的高复玩副本和联机玩法。

---

## 1. Dui-Dui —— Relic Circuit

### 世界观与游戏类型
Relic Circuit 是一个 3D Puzzle Adventure。它受远古青铜文明、神秘遗迹和考古幻想启发，但不把文化符号作为理解门槛。玩家进入一座座 ancient ruins，用 scan、perspective shift、gadgets 和轻动作战斗推进关卡，适合掌机上的 15-30 分钟章节式探索。

### 角色背景
Dui-Dui is an ancient-tech companion from Relic Circuit. It was once a ritual mask-like device buried inside a lost ruin. After being awakened by Fuse energy, it gains a body made of digital sand. It is cute, curious, and mysterious, with oversized glowing eyes that can reveal hidden structures and invisible paths.

### 核心设计
- **视觉特征**：Q 版 ancient bronze mask，巨大的发光绿眼，身体由悬浮的金属色数字微粒组成。
- **美学来源**：远古青铜文明、考古幻想、alien relics（神秘但不依赖单一地域认知）。
- **玩法机制 (Perspective Shift)**：
    - **Eye Scan**：Dui-Dui 可以扫描隐藏路径、敌人弱点和收集品。
    - **Sand Dash**：可以瞬间散成数字沙粒，穿过栅栏或狭窄缝隙。

---

## 2. Mira —— Prism Stage

### 世界观与游戏类型
Prism Stage 是一个 2.5D Action Platformer。它借鉴东方剪影、纸艺、舞台光影和手工纹样，但整体体验接近全球玩家熟悉的平台跳跃、舞台切换和 light-shadow traversal。玩家在 2D silhouette 与 3D stage layer 之间穿梭，形成适合掌机屏幕的明亮动作节奏。

### 角色背景
Mira is a light-puppet spirit from Prism Stage. She has no real thickness, but she owns the most vivid colors in the world. She feels most alive when she touches light, shadow and projection, which makes her naturally suited to fast platforming and stage-layer puzzles.

### 核心设计
- **视觉特征**：扁平、半透明、彩色纸艺 / leather puppet 质感，身体布满精美镂空花纹，动作轻快、有节奏感。
- **美学来源**：东方剪影、手工纸艺、舞台光影、全球玩家熟悉的 theatrical platformer 表达。
- **玩法机制 (Dimensional Folding)**：
    - **Shadow Swap**：Mira 可以与自己的投影瞬间交换位置，用于跨越障碍。
    - **Light Bridge**：通过操纵光源，Mira 可以把投影变成可行走路径。

---

## 3. Cera-Bot —— Goldline Forge

### 世界观与游戏类型
Goldline Forge 是一个 Co-op Roguelite / Repair & Rebuild 游戏。它借鉴陶瓷、金线修复和可破碎材质，但核心是全球玩家熟悉的 random runs、drop-in co-op、damage-to-upgrade 与 build crafting。每局短、反馈快、复玩强，适合掌机随时开局。

### 角色背景
Cera-Bot is a ceramic repair robot from Goldline Forge. It was once a broken cup-like helper, rebuilt by Fuse energy and golden repair lines. Its core belief is simple and universal: breaking is not the end, rebuilding makes you stronger.

### 核心设计
- **视觉特征**：圆滚滚的白色陶瓷机器人，布满金色修复线，头部像一个简化的杯形外壳。
- **美学来源**：陶瓷、gold repair lines、repair philosophy（表达“修复后更强”的全球化情绪）。
- **玩法机制 (Self-Destruction & Reinforcement)**：
    - **Shatter Burst**：Cera-Bot 可以主动碎裂，碎片攻击周围敌人，随后通过金线重组。
    - **Goldline Armor**：每次受到攻击，金色修复线会变亮，把伤害转化为防御、反击或队友增益。

---

## 4. 核心技能与动作逻辑建议

### Dui-Dui
1. **Skill A: Eye Scan** —— 眼睛射出扇形扫描光束，标记隐藏路径、敌人或收集品。
2. **Skill B: Sand Dash** —— 化为数字沙粒快速冲刺，冲刺过程中无视部分碰撞体积。
3. **Ultimate: Relic Field** —— 召唤 ancient circuit field，短时间冻结周围机关与敌人。

### Mira
1. **Skill A: Shadow Swap** —— 与自己的投影交换位置，用于跨越障碍。
2. **Skill B: Color Splash** —— 旋转身体，向四周溅射彩色光点，使敌人减速。
3. **Ultimate: Prism Scroll** —— 将整个关卡短暂变为 2D mural stage，Mira 可自由穿梭并进行大范围打击。

### Cera-Bot
1. **Skill A: Goldline Hook** —— 射出金色修复线，抓取远处物体或将自己拉向目标。
2. **Skill B: Shatter Burst** —— 主动碎裂并释放范围震荡，击退周围敌人。
3. **Ultimate: Rebuild Mode** —— 进入短暂无敌状态，全身金线爆发强光，将受到的伤害转化为团队增益。

---

## 总结
这三个角色分别代表三条掌机第一方游戏内容线：**ancient-tech exploration（Dui-Dui / Relic Circuit）**、**light-shadow platforming（Mira / Prism Stage）**、**repair-based co-op combat（Cera-Bot / Goldline Forge）**。它们保留东方灵感带来的视觉新鲜感，但不依赖单一文化语境，适合欧美、日韩和全球市场理解与传播。

**注：这些角色设计及视觉形象已成功集成至项目 BP (`index.html`) 的“PART 06 · IP ROADMAP”章节中。**
