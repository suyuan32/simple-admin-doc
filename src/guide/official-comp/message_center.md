---
order: 4
title: "Message Center Module"
---

## Message Center

Responsible for email sending, SMS sending, announcements, and internal IM.

### Download Code

```shell
git clone https://github.com/suyuan32/simple-admin-message-center.git
```

### Configuration File

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

EmailConf:
  AuthType: plain # support plain, CRAMMD5
  EmailAddr: xxx@xxx.com # the email address to send from
  Password: xxx # password
  Port: 25 # port, default is 25
  HostName: smtp.xxxx.com # server address
  TLS: true # whether to enable TLS

SmsConf:
  SecretId: xxxx
  SecretKey: xxx
  Provider: tencent # provider, currently supports Tencent
  Region: ap-nanjing # server region to send the message from
```

### Examples

> QQ Email

```yaml
EmailConf:
  AuthType: plain
  EmailAddr: xx@qq.com
  Password: xxx # note it's the authorization code
  Port: 465
  HostName: smtp.qq.com
  TLS: true
```

> Tencent Cloud SMS

```yaml
SmsConf:
  SecretId: xxx
  SecretKey: xxx
  Provider: tencent
  Region: ap-nanjing
```
