---
order: 3
title: "Ent 模板管理"
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

### `extra ent import` 数据库结构导出到 schema

> goctls >= 1.5.18

```shell
$ goctls extra ent import -h
从数据库生成 Ent Schema

Usage:
  goctls extra ent import [flags]

Flags:
  -d, --dsn string      数据库的 DSN 地址，支持 mysql 和 postgres。 例子："mysql://user:pass@tcp(localhost:3306)/dbname"
                        "postgres://user:pass@host:port/dbname"
  -h, --help            help for import
  -o, --output string   输出路径，为项目根目录
  -t, --tables string   指定数据表，例子： sys_users,sys_tokens

```

::: info
goctls 支持生成 index 索引，但是索引的名称的后缀必须为字段名称，且只支持生成单索引，不支持复合索引
:::
