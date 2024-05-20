---
order: 3
title: "Web Pages"
head:
  - - meta
    - name: keywords
      content: web code generation, frontend, simple admin vben
---


::: info
[Video Tutorial](https://youtu.be/j7wEcaWVEKw)

<BiliBili bvid="BV1DL411a7wo" />
:::

## Create example codes

```shell
goctls frontend vben --api_file=/home/ryan/GolandProjects/simple-admin-example-api/desc/student.api --output=./ --folder_name=example --prefix=example-api --sub_folder=student
```

### `frontend vben`parameters

| Parameters  | Must | Default | Introduction                         | Usage                                                                                                                           |
| ----------- | ---- | ------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| api_file    | Yes  |         | Api file path                        | Input the api file absolute path，like above student.api                                                                        |
| output      | Yes  |         | Output path                          | Input simple admin backend ui root directory                                                                                    |
| folder_name | Yes  |         | Folder name                          | Core service is sys, in example project is example                                                                              |
| prefix      | Yes  |         | Request prefix                       | Used for request redirect，such as sys-api in core, example project is example-api, you need to edit env.development, add proxy |
| sub_folder  | No   |         | Sub directory                        | Used for generating sub-dir in views，such as user,token in sys directory                                                       |
| form_type   | Yes  | drawer  | Form container type                  | Support "drawer"， "modal"                                                                                                      |
| overwrite   | No   | false   | Whether it covers the generated file | `true` will cover all generated files                                                                                           |

> ** Run `goctls frontend vben --help` see more details **

```shell
$ goctls frontend vben -h
Generate frontend related files

Usage:
  goctls frontend vben [flags]

Flags:
  -a, --api_file string      The absolute path of api file
  -f, --folder_name string   The folder name to generate file in different directory. e.g. file folder in simple admin backend ui which is to store file manager service files (default "sys")
  -t, --form_type string     Form container type, default is "drawer", optional values are "drawer", "modal" (default "drawer")
  -h, --help                 help for vben
  -m, --model_name string    The model name. e.g. Example
  -o, --output string        The output directory, it should be the root directory of simple admin backend ui (default "./")
  -w, --overwrite            Whether to overwrite the files, it will overwrite all generated files
  -p, --prefix string        The request prefix for proxy. e.g. sys-api (default "sys-api")
  -s, --sub_folder string    The sub folder name. e.g. src/views/sys sub folder user which path is src/views/sys/user
```

> You can get code

- `src/api/example/student.ts src/api/example/model/student.ts` API defined codes
- `src/locales/lang/en/example.ts src/locales/lang/en/example.ts` i18n codes
- `src/views/example/*` views codes

### You need to do after generation

- Modify env.development and deploy/default.conf to add new proxy
- Modify locales files to optimize zh-CN translation
- Modify `*.data.ts` file in view. Optimize the chinese translation in `locales/lang/example.ts`
- Add api to database and database initialization code
- Add menu to database and initialization code

### Common mistakes

- The error "failed to get the fields of the model, please check the api file and your model name" appears. This is because the api file does not provide the data type configuration required to generate the model.

For example, you want to generate model data for a User
```
// What is provided in your api file may be like this
type User {
  Name string `json:"name"`
  Age int `json:"age"`
  Email string `json:"email"`
}

// But what is needed to generate the front-end data model is this
type UserInfo {
  Name string `json:"name"`
  Age int `json:"age"`
  Email string `json:"email"`
}
// You need to add "Info" after the name of the generated data model so that goctls can recognize it.
// This is the format of the model name "<ModelName>Info"
```

- "open `<file path>.ts`: The system cannot find the path specified." error occurs. This problem occurs because you executed the generation command in a directory other than the "simple-admin-backend-ui" backend web project directory. goctls backend cannot parse the project structure. You must execute the generation command in the "simple-admin-backend-ui" project directory to pass

> Example Project: <https://github.com/suyuan32/simple-admin-backend-ui/tree/example-code-gen>
