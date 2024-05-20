---
order: 4
title: "Project Specification"
head:
  - - meta
    - name: keywords
      content: specification, simple admin, standard
---

## API specification

- API Types naming requests follow `request` ending with `Req` , `return value` ending with `Resp` , `information body` ending with `Info`
- It is recommended to add detailed comments for generating swagger

## RPC specification

- The proto file split is defined in the desc folder
- Optional fields use `optional`

## Ent specification

- All fields should be filled with comments (Comment) for global comment generation