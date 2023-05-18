---
order: 2
title: "RPC 微服务"
---

# 3 分钟开发 RPC 服务

::: warning
首先确认你安装了以下软件:

- simple-admin-tool (goctls) v1.5.5 +

必须了解 go zero 的 RPC 命令 [RPC 命令](https://go-zero.dev/cn/docs/goctl/zrpc/#%E6%96%B9%E5%BC%8F%E4%BA%8C%E9%80%9A%E8%BF%87%E6%8C%87%E5%AE%9Aproto%E7%94%9F%E6%88%90rpc%E6%9C%8D%E5%8A%A1) [RPC 服务](https://go-zero.dev/cn/docs/advance/rpc-call)
\
参考 [Example](https://github.com/suyuan32/simple-admin-example-rpc) 项目生成一遍，确认生成文件与 Example 项目一致，Example 项目有完整的命令
:::

::: info
[视频教程](https://www.bilibili.com/video/BV12s4y1R755)
:::

## RPC 职责

在 Simple Admin 中， RPC 主要用于获取数据以及提供扩展功能， 主要有以下职责：

- 与数据库交互，获取所需数据， 如 PostgreSql
- 与数据源交互获取数据， 如 ES
- 提供额外功能供 API 层调用，如发短信，邮件

多个不同的 API 都可以接入同一个 RPC 调用其功能。

## 创建 RPC 基本项目

> 创建 example 服务

```shell
goctls rpc new example --ent=true --module_name=github.com/suyuan32/simple-admin-example-rpc --go_zero_version=v1.5.2 --tool_version=v1.5.5 --port=8080 --gitlab=true --desc=true
```

> 简单命令

```shell
goctls rpc new example -e -m github.com/suyuan32/simple-admin-example-rpc  -p 8080 -g -d
```

::: warning
创建项目名称仅支持小写和驼峰命名, 项目名称不能包含 rpc 字符
:::

### `rpc new`参数介绍

| 参数            | 必须 | 默认值  | 介绍                              | 使用方法                                                                                                   |
| --------------- | ---- | ------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ent             | 否   | false   | 是否启用 ent                      | true 为启用                                                                                                |
| module_name     | 否   |         | go.mod 中的 module 名称           | 如果项目需要被在外部 import，需要像上面例子设置为 github 或者其他地方的仓库网址， 为空则 module 为项目名称 |
| style           | 否   | go_zero | 文件名格式                        | go_zero 为蛇形格式                                                                                         |
| go_zero_version | 否   | v1.5.2  | go zero 版本                      | 需要到[go-zero](https://github.com/zeromicro/go-zero/releases)查看最新 release                             |
| tool_version    | 否   | v1.5.5  | simple admin tools 版本号         | 需要到[tool](https://github.com/suyuan32/simple-admin-tools/releases)查看 simple admin tools 最新 release  |
| gitlab          | 否   | false   | 是否生成 gitlab-ci.yml            | true 为生成                                                                                                |
| port            | 否   | 9100    | 端口号                            | 服务暴露的端口号                                                                                           |
| desc            | 否   | false   | 是否拆分 proto 文件到 desc 文件夹 | true 会生成 desc 文件夹                                                                                    |
| i18n            | 否   | false   | 是否启用 i18n                     | true 为启用                                                                                                |

** 详细参数请在命令行查看 `goctls rpc new --help` **

```shell
$ goctls rpc new --help
生成 rpc 演示服务

Usage:
  goctl rpc new [flags]

Flags:
      --branch string            远程 repo 的分支，与 --remote 一起使用
  -d, --desc                     是否为拆分 proto 文件创建 desc 文件夹
  -e, --ent                      是否在项目中使用 Ent
  -g, --gitlab                   是否使用 gitlab-ci
  -z, --go_zero_version string   用于替换的 go zero 版本，例如：v1.5.2，请参见 [https://github.com/zeromicro/go-zero/releases] (default "v1.5.2")
  -h, --help                     help for new
      --home string              模板的 goctl 路径，--home 和 --remote 不能同时设置，如果设置了，--remote 优先级更高
  -i, --i18n                     是否启用 i18n 国际化
      --idea                     对于 idea 插件 [可选]
  -m, --module_name string       go.mod 中的模块名称，例如：github.com/suyuan32/simple-admin-core
  -p, --port int                 服务公开的端口 (default 9110)
      --remote string            模板的远程 git repo，--home 和 --remote 不能同时设置，如果设置了，--remote 优先级更高
                                 Git repo 的目录结构必须与 https://github.com/zeromicro/go-zero-template 相一致
  -s, --style string             文件命名格式，参见 [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md] (default "go_zero")
  -t, --tool_version string      用于迁移的 simple admin 工具版本，例如：v1.5.5，请参见 [https://github.com/suyuan32/simple-admin-tools/releases] (default "v1.5.6")
  -v, --verbose                  启用日志输出
```

> 你可以看到如下项目结构

![Example](/assets/example_rpc_struct.png)

### 文件结构

```text
├── desc                                  proto 文件目录
├── ent                                   ent 文件目录
│   ├── enttest
│   ├── hook
│   ├── migrate
│   ├── predicate
│   ├── runtime
│   ├── schema                            ent schema声明目录
│   ├── student
│   ├── teacher
│   └── template
├── etc                                   配置文件目录
├── example                               grpc和types目录
├── exampleclient                         客户端client目录
└── internal
    ├── config
    ├── logic                             业务代码目录
    │   ├── base
    │   ├── student
    │   └── teacher
    ├── server
    └── svc                               全局service_context目录
    └── utils                             工具库如 ent 错误处理以及事务函数

```

然后编辑 etc/example.yaml

```yaml
Name: example.rpc
ListenOn: 0.0.0.0:8080

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

RedisConf:
  Host: 127.0.0.1:6379
  Type: node

Log:
  ServiceName: exampleRpcLogger
  Mode: file
  Path: /home/ryan/data/logs/example/rpc
  Encoding: json
  Level: info
  Compress: false
  KeepDays: 7
  StackCoolDownMillis: 100

Prometheus:
  Host: 0.0.0.0
  Port: 4001
  Path: /metrics
```

### 编辑 schema

进入目录 ent/schema, 修改 example.go, 改名为 student.go 添加 mixin 和字段 address 和 uuid

```go
package schema

import (
 "entgo.io/ent"
 "entgo.io/ent/schema/field"
 "github.com/suyuan32/simple-admin-core/rpc/ent/schema/mixins"
)

// Student holds the schema definition for the Student entity.
type Student struct {
 ent.Schema
}

// Fields of the Student.
func (Student) Fields() []ent.Field {
 return []ent.Field{
  field.String("name"),
  field.Int("age"),
 }
}

func (Student) Mixin() []ent.Mixin {
 return []ent.Mixin{
  mixins.BaseMixin{},
 }
}

// Edges of the Student.
func (Student) Edges() []ent.Edge {
 return nil
}


```

### 生成 Ent 代码

```shell
make gen-ent
```

### 生成 Student 逻辑代码

```shell
goctls rpc ent --schema=./ent/schema  --style=go_zero --multiple=false --service_name=Example --output=./ --model=Student --group=student --proto_out=./desc/student.proto

make gen-rpc
```

### `rpc ent`参数介绍

| 参数              | 必须 | 默认值  | 介绍                     | 使用方法                                                                                                                                                       |
| ----------------- | ---- | ------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| schema            | 是   |         | schema 文件地址          | 输入 Ent schema 文件夹相对路径                                                                                                                                 |
| style             | 否   | go_zero | 文件名格式               | go_zero 为蛇形格式                                                                                                                                             |
| i18n              | 否   | false   | 是否启用 i18n            | true 为启用                                                                                                                                                    |
| service_name      | 是   |         | 服务名称                 | 和 proto 文件中的 service 名称相同                                                                                                                             |
| project_name      | 是   |         | 项目名称                 | 和 new 时的名称相同，和 main 文件名一致, 在 multiple 模式下需要设置，单 service 默认和 service name 相同                                                       |
| output            | 是   |         | 输出位置                 | 文件输出位置，可以为相对路径，指向 main 文件目录                                                                                                               |
| model             | 是   |         | 模型名称                 | schema 中内部 struct 名称，如 example 中的 Student                                                                                                             |
| search_key_num    | 否   | 3       | 搜索字段数量（默认为 3） | 列表搜索字段数量，只能自动生成 string 的字段                                                                                                                   |
| group             | 是   |         | 分组名称                 | 分组名称用于将不同 logic 文件放到不同文件夹                                                                                                                    |
| multiple          | 否   | false   | 多服务                   | 若 proto 文件中有多个 service, 需要设置为 true                                                                                                                 |
| proto_out         | 否   |         | 是否拆分 proto 文件      | 若为空则会将数据生成到项目根目录的 proto 文件，否则将会生成到指定路径 desc 中，如 ./desc/student.proto, 注意存放 proto 的文件夹必须为 desc, 内部可以有子文件夹 |
| proto_field_style | 否   | go_zero | proto 字段命名格式       | 默认为下划线                                                                                                                                                   |
| import_prefix     | 否   |         | 导入路径前缀             | 导入路径的前缀，仅用于项目位于子目录的情况，如 core 的 rpc 和 api                                                                                              |
| overwrite         | 否   | false   | 是否覆盖生成文件         | true 则会覆盖所有生成的文件                                                                                                                                    |

::: info
multiple 例子, multiple 用于根据不同服务生成多个 rpcclient

```shell
goctls api proto --proto=/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto --style=go_zero --api_service_name=example --rpc_service_name=school --o=./ --model=Teacher --rpc_name=School --grpc_package=github.com/suyuan32/simple-admin-example-rpc/example --multiple=true
```

[示例代码](https://github.com/suyuan32/simple-admin-example-rpc/tree/multiple-example)
:::

详细参数请在命令行查看 `goctls rpc ent --help`

```shell
$ goctls rpc ent --help
通过 Ent 生成 CRUD 模板代码

Usage:
  goctl rpc ent [flags]

Flags:
  -g, --group string               逻辑的组名称，例如：user
  -h, --help                       help for ent
  -i, --i18n                       是否启用 i18n 国际化
  -x, --import_prefix string       导入路径的前缀，仅用于项目位于子目录的情况，如 core 的 rpc 和 api
  -m, --model string               生成的模型名称，例如：user，如果为空，则为 schema 目录中所有模型生成代码
      --multiple                   在多个 rpc 服务模式下生成
  -o, --output string              输出路径
  -w, --overwrite                  是否覆盖文件，它将覆盖所有生成的文件
  -p, --project_name string        项目名称
  -f, --proto_field_style string   proto 字段样式 (default "go_zero")
  -t, --proto_out string           输出 proto 文件路径
  -c, --schema string              Ent 的 schema 路径
  -k, --search_key_num int         搜索键的最大数量 (default 3)
  -r, --service_name string        服务名称
  -s, --style string               文件名格式样式 (default "go_zero")
```

::: warning
注意： 工具会自动识别 desc 文件夹中的 proto 文件，desc 内部也可以创建子文件夹，package 和 go_package 只需在 base.proto 声明一次，
工具会自动将所有 proto 文件合并至项目根目录的 proto 文件中。旧项目拆分 proto 文件只需将根目录下的 proto 自行拆分至 desc 文件夹即可。
:::

::: info
快捷命令：`make gen-rpc-ent-logic model={modelName} group={groupName}` 表示生成 schema 为 `{modelName}` 的代码，`{groupName}`为分组名称，注意 modelName 需要首字母大写，和 schema 中的 struct 名称保持一致
:::

```shell
# 生成 schema 中的 Student 结构
make gen-rpc-ent-logic model=Student group=student

make gen-rpc

# 可能需要运行下
go mod tidy
```

![logic](/assets/ent_gen_logic.png)

可以看到 crud 代码已生成

> proto 文件代码

```protobuf
syntax = "proto3";

package example;
option go_package="./example";

message Empty {}

message IDReq {
  uint64 id = 1;
}

message IDsReq {
  repeated uint64 ids = 1;
}

message UUIDReq {
  string uuid = 1;
}

message BaseResp {
  string msg = 1;
}

message PageInfoReq {
  uint64 page = 1;
  uint64 page_size = 2;
}


// Student message

message StudentInfo {
  uint64 id = 1;
  int64 created_at = 2;
  int64 updated_at = 3;
  string name = 4;
  int64 age = 5;
}

message StudentListResp {
  uint64 total = 1;
  repeated StudentInfo data = 2;
}

message StudentPageReq {
  uint64 page = 1;
  uint64 page_size = 2;
  string name = 3;
}

service Example {
  // group: base
  rpc initDatabase (Empty) returns (BaseResp);

  // Student management
  // group: student
  rpc createOrUpdateStudent (StudentInfo) returns (BaseResp);
  // group: student
  rpc getStudentList (StudentPageReq) returns (StudentListResp);
  // group: student
  rpc deleteStudent (IDReq) returns (BaseResp);
  // group: student
  rpc batchDeleteStudent (IDsReq) returns (BaseResp);
}

```

使用 group 注释给 rpc 分组

> 然后代码就可以运行啦 !

```shell
go run example.go -f etc/example.yaml
```

> 如果看到

```shell
Starting server at 127.0.0.1:8080...
```

说明运行成功.

::: warning
后续还需要修改数据库初始化函数，参考 [simple admin member](https://github.com/suyuan32/simple-admin-member-rpc/blob/main/internal/logic/base/init_database_logic.go)
:::

> 项目地址 <https://github.com/suyuan32/simple-admin-example-rpc>

## simple admin example api 中如何远程调用该 RPC

### 添加 config

```go
package config

import (
 "github.com/suyuan32/simple-admin-core/rpc/config"
 "github.com/zeromicro/go-zero/core/stores/redis"
 "github.com/zeromicro/go-zero/rest"
 "github.com/zeromicro/go-zero/zrpc"
)

type Config struct {
 rest.RestConf
 Auth         rest.AuthConf
 DatabaseConf config.DatabaseConf
 RedisConf    redis.RedisConf
 CasbinConf   config.CasbinConf
 ExampleRpc   zrpc.RpcClientConf
}

```

### 添加 example rpc

> 修改 service context

```go
package svc

import (
 "github.com/suyuan32/simple-admin-example-rpc/exampleclient"
 "github.com/zeromicro/go-zero/zrpc"

 "github.com/suyuan32/simple-admin-example-api/internal/config"
 i18n2 "github.com/suyuan32/simple-admin-example-api/internal/i18n"
 "github.com/suyuan32/simple-admin-example-api/internal/middleware"

 "github.com/suyuan32/simple-admin-core/api/internal/i18n"

 "github.com/casbin/casbin/v2"
 "github.com/zeromicro/go-zero/core/logx"
 "github.com/zeromicro/go-zero/rest"
)

type ServiceContext struct {
 Config     config.Config
 ExampleRpc exampleclient.Example
 Casbin     *casbin.Enforcer
 Authority  rest.Middleware
 Trans      *i18n.Translator
}

func NewServiceContext(c config.Config) *ServiceContext {

 rds := redis.MustNewRedis(c.RedisConf)

 cbn := c.CasbinConf.MustNewCasbinWithRedisWatcher(c.DatabaseConf.Type, c.DatabaseConf.GetDSN(), c.RedisConf)

 trans := i18n.NewTranslator(i18n2.LocaleFS)

 return &ServiceContext{
  Config:     c,
  Authority:  middleware.NewAuthorityMiddleware(cbn, rds).Handle,
  Trans:      trans,
  ExampleRpc: exampleclient.NewExample(zrpc.NewClientIfEnable(c.ExampleRpc)),
 }
}
```

然后在 logic 直接调用 l.svcCtx.ExampleRpc 即可

> simple admin example api 地址 <https://github.com/suyuan32/simple-admin-example-api>
