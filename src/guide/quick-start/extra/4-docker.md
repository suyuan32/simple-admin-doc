---
order: 4
title: "Dockerfile"
---

## Generating Dockerfile

```shell
goctls docker -l -u yuansu.china.work@gmail.com -c -p 9104 -s mms -t rpc -z Asia/Shanghai
```

### Introduction to `docker` Parameters

| Parameter    | Required | Default Value              | Description                                                                                                                                                                                                                                                                |
| ------------ | -------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| service_name | Yes      |                            | The service name of the project, such as `core`                                                                                                                                                                                                                            |
| service_type | No       | `rpc`                      | The service type, such as `rpc` or `api`                                                                                                                                                                                                                                   |
| author       | No       | `example@example.com`      | The author information                                                                                                                                                                                                                                                     |
| base         | No       | `alpine:latest`            | The base image to run the project                                                                                                                                                                                                                                          |
| branch       | No       |                            | The branch of the remote repository, it must be used with `--remote`                                                                                                                                                                                                       |
| china        | No       |                            | If your server is in China, set this to `true`                                                                                                                                                                                                                             |
| home         | No       |                            | The goctl home path of the template, `--home` and `--remote` cannot be set at the same time, if they are, `--remote` has higher priority                                                                                                                                   |
| image        | No       | `golang:1.20.3-alpine3.17` | The image for building the project                                                                                                                                                                                                                                         |
| port         | No       |                            | The port to expose, default none                                                                                                                                                                                                                                           |
| remote       | No       |                            | The remote git repository of the template, `--home` and `--remote` cannot be set at the same time, if they are, `--remote` has higher priority. The git repository directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure |
| tz           | No       |                            | The timezone of the container, such as `Asia/Shanghai`                                                                                                                                                                                                                     |
| local_build | No | false | Whether to build the project locally, without using an intermediate image |

> Run `goctls docker -h` to see more:

```shell
Generate Dockerfile

Usage:
  goctls docker [flags]

Flags:
  -u, --author string         The author information (default "example@example.com")
  -a, --base string           The base image to run the project (default "alpine:latest")
  -b, --branch string         The branch of the remote repo, it does work with --remote
  -c, --china                 If your server in China, set true
  -h, --help                  help for docker
  -m, --home string           The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
  -i, --image string          The image for building project (default "golang:1.20.5-alpine3.17")
  -l, --local_build           Whether to build the project locally without using intermediate images
  -p, --port int              The port to expose, default none
  -r, --remote string         The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                              The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
  -s, --service_name string   The service name of the project
  -t, --service_type string   The service type, such as rpc, api (default "rpc")
  -z, --tz string             The timezone of the container, such as Asia/Shanghai
```

## Environment variables

| Environment Variables | Introduction                                        |
| --------------------- | --------------------------------------------------- |
| DOCKER_USERNAME       | docker repository username                          |
| DOCKER_PASSWORD       | docker repository password                          |
| REPO                  | docker repository address， official hub: docker.io |