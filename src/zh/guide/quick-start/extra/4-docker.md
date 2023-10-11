---
order: 4
title: "Dockerfile"
---

## Dockerfile 生成

```shell
goctls docker -l -u yuansu.china.work@gmail.com -c -p 9104 -s mms -t rpc -z Asia/Shanghai
```

### `docker` 参数介绍

| 参数名称     | 必须 | 默认值                   | 介绍                                                                                                                                                    |
| ------------ | ---- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| service_name | 是   |                          | 项目的服务名称, 如 core                                                                                                                                 |
| service_type | 否   | rpc                      | 服务类型，如 rpc，api                                                                                                                                   |
| auther       | 否   | example@example.com      | 作者信息                                                                                                                                                |
| base         | 否   | alpine:latest            | 运行项目的基础镜像                                                                                                                                      |
| branch       | 否   |                          | 远程仓库的分支，需要与 --remote 一起使用                                                                                                                |
| china        | 否   |                          | 如果你的服务器在中国，请设置为 true                                                                                                                     |
| home         | 否   |                          | 模板的 goctl home 路径，不能与 --remote 同时设置，如果同时设置，则以 --remote 为准                                                                      |
| image        | 否   | golang:1.20.3-alpine3.17 | 用于构建项目的镜像                                                                                                                                      |
| port         | 否   |                          | 暴露的端口号，默认为不暴露                                                                                                                              |
| remote       | 否   |                          | 模板的远程 git 仓库，不能与 --home 同时设置，如果同时设置，则以 --remote 为准 git 仓库目录结构必须与 https://github.com/zeromicro/go-zero-template 一致 |
| tz           | 否   |                          | 容器的时区，如 Asia/Shanghai                                                                                                                            |
| local_build | 否 | false | 是否在本地构建项目，不使用中间镜像 |

> 运行 `goctls docker -h` 查看更多

```shell

生成 Dockerfile

Usage:
  goctls docker [flags]

Flags:
  -u, --author string         作者信息 (default "example@example.com")
  -a, --base string           运行项目的基础镜像 (default "alpine:latest")
  -b, --branch string         远程 repo 的分支，与 --remote 一起使用
  -c, --china                 如果您的服务器在中国，请设置为 true
  -h, --help                  help for docker
  -m, --home string           模板的 goctl 路径，--home 和 --remote 不能同时设置，如果设置了，--remote 优先级更高
  -i, --image string          构建项目的镜像 (default "golang:1.20.5-alpine3.17")
  -l, --local_build           是否在本地构建项目，不使用中间镜像
  -p, --port int              暴露的端口，默认为无
  -r, --remote string         模板的远程 git repo，--home 和 --remote 不能同时设置，如果设置了，--remote 优先级更高
                              Git repo 的目录结构必须与 https://github.com/zeromicro/go-zero-template 相一致
  -s, --service_name string   项目的服务名称
  -t, --service_type string   服务类型，例如 rpc、api (default "rpc")
  -z, --tz string             容器的时区，例如 Asia/Shanghai
```

## 环境变量

| 环境变量        | 介绍                               |
| --------------- | ---------------------------------- |
| DOCKER_USERNAME | docker 仓库用户名                  |
| DOCKER_PASSWORD | docker 仓库密码                    |
| REPO            | docker 仓库地址， 官网为 docker.io |