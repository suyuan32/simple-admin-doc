---
order: 1
title: 'Member Service'
---

## Member Service

### Get code

```shell
# get api code
git clone https://github.com/suyuan32/simple-admin-member-api.git

# get rpc code
git clone https://github.com/suyuan32/simple-admin-member-rpc.git
```

### Modify configuration file

The config file is similar with core service's. You should check the CoreRpc config in rpc service and the 
MmsConf in api service.


> Make sure AccessSecret is the same as simple-admin-core's api set
> The configuration is similar as core
> Run code the same as core
> Init database in <http://localhost:3100/init>
> Add API interface permissions on the role page, then restart the API service of file manager

### K8s Deployment

> It is similar with core api.

You should do these step:

- deploy the images via docker
- modify simple-admin-backend-ui/deploy/default.conf, uncomment the mms-api rule
- update ingress configmap
- update ingress controller