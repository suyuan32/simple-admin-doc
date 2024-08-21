---
order: 3
title: 'Nats 消息队列'
head:
  - - meta
    - name: keywords
      content: nats, jetstream, 消息队列, 轻量
---

## 什么是 Nats?

::: info 官方文档
[文档](https://nats.io/)
:::

NATS 是一个开源的分布式消息队列系统，基于消息发布-订阅机制。它的主要特点包括：

1. **高性能**：NATS 以其低延迟和高吞吐量著称，适用于需要快速消息传递的场景。
2. **简单易用**：NATS 提供了简单的 API，支持多种编程语言，使得开发者可以轻松集成。
3. **灵活的消息传递模式**：NATS 支持多种消息传递模式，包括发布-订阅、请求-响应和队列组。
4. **持久化选项**：虽然核心 NATS 不支持消息持久化，但 NATS JetStream 提供了持久化消息队列的功能。


### 添加 Nats 配置信息

`etc`

```yaml
NatsConf:
  Hosts:
    - "nats://localhost:4222"
  ReconnectWait: 10
  MaxReconnect: 10
```

### 支持的配置

| 名称 | 默认值 | 介绍             |
| --- |-----|----------------|
| Hosts | 无   | 服务器地址，列表形式     |
| ReconnectWait | 5 （单位： 秒）| 重试等待时间         |
| MaxReconnect | 5 （单位： 次） | 最大重试次数         |
| UserCred | 无 | 授权验证 cred 文件路径 |
| NkeyFile | 无 | N Key 文件路径 |
| TlsClientCert | 无 | Tls 客户端证书路径 |
| TlsClientKey | 无 | Tls 客户端秘钥路径 |
| TlsCACert | 无 | Tls CA 证书路径 |
| UserJwt | 无 | 用户 Jwt 令牌 |

### 添加配置到 `config`

```go
package config

import (
	"github.com/suyuan32/simple-admin-common/plugins/casbin"
	"github.com/suyuan32/simple-admin-common/plugins/mq/asynq"
	"github.com/suyuan32/simple-admin-common/plugins/mq/nats"
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
	NatsConf           nats.Conf
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
	Nats      jetstream.JetStream
}

func NewServiceContext(c config.Config) *ServiceContext {
	db := ent.NewClient(
		ent.Log(logx.Info), // logger
		ent.Driver(c.DatabaseConf.NewNoCacheDriver()),
		ent.Debug(), // debug mode
	)
	
	nats, err := c.NatsConf.NewJetStream()
	logx.Must(err)

	return &ServiceContext{
		Config:     c,
		DB:         db,
		Redis:      redis.MustNewRedis(c.RedisConf),
		MQProducer: asynq.NewClient(c.AsynqConf.WithRedisConf(c.RedisConf).NewRedisOpt()),
		Nats:      nats,
	}
}

```

::: info
使用 `c.NatsConf.NewConnection()` 初始化 Nats 连接或使用 `c.NatsConf.NewJetStream()` 来初始化 jetstream 连接
:::