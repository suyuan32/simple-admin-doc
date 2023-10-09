---
order: 5
title: "Quick Commands"
---

# Quick Commands

::: warning
**Note: The system needs to support the make command, linux is recommended. `Windows` users need to set up environment [Windows](/guide/FAQ.html#how-to-configure-the-windows-environment).**
:::

We offer several commands in makefile ， you can just run in bash:

```shell
build-linux: Build project for Linux | 构建Linux下的可执行文件
build-mac: Build project for MacOS | 构建MacOS下的可执行文件
build-win: Build project for Windows | 构建Windows下的可执行文件
docker: Build the docker image | 构建 docker 镜像
fmt: Format the codes | 格式化代码
gen-api: Generate API files | 生成 API 的代码
gen-swagger: Generate swagger file | 生成 swagger 文件
help: Show help | 显示帮助
lint: Run go linter | 运行代码错误分析
publish-docker: Publish docker image | 发布 docker 镜像
serve-swagger: Run the swagger server | 运行 swagger 服务
test: Run test for the project | 运行项目测试
tools: Install the necessary tools | 安装必要的工具
```

::: info
You can get all commands by `make help`.
:::

## Environment variables

| Environment Variables | Introduction                                        |
| --------------------- | --------------------------------------------------- |
| DOCKER_USERNAME       | docker repository username                          |
| DOCKER_PASSWORD       | docker repository password                          |
| REPO                  | docker repository address， official hub: docker.io |

::: warning
If you want to publish docker images, you must set all environment variables above.
:::
