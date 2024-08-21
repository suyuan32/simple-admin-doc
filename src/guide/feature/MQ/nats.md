---
order: 3
title: 'Nats 消息队列'
head:
  - - meta
    - name: keywords
      content: nats, jetstream, message queue, lightweight
---

## What is NATS?

::: info Official Documentation
[Documentation](https://nats.io/)
:::

NATS is an open-source, distributed messaging system based on the publish-subscribe mechanism. Its main features include:

1. **High Performance**: NATS is known for its low latency and high throughput, making it suitable for scenarios requiring fast message delivery.
2. **Simplicity**: NATS provides a simple API and supports multiple programming languages, making it easy for developers to integrate.
3. **Flexible Messaging Patterns**: NATS supports various messaging patterns, including publish-subscribe, request-response, and queue groups.
4. **Persistence Options**: While core NATS does not support message persistence, NATS JetStream offers persistent message queue functionality.

### Adding NATS Configuration

`etc`

```yaml
NatsConf:
  Hosts:
    - "nats://localhost:4222"
  ReconnectWait: 10
  MaxReconnect: 10
```

### Supported Configurations

| Name | Default Value | Description |
| --- | --- | --- |
| Hosts | None | Server addresses, in list form |
| ReconnectWait | 5 (seconds) | Retry wait time |
| MaxReconnect | 5 (times) | Maximum retry attempts |
| UserCred | None | Path to authorization cred file |
| NkeyFile | None | Path to N Key file |
| TlsClientCert | None | Path to TLS client certificate |
| TlsClientKey | None | Path to TLS client key |
| TlsCACert | None | Path to TLS CA certificate |
| UserJwt | None | User JWT token |

### Adding Configuration to `config`

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

### Add init codes to `service_context`

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
Use `c.NatsConf.NewConnection()` initialize nats connection or use `c.NatsConf.NewJetStream()` to initialize jetstream connection
:::