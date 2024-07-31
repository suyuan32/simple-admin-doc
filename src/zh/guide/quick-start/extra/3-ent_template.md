---
order: 3
title: "Ent 管理"
head:
  - - meta
    - name: keywords
      content: Ent code generations, 模板生成, mixin 生成, schema
---

## Ent 文件生成

::: info 视频教程
<BiliBili bvid="BV1Zz4y1V7HR" />
:::

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
  goctls extra ent template [选项]

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

> goctls >= 1.6.12

::: warning
建议直接在项目**根目录**执行命令，可以不用配置 `-o` 参数, 例如

```shell
goctls extra ent import -d "mysql://root:simple-admin.@tcp(localhost:3306)/simple_admin?charset=utf8mb4&parseTime=True&loc=Local" -t "sys_tokens"
```

:::

```shell
$ goctls extra ent import -h
从数据库生成 Ent Schema

Usage:
  goctls extra ent import [flags]

Flags:
  -d, --dsn string              数据库的 DSN 地址，支持 mysql 和 postgres。 例子："mysql://user:pass@tcp(localhost:3306)/dbname"
                                "postgres://user:pass@host:port/dbname?sslmode=disable"
  -e, --exclude_tables string   排除的数据表，用于导出所有表时，需指定所有中间表及没有 primary key 的表，例子： role_menu,user_roles
  -h, --help                    help for import
  -o, --output string           输出路径，为项目根目录
  -p, --plural_table            是否给表自动添加复数, 例如导入 user 表将自动生成 "users"  (default true)
  -t, --tables string           指定数据表，例子： sys_users,sys_tokens

```

::: warning
使用 -p 参数为 false 时需要, -p=false
:::

::: info
goctls 支持生成 index 索引，但是索引的名称的后缀必须为字段名称，且只支持生成单索引，不支持复合索引，导入的 edge 关系需手动检查
:::

### `extra ent schema` 命令生成空的 schema 文件

> goctls >= 1.5.20

```shell
$ goctls extra ent schema -h
生成 schema 空白文件

Usage:
  goctls extra ent schema [flags]

Flags:
  -h, --help                help for schema
  -m, --model_name string   Model 名称
```