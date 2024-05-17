---
order: 7
title: "Simple Admin 配置合集"
---

## 数据库配置 

| 参数名称     | 必须 | 默认值       | 参数介绍                                                                       |
| ------------ | ---- | ------------ | ------------------------------------------------------------------------------ |
| Type         | 是   | mysql        | 支持 `mysql, postgres, sqlite3 `                                               |
| Host         | 是   |              | 数据库地址， 如  `localhost`, `127.0.0.1 `                                     |
| Port         | 是   |              | 数据库端口，如 `3306`                                                          |
| Username     | 是   | root         | 数据库用户名                                                                   |
| Password     | 否   |              | 数据库密码                                                                     |
| DBName       | 是   | simple_admin | 数据库名称                                                                     |
| SSLMode      | 否   |              | 是否在 `postgresql` 中使用 `SSL`, `disable` 或 `require`                       |
| DBPath       | 否   |              | Sqlite 数据库文件存放位置，使用 sqlite3时必须设置, 例如 `/home/data/sqlite.db` |
| MysqlConfig  | 否   |              | Mysql的额外配置, 如 `&charset=utf8&loc=Asia%2fShanghai`                        |
| PGConfig     | 否   |              | PostgreSQL 的额外配置                                                          |
| SqliteConfig | 否   |              | Sqlite 的额外配置                                                              |
| CacheTime    | 否   | 10           | 缓存时间（秒）                                                                 |
| MaxOpenConn  | 否   | 100          | 最大同时连接数量                                                               |

> 例子

```yaml
DatabaseConf:
  Type: postgres
  Host: localhost
  Port: 5432
  DBName: simple_admin
  Username: postgres
  Password: 'simple-admin.'
  MaxOpenConn: 100
  SSLMode: disable # disable or require
  CacheTime: 5
```

## 跨域配置 

| 参数名称 | 必须 | 默认值 | 参数介绍                                           |
| -------- | ---- | ------ | -------------------------------------------------- |
| Address  | 否   | *      | 若为 * 则允许任意域名跨域，否则添加自己的域名或 IP |

> 例子

```yaml
CROSConf:
  Address: '*'
```

## Casbin 配置

| 参数名称  | 必须 | 默认值 | 参数介绍      |
| --------- | ---- | ------ | ------------- |
| ModelText | 否   | ...    | Casbin 的规则 |


```yaml
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
```

## I18n 配置

> 仅用于 i18n 需要读取外部目录时 

| 参数名称         | 必须 | 默认值 | 参数介绍           |
| ---------------- | ---- | ------ | ------------------ |
| Dir              | 否   |        | 外部 i18n 文件目录 |
| BundleFilePaths  | 否   |        | 外部 i18n 文件路径 |
| SupportLanguages | 否   |        | 支持的语言列表     |

> 例子

```yaml
I18nConf:
  Dir: "D:/projects/simpleadmin/feature-workspace/simple-admin-core/api/internal/i18n/"
  BundleFilePaths:
    - "locale/ja.json"
  SupportLanguages:
    - "ja"
```

## Auth 鉴权配置

| 参数名称     | 必须 | 默认值 | 参数介绍     |
| ------------ | ---- | ------ | ------------ |
| AccessSecret | 是   |        | JWT 加密密钥 |
| AccessExpire | 是   |        | JWT 过期时间 |

> 例子

```yaml
Auth:
  AccessSecret: jS6VKDtsJf3z1n2VKDtsJf3z1n2 # JWT的加密密钥，各个API应保持一致才能解析
  AccessExpire: 259200 # 秒，过期时间
```

## 原生 Redis 配置

```go
  config.RedisConf
```

| 参数名称 | 必须 | 默认值 | 参数介绍                               |
| -------- | ---- | ------ | -------------------------------------- |
| Host     | 是   |        | Redis 服务器地址，若是集群支持逗号分隔 |
| Db       | 是   | 0      | Redis 数据库 ID                        |
| Username | 否   |        | Redis 用户名                           |
| Pass     | 否   |        | Redis 密码                             |
| Tls      | 否   |        | 是否启用  tls 加密                     |

## Core Project 配置

| 参数名称                | 必须 | 默认值 | 参数介绍                                                  |
| ----------------------- | ---- | ------ | --------------------------------------------------------- |
| DefaultRole             | 是   | 1      | 注册用户默认的角色ID                                      |
| DefaultDepartment       | 是   | 1      | 注册用户默认的部门 ID                                     |
| DefaultPosition         | 是   | 1      | 注册用户默认的职位 ID                                     |
| EmailCaptchaExpiredTime | 否   | 600    | 默认电子邮件验证码超时时间                                |
| SmsTemplateId           | 否   |        | 默认短信模板ID                                            |
| SmsAppId                | 否   |        | 默认短信 APP ID                                           |
| SmsSignName             | 否   |        | 默认短信签名                                              |
| SmsParamsType           | 否   |        | 默认短信参数类型，支持 json 和 array                      |
| RegisterVerify          | 是   |        | 注册验证方式，支持 captcha, email, sms, sms_or_email      |
| LoginVerify             | 是   |        | 登录验证方式，支持 captcha, email, sms, sms_or_email, all |
| ResetVerify             | 是   |        | 重置验证方式，支持  email, sms, sms_or_email              |
| AllowInit               | 是   | true   | 是否允许初始化数据库                                      |

> 例子

```yaml 
ProjectConf:
  DefaultRoleId: 2
  DefaultDepartmentId: 3
  DefaultPositionId: 1
  EmailCaptchaExpiredTime: 600
  SmsTemplateId: 'xxx'
  SmsAppId: 'xxx'
  SmsSignName: 'xxx'
  SmsParamsType: json
  RegisterVerify: sms
  LoginVerify: captcha
  ResetVerify: email
  AllowInit: true
```

::: info 
Go Zero 配置合集可以关注公众号查看文章
:::

