---
order: 4
title: "Message Center Module"
head:
  - - meta
    - name: keywords
      content: mcms, message center management service, simple admin module
---

### Introduction

Simple Admin's message center module (MCMS) is primarily responsible for email sending, SMS message sending, announcements, and internal instant messaging (IM). It supports any SMTP email service and integrates with Alibaba Cloud, Tencent Cloud, and Heyun for SMS messaging services.

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
```
