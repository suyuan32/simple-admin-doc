---
order: 3
title: "Web 端"
head:
  - - meta
    - name: keywords
      content: web code generation, web 代码生成, frontend, 前端, simple admin vben
---

::: info
[视频教程](https://www.bilibili.com/video/BV1DL411a7wo)

<BiliBili bvid="BV1DL411a7wo" />
:::

## 创建 example 代码

```shell
goctls frontend vben --api_file=/home/ryan/GolandProjects/simple-admin-example-api/desc/student.api --output=./ --folder_name=example --prefix=example-api --sub_folder=
```

### `frontend vben`参数介绍

| 参数        | 必须 | 默认值 | 介绍               | 使用方法                                                                                      |
| ----------- | ---- | ------ | ------------------ | --------------------------------------------------------------------------------------------- |
| api_file    | 是   |        | api 文件的绝对路径 | 填入 api 文件的绝对路径，如上面的 student.api                                                 |
| output      | 是   |        | 输出路径           | 输入 simple admin backend ui 目录                                                             |
| folder_name | 是   |        | 文件夹名称         | core 服务是 sys, 示例项目是 example                                                           |
| prefix      | 是   |        | 请求前缀           | 请求前缀用于请求转发，如 sys-api, 示例项目为 example-api, 需要修改 env.development,添加 proxy |
| sub_folder  | 否   |        | 子目录             | 用于在 views 下创建子目录，如 sys 有 user,token 等子目录                                      |
| form_type   | 是   | drawer | 表格容器           | 支持 drawer 抽屉容器， modal 弹窗容器                                                         |
| overwrite   | 否   | false  | 是否覆盖生成文件   | true 则会覆盖所有生成的文件                                                                   |

> 运行 `goctls frontend vben --help` 查看详细命令

```shell
$ goctls frontend vben -h
生成与前端相关的文件

Usage:
  goctls frontend vben [flags]

Flags:
  -a, --api_file string      API 文件的绝对路径
  -f, --folder_name string   在不同目录中生成文件的文件夹名称。例如，存储文件管理器服务文件的简单管理后台 UI 中的文件夹名称 (default "sys")
  -t, --form_type string     表单容器类型, 默认为 drawer, 可选值为 drawer, modal (default "drawer")
  -h, --help                 help for vben
  -m, --model_name string    模型名称。例如，Example
  -o, --output string        输出目录，应该是Simple Admin Backend UI 的根目录 (default "./")
  -w, --overwrite            是否覆盖文件，它将覆盖所有生成的文件
  -p, --prefix string        代理请求的前缀。例如，sys-api (default "sys-api")
  -s, --sub_folder string    子目录名称。例如，src/views/sys 子目录用户，路径为 src/views/sys/user
```

> 执行命令后会生成下面的代码

- `src/api/example/student.ts src/api/example/model/student.ts` API 声明和请求代码
- `src/locales/lang/en/example.ts src/locales/lang/en/example.ts` 国际化代码
- `src/views/example/*` 视图代码

### 生成代码后还需要做的事

- 修改 env.development 和 deploy/default.conf 添加新的服务地址
- 修改国际化代码，优化中文翻译
- 修改 views 中的 \*.data.ts 完善中文翻译，行列以及提交表格中的字段名需要自行翻译添加到国际化代码中使用 `locales/lang/example.ts`
- 添加 api 到数据库以及数据库初始化代码
- 添加菜单到数据库以及初始化代码

### 常见问题

- 出现 “failed to get the fields of the model, please check the api file and your model name” 错误，这个是因为api文件里面没提供生成模型所需要的数据类型配置

比如说你想要生成个User的模型数据
```
// 你的api文件里面提供的可能是这样
type User {
  Name string `json:"name"`
  Age int `json:"age"`
  Email string `json:"email"`
}

// 但是生成前端数据模型需要的是这样
type UserInfo {
  Name string `json:"name"`
  Age int `json:"age"`
  Email string `json:"email"`
}
// 你需要在生成的数据模型名称后面加个“Info”，goctls 才能识别
// 这是模型名称的格式“<ModelName>Info”
```

- 出现 “open `<文件路径>.ts`: The system cannot find the path specified.” 错误，出现这个问题是因为你在 “simple-admin-backend-ui” 这个后台前端项目目录以外的目录执行了生成指令，goctls backend 没办法解析项目结构，你必须在“simple-admin-backend-ui”项目目录下执行生成指令才能通过

> 示例地址 <https://github.com/suyuan32/simple-admin-backend-ui/tree/example-code-gen>
