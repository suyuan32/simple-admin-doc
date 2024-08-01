---
order: 1
title: "Ent"
head:
  - - meta
    - name: keywords
      content: ent, entgo, orm, golang orm, simple admin orm
---

## Ent 快速入门

::: info
[官方文档](https://entgo.io/zh/docs/getting-started/) [官方例子](https://github.com/ent/ent/blob/master/examples/README.md) [schema 中文文档(推荐)](https://suyuan32.github.io/ent-chinese-doc/#/zh-cn/getting-started) 

[教学项目](https://github.com/suyuan32/simple-admin-example-ent) 帮助你快速提升

<BiliBili bvid="BV17C4y157WL" />
:::

## 实战

> 安装

```shell
go get -d entgo.io/ent/cmd/ent
```

> 初始化代码

在 rpc 执行

```shell
# 创建 User 模板
go run -mod=mod entgo.io/ent/cmd/ent init User

# 生成代码，使用 template ， simple admin core 添加了 Page 模板实现简便的分页查询
go run -mod=mod entgo.io/ent/cmd/ent generate --template glob="./ent/template/*.tmpl" ./ent/schema
```

> 定义数据模型

在 rpc/ent 中，一般只需要关注 schema 文件夹，里面定义了模型文件，其他文件夹和文件基本都是自动生成的, mixin 用于共用字段, 例如

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
  // field 定义字段， string 声明类型, comment 声明注释， default 声明默认值, unique 声明唯一
  field.String("value").Unique().Comment("role value for permission control in front end | 角色值，用于前端权限控制"),
  field.String("default_router").Default("dashboard").Comment("default menu : dashboard | 默认登录页面"),
  field.String("remark").Default("").Comment("remark | 备注"),
  field.Uint32("order_no").Default(0).Comment("order number | 排序编号"),
 }
}

