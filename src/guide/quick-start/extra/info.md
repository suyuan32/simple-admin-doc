---
order: 6
title: "Show Info Command"
---

## Show Info Command

```shell
goctls info env
```

> Help

```shell
View additional information, such as environment variables and project port usage.

Usage:
  goctl info [command]

Available Commands:
  env         View environment variables.
  port        View port usage.

Flags:
  -h, --help   help for info


Use "goctl info [command] --help" for more information about a command.
```

## Environment Variables

::: info
Simple Admin Provides lots of environment variables to configure the service when develop locally or modify for the docker container.
:::

```shell
goctls info env
```

```shell
Simple Admin's environment variables
Notice: Environment variables have priority over configuration files
TOOLS
+-------------------------+-------------------------------------------------------------------------------------+
| KEY                     | INTRODUCTION                                                                        |
+-------------------------+-------------------------------------------------------------------------------------+
| SIMPLE_ADMIN_TOOLS_LANG | The goctls' help message language type in console, support zh and en, default is en |
+-------------------------+-------------------------------------------------------------------------------------+
JWT
+-------------+-------------------+
| KEY         | INTRODUCTION      |
+-------------+-------------------+
| AUTH_SECRET | JWT encrypted key |
| AUTH_EXPIRE | JWT expired time  |
+-------------+-------------------+
API
+-------------+--------------------------------+
| KEY         | INTRODUCTION                   |
+-------------+--------------------------------+
| API_HOST    | The API service's host address |
| API_PORT    | The API service's port         |
| API_TIMEOUT | The API service's timeout      |
+-------------+--------------------------------+
RPC
+---------------+-----------------------------------------------------------------+
| KEY           | INTRODUCTION                                                    |
+---------------+-----------------------------------------------------------------+
| RPC_LISTEN_ON | The RPC service's host and port address, such as localhost:8080 |
| RPC_TIMEOUT   | The RPC service's timeout setting                               |
+---------------+-----------------------------------------------------------------+
LOG
+------------------+-----------------------------------------------+
| KEY              | INTRODUCTION                                  |
+------------------+-----------------------------------------------+
| LOG_SERVICE_NAME | The service's name in log                     |
| LOG_MODE         | The log mode such as file, console and volume |
| LOG_ENCODING     | The log encoding such as json and plain       |
| LOG_PATH         | The log storage path, use in file mode        |
| LOG_LEVEL        | The log level such as info and error          |
+------------------+-----------------------------------------------+
DATABASE (Ent)
+------------------------+----------------------------------------------------------+
| KEY                    | INTRODUCTION                                             |
+------------------------+----------------------------------------------------------+
| DATABASE_HOST          | The database's host address                              |
| DATABASE_PORT          | The database's port                                      |
| DATABASE_USERNAME      | The database's username                                  |
| DATABASE_PASSWORD      | The database's password                                  |
| DATABASE_DBNAME        | The database's name                                      |
| DATABASE_SSL_MODE      | The database's ssl mode                                  |
| DATABASE_TYPE          | The database's type, support mysql, postgres and sqlite3 |
| DATABASE_MAX_OPEN_CONN | The database's max opened connections                    |
| DATABASE_CACHE_TIME    | The database's cache time                                |
| DATABASE_DBPATH        | The database's storage path for sqlite3                  |
| DATABASE_MYSQL_CONFIG  | The database's extra config for mysql                    |
| DATABASE_PG_CONFIG     | The database's extra config for postgresql               |
| DATABASE_SQLITE_CONFIG | The database's extra config for sqlite3                  |
+------------------------+----------------------------------------------------------+
CAPTCHA
+--------------------+------------------------------------------------------+
| KEY                | INTRODUCTION                                         |
+--------------------+------------------------------------------------------+
| CAPTCHA_KEY_LONG   | The captcha key length                               |
| CAPTCHA_IMG_WIDTH  | The width of captcha                                 |
| CAPTCHA_IMG_HEIGHT | The height of captcha                                |
| CAPTCHA_DRIVER     | The driver of captcha such as math, string and digit |
+--------------------+------------------------------------------------------+
```

> Show the supported services

```shell
goctls info env -l
```

```shell
Service
+--------------+-------------------------+
| SERVICE NAME | INTRODUCTION            |
+--------------+-------------------------+
| core         | Core Service            |
| fms          | File Management Service |
+--------------+-------------------------+
```

> Show the target service's environment variables

```shell
goctls info env -s mcms
```

```shell
Simple Admin's environment variables
Notice: Environment variables have priority over configuration files
FMS
+----------------+----------------------------------------------------------------------+
| KEY            | INTRODUCTION                                                         |
+----------------+----------------------------------------------------------------------+
| MAX_IMAGE_SIZE | Maximum size of image files                                          |
| MAX_VIDEO_SIZE | Maximum size of video files                                          |
| MAX_AUDIO_SIZE | Maximum size of audio files                                          |
| MAX_OTHER_SIZE | Maximum size of files of other types                                 |
| PRIVATE_PATH   | Local storage address for private files                              |
| PUBLIC_PATH    | Local storage address for public files                               |
| SERVER_URL     | Domain name or IP address of the server, such as http://localhost:81 |
+----------------+----------------------------------------------------------------------+
```

## Port Usage

```shell
goctls info port
```

```shell
Simple Admin's port usage
PORT
+------+------------+
| PORT | SERVICE    |
+------+------------+
| 9100 | core_api   |
| 9101 | core_rpc   |
| 9102 | file_api   |
| 9103 | member_api |
| 9104 | member_rpc |
| 9105 | job_rpc    |
+------+------------+
```
