---
order: 1
title: "Drone CI"
---

## Drone CI Files Generating

> goctls > 1.5.17

## Create Drone CI file

> Create .drone.yaml and Dockerfile files

```shell
goctls cicd drone -d="core" -g="gitee.com" -s="core" -x="rpc" -b="master" -r="registry.cn-beijing.aliyuncs.com" -o="registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker:v1.1.0" -e="core"
```

::: warning
repo parameter
For latest: -o="registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker"
For non-latest: -o="registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker:v1.1.0"
:::

### Introduction to `cicd drone` parameters

| Parameter    | Required | Default Value | Description                                              | Usage                                                                                                                         |
| ------------ | -------- | ------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| drone_name   | No       | drone\-greet  | Drone name                                               | Customize a name for drone                                                                                                    |
| go_private   | Yes      | gitee.com     | Go private repository settings                           | For example: gitee.com \| github.com                                                                                          |
| service_name | Yes      | None          | Go-zero service main program entry file                  | For example: core.go, the suffix .go must be omitted                                                                          |
| service_type | No       | happy         | Go-zero service type                                     | For example: rpc \| api                                                                                                       |
| git_branch   | No       | main          | Git repository branch                                    | Depending on your own git branch                                                                                              |
| registry     | Yes      | None          | Remote image repository address                          | For example, Alibaba Cloud mirror address: registry.cn-beijing.aliyuncs.com                                                   |
| repo         | Yes      | None          | Remote image repository address                          | If the tag is not 'latest', it needs to be specified, for example: git-repo:v0.0.1, if it is 'latest', it needs to be ignored |
| etc_yaml     | Yes      | None          | Dockerfile configuration used by drone in the CI process | The yaml configuration file name under the etc folder of the go-zero project                                                  |

**For detailed parameters, use `goctls cicd drone -h` in the command line**

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

> You can see the following structure <br>
> Note: The .drone.yml file generated in the Mac environment is hidden by default and requires the command `Command + Shift + .` to be visible.

<img width="298" alt="image" src="https://github.com/suyuan32/simple-admin-doc/assets/5540291/ff0ee451-bccd-4783-a92c-2a59f1a834a7">

### File Structure

```text
├── example                           go-zero project
├── .drone.yml                        configuration file directory
└── Dockerfile                        Dockerfile configuration file
```

> .drone.yml <br>
> docker_username and docker_password in the yml file are the account and password of the repository configured in drone for pulling private images.

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

```Dockefile
FROM alpine

RUN apk update && apk add tzdata
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

COPY ./app /app/
COPY ./etc/core.yaml /app/etc/core.yaml
workdir /app/
ENTRYPOINT ["./app"]
```
