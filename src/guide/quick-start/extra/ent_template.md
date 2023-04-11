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
