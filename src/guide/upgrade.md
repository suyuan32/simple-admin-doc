---
order: 7
title: "Version Upgrade"
head:
  - - meta
    - name: keywords
      content: project upgrade
---

## How to upgrade your project to the latest version?

::: info Video tutorial
<BiliBili bvid="BV1PP411B71r" />
:::

1. Update the dependencies in your go.mod file to the latest version. (goctls project upgrade)
2. Regenerate the makefile using the `goctls extra makefile` command.
3. Regenerate the dockerfile using the `goctls docker` command.
4. Update the Ent template using the `goctls extra ent template` command.
5. Regenerate project files using `make gen-api` and `make gen-rpc`.

## Backend UI upgrade

Vben backend UI update reference [Synchronization tutorial](FAQ.md#how-to-sync-a-fork-repository)

::: warning
The original git data cannot be deleted, otherwise the code will not be automatically merged.
:::