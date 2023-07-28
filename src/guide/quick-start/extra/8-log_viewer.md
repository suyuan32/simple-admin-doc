---
order: 8
title: "Local Log Viewer"
---

## The command for viewing local log with formatting

The local log view command is used to format and view local logs, making the logs easier to view.

```shell
$ goctls extra view_log -h
Format and view log information

Usage:
  goctls extra view_log [flags]

Flags:
  -h, --help                       help for view_log
  -l, --list                       Show all workspace configurations
  -t, --log_type string            Log Type. Use with "workspace" param. Support error, stat, access, severe, slow
  -p, --path string                Log file path. If a configuration file path is provided, the corresponding file will be read directly
  -r, --reset_workspace            Clear workspace configurations
  -s, --size int                   Number of messages to display. The default is 10, displayed in reverse order (default 10)
  -w, --workspace string           Saved workspace names
  -k, --workspace_setting string   Configure workspace data. After configuration, the workspace directory can be saved and read by name, and must be used with the log_type parameter. The format is "name,directory"
```

## Usage

> Firstly, configure `workspace`

```shell
goctls extra view_log -k core,D:/home/data/logs/mcms/rpc
```

::: warning
In the example, "core" is a custom name used for differentiation in search. The comma in the middle must be an English comma, followed by a path that must contain log files such as error.log. The configuration will be saved, and multiple workspaces can be stored simultaneously, distinguished by name.
:::

> And then you can access the log by command below:

```shell
goctls extra view_log -w core -t error -s 2
```

> Result

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
