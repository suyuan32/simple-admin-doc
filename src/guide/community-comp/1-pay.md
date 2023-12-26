---
order: 1
title: "Payment Module"
---
## Introduction

Simple Admin Pay is the payment module of Simple Admin. It provides mobile and web payment and refund functions for WeChat and Alipay. This module is a community module that can be used for learning and commercial use. It works in conjunction with other modules of Simple Admin to provide a simple, unified way to handle payment and refund requests.

## Features

- **Unified Payment**: Provides a unified payment interface for other services to call. This means that no matter which payment method your users choose, you can handle payment requests in the same way.

- **Unified Refund**: The refund function allows you to refund through the order channel. This means that no matter how your users pay, they can receive refunds in the same way.

- **WeChat Mini Program Payment Demo**: A WeChat Mini Program payment demo is provided in the API service. This demo can help you understand how to implement payment functions in WeChat Mini Programs.

- **Alipay Sandbox Payment Demo**: A front-end payment refund example is provided in the simple-admin-backend-ui fork. This demo can help you understand how to implement payment and refund functions in the Alipay sandbox environment.

## Project Address

- **API Service**: <https://github.com/agui-coder/simple-admin-pay-rpc>

- **RPC Service**: <https://github.com/agui-coder/simple-admin-pay-api>

## Configuration Instructions

Detailed configuration is located in the simple-admin-rpc/etc/pay.yaml file. Payment configuration refers to the official documents [WeChat Payment Official Document](https://pay.weixin.qq.com/), [Alipay Payment Official Document](https://opendocs.alipay.com/common/), [Alipay Sandbox Environment Address](https://opendocs.alipay.com/common/02kkv7?pathHash=8fd32ef6).

- **Payment Callback Address**: Here, because we are demonstrating locally, we use the 127.0.0.1 IP address. If you deploy to the server, you need to set an IP address that the server can call.

![images1](/assets/community/pay/img.png)

## Alipay Test

The sample project must run the forked project of [simple-admin-backend-ui](https://github.com/agui-coder/simple-admin-backend-ui) and the pay-job branch of the forked project [simple-admin-job](https://github.com/agui-coder/simple-admin-job), otherwise, the project cannot receive the callback information of payment completion. You need to start the backend service locally, for more details, you can refer to [Simple Admin](https://doc.ryansu.tech/zh/guide/basic-config/env_setting.html).

    Install CLI using npm
    $ pnpm install
    Compile and run using npm
    $ npm run dev

Configure permissions

![images7](/assets/community/pay/img7.jpg)
![images8](/assets/community/pay/img8.png)

Payment test

![images2](/assets/community/pay/img2.png)

## WeChat Payment Test

`simple-admin-pay-api/pay-demo-taroui` provides a simple WeChat demo payment access, which needs to be done in the WeChat environment. You need to prepare the relevant information of WeChat payment, for more details, you can refer to [WeChat Payment Official Document](https://pay.weixin.qq.com/). Running the sample project must run the pay-job branch of the [simple-admin-job](https://github.com/agui-coder/simple-admin-job) project, otherwise, the project cannot receive the callback information of payment completion.

### Steps

1. Open [WeChat Developer Tool](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html), select 'Mini Program', click 'Add Project', fill in the AppID of the mini program, and click 'Confirm'.

2. In [WeChat Public Platform](https://mp.weixin.qq.com/), select 'Development' -> 'Development Settings', fill in the AppID from the WeChat Developer Tool into 'Developer ID', and click 'Confirm'.

3. Select 'Details' -> 'Local Development', check 'Do not verify legal domain name, web-view (business domain name), TLS version and HTTPS certificate', and click 'Confirm'.

4. Enter `simple-admin-pay-api/pay-demo-taroui`, open the terminal, and execute the following commands:

        Install CLI using npm
        $ npm install -g @tarojs/cli
        Install dependencies using pnpm
        $ pnpm install
        Compile and run using npm
        $ npm run dev:weapp
  
5. Refresh the WeChat Developer Tool after selecting the compilation mode, and you can see the effect.

![images3](/assets/community/pay/img3.png)

openid can be obtained through the [Simple Admin Member](https://doc.ryansu.tech/zh/guide/official-comp/member.html) module.

![images5](/assets/community/pay/img5.png)