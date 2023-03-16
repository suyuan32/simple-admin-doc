---
order: 3
title: 'Preview with docker-compose'
---

# Quick start with docker-compose

In `deploy/docker-compose/all_in_one` directory

## 3 Steps

### Run docker-compose

```shell
docker-compose up -d
```

### Initialize database

> <http://localhost/init>

### Restart core-api, core-rpc container

::: info 
In `deploy/docker-compose/all_in_one` folder, you can check the  api and rpc configuration
:::

::: warning
To deploy your own service to docker, you only need to modify it to your own image
:::