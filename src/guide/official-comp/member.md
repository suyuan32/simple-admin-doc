---
order: 2
title: "Member Service"
---

### Introduction

Simple Admin's API service for membership service implements features such as membership management, member login, third-party login, and login via phone number or email registration. It also supports login via WeChat Mini Program.

### Get code

```shell
# get api code
git clone https://github.com/suyuan32/simple-admin-member-api.git

# get rpc code
git clone https://github.com/suyuan32/simple-admin-member-rpc.git
```

### Modify configuration file

The config file is similar with core service's.
::: warning
You should check the CoreRpc config in rpc service and the MmsConf in api service.
:::

::: info

- Make sure AccessSecret is the same as simple-admin-core's api set
- The configuration is similar as core
- Run code the same as core
- Init database in <http://localhost:3100/init>
- Add API interface permissions on the role page, then restart the API service of member. You do not need to restart service after v1.0.14.
  :::

### K8s Deployment

> It is similar with core api.

You should do these step:

- deploy the images via docker
- modify simple-admin-backend-ui/deploy/default.conf, uncomment the mms-api rule
- update ingress configmap
- update ingress controller

### Configuration file

```yaml
Name: mms.api
Host: 0.0.0.0
Port: 9104
Timeout: 30000

Auth:
  AccessSecret: jS6VKDtsJf3z1n2VKDtsJf3z1n2 # the same as core
  AccessExpire: 259200

CROSConf:
  Address: "*"

Log:
  ServiceName: mmsApiLogger
  Mode: file
  Path: /home/data/logs/mms/api
  Level: info
  Compress: false
  KeepDays: 7
  StackCoolDownMillis: 100

Prometheus:
  Host: 0.0.0.0
  Port: 4000
  Path: /metrics

DatabaseConf:
  Type: postgres
  Host: 10.5.0.2
  Port: 5432
  DBName: simple_admin
  Username: postgres # set your username
  Password: simple-admin. # set your password
  MaxOpenConn: 100
  SSLMode: disable
  CacheTime: 5

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

ProjectConf:
  UseCaptcha: false # Whether to use captcha，if false, you do not need to add  `captcha, captchaId` in request
  DefaultRankID: 1 # The default rank ID when register
  EmailCaptchaExpiredTime: 600 # The expired time for email captcha
  SmsTemplateId: xxx # The template id for sms
  SmsAppId: xxx # The app id for sms
  SmsSignName: xxx # The signature name of sms
  RegisterVerify: captcha # register captcha type, support captcha, email, sms, sms_or_email
  LoginVerify: captcha # login captcha type, support captcha, email, sms, sms_or_email, all
  ResetVerify: email # reset captcha type, support email, sms, sms_or_email

MmsRpc:
  Target: k8s://default/mms-rpc-svc:9103
  Enabled: true

CoreRpc:
  Target: k8s://default/core-rpc-svc:9101
  Enabled: true

McmsRpc:
  Target: k8s://default/mcms-rpc-svc:9106
  Enabled: false
  Timeout: 5000
```
