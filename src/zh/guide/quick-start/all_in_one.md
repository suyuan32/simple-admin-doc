---
order: 3
title: '快速体验docker-compose'
---


# 一键体验 docker-compose

在 deploy/docker-compose/all_in_one 文件夹下

> 只需三步

1. 启动 docker-compose

```shell
docker-compose up -d
```

2. 初始化数据库

> <http://localhost/init>

3. 重启 core-api, core-rpc 容器

> 该文件夹下有 api 和 rpc 的 etc 配置文件参考

#### 部署自己的服务到docker只需修改为自己的镜像即可
