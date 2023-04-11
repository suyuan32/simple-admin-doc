---
order: 3
title: "Ent文件生成"
---

## Ent 文件生成

### `extra ent template` 模板生成

```shell
goctls extra ent template -u
```

| 参数名称 | 必须 | 默认值 | 介绍                                                                 |
| -------- | ---- | ------ | -------------------------------------------------------------------- |
| update   | 否   | false  | 是否更新本地所有 template 及 ent 版本                                |
| list     | 否   | false  | 列出所有支持的模板                                                   |
| dir      | 否   |        | ent 目录，若为空则会尝试自动查找，需要在项目根目录执行才可以自动查找 |
| add      | 否   |        | 添加模板，需要为列表内的模板                                         |

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
