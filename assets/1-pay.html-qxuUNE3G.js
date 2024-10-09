import{_ as t,a as n,b as a,c as i,d as o,e as r}from"./img5-ZiZyIext.js";import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as l,o as m}from"./app-CYT6JKv1.js";const c={};function d(h,e){return m(),p("div",null,e[0]||(e[0]=[l('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>Simple Admin Pay is the payment module of Simple Admin. It provides mobile and web payment and refund functions for WeChat and Alipay. This module is a community module that can be used for learning and commercial use. It works in conjunction with other modules of Simple Admin to provide a simple, unified way to handle payment and refund requests.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><ul><li><p><strong>Unified Payment</strong>: Provides a unified payment interface for other services to call. This means that no matter which payment method your users choose, you can handle payment requests in the same way.</p></li><li><p><strong>Unified Refund</strong>: The refund function allows you to refund through the order channel. This means that no matter how your users pay, they can receive refunds in the same way.</p></li><li><p><strong>WeChat Mini Program Payment Demo</strong>: A WeChat Mini Program payment demo is provided in the API service. This demo can help you understand how to implement payment functions in WeChat Mini Programs.</p></li><li><p><strong>Alipay Sandbox Payment Demo</strong>: A front-end payment refund example is provided in the simple-admin-backend-ui fork. This demo can help you understand how to implement payment and refund functions in the Alipay sandbox environment.</p></li></ul><h2 id="project-address" tabindex="-1"><a class="header-anchor" href="#project-address"><span>Project Address</span></a></h2><ul><li><p><strong>API Service</strong>: <a href="https://github.com/agui-coder/simple-admin-pay-api" target="_blank" rel="noopener noreferrer">https://github.com/agui-coder/simple-admin-pay-api</a></p></li><li><p><strong>RPC Service</strong>: <a href="https://github.com/agui-coder/simple-admin-pay-rpc" target="_blank" rel="noopener noreferrer">https://github.com/agui-coder/simple-admin-pay-rpc</a></p></li></ul><h2 id="configuration-instructions" tabindex="-1"><a class="header-anchor" href="#configuration-instructions"><span>Configuration Instructions</span></a></h2><p>Detailed configuration is located in the simple-admin-rpc/etc/pay.yaml file. Payment configuration refers to the official documents <a href="https://pay.weixin.qq.com/" target="_blank" rel="noopener noreferrer">WeChat Payment Official Document</a>, <a href="https://opendocs.alipay.com/common/" target="_blank" rel="noopener noreferrer">Alipay Payment Official Document</a>, <a href="https://opendocs.alipay.com/common/02kkv7?pathHash=8fd32ef6" target="_blank" rel="noopener noreferrer">Alipay Sandbox Environment Address</a>.</p><ul><li><strong>Payment Callback Address</strong>: Here, because we are demonstrating locally, we use the 127.0.0.1 IP address. If you deploy to the server, you need to set an IP address that the server can call.</li></ul><figure><img src="'+t+`" alt="images1" tabindex="0" loading="lazy"><figcaption>images1</figcaption></figure><h2 id="alipay-test" tabindex="-1"><a class="header-anchor" href="#alipay-test"><span>Alipay Test</span></a></h2><p>The sample project must run the forked project of <a href="https://github.com/agui-coder/simple-admin-backend-ui" target="_blank" rel="noopener noreferrer">simple-admin-backend-ui</a> and the pay-job branch of the forked project <a href="https://github.com/agui-coder/simple-admin-job" target="_blank" rel="noopener noreferrer">simple-admin-job</a>, otherwise, the project cannot receive the callback information of payment completion. You need to start the backend service locally, for more details, you can refer to <a href="https://doc.ryansu.tech/zh/guide/basic-config/env_setting.html" target="_blank" rel="noopener noreferrer">Simple Admin</a>.</p><pre><code>Install CLI using npm
$ pnpm install
Compile and run using npm
$ npm run dev
</code></pre><p>Configure permissions</p><p><img src="`+n+'" alt="images7" loading="lazy"><img src="'+a+'" alt="images8" loading="lazy"></p><p>Payment test</p><figure><img src="'+i+`" alt="images2" tabindex="0" loading="lazy"><figcaption>images2</figcaption></figure><h2 id="wechat-payment-test" tabindex="-1"><a class="header-anchor" href="#wechat-payment-test"><span>WeChat Payment Test</span></a></h2><p><code>simple-admin-pay-api/pay-demo-taroui</code> provides a simple WeChat demo payment access, which needs to be done in the WeChat environment. You need to prepare the relevant information of WeChat payment, for more details, you can refer to <a href="https://pay.weixin.qq.com/" target="_blank" rel="noopener noreferrer">WeChat Payment Official Document</a>. Running the sample project must run the pay-job branch of the <a href="https://github.com/agui-coder/simple-admin-job" target="_blank" rel="noopener noreferrer">simple-admin-job</a> project, otherwise, the project cannot receive the callback information of payment completion.</p><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps"><span>Steps</span></a></h3><ol><li><p>Open <a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html" target="_blank" rel="noopener noreferrer">WeChat Developer Tool</a>, select &#39;Mini Program&#39;, click &#39;Add Project&#39;, fill in the AppID of the mini program, and click &#39;Confirm&#39;.</p></li><li><p>In <a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer">WeChat Public Platform</a>, select &#39;Development&#39; -&gt; &#39;Development Settings&#39;, fill in the AppID from the WeChat Developer Tool into &#39;Developer ID&#39;, and click &#39;Confirm&#39;.</p></li><li><p>Select &#39;Details&#39; -&gt; &#39;Local Development&#39;, check &#39;Do not verify legal domain name, web-view (business domain name), TLS version and HTTPS certificate&#39;, and click &#39;Confirm&#39;.</p></li><li><p>Enter <code>simple-admin-pay-api/pay-demo-taroui</code>, open the terminal, and execute the following commands:</p><pre><code> Install CLI using npm
 $ npm install -g @tarojs/cli
 Install dependencies using pnpm
 $ pnpm install
 Compile and run using npm
 $ npm run dev:weapp
</code></pre></li><li><p>Refresh the WeChat Developer Tool after selecting the compilation mode, and you can see the effect.</p></li></ol><figure><img src="`+o+'" alt="images3" tabindex="0" loading="lazy"><figcaption>images3</figcaption></figure><p>openid can be obtained through the <a href="https://doc.ryansu.tech/zh/guide/official-comp/member.html" target="_blank" rel="noopener noreferrer">Simple Admin Member</a> module.</p><figure><img src="'+r+'" alt="images5" tabindex="0" loading="lazy"><figcaption>images5</figcaption></figure>',24)]))}const g=s(c,[["render",d],["__file","1-pay.html.vue"]]),b=JSON.parse('{"path":"/guide/community-comp/1-pay.html","title":"Payment Module","lang":"en-US","frontmatter":{"order":1,"title":"Payment Module","head":[["meta",{"name":"keywords","content":"simple admin module, payment module, community, wechat pay, alipay"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/community-comp/1-pay.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/community-comp/1-pay.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Payment Module"}],["meta",{"property":"og:description","content":"Introduction Simple Admin Pay is the payment module of Simple Admin. It provides mobile and web payment and refund functions for WeChat and Alipay. This module is a community mo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/community/pay/img.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Payment Module\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/community/pay/img.png\\",\\"https://doc.ryansu.tech/assets/community/pay/img7.jpg\\",\\"https://doc.ryansu.tech/assets/community/pay/img8.png\\",\\"https://doc.ryansu.tech/assets/community/pay/img2.png\\",\\"https://doc.ryansu.tech/assets/community/pay/img3.png\\",\\"https://doc.ryansu.tech/assets/community/pay/img5.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Introduction Simple Admin Pay is the payment module of Simple Admin. It provides mobile and web payment and refund functions for WeChat and Alipay. This module is a community mo...","gitInclude":[]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Project Address","slug":"project-address","link":"#project-address","children":[]},{"level":2,"title":"Configuration Instructions","slug":"configuration-instructions","link":"#configuration-instructions","children":[]},{"level":2,"title":"Alipay Test","slug":"alipay-test","link":"#alipay-test","children":[]},{"level":2,"title":"WeChat Payment Test","slug":"wechat-payment-test","link":"#wechat-payment-test","children":[{"level":3,"title":"Steps","slug":"steps","link":"#steps","children":[]}]}],"readingTime":{"minutes":2.11,"words":632},"filePathRelative":"guide/community-comp/1-pay.md","autoDesc":true,"excerpt":"<h2>Introduction</h2>\\n<p>Simple Admin Pay is the payment module of Simple Admin. It provides mobile and web payment and refund functions for WeChat and Alipay. This module is a community module that can be used for learning and commercial use. It works in conjunction with other modules of Simple Admin to provide a simple, unified way to handle payment and refund requests.</p>"}');export{g as comp,b as data};
