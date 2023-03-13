---
order: 3
title: '定时任务模块'
---

## 定时任务模块

### 下载代码

```shell
git clone https://github.com/suyuan32/simple-admin-job.git
```

### 配置项目（本地开发）

```yaml
Name: job.rpc
ListenOn: 0.0.0.0:9105

DatabaseConf:
  Type: mysql
  Host: 127.0.0.1
  Port: 3306
  DBName: simple_admin
  Username: # set your username
  Password: # set your password
  MaxOpenConn: 100
  SSLMode: disable
  CacheTime: 5

RedisConf:
  Host: 127.0.0.1:6379
  Type: node

Log:
  ServiceName: jobRpcLogger
  Mode: file
  Path: /home/data/logs/job/rpc
  Encoding: json
  Level: info
  Compress: false
  KeepDays: 7
  StackCoolDownMillis: 100

Prometheus:
  Host: 0.0.0.0
  Port: 4005
  Path: /metrics

AsynqConf:
# 如果你不使用 WithRedisConf 方法的话, 你需要解开以下注释定义配置

#  Addr: localhost:6379  # Redis address
#  Pass: # Redis Password
#  DB: 0 # Redis database index
#  Concurrency: 20 # max concurrent process job task num
#  SyncInterval: 10 # seconds, this field specifies how often sync should happen
  Enable: true
```

### 接下来的步骤

- 启动项目和core服务
- 初始化数据库
- 在菜单中修改隐藏为显示

### 项目结构

```text
├── desc
│   ├── base.proto
│   └── task.proto
├── Dockerfile
├── ent
│   ├── client.go
│   ├── ent.go
│   ├── enttest
│   │   └── enttest.go
│   ├── generate.go
│   ├── hook
│   │   └── hook.go
│   ├── migrate
│   │   ├── migrate.go
│   │   └── schema.go
│   ├── mutation.go
│   ├── not_empty_update.go
│   ├── pagination.go
│   ├── predicate
│   │   └── predicate.go
│   ├── runtime
│   │   └── runtime.go
│   ├── runtime.go
│   ├── schema
│   │   └── task.go
│   ├── task
│   │   ├── task.go
│   │   └── where.go
│   ├── task_create.go
│   ├── task_delete.go
│   ├── task.go
│   ├── task_query.go
│   ├── task_update.go
│   ├── template
│   │   ├── not_empty_update.tmpl
│   │   └── pagination.tmpl
│   └── tx.go
├── etc
│   ├── job_dev.yaml
│   └── job.yaml
├── go.mod
├── go.sum
├── internal
│   ├── config
│   │   └── config.go
│   ├── logic
│   │   ├── base
│   │   │   └── init_database_logic.go
│   │   └── task
│   │       ├── create_task_logic.go
│   │       ├── delete_task_logic.go
│   │       ├── get_task_by_id_logic.go
│   │       ├── get_task_list_logic.go
│   │       └── update_task_logic.go
│   ├── mqs
│   │   └── amq
│   │       ├── handler                                         # handler 目录， 用于存放任务操作逻辑
│   │       │   └── amq
│   │       │       └── base
│   │       │           └── hello_world.go                # hello world demo
│   │       ├── task
│   │       │   ├── dynamicperiodictask
│   │       │   │   └── dynamic_periodic_task.go
│   │       │   ├── mqtask
│   │       │   │   ├── mqtask.go
│   │       │   │   └── register.go                 # 在此处注册任务worker
│   │       │   └── scheduletask
│   │       │       ├── register.go                       # 在此处注册静态的定时任务
│   │       │       └── scheduletask.go
│   │       └── types
│   │           ├── pattern
│   │           │   └── pattern.go                        # 在此处添加任务标识 pattern, 用于区分和定位任务
│   │           ├── payload
│   │           │   └── payload.go                        # 在此处添加静态任务数据
│   │           └── periodicconfig
│   │               └── provider.go
│   ├── server
│   │   └── job_server.go
│   ├── svc
│   │   └── service_context.go
│   └── utils
│       ├── dberrorhandler
│       │   └── error_handler.go
│       └── entx
│           └── ent_tx.go
├── job
│   ├── job_grpc.pb.go
│   └── job.pb.go
├── jobclient
│   └── job.go
├── job.go
├── job.proto
├── LICENSE
├── Makefile
└── README.md

```

::: warning
项目默认使用 asynq 作为定时任务管理器，只需要使用 Redis
:::

### 如何添加任务？

- 首先需要在 handler 定义任务的执行逻辑， 模仿 hello world, 必须实现 ProcessTask 方法
- 在 mqtask 注册任务
- 在后台添加任务，pattern 要和 mqtask 里的 pattern 一致或开头一致， 系统会自动查找最接近的任务
- 添加完即可看到效果

::: warning
如果你不需要静态定时任务，只需要在main 注释掉即可

`job.go`

```go
serviceGroup.Add(mqtask.NewMQTask(ctx))
serviceGroup.Add(dynamicperiodictask.NewDPTask(ctx))
// serviceGroup.Add(scheduletask.NewSchedulerTask(ctx))
```
:::

### 定时任务表达式

定时任务支持常用 Cron 表达式

::: info 默认格式
> `* * * * *`
表示每秒钟都会执行
:::

::: info every
> `@every` 如 `@every 5s` 表示每5秒执行一次
:::

### 如何在core 启用 job

JobRpc `enable` 设置为 true

```yaml
Name: core.api
Host: 0.0.0.0
Port: 9100
Timeout: 30000

Auth:
  AccessSecret: jS6VKDtsJf3z1n2VKDtsJf3z1n2
  AccessExpire: 259200  # Seconds

Log:
  ServiceName: coreApiLogger
  Mode: file
  Path: /home/ryan/logs/core/api
  Level: info
  Compress: false
  KeepDays: 7
  StackCoolDownMillis: 100

RedisConf:
  Host: localhost:6379  # change to your own ip or address
  Type: node

CoreRpc:
  Endpoints:
    - 127.0.0.1:9101
  Enabled: true

JobRpc:
  Endpoints:
    - 127.0.0.1:9105
  Enabled: true

Captcha:
  KeyLong: 5
  ImgWidth: 240
  ImgHeight: 80

DatabaseConf:
  Type: postgres
  Host: localhost
  Port: 5432
  DBName: simple_admin
  Username: postgres
  Password:
  MaxOpenConn: 100
  SSLMode: disable
  CacheTime: 30

#DatabaseConf:
#  Type: mysql
#  Host: localhost
#  Port: 3306
#  DBName: simple_admin
#  Username: root
#  Password: '123456'
#  MaxOpenConn: 100
#  SSLMode: disable
#  CacheTime: 5

Prometheus:
  Host: 0.0.0.0
  Port: 4000
  Path: /metrics

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

#Telemetry:
#  Name: core-api
#  Endpoint: http://127.0.0.1:14268/api/traces
#  Sampler: 1.0
#  Batcher: jaeger
```

### 效果展示

![管理页面](/assets/cron_zh.png)

![效果](/assets/cron_console.png)