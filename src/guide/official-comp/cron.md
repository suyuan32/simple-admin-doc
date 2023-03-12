---
order: 3
title: 'Timed Task Module'
---

## Timing task module

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

- First, you need to define the execution logic of the task in the handler, to imitate hello world, you must implement the ProcessTask method
- Register tasks with mqtask
- Add tasks in the background, the pattern must be consistent with the pattern in mqtask or the beginning, the system will automatically find the closest task
- You can see the effect after adding

::: warning
If you don't need a static timing task, just comment it out in main

`job.go`

```go
serviceGroup.Add(mqtask.NewMQTask(ctx))
serviceGroup.Add(dynamicperiodictask.NewDPTask(ctx))
// serviceGroup.Add(scheduletask.NewSchedulerTask(ctx))
```
:::


### Timing cron expression

Timing tasks support common Cron expressions

::: info default format
> `* * * * *`
Indicates that it will be executed every second
:::

::: info every
> `@every` such as `@every 5s` means to execute every 5 seconds
:::