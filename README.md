# dsh-diff-viewer

DSH Web GUI 的 PiUI 风格 diff 查看器插件：替换 write/edit 工具调用的 diff 渲染（原 DiffBlock）。

- **unified 单栏默认**：同一 gutter 并排显示旧/新行号，无左右错位；split 双栏可选（`viewMode`）
- **变更条**：新增实心绿条、删除条纹红条；行背景色带统一延伸到最宽行
- **词级高亮**：行内改动叠加绿/红标记，shiki 语法着色（`highlightLines`）
- **上下文折叠**：长段未变更行折叠为"`N 行未变更`"，向上/向下/全部展开
- **窗口化渲染**：固定行高窗口化，大 diff 不挂载全部行；sticky 横向滚动条（hover 显现）
- **复制 + `└ +A -R · N file(s)` 页脚**

## 机制

插件的宿主依赖是 ui-tool 的 **diff-card chain 槽位**（`tool.call.diffcard` / `tool.details.diffcard`）——该扩展点**已合入官方 DeepSeek Harness web 客户端**（当前开发快照开始；同时 ui-primitives 导出了 `highlightLines` 等平台模块），因此**无需任何宿主补丁**。插件通过 `cordis.patch.yml` 注册进两个槽位（priority 0，恒匹配 selector），挂载即替换、卸载即还原。

`patches/dsh-diff-viewer.patch` 是合入前的存档（针对旧快照），仅作参考，当前版本**不要应用**。

## 效果

<img width="1740" height="1048" alt="image" src="https://github.com/user-attachments/assets/67b4db35-07e5-4fce-852d-bbe4ee33b695" />

## 安装

### npm / 源码环境（dsh ≥ 含扩展点的版本）

```sh
# 直接安装插件（path/tarball/github 均可）
dsh plugin --profile web add E:\dev\dsh-diff-viewer   # 或 tarball / github:dsh-external/dsh-diff-viewer

# 重启 dsh web 生效
dsh web
```

> Windows 注意：`dsh plugin add <本地目录>` 的 `link:` 绝对路径有 junction bug（pnpm 拼错目标）。用 **tarball**（`npm pack` 后 `dsh plugin add *.tgz`）或 GitHub 安装可绕过。

### 早于扩展点的发行版

发行版的 ui-tool 无 diff-card 槽位，插件无法安装——请升级 dsh 到含扩展点的版本（或参考 `patches/` 存档补丁）。

## 卸载

```sh
dsh plugin --profile web remove @dsh-external/dsh-diff-viewer
```

## 开发

```sh
pnpm install && pnpm run check    # typecheck + test（63 用例，100% 覆盖）+ build
```

测试需要 workspace 内的 `@deepseek-ai/dsh-*` 包（devDependencies 用 `link:` 指向 `../dsh2026/test-lehhair`，vitest alias 统一 react 单实例）。
