---
order: 2
title: "Goctls"
head:
  - - meta
    - name: keywords
      content: goctls, goctls -h, simple admin 开发工具, 微服务工具
---

Goctls 是一个为 simple admin 设计的代码生成工具, 基于 go zero 官方工具 goctl 开发而成。
它提供了许多额外的功能，例如:

- go-swagger : 基于 go-swagger 而不是官方的@doc 注解
- 多国语言支持
- 优化错误信息处理,支持多语言错误
- 简单易用的校验器
- 支持代码生成，生成 API,RPC 和 web 端的 CRUD 代码
- 对 Simple Admin 的针对性优化

::: warning

现已支持中文，只需要设置环境变量 SIMPLE_LANG=zh 即可

```shell
SIMPLE_LANG=zh goctls -h
```

:::

## 工具安装

::: info
[教学视频](https://www.bilibili.com/video/BV1Lc411n7Wf)

<BiliBili bvid="BV1Lc411n7Wf" />
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
生成与 api 相关的文件

Usage:
  goctls api [flags]
  goctls api [command]

Available Commands:
  doc         生成文档文件
  ent         从 ent 文件生成 CRUD 业务逻辑文件
  format      格式化 api 文件
  go          为提供的 api 文件生成 go 文件
  new         快速创建 api 服务
  plugin      自定义文件生成器
  proto       从 proto 文件生成 CRUD 模板
  validate    验证 api 文件

Flags:
      --branch string   远程 repo 的分支，与 --remote 一起使用
  -h, --help            help for api
      --home string     模板的 goctl 路径，--home 和 --remote 不能同时设置，如果设置了，--remote 优先级更高
      --o string        输出 api 示例文件
      --remote string   模板的远程 git repo，--home 和 --remote 不能同时设置，如果设置了，--remote 优先级更高
                        Git repo 的目录结构必须与 https://github.com/zeromicro/go-zero-template 相一致


Use "goctls api [command] --help" for more information about a command.

```

> 例子:

```shell
goctls api go -api core.api -dir .
```

根据 core.api 里的定义生成 go 文件， -dir 设置输出位置.

### Rpc 命令

```shell
$ goctls rpc protoc -h
生成 grpc 代码

Usage:
  goctls rpc protoc [flags]

Examples:
goctl rpc protoc xx.proto --go_out=./pb --go-grpc_out=./pb --zrpc_out=.

Flags:
      --branch string     远程 repo 的分支，与 --remote 一起使用
  -c, --client            是否生成 client (default true)
  -h, --help              help for protoc
      --home string       模板的 goctl 路径，--home 和 --remote 不能同时设置，如果设置了，--remote 优先级更高
  -m, --multiple          在多个 rpc 服务模式下生成
      --remote string     模板的远程 git repo，--home 和 --remote 不能同时设置，如果设置了，--remote 优先级更高
                          Git repo 的目录结构必须与 https://github.com/zeromicro/go-zero-template 相一致
  -s, --style string      文件命名格式，参见 [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md] (default "go_zero")
  -v, --verbose           启用日志输出
      --zrpc_out string   zrpc 输出目录

> 例子: 生成 proto 的模板

```shell
goctls rpc template -o=user.proto
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
goctls rpc protoc user.proto --go_out=. --go-grpc_out=. --zrpc_out=.
```

::: info
可以访问官网查看更多 [RPC command](https://go-zero.dev/docs/tutorials/cli/rpc)
:::

::: warning
我们提供了 `make gen-rpc` 和 `make gen-api` 用于快速生成官方代码
:::
