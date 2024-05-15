---
order: 2
title: "Goctls"
---

Goctls is a powerful tools for simple admin to gen codes, based on goctl.
It provides more addition features than origin project such as:

- go-swagger : it is different with origin which uses @doc comments
- multi-language support
- optimize error message
- fully support validator and easy to use
- code auto generation for API, RPC and web
- error handling which support multi-languages
- so on

::: info
[Official Video Tutorial](https://youtu.be/20XifykiXZc)

<BiliBili bvid="BV1Lc411n7Wf" />
:::

## Tool Installation

Starting from v1.5.14, the tool has been moved to a new repository for faster iteration and updates [repository address ↗](https://github.com/suyuan32/goctls), and now supports direct command installation, no longer requiring code cloning.

```shell
go install github.com/suyuan32/goctls@latest
```

::: warning
Starting from version v1.5.16, you can use `goctls upgrade` command is to upgrade the goctls.
:::

## Auto fix all dependencies command

```shell
goctls env check -i -f --verbose
```

Run this command can auto install protoc, swagger and so on.

## API command

> The command is the same as goctl, but you should use goctls instead.

```shell
$ goctls api -h
Generate api related files

Usage:
  goctls api [flags]
  goctls api [command]

Available Commands:
  doc         Generate doc files
  ent         Generate CRUD logic files from ent file
  format      Format api files
  go          Generate go files for provided api in api file
  new         Fast create api service
  plugin      Custom file generator
  proto       Generate CRUD template from proto file
  validate    Validate api file

Flags:
      --branch string   The branch of the remote repo, it does work with --remote
  -h, --help            help for api
      --home string     The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
      --o string        Output a sample api file
      --remote string   The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                        The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure


Use "goctls api [command] --help" for more information about a command.
```

> Example:

```shell
goctls api go -api core.api -dir .
```

This means generating go files by core.api's declaration in current directory. -dir set the output path.

## Rpc command

```shell
$ goctls rpc protoc -h
Generate grpc code

Usage:
  goctls rpc protoc [flags]

Examples:
goctls rpc protoc xx.proto --go_out=./pb --go-grpc_out=./pb --zrpc_out=.

Flags:
      --branch string     The branch of the remote repo, it does work with --remote
  -c, --client            Whether to generate client (default true)
  -h, --help              help for protoc
      --home string       The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
  -m, --multiple          Generated in multiple rpc service mode
      --remote string     The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority
                          The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
  -s, --style string      The file naming format, see [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md] (default "go_zero")
  -v, --verbose           Enable log output
      --zrpc_out string   The zrpc output directory

```

> Example: \
> Generate proto template

```shell
goctls rpc template -o=user.proto
```

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

> Generate go files

```shell
goctls rpc protoc user.proto --go_out=. --go-grpc_out=. --zrpc_out=.
```

::: info
You can get [More Document](https://go-zero.dev/en/docs/tutorials/cli/rpc) on go zero official website.
:::

::: warning
We provide `make gen-rpc` and `make gen-api` for quick generation of official code
:::
