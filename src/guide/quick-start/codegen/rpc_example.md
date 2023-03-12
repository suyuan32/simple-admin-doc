---
order: 2
title: 'RPC Service'
---
# 3 minutes developing RPC service

::: warning
Make sure that you have been installed follow software:

- simple-admin-tool (goctls) v0.2.7 +

 \
Must know go-zero's RPC command.  [RPC Command](https://go-zero.dev/docs/goctl/zrpc/#%E6%96%B9%E5%BC%8F%E4%BA%8C%E9%80%9A%E8%BF%87%E6%8C%87%E5%AE%9Aproto%E7%94%9F%E6%88%90rpc%E6%9C%8D%E5%8A%A1) [RPC Service](https://go-zero.dev/docs/advance/rpc-call) \
 \
Refer to the [Example](https://github.com/suyuan32/simple-admin-example-rpc) project to generate it again, confirm that the generated file is consistent with the Example project, and the Example project has complete commands.
:::

## RPC Responsibilities
In Simple Admin, RPC is mainly used to obtain data and provide extended functions. It mainly has the following responsibilities:

- Interact with the database to obtain the required data, such as PostgreSql
- Interact with data sources to obtain data, such as ES
- Provide additional functions for API layer calls, such as sending text messages and emails

Multiple different APIs can access the same RPC to call its functions.

## Create RPC project
>
> Create example project
>
```shell
goctls rpc new example --ent=true --module_name=github.com/suyuan32/simple-admin-example-rpc --go_zero_version=v1.4.4 --tool_version=v0.2.7 --port=8080  --gitlab=true --desc=true
```

### `rpc new` parameters

