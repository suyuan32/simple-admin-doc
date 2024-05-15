---
order: 2
title: "API Initialization"
---

## API Initialize Code Generation


::: info Video tutorial
<BiliBili bvid="BV1pj411878n" />
:::

### `goctls extra init_code`

> Run in root directory of project

```shell
goctls extra init_code -m StudentInfo -t other -n Core
```

| Parameter    | Required | Default value | Description                                                                            |
| ------------ | -------- | ------------- | -------------------------------------------------------------------------------------- |
| model_name   | Yes      |               | The model name, the internal struct name in the schema, such as Student in the example |
| target       | Yes      |               | The target type, now support core and other                                            |
| output       | No       |               | The output path, the project's root directory                                          |
| service_name | Yes      | Other         | The service name                                                                       |
| route_prefix | No       | false         | Whether to generate route prefix, it must begin with "/"                               |
| style        | Yes      | go_zero       | The file naming style                                                                  |

> Run `goctls extra init_code -h` see more details

```shell
$ goctls extra init_code -h
Generating initialize code

Usage:
  goctls extra init_code [flags]

Flags:
  -h, --help                  help for init_code
  -m, --model_name string     The model name, it should be camelcase, such as StudentInfo
  -o, --output string         The output path, the project's root directory  (default ".")
  -p, --route_prefix string   The prefix of the route path
  -n, --service_name string   Service name，such as "Core" (default "Other")
  -s, --style string          The file naming format, see [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md] (default "go_zero")
  -t, --target string         The target type, now support core and other
```