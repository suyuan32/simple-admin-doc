---
order: 6
title: "Docker一键部署"
---

# 一键体验 docker-compose

在 deploy/docker-compose/all_in_one 文件夹下, [Github](https://github.com/suyuan32/simple-admin-core/blob/master/deploy/docker-compose/all_in_one/docker-compose.yaml)

## 只需三步

### 1. 启动 docker-compose

```shell
docker-compose up -d
```

### 2. 初始化数据库

<http://localhost/init>

### 3. 重启 API

::: warning
初始化完成后需要重启 core-api 容器，强制刷新 casbin 缓存
:::

::: info
`deploy/docker-compose/all_in_one`文件夹下有 api 和 rpc 的 etc 配置文件参考
:::

::: warning
部署自己的服务到 docker 只需修改为自己的镜像即可
:::