| Parameter       | Must | Default | Introduction                                         | Usage                                                                                               |
|-----------------|------|---------|------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| ent             | No   | false   | Whether to use Ent                                   | true means use                                                                                      |
| module_name     | Yes  |         | Module name in  go.mod                               | If your project will be used by other project, you should set as above which is a github repository |
| go_zero_version | Yes  |         | Go zero version                                      | Go to [go-zero](https://github.com/zeromicro/go-zero/releases) to get the latest release            |
| tool_version    | Yes  |         | Simple admin tools version                           | Go to [tool](https://github.com/suyuan32/simple-admin-tools/releases) to get the latest release     |
| gitlab          | No   | false   | Whether to generating gitlab-ci.yml                  | true means generating                                                                               |
| port            | No   | 9100    | Port number                                          | The service port                                                                                    |
| desc            | No   | false   | Whether to split the proto file into the desc folder | true will generate the desc folder                                                                  |

More parameters please check `goctls rpc new --help`

> You can see the project structure:

![Example](/assets/example_rpc_struct.png)

### File structure

```text
├── desc                               proto file directory
├── ent                                ent file directory
│ ├── enttest
│ ├── hook
│ ├── migrate
│ ├── predicate
│ ├── runtime
│ ├── schema                            ent schema declaration directory
│ ├── student
│ ├── teacher
│ └── template
├── etc                                 configuration file directory
├── example                             grpc and types directory
├── exampleclient                       client directory
└── internal
     ├──config
     ├── logic                          logic code directory
     │ ├── base
     │ ├── student
     │ └── teacher
     ├── server
     └── svc                            global service_context directory
     └── utils                          tools such as ent error handler and ent transaction function

```

And then edit etc/example.yaml

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

### Edit schema

Enter ent/schema, change example.go into student.go,  adding mixins and the fields address, uuid

```go
package schema

import (
 "entgo.io/ent"
 "entgo.io/ent/schema/field"
 "github.com/suyuan32/simple-admin-core/pkg/ent/schema/mixins"
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

### Generate Ent code

```shell
make gen-ent
```

### Generate Student CRUD logic codes

```shell
goctls rpc ent --schema=./ent/schema  --style=go_zero --multiple=false --service_name=example --o=./ --model=Student --group=student --proto_out=./desc/student.proto

make gen-rpc
```

### `rpc ent` parameters

| Parameters   | Must | Default | Introduction                         | Usage                                                                                                                                                                                                                                                                                 |
|--------------|------|---------|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| schema       | Yes  |         | Schema folder                        | Input the relative path of Ent schema                                                                                                                                                                                                                                                 |
| style        | No   | go_zero | File name format                     | The go_zero means snack format                                                                                                                                                                                                                                                        |
| service_name | Yes  |         | service name                         | The same as the service name in the proto file                                                                                                                                                                                                                                        |
| project_name | Yes  |         | project name                         | Same as the name you create project, same as main file name, needs to be set in multiple mode, single service is same as service name by default                                                                                                                                      |
| o            | Yes  |         | Output path                          | The output path，it can be relative path. It should target to the root path of project.                                                                                                                                                                                                |
| model        | Yes  |         | Model name                           | The structure name in schema，e.g. the Student in example project                                                                                                                                                                                                                      |
| group        | Yes  |         | Group Name                           | The group name is used to separate logic code                                                                                                                                                                                                                                         |
| multiple     | No   | false   | Multiple Service                     | If your proto file contains multiple service, you should set true                                                                                                                                                                                                                     |
| proto_out    | No   |         | Proto file output directory          | If it is empty, the data will be generated to the proto file in the root directory of the project, otherwise it will be generated in the specified path desc, such as ./desc/student.proto, note that the folder storing proto must be desc, and there can be sub-files inside folder |
| overwrite    | No   | false   | Whether it covers the generated file | `true` will cover all generated files                                                                                                                                                                                                                                                 |

::: info
Multiple Example, multiple is used to generate separate RPC client when there are several RPC service in one proto file.

```shell
goctls api proto --proto=/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto --style=go_zero --api_service_name=example --rpc_service_name=school --o=./ --model=Teacher --rpc_name=School --grpc_package=github.com/suyuan32/simple-admin-example-rpc/example --multiple=true
```

[Example Code](https://github.com/suyuan32/simple-admin-example-rpc/tree/multiple-example)
:::

**More parameters please check `goctls rpc ent --help`**

::: warning
Note: The tool will automatically recognize the proto files in the desc folder, and subfolders can also be created inside the desc, package and go_package only need to be declared once in base.proto,
The tool will automatically merge all proto files into the proto file in the project root directory. To split proto files in old projects, you only need to split the proto in the root directory to the desc folder.
:::

::: info
Quick command: gen-rpc-ent-logic model=Student means only generate structure called 'Student' in schema. If it is empty, generating all structures in schema fold. \  
Group means logic codes put in the group name folder.

```shell
make gen-rpc-ent-logic model=Student group=student

make gen-rpc

# You may need to run 
go mod tidy 
```

![logic](/assets/ent_gen_logic.png)

You can see CRUD code !
:::

> And then you can run the code !

> Proto File code

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

Use group comment to separate rpc logic

```shell
go run example.go -f etc/example.yaml
```

> If you see information below:

```shell
Starting server at 127.0.0.1:8080...
```

That means the codes run successfully, you need to finish the database initialization like:  [simple admin file](https://github.com/suyuan32/simple-admin-file/blob/master/api/internal/logic/file/init_database_logic.go)

> Project URL <https://github.com/suyuan32/simple-admin-example-rpc>

> How to call the RPC in simple admin example api

### Add config

```go
package config

import (
 "github.com/suyuan32/simple-admin-core/pkg/config"
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

::: info
Small website use endpoint connect directly \

```yaml
ExampleRpc:
 Endpoints:
  - 127.0.0.1:8080
```

It does not need service discovery， there can be several endpoints. \
:::

## Add example rpc in service context

### Edit service context

```go
package svc

import (
 "github.com/suyuan32/simple-admin-example-rpc/exampleclient"
 "github.com/zeromicro/go-zero/zrpc"

 "github.com/suyuan32/simple-admin-example-api/internal/config"
 i18n2 "github.com/suyuan32/simple-admin-example-api/internal/i18n"
 "github.com/suyuan32/simple-admin-example-api/internal/middleware"

 "github.com/suyuan32/simple-admin-core/pkg/i18n"

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

 rds := c.RedisConf.NewRedis()
 if !rds.Ping() {
  logx.Error("initialize redis failed")
  return nil
 }

 cbn, err := c.CasbinConf.NewCasbin(c.DatabaseConf.Type, c.DatabaseConf.GetDSN())
 if err != nil {
  logx.Errorw("initialize casbin failed", logx.Field("detail", err.Error()))
  return nil
 }

 trans := &i18n.Translator{}
 trans.NewBundle(i18n2.LocaleFS)
 trans.NewTranslator()

 return &ServiceContext{
  Config:     c,
  Authority:  middleware.NewAuthorityMiddleware(cbn, rds).Handle,
  Trans:      trans,
  ExampleRpc: exampleclient.NewExample(zrpc.MustNewClient(c.ExampleRpc)),
 }
}
```

> **And then you can call in via l.svcCtx.ExampleRpc in logic code.**

> simple admin example api  <https://github.com/suyuan32/simple-admin-example-api>
