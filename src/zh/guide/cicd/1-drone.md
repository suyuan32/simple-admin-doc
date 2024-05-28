---
order: 1
title: "Drone CI"
head:
  - - meta
    - name: keywords
      content: drone ci, ci/cd, simple admin ci/cd, 持续集成
---

## Drone CI 文件生成

::: info
[视频教程](https://www.bilibili.com/video/BV1ZN411b7sp)

<BiliBili bvid="BV1ZN411b7sp" />
:::

## 创建 Drone CI 文件

> 创建 .drone.yaml 与 Dockerfile 文件

```shell
goctls cicd drone -d="core" -g="gitee.com" -s="core" -x="rpc" -b="master" -r="registry.cn-beijing.aliyuncs.com" -o="registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker:v1.1.0" -e="core"
```

::: warning
repo 参数
latest 则为：-o="registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker"
非 latest 则为：-o="registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker:v1.1.0"
:::

### `cicd drone` 参数介绍

| 参数         | 必须 | 默认值       | 介绍                                     | 使用方法                                                                           |
| ------------ | ---- | ------------ | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| drone_name   | 否   | drone\-greet | Drone 名称                               | 为 drone 自定义一个名称                                                            |
| go_private   | 是   | gitee.com    | go 私有仓库设置                          | 例如： gitee.com \| github.com                                                     |
| service_name | 是   | 无           | go-zero 服务主程序入口文件               | 例如: core.go, 必须省略后缀 .go                                                    |
| service_type | 否   | happy        | go-zero 服务类型                         | 例如： rpc \| api                                                                  |
| git_branch   | 否   | main         | git 仓库分支                             | 需要到根据自己的 git 分支决定                                                      |
| registry     | 是   | 无           | 远程镜像仓库地址                         | 例如阿里云镜像地址: registry.cn-beijing.aliyuncs.com                               |
| repo         | 是   | 无           | 远程镜像仓库地址                         | 如果 tag 不是 'latest' 需要指定，例如: git-repo:v0.0.1, 如果是 'latest' 则需要忽略 |
| etc_yaml     | 是   | 无           | drone 在 CI 过程中使用的 Dockerfile 配置 | go-zero 项目中 etc 文件夹下的 yaml 配置文件名                                      |

**详细参数请在命令行查看 `goctls cicd drone -h`**

```shell
$ goctls cicd drone -h
Generate Drone yaml and Dockerfile

Usage:
  goctls cicd drone [flags]

Flags:
  -d, --drone_name string     The Drone name
  -e, --etc_yaml string       The Dockerfile with drone used, go-zero project etc yaml file name (required)
  -b, --git_branch string     The branch of the remote repo, default "main"  (default "master")
  -g, --go_private string     Go private such as: gitee.com|github.com, default "gitee.com" (required) (default "gitee.com")
  -h, --help                  help for drone
  -r, --registry string       The remote Docker Registry, if aliyun ACR such as: registry.cn-beijing.aliyuncs.com (required)
  -o, --repo string           The remote Git Repository, if tag is not 'latest' please assign tag such as: git-repo:v0.0.1, if tag is latest you can ignore the tag (required)
  -s, --service_name string   The service name of the main project go file, such as: core.go, you must ignore suffix: .go  (required)
  -x, --service_type string   The service type such as: rpc|api, default "happy"
```

> 你可以看到以下结构 <br>
> 注意：mac 环境下生成的.drone.yml 默认为隐藏文件，需要指令`Command + Shift + . `才可见

<img width="298" alt="image" src="https://github.com/suyuan32/simple-admin-doc/assets/5540291/ff0ee451-bccd-4783-a92c-2a59f1a834a7">

### 文件结构

```text
├── example                           go-zero项目
├── .drone.yml                        配置文件目录
└── Dockerfile                        Dockerfile配置文件
```

> .drone.yml <br>
> yml 文件中 docker_username 和 docker_password 是 drone 中配置的拉取私有镜像的仓库的账户和密码

```yaml
kind: pipeline
type: docker
name: core-rpc
steps:
  - name: build-go
    image: golang:1.20.3
    depends_on: [clone]
    volumes:
      - name: go_cache
        path: /go/pkg/mod
    commands:
      - go env -w CGO_ENABLED=0
      - go env -w GOPROXY=https://goproxy.cn,direct
      - go env -w GOPRIVATE=gitee.com
      - go mod tidy && go build -trimpath -ldflags "-s -w" -o app core.go

  - name: build-rpc
    image: plugins/docker:20
    environment:
      DRONE_REPO_BRANCH: master
    depends_on: [build-go]
    settings:
      dockerfile: Dockerfile
      registry: registry.cn-beijing.aliyuncs.com
      repo: registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker:v1.1.0
      auto_tag: true
      insecure: true
      username:
        from_secret: docker_username
      password:
        from_secret: docker_password
trigger:
  ref:
    - refs/tags/*
    - refs/heads/master

volumes:
  - name: go_cache
    host:
      path: /root/.go/cache
```

> Dockerfile

```plain
FROM alpine

RUN apk update && apk add tzdata
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

COPY ./app /app/
COPY ./etc/core.yaml /app/etc/core.yaml
workdir /app/
ENTRYPOINT ["./app"]
```
