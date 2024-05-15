---
order: 1
title: "API Service"
---

::: warning
Must know go-zero's API command. [API Command](https://go-zero.dev/en/docs/tutorials) [Api Service](https://go-zero.dev/en/docs/tutorials/http/server/configuration) \
 \
Refer to the [Example](https://github.com/suyuan32/simple-admin-example-api) project to generate it again, confirm that the generated file is consistent with the Example project, and the Example project has complete commands.
:::

## Responsibilities of the API service

In simple admin, the API service acts as a gateway, mainly providing the following functions:

- User authentication, such as JWT
- Data processing, such as data filtering, international translation
- Current limiting and fusing

An API can access multiple RPCs, providing a unified request entry。

::: info
[Tutorial](https://youtu.be/duSIv0qcCV8)
<BiliBili bvid="BV1Lh411E7Xv" />
:::

## Create API project

> Create example project

```shell
goctls api new example --i18n=true --casbin=true --trans_err=true --module_name=github.com/suyuan32/simple-admin-example-api --port=8081
```

> Simpler Command

```shell
goctls api new example -i -c -a -m github.com/suyuan32/simple-admin-example-api -p 8081
```

::: warning
Create a project name that only supports lowercase and camelcase
:::

### `api new` parameters

| Parameter    | Must | Default | Introduction                                                                 | Usage                                                                                                                                                             |
| ------------ | ---- | ------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| i18n         | No   | false   | Whether to use i18n                                                          | true means use                                                                                                                                                    |
| casbin       | No   | false   | Whether to enable casbin for authentication and automatically add middleware | true means use                                                                                                                                                    |
| module_name  | No   |         | Module name in go.mod                                                        | If your project will be used by other project, you should set as above which is a github repository. If it is empty, the module will be the same as project name. |
| trans_err    | No   | false   | Whether to use i18n in error                                                 | true means use                                                                                                                                                    |
| port         | No   | 9100    | port number                                                                  | The service port                                                                                                                                                  |
| style        | No   | go_zero | The format of the file name.                                                 | snake case format is go_zero.                                                                                                                                     |
| use_core_rpc | No   | false   | Generate CoreRpc config                                                      | Whether to use "CoreRpc", if true will generate "CoreRpc" configuration                                                                                           |

**More parameters please check `goctls api new --help`**

```shell
$ goctls api new --help
Fast create api service

Usage:
  goctls api new [flags]

Flags:
      --branch string        The branch of the remote repo, it does work with --remote
  -c, --casbin               Whether to use the Casbin
  -e, --ent                  Whether to use Ent in API service
  -h, --help                 help for new
      --home string          The goctls home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
  -i, --i18n                 Whether to use i18n
  -m, --module_name string   The module name in go.mod. e.g. github.com/suyuan32/simple-admin-core
  -p, --port int             The service port exposed (default 9100)
      --remote string        The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                             The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
  -s, --style string         The file naming format, see [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md] (default "go_zero")
  -a, --trans_err            Whether to translate the error
  -r, --use_core_rpc         Whether to use "CoreRpc", if true will generate "CoreRpc" configuration
```

> You can see the project structure:

![Example](/assets/example-struct.png)

### File structure

```text
├── desc                             api declaration file storage directory
├── etc                              configuration file directory
└── internal
     ├──config
     ├── handler                     handler directory
     │ ├── base
     │ ├── student
     │ └── teacher
     ├──                             i18n internationalization i18n file directory
     │ └── locale
     ├── logic                       logic code directory
     │ ├── base
     │ ├── student
     │ └── teacher
     ├── middleware                  middleware directory
     ├── svc                         global parameter directory
     └── types                       type declaration directory


```

> And then edit etc/example.yaml

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

> Run the command below:

```shell
go run example.go -f etc/example.yaml
```

> If you see the information below:

```shell
Starting server at 127.0.0.1:8081...
```

That means running successfully.

## Code generation（based on Proto file）

::: warning
Proto must be the proto generated by `goctls rpc ent`
:::

```shell
goctls api proto --proto=/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto --style=go_zero --api_service_name=example --rpc_service_name=Example --output=./ --model=Student --rpc_name=Example --grpc_package=github.com/suyuan32/simple-admin-example-rpc/types/example
```

> Simpler

```shell
goctls api proto -p /home/ryan/GolandProjects/simple-admin-example-rpc/example.proto -a example -r Example -o ./ -m Student -n Example -g github.com/suyuan32/simple-admin-example-rpc/types/example -i
```

### `api proto` parameters

| Parameters       | Must | Default | Introduction                                                                   | Usage                                                                                                                                              |
| ---------------- | ---- | ------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| proto            | Yes  |         | Proto file path                                                                | Input the absolute path of proto file. **It should be the proto in `root` directory, not in desc. Because it needs package data and `Base` data.** |
| style            | No   | go_zero | File name format                                                               | The go_zero means snack format                                                                                                                     |
| i18n             | No   | false   | Whether to use i18n                                                            | true means use                                                                                                                                     |
| api_service_name | Yes  |         | API Service name                                                               | The API service name set in `.api` file                                                                                                            |
| rpc_service_name | Yes  |         | RPC Service name                                                               | The RPC service name set in `.proto` file                                                                                                          |
| output           | Yes  |         | Output path                                                                    | The output path，it can be relative path. It should target to the root path of project.                                                            |
| model            | Yes  |         | Model name                                                                     | Model name used for generation, such as User, supports generating multiple models at the same time, separated by commas, such as User, Member      |
| rpc_name         | Yes  |         | RPC name                                                                       | Input Example will generate l.svcCtx.ExampleRpc                                                                                                    |
| grpc_package     | Yes  |         | RPC \*\_grpc.go package path                                                   | In example project is github.com/suyuan32/simple-admin-example-rpc/example                                                                         |
| multiple         | No   | false   | Multiple Service                                                               | If your proto file contains multiple service, you should set true                                                                                  |
| json_style       | No   | goZero  | JSON tag format, the default is small camelCase                                | go_zero is underscore, GoZero is large camelCase                                                                                                   |
| import_prefix    | No   |         | The path prefix of import                                                      | Import paths' prefix is only used when the service in sub folder, such as core service's api and rpc                                               |
| overwrite        | No   | false   | Whether it covers the generated file                                           | `true` will cover all generated files                                                                                                              |
| api_data         | No   | false   | Whether to automatically generate API initialization code, CoreRpc is required | If true, initialize API data will be auto generated.                                                                                               |
| route_prefix     | No   | false   | Whether to generate route prefix.                                              | must begin with "/"                                                                                                                                |
| optional_service | No   | false   | Whether the service is optional                                                | `true` will generate logic code to judge the service status                                                                                        |

** Run `goctls api proto --help` see more details. **

```shell
$ goctls api proto -h
Generate CRUD template from proto file

Usage:
  goctls api proto [flags]

Flags:
  -d, --api_data                  Whether to automatically generate API initialization code, CoreRpc is required
  -a, --api_service_name string   The API service name
  -g, --grpc_package string       The rpc package which stores pb file. e.g. github.com/suyuan32/simple-admin-job/types/job
  -h, --help                      help for proto
  -i, --i18n                      Whether to use i18n
  -x, --import_prefix string      Import paths' prefix is only used when the service in sub folder, such as core service's api and rpc
  -j, --json_style string         The JSON tag format, default is camelcase (default "goZero")
  -m, --model string              Model name used for generation, the same as the struct name in schema. such as User, supports generating multiple models at the same time, separated by commas, such as User, Member
      --multiple                  Whether the proto contains multiple services
  -t, --optional_service          Whether it is an optional service, if true, judgment code will be generated
  -o, --output string             The output path
  -w, --overwrite                 Whether to overwrite the files, it will overwrite all generated files
  -p, --proto string              The proto path
  -f, --route_prefix string       Route prefix,  must begin with "/"
  -n, --rpc_name string           The rpc name in service context. e.g. Core means CoreRpc
  -r, --rpc_service_name string   The RPC service name
  -s, --style string              The file name format style (default "go_zero")
```

::: info
Multiple Service Example, multiple is used to generate separate RPC client when there are several RPC service in one proto file.

```shell
goctls api proto --proto=/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto --style=go_zero --api_service_name=example --rpc_service_name=school --output=./ --model=Teacher --rpc_name=School --grpc_package=github.com/suyuan32/simple-admin-example-rpc/example --multiple=true
```

[Example Code](https://github.com/suyuan32/simple-admin-example-api/tree/multiple)
:::

The codes generated is like below:

![pic](/assets/api_gen_struct.png)

> See more detail in simple admin example api URL <https://github.com/suyuan32/simple-admin-example-api>

::: warning
You need to add `ExampleRpc` manually into `service_context`, `config`, `etc`.
:::

## Code generation (Ent-based single service)

::: info
[Tutorial Video](https://youtu.be/h3wybuEdg4s)

<BiliBili bvid="BV1oa4y1A7rT" />
:::

::: info
If your project is small, single API service is a good choise. It doesn't need RPC services.
:::

::: warning
Single services need to set `--ent=true` when using the `api new` command. \
Learn from [Single Example](https://github.com/suyuan32/simple-admin-example-api-single)

```shell
goctls api new example -i -c -a -m github.com/suyuan32/simple-admin-example-api -p 8081 -e
```
:::

```shell
goctls api ent --schema=./ent/schema --api_service_name=example --output=./ --model={modelName} --group={groupName} --search_key_num=3 --overwrite=true
```

| Parameter        | Required | Default | Description                                                                    | Usage                                                                                                       |
| ---------------- | -------- | ------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| schema           | Yes      |         | The address of the Ent schema file.                                            | Enter the relative path of the Ent schema folder.                                                           |
| style            | No       | go_zero | The format of the file name.                                                   | snake case format for go_zero.                                                                              |
| i18n             | No       | false   | Whether to use i18n                                                            | true means use                                                                                              |
| api_service_name | Yes      |         | The service name of the API, used in the API declaration file.                 | In the API declaration file.                                                                                |
| output           | Yes      |         | The output location of the file, relative path is accepted.                    | Points to the main file directory.                                                                          |
| model            | Yes      |         | The name of the model in the schema.                                           | The model name for generating e.g. User, if it is  "all", generate codes for all models in schema directory |
| search_key_num   | No       | 3       | The number of search fields in the list (default is 3).                        | Only string type fields can be automatically generated.                                                     |
| group            | Yes      |         | The name of the group, used to put different logic files in different folders. | Put different logic files in different folders.                                                             |
| json_style       | No       | goZero  | The format of the JSON tag, default is camel case for go_zero.                 | Underline for go_zero, upper camel case for GoZero.                                                         |
| import_prefix    | No       |         | The path prefix of import                                                      | Import paths' prefix is only used when the service in sub folder, such as core service's api and rpc        |
| api_data         | No       | false   | Whether to automatically generate API initialization code, CoreRpc is required | If true, initialize API data will be auto generated.                                                        |
| route_prefix     | No       | false   | Whether to generate route prefix.                                              | must begin with "/"                                                                                         |
| overwrite        | No       | false   | Whether to overwrite the generated files.                                      | Overwrite all generated files when true.                                                                    |

::: info
The shortcut command `make gen-api-ent-logic model={modelName} group={groupName}` means to generate the code whose schema is `{modelName}`, and `{groupName}` is the group name. Note that the first letter of modelName needs to be capitalized. Be consistent with the struct name in the schema, use `make gen-api-ent-logic model=all group=all` to generate all CRUD codes.
:::

> ** Run `goctls api ent --help` see more details **

```shell
$ goctls api ent -h
Generate CRUD logic files from ent file

Usage:
  goctls api ent [flags]

Flags:
  -p, --api_data                  Whether to automatically generate API initialization code, CoreRpc is required
  -a, --api_service_name string   The API service name
  -g, --group string              The group name for logic. e.g. user
  -h, --help                      help for ent
  -i, --i18n                      Whether to use i18n
  -x, --import_prefix string      Import paths' prefix is only used when the service in sub folder, such as core service's api and rpc
  -j, --json_style string         The JSON tag format, default is camelcase (default "goZero")
  -m, --model string              The model name for generating, the same as the struct name in schema. e.g. User. If it is  "all", generate codes for all models in schema directory
  -o, --output string             The output path
  -w, --overwrite                 Whether to overwrite the files, it will overwrite all generated files
  -f, --route_prefix string       Route prefix,  must begin with "/"
  -c, --schema string             The schema path of the Ent
  -k, --search_key_num int        The max number of search keys (default 3)
  -s, --style string              The file name format style (default "go_zero")
```

### Directory Structure

```text

example
├── Dockerfile
├── Makefile
├── desc                                   # declaration directory
│ ├── all.api
│ └── base.api
├── ent                                    # Ent directory
│ ├── client.go
│ ├── ent.go
│ ├── enttest
│ │ └── enttest.go
│ ├── example
│ │ ├── example.go
│ │ └── where.go
│ ├── example.go
│ ├── example_create.go
│ ├── example_delete.go
│ ├── example_query.go
│ ├── example_update.go
│ ├── generate.go
│ ├── hook
│ │ └── hook.go
│ ├── migrate
│ │ ├── migrate.go
│ │ └── schema.go
│ ├── mutation.go
│ ├── predicate
│ │ └── predicate.go
│ ├── runtime
│ │ └── runtime.go
│ ├── runtime.go
│ ├── schema                                 # model directory
│ │ └── example.go
│ ├── template
│ │ ├── not_empty_update.tmpl
│ │ └── pagination.tmpl
│ └── tx.go
├── etc                                      # configuration file directory
│ └── example.yaml
├── example.go
├── go.mod
├── go.sum
└── internal
     ├──config
     │ └── config.go
     ├── handler
     │ ├── base
     │ │ └── init_database_handler.go
     │ └── routes.go
     ├── i18n                                 # Internationalization file directory
     │ ├── locale
     │ │ ├── en.json
     │ │ └── zh.json
     │ └── vars.go
     ├── logic
     │ └── base
     │ └── init_database_logic.go
     ├── middleware
     │ └── authority_middleware.go
     ├── svc
     │ └── service_context.go
     ├── types
     │ └── types.go
     └── utils                                # tools directory
         ├── dberrorhandler                   # Ent error handling tool
         │ └── error_handler.go
         └── entx                             # Ent transaction support function
             └── ent_tx.go
```
