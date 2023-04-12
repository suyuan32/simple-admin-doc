---
order: 2
title: "后台页面"
---

## web 端, department 为例

执行命令

```shell
 goctls frontend vben --api_file=/home/ryan/GolandProjects/simple-admin-core/api/desc/department.api --o=./ --folder_name=sys --prefix=sys-api --sub_folder=department
```

将会自动生成 api, model, view, locale， 需要自行修改下 data.ts 内的列和 locale 中的翻译

### 请求消息返回显示效果

> message 模式显示效果如下

![example](/assets/example_validator_message_mode.png)

> modal 模式显示效果如下

![example](/assets/example_validator_modal_mode.png)

> 推荐使用 i18n 插件，可以直接复制路径

![I18n](/assets/i18n_ext.png)
![I18n](/assets/copy_translation_path.png)

### 新增菜单

![Menu](/assets/add_example_menu.png)

### 添加菜单权限

![Menu](/assets/add_example_authority.png)

> API 的介绍同样最好设置中英文

![Example](/assets/example_api_desc_title_en.png)
![Example](/assets/example_api_desc_title_zh.png)

### 新增 API

![Example](/assets/add_example_api_zh.png)

### 添加 API 权限

![Example](/assets/add_example_authority_zh.png)

### 测试页面

![Example](/assets/example_page.png)
