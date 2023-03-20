---
order: 3
title: "Web 端"
---

# Vben Web 端代码生成

::: warning

> 首先确认你安装了以下软件:

- simple-admin-tool (goctls) v0.2.8+
  :::

## 创建 example 代码

```shell
goctls frontend vben --api_file=/home/ryan/GolandProjects/simple-admin-example-api/desc/student.api --o=./ --folder_name=example --prefix=example-api --sub_folder=
```

### `frontend vben`参数介绍

| 参数        | 必须 | 默认值 | 介绍               | 使用方法                                                                                      |
| ----------- | ---- | ------ | ------------------ | --------------------------------------------------------------------------------------------- |
| api_file    | 是   |        | api 文件的绝对路径 | 填入 api 文件的绝对路径，如上面的 student.api                                                 |
| o           | 是   |        | 输出路径           | 输入 simple admin backend ui 目录                                                             |
| folder_name | 是   |        | 文件夹名称         | core 服务是 sys, 示例项目是 example                                                           |
| prefix      | 是   |        | 请求前缀           | 请求前缀用于请求转发，如 sys-api, 示例项目为 example-api, 需要修改 env.development,添加 proxy |
| sub_folder  | 否   |        | 子目录             | 用于在 views 下创建子目录，如 sys 有 user,token 等子目录                                      |
| overwrite   | 否   | false  | 是否覆盖生成文件   | true 则会覆盖所有生成的文件                                                                   |

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

> 示例地址 <https://github.com/suyuan32/simple-admin-backend-ui/tree/example-code-gen>
