---
order: 6
title: "常见问题"
---

# FAQ

## 默认账号是什么？

A: 账号: admin 密码: simple-admin

## 注册的账号不能登录?

A: 默认注册成功后的角色是会员，没有登录的权限。你需要修改角色权限或者将用户的角色设置为管理员.

## go-zero 有几种服务注册发现方式？

A： 3 种 [go-zero](https://mp.weixin.qq.com/s/-WaWJaM_ePEQOf7ExNJe7w)

## 如何处理跨域问题？

A: 修改 api/core.go

```go
server := rest.MustNewServer(c.RestConf, rest.WithCors("*"))
```

修改 `*` 为自己的域名或 IP,默认为`*`，允许所有。

## 如何同步 fork 仓库?

> 给 fork 配置远程库,先查看远程状态

```shell
git remote -v
```

> 确定一个将被同步给 fork 远程的上游仓库, upstream 后的地址是你即将同步的 git 地址

```shell
git remote add upstream https://github.com/suyuan32/simple-admin-core.git
```

> 开始同步 fork

```shell
git fetch upstream
```

> 切换到本地主分支

```shell
git checkout master
```

> 把 upstream/master 分支合并到本地 master 上，这样就完成了同步，并且不会丢掉本地修改的内容。

```shell
git merge upstream/master
```

## 如何获取环境变量？

只需要在 `config.go` 的变量中声明 `env`

```go
type Config struct {
     ServiceName string `json:",env=SERVICE_NAME"`
}
```

## 如何配置 Windows 环境？

> **首先安装 `git` , 我们需要 `git bash` 命令行执行 linux 命令** \
> **其次需要安装 `make` 命令， 我们通过 [Chocolatey](https://chocolatey.org/install#individual) 进行安装**

```shell
# 在管理员状态下的 POWERSHELL 执行

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

## 然后执行

choco install make
```

> 安装完成 `make` 后重启 IDE 即可，IDE 的命令行均选择 `git bash`

::: warning
`git bash` 下的路径使用 `/` 分隔， windows 默认为 `\`

```shell
goctls api proto --proto=D:/projects/simple-admin-example-rpc/example.proto --style=go_zero --api_service_name=example --rpc_service_name=example --o=./ --model=Student --rpc_name=Example --grpc_package=github.com/suyuan32/simple-admin-example-rpc/example
```

:::

## 菜单有哪些特殊组件？

- LAYOUT - 当菜单为目录时，组件需要设置为 LAYOUT
- IFrame - 当菜单为 Iframe 时需要设置为 Iframe, 内嵌和外链都需要设置为 Iframe

## 如何在本地开发多个相互依赖的项目？

使用工作区模式， 在 go 1.18 后有了 workspace 模式， 只需要将 api 和 rpc 项目放在同一个文件夹下，执行命令：

```shell
# 例如将多个项目放在一个位置进行开发
go work init simple-admin-common/ simple-admin-core/ simple-admin-tools/
```

即可在本地获取最新代码变化，而不需要提交仓库。
