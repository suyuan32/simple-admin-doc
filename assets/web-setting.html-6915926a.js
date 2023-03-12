import{_ as l,W as t,X as a,Y as n,Z as e,$ as s,a0 as d,D as o}from"./framework-2d2f73c4.js";const r={},c=d(`<h2 id="web-ui-setting" tabindex="-1"><a class="header-anchor" href="#web-ui-setting" aria-hidden="true">#</a> Web UI setting</h2><blockquote><p>Mainly modify env file</p></blockquote><blockquote><p>.env</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># port
VITE_PORT = 3100

# spa-title
VITE_GLOB_APP_TITLE = Simple Admin

# spa shortname
VITE_GLOB_APP_SHORT_NAME = Simple_Admin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can set develop port and the name or system.</p><blockquote><p>.env.development</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Whether to open mock
VITE_USE_MOCK = false

# public path
VITE_PUBLIC_PATH = /

# Cross-domain proxy, you can configure multiple
# Please note that no line breaks
VITE_PROXY = [[&quot;/sys-api&quot;,&quot;http://localhost:9100&quot;],[&quot;/file-manager&quot;,&quot;http://localhost:9102&quot;]]

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Mainly modify the VITE_PROXY to CROS request to different host.</p>`,8),v={class:"hint-container warning"},u=n("p",{class:"hint-container-title"},"Note",-1),m=n("br",null,null,-1),_={href:"http://localhost:9100",target:"_blank",rel:"noopener noreferrer"},b={href:"http://localhost:9102",target:"_blank",rel:"noopener noreferrer"};function p(h,f){const i=o("ExternalLinkIcon");return t(),a("div",null,[c,n("div",v,[u,n("p",null,[e("You must write your code in one line. "),m,e(' VITE_PROXY = [["/sys-api","'),n("a",_,[e("http://localhost:9100"),s(i)]),e('"],["/file-manager","'),n("a",b,[e("http://localhost:9102"),s(i)]),e('"]]')])])])}const I=l(r,[["render",p],["__file","web-setting.html.vue"]]);export{I as default};
