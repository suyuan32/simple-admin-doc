---
order: 7
title: "Proto To Api"
---

> goctls >= 1.5.14

This command is used to generate field content in the api through proto. It is mainly used to generate structures other than CRUD code generation, that is, convert extra messages in rpc into the type of the api, making it more convenient for proto to access the api.

```shell
$ goctls extra proto2api -h
Generate additional data for API, such as type and service, through proto.

Usage:
  goctls extra proto2api [flags]

Flags:
  -a, --api_path string     API file path. If it is empty, the output will be displayed on the console.
  -g, --group_name string   Group name. If it is empty, it will be the lowercase of the model name.
  -h, --help                help for proto2api
  -j, --json_style string   The format of the JSON fields, defaulting to goZero. (default "goZero")
  -m, --model_name string   Model name used for filtering RPC.
      --multiple            Whether it is a proto for multiple services.
  -p, --proto_path string   Proto file path. Note that it is the proto file in the root directory, not in the desc folder.

```

::: warning
The proto file must contain the corresponding `group` annotations.
The api file must already have `type` and `service` defined, otherwise it is recommended to copy from the console.
:::

## Example

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

We tested to generate the oauth provider into the api file, and found that all methods in the same group (except CRUD) will be automatically generated. This command greatly facilitates the development of API.
