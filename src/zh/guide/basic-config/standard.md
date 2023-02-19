---
order: 4
title: '项目规范'
---

## API 规范

- API Types 命名请求遵循 Req 结尾为请求, Resp 结尾为返回值, Info 结尾为信息体
- 建议添加详细注释用于生成swagger

## RPC 规范

- proto 文件拆分定义在desc文件夹中
- 由于proto3有默认值如bool的默认值为false,导致无法判断是否更新，所以建议状态使用数字1以上，使用bool的话需要每次更新都要携带该参数
- set not empty 只支持 string 和 int - float 类型，对于bool只能使用set