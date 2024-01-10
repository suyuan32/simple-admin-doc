---
order: 4
title: "项目规范"
---

## API 规范

- API Types 命名请求遵循 Req 结尾为请求, Resp 结尾为返回值, Info 结尾为信息体
- 建议添加详细注释用于生成 swagger

## RPC 规范

- proto 文件拆分定义在 desc 文件夹中
- 可选字段使用 optional

## Ent 规范

- 所有字段都应该填写注释（Comment）, 用于全局注释生成
