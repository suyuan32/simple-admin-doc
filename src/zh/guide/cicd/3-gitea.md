---
order: 2
title: "Gitea Workflow"
---

## Gitea 文件生成

## 创建 Gitea Workflow 文件

> 创建 .gitea/workflow/docker.yaml

```shell
goctls cicd gitea -r https://github.com/suyuan32/simple-admin-job.git -c
```

## 参数介绍

```shell
$ goctls cicd gitea -h
生成 gitea 的 actions 文件, 用于构建 docker

Usage:
  goctls cicd gitea [flags]

Flags:
  -c, --china               服务器是否在中国
  -h, --help                help for gitea
  -o, --output_dir string   输出的目录，为项目根目录 (default ".")
  -r, --repository string   代码仓库的地址, 例如 "https://github.com/suyuan32/simple-admin-job.git"
```

