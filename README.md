# dsh-diff-viewer

DSH Web GUI 的 PiUI 风格 diff 查看器插件：替换 write/edit 工具调用的 diff 渲染（原 DiffBlock）。

- **unified 单栏默认**：同一 gutter 并排显示旧/新行号，无左右错位；split 双栏可选（`viewMode`）
- **变更条**：新增实心绿条、删除条纹红条；行背景色带统一延伸到最宽行
- **词级高亮**：行内改动叠加绿/红标记，shiki 语法着色（`highlightLines`）
- **上下文折叠**：长段未变更行折叠为"`N 行未变更`"，向上/向下/全部展开
- **窗口化渲染**：固定行高窗口化，大 diff 不挂载全部行；sticky 横向滚动条（hover 显现）
- **复制 + `└ +A -R · N file(s)` 页脚**

## 机制

插件的宿主依赖是 ui-tool 的 **diff-card chain 槽位**（`tool.call.diffcard` / `tool.details.diffcard`）——**rc.2 发行版没有这两个槽位**（diff 渲染硬编码 DiffBlock）。本仓库自带宿主补丁：

```
patches/dsh-diff-viewer.patch   # 给宿主加两个 chain 槽位 + ui-primitives 平台导出（17KB）
```

插件通过 `cordis.patch.yml` 注册进两个槽位（priority 0，恒匹配 selector），挂载即替换、卸载即还原。这与 dsh-external 社区的 `dsh-subagent-tree` / `fabric` 模式一致（自带宿主补丁 + 插件注册）。

## 安装

## 效果

<img width="1740" height="1048" alt="image" src="https://github.com/user-attachments/assets/67b4db35-07e5-4fce-852d-bbe4ee33b695" />


### 源码环境（DSH monorepo checkout）

```sh
# 1. 给宿主打补丁（提供 diff-card chain 槽位）——不是手改核心代码，一条命令
git apply patches/dsh-diff-viewer.patch
pnpm install && pnpm run build:lib:client && pnpm run build:web

# 2. 安装插件（path/tarball/github 均可）
dsh plugin --profile web add E:\dev\dsh-diff-viewer   # 或 tarball / github:dsh-external/dsh-diff-viewer

# 3. 重启 dsh web 生效
dsh web
```

> Windows 注意：`dsh plugin add <本地目录>` 的 `link:` 绝对路径有 junction bug（pnpm 拼错目标）。用 **tarball**（`npm pack` 后 `dsh plugin add *.tgz`）或 GitHub 安装可绕过。

### npm 发行版环境（rc.2 等）

发行版的 ui-tool 无 diff-card 槽位，源码补丁无法直接应用（npm 包无源码树）。两个选项：

- **等主仓库发布含扩展点的版本**（patch 内容合入后）——之后 `dsh plugin add @dsh-external/dsh-diff-viewer` 直接可用
- **自动补丁**（计划中）：插件 postinstall 覆盖 `node_modules/@deepseek-ai/dsh-client-ui-tool/lib/client.js` 为 rc.2 兼容的修改版 bundle

## 卸载

```sh
dsh plugin --profile web remove @dsh-external/dsh-diff-viewer
git apply -R patches/dsh-diff-viewer.patch   # 源码环境还原宿主
```

## 开发

```sh
pnpm install && pnpm run check    # typecheck + test（63 用例，100% 覆盖）+ build
```

测试需要 workspace 内的 `@deepseek-ai/dsh-*` 包（devDependencies 用 `link:` 指向 `../test-lehhair`，vitest alias 统一 react 单实例）。
