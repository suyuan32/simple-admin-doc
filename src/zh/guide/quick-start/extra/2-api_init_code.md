---
order: 2
title: "API 初始化代码"
---

## API 初始化代码生成

::: warning
goctls v1.5.2 +
:::

### `goctls extra init_code`

> 在根目录执行 

```shell
goctls extra init_code -m StudentInfo -t other -n Core
```

| 参数名称     | 必须 | 默认值  | 介绍                                                         |
| ------------ | ---- | ------- | ------------------------------------------------------------ |
| model_name   | 是   |         | 模型名称，schema 中内部 struct 名称，如 example 中的 Student |
| target       | 是   |         | 目标类型，现在支持 core , other                              |
| output       | 否   |         | 输出路径, 项目根目录 (default ".")                           |
| service_name | 是   | Other   | 服务名称                                                     |
| style        | 是   | go_zero | init api data 文件名格式                                     |

> 运行 `goctls extra init_code -h` 查看更多

```shell
生成初始化代码

Usage:
  goctls extra init_code [flags]

Flags:
  -h, --help                  help for init_code
  -m, --model_name string     模型名称，应该是驼峰式的，例如：StudentInfo
  -o, --output string         输出路径, 项目根目录 (default ".")
  -n, --service_name string   服务名称，如 Core (default "Other")
  -s, --style string          文件命名格式，参见 [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md] (default "go_zero")
  -t, --target string         目标类型，现在支持 core , other
```

### console 生成效果

```text
$ goctls extra init_code --model_name=StudentInfo --target=core
// STUDENTINFO

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath("/student_info/create").
        SetDescription("apiDesc.createStudentInfo").
        SetAPIGroup("student_info").
        SetMethod("POST"),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath("/student_info/update").
        SetDescription("apiDesc.updateStudentInfo").
        SetAPIGroup("student_info").
        SetMethod("POST"),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath("/student_info/delete").
        SetDescription("apiDesc.deleteStudentInfo").
        SetAPIGroup("student_info").
        SetMethod("POST"),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath("/student_info/list").
        SetDescription("apiDesc.getStudentInfoList").
        SetAPIGroup("student_info").
        SetMethod("POST"),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath("/student_info").
        SetDescription("apiDesc.getStudentInfoById").
        SetAPIGroup("student_info").
        SetMethod("POST"),
    )

```
