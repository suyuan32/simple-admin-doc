import{_ as i,a as t,b as l,c as s,d as p,e as d}from"./img5-6aZO0pvr.js";import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as m,o as h,c as _,a as e,f as n,b as a,e as r}from"./app-J34oMQ8k.js";const u={},g=r('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>Simple Admin Pay 是Simple Admin 的支付模块，它提供了微信和支付宝的移动和网页端支付以及退款功能。这个模块是一个社区模块，可以用于学习，商用。与Simple Admin的其他模块协同工作，以提供一种简单，统一的方式处理支付和退款请求。</p><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h2><ul><li><p><strong>统一支付</strong>：提供了统一的支付接口供其他服务调用。这意味着，无论您的用户选择哪种支付方式，您都可以使用同一种方式处理支付请求。</p></li><li><p><strong>统一退款</strong>：退款功能允许您通过订单渠道原路退款。这意味着，无论您的用户是通过哪种方式支付的，他们都可以通过同一种方式接收退款。</p></li><li><p><strong>微信小程序支付demo</strong>：在api服务中提供了微信小程序支付demo。这个demo可以帮助您理解如何在微信小程序中实现支付功能。</p></li><li><p><strong>支付宝沙盒支付demo</strong>：在simple-admin-backend-ui fork中提供了前端支付退款示例。这个demo可以帮助您理解如何在支付宝沙盒环境中实现支付和退款功能。</p></li></ul><h2 id="项目地址" tabindex="-1"><a class="header-anchor" href="#项目地址"><span>项目地址</span></a></h2>',5),f=e("strong",null,"API服务",-1),b={href:"https://github.com/agui-coder/simple-admin-pay-api",target:"_blank",rel:"noopener noreferrer"},y=e("strong",null,"RPC服务",-1),k={href:"https://github.com/agui-coder/simple-admin-pay-rpc",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"配置说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置说明"},[e("span",null,"配置说明")])],-1),v={href:"https://pay.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://opendocs.alipay.com/common/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://opendocs.alipay.com/common/02kkv7?pathHash=8fd32ef6",target:"_blank",rel:"noopener noreferrer"},w=e("ul",null,[e("li",null,[e("strong",null,"支付回调地址"),n("：这里因为我们在本地演示，所以使用了 127.0.0.1 IP 地址，如果你部署到服务器上，要设置服务器可调用到的 IP 地址。")])],-1),z=e("figure",null,[e("img",{src:i,alt:"images1",tabindex:"0",loading:"lazy"}),e("figcaption",null,"images1")],-1),A=e("h2",{id:"支付宝测试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#支付宝测试"},[e("span",null,"支付宝测试")])],-1),S={href:"https://github.com/agui-coder/simple-admin-backend-ui",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/agui-coder/simple-admin-job",target:"_blank",rel:"noopener noreferrer"},P={href:"https://doc.ryansu.tech/zh/guide/basic-config/env_setting.html",target:"_blank",rel:"noopener noreferrer"},L=r(`<pre><code>使用 npm 安装 CLI
$ pnpm install
使用 npm 编译运行
$ npm run dev
</code></pre><p>配置权限</p><p><img src="`+s+'" alt="images7" loading="lazy"><img src="'+p+'" alt="images8" loading="lazy"></p><p>支付测试</p><figure><img src="'+d+'" alt="images2" tabindex="0" loading="lazy"><figcaption>images2</figcaption></figure><h2 id="微信支付测试" tabindex="-1"><a class="header-anchor" href="#微信支付测试"><span>微信支付测试</span></a></h2>',6),$=e("code",null,"simple-admin-pay-api/pay-demo-taroui",-1),C={href:"https://pay.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/agui-coder/simple-admin-job",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#步骤"},[e("span",null,"步骤")])],-1),V={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://mp.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"},D=e("li",null,[e("p",null,"选择「详情」 ->「本地开发」，勾选不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书，点击「确定」。")],-1),E=e("li",null,[e("p",null,[n("进入"),e("code",null,"simple-admin-pay-api/pay-demo-taroui"),n("打开终端，执行以下命令：")]),e("pre",null,[e("code",null,` 使用 npm 安装 CLI
 $ npm install -g @tarojs/cli
 使用pnpm安装依赖
 $ pnpm install
 使用 npm 编译运行
 $ npm run dev:weapp
`)])],-1),H=e("li",null,[e("p",null,"选择编译模式后刷新微信开发者工具，即可看到效果。")],-1),M=e("figure",null,[e("img",{src:t,alt:"images3",tabindex:"0",loading:"lazy"}),e("figcaption",null,"images3")],-1),R={href:"https://doc.ryansu.tech/zh/guide/official-comp/member.html",target:"_blank",rel:"noopener noreferrer"},F=e("figure",null,[e("img",{src:l,alt:"images5",tabindex:"0",loading:"lazy"}),e("figcaption",null,"images5")],-1);function G(J,K){const o=m("ExternalLinkIcon");return h(),_("div",null,[g,e("ul",null,[e("li",null,[e("p",null,[f,n("："),e("a",b,[n("https://github.com/agui-coder/simple-admin-pay-api"),a(o)])])]),e("li",null,[e("p",null,[y,n("："),e("a",k,[n("https://github.com/agui-coder/simple-admin-pay-rpc"),a(o)])])])]),x,e("p",null,[n("详细配置位于 simple-admin-rpc/etc/pay.yaml 文件中,支付配置参考官方文档"),e("a",v,[n("微信支付的官方文档"),a(o)]),n("， "),e("a",I,[n("支付宝支付官方文档"),a(o)]),n("， "),e("a",q,[n("支付宝沙箱环境地址"),a(o)]),n("。")]),w,z,A,e("p",null,[n("示例项目必须运行"),e("a",S,[n("simple-admin-backend-ui"),a(o)]),n(" fork 的项目和"),e("a",j,[n("simple-admin-job"),a(o)]),n("fork项目的pay-job分支，否则项目无法收到支付完成的回调信息，需要在本地启动后端服务，具体的可以参考"),e("a",P,[n("Simple Admin"),a(o)])]),L,e("p",null,[$,n("中提供了简单的微信demo支付接入,需要在微信环境中进行。需要准备好微信支付的相关信息,具体的可以参考"),e("a",C,[n("微信支付的官方文档"),a(o)]),n("。运行示例项目必须运行"),e("a",N,[n("simple-admin-job"),a(o)]),n("项目的pay-job分支，否则项目无法收到支付完成的回调信息。")]),T,e("ol",null,[e("li",null,[e("p",null,[n("打开"),e("a",V,[n("微信开发者工具"),a(o)]),n("，选择「小程序」，点击「添加项目」，填写小程序的 AppID，点击「确定」。")])]),e("li",null,[e("p",null,[n("在"),e("a",B,[n("微信公众平台"),a(o)]),n("中，选择「开发」->「开发设置」，将微信开发者工具中的 AppID 填写到「开发者ID」中，点击「确定」。")])]),D,E,H]),M,e("p",null,[n("openid可以在通过"),e("a",R,[n("Simple Admin Member"),a(o)]),n("模块中获取")]),F])}const W=c(u,[["render",G],["__file","1-pay.html.vue"]]);export{W as default};
