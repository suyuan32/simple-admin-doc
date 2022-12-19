import{ab as s,F as a,G as d,E as n,R as e,M as l,ac as t,U as r}from"./framework-5ae10408.js";const c={},o=t(`<h2 id="前端设置" tabindex="-1"><a class="header-anchor" href="#前端设置" aria-hidden="true">#</a> 前端设置</h2><h3 id="主要修改-env-文件" tabindex="-1"><a class="header-anchor" href="#主要修改-env-文件" aria-hidden="true">#</a> 主要修改 env 文件</h3><blockquote><p>.env</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># port
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要修改 VITE_PROXY 用于实现跨域请求不同地址，</p>`,8),v={href:"http://localhost:8500",target:"_blank",rel:"noopener noreferrer"},u={href:"http://localhost:9102",target:"_blank",rel:"noopener noreferrer"};function m(b,_){const i=r("ExternalLinkIcon");return a(),d("div",null,[o,n("blockquote",null,[n("p",null,[e('注意必须写在同一行 VITE_PROXY = [["/sys-api","'),n("a",v,[e("http://localhost:8500"),l(i)]),e('"],["/file-manager","'),n("a",u,[e("http://localhost:9102"),l(i)]),e('"]]')])])])}const h=s(c,[["render",m],["__file","web-setting.html.vue"]]);export{h as default};
