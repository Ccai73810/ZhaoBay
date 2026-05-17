# 招贝 - AI 亲子财务规划工具

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

启动后访问 `http://localhost:3000` 即可查看原型。

### 3. 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

---

## 页面导航

本项目为单页应用，通过 URL 参数切换页面：

| 页面 | URL 参数 |
|------|----------|
| 新手初诊（默认） | `/?route=assessment` |
| 初诊报告 | `/?route=report` |
| 首页 Dashboard | `/?route=home` |
| 育儿支出 | `/?route=ledger` |
| 支出详情 | `/?route=expenses` |
| 规划首页 | `/?route=plan` |
| 教育金规划 | `/?route=education` |
| 保险规划 | `/?route=insurance` |
| 兴趣班规划 | `/?route=interest_class` |
| AI 顾问 | `/?route=advisor` |
| 零花钱 | `/?route=pocket_money` |
| 个人中心 | `/?route=profile` |
| 高价值家庭专区 | `/?route=high_value` |

**示例**：访问 `http://localhost:3000/?route=home` 进入首页 Dashboard。

---

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS

## 项目结构

```
src/
  App.tsx              # 路由入口
  main.tsx             # 应用挂载
  index.css            # 全局样式
  components/
    shared.tsx         # 共享组件（导航栏、底部标签栏等）
  pages/
    Assessment.tsx     # 新手初诊
    Report.tsx         # 初诊报告
    Home.tsx           # 首页 Dashboard
    LedgerHome.tsx     # 育儿支出首页
    Expenses.tsx       # 支出详情
    PlanHome.tsx       # 规划首页
    Education.tsx      # 教育金规划
    Insurance.tsx      # 保险规划
    InterestClass.tsx  # 兴趣班规划
    Advisor.tsx        # AI 顾问
    PocketMoney.tsx    # 零花钱
    Profile.tsx        # 个人中心
    HighValue.tsx      # 高价值家庭专区
public/
  # 图片资源
```
