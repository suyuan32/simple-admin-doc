---
order: 2
title: "API Initialization Codes"
---

## API Initialize Code Generation

::: warning
goctls v1.5.2 +
:::

### `goctls extra init_code`

```shell
goctls extra init_code --model_name=StudentInfo --target=core --output=D:\projects\simple-workspace\simple-admin-core\rpc\internal\logic\base\init_database_api_data.go
```

| Parameter     | Required | Default value | Description                                                                                                                         |
| ------------- | -------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| model_name    | Yes      |               | The model name, the internal struct name in the schema, such as Student in the example                                              |
| model_name_zh | Yes      |               | Model Chinese translation                                                                                                           |
| target        | Yes      |               | Currently supports `core`, which means to generate api initialization information in the core project                               |
| output        | No       |               | If it is empty, it will be output to the command line, copied by itself, or set to the absolute path of `init_database_api_data.go` |

> Run `goctls extra init_code -h` see more details

```shell
Generating initialize code

Usage:
  goctl extra init_code [flags]

Flags:
  -h, --help                help for init_code
  -m, --model_name string   The model name, it should be camelcase, such as StudentInfo
  -o, --output string       The output path, only support core generating, such as ./rpc/internal/logic/base/init_database_api_data.go
  -t, --target string       The target type, now only support core
```

### Console generation preview

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
