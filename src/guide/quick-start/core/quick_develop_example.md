---
order: 1
title: 'Backend Development'
head:
  - - meta
    - name: keywords
      content: core development, tutorial, configuration
---

## Rapid development demo

::: warning
Unless you want to contribute code to the core service, it is not recommended to write your own code into the core. Please imitate [example-api](https://github.com/suyuan32/simple-admin-example-api) and [simple-admin-file](https://github.com/suyuan32/simple-admin-file ) to create your own service\
 \
See [API Microservice](/guide/quick-start/codegen/api_example) to quickly create an API
:::

## Install goctls

[Simple-admin-tools](../../basic-config/simple-admin-tools.md)

## RPC service example, take department as an example

> First add department.go in rpc/ent/schema folder

```plain
package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/dialect/entsql"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/suyuan32/simple-admin-common/orm/ent/mixins"
)

type Department struct {
	ent.Schema
}

func (Department) Fields() []ent.Field {
	return []ent.Field{
		field.String("name").Comment("Department name | 部门名称"),
		field.String("ancestors").Comment("Parents' IDs | 父级列表"),
		field.String("leader").Comment("Department leader | 部门负责人"),
		field.String("phone").Comment("Leader's phone number | 负责人电话"),
		field.String("email").Comment("Leader's email | 部门负责人电子邮箱"),
		field.String("remark").Comment("Remark | 备注"),
		field.Uint64("parent_id").Optional().Default(0).Comment("Parent department ID | 父级部门ID"),
	}
}

func (Department) Mixin() []ent.Mixin {
	return []ent.Mixin{
		mixins.BaseMixin{},
		mixins.StatusMixin{},
		mixins.SortMixin{},
	}
}

func (Department) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("children", Department.Type).From("parent").Unique().Field("parent_id"),
		edge.From("users", User.Type).Ref("departments"),
	}
}

func (Department) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entsql.Annotation{Table: "sys_departments"},
	}
}
```

## Generate department RPC code

Execute in the project root directory

```shell
make gen-rpc-ent-logic model=Department group=department
```
actually execute the command
```shell
goctls rpc ent --schema=./rpc/ent/schema --service_name=core --project_name=core --o=./rpc --model=Department --group=department --proto_out=./rpc/desc /department.proto
```

> Need to execute `make gen-rpc` to generate the types file

### Since the core ent file directory is in rpc, the import path in the logic file needs to be modified

```go
import (
    "context"

	"github.com/suyuan32/simple-admin-core/rpc/internal/svc"
	"github.com/suyuan32/simple-admin-core/rpc/internal/utils/errorhandler"
	"github.com/suyuan32/simple-admin-core/rpc/types/core"

	"github.com/zeromicro/go-zero/core/logx"

	"github.com/suyuan32/simple-admin-common/i18n"
)
```


## API example

Execute in the api directory

```shell
goctls api proto --proto=/home/ryan/GolandProjects/simple-admin-core/rpc/core.proto --api_service_name=core --rpc_service_name=Core --o=./ --model=Department --rpc_name= Core --grpc_package=github.com/suyuan32/simple-admin-core/rpc/types/core
```

The CRUD code will be automatically generated, and the import also needs to be modified

::: warning
Since two languages need to be supported by default, add routes to api/internal/i18n/locals/zh.json and api/internal/i18n/locals/en.json respectively

![example](/assets/example_zh_title.png)
![example](/assets/example_en_title.png)
:::

### Start rpc and api

Execute in the api rpc directory respectively

```shell
go run core.go -f etc/core.yaml
```

### Web development
[Simple Admin UI](web_develop_example.md)