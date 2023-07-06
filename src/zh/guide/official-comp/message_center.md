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

EmailConf:
  AuthType: plain # 支持 plain, CRAMMD5
  EmailAddr: xxx@xxx.com # 发送的邮箱地址
  Password: xxx # 密码
  Port: 25 # 端口， 默认是 25
  HostName: smtp.xxxx.com # 服务器地址
  TLS: true # 是否启用 tls

SmsConf:
  SecretId: xxxx
  SecretKey: xxx
  Provider: tencent # 提供商，目前支持tencent
  Region: ap-nanjing # 发消息的服务器区域
```

### 例子

> QQ 邮箱

```yaml
EmailConf:
  AuthType: plain
  EmailAddr: xx@qq.com
  Password: xxx # 注意是授权码
  Port: 465
  HostName: smtp.qq.com
  TLS: true
```

> 腾讯云短信

```yaml
SmsConf:
  SecretId: xxx
  SecretKey: xxx
  Provider: tencent
  Region: ap-nanjing
```
