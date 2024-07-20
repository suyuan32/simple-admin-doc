---
order: 7
title: "版本更新"
head:
  - - meta
    - name: keywords
      content: 项目升级, 版本升级
---

## 如何更新自己的项目到最新版本？

::: info 视频教程
<BiliBili bvid="BV1PP411B71r" />
:::

1. 更新 go.mod 中的依赖至最新 (goctls project upgrade)
2. 使用 `goctls extra makefile` 命令重新生成 makefile
3. 使用 `goctls docker` 命令重新生成 dockerfile
4. 使用 `goctls extra ent template` 命令更新 Ent 模板
5. 使用 `make gen-api` 和 `make gen-rpc` 重新生成项目文件


## Vben 后台更新

vben 后台更新参考 [同步教程](FAQ.md#如何同步-fork-仓库)

::: warning
不能删除原有的 git 数据，否则将无法自动合并代码
:::