---
order: 1
title: "MongoDB"
head:
  - - meta
    - name: keywords
      content: mongodb, database, nosql, simple admin
---

::: info
[Example](https://github.com/suyuan32/simple-admin-example-features/tree/main/mongo) [Offical Doc](https://github.com/mongodb/mongo-go-driver)
:::

## Configuration File

```yaml
MongodbConf:
  Host: 192.168.50.216
  Port: 27017
  DBName: school
  Username: root # set your username
  Password: simple_admin # set your password
  AuthMechanism: SCRAM-SHA-256
  AuthSource: admin
  Option: ?connect=direct
```

## Init

```go
package svc

import (
	"github.com/casbin/casbin/v2"
	"github.com/zeromicro/go-zero/rest"
	"go.mongodb.org/mongo-driver/mongo"

	"github.com/suyuan32/simple-admin-example-mongo/internal/config"
	i18n2 "github.com/suyuan32/simple-admin-example-mongo/internal/i18n"

	"github.com/suyuan32/simple-admin-common/i18n"
)

type ServiceContext struct {
	Config        config.Config
	Casbin        *casbin.Enforcer
	Authority     rest.Middleware
	Trans         *i18n.Translator
	Mongo         *mongo.Client
	MongoDatabase *mongo.Database
}

func NewServiceContext(c config.Config) *ServiceContext {

	trans := i18n.NewTranslator(i18n2.LocaleFS)

	return &ServiceContext{
		Config:        c,
		Trans:         trans,
		Mongo:         c.MongodbConf.MustNewClient(),
		MongoDatabase: c.MongodbConf.MustNewDatabase(),
	}
}
```
