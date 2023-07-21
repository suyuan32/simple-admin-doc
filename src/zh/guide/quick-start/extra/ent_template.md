---
order: 3
title: "Ent模板管理"
---

## Ent 文件生成

### `extra ent template` 模板生成

```shell
goctls extra ent template -u
```

| 参数名称 | 必须 | 默认值 | 介绍                                                                 |
| -------- | ---- | ------ | -------------------------------------------------------------------- |
| update   | 否   | false  | 是否更新本地所有 template 及 ent 版本                                |
| list     | 否   | false  | 列出所有支持的模板                                                   |
| dir      | 否   |        | ent 目录，若为空则会尝试自动查找，需要在项目根目录执行才可以自动查找 |
| add      | 否   |        | 添加模板，需要为列表内的模板                                         |

```shell
用法：
  goctl extra ent template [选项]

选项：
  -a, --add string   添加 ent 模板
  -d, --dir string   ent 目录。如果为空，则 goctls 将自动查找
  -h, --help         显示帮助信息
  -l, --list         列出所有支持的模板
  -u, --update       更新所有模板
```

### `extra ent mixin` 模板生成

> goctls >= 1.5.14

```shell
goctls extra ent mixin -a soft_delete
```

```shell
$ goctls extra ent mixin -h
Usage:
  goctls extra ent mixin [flags]

Flags:
  -a, --add string   为 ent 添加 Mixin 模板
  -d, --dir string   ent 目录。如果为空，goctls 将自动查找它
  -h, --help         help for mixin
  -l, --list         列出所有支持的模板
  -u, --update       更新所有模板
```

目前已支持软删除模板
