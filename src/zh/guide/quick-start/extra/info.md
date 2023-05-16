---
order: 6
title: "查看信息命令"
---

## 查看信息命令

```shell
goctls info env
```

> 帮助信息

```shell
查看额外信息，如环境变量和项目端口使用情况

Usage:
  goctl info [command]

Available Commands:
  env         查看环境变量
  port        查看端口使用情况

Flags:
  -h, --help   help for info


Use "goctl info [command] --help" for more information about a command.
```

## 环境变量

::: info
Simple Admin Tool 目前已提供多种环境变量方便在本地调试时快速配置 docker 环境而不需要修改配置文件
:::

```shell
SIMPLE_ADMIN_TOOLS_LANG=zh goctls info env
```

```shell
Simple Admin的环境变量
注意： 环境变量的优先级大于配置文件
TOOLS
+-------------------------+--------------------------------------------------------+
| 环境变量名称            | 环境变量介绍                                           |
+-------------------------+--------------------------------------------------------+
| SIMPLE_ADMIN_TOOLS_LANG | 控制台中goctls的帮助信息语言类型，支持zh和en，默认为en |
+-------------------------+--------------------------------------------------------+
JWT
+--------------+--------------+
| 环境变量名称 | 环境变量介绍 |
+--------------+--------------+
| AUTH_SECRET  | JWT加密密钥  |
| AUTH_EXPIRE  | JWT过期时间  |
+--------------+--------------+
API
+--------------+-------------------+
| 环境变量名称 | 环境变量介绍      |
+--------------+-------------------+
| API_HOST     | API服务的主机地址 |
| API_PORT     | API 服务端口      |
| API_TIMEOUT  | API 服务超时时间  |
+--------------+-------------------+
RPC
+---------------+-------------------------------------------+
| 环境变量名称  | 环境变量介绍                              |
+---------------+-------------------------------------------+
| RPC_LISTEN_ON | RPC服务的主机和端口地址，如localhost:8080 |
| RPC_TIMEOUT   | RPC 服务的超时设置                        |
+---------------+-------------------------------------------+
LOG
+------------------+--------------------------------------+
| 环境变量名称     | 环境变量介绍                         |
+------------------+--------------------------------------+
| LOG_SERVICE_NAME | 日志中的服务名称                     |
| LOG_MODE         | 日志模式, 如 file, console 和 volume |
| LOG_ENCODING     | 日志编码如 json、plain               |
| LOG_PATH         | 日志存放路径，当 mode 为 file 时启用 |
| LOG_LEVEL        | 日志级别如 info, error               |
+------------------+--------------------------------------+
DATABASE (Ent)
+------------------------+------------------------------------------+
| 环境变量名称           | 环境变量介绍                             |
+------------------------+------------------------------------------+
| DATABASE_HOST          | 数据库的主机地址                         |
| DATABASE_PORT          | 数据库端口                               |
| DATABASE_USERNAME      | 数据库的用户名                           |
| DATABASE_PASSWORD      | 数据库密码                               |
| DATABASE_DBNAME        | 数据库名称                               |
| DATABASE_SSL_MODE      | 数据库的ssl模式                          |
| DATABASE_TYPE          | 数据库类型，支持mysql、postgres和sqlite3 |
| DATABASE_MAX_OPEN_CONN | 数据库的最大打开连接数                   |
| DATABASE_CACHE_TIME    | 数据库的缓存时间                         |
| DATABASE_DBPATH        | sqlite3 的数据库存放路径                 |
| DATABASE_MYSQL_CONFIG  | 数据库对 mysql 的额外配置                |
| DATABASE_PG_CONFIG     | 数据库对 postgresql 的额外配置           |
| DATABASE_SQLITE_CONFIG | 数据库对 sqlite3 的额外配置              |
+------------------------+------------------------------------------+
CAPTCHA
+--------------------+---------------------------+
| 环境变量名称       | 环境变量介绍              |
+--------------------+---------------------------+
| CAPTCHA_KEY_LONG   | 验证码长度                |
| CAPTCHA_IMG_WIDTH  | 验证码宽度                |
| CAPTCHA_IMG_HEIGHT | 验证码高度                |
| CAPTCHA_DRIVER     | 验证码类型如 math, string |
+--------------------+---------------------------+
```

## 端口占用

```shell
SIMPLE_ADMIN_TOOLS_LANG=zh goctls info port
```

```shell
Simple Admin的端口使用情况
PORT
+------+------------+
| 端口 | 服务       |
+------+------------+
| 9100 | core_api   |
| 9101 | core_rpc   |
| 9102 | file_api   |
| 9103 | member_api |
| 9104 | member_rpc |
| 9105 | job_rpc    |
+------+------------+

```
