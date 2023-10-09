---
order: 1
title: "文件上传模块"
---

###  介绍

Simple Admin 的文件上传管理服务. 支持本地上传， 支持任意 S3 协议云上传， 包括 阿里云， 腾讯云，七牛云， 天翼云, aws等。

### 下载代码

```shell
git clone https://github.com/suyuan32/simple-admin-file.git
```

### 修改配置文件 etc/file.yaml

#### value

```yaml
Name: file_manager_0
Host: 0.0.0.0
Port: 9102
MaxBytes: 1073741824 # 所有类型的最大容量 : 1 gb
Timeout: 30000 # 超时时间

Auth:
  AccessSecret: jS6VKDtsJf3z1n2VKDtsJf3z1n2
  AccessExpire: 259200 # Seconds

Log:
  ServiceName: fileManagerLogger
  Mode: file
  Path: /home/ryan/logs/file/api
  Level: info
  Compress: false
  KeepDays: 7
  StackCoolDownMillis: 100

RedisConf:
  Host: 127.0.0.1:6379
  Type: node

# File Manager 服务的数据库
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

# Casbin 数据库，需要 Core鉴权的话和 Core 保持一致
CasbinDatabaseConf:
  Type: mysql
  Host: 127.0.0.1
  Port: 3306
  DBName: simple_admin
  Username: # set your username
  Password: # set your password
  MaxOpenConn: 100
  SSLMode: disable
  CacheTime: 5

UploadConf:
  MaxImageSize: 33554432 # 32 mb 最大图片大小
  MaxVideoSize: 1073741824 # 1gb 最大视频大小
  MaxAudioSize: 33554432 # 32mb 最大音频大小
  MaxOtherSize: 10485760 # 10 mb 最大其他类型大小
  PrivateStorePath: /home/ryan/www/private # private 私有文件路径
  PublicStorePath: /home/ryan/www/public # public path for every one access e.g. nginx path 公开文件路径
  ServerURL: "http://192.168.50.204:81" # 本地服务器地址
  DeleteFileWithCloud: true # 是否当删除本地数据库数据时删除云文件

CoreRpc:
  Target: k8s://default/core-rpc-svc:9101 # core rpc address, use endpoint in local | core 服务RPC地址，本地测试使用直连
```

::: info

- 你可以使用 nginx 将 PublicStorePath 转发为静态地址方便前端调用

- 确保 AccessSecret 和 simple-admin-core 的 api 配置文件内一致
- 配置方式参考 core
- 运行方式同理
- 初始化数据库 <http://localhost:3100/init>
- 在角色页面添加 API 接口权限，然后重启 file 的 API，v1.0.14 之后无需重启
  :::

### K8s 部署

> 和 core api 相似

你应该做如下工作:

- 通过 fileapi.yaml 部署服务
- 修改 simple-admin-backend-ui/deploy/default.conf ，解开 file-manager 注释
- 更新 ingress configmap
- 更新 ingress controller
