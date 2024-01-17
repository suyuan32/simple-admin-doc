---
order: 1
title: "Local Development Setting"
---

> Environment Requirement

- golang 1.20 +
- **nodejs 19.8.0 +**
- **mysql 8.0.21 +** | MariaDB 10.7 + | Postgres 13 + (**Postgres 14 recommended**)
- redis 7.0 +
- [go-swagger](https://goswagger.io/install.html)
- [Goctls](/guide/basic-config/simple-admin-tools.md)

::: info
It is recommended to develop under linux, because the make command is required. We develop in Ubuntu 22.10. \
**`Windows` users are recommended to cofigure the environment via [Windows](/guide/FAQ.html#how-to-configure-the-windows-environment), you can also develop in the [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) environment.**
:::

::: info
[Backend UI Doc](https://vben.ryansu.tech/) [Video Tutorial](https://youtu.be/_RDvlaKRRTY)
:::

## Backend Setting

### Simple Admin Core

Simple Admin Core is the core service for Simple Admin. It offers user management, authorization,
menu management and API management and so on. It must be running.

::: info Default Account
username: **admin**  
password: **simple-admin**
:::

::: warning
Since v1.1.1, we recommend you to use docker to deploy local environment. [Tutorial](https://youtu.be/gpXOoJEeOHg)
:::

> Clone the core code

```bash
git clone https://github.com/suyuan32/simple-admin-core.git
```

### Local development setting

#### API Service

##### Notice: You should add core_dev.yaml for development to avoid conflicting with core.yaml in production.

> Add api/etc/core_dev.yaml

```yaml
Name: core.api
Host: 0.0.0.0 # ip can be 0.0.0.0 or 127.0.0.1, it should be 0.0.0.0 if you want to access from another host
Port: 9100
Timeout: 30000

Auth:
  AccessSecret: jS6VKDtsJf3z1n2VKDtsJf3z1n2 # JWT encrypt code
  AccessExpire: 259200 # seconds, expire duration

# Cross domain config
CROSConf:
  Address: '*'

Log:
  ServiceName: coreApiLogger
  Mode: file
  Path: /home/ryan/logs/core/api # log saving path，use filebeat to sync
  Level: info
  Compress: false
  KeepDays: 7 # Save time (Day)
  StackCoolDownMillis: 100

RedisConf:
  Host: 127.0.0.1:6379 # Change to your own redis address
  Type: node
  # Pass: xxx  # You can also set the password

# The main difference between k8s and local development
# Core service
CoreRpc:
  Endpoints:
    - 127.0.0.1:9101 # The same as Core RPC's address.
  Enabled: true # Whether to enable the service

# Scheduled Task RPC service
JobRpc:
  Endpoints:
    - 127.0.0.1:9105 # The same as Job RPC's address.
  Enabled: false # Whether to enable the service

# Message Center Module
McmsRpc:
  Endpoints:
    - 127.0.0.1:9106
  Enabled: true
  Timeout: 5000

Captcha:
  KeyLong: 5 # captcha key length
  ImgWidth: 240 # captcha image width
  ImgHeight: 80 # captcha image height
  Driver: digit # support four drivers: digit, string, math and chinese, default is digit

DatabaseConf:
  Type: mysql # support mysql, postgres, sqlite3
  Host: "127.0.0.1" # change to your own mysql address
  Port: 3306
  DBName: simple_admin # database name, you can set your own name
  Username: root # username
  Password: "123456" # password
  MaxOpenConn: 100 # the maximum number of opened connections in the  connection pool
  SSLMode: disable # in postgresql, disable or require
# DBPath: /home/data/sqlite.db # Database Path, you must set it when you use sqlite3.
# MysqlConfig: '&charset=utf8&loc=Asia/Shanghai' # Additional configuration of Mysql
# PGConfig: '' # Additional configuration for Postgresql
# SqliteConfig: '' # Additional configuration for Sqlite

# casbin rule
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

I18nConf:
  Dir: # The external path of the I18n file, if it is not empty, it will read the external, if it is empty, it will read the i18n file inside the binary file

ProjectConf:
  DefaultRole: 1 # default role id when register
  DefaultDepartment: 1 # default department id when register
  DefaultPosition: 1 # default position id when register
  EmailCaptchaExpiredTime: 600 # the expired time for email captcha
  SmsTemplateId: xxx # The template id for sms
  SmsAppId: xxx # the app id for sms
  SmsSignName: xxx # the signature name of sms
  RegisterVerify: captcha # register captcha type, support captcha, email, sms, sms_or_email
  LoginVerify: captcha # login captcha type, support captcha, email, sms, sms_or_email, all
  ResetVerify: email # reset captcha type, support email, sms, sms_or_email
  AllowInit: true # if false, ban initialization
```

::: warning

> Small website use endpoint connect directly

```yaml
CoreRpc:
  Endpoints:
    - 127.0.0.1:9101 # the same as rpc address
```

> It does not need service discovery，when you develop locally, you should also use this mode. There can be several endpoints.

:::

> Add rpc/etc/core_dev.yaml

```yaml
Name: core.rpc
ListenOn: 0.0.0.0:9101 # ip can be 0.0.0.0 or 127.0.0.1, it should be 0.0.0.0 if you want to access from another host

DatabaseConf:
  Type: mysql # support mysql, postgres, sqlite3
  Host: "127.0.0.1" # change to your own mysql address
  Port: 3306
  DBName: simple_admin # database name, you can set your own name
  Username: root # username
  Password: "123456" # password
  MaxOpenConn: 100 # the maximum number of opened connections in the  connection pool
  SSLMode: disable # in postgresql, disable or require
# DBPath: /home/data/sqlite.db # Database Path, you must set it when you use sqlite3.
# MysqlConfig: '&charset=utf8&loc=Asia/Shanghai' # Additional configuration of Mysql
# PGConfig: '' # Additional configuration for Postgresql
# SqliteConfig: '' # Additional configuration for Sqlite

# casbin rule
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

Log:
  ServiceName: coreApiLogger
  Mode: file
  Path: /home/ryan/logs/core/api # log saving path，use filebeat to sync
  Level: info
  Compress: false
  KeepDays: 7 # Save time (Day)
  StackCoolDownMillis: 100

RedisConf:
  Host: 127.0.0.1:6379 # Change to your own redis address
  Type: node
  # Pass: xxx  # You can also set the password
```

### Sync dependencies

```shell
go mod tidy
```

### Run rpc service

```bash
cd rpc

go run core.go -f etc/core_dev.yaml
```

### Run api service

```bash
cd api

go run core.go -f etc/core_dev.yaml
```

## Frontend setting

### Clone the code

```shell
git clone https://github.com/suyuan32/simple-admin-backend-ui.git
```

### Sync dependencies

```shell
pnpm install
```

::: warning
If downloading dependencies fails, please upgrade pnpm to the latest version
:::

### Run in development mode

```shell
pnpm serve
```

### Build

```shell
pnpm build
```

### Preview

```shell
# build and preview
pnpm preview

# preview existing directory
pnpm preview:dist
```

> Notice: Set the API address

> .env.development

```text
# Whether to open mock
VITE_USE_MOCK = false

# public path
VITE_PUBLIC_PATH = /

VITE_BUILD_COMPRESS = 'none'

# Delete console
VITE_DROP_CONSOLE = false

# Basic interface address SPA
VITE_GLOB_API_URL=

# File upload address， optional
VITE_GLOB_UPLOAD_URL=/fms-api/upload

# Interface prefix
VITE_GLOB_API_URL_PREFIX=
```

> Since v1.0.0, you should configure the proxy in `vite.config.ts`.

```ts
import { defineApplicationConfig } from "@vben/vite-config";

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        "echarts/core",
        "echarts/charts",
        "echarts/components",
        "echarts/renderers",
        "qrcode",
        "@iconify/iconify",
        "ant-design-vue/es/locale/zh_CN",
        "ant-design-vue/es/locale/en_US",
      ],
    },
    server: {
      proxy: {
        "/sys-api": {
          target: "http://192.168.50.204:9100",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/sys-api`), ""),
          // only https
          // secure: false
        },
        "/fms-api": {
          target: "http://192.168.50.204:9102",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/fms-api`), ""),
        },
        "/mms-api": {
          target: "http://192.168.50.204:9104",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/mms-api`), ""),
        },
      },
    },
  },
});
```

You should set your target `ip` and rewrite the prefix.

## Initialize database

::: warning
**_Important:_** You should create the database before initialization, the database name should be the same as core_dev.yaml.

**After initialization, you should restart api service. It can force refreshing casbin cache. You do not need to restart service after v1.0.14.**
:::

```shell
# visit the address
https://address:port/init

# default is
https://localhost:3100/init
```

> You can see

![pic](/assets/init_zh_cn.png)

> File manager service is optional [File Manager](/guide/official-comp/file_manager)
