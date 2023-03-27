---
order: 1
title: "API 微服务"
---

# 3 分钟开发 API 服务

::: warning
首先确认你安装了以下软件:

- simple-admin-tool (goctls) v0.2.9-beta +

必须了解 go zero 的 API 命令 [API 命令](https://go-zero.dev/cn/docs/goctl/api) [api 文件编写](https://go-zero.dev/cn/docs/advance/api-coding) \
\
参考 [Example](https://github.com/suyuan32/simple-admin-example-api) 项目生成一遍，确认生成文件与 Example 项目一致，Example 项目有完整的命令
:::

## API 服务的职责

在 simple admin 中， API 服务充当网关的角色，主要提供以下功能：

- 用户鉴权， 如 JWT
- 数据处理， 如数据过滤筛选，国际化翻译
- 限流和熔断

一个 API 可以接入多个 RPC， 提供统一的请求入口

## 创建 API 项目

创建 example

```shell
goctls api new example --i18n=true --casbin=true --go_zero_version=v1.5.0 --tool_version=v0.2.8 --trans_err=true --module_name=github.com/suyuan32/simple-admin-example-api --port=8081 --gitlab=true
```

### `api new` 参数介绍

| 参数            | 必须 | 默认值 | 介绍                      | 使用方法                                                                                                  |
| --------------- | ---- | ------ | ------------------------- | --------------------------------------------------------------------------------------------------------- |
| i18n            | 否   | false  | 是否启用 i18n             | true 为启用                                                                                               |
| casbin          | 否   | false  | 是否启用 casbin           | true 为启用                                                                                               |
| module_name     | 是   |        | go.mod 中的 module 名称   | 如果项目需要被在外部 import，需要像上面例子设置为 github 或者其他地方的仓库网址， 为空则只在本地使用      |
| go_zero_version | 是   |        | go zero 版本              | 需要到[go-zero](https://github.com/zeromicro/go-zero/releases)查看最新 release                            |
| tool_version    | 是   |        | simple admin tools 版本号 | 需要到[tool](https://github.com/suyuan32/simple-admin-tools/releases)查看 simple admin tools 最新 release |
| trans_err       | 否   | false  | 国际化翻译错误信息        | true 为启用                                                                                               |
| gitlab          | 否   | false  | 是否生成 gitlab-ci.yml    | true 为生成                                                                                               |
| port            | 否   | 9100   | 端口号                    | 服务暴露的端口号                                                                                          |
| ent             | 否   | false  | 是否启用 Ent              | true 为启用，启用 Ent 可用于单体 API 服务                                                                 |

**详细参数请在命令行查看 `goctls api new --help`**

> 你可以看到以下结构

![Example](/assets/example-struct.png)

### 文件结构

```text
├── desc                              api声明文件存放目录
├── etc                               配置文件目录
└── internal
    ├── config
    ├── handler                       handler目录
    │   ├── base
    │   ├── student
    │   └── teacher
    ├── i18n                          国际化i18n文件目录
    │   └── locale
    ├── logic                         业务代码目录
    │   ├── base
    │   ├── student
    │   └── teacher
    ├── middleware                    中间件目录
    ├── svc                           全局参数目录
    └── types                         类型声明目录


```

> 然后编辑 etc/example.yaml

```yaml
Name: example.api
Host: 0.0.0.0
Port: 8081
Timeout: 30000

Auth:
  AccessSecret: # the same as core
  AccessExpire: 259200

Log:
  ServiceName: exampleApiLogger
  Mode: file
  Path: /home/ryan/data/logs/example/api
  Level: info
  Compress: false
  KeepDays: 7
  StackCoolDownMillis: 100

Prometheus:
  Host: 0.0.0.0
  Port: 4000
  Path: /metrics

RedisConf:
  Host: 127.0.0.1:6379
  Type: node

DatabaseConf:
  Type: mysql
  Host: 127.0.0.1
  Port: 3306
  DBName: simple_admin
  Username: root # set your username
  Password: "123456" # set your password
  MaxOpenConn: 100
  SSLMode: disable
  CacheTime: 5

CasbinConf:
  ModelText: |
    [request_definition]
    r = sub, obj, act
    [policy_definition]
    p = sub, obj, act
    [role_definition]
    g = _, _
    [policy_effect]
    e = some(where (p.eft == allow))
    [matchers]
    m = r.sub == p.sub && keyMatch2(r.obj,p.obj) && r.act == p.act

ExampleRpc:
  Endpoints:
    - 127.0.0.1:8080
```

> 运行代码

```shell
go run example.go -f etc/example.yaml
```

> 如果看到

```shell
Starting server at 127.0.0.1:8081...
```

说明运行成功.

## 代码生成（基于 Proto）

::: warning
proto 必须为 `goctls rpc ent` 生成的 proto
:::

```shell
goctls api proto --proto=/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto --style=go_zero --api_service_name=example --rpc_service_name=Example --o=./ --model=Student --rpc_name=Example --grpc_package=github.com/suyuan32/simple-admin-example-rpc/example
```

### `api proto` 参数介绍

| 参数             | 必须 | 默认值  | 介绍                          | 使用方法                                                                                                                          |
| ---------------- | ---- | ------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| proto            | 是   |         | proto 文件地址                | 输入 proto 文件的绝对路径。 **注意要为合并后的 proto 即根目录下的 proto ，不是 desc 文件夹中的，因为要获取 package 和 Base 结构** |
| style            | 否   | go_zero | 文件名格式                    | go_zero 为蛇形格式                                                                                                                |
| api_service_name | 是   |         | 服务名称                      | api 服务的 service 名称, 在 api 声明文件中                                                                                        |
| rpc_service_name | 是   |         | 服务名称                      | rpc 服务的名称, 与 proto 文件中的 service 名称一致                                                                                |
| o                | 是   |         | 输出位置                      | 文件输出位置，可以为相对路径，指向 main 文件目录                                                                                  |
| model            | 是   |         | 模型名称                      | schema 中内部 struct 名称，如 example 中的 Student                                                                                |
| rpc_name         | 是   |         | RPC 名称                      | 输入 Example 则生成文件会生成 l.svcCtx.ExampleRpc                                                                                 |
| grpc_package     | 是   |         | RPC \*\_grpc.go 包路径        | 在 example 中是 github.com/suyuan32/simple-admin-example-rpc/example                                                              |
| multiple         | 否   | false   | 多服务                        | 若 proto 文件中有多个 service, 需要设置为 true                                                                                    |
| json_style       | 否   | goZero  | JSON tag 的格式，默认为小驼峰 | go_zero 为下划线， GoZero 为大驼峰                                                                                                |
| overwrite        | 否   | false   | 是否覆盖生成文件              | true 则会覆盖所有生成的文件                                                                                                       |

**详细参数请在命令行查看 `goctls api proto --help`**

::: info
multiple 例子, multiple 用于根据不同服务生成多个 rpcclient

```shell
goctls api proto --proto=/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto --style=go_zero --api_service_name=example --rpc_service_name=school --o=./ --model=Teacher --rpc_name=School --grpc_package=github.com/suyuan32/simple-admin-example-rpc/example --multiple=true
```

[代码](https://github.com/suyuan32/simple-admin-example-api/tree/multiple)
:::

> 生成效果

![pic](/assets/api_gen_struct.png)

> 详情查看 simple admin example api 地址 <https://github.com/suyuan32/simple-admin-example-api>

::: warning
还需要手动添加`ExampleRpc`到`service_context`, `config`, `etc`
:::

## 代码生成 (基于 Ent 的单体服务)

::: info
如果你的项目较小， 单体 API 服务比较适合你。直接在 API 层操作数据库，无需连接 RPC。
:::

::: warning
单体服务需要在 使用 `api new` 命令时设置 `--ent=true`. \
示例项目 [Single Example](https://github.com/suyuan32/simple-admin-example-api-single)
:::

```shell
goctls api ent --schema=./ent/schema --api_service_name=example --o=./ --model={modelName} --group={groupName} --search_key_num=3 --overwrite=true
```

| 参数             | 必须 | 默认值  | 介绍                          | 使用方法                                           |
| ---------------- | ---- | ------- | ----------------------------- | -------------------------------------------------- |
| schema           | 是   |         | schema 文件地址               | 输入 Ent schema 文件夹相对路径                     |
| style            | 否   | go_zero | 文件名格式                    | go_zero 为蛇形格式                                 |
| api_service_name | 是   |         | 服务名称                      | api 服务的 service 名称, 在 api 声明文件中         |
| o                | 是   |         | 输出位置                      | 文件输出位置，可以为相对路径，指向 main 文件目录   |
| model            | 是   |         | 模型名称                      | schema 中内部 struct 名称，如 example 中的 Student |
| search_key_num   | 否   | 3       | 搜索字段数量（默认为 3）      | 列表搜索字段数量，只能自动生成 string 的字段       |
| group            | 是   |         | 分组名称                      | 分组名称用于将不同 logic 文件放到不同文件夹        |
| json_style       | 否   | goZero  | JSON tag 的格式，默认为小驼峰 | go_zero 为下划线， GoZero 为大驼峰                 |
| overwrite        | 否   | false   | 是否覆盖生成文件              | true 则会覆盖所有生成的文件                        |

::: info
快捷命令 `make gen-api-ent-logic model={modelName} group={groupName}` 表示生成 schema 为 `{modelName}` 的代码，`{groupName}`为分组名称，注意 modelName 需要首字母大写，和 schema 中的 struct 名称保持一致
:::

### 目录结构

```text

example
├── Dockerfile
├── Makefile
├── desc                                       # 声明目录
│   ├── all.api
│   └── base.api
├── ent                                        # Ent 目录
│   ├── client.go
│   ├── ent.go
│   ├── enttest
│   │   └── enttest.go
│   ├── example
│   │   ├── example.go
│   │   └── where.go
│   ├── example.go
│   ├── example_create.go
│   ├── example_delete.go
│   ├── example_query.go
│   ├── example_update.go
│   ├── generate.go
│   ├── hook
│   │   └── hook.go
│   ├── migrate
│   │   ├── migrate.go
│   │   └── schema.go
│   ├── mutation.go
│   ├── predicate
│   │   └── predicate.go
│   ├── runtime
│   │   └── runtime.go
│   ├── runtime.go
│   ├── schema                                  # 模型目录
│   │   └── example.go
│   ├── template
│   │   ├── not_empty_update.tmpl
│   │   └── pagination.tmpl
│   └── tx.go
├── etc                                         # 配置文件目录
│   └── example.yaml
├── example.go
├── go.mod
├── go.sum
└── internal
    ├── config
    │   └── config.go
    ├── handler
    │   ├── base
    │   │   └── init_database_handler.go
    │   └── routes.go
    ├── i18n                                    # 国际化文件目录
    │   ├── locale
    │   │   ├── en.json
    │   │   └── zh.json
    │   └── vars.go
    ├── logic
    │   └── base
    │       └── init_database_logic.go
    ├── middleware
    │   └── authority_middleware.go
    ├── svc
    │   └── service_context.go
    ├── types
    │   └── types.go
    └── utils                                  # 工具目录
        ├── dberrorhandler                     # Ent错误处理工具
        │   └── error_handler.go
        └── entx                               # Ent事务支持函数
            └── ent_tx.go
```
