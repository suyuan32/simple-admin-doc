---
order: 1
title: "API 和 RPC"
head:
  - - meta
    - name: keywords
      content: core development, Core 开发教程, tutorial, 配置
---

## 快速开发 demo

::: warning
除非想为 core 服务贡献代码，否则不建议将自己的代码写进 core 。请模仿 [example-api](https://github.com/suyuan32/simple-admin-example-api) 和 [simple-admin-file](https://github.com/suyuan32/simple-admin-file) 创建自己的服务
查看 [API 微服务](/guide/quick-start/codegen/api_example) 快速创建 API
:::

## 安装 goctls

[Simple-admin-tool](../../basic-config/simple-admin-tools.md)

## RPC 服务例子,以 department 为例

> 首先在 rpc/ent/schema 文件夹内添加 department.go

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

## 生成 department RPC 代码

在 项目根目录执行

```shell
make gen-rpc-ent-logic model=Department group=department
```

实际执行命令

```shell
goctls rpc ent --schema=./rpc/ent/schema --service_name=core --project_name=core --o=./rpc --model=Department --group=department --proto_out=./rpc/desc/department.proto
```

> 需要再执行 `make gen-rpc` 生成 types 文件

### 由于 core 的 ent 文件目录在 rpc 中，所以 logic 文件内的 import 路径需要修改下

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

## API 例子

在 api 目录下执行

```shell
goctls api proto --proto=/home/ryan/GolandProjects/simple-admin-core/rpc/core.proto --api_service_name=core --rpc_service_name=Core --o=./ --model=Department --rpc_name=Core --grpc_package=github.com/suyuan32/simple-admin-core/rpc/types/core
```

将会自动生成 CRUD 代码，同样需要修改 import

::: warning
由于默认需要支持两种语言，所以要分别在 `api/internal/i18n/locals/zh.json` 和 `api/internal/i18n/locals/en.json` 添加 route

![example](/assets/example_zh_title.png)
![example](/assets/example_en_title.png)
:::

### 启动 rpc 和 api

分别在 api rpc 目录下执行

```shell
go run core.go -f etc/core.yaml
```

### 网页端开发

[Simple Admin UI](web_develop_example.md)
