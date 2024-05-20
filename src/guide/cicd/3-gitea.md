---
order: 2
title: "Gitea Workflow"
head:
  - - meta
    - name: keywords
      content: gitea ci/cd, simple admin ci/cd, continuous
---

## Gitea Workflow Generating

> goctls >= 1.6.7

## Create Gitea Workflow file

> Create .gitea/workflow/docker.yaml

```shell
goctls cicd gitea -r https://github.com/suyuan32/simple-admin-job.git -c
```

## Parameters

```shell
$ goctls cicd gitea -h
Generate actions files for gitea to build docker images

Usage:
  goctls cicd gitea [flags]

Flags:
  -c, --china               Whether the server is located in China
  -h, --help                help for gitea
  -o, --output_dir string   The output directory, please set the project's root directory (default ".")
  -r, --repository string   The address of the code repository, for example, "https://github.com/suyuan32/simple-admin-job.git"
```

