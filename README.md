# 招贝 - AI 亲子财务规划智能体 产品演示视频

## 项目简介

这是一个基于 React + TypeScript + Framer Motion 的横屏产品演示动画页面，用于展示「招贝」AI 亲子财务规划工具的核心功能与产品价值。

视频总时长约 180 秒（3 分钟），分为 11 个章节，完整覆盖：
1. 问题开场（家长的育儿财务焦虑）
2. 品牌出现
3. 智能体人设
4. 服务流程
5. 首页 Dashboard
6. 育儿支出管理与焦虑消费识别
7. 教育金规划与路径模拟
8. AI 顾问结构化决策方案
9. 成长账本
10. AI 不可替代性
11. 品牌收束

## 技术栈

- React 18
- TypeScript
- Vite
- Framer Motion（动画）
- Tailwind CSS（样式）
- Lucide React（图标）

## 安装与启动

```bash
# 安装依赖
npm install

# 启动开发环境
npm run dev
```

启动后访问 `http://localhost:3000`，页面会自动播放演示动画。

## 浏览器录屏建议

1. **分辨率设置**：将浏览器窗口调整为 1920x1080 或保持全屏
2. **录屏工具推荐**：
   - Windows：OBS Studio、Xbox Game Bar（Win+G）
   - macOS：QuickTime Player、OBS Studio
3. **录制设置**：
   - 分辨率：1920x1080
   - 帧率：30fps 或 60fps
   - 格式：MP4
4. **隐藏控制栏**：点击右下角的眼睛图标可隐藏播放控制栏，获得更干净的录屏画面
5. **自动播放**：页面加载后 1.5 秒自动开始播放

## 如何调整总时长

总时长在 `src/data/timeline.ts` 中配置：

```typescript
export const TOTAL_DURATION = 180; // 总秒数

export const scenes: TimelineScene[] = [
  { id: 0, name: "问题开场", start: 0, end: 15, duration: 15 },
  { id: 1, name: "品牌出现", start: 15, end: 30, duration: 15 },
  // ... 修改每个场景的 start/end/duration
];
```

修改后动画会自动适配新的时间轴。

## 如何修改旁白字幕

旁白字幕在 `src/data/script.ts` 中配置：

```typescript
export const script: ScriptSegment[] = [
  {
    start: 0,
    end: 15,
    text: "亲子家庭最难的不是记账...",
  },
  // ... 修改 text 字段
];
```

每个字幕段的 `start` 和 `end` 需要与 `timeline.ts` 中的场景时间对应。

## 如何替换 App 文案和数据

各场景的文案和数据分散在对应的场景组件中：

- `src/components/scenes/SceneOpening.tsx` - 开场账单数据
- `src/components/scenes/SceneDashboard.tsx` - Dashboard 数据
- `src/components/scenes/SceneExpenses.tsx` - 支出列表数据
- `src/components/scenes/SceneEducation.tsx` - 教育金数据
- `src/components/scenes/SceneAdvisor.tsx` - AI 顾问对话内容
- `src/components/scenes/SceneGrowth.tsx` - 成长事件数据
- `src/components/scenes/SceneBarriers.tsx` - 能力壁垒文案

直接修改对应组件中的数据常量即可。

## 项目结构

```
src/
  App.tsx                 # 主应用组件（时间轴控制）
  main.tsx               # 入口
  index.css              # 全局样式
  data/
    script.ts            # 旁白字幕数据
    timeline.ts          # 时间轴配置
  components/
    Stage.tsx            # 舞台容器（场景切换）
    PhoneMockup.tsx      # iPhone 样机
    ShellLogo.tsx        # 贝壳幼苗 Logo
    CountUp.tsx          # 数字动画
    NarrationCaption.tsx # 旁白字幕
    ProgressBar.tsx      # 视频进度条
    PlaybackControls.tsx # 播放控制
    scenes/
      SceneOpening.tsx      # 0. 问题开场
      SceneBrand.tsx        # 1. 品牌出现
      SceneAgentProfile.tsx # 2. 智能体人设
      SceneFlow.tsx         # 3. 服务流程
      SceneDashboard.tsx    # 4. Dashboard
      SceneExpenses.tsx     # 5. 支出管理
      SceneEducation.tsx    # 6. 教育金规划
      SceneAdvisor.tsx      # 7. AI顾问
      SceneGrowth.tsx       # 8. 成长账本
      SceneBarriers.tsx     # 9. 能力壁垒
      SceneClosing.tsx      # 10. 品牌收束
```

## Remotion 导出说明（可选）

如需使用 Remotion 导出更高质量的视频：

1. 安装 Remotion：
```bash
npm install remotion @remotion/cli
```

2. 将 `App.tsx` 中的时间轴逻辑适配为 Remotion 的 `useCurrentFrame` 和 `useVideoConfig`

3. 使用 Remotion 渲染：
```bash
npx remotion render src/remotion-entry.tsx output.mp4
```

## 设计规范

### 颜色系统
- 暖白背景：#FFF9F5
- 浅珊瑚：#FFF0E6
- 珊瑚橙：#FF8C69
- 薄荷青：#4ECDC4
- 雾蓝：#5B8DEF
- 招行红：#E60012（仅核心 CTA）
- 深色开场背景：#121826
- 主文字：#172033
- 次级文字：#6B7280

### 动画风格
- 柔和、克制、有高级感
- 使用 Framer Motion 的 `easeOut` 和自定义贝塞尔曲线
- 页面转场使用淡入淡出
- 数字使用 count-up 动画
- 进度条平滑增长

## 合规说明

本演示严格遵守以下产品边界：
- 不推销保险、基金、理财产品
- 不出现具体证券、基金买卖建议
- 不承诺收益
- 不使用评判性词语
- 使用"可能存在焦虑驱动信号"而非"这是焦虑消费"
- 体现中立规划、用户授权、可解释、可纠错
