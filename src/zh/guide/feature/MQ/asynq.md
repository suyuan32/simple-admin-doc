---
order: 1
title: 'Asynq 消息队列'
---

## 如何在 RPC 使用 Asynq 作为消息队列？

::: info 官方文档
[文档](https://github.com/hibiken/asynq/wiki)
:::

### 添加 Asynq 配置信息

`etc`

```yaml
AsynqConf:
# if you do not use WithRedisConf, you should uncomment the configuration below

#  Addr: localhost:6379  # Redis address
#  Pass: # Redis Password
#  DB: 0 # Redis database index
#  Concurrency: 20 # max concurrent process job task num
#  SyncInterval: 10 # seconds, this field specifies how often sync should happen
  Enable: true
```

### 添加配置到 `config`

```go
package config

import (
	"github.com/suyuan32/simple-admin-common/plugins/casbin"
	"github.com/suyuan32/simple-admin-common/plugins/mq/asynq"
	"github.com/zeromicro/go-zero/core/stores/redis"
	"github.com/zeromicro/go-zero/zrpc"

	"github.com/suyuan32/simple-admin-common/config"
)

type Config struct {
	zrpc.RpcServerConf
	DatabaseConf config.DatabaseConf
	CasbinConf   casbin.CasbinConf
	RedisConf    redis.RedisConf
	AsynqConf    asynq.AsynqConf
}
```

### 初始化 `service_context`

```go
package svc

import (
	"github.com/hibiken/asynq"

	"github.com/suyuan32/simple-admin-core/rpc/ent"
	"github.com/suyuan32/simple-admin-core/rpc/internal/config"

	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zeromicro/go-zero/core/stores/redis"
)

type ServiceContext struct {
	Config     config.Config
	DB         *ent.Client
	Redis      *redis.Redis
	MQProducer *asynq.Client
}

func NewServiceContext(c config.Config) *ServiceContext {
	db := ent.NewClient(
		ent.Log(logx.Info), // logger
		ent.Driver(c.DatabaseConf.NewNoCacheDriver()),
		ent.Debug(), // debug mode
	)

	return &ServiceContext{
		Config:     c,
		DB:         db,
		Redis:      redis.MustNewRedis(c.RedisConf),
		MQProducer: asynq.NewClient(c.AsynqConf.WithRedisConf(c.RedisConf).NewRedisOpt()),
	}
}

```

### 调用 Client

```go
package api

import (
	"context"

	"github.com/hibiken/asynq"

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

	task := asynq.NewTask("hello_world", []byte("{\"name\":\"api test\"}"))
	_, err = l.svcCtx.MQProducer.Enqueue(task)
	if err != nil {
		return nil, err
	}
	
	return &core.BaseIDResp{Id: result.ID, Msg: i18n.CreateSuccess}, nil
}

```

### 延迟队列

```go
_, err = l.svcCtx.MQProducer.Enqueue(task, asynq.ProcessIn(24*time.Hour))
```