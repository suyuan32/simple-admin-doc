---
order: 4
title: "Project Specification"
---

## API specification

- API Types naming requests follow Req ending with request, Resp ending with return value, Info ending with information body
- It is recommended to add detailed comments for generating swagger

## RPC specification

- The proto file split is defined in the desc folder
- `SetNotEmpty` function only supports `string and int - float` types, only `Set` can be used for bool or time.

::: info
If you want to judge `string,bool` if are empty, you need to set the field as `optinal` in the `proto` file, set the field as a pointer in the `api` layer, and judge `if in. val != nil`
:::
