---
order: 4
title: "Dockerfile"
---

## Dockerfile 生成

```shell
goctls docker -s core -t rpc -c
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

> 运行 `goctls docker -h` 查看更多

```shell

生成 Dockerfile

用法：
  goctl docker [选项]

选项：
  -u, --author string         作者信息 (默认为 "example@example.com")
  -a, --base string           运行项目的基础镜像 (默认为 "alpine:latest")
  -b, --branch string         远程仓库的分支，需要与 --remote 一起使用
  -c, --china                 如果你的服务器在中国，请设置为 true
  -h, --help                  显示帮助信息
  -m, --home string           模板的 goctl home 路径，不能与 --remote 同时设置，如果同时设置，则以 --remote 为准
  -i, --image string          用于构建项目的镜像 (默认为 "golang:1.20.3-alpine3.17")
  -p, --port int              暴露的端口号，默认为不暴露
  -r, --remote string         模板的远程 git 仓库，不能与 --home 同时设置，如果同时设置，则以 --remote 为准
                              git 仓库目录结构必须与 https://github.com/zeromicro/go-zero-template 一致
  -s, --service_name string   项目的服务名称
  -t, --service_type string   服务类型，如 rpc，api (默认为 "rpc")
  -z, --tz string             容器的时区，如 Asia/Shanghai。
```
