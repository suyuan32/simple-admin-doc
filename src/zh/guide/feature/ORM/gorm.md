---
order: 1
title: "GORM"
---

#### [官方文档](https://gorm.io/)

## 导入包

```go
import "github.com/suyuan32/simple-admin-common/orm/gorm"
```

## config 文件声明

```go
type Config struct {
 zrpc.RpcServerConf
 DatabaseConf gorm.Conf
 RedisConf    redis.RedisConf
}
```

## `etc/*.yaml` 文件配置

```yaml
DatabaseConf:
  Type: mysql
  Path: "127.0.0.1"
  Port: 3306
  Config: charset=utf8mb4&parseTime=True&loc=Local
  DBName: simple_admin
  Username:
  Password:
  MaxIdleConn: 10
  MaxOpenConn: 100
  LogMode: error
```

## 初始化

```go
    db, err := c.DatabaseConf.NewGORM()
 if err != nil {
  logx.Errorw(logmessage.DatabaseError, logx.Field("detail", err.Error()))
  return nil
 }
```

[Init](https://github.com/suyuan32/simple-admin-core/blob/master/rpc/internal/svc/service_context.go)

## 定义 Model

```go
package model

import "gorm.io/gorm"

type Api struct {
 gorm.Model
 Path        string `json:"path" gorm:"comment:api path"`                    // api path
 Description string `json:"description" gorm:"comment:api description"`      // api description
 ApiGroup    string `json:"apiGroup" gorm:"comment:api group"`               // api group
 Method      string `json:"method" gorm:"default:POST;comment: http method"` // http method
}

```

[Model](https://github.com/suyuan32/simple-admin-core/tree/master/rpc/internal/model)

## 获取数据

```go
package logic

import (
 "context"

 "github.com/suyuan32/simple-admin-common/msg/logmsg"
 "github.com/suyuan32/simple-admin-core/rpc/internal/model"
 "github.com/suyuan32/simple-admin-core/rpc/internal/svc"
 "github.com/suyuan32/simple-admin-core/rpc/types/core"

 "github.com/zeromicro/go-zero/core/logx"
 "google.golang.org/grpc/codes"
 "google.golang.org/grpc/status"
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

func (l *GetApiListLogic) GetApiList(in *core.ApiPageReq) (*core.ApiListResp, error) {
 db := l.svcCtx.DB.Model(&model.Api{})
 var apis []model.Api

 if in.Path != "" {
  db = db.Where("path LIKE ?", "%"+in.Path+"%")
 }

 if in.Description != "" {
  db = db.Where("description LIKE ?", "%"+in.Description+"%")
 }

 if in.Method != "" {
  db = db.Where("method = ?", in.Method)
 }

 if in.Group != "" {
  db = db.Where("api_group = ?", in.Group)
 }

 result := db.Limit(int(in.Page.PageSize)).Offset(int((in.Page.Page - 1) * in.Page.PageSize)).
  Order("api_group desc").Find(&apis)

 if result.Error != nil {
  logx.Errorw(logmessage.DatabaseError, logx.Field("detail", result.Error.Error()))
  return nil, status.Error(codes.Internal, result.Error.Error())
 }

 resp := &core.ApiListResp{}
 resp.Total = uint64(result.RowsAffected)
 for _, v := range apis {
  resp.Data = append(resp.Data, &core.ApiInfo{
   Id:          uint64(v.ID),
   CreatedAt:    v.CreatedAt.UnixMilli(),
   Path:        v.Path,
   Description: v.Description,
   Group:       v.ApiGroup,
   Method:      v.Method,
  })
 }
 return resp, nil
}
```

> 使用 l.svc.DB.Model().Where().Find() 即可

[GetApiList](https://github.com/suyuan32/simple-admin-core/blob/master/rpc/internal/logic/getapilistlogic.go)

[GORM](https://gorm.io/)
