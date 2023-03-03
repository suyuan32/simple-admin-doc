---
order: 4
title: 'Project Specification'
---

## API specification

- API Types naming requests follow Req ending with request, Resp ending with return value, Info ending with information body
- It is recommended to add detailed comments for generating swagger

## RPC specification

- The proto file split is defined in the desc folder
- Since proto3 has a default value such as bool's default value is false, it is impossible to judge whether to update, so it is recommended to use a number above 1 for the status. If you use bool, you need to carry this parameter every time you update
- `SetNotEmpty` function only supports string and int - float types, only `Set` can be used for bool