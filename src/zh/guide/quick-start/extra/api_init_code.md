---
order: 2
title: "API 初始化代码生成"
---

## API 初始化代码生成

::: warning
goctls v0.3.2-beta +
:::

### `goctls extra init_code`

```shell
goctls extra init_code --model_name=StudentInfo --target=core --output=D:\projects\simple-workspace\simple-admin-core\rpc\internal\logic\base\init_database_api_data.go
```

| 参数名称      | 必须 | 默认值 | 介绍                                                                                |
| ------------- | ---- | ------ | ----------------------------------------------------------------------------------- |
| model_name    | 是   |        | 模型名称，schema 中内部 struct 名称，如 example 中的 Student                        |
| model_name_zh | 是   |        | 模型中文名称                                                                        |
| target        | 是   |        | 目前支持 core, 意思是生成 core 项目中的 api 初始化信息                              |
| output        | 否   |        | 若为空则会输出至命令行，自行复制，或者设置为 `init_database_api_data.go` 的绝对路径 |

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
