# Next.js 项目模板

这是一个现代化的 Next.js 项目模板，集成了多种流行的前端技术和工具，帮助您快速启动新项目。

## 技术栈

### 核心框架
- Next.js 15.3.0 (React框架)
- React 19.0.0
- React DOM 19.0.0

### UI组件和样式
- Shadcn/UI (基于 Radix UI 的组件库)
- Tailwind CSS
- 多个 Radix UI 组件

### 数据可视化
- Recharts (图表库)

### 动画效果
- Framer Motion

### 工具库
- Axios (HTTP 客户端)
- React Hook Form (表单处理)
- class-variance-authority (样式变体管理)
- clsx (条件类名处理)
- cmdk (命令面板)
- next-themes (主题管理)
- lucide-react (图标库)

### 字体
- Geist Sans
- Geist Mono

## 开始使用

1. 克隆此仓库

```bash
git clone https://github.com/yourusername/next.js-template.git my-project
cd my-project
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果

## 项目结构

```
├── public/              # 静态资源
├── src/                 # 源代码
│   ├── app/             # Next.js App Router
│   ├── components/      # 组件
│   │   ├── ui/          # UI组件
│   │   └── providers/   # 提供者组件
│   └── lib/             # 工具函数
├── .gitignore           # Git忽略文件
├── next.config.ts       # Next.js配置
├── package.json         # 项目依赖
├── postcss.config.mjs   # PostCSS配置
├── README.md            # 项目说明
└── tsconfig.json        # TypeScript配置
```

## 特性

- 🚀 基于 Next.js 15 和 React 19
- 🎨 使用 Shadcn UI 和 Tailwind CSS 构建美观的用户界面
- 🌓 支持亮色/暗色主题切换
- 📊 集成 Recharts 数据可视化库
- 🔄 使用 Framer Motion 创建流畅的动画效果
- 📱 完全响应式设计
- 🔒 类型安全，使用 TypeScript

## 自定义

### 添加新的 Shadcn UI 组件

```bash
npx shadcn add [component-name]
```

### 修改主题

编辑 `src/app/globals.css` 文件中的 CSS 变量来自定义主题颜色。

## 部署

此模板可以部署到任何支持 Next.js 的平台，如 Vercel、Netlify 或 AWS Amplify。

```bash
npm run build
```

## 许可证

MIT
