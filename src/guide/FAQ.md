---
order: 6
title: 'FAQ'
---

# FAQ

## What is the default account?

A: Account: admin Password: simple-admin

## Registered account can not log in?

A: The default role after successful registration is a member, without the right to log in. You need to modify the role permissions or set the user's role to administrator.

## How many ways does go-zero have for service registration and discovery?

A: 3 kinds [go-zero](https://mp.weixin.qq.com/s/-WaWJaM_ePEQOf7ExNJe7w)

## How to deal with cross domain issues?

A: Modify api/core.go

```go
server := rest.MustNewServer(c.RestConf, rest.WithCors("*"))
```

Modify `*` to your own domain name or IP, the default is `*`, allowing all.

## How to sync a fork repository

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
