# dsh-diff-viewer

DSH Web GUI 的 PiUI 风格 diff 查看器插件：替换 write/edit 工具调用的 diff 渲染（原 DiffBlock）。

- **unified 单栏默认**：同一 gutter 并排显示旧/新行号，无左右错位；split 双栏可选（`viewMode`）
- **变更条**：新增实心绿条、删除条纹红条；行背景色带统一延伸到最宽行
- **词级高亮**：行内改动叠加绿/红标记，shiki 语法着色（`highlightLines`）
- **上下文折叠**：长段未变更行折叠为"`N 行未变更`"，向上/向下/全部展开
- **窗口化渲染**：固定行高窗口化，大 diff 不挂载全部行；sticky 横向滚动条（hover 显现）
- **复制 + `└ +A -R · N file(s)` 页脚**

## 机制

插件通过 **keyed 接管**替换 write/edit 的工具行渲染：ui-tool 的 `tool.call.toolview` 槽是开放 key 域，同一 key 以**更低 priority 阴影**（最低优先渲染）。插件注册 `edit`/`write` 键（priority -1），接管后的行**完全复刻官方 FileMutationRow**（复用官方 ToolRow 样式 + DisclosureRow/StateDot 等平台组件），只把展开后的 diff 卡换成 PiUI 风格 DiffViewer——**不改任何核心，纯插件**，卸载即还原官方行。

- **不限制高度**：展开的 diff 直接撑开显示完整内容（不套滚动容器），窗口化渲染保证超大 diff 依然高效
- **diff 数据**：从工具调用的 `callView`/`resultView` 的 `card:'diff'` 意图提取（running 用调用时 diff，settled 用应用后的 hunks）；执行错误（无 diff 卡）走官方行的错误摘要 + IN/OUT 卡

## 效果

<img width="1740" height="1048" alt="image" src="https://github.com/user-attachments/assets/67b4db35-07e5-4fce-852d-bbe4ee33b695" />

## 安装

### 任意 dsh 版本（纯插件）

```sh
# 直接安装插件（path/tarball/github 均可）
dsh plugin --profile web add E:\dev\dsh-diff-viewer   # 或 tarball / github:lehhair/dsh-diff-viewer

# 重启 dsh web 生效
dsh web
```

> Windows 注意：`dsh plugin add <本地目录>` 的 `link:` 绝对路径有 junction bug（pnpm 拼错目标）。用 **tarball**（`npm pack` 后 `dsh plugin add *.tgz`）或 GitHub 安装可绕过。

## 卸载

```sh
dsh plugin --profile web remove @dsh-external/dsh-diff-viewer
```

## 开发

```sh
pnpm install && pnpm run check    # typecheck + test + build
```

测试需要 workspace 内的 `@deepseek-ai/dsh-*` 包（devDependencies 用 `link:` 指向 `../dsh2026/deepseek-harness`，vitest alias 统一 react 单实例；接管行复用 ui-tool 的 `ToolRow.module.css`，经包导出的 src 子路径内联进 bundle）。

