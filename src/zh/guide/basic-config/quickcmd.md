---
order: 5
title: "快捷命令"
head:
  - - meta
    - name: keywords
      content: quick command, makefile, make help, simple admin, 快捷命令
---

# 快捷命令

我们提供了许多快捷命令在 makefile 中， 只需在根目录执行即可

::: warning
**注意：需要系统支持 make 命令，建议 linux, Windows 用户请先配置环境 [Windows](/zh/guide/FAQ.html#如何配置-windows-环境)**
:::

::: info
**在项目根目录执行 `make help` 获取所有命令**
:::

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



## 环境变量

| 环境变量        | 介绍                               |
| --------------- | ---------------------------------- |
| DOCKER_USERNAME | docker 仓库用户名                  |
| DOCKER_PASSWORD | docker 仓库密码                    |
| REPO            | docker 仓库地址， 官网为 docker.io |

::: warning
若要发布镜像需要 export 上述环境变量
:::
