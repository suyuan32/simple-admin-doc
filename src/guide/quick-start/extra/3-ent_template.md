---
order: 3
title: "Ent Template Generation"
---

## Ent Template Generation

### `extra ent template` Template Generation

```shell
goctls extra ent template -u
```

| Parameter Name | Required | Default Value | Description                                                                                                                                   |
| -------------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| update         | No       | false         | Whether to update all local templates and ent versions                                                                                        |
| list           | No       | false         | List all supported templates                                                                                                                  |
| dir            | No       |               | Ent directory, if empty, it will try to find it automatically. It needs to be executed in the project root directory to find it automatically |
| add            | No       |               | Add a template, which needs to be in the list.                                                                                                |

```shell
Usage:
  goctl extra ent template [flags]

Flags:
  -a, --add string   Add template for ent
  -d, --dir string   The ent directory. If it is empty, goctls will try to find it automatically
  -h, --help         help for template
  -l, --list         List all support templates
  -u, --update       Update all templates
```

### `extra ent mixin` Template Generation

> goctls >= 1.5.14

```shell
goctls extra ent mixin -a soft_delete
```

```shell
$ goctls extra ent mixin -h
Usage:
  goctls extra ent mixin [flags]

Flags:
  -a, --add string   Add Mixin template for ent
  -d, --dir string   Directory of ent. If empty, goctls will find it automatically
  -h, --help         help for mixin
  -l, --list         List all supported templates
  -u, --update       Update all templates
```

Soft delete templates are currently supported.
