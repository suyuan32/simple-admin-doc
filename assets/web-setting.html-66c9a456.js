import{_ as i,W as s,X as l,Y as e,Z as a,$ as d,a0 as t,D as r}from"./framework-2d2f73c4.js";const o={},c={class:"hint-container info"},v=e("p",{class:"hint-container-title"},"相关信息",-1),u={href:"https://vben.ryansu.pro/zh/",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="前端设置" tabindex="-1"><a class="header-anchor" href="#前端设置" aria-hidden="true">#</a> 前端设置</h2><h3 id="主要修改-env-文件" tabindex="-1"><a class="header-anchor" href="#主要修改-env-文件" aria-hidden="true">#</a> 主要修改 env 文件</h3><blockquote><p>.env</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># port
VITE_PORT = 3100

# spa-title
VITE_GLOB_APP_TITLE = Simple Admin

# spa shortname
VITE_GLOB_APP_SHORT_NAME = Simple_Admin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以修改调试端口和系统名称</p><blockquote><p>.env.development</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Whether to open mock
VITE_USE_MOCK = false

# public path
VITE_PUBLIC_PATH = /

# Cross-domain proxy, you can configure multiple
# Please note that no line breaks
VITE_PROXY = [[&quot;/sys-api&quot;,&quot;http://localhost:8500&quot;],[&quot;/file-manager&quot;,&quot;http://localhost:9102&quot;]]

VITE_BUILD_COMPRESS = &#39;none&#39;

# Delete console
VITE_DROP_CONSOLE = false

# Basic interface address SPA
VITE_GLOB_API_URL=

# File upload address， optional
VITE_GLOB_UPLOAD_URL=/upload

# File store address
VITE_FILE_STORE_URL=http://localhost:8080

# Interface prefix
VITE_GLOB_API_URL_PREFIX=

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要修改 VITE_PROXY 用于实现跨域请求不同地址，</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>必须写在同一行 <code>VITE_PROXY = [[&quot;/sys-api&quot;,&quot;http://localhost:8500&quot;],[&quot;/file-manager&quot;,&quot;http://localhost:9102&quot;]]</code></p></div>`,9);function _(b,p){const n=r("ExternalLinkIcon");return s(),l("div",null,[e("div",c,[v,e("p",null,[e("a",u,[a("Backend UI 文档"),d(n)])])]),m])}const E=i(o,[["render",_],["__file","web-setting.html.vue"]]);export{E as default};
