---
order: 2
title: "Simple Admin Tools"
---

# Simple admin tools

Simple admin tools 是一个基于 go-zero 的 fork 项目。
它提供了许多额外的功能，例如:

- go-swagger : 基于 go-swagger 而不是官方的@doc 注解
- 多国语言支持
- 优化错误信息处理,支持多语言错误
- 简单易用的校验器
- 支持代码生成，生成 API,RPC 和 web 端的 CRUD 代码
- 对 Simple Admin 的针对性优化

由于本工具是 fork 项目，因此使用 goctls 会有些麻烦. 使用 fork 主要是为了同步官方最新代码。

::: warning
由于目前版本迭代较快，如果代码生成出现问题，请先 `git pull` 下载最新代码重新编译，如果还有问题，欢迎提交 issue
:::

::: info
[教学视频](https://www.bilibili.com/video/BV1Lc411n7Wf/)
:::

我们不能直接使用 go get and go install 命令安装 goctl 因为他会安装官方的文件，我们需要自行编译。

下面是构建 goctls 的过程.

> 构建 goctls

::: warning
**`Windows` 用户建议在 [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) 环境下开发, 你也可以自行配置环境， 参考 [Windows](/zh/guide/FAQ.html#如何配置-windows-环境)**
:::

```shell
git clone https://github.com/suyuan32/simple-admin-tools.git

cd tools/goctl

go mod tidy

# windows
make win

# linux
make linux

# mac
make mac
```

## 自动下载依赖

```shell
goctls env check -i -f --verbose
```

这个命令会自动安装 protoc, swagger 等依赖.

### API 命令

> 命令和 goctl 一样，但是需要改成 goctls.

```shell
$ goctls api -h
NAME:
   goctl api - generate api related files

USAGE:
   goctl api command [command options] [arguments...]

COMMANDS:
   new       fast create api service
   format    format api files
   validate  validate api file
   doc       generate doc files
   go        generate go files for provided api in yaml file
   java      generate java files for provided api in api file
   ts        generate ts files for provided api in api file
   dart      generate dart files for provided api in api file
   kt        generate kotlin code for provided api file
   plugin    custom file generator

OPTIONS:
   -o value        output a sample api file
   --home value    the goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
   --remote value  the remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                   The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
   --branch value  the branch of the remote repo, it does work with --remote
   --help, -h      show help
```

> 例子:

```shell
goctls api go -api core.api -dir .
```

根据 core.api 里的定义生成 go 文件， -dir 设置输出位置.

### Rpc 命令

```shell
$ goctl rpc protoc -h
NAME:
   goctl rpc protoc - generate grpc code

USAGE:
   example: goctl rpc protoc xx.proto --go_out=./pb --go-grpc_out=./pb --zrpc_out=.

DESCRIPTION:
   for details, see https://go-zero.dev/cn/goctl-rpc.html

OPTIONS:
   --zrpc_out value  the zrpc output directory
   --style value     the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]
   --home value      the goctl home path of the template
   --remote value    the remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                     The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
   --branch value    the branch of the remote repo, it does work with --remote
   --verbose, -v     enable log output
```

> 例子: 生成 proto 的模板

```shell
goctl rpc template -o=user.proto
```

> 生成的文件

```shell
syntax = "proto3";

package user;
option go_package=". /user";

message Request {
  string ping = 1;
}

message Response {
  string pong = 1;
}

service User {
  rpc Ping(Request) returns(Response);
}

```

> 生成 go 文件

```shell
goctl rpc protoc user.proto --go_out=. --go-grpc_out=. --zrpc_out=.
```

::: info
可以访问官网查看更多 [RPC command](https://go-zero.dev/docs/goctl/zrpc)
:::

::: warning
我们提供了 `make gen-rpc` 和 `make gen-api` 用于快速生成官方代码
:::
