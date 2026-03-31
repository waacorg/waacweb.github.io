# WAAC Website

WAAC 官网现已按业务域完成重构，当前项目基于 Next.js App Router，适合继续做内容扩展、页面迭代和长期维护。

## Commands

```bash
npm run dev
npm run lint
npm run build
```

## Structure

```text
src/
  app/             路由入口、layout、sitemap、robots
  components/ui/   通用 UI 原子组件
  content/         业务内容访问层
    academicians/
      data/
    collaboration/
      data/
    events/
    news/
      data/
  features/        页面级业务模块
    about/
    academicians/
    charter/
    collaboration/
    events/
    home/
    news/
  shared/          跨业务共享配置、布局、类型、区块组件
  lib/             通用工具函数
```

## Layer Rules

- `src/app`: 只保留路由壳，不承载大段业务实现。
- `src/features`: 承载页面级展示逻辑和业务组合。
- `src/content`: 承载数据源、数据整理、排序、ID 查询等内容访问逻辑。
- `src/shared`: 放全站复用的配置、布局、类型和公共区块。
- `src/components/ui`: 保留无业务语义的基础 UI 组件。

## Current Notes

- 新闻、合作项目、院士数据已按业务域就近放置，不再集中堆在 `src/data`。
- `legacy/` 与 `public/` 已从 ESLint 校验中排除，避免历史静态资源干扰应用代码校验。
- 构建已改为不依赖在线 Google Fonts，便于离线或受限网络环境构建。
