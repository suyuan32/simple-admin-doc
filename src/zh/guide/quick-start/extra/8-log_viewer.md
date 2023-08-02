---
order: 8
title: "本地日志查看器"
---

## 本地日志查看命令

本地日志查看命令用于格式化查看本地日志，使得日志更易查看。

```shell
$ goctls extra view_log -h
格式化查看 log 信息

Usage:
  goctls extra view_log [flags]

Flags:
  -h, --help                       help for view_log
  -l, --list                       显示所有 workspace 配置
  -t, --log_type string            日志类型，需配合 workspace 使用，支持 error，stat，access，severe，slow
  -p, --path string                log 文件路径，若配置文件路径，将会直接读取对应文件
  -r, --reset_workspace            清空工作区配置
  -s, --size int                   显示的消息数量，默认为10条，倒序显示 (default 10)
  -w, --workspace string           已保存的工作区名称
  -k, --workspace_setting string   配置工作区数据，配置后可保存并通过名称读取工作区目录，需配合 log_type 参数使用 ， 格式为 "名称,目录"
```

## 使用方法

> 首先配置 workspace

```shell
goctls extra view_log -k core,D:/home/data/logs/mcms/rpc
```

::: warning
例子中 core 为自定义名称，用于区分查找， 中间的逗号必须为英文逗号，后面跟上路径，路径内必须含有 log 文件如 error.log 等，配置将会保存，可以同时存储多个 workspace , 通过 name 区分即可。
:::

> 然后就可以通过命令直接访问 log 了

```shell
goctls extra view_log -w core -t error -s 2
```

> 效果

```shell
$ goctls extra view_log -w core -t error -s 2
{
    "@timestamp": "2023-07-06T11:20:06.191+08:00",
    "caller": "dberrorhandler/error_handler.go:24",
    "content": "ent: missing required field \"EmailLog.subject\"",
    "detail": "target:\"xxx@qq.com\"  subject:\"测试一下\"  content:\"这个是测试邮件\"",
    "level": "error",
    "span": "653212ac1b76e41f",
    "trace": "26c5ce4b81ae408595a77175dee10783"
}
{
    "@timestamp": "2023-07-06T11:11:07.036+08:00",
    "caller": "base/init_database_logic.go:33",
    "content": "database error",
    "detail": "sql/schema: modify \"mcms_email_log\" table: pq: column \"subject\" of relation \"mcms_email_log\" contains null values",
    "level": "error"
}
```

> 格式化前

```text
{"@timestamp":"2023-07-06T11:11:07.036+08:00","caller":"base/init_database_logic.go:33","content":"database error","detail":"sql/schema: modify \"mcms_email_log\" table: pq: column \"subject\" of relation \"mcms_email_log\" contains null values","level":"error"}
{"@timestamp":"2023-07-06T11:20:06.191+08:00","caller":"dberrorhandler/error_handler.go:24","content":"ent: missing required field \"EmailLog.subject\"","detail":"target:\"1693196733@qq.com\"  subject:\"测试一下\"  content:\"这个是测试邮件\"","level":"error","span":"653212ac1b76e41f","trace":"26c5ce4b81ae408595a77175dee10783"}
```
