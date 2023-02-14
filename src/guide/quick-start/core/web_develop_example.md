---
order: 2
title: 'Frontend Development'
---

## Web side, department as an example

Run the command:

```shell
  goctls frontend vben --api_file=/home/ryan/GolandProjects/simple-admin-core/api/desc/department.api --o=./ --folder_name=sys --prefix=sys-api --sub_folder=department
```

The api, model, view, locale will be automatically generated, you need to modify the columns in data.ts and the translation in locale

### The request message returns the display effect

> The display effect of message mode is as follows

![example](/assets/example_validator_message_mode.png)

> The modal mode display effect is as follows

![example](/assets/example_validator_modal_mode.png)

> It is recommended to use the i18n plugin, which can directly copy the path

![I18n](/assets/i18n_ext.png)
![I18n](/assets/copy_translation_path.png)

### New menu

![Menu](/assets/add_example_menu.png)

### Add menu permissions

![Menu](/assets/add_example_authority.png)

> The introduction of the API is also best set in Chinese and English

![Example](/assets/example_api_desc_title_en.png)
![Example](/assets/example_api_desc_title_zh.png)

### New API

![Example](/assets/add_example_api_zh.png)

### Add API permissions

![Example](/assets/add_example_authority_zh.png)

### Test page

![Example](/assets/example_page.png)