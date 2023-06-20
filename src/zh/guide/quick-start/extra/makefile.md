---
order: 5
title: "Makefile生成"
---

## Makefile 生成

```shell
goctls extra makefile -n core -t rpc -s go_zero -i -e
```

> 帮助信息

```shell
生成 makefile 文件

Usage:
  goctl extra makefile [flags]

Flags:
  -d, --dir string            Makefile 文件所在目录
  -e, --ent                   是否使用 Ent
  -h, --help                  help for makefile
  -i, --i18n                  是否启用 i18n 国际化
  -n, --service_name string   服务名称
  -t, --service_type string   服务类型，api, single 或者 rpc
  -s, --style string          文件命名格式，参见 [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md]
```

::: warning
如果执行 `goctls extra makefile` 不加任何参数，goctls 将会尝试自动读取原 makefile 内的配置
:::
