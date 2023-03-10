---
order: 6
title: '常见问题'
---

# FAQ


## 默认账号是什么？

A: 账号: admin   密码: simple-admin

## 注册的账号不能登录?

A: 默认注册成功后的角色是会员，没有登录的权限。你需要修改角色权限或者将用户的角色设置为管理员.

## go-zero 有几种服务注册发现方式？

A： 3 种 [go-zero](https://mp.weixin.qq.com/s/-WaWJaM_ePEQOf7ExNJe7w)

## 如何处理跨域问题？

A: 修改 api/core.go

```go
server := rest.MustNewServer(c.RestConf, rest.WithCors("*"))
```

修改 `*` 为自己的域名或IP,默认为`*`，允许所有。

## 如何同步 fork 仓库

> 给fork配置远程库,先查看远程状态

```shell 
git remote -v
```

> 确定一个将被同步给 fork 远程的上游仓库, upstream后的地址是你即将同步的git地址

```shell
git remote add upstream https://github.com/suyuan32/simple-admin-core.git
```

> 开始同步fork

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