func (Role) Mixin() []ent.Mixin {
 return []ent.Mixin{
  // 嵌入公用字段
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

### Mixin 介绍

目前项目提供了多种 Mixin 位于 `"github.com/suyuan32/simple-admin-common/orm/ent/mixins"`

- id: 提供自增整数 id, created_at, updated_at
- uuid: 提供 uuid 类型的 id 作为主键, created_at, updated_at
- status: 提供状态字段 status
- sort: 提供排序字段

::: warning
目前只支持 uint64, int64, uint32, int32, string 类型的 id, 其他类型需手动修改代码
:::

#### uuidx 提供两个方法用于转换 uuid

- uuidx.ParseUUIDSlice 用于将 uuid 的 string 数组转化为 ent 的 uuid 数组类型
- uuidx.ParseUUIDString 用于将 uuid 的 string 转化为 uuid 类型

### 软删除可查看 [Soft Delete](https://entgo.io/docs/interceptors/#soft-delete) [公众号](https://mp.weixin.qq.com/s/MxHfmuWv-_epkQXEZrnLsg)

### 初始化并添加全局引用

参考 rpc/internal/svc/service_context.go

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

### Ent 驱动

::: warning
ent driver 有两种驱动，带缓存和不带缓存
:::

> 带缓存 （使用 context 控制缓存）

::: warning
由于 entcache 有 bug, 我们暂时将缓存驱动删除了，改为使用缓存模板
:::

```go
db := ent.NewClient(
    ent.Log(logx.Info), // logger
    ent.Driver(c.DatabaseConf.NewCacheDriver(c.RedisConf)),
    ent.Debug(), // debug mode
)
```

::: info
控制缓存非常简单，默认是有缓存的，有以下几种方法控制缓存：

```go
// 对于任何请求都是通过 l.ctx 控制缓存，下面是默认启用缓存
result, err := l.svcCtx.DB.API.Get(l.ctx, in.Id)

// 下面是跳过缓存
result, err := l.svcCtx.DB.API.Get(entcache.Skip(l.ctx), in.Id)

// 下面是跳过并删除缓存，与skip不同， skip 只是单行跳过缓存，实际上缓存还在，其他语句还是可以获得他的缓存的
result, err := l.svcCtx.DB.API.Get(entcache.Evict(l.ctx), in.Id)

```

:::

> 不带缓存 (数据立即更新)

```go
db := ent.NewClient(
    ent.Log(logx.Info), // logger
    ent.Driver(c.DatabaseConf.NewNoCacheDriver()),
    ent.Debug(), // debug mode
)
```

::: info
[Ent cache 文档](https://github.com/ariga/entcache)
:::

### 使用效果

新建 API `rpc/internal/logic/api/create_api_logic.go`

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

### 查询数据

查看文档 [断言](http://ent.ryansu.tech/#/zh-cn/predicates)

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

### 执行 raw sql

若要支持纯 sql ，需要修改 makefile 生成代码， 添加 --feature sql/execquery

```shell
go run -mod=mod entgo.io/ent/cmd/ent generate --template glob="./rpc/ent/template/*.tmpl" ./rpc/ent/schema --feature sql/execquery
```

即可通过 client.QueryContext 调用

```go
students, err := client.QueryContext(context.Background(), "select * from student")
```

### 项目默认添加了 page 模板

位于 ent/template/pagination.tmpl，生成代码时通过 --template glob="./rpc/ent/template/\*.tmpl" 导入, 提供简便的分页功能,
如果你的其他项目也想要这个分页功能需要将 template 文件夹复制到新项目的 ent 文件夹中。

```go
apis, err := l.svcCtx.DB.API.Query().Where(predicates...).Page(l.ctx, in.Page, in.PageSize)
```

> 注意： 排序需要放到 Page 中, 同时支持 Filter 对 query 进行过滤

```go
apis, err := l.svcCtx.DB.API.Query().Where(predicates...).Page(l.ctx, in.Page, in.PageSize, func(pager *ent.APIPager) {
    pager.Order = ent.Asc(api.FieldID)
    pager.Filter = func(query *ent.APIQuery) (*ent.APIQuery, error) {
        return query, nil
    }
})
```

默认使用 ID 排序，可以不用设置

> Set Not Nil 模板

用于部分更新数据，例如：

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
SetNotNil 用于更新数据，若指针为 nil 则不更新
:::

> 常见结果返回函数，用于 query 末尾

```go
// .ExecX() 只执行，不返回错误和数据
client.Student.UpdateOneID(1).SetName("Jack").ExecX(context.Background())

// .Exec() 执行并返回错误
err := client.Student.UpdateOneID(1).SetName("Jack").Exec(context.Background())

// .Save() 执行并返回结果数据和错误， 例如下面 s 保存 student 对象
s, err := client.Student.Create().
SetName("Jack").
SetAddress("Road").
SetAge(10).
Save(context.Background())

// .SaveX() 执行并返回结果数据， 例如下面 s 保存 student 对象
s := client.Student.Create().
SetName("Jack").
SetAddress("Road").
SetAge(10).
SaveX(context.Background())
```

> cache 缓存模板

```go
l.svcCtx.DB.User.Query().GetCache(l.ctx, l.svcCtx.Redis, user.IDEQ(*req.Id), *req.Id string, 3 * time.Second)
```

### 事务

项目提供 WithTx 方法可以在本地使用数据库事务, 以更新用户信息为例:

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
			err := tx.DB.User.UpdateOneID(uuidx.ParseUUIDString(in.Id)).ClearRoles().Exec(l.ctx)
			if err != nil {
				return err
			}

			updateQuery = updateQuery.AddRoleIDs(in.RoleIds...)
		}

		if in.PositionIds != nil {
			err := tx.User.UpdateOneID(uuidx.ParseUUIDString(in.Id)).ClearPositions().Exec(l.ctx)
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

### [Ent schema 导入工具](/zh/guide/quick-start/extra/3-ent_template.html#extra-ent-import-数据库结构导出到-schema)

### 常见问题

> 如何生成数据库注释？

只需要在对应字段后面添加 `.Annotations(entsql.WithComments(true))`即可

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

> 不要在 Time 类型使用 `Nillable()`