---
order: 4
title: "消息中心模块"
---

## 消息中心

主要负责邮件发送， sms 短信发送， 公告及内部 im 等

### 下载代码

```shell
git clone https://github.com/suyuan32/simple-admin-message-center.git
```

### 配置文件

```yaml
Name: mcms.rpc
ListenOn: 0.0.0.0:9106

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
  ServiceName: mcmsRpcLogger
  Mode: file
  Path: /home/data/logs/mcms/rpc
  Encoding: json
  Level: info
  Compress: false
  KeepDays: 7
  StackCoolDownMillis: 100

Prometheus:
  Host: 0.0.0.0
  Port: 4006
  Path: /metrics
```
