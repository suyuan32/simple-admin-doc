---
order: 3
title: "Web Pages"
---

# Vben web code generation

> Make sure that you have been installed follow software:

- simple-admin-tool (goctls) v1.5.2 +

::: info
[Video Tutorial](https://youtu.be/j7wEcaWVEKw)
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
| overwrite   | No   | false   | Whether it covers the generated file | `true` will cover all generated files                                                                                           |

> ** Run `goctls frontend vben --help` see more details **

```shell
$ goctls frontend vben --help
Generate frontend related files

Usage:
  goctl frontend vben [flags]

Flags:
  -a, --api_file string      The absolute path of api file
  -f, --folder_name string   The folder name to generate file in different directory. e.g. file folder in simple admin backend ui which is to store file manager service files (default "sys")
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

> Example Project: <https://github.com/suyuan32/simple-admin-backend-ui/tree/example-code-gen>
