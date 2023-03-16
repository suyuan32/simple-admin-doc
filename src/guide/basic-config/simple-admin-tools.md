---
order: 1
title: 'Simple Admin Tools'
---
# Simple admin tools

Simple admin tools is a tool fork from go-zero.
It provides more addition features than origin project such as:

- go-swagger : it is different with origin which uses @doc comments
- multi-language support
- optimize error message
- fully support validator and easy to use
- code auto generation for API, RPC and web
- error handling which support multi-languages
- so on

::: warning
Due to the rapid iteration of the current version, if there is a problem with code generation, please run `git pull` to download the latest code and recompile.
If there are still problems, please submit an issue.
:::

It is a little complex to install the `goctls` due to forking project.
Let me show you how to build the code by yourself.

> Build goctls

```shell
git clone https://github.com/suyuan32/simple-admin-tools.git

cd tools/goctl

go mod tidy

# output goctls in order not to conflict with goctl
go build -o goctls goctl.go

cp ./goctls $GOPATH/bin/goctls
```

::: info Easy Way
`Linux` users can just run **sh build.sh** in goctl directory. `Windows` users should run **sh build_win.sh** in `git bash`.
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

> Example:

```shell
goctls api go -api core.api -dir .
```

This means generating go files by core.api's declaration in current directory. -dir set the output path.

## Rpc command

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

> Example: \
Generate proto template

```shell
goctl rpc template -o=user.proto
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
goctl rpc protoc user.proto --go_out=. --go-grpc_out=. --zrpc_out=.
```

::: info 
You can get [More Document](https://go-zero.dev/docs/goctl/zrpc) on go zero official website.
:::

::: warning
We provide `make gen-rpc` and `make gen-api` for quick generation of official code
:::