---
order: 4
title: "项目规范"
---

## API 规范

- API Types 命名请求遵循 Req 结尾为请求, Resp 结尾为返回值, Info 结尾为信息体
- 建议添加详细注释用于生成 swagger

## RPC 规范

- proto 文件拆分定义在 desc 文件夹中
- `SetNotEmpty` 只支持 string 和 int - float 类型，对于 bool 只能使用 `Set`

::: info
如果你想判断 `string,bool` 是否为空，需要在 `proto` 文件设置字段为 `optinal`, 在 `api` 层设置字段为指针，在 `set` 时判断下 `if in.val != nil`
:::
