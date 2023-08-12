---
order: 6
title: "Docker一键部署"
---

# 一键体验 docker-compose

在 deploy/docker-compose/all_in_one 文件夹下, [Github](https://github.com/suyuan32/simple-admin-core/tree/master/deploy/docker-compose/all_in_one)

有 mysql 和 postgres 文件夹，根据需求选择一个文件夹打开。

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

## 国内 docker-compose 例子

::: info
只需把 ryanpower 替换为阿里云镜像地址即可
:::

```yaml
version: "3"

volumes:
  postgresql:
  redis:
  fms:

networks:
  simple-admin:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 10.5.0.0/16

services:
  postgresql:
    image: bitnami/postgresql:latest
    container_name: postgresql
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRESQL_DATABASE: "simple_admin"
      POSTGRESQL_PASSWORD: "simple-admin."
    volumes:
      - postgresql:/bitnami/postgresql
    networks:
      simple-admin:
        aliases:
          - postgresql-server
        ipv4_address: 10.5.0.2
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 1000M
        reservations:
          cpus: "0.05"
          memory: 200M

  redis:
    image: redis:7.0.5-alpine
    container_name: redis
    restart: always
    ports:
      - "6379:6379"
    volumes:
      - redis:/data
    networks:
      simple-admin:
        aliases:
          - redis-server
        ipv4_address: 10.5.0.3
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 500M
        reservations:
          cpus: "0.05"
          memory: 200M

  core-rpc:
    image: registry.cn-hangzhou.aliyuncs.com/simple_admin/core-rpc-docker:v1.1.0
    container_name: core-rpc
    restart: always
    #    ports:
    #      - '9101:9101'
    networks:
      simple-admin:
        aliases:
          - core-rpc
        ipv4_address: 10.5.0.4
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 500M
        reservations:
          cpus: "0.05"
          memory: 200M

  job-rpc:
    image: registry.cn-hangzhou.aliyuncs.com/simple_admin/job-rpc-docker:v1.1.0
    container_name: job-rpc
    restart: always
    #    ports:
    #      - '9105:9105'
    networks:
      simple-admin:
        aliases:
          - job-rpc
        ipv4_address: 10.5.0.7
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 500M
        reservations:
          cpus: "0.05"
          memory: 200M

  core-api:
    image: registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker:v1.1.0
    container_name: core-api
    restart: always
    environment:
      I18N_DIR: "/app/etc/"
    #      AUTH_SECRET: 'jS6VKDtsJf3z1n2VKDtsJf3z1n2'
    #    ports:
    #      - '9100:9100'
    networks:
      simple-admin:
        aliases:
          - core-api
        ipv4_address: 10.5.0.5
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 500M
        reservations:
          cpus: "0.05"
          memory: 200M

  backend-ui:
    image: registry.cn-hangzhou.aliyuncs.com/simple_admin/backend-ui-docker:v1.1.0
    container_name: backend-ui
    restart: always
    ports:
      - "80:80"
    networks:
      simple-admin:
        aliases:
          - backend-ui
        ipv4_address: 10.5.0.6
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 500M
        reservations:
          cpus: "0.05"
          memory: 200M

  fms-api:
    image: registry.cn-hangzhou.aliyuncs.com/simple_admin/fms-api-docker:v1.1.0
    container_name: fms-api
    restart: always
    #    environment:
    #      SERVER_URL: 'http://localhost:81'
    #      AUTH_SECRET: 'jS6VKDtsJf3z1n2VKDtsJf3z1n2'
    ports:
      #      - '9102:9102'
      - "81:80"
    volumes:
      - fms:/home/data
    networks:
      simple-admin:
        aliases:
          - fms-api
        ipv4_address: 10.5.0.8
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 500M
        reservations:
          cpus: "0.05"
          memory: 200M

  mcms-rpc:
    image: registry.cn-hangzhou.aliyuncs.com/simple_admin/mcms-rpc-docker:v1.1.0
    container_name: mcms-rpc
    restart: always
    #    environment:
    #      EMAIL_ADDR: xxx@gamil.com
    #    ports:
    #      - '9106:9106'
    networks:
      simple-admin:
        aliases:
          - mcms-rpc
        ipv4_address: 10.5.0.9
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 500M
        reservations:
          cpus: "0.05"
          memory: 200M
```
