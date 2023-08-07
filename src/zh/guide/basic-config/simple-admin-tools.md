---
order: 2
title: "Goctls"
---

# Goctls

Goctls 是一个为 simple admin 设计的代码生成工具, 基于 go zero 官方工具 goctl 开发而成。
它提供了许多额外的功能，例如:

- go-swagger : 基于 go-swagger 而不是官方的@doc 注解
- 多国语言支持
- 优化错误信息处理,支持多语言错误
- 简单易用的校验器
- 支持代码生成，生成 API,RPC 和 web 端的 CRUD 代码
- 对 Simple Admin 的针对性优化

::: warning

现已支持中文，只需要设置环境变量 SIMPLE_ADMIN_TOOLS_LANG=zh 即可

```shell
SIMPLE_ADMIN_TOOLS_LANG=zh goctls -h
```

:::

## 工具安装

::: info
[教学视频](https://www.bilibili.com/video/BV1Lc411n7Wf)
:::

从 v1.5.14 开始，工具已移至新的仓库，便于快速迭代更新 [仓库地址](https://github.com/suyuan32/goctls), 目前已支持直接命令安装，不再需要 clone 代码

```shell
go install github.com/suyuan32/goctls@latest
```

::: warning
从 v1.5.16 版本开始支持使用 `goctls upgrade` 命令升级 goctls
:::

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
