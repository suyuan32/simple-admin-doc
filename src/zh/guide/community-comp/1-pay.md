---
order: 1
title: "支付模块"
---

## 介绍

Simple Admin Pay 是Simple Admin 的支付模块，它提供了微信和支付宝的移动和网页端支付以及退款功能。这个模块是一个社区模块，可以用于学习，商用。与Simple Admin的其他模块协同工作，以提供一种简单，统一的方式处理支付和退款请求。

## 特性

- **统一支付**：提供了统一的支付接口供其他服务调用。这意味着，无论您的用户选择哪种支付方式，您都可以使用同一种方式处理支付请求。

- **统一退款**：退款功能允许您通过订单渠道原路退款。这意味着，无论您的用户是通过哪种方式支付的，他们都可以通过同一种方式接收退款。

- **微信小程序支付demo**：在api服务中提供了微信小程序支付demo。这个demo可以帮助您理解如何在微信小程序中实现支付功能。

- **支付宝沙盒支付demo**：在simple-admin-backend-ui fork中提供了前端支付退款示例。这个demo可以帮助您理解如何在支付宝沙盒环境中实现支付和退款功能。

## 项目地址

- **API服务**：<https://github.com/agui-coder/simple-admin-pay-api>

- **RPC服务**：<https://github.com/agui-coder/simple-admin-pay-rpc>

## 配置说明

详细配置位于 simple-admin-rpc/etc/pay.yaml 文件中,支付配置参考官方文档[微信支付的官方文档](https://pay.weixin.qq.com/)，
[支付宝支付官方文档](https://opendocs.alipay.com/common/)，
[支付宝沙箱环境地址](https://opendocs.alipay.com/common/02kkv7?pathHash=8fd32ef6)。

- **支付回调地址**：这里因为我们在本地演示，所以使用了 127.0.0.1 IP 地址，如果你部署到服务器上，要设置服务器可调用到的 IP 地址。

![images1](/assets/community/pay/img.png)


## 支付宝测试

示例项目必须运行[simple-admin-backend-ui](https://github.com/agui-coder/simple-admin-backend-ui)
fork 的项目和[simple-admin-job](https://github.com/agui-coder/simple-admin-job)fork项目的pay-job分支，否则项目无法收到支付完成的回调信息，需要在本地启动后端服务，具体的可以参考[Simple Admin](https://doc.ryansu.tech/zh/guide/basic-config/env_setting.html)

    使用 npm 安装 CLI
    $ pnpm install
    使用 npm 编译运行
    $ npm run dev

配置权限

![images7](/assets/community/pay/img7.jpg)
![images8](/assets/community/pay/img8.png)

支付测试

![images2](/assets/community/pay/img2.png)

## 微信支付测试

`simple-admin-pay-api/pay-demo-taroui`中提供了简单的微信demo支付接入,需要在微信环境中进行。需要准备好微信支付的相关信息,具体的可以参考[微信支付的官方文档](https://pay.weixin.qq.com/)。运行示例项目必须运行[simple-admin-job](https://github.com/agui-coder/simple-admin-job)项目的pay-job分支，否则项目无法收到支付完成的回调信息。

### 步骤

1. 打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，选择「小程序」，点击「添加项目」，填写小程序的 AppID，点击「确定」。

2. 在[微信公众平台](https://mp.weixin.qq.com/)中，选择「开发」->「开发设置」，将微信开发者工具中的 AppID 填写到「开发者ID」中，点击「确定」。

3. 选择「详情」 ->「本地开发」，勾选不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书，点击「确定」。

4. 进入`simple-admin-pay-api/pay-demo-taroui`打开终端，执行以下命令：

        使用 npm 安装 CLI
        $ npm install -g @tarojs/cli
        使用pnpm安装依赖
        $ pnpm install
        使用 npm 编译运行
        $ npm run dev:weapp
  
5. 选择编译模式后刷新微信开发者工具，即可看到效果。

![images3](/assets/community/pay/img3.png)

openid可以在通过[Simple Admin Member](https://doc.ryansu.tech/zh/guide/official-comp/member.html)模块中获取

![images5](/assets/community/pay/img5.png)
