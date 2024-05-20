---
order: 3
title: "Timed Task Module"
head:
  - - meta
    - name: keywords
      content: cron, job, task, simple admin scheduler, time task, golang
---

### Introduction

Simple Admin Job is the scheduled task module of Simple Admin. It currently provides dynamic and static scheduled tasks based on asynq and implemented using Redis. In the future, it will integrate with RocketMQ to implement additional scheduled tasks.

::: info Video tutorial
<BiliBili bvid="BV1Ac411F7yx" />
:::

### Download Code

```shell
git clone https://github.com/suyuan32/simple-admin-job.git
```

### Configuration project (local development)

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
  # If you don't use the WithRedisConf method, you need to untie the following annotations to define the configuration

  # Addr: localhost:6379 # Redis address
  # Pass: # Redis Password
  # DB: 0 # Redis database index
  # Concurrency: 20 # max concurrent process job task num
  # SyncInterval: 10 # seconds, this field specifies how often sync should happen
  Enable: true

TaskConf:
  EnableScheduledTask: false # Whether to enable static scheduled tasks
  EnableDPTask: true # Whether to enable dynamic scheduled tasks
```

### Next Steps

- Start project and core service
- Initialize the database
- Modify hidden to show in the menu

### Project Structure

```text
├── desc
│ ├── base.proto
│ └── task.proto
├── Dockerfile
├── ent
│ ├── client.go
│ ├── ent.go
│ ├── enttest
│ │ └── enttest.go
│ ├── generate.go
│ ├── hook
│ │ └── hook.go
│ ├── migrate
│ │ ├── migrate.go
│ │ └── schema.go
│ ├── mutation.go
│ ├── not_empty_update.go
│ ├── pagination.go
│ ├── predicate
│ │ └── predicate.go
│ ├── runtime
│ │ └── runtime.go
│ ├── runtime.go
│ ├── schema
│ │ └── task.go
│ ├── task
│ │ ├── task.go
│ │ └── where.go
│ ├── task_create.go
│ ├── task_delete.go
│ ├── task.go
│ ├── task_query.go
│ ├── task_update.go
│ ├── template
│ │ ├── not_empty_update.tmpl
│ │ └── pagination.tmpl
│ └── tx.go
├── etc.
│ ├── job_dev.yaml
│ └── job.yaml
├── go.mod
├── go.sum
├── internal
│ ├──config
│ │ └── config.go
│ ├── logic
│ │ ├── base
│ │ │ └── init_database_logic.go
│ │ └── task
│ │ ├── create_task_logic.go
│ │ ├── delete_task_logic.go
│ │ ├── get_task_by_id_logic.go
│ │ ├── get_task_list_logic.go
│ │ └── update_task_logic.go
│ ├── mqs
│ │ └── amq
│ │ ├── handler                                                 # handler directory, used to store task operation logic
│ │ │ └── amq
│ │ │ └── base
│ │ │ └── hello_world.go # hello world demo
│ │ ├── task
│ │ │ ├── dynamicperiodictask
│ │ │ │ └── dynamic_periodic_task.go
│ │ │ ├── mqtask
│ │ │ │ ├── mqtask.go
│ │ │ │ └── register.go                                         # register task worker here
│ │ │ └── scheduletask
│ │ │ ├── register.go                                           # Register static scheduled tasks here
│ │ │ └── scheduletask.go
│ │ └── types
│ │ ├── pattern
│ │ │ └── pattern.go                                            # Add task identification pattern here to distinguish and locate tasks
│ │ ├── payload
│ │ │ └── payload.go                                            # Add static task data here
│ │ └── periodicconfig
│ │ └── provider.go
│ ├── server
│ │ └── job_server.go
│ ├── svc
│ │ └── service_context.go
│ └── utils
│ ├── dberrorhandler
│ │ └── error_handler.go
│ └── entx
│ └── ent_tx.go
├── job
│ ├── job_grpc.pb.go
│ └── job.pb.go
├── jobclient
│ └── job.go
├── job.go
├── job.proto
├── LICENSE
├── Makefile
└── README.md

```

::: warning
The project uses asynq as the scheduled task manager by default, and only needs to use Redis
:::

### How to add tasks?

- First, you need to define the execution logic of the task in the handler, to imitate hello world, you must implement the `ProcessTask` method
- Register tasks with `mqtask`
- Add tasks in the background, the pattern must be consistent with the `pattern` in mqtask or the beginning, the system will automatically find the closest task
- You can see the effect after adding

::: warning
If you need a static scheduled task, just declare it in the configuration file

`job.yaml`

```go
TaskConf:
   EnableScheduledTask: true # Whether to enable static scheduled tasks
   EnableDPTask: true # Whether to enable dynamic scheduled tasks
```

### Timing cron expression

Timing tasks support common Cron expressions

::: info default format

> `* * * * *`
> Indicates that it will be executed every second

| Field            | Range                    |
| ---------------- | ------------------------ |
| Minute           | 0-59                     |
| Hour             | 0-23                     |
| Day of the month | 1-31                     |
| Month            | 1-12                     |
| Day of the week  | 0-6 (Sunday to Saturday) |

| Cron expression | Schedule                           |
| --------------- | ---------------------------------- |
| \* \* \* \* \*  | Every minute                       |
| 0 \* \* \* \*   | Every hour                         |
| 0 0 \* \* \*    | Every day at 12:00 AM              |
| 0 0 \* \* FRI   | At 12:00 AM, only on Friday        |
| 0 0 1 \* \*     | At 12:00 AM, on day 1 of the month |

:::

::: info every

> `@every` such as `@every 5s` means to execute every 5 seconds

```text
s for seconds
m for minutes
h for hours
d for days
```

:::

### How to enable job in core

JobRpc `enable` set to true

```yaml
Name: core.api
Host: 0.0.0.0
Port: 9100
Timeout: 30000

Auth:
  AccessSecret: jS6VKDtsJf3z1n2VKDtsJf3z1n2
  AccessExpire: 259200 # Seconds

Log:
  ServiceName: coreApiLogger
  Mode: file
  Path: /home/ryan/logs/core/api
  Level: info
  Compress: false
  KeepDays: 7
  StackCoolDownMillis: 100

RedisConf:
  Host: localhost:6379 # change to your own ip or address
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

### Preview

![Management Page](/assets/cron_en.png)

![Console Log](/assets/cron_console.png)
