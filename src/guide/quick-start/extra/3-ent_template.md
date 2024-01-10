---
order: 3
title: "Ent Management"
---

## Ent Template Generation

### `extra ent template` Template Generation

```shell
goctls extra ent template -u
```

| Parameter Name | Required | Default Value | Description                                                                                                                                   |
| -------------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| update         | No       | false         | Whether to update all local templates and ent versions                                                                                        |
| list           | No       | false         | List all supported templates                                                                                                                  |
| dir            | No       |               | Ent directory, if empty, it will try to find it automatically. It needs to be executed in the project root directory to find it automatically |
| add            | No       |               | Add a template, which needs to be in the list.                                                                                                |

```shell
Usage:
  goctl extra ent template [flags]

Flags:
  -a, --add string   Add template for ent
  -d, --dir string   The ent directory. If it is empty, goctls will try to find it automatically
  -h, --help         help for template
  -l, --list         List all support templates
  -u, --update       Update all templates
```

### `extra ent mixin` Template Generation

> goctls >= 1.5.14

```shell
goctls extra ent mixin -a soft_delete
```

```shell
$ goctls extra ent mixin -h
Usage:
  goctls extra ent mixin [flags]

Flags:
  -a, --add string   Add Mixin template for ent
  -d, --dir string   Directory of ent. If empty, goctls will find it automatically
  -h, --help         help for mixin
  -l, --list         List all supported templates
  -u, --update       Update all templates
```

Soft delete templates are currently supported.

### `extra ent import` generates schema from database

> goctls >= 1.6.12

::: warning
It is recommended to execute the command directly in the project's **root directory**, and the `-o` parameter does not need to be configured, for example:

```shell
goctls extra ent import -d "mysql://root:simple-admin.@tcp(localhost:3306)/simple_admin?charset=utf8mb4&parseTime=True&loc=Local" -t "sys_tokens"
```

:::

```shell
$ goctls extra ent import -h
Generate Ent Schema from database

Usage:
  goctls extra ent import [flags]

Flags:
  -d, --dsn string              Database DSN address, supports mysql and postgres. e.g. "mysql://user:pass@tcp(localhost:3306)/dbname"
                                "postgres://user:pass@host:port/dbname?sslmode=disable"
  -e, --exclude_tables string   When excluding tables for exporting all tables, you need to specify all intermediate tables and tables without a primary key. For example: role_menu, user_roles
  -h, --help                    help for import
  -o, --output string           Output path, the project's root directory
  -t, --tables string           Specify data tables. e.g. sys_users,sys_tokens
```

::: info
goctls supports generating index indexes, but the suffix of the index name must be the field name, and only supports generating single indexes, not composite indexes
:::

### `extra ent schema` command generates an empty schema file.

> goctls >= 1.5.20

```shell
$ goctls extra ent schema -h

Generate an empty schema file

Usage:
  goctls extra ent schema [flags]
Flags:
  -h, --help                help for schema
  -m, --model_name string   Model name
```