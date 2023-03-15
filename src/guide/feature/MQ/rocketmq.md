---
order: 2
title: 'RocketMQ Message Queue'
---
## How to add Producer to RPC?

### Add configuration information to `etc`

```yaml
ProducerConf:
  NsResolver:
    - 127.0.0.1:9876
  GroupName: core
  Namespace: core
  InstanceName: core-producer
  MsgTimeOut: 20
  DefaultTopicQueueNums: 4
  CreateTopicKey: TBW102
  CompressMsgBodyOverHowMuch: 4096
  CompressLevel: 5
  Retry: 2
  AccessKey: admin
  SecretKey: admin
```

### Add config

```go
package config

import (
	"github.com/suyuan32/simple-admin-common/plugins/casbin"
	"github.com/suyuan32/simple-admin-common/plugins/mq/rocketmq"
	"github.com/zeromicro/go-zero/core/stores/redis"
	"github.com/zeromicro/go-zero/zrpc"

	"github.com/suyuan32/simple-admin-common/config"
)

type Config struct {
	zrpc.RpcServerConf
	DatabaseConf config.DatabaseConf
	CasbinConf   casbin.CasbinConf
	RedisConf    redis.RedisConf
	ProducerConf rocketmq.ProducerConf
}
```

### Add `RocketMQProducer` into  `service context`

```go
package svc

import (
	"github.com/apache/rocketmq-client-go/v2"
	"github.com/hibiken/asynq"

	"github.com/suyuan32/simple-admin-core/rpc/ent"
	"github.com/suyuan32/simple-admin-core/rpc/internal/config"

	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zeromicro/go-zero/core/stores/redis"
)

type ServiceContext struct {
	Config           config.Config
	DB               *ent.Client
	Redis            *redis.Redis
	MQProducer       *asynq.Client
	RocketMQProducer *rocketmq.Producer
}

func NewServiceContext(c config.Config) *ServiceContext {
	db := ent.NewClient(
		ent.Log(logx.Info), // logger
		ent.Driver(c.DatabaseConf.NewNoCacheDriver()),
		ent.Debug(), // debug mode
	)

	return &ServiceContext{
		Config:           c,
		DB:               db,
		Redis:            redis.MustNewRedis(c.RedisConf),
		RocketMQProducer: c.ProducerConf.MustNewProducer(),
	}
}

```

### Send Messages

```go
    msg := &primitive.Message{
        Topic: "delete-invalid-token",
        Body:  []byte("all"),
    }
    msg.WithKeys([]string{"DeleteInvalidTokenTask"})
    
    res, err := l.svcCtx.RocketMQProducer.SendSync(l.ctx, msg)
    
    if err != nil {
        logx.Errorf("DeleteInvalidTokenTask send msg error: %s\n", err.Error())
        return
    } else {
        logx.Infof("DeleteInvalidTokenTask send msg success: %s\n", res.String())
    }
```

## How to add Consumer to RPC?

### Add configuration file

```yaml
ConsumerConf:
  NsResolver:
    - 127.0.0.1:9876
  GroupName: core
  Namespace: core
  InstanceName: core-consumer
  Strategy: AllocateByAveragely
  RebalanceLockInterval: 20
  MaxReconsumeTimes: -1
  ConsumerModel: Clustering
  AutoCommit: true
  Resolver: DEFAULT
  AccessKey: admin
  SecretKey: admin
```

### Add config

```go
package config

import (
	"github.com/suyuan32/simple-admin-common/plugins/casbin"
	"github.com/suyuan32/simple-admin-common/plugins/mq/rocketmq"
	"github.com/zeromicro/go-zero/core/stores/redis"
	"github.com/zeromicro/go-zero/zrpc"

	"github.com/suyuan32/simple-admin-common/config"
)

type Config struct {
	zrpc.RpcServerConf
	DatabaseConf config.DatabaseConf
	CasbinConf   casbin.CasbinConf
	RedisConf    redis.RedisConf
	ConsumerConf rocketmq.ConsumerConf
}

```

### Add the Consumer task to the `service context`:

```go
package svc

import (
	"github.com/apache/rocketmq-client-go/v2"
	"github.com/hibiken/asynq"

	"github.com/suyuan32/simple-admin-core/rpc/ent"
	"github.com/suyuan32/simple-admin-core/rpc/internal/config"

	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zeromicro/go-zero/core/stores/redis"
)

type ServiceContext struct {
	Config               config.Config
	DB                   *ent.Client
	Redis                *redis.Redis
	MQProducer           *asynq.Client
	RocketMQPushConsumer *rocketmq.PushConsumer
	RocketMQPullConsumer *rocketmq.PullConsumer
}

func NewServiceContext(c config.Config) *ServiceContext {
	db := ent.NewClient(
		ent.Log(logx.Info), // logger
		ent.Driver(c.DatabaseConf.NewNoCacheDriver()),
		ent.Debug(), // debug mode
	)

	return &ServiceContext{
		Config:               c,
		DB:                   db,
		Redis:                redis.MustNewRedis(c.RedisConf),
		RocketMQPushConsumer: c.ConsumerConf.MustNewPushConsumer(), // push consumer
		RocketMQPullConsumer: c.ConsumerConf.MustNewPullConsumer(), // pull consumer
	}
}

```

### How to consume messages?

```go
l.svcCtx.RocketMQPullConsumer.Subscribe("delete-invalid-token", consumer.MessageSelector{}, func(ctx context.Context,
    msgs ...*primitive.MessageExt) (consumer.ConsumeResult, error) {
    for i := range msgs {
        fmt.Printf("subscribe callback: %v \n", msgs[i])
    }

    return consumer.ConsumeSuccess, nil
})
```