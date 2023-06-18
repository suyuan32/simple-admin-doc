---
order: 1
title: "Ent"
---

## Ent

::: info
[Official Doc](https://entgo.io/docs/getting-started) [Official Example](https://github.com/ent/ent/blob/master/examples/README.md)\
[Tutorial Project](https://github.com/suyuan32/simple-admin-example-ent) helps you to imporve the skills
:::

## Quick Start

### Install Ent

```shell
go get -d entgo.io/ent/cmd/ent
```

### Initialize code

Run in rpc directory

```shell
# Creat User schema
go run -mod=mod entgo.io/ent/cmd/ent init User

# Generate code，use template ， simple admin core add Page template to make it easier to do pagination
go run -mod=mod entgo.io/ent/cmd/ent generate --template glob="./ent/template/*.tmpl" ./ent/schema
```

### Defined schema

In rpc/ent ，you mainly modify files in schema directory. It is used to define all the models，most of other files in other directories are
generated. Mixin is used to define common fields, such as

```go
package schema

import (
 "entgo.io/ent"
 "entgo.io/ent/dialect/entsql"
 "entgo.io/ent/schema"
 "entgo.io/ent/schema/edge"
 "entgo.io/ent/schema/field"

 "github.com/suyuan32/simple-admin-core/rpc/ent/schema/mixins"
)

type Role struct {
 ent.Schema
}

func (Role) Fields() []ent.Field {
 return []ent.Field{
  field.String("name").Comment("role name | 角色名"),
  field.String("value").Unique().Comment("role value for permission control in front end | 角色值，用于前端权限控制"),
  field.String("default_router").Default("dashboard").Comment("default menu : dashboard | 默认登录页面"),
  field.String("remark").Default("").Comment("remark | 备注"),
  field.Uint32("order_no").Default(0).Comment("order number | 排序编号"),
 }
}

func (Role) Mixin() []ent.Mixin {
 return []ent.Mixin{
  // common field
  mixins.BaseMixin{},
  mixins.StatusMixin{},
 }
}

func (Role) Edges() []ent.Edge {
 return []ent.Edge{
  // 声明关系, ent 的关系用 edge 表示
  edge.To("menus", Menu.Type),
 }
}

func (Role) Annotations() []schema.Annotation {
 return []schema.Annotation{
  entsql.Annotation{Table: "sys_roles"},
 }
}

```

### Mixin Introduction

Currently, the project provides several Mixins located in `"github.com/suyuan32/simple-admin-common/orm/ent/mixins"`

- id: Provide self-incrementing integer `id`, `created_at`, `updated_at`
- uuid: Provide `UUID` type `id` as primary key, `created_at`, `updated_at`
- status: Provide `status` field
- sort: Provide `sort` field

#### uuidx provides two methods for converting uuid

- uuidx.ParseUUIDSlice is used to convert the string array of uuid into the uuid array type of ent
- uuidx.ParseUUIDString is used to convert uuid string to uuid type

> Soft delete can visit [Soft Delete](https://entgo.io/docs/interceptors/#soft-delete)

### Initialize

See rpc/internal/svc/service_context.go

```go
package svc

import (
 "github.com/suyuan32/simple-admin-core/rpc/ent"
 "github.com/suyuan32/simple-admin-core/rpc/internal/config"

 "github.com/zeromicro/go-zero/core/logx"
 "github.com/zeromicro/go-zero/core/stores/redis"
)

type ServiceContext struct {
 Config config.Config
 DB     *ent.Client
 Redis  *redis.Redis
}

func NewServiceContext(c config.Config) *ServiceContext {
 db := ent.NewClient(
  ent.Log(logx.Info), // logger
  ent.Driver(c.DatabaseConf.GetCacheDriver(c.RedisConf)),
  ent.Debug(), // debug mode
 )

 // initialize redis
 rds := c.RedisConf.NewRedis()
 if !rds.Ping() {
  logx.Error("Initialize redis failed")
  return nil
 }
 logx.Info("Initialize redis connection successfully")

 return &ServiceContext{
  Config: c,
  DB:     db,
  Redis:  rds,
 }
}

```

### Ent Driver

::: warning
There are two drivers for ent，cache and no cache.
:::

> Cache （Use Context control the cache）

```go
db := ent.NewClient(
    ent.Log(logx.Info), // logger
    ent.Driver(c.DatabaseConf.NewCacheDriver(c.RedisConf)),
    ent.Debug(), // debug mode
)
```

::: info
Controlling the cache is very simple. By default, the cache is enabled. There are several ways to control the cache:

```go
// For any request, the cache is controlled by l.ctx, the following is the default cache enabled
result, err := l.svcCtx.DB.API.Get(l.ctx, in.Id)

// The following is to skip the cache
result, err := l.svcCtx.DB.API.Get(entcache.Skip(l.ctx), in.Id)

// The following is to skip and delete the cache. Unlike skip, skip just skips the cache in a single line. In fact, the cache is still there, and other statements can still get his cache
result, err := l.svcCtx.DB.API.Get(entcache.Evict(l.ctx), in.Id)

```

:::

> No cache (Changes will show immediately)

```go
db := ent.NewClient(
    ent.Log(logx.Info), // logger
    ent.Driver(c.DatabaseConf.NewNoCacheDriver()),
    ent.Debug(), // debug mode
)
```

::: info
[Ent cache Document](https://github.com/ariga/entcache)
:::

### Usage in logic

Create an API `rpc/internal/logic/update_role_status_logic.go`

```go
package api

import (
	"context"

	"github.com/suyuan32/simple-admin-core/rpc/internal/svc"
	"github.com/suyuan32/simple-admin-core/rpc/internal/utils/errorhandler"
	"github.com/suyuan32/simple-admin-core/rpc/types/core"

	"github.com/zeromicro/go-zero/core/logx"

	"github.com/suyuan32/simple-admin-common/i18n"
)

type CreateApiLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewCreateApiLogic(ctx context.Context, svcCtx *svc.ServiceContext) *CreateApiLogic {
	return &CreateApiLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *CreateApiLogic) CreateApi(in *core.ApiInfo) (*core.BaseIDResp, error) {
	result, err := l.svcCtx.DB.API.Create().
		SetPath(in.Path).
		SetDescription(in.Description).
		SetAPIGroup(in.ApiGroup).
		SetMethod(in.Method).
		Save(l.ctx)
	if err != nil {
		return nil, errorhandler.DefaultEntError(l.Logger, err, in)
	}

	return &core.BaseIDResp{Id: result.ID, Msg: i18n.CreateSuccess}, nil
}

```

### Query data

See [Predicates](http://ent.ryansu.pro/#/zh-cn/predicates)

```go
package api

import (
	"context"

	"github.com/suyuan32/simple-admin-core/rpc/ent/predicate"

	"github.com/suyuan32/simple-admin-core/rpc/ent/api"

	"github.com/suyuan32/simple-admin-core/rpc/internal/svc"
	"github.com/suyuan32/simple-admin-core/rpc/internal/utils/errorhandler"
	"github.com/suyuan32/simple-admin-core/rpc/types/core"

	"github.com/zeromicro/go-zero/core/logx"
)

type GetApiListLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewGetApiListLogic(ctx context.Context, svcCtx *svc.ServiceContext) *GetApiListLogic {
	return &GetApiListLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *GetApiListLogic) GetApiList(in *core.ApiListReq) (*core.ApiListResp, error) {
	var predicates []predicate.API
	if in.Path != "" {
		predicates = append(predicates, api.PathContains(in.Path))
	}
	if in.Description != "" {
		predicates = append(predicates, api.DescriptionContains(in.Description))
	}
	if in.ApiGroup != "" {
		predicates = append(predicates, api.APIGroupContains(in.ApiGroup))
	}
	if in.Method != "" {
		predicates = append(predicates, api.Method(in.Method))
	}
	result, err := l.svcCtx.DB.API.Query().Where(predicates...).Page(l.ctx, in.Page, in.PageSize)
	if err != nil {
		return nil, errorhandler.DefaultEntError(l.Logger, err, in)
	}

	resp := &core.ApiListResp{}
	resp.Total = result.PageDetails.Total

	for _, v := range result.List {
		resp.Data = append(resp.Data, &core.ApiInfo{
			Id:          v.ID,
			CreatedAt:   v.CreatedAt.UnixMilli(),
			Path:        v.Path,
			Description: v.Description,
			ApiGroup:    v.APIGroup,
			Method:      v.Method,
		})
	}

	return resp, nil
}

```

### Query raw sql

If you want to execute raw sql ，you need to modify makefile ， add flag --feature sql/execquery

```shell
go run -mod=mod entgo.io/ent/cmd/ent generate --template glob="./rpc/ent/template/*.tmpl" ./rpc/ent/schema --feature sql/execquery
```

and then you can use client.QueryContext to execute raw sql

```go
students, err := client.QueryContext(context.Background(), "select * from student")
```

### Project add pagination template by default, you can copy this template to other project

In ent/template/pagination.tmpl，add flag --template glob="./rpc/ent/template/\*.tmpl" when generating code and
then you can use pagination like below:

```go
apis, err := l.svcCtx.DB.API.Query().Where(predicates...).Page(l.ctx, in.Page, in.PageSize)
```

> Note： Order operation needs to be set in Page function, we support Filter for query at the same time

```go
apis, err := l.svcCtx.DB.API.Query().Where(predicates...).Page(l.ctx, in.Page, in.PageSize, func(pager *ent.APIPager) {
    pager.Order = ent.Asc(api.FieldID)
    pager.Filter = func(query *ent.APIQuery) (*ent.APIQuery, error) {
        return query, nil
    }
})
```

By default, we order by ID, you do not need to set it.

> Set Not Nil template

Used to partially update data, for example:

```go
func (l *UpdateDepartmentLogic) UpdateDepartment(in *core.DepartmentInfo) (*core.BaseResp, error) {
	err := l.svcCtx.DB.Department.UpdateOneID(in.Id).
		SetNotNilStatus(uint8(in.Status)).
		SetNotNilSort(in.Sort).
		SetNotNilName(in.Name).
		SetNotNilAncestors(in.Ancestors).
		SetNotNilLeader(in.Leader).
		SetNotNilPhone(in.Phone).
		SetNotNilEmail(in.Email).
		SetNotNilRemark(in.Remark).
		SetNotNilParentID(in.ParentId).
		Exec(l.ctx)
	if err != nil {
		switch {
		case ent.IsNotFound(err):
			logx.Errorw(err.Error(), logx.Field("detail", in))
			return nil, statuserr.NewInvalidArgumentError(i18n.TargetNotFound)
		case ent.IsConstraintError(err):
			logx.Errorw(err.Error(), logx.Field("detail", in))
			return nil, statuserr.NewInvalidArgumentError(i18n.UpdateFailed)
		default:
			logx.Errorw(logmsg.DatabaseError, logx.Field("detail", err.Error()))
			return nil, statuserr.NewInternalError(i18n.DatabaseError)
		}
	}

	return &core.BaseResp{Msg: i18n.UpdateSuccess}, nil
}
```

::: warning
SetNotNil function is used to update data only when pointer is not nil.
:::

### Common functions used in query

```go
// .ExecX() execute query，don't return anything
client.Student.UpdateOneID(1).SetName("Jack").ExecX(context.Background())

// .Exec() execute query and return error
err := client.Student.UpdateOneID(1).SetName("Jack").Exec(context.Background())

// .Save() execute query and  return error and student data
s, err := client.Student.Create().
SetName("Jack").
SetAddress("Road").
SetAge(10).
Save(context.Background())

// .SaveX() execute query and  return student data without error
s := client.Student.Create().
SetName("Jack").
SetAddress("Road").
SetAge(10).
SaveX(context.Background())
```

### Transaction

The project provides the WithTx method to use database transactions locally, taking updating user information as an example：

```go

func (l *UpdateUserLogic) UpdateUser(in *core.UserInfo) (*core.BaseResp, error) {
	err := entx.WithTx(l.ctx, l.svcCtx.DB, func(tx *ent.Tx) error {
		updateQuery := tx.User.UpdateOneID(uuidx.ParseUUIDString(in.Id)).
			SetNotNilUsername(in.Username).
			SetNotNilNickname(in.Nickname).
			SetNotNilEmail(in.Email).
			SetNotNilMobile(in.Mobile).
			SetNotNilAvatar(in.Avatar).
			SetNotNilHomePath(in.HomePath).
			SetNotNilDescription(in.Description).
			SetNotNilDepartmentID(in.DepartmentId)

		if in.Password != nil {
			updateQuery = updateQuery.SetNotNilPassword(utils.BcryptEncrypt(in.Password))
		}

		if in.RoleIds != nil {
			err := l.svcCtx.DB.User.UpdateOneID(uuidx.ParseUUIDString(in.Id)).ClearRoles().Exec(l.ctx)
			if err != nil {
				return err
			}

			updateQuery = updateQuery.AddRoleIDs(in.RoleIds...)
		}

		if in.PositionIds != nil {
			err := l.svcCtx.DB.User.UpdateOneID(uuidx.ParseUUIDString(in.Id)).ClearPositions().Exec(l.ctx)
			if err != nil {
				return err
			}

			updateQuery = updateQuery.AddPositionIDs(in.PositionIds...)
		}

		return updateQuery.Exec(l.ctx)
	})
	if err != nil {
		return nil, errorhandler.DefaultEntError(err, in)
	}

	return &core.BaseResp{
		Msg: i18n.Success,
	}, nil
}
```

> Ent schema import tool [ent import](https://github.com/ariga/entimport)

### Common problem

> How to generate database comments?

Just add `.Annotations(entsql.WithComments(true))` after the corresponding field

```go
package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/dialect/entsql"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
	"github.com/suyuan32/simple-admin-common/orm/ent/mixins"
)

type API struct {
	ent.Schema
}

func (API) Fields() []ent.Field {
	return []ent.Field{
		field.String("path").Comment("API path | API 路径").Annotations(entsql.WithComments(true)),
		field.String("description").Comment("API description | API 描述").Annotations(entsql.WithComments(true)),
		field.String("api_group").Comment("API group | API 分组").Annotations(entsql.WithComments(true)),
		field.String("method").Default("POST").Comment("HTTP method | HTTP 请求类型").Annotations(entsql.WithComments(true)),
	}
}

func (API) Mixin() []ent.Mixin {
	return []ent.Mixin{
		mixins.BaseIDMixin{},
	}
}

func (API) Edges() []ent.Edge {
	return nil
}

func (API) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields("path", "method").
			Unique(),
	}
}

func (API) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entsql.Annotation{Table: "sys_apis"},
	}
}

```
