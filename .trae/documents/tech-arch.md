# 招贝产品演示视频页面 - 技术架构文档

## 1. 架构设计

```mermaid
graph TB
    A[App.tsx] --> B[时间轴控制器]
    B --> C[场景渲染器]
    C --> D[Scene 0: 开场]
    C --> E[Scene 1: 品牌]
    C --> F[Scene 2: 人设]
    C --> G[Scene 3: 流程]
    C --> H[Scene 4: Dashboard]
    C --> I[Scene 5: 支出管理]
    C --> J[Scene 6: 教育金]
    C --> K[Scene 7: AI顾问]
    C --> L[Scene 8: 成长账本]
    C --> M[Scene 9: 壁垒]
    C --> N[Scene 10: 收尾]
    B --> O[字幕系统]
    B --> P[播放控制]
```

## 2. 技术描述

- **前端**: React 18 + TypeScript + Vite
- **动画**: Framer Motion
- **状态管理**: React Context（时间轴状态）
- **样式**: Tailwind CSS + 自定义 CSS 变量
- **图标**: Lucide React

## 3. 项目结构

```
src/
  App.tsx                 # 主应用组件
  main.tsx               # 入口
  index.css              # 全局样式
  data/
    script.ts            # 旁白字幕数据
    timeline.ts          # 时间轴配置
  components/
    Stage.tsx            # 舞台容器
    PhoneMockup.tsx      # iPhone 样机
    ShellLogo.tsx        # 贝壳幼苗 Logo
    BillCard.tsx         # 账单卡片
    Dashboard.tsx        # Dashboard 页面
    ExpensePage.tsx      # 支出管理页面
    EducationPlanPage.tsx # 教育金规划页面
    AgentChat.tsx        # AI 顾问对话
    GrowthTimeline.tsx   # 成长时间轴
    NarrationCaption.tsx # 旁白字幕
    ProgressBar.tsx      # 视频进度条
    PlaybackControls.tsx # 播放控制
    FlowChart.tsx        # 流程图
    AgentProfile.tsx     # 智能体人设
    BarrierCards.tsx     # 能力壁垒卡片
    CountUp.tsx          # 数字动画
```

## 4. 时间轴驱动机制

- 全局 `time` 状态（0 - 180000ms）
- `requestAnimationFrame` 驱动时间推进
- 每个 Scene 根据当前时间计算显示状态和动画进度
- 使用 `useTimeline` hook 封装时间逻辑

## 5. 动画实现

- Framer Motion `motion` 组件
- `animate` 属性控制动画
- `transition` 配置缓动函数
- `useAnimation` 控制复杂序列
- `staggerChildren` 实现依次入场
