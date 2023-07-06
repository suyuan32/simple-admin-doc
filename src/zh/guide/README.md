---
title: 项目简介
icon: book
author: Ryan SU
---

## **中文** | [English](./README.En.md)

[![Go-Zero](https://img.shields.io/badge/Go--Zero-v1.5.0-brightgreen.svg)](https://go-zero.dev/)
[![Vben Admin](https://img.shields.io/badge/Vben%20Admin-v2.8.0-yellow.svg)](https://vvbin.cn/doc-next/)
[![Ent](https://img.shields.io/badge/Ent-v0.11.9-blue.svg)](https://entgo.io/)
[![Casbin](https://img.shields.io/badge/Casbin-v2.52.1-orange.svg)](https://github.com/casbin/casbin)
[![Release](https://img.shields.io/badge/Release-v0.2.8-green.svg)](https://github.com/suyuan32/simple-admin-core/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![SimpleAdmin](https://dcbadge.vercel.app/api/server/NDED5p2hJk)](https://discord.gg/NDED5p2hJk)
![QQ群](https://img.shields.io/badge/QQ%E7%BE%A4-801043319-blue)

## 简介

Simple Admin 是一个开箱即用的分布式微服务后端管理系统，基于 go-zero 开发，为开发中大型后台提供了丰富的功能，支持三端代码生成。
官方自带多种扩展，助力中小企业快速上云，快速迭代。适合用于微服务学习和商用，开源免费。

#### [Ent 中文文档](https://suyuan32.github.io/ent-chinese-doc/#/zh-cn/getting-started)

## 特性

- **最新技术栈**：使用 ent, casbin, kafka 等前沿技术开发
- **完全支持 go-swagger**: 直接在 api 文件内编写注释即可直接生成 swagger 文档
- **统一的错误处理**: 整个系统拥有国际化的统一错误处理
- **国际化**：内置完善的国际化方案
- **服务注册发现**: 完善的服务注册发现机制，原生支持 K8s
- **权限**: 内置完善的动态路由权限生成方案, 集成 RBAC 权限控制
- **代码生成**: 内置三端 Web, API, RPC 代码生成
- **多种扩展**: 提供多种扩展，同时具有非常简单的接入功能
- **其他**: 流量控制， ES 服务

## 支持功能

- 用户管理：用户是系统操作者，该功能主要完成系统用户配置。
- 部门管理：配置系统组织机构（公司、部门、小组），树结构展现支持数据权限。
- 岗位管理：配置系统用户所属担任职务。
- 菜单管理：配置系统菜单，操作权限，按钮权限标识，接口权限等。
- 角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
- 字典管理：对系统中经常使用的一些较为固定的数据进行维护。
- 操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
- 会员管理：管理注册会员信息
- 接口文档：根据业务代码自动生成相关的 api 接口文档。
- 代码生成：根据数据表结构生成对应的增删改查相对应业务
- 服务监控：查看一些服务器的基本信息

## 项目规划进度

[RoadMap](https://github.com/suyuan32/simple-admin-core/issues/63)

## 预览

### 在线预览

[在线预览](http://101.132.124.135/#/dashboard)
账号 admin
密码 simple-admin

#### 只读，不可修改和注册

![pic](https://i.postimg.cc/qqPNR02x/register-zh-cn.png)
![pic](https://i.postimg.cc/PxczkCr6/dashboard-zh-cn.png)

## 文档

[Simple Admin 文档](https://doc.ryansu.pro)

- go-zero
  [Document](https://go-zero.dev/)
- ant-design-vue [Document](https://antdv.com/components/overview)

## 准备

- [Golang](http://go.dev/) and [git](https://git-scm.com/) - Go 语言
- [Ent](https://entgo.io/docs/getting-started) - Ent
- [Mysql](https://www.mysql.com/) - Mysql 数据库
- [GORM](https://gorm.io/) - GORM 数据库 ORM 组件
- [Casbin](https://casbin.org/) - 权限管理
- [Go-swagger](https://goswagger.io/) - Go-swagger 文档生成调试

## 快速开始

[快速开始文档](https://doc.ryansu.pro/zh/guide/basic-config/env_setting.html)

## 更新日志

[CHANGELOG](./CHANGELOG.md)

## 相关项目

- [Simple Admin](https://github.com/suyuan32/simple-admin-core)
- [Simple Admin 后端界面](https://github.com/suyuan32/simple-admin-backend-ui)

## 可选组件

- [文件管理](https://github.com/suyuan32/simple-admin-file)
- [定时任务](https://github.com/suyuan32/simple-admin-job)
- [会员管理](https://github.com/suyuan32/simple-admin-member-api)

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/suyuan32/simple-admin-core/issues/new) 或者提交一个 Pull Request。

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request`

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

## 交流群

> QQ 801043319

> [Discord](https://discord.gg/NDED5p2hJk)

> [论坛](https://github.com/suyuan32/simple-admin-core/discussions)

> 微信群

<div align="center">
<img src="https://doc.ryansu.pro/assets/contact.png" width="250px" height="320px"/>
</div>

::: info Simple Admin 星球免费加入！

> 项目地址：https://doc.ryansu.pro/zh/ \
> 待添加的功能： https://github.com/users/suyuan32/projects/1/views/1 \
> 推荐开发模块方向：https://github.com/users/suyuan32/projects/5/views/1

现招募第一批体验用户，由于星球刚成立，内容还不太多，我们将提供一批免费用户名额(约 30-50 人)。
如何获得资格？

- 1. **使用 Simple Admin 开发的模块且 star 大于 20 的开源项目的所有者**
- 2. **使用 Simple Admin 开发的模块， 文档详细的开源项目所有者**
- 3. **为 Simple Admin 任意项目贡献代码行数大于 50 或 PR 数量大于 5 的开发者**
- 4. **在各个渠道推荐 Simple Admin 的积极用户，邀请进微信群 5 人以上即可**
- 5. **在知乎、B 站、开源社区写文章或发视频推荐，两篇以上即可**

为什么要创建知识星球？

1. 新用户重复提问，重复问题没有时间回答
2. 知识星球提供一个大家分享自己开发的模块的平台，可以帮助大家快速获得 star
3. 管理员时间也很宝贵，项目的文档和视频已经很详细了，没有太多时间为新手提供回答，特别是重复的回答
4. 提供额外的学习文档和视频，方便新手快速学会微服务架构
5. 免费的项目是不可持续的，我们提供了免费的项目，但是没有精力作为免费的客服回答 golang 初学者问题，而且群聊无法查看历史信息，导致大量重复问答

**注意： Simple Admin Core 和 Backend UI 等基础项目是永久免费的，星球只是提供一个提供额外交流的平台**

知识星球内的提问管理员会尽量回答，有需求的可以加入，qq 群和微信群仍会正常运行，但是重复的或者文档有的问题不再回复, 建议大家在 github 上提 issue ，issue 有历史记录，作者会回答的， 不过回复会慢些。

项目文档和视频都很详细，不一定要加入星球，不过接下来会在星球中持续更新基于 **Simple Admin 的商城系统**，欢迎感兴趣的朋友加入，跟着官方学习 go 语言的分布式商城系统开发。

![加入链接](/assets/discount_720.png)

:::

## Stars

[![Star History Chart](https://api.star-history.com/svg?repos=suyuan32/simple-admin-core&type=Date)](https://github.com/suyuan32/simple-admin-core)

## 维护者

[@Ryan Su](https://github.com/suyuan32)

## License

[MIT © Ryan-2022](./LICENSE)
