---

home: true
icon: home
title: 主页
heroImage: /logo.svg
heroText: Simple Admin
tagline: Simple Admin是一个基于Go Zero开发面向中大型项目的分布式微服务后端管理系统脚手架，提供丰富的后台管理功能，支持k8s快速部署，助力快速开发高并发微服务集群，适合学习和商用
actions:

- text: 快速开始 💡
  link: /zh/guide/basic-config/all_in_one
  type: primary

- text: 文档
  link: /zh/guide/
  icon: f7:doc-fill

- text: GitHub
  link: https://github.com/suyuan32/simple-admin-core
  icon: mdi:github

- text: Gitee
  link: https://gitee.com/hopefire/simple-admin-core
  icon: simple-icons:gitee

- text: 社区模块
  link: https://github.com/suyuan32/awesome-simple-admin-module
  icon: streamline:module-puzzle-3-solid
  type: primary

highlights:
  - header: 
    features:
      - title: 完善的后台管理功能
        icon: fluent:card-ui-20-filled
        details: 提供丰富的后台管理功能
        link: http://101.132.124.135:8080/

      - title: 强大的生成工具
        icon: fa-solid:tools
        details: Simple Admin Tool 提供强大的代码生成功能，快速生成三端 CRUD 代码
        link: /zh/guide/basic-config/simple-admin-tools

      - title: 强大的部署工具
        icon: material-symbols-light:deployed-code-sharp
        details: Doge 提供强大的一键部署功能，可以快速部署模块商店内的模块
        link: /zh/guide/basic-config/doge

      - title: 强大的 Ent 支持
        icon: material-symbols-light:database
        details: Goctls 提供强大的 Ent 代码生成支持，包括模板管理，扩展功能
        link: /zh/guide/quick-start/extra/3-ent_template

      - title: 内置校验器
        icon: mdi:eye
        details: 内置校验器实现数据快速校验
        link: /zh/guide/feature/validator

      - title: 统一的错误处理
        icon: clarity:error-solid
        details: 提供多种错误信息处理，且支持国际化翻译错误信息
        link: /zh/guide/feature/error_handling

      - title: 国际化支持
        icon: ion:earth-sharp
        details: 生成工具支持生成 i18n 代码，快速提供国际化支持
        link: /zh/guide/feature/i18n

      - title: K8s 支持
        icon: material-symbols:cloud
        details: 项目提供 K8s 快速部署脚本，实现项目快速上云
        link: /zh/guide/basic-config/k8s/k8s-deploy

      - title: 服务注册发现
        icon: ph:magnifying-glass-bold
        details: 基于 K8s Endpoints 实现服务注册发现
        link: /zh/guide/basic-config/k8s/k8s-deploy

      - title: 第三方登陆管理
        icon: clarity:building-solid
        details: 支持第三方登陆管理
        link: /zh/guide/feature/oauth

  - header: 
    features:
      - title: Github star 
        icon: mdi:github
        details: 1.3 k
      
      - title: 公司应用
        icon: fluent:building-32-filled
        details: 150 +

      - title: 私人生产项目
        icon: mdi:people
        details: 850 +
      
      - title: 官方模块
        icon: streamline:module-puzzle-3-solid
        details: 10 +

footer: MIT 协议 版权所有 © 2022-present Ryan SU

---

## 🛠 Goctls 开发工具安装

```bash
go install github.com/suyuan32/goctls@latest
```

## 🚀 Goctls 使用
![](/assets/indeximg/goctls.png)


## 🚀 Doge 自动部署工具
![](/assets/indeximg/doge.png)

## 官方交流群

- 关注公众号 - **几颗酥** ， 可以免费加入交流群

<!-- markdownlint-disable -->