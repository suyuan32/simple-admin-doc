---
order: 7
title: "版本更新"
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
