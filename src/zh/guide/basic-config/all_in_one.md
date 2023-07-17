---
order: 6
title: "Docker一键部署"
---

# 一键体验 docker-compose

在 deploy/docker-compose/all_in_one 文件夹下, [Github](https://github.com/suyuan32/simple-admin-core/blob/master/deploy/docker-compose/all_in_one/docker-compose.yaml)

## 只需三步

### 1. 启动 docker-compose

::: info
由于国内获取镜像较慢，现已提供阿里云镜像服务，需要手动获取镜像

```shell
docker pull registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker:[镜像版本号]
```

同理只需要将 core-api-docker 替换为其他镜像即可获取其他镜像
:::

```shell
docker-compose up -d
```

### 2. 初始化数据库

<http://localhost/init>

### 3. 重启 API

::: warning
初始化完成后需要重启 core-api 容器，强制刷新 casbin 缓存, v1.0.14 开始不需要重启服务
:::

::: info
`deploy/docker-compose/all_in_one`文件夹下有 api 和 rpc 的 etc 配置文件参考
:::

::: warning
部署自己的服务到 docker 只需修改为自己的镜像即可
:::
