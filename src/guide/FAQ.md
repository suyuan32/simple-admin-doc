---
order: 6
title: "FAQ"
---

# FAQ

## What is the default account?

A: Account: `admin` Password: `simple-admin`

## Registered account can not log in?

A: The default role after successful registration is a staff, without the permission to log in. You need to modify the role permissions or set the user's role to administrator.

## How many ways does go-zero have for service registration and discovery?

A: 3 kinds [go-zero](https://mp.weixin.qq.com/s/-WaWJaM_ePEQOf7ExNJe7w)

## How to deal with cross domain issues?

A: Modify api/core.go

```go
server := rest.MustNewServer(c.RestConf, rest.WithCors("*"))
```

Modify `*` to your own domain name or IP, the default is `*`, allowing all.

## How to sync a fork repository?

> Configure the remote library for fork, check the remote status first

```shell
git remote -v
```

> Determine an upstream warehouse that will be synchronized to the fork remote, the address after upstream is the git address you are about to synchronize

```shell
git remote add upstream https://github.com/suyuan32/simple-admin-core.git
```

> start sync fork

```shell
git fetch upstream
```

> switch to local master branch

```shell
git checkout master
```

> Merge the upstream/master branch into the local master, so that the synchronization is completed and the locally modified content will not be lost.

```shell
git merge upstream/master
```

## How to get environment variables?

Just declare `env` in the variable of `config.go`

```go
type Config struct {
      ServiceName string `json:",env=SERVICE_NAME"`
}
```

## How to configure the Windows environment?

> **First install `git`, we need `git bash` command line to execute linux commands** \
> **Secondly, you need to install the `make` command, we install it through [Chocolatey](https://chocolatey.org/install#individual)**

```shell
# POWERSHELL Execution in Admin State

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# And then run
choco install make
```

> Restart the IDE after `make` is installed, and select `git bash` for the command line of the IDE

::: warning
Paths under `git bash` are separated by `/`, windows defaults to `\`

```shell
goctls api proto --proto=D:/projects/simple-admin-example-rpc/example.proto --style=go_zero --api_service_name=example --rpc_service_name=example --o=./ --model=Student --rpc_name=Example --grpc_package=github.com/suyuan32/simple-admin-example-rpc/example
```

:::

## What special components does the menu have?

- LAYOUT - When the menu is a directory, the component needs to be set to `LAYOUT`
- IFrame - When the menu is an Iframe, it needs to be set to `Iframe`, and both embedded and external links need to be set to `Iframe`

## How to develop multiple interdependent projects locally?

Use the workspace mode. After go 1.18, there is a workspace mode. You only need to put the api and rpc projects in the same folder and execute the command:

```shell
# Such as putting multiple projects in one place for development
go work init simple-admin-common/ simple-admin-core/ simple-admin-tools/
```

You can get the latest code changes locally without committing to the repository.

## How to debug Backend UI?

- First run the project, execute `pnpm dev`
- Then set breakpoint and press `F5` in vscode to debug
