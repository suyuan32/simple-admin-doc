---
order: 4
title: 'Global Variables'
---

# Global Variables

> We define the global variables in internal/svc/servicecontext.go, and initialize them. \
For example:

```go
package svc

import (
	"github.com/suyuan32/simple-admin-core/api/internal/config"
	"github.com/suyuan32/simple-admin-core/api/internal/middleware"
	"github.com/suyuan32/simple-admin-core/pkg/i18n"
	"github.com/suyuan32/simple-admin-core/rpc/coreclient"

	"github.com/casbin/casbin/v2"
	"github.com/zeromicro/go-zero/core/stores/redis"
	"github.com/zeromicro/go-zero/rest"
	"github.com/zeromicro/go-zero/zrpc"
)

type ServiceContext struct {
	Config    config.Config
	Authority rest.Middleware
	CoreRpc   coreclient.Core
	Redis     *redis.Redis
	Casbin    *casbin.Enforcer
	Trans     *i18n.Translator
}

func NewServiceContext(c config.Config) *ServiceContext {
	rds := redis.MustNewRedis(c.RedisConf)

	cbn := c.CasbinConf.MustNewCasbinWithRedisWatcher(c.DatabaseConf.Type, c.DatabaseConf.GetDSN(), c.RedisConf)

	trans := i18n.NewTranslator(i18n.LocaleFS)

	return &ServiceContext{
		Config:    c,
		Authority: middleware.NewAuthorityMiddleware(cbn, rds, trans).Handle,
		CoreRpc:   coreclient.NewCore(zrpc.NewClientIfEnable(c.CoreRpc)),
		Redis:     rds,
		Casbin:    cbn,
		Trans:     trans,
	}
}

```

> How to use it?

```go
package logic

import (
 "context"

 "github.com/suyuan32/simple-admin-core/pkg/ent"
 "github.com/suyuan32/simple-admin-core/pkg/msg/i18n"
 "github.com/suyuan32/simple-admin-core/pkg/statuserr"
 "github.com/suyuan32/simple-admin-core/rpc/internal/svc"
 "github.com/suyuan32/simple-admin-core/rpc/types/core"

 "github.com/zeromicro/go-zero/core/errorx"
 "github.com/zeromicro/go-zero/core/logx"
)

type CreateOrUpdateApiLogic struct {
 ctx    context.Context
 svcCtx *svc.ServiceContext
 logx.Logger
}

func NewCreateOrUpdateApiLogic(ctx context.Context, svcCtx *svc.ServiceContext) *CreateOrUpdateApiLogic {
 return &CreateOrUpdateApiLogic{
  ctx:    ctx,
  svcCtx: svcCtx,
  Logger: logx.WithContext(ctx),
 }
}

// api management service
func (l *CreateOrUpdateApiLogic) CreateOrUpdateApi(in *core.ApiInfo) (*core.BaseResp, error) {
 if in.Id == 0 {
  err := l.svcCtx.DB.API.Create().
   SetPath(in.Path).
   SetDescription(in.Description).
   SetAPIGroup(in.Group).
   SetMethod(in.Method).
   Exec(l.ctx)

  if err != nil {
   switch {
   case ent.IsConstraintError(err):
    logx.Errorw(err.Error(), logx.Field("detail", in))
    return nil, statuserr.NewInvalidArgumentError(i18n.ApiAlreadyExists)
   default:
    logx.Errorw(logmsg.DatabaseError, logx.Field("detail", err.Error()))
    return nil, statuserr.NewInternalError(i18n.DatabaseError)
   }
  }

  return &core.BaseResp{Msg: i18n.CreateSuccess}, nil
 } else {
  err := l.svcCtx.DB.API.UpdateOneID(in.Id).
   SetPath(in.Path).
   SetDescription(in.Description).
   SetAPIGroup(in.Group).
   SetMethod(in.Method).
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
}


```

> We can get the global variables via l.svcCtx.
