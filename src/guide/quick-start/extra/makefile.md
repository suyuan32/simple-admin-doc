---
order: 5
title: "Makefile Generation"
---

## Makefile Generation

```shell
goctls extra makefile -n core -t rpc -s go_zero -i -e
```

> Help

```shell
Generate makefile file.

Usage:
  goctl extra makefile [flags]

Flags:
  -d, --dir string            Directory where the makefile file is located.
  -e, --ent                   Whether to use Ent.
  -h, --help                  help for makefile
  -i, --i18n                  Whether to use i18n
  -n, --service_name string   Service name.
  -t, --service_type string   Service type: api, single, or rpc.
  -s, --style string          The file naming format, see [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md]
```

::: warning
If run `goctls extra makefile` without any params，goctls will try to load configuration from original makefile.
:::
