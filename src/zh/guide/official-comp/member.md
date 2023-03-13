---
order: 2
title: '会员服务模块'
---

## 会员服务（MMS)

### 下载代码

```shell
# 获取 api 代码
git clone https://github.com/suyuan32/simple-admin-member-api.git

# 获取 rpc 代码
git clone https://github.com/suyuan32/simple-admin-member-rpc.git
```

### 修改配置文件 etc/mms.yaml

::: warning
注意配置时检查 member rpc 中的 CoreRpc 配置， member api 中的 MmsRpc 配置 \
 \
确保 AccessSecret 和 simple-admin-core的api配置文件内一致
:::

::: info
- 配置方式参考core
- 运行方式同理
- 初始化数据库 <http://localhost:3100/init>
- 在角色页面添加API接口权限，然后重启 RPC 的 API
:::

### K8s 部署
>
> 和 core api 相似

你应该做如下工作:

- 通过 docker 部署服务
- 修改 simple-admin-backend-ui/deploy/default.conf ，解开 mms-api 注释
- 更新 ingress configmap
- 更新 ingress controller
