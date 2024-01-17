---
order: 1
title: "Docker Deploy"
---

## Quick start with docker-compose

In `deploy/docker-compose/all_in_one` directory, [Github](https://github.com/suyuan32/simple-admin-core/tree/master/deploy/docker-compose/all_in_one)

There are mysql and postgres folders, choose a folder to open according to your needs.

## 3 Steps

### 1. Run docker-compose

```shell
docker-compose up -d
```

### 2. Initialize database

> <http://localhost/init>

### 3. Restart API container

::: warning
You should restart core-api container after initalization in order to refresh casbin cache. You do not need to restart service after v1.0.14.
:::

::: info
In `deploy/docker-compose/all_in_one` folder, you can check the api and rpc configuration
:::

::: warning
To deploy your own service to docker, you only need to modify it to your own image
:::
