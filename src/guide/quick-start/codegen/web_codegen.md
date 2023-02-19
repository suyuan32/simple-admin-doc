---
order: 3
title: 'Web Pages'
---

# Vben web code generation

> Make sure that you have been installed follow software:

- simple-admin-tool (goctls) v0.1.7 +

## Create example codes

```shell
goctls frontend vben --api_file=/home/ryan/GolandProjects/simple-admin-example-api/desc/student.api --o=./ --folder_name=example --prefix=example-api --sub_folder=student
```

### `frontend vben`parameters

| Parameters  | Must | Default | Introduction   | Usage                                                                                                                          |
|-------------|------|---------|----------------|--------------------------------------------------------------------------------------------------------------------------------|
| api_file    | Yes  |         | Api file path  | Input the api file absolute path，like above student.api                                                                        |
| o           | Yes  |         | Output path    | Input simple admin backend ui root directory                                                                                   |
| folder_name | Yes  |         | Folder name    | Core service is  sys, in example project is example                                                                            |
| prefix      | Yes  |         | Request prefix | Used for request redirect，such as sys-api in core, example project is example-api, you need to edit env.development, add proxy |
| sub_folder  | No   |         | Sub directory  | Used for generating sub-dir in views，such as user,token in sys directory                                                       |

> You can get code

- `src/api/example/student.ts src/api/example/model/student.ts`    API defined codes
- `src/locales/lang/en/example.ts src/locales/lang/en/example.ts`  i18n codes
- `src/views/example/*` views codes

### You need to do after generation

- Modify env.development and deploy/default.conf to add new proxy
- Modify locales files to optimize zh-CN translation
- Modify  `*.data.ts` file in view. Optimize the chinese translation in  `locales/lang/example.ts`
- Add api to database and database initialization code
- Add menu to database and initialization code
  
> Example Project: <https://github.com/suyuan32/simple-admin-backend-ui/tree/example-code-gen>
