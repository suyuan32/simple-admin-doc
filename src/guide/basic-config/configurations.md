---
order: 7
title: "Simple Admin 配置合集"
---

## Database Configuration

| Parameter Name | Required | Default Value | Parameter Description                                                                                    |
| -------------- | -------- | ------------- | -------------------------------------------------------------------------------------------------------- |
| Type           | No       | mysql         | Supported types: `mysql, postgres, sqlite3`                                                              |
| Host           | Yes      |               | Database address, such as `localhost`, `127.0.0.1`                                                       |
| Port           | Yes      |               | Database port, such as `3306`                                                                            |
| Username       | No       | root          | Database username                                                                                        |
| Password       | No       |               | Database password                                                                                        |
| DBName         | No       | simple_admin  | Database name                                                                                            |
| SSLMode        | No       |               | Whether to use SSL in `postgresql`, options: `disable` or `require`                                      |
| DBPath         | No       |               | Location to store the Sqlite database file, must be set when using sqlite3, e.g., `/home/data/sqlite.db` |
| MysqlConfig    | No       |               | Additional configuration for MySQL, such as `&charset=utf8&loc=Asia%2fShanghai`                          |
| PGConfig       | No       |               | Additional configuration for PostgreSQL                                                                  |
| SqliteConfig   | No       |               | Additional configuration for Sqlite                                                                      |
| CacheTime      | No       | 10            | Cache time (in seconds)                                                                                  |
| MaxOpenConn    | No       | 100           | Maximum number of simultaneous connections                                                               |

> Example

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

## Cross-Origin Configuration

| Parameter Name | Required | Default Value | Parameter Description                                                                                |
| -------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| Address        | No       | *             | If set to *, allows cross-origin requests from any domain. Otherwise, specify your own domain or IP. |

> Example

```yaml
CROSConf:
  Address: '*'
```

## Casbin Configuration

| Parameter Name | Required | Default Value | Parameter Description |
| -------------- | -------- | ------------- | --------------------- |
| ModelText      | No       | ...           | Casbin rules          |

> Example

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

## I18n Configuration

> Only used when i18n needs to read from an external directory.

| Parameter Name | Required | Default Value | Parameter Description        |
| -------------- | -------- | ------------- | ---------------------------- |
| Dir            | No       | ...           | External i18n file directory |

> Example

```yaml
I18nConf:
  Dir: '/home/data/i18n/locale'
```

## Auth Authentication Configuration

| Parameter Name | Required | Default Value | Parameter Description |
| -------------- | -------- | ------------- | --------------------- |
| AccessSecret   | Yes      |               | JWT encryption key    |
| AccessExpire   | Yes      |               | JWT expiration time   |

> Example

```yaml
Auth:
  AccessSecret: jS6VKDtsJf3z1n2VKDtsJf3z1n2 # Consistent encryption key for JWT across all APIs for successful decoding
  AccessExpire: 259200 # Seconds, expiration time
```

::: info 
Go Zero 配置合集可以关注公众号查看文章
:::