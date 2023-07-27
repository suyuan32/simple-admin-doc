---
order: 7
title: "Proto转Api"
---

# Proto 转 Api 命令

> goctls >= 1.5.14

该命令用于通过 proto 生成 api 中的字段内容，使得 proto 接入 api 更便捷

```shell
$ goctls extra proto2api -h
通过 proto 生成 api 额外数据，如 type 和 service

Usage:
  goctls extra proto2api [flags]

Flags:
  -a, --api_path string     api 文件路径，若为空则会输出到控制台
  -g, --group_name string   分组名称，若为空则为模型名称的小写
  -h, --help                help for proto2api
  -j, --json_style string   JSON 字段的格式，默认为 goZero (default "goZero")
  -m, --model_name string   模型名称，用于过滤 rpc
      --multiple            是否为多 service 的 proto
  -p, --proto_path string   proto 文件路径，注意为根目录下的 proto 不是 desc 文件夹中的 proto 文件

```

::: warning
proto 文件中必须含有对应的 group 注释
api 文件中必须已有 type 和 service, 否则建议从控制台复制
:::

## 例子

```shell
goctls extra proto2api -m OauthProvider -p D:/projects/simpleadmin/feature-workspace/simple-admin-core/rpc/core.proto
-a D:/projects/simpleadmin/feature-workspace/simple-admin-core/api/desc/core/api.api
```

```text
syntax = "v1"

info(
    title: "API management"
    desc: "API management is used to register APIs and manage APIs"
    author: "Ryan Su"
    email: "yuansu.china.work@gmail.com"
    version: "v1.0"
)

import "../base.api"

type (
    // OauthRedirectResp
    OauthRedirectResp {
        // Url
        Url  string `json:"url"`

    }

    // UserInfo
    UserInfo {
        // CreatedAt
        CreatedAt  *int64 `json:"createdAt,optional"`

        // UpdatedAt
        UpdatedAt  *int64 `json:"updatedAt,optional"`

        // Status
        Status  *uint32 `json:"status,optional"`

        // Username
        Username  *string `json:"username,optional"`

        // Password
        Password  *string `json:"password,optional"`

        // Nickname
        Nickname  *string `json:"nickname,optional"`

        // HomePath
        HomePath  *string `json:"homePath,optional"`

        // RoleIds
        RoleIds  []uint64 `json:"roleIds"`

        // Mobile
        Mobile  *string `json:"mobile,optional"`

        // Avatar
        Avatar  *string `json:"avatar,optional"`

        // DepartmentId
        DepartmentId  *uint64 `json:"departmentId,optional"`

        // PositionIds
        PositionIds  []uint64 `json:"positionIds"`

        // RoleCodes
        RoleCodes  []string `json:"roleCodes"`

    }

    // CallbackReq
    CallbackReq {
        // State
        State  string `json:"state"`

        // Code
        Code  string `json:"code"`

    }

    // OauthLoginReq
    OauthLoginReq {
        // State
        State  string `json:"state"`

        // Provider
        Provider  string `json:"provider"`

    }

    // The API information | API信息
    ApiInfo {
        BaseIDInfo

        // Translated Name | 多语言名称
        Trans string `json:"trans,optional"`

        // API path | API路径
        Path *string `json:"path,optional" validate:"omitempty,min=1,max=80"`

        // API Description | API 描述
        Description *string `json:"description,optional" validate:"omitempty,max=100"`

        // API group | API分组
        Group *string `json:"group,optional" validate:"omitempty,min=1,max=20"`

        // API request method e.g. POST | API请求类型 如POST
        Method *string `json:"method,optional" validate:"omitempty,uppercase,min=3,max=7"`

        // Whether is required | 是否是必须的 api
        IsRequired *bool `json:"isRequired,optional"`
    }

    // The response data of API list | API列表数据
    ApiListResp {
        BaseDataInfo

        // API list data | API 列表数据
        Data ApiListInfo `json:"data"`
    }

    // API list data | API 列表数据
    ApiListInfo {
        BaseListInfo

        // The API list data | API列表数据
        Data  []ApiInfo  `json:"data"`
    }

    // Get API list request params | API列表请求参数
    ApiListReq {
        PageInfo

        // API path | API路径
        Path *string `json:"path,optional" validate:"omitempty,max=200"`

        // API Description | API 描述
        Description *string `json:"description,optional" validate:"omitempty,max=100"`

        // API group | API分组
        Group *string `json:"group,optional" validate:"omitempty,max=20"`

        // API request method e.g. POST | API请求类型 如POST
        Method *string `json:"method,optional" validate:"omitempty,uppercase,min=3,max=7"`

        // Whether is required | 是否是必须的 api
        IsRequired *bool `json:"isRequired,optional"`
    }

    // API information response | API信息返回体
    ApiInfoResp {
        BaseDataInfo

        // API information | API数据
        Data ApiInfo `json:"data"`
    }
)

@server(
    jwt: Auth
    group: api
    middleware: Authority
)

service Core {
    // oauthLogin
    @handler oauthLogin
    post /oauthprovider/oauth_login (OauthLoginReq) returns (OauthRedirectResp)

    // oauthCallback
    @handler oauthCallback
    post /oauthprovider/oauth_callback (CallbackReq) returns (UserInfo)

    // Create API information | 创建API
    @handler createApi
    post /api/create(ApiInfo) returns (BaseMsgResp)

    // Update API information | 创建API
    @handler updateApi
    post /api/update(ApiInfo) returns (BaseMsgResp)

    // Delete API information | 删除API信息
    @handler deleteApi
    post /api/delete (IDsReq) returns (BaseMsgResp)

    // Get API list | 获取API列表
    @handler getApiList
    post /api/list (ApiListReq) returns (ApiListResp)

    // Get API by ID | 通过ID获取API
    @handler getApiById
    post /api (IDReq) returns (ApiInfoResp)
}

```

我们测试将 oauth provider 生成到 api 的文件中，发现会自动生成同一个 group 内的所有方法（除了 CRUD）， 这个命令极大方便了 api 的开发
