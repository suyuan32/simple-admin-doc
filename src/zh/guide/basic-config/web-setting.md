---
order: 3
title: "前端设置"
head:
  - - meta
    - name: keywords
      content: frontend, 前端配置, configuration, 菜单配置
---

::: info
[Backend UI 文档](https://vben.ryansu.tech/zh/)
:::

## 前端设置

::: info 菜单配置教程
<BiliBili bvid="BV1J84y1f778" />
:::

### 主要修改 env 文件

> .env

```text
# 后台名称
VITE_GLOB_APP_TITLE = Simple Admin

# 后台名称简写，用于存储
VITE_GLOB_APP_SHORT_NAME=simple_admin

```

可以修改调试端口和系统名称

> .env.development

```text
# 是否开启mock数据，关闭时需要自行对接后台接口
VITE_USE_MOCK=true
# 资源公共路径,需要以 /开头和结尾
VITE_PUBLIC_PATH=/
# 是否删除Console.log
VITE_DROP_CONSOLE=false
# 接口地址
# 如果没有跨域问题，直接在这里配置即可
VITE_GLOB_API_URL=/api
# 文件上传接口  可选
VITE_GLOB_UPLOAD_URL=/upload
# 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换
VITE_GLOB_API_URL_PREFIX=

```

> 在本地开发时主要需要修改 proxy

`vite.config.ts`

```ts
import { defineApplicationConfig } from "@vben/vite-config";

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        "echarts/core",
        "echarts/charts",
        "echarts/components",
        "echarts/renderers",
        "qrcode",
        "@iconify/iconify",
        "ant-design-vue/es/locale/zh_CN",
        "ant-design-vue/es/locale/en_US",
      ],
    },
    server: {
      // 添加自己的api proxy 用于匹配
      proxy: {
        "/sys-api": {
          target: "http://192.168.50.204:9100",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/sys-api`), ""),
          // only https
          // secure: false
        },
        "/fms-api": {
          target: "http://192.168.50.204:9102",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/fms-api`), ""),
        },
        "/mms-api": {
          target: "http://localhost:9104",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/mms-api`), ""),
        },
      },
    },
  },
});
```

> 如果要 preview 需要借助 nginx, 可以查看配置文件 `deploy/default.conf`

```text
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /sys-api/ {
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://core-api-svc.default.svc.cluster.local:9100/;
        # proxy_pass  http://10.5.0.5:9100/; # for docker
    }

    # location /fms-api/ {
    #     proxy_set_header Host $http_host;
    #     proxy_set_header X-Real-IP $remote_addr;
    #     proxy_set_header REMOTE-HOST $remote_addr;
    #     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    #     proxy_pass  http://file-api-svc.default.svc.cluster.local:9102/;
    # }

    # location /mms-api/ {
    #     proxy_set_header Host $http_host;
    #     proxy_set_header X-Real-IP $remote_addr;
    #     proxy_set_header REMOTE-HOST $remote_addr;
    #     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    #     proxy_pass  http://mms-api-svc.default.svc.cluster.local:9104/;
    # }
}
```

## 参数配置

目前支持的页面参数配置

| 键(key)                  | 介绍                                           |
| ------------------------ | ---------------------------------------------- |
| sys.ui.name              | 配置后台系统名称                               |
| sys.ui.logo              | 配置后台 logo                                  |
| sys.ui.showSettingButton | ( "true" 或 "false" ) 配置后台是否显示设置按钮 |