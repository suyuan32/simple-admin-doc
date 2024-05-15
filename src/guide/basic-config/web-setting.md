---
order: 3
title: "Web Setting"
---

## Web UI setting

::: info
[Backend UI Doc](https://vben.ryansu.tech/)
:::

::: info Menu setting tutorial
<BiliBili bvid="BV1J84y1f778" />
:::

> Mainly modify env file

> .env

```text
# spa-title
VITE_GLOB_APP_TITLE = Simple Admin

# spa shortname
VITE_GLOB_APP_SHORT_NAME = Simple_Admin

```

You can set develop port and the name or system.

> .env.development

```text
# Whether to open mock
VITE_USE_MOCK = false

# public path
VITE_PUBLIC_PATH = /

VITE_BUILD_COMPRESS = 'none'

# Delete console
VITE_DROP_CONSOLE = false

# Basic interface address SPA
VITE_GLOB_API_URL=

# File upload address， optional
VITE_GLOB_UPLOAD_URL=/upload

# Interface prefix
VITE_GLOB_API_URL_PREFIX=

```

> You may need to modify proxy when develop locally

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
      // Add your own api proxy to match diffrent api service
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

> If you want to preview, you need nginx, here is the conf example: `deploy/default.conf`

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
