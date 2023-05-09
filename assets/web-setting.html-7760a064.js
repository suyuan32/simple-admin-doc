import{_ as s,W as l,X as t,Y as e,Z as n,$ as a,a0 as d,D as o}from"./framework-2d2f73c4.js";const r={},c=e("h2",{id:"web-ui-setting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#web-ui-setting","aria-hidden":"true"},"#"),n(" Web UI setting")],-1),v={class:"hint-container info"},u=e("p",{class:"hint-container-title"},"Info",-1),m={href:"https://vben.ryansu.pro/",target:"_blank",rel:"noopener noreferrer"},_=d(`<blockquote><p>Mainly modify env file</p></blockquote><blockquote><p>.env</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># port
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Mainly modify the VITE_PROXY to CROS request to different host.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>You must write your codes in one line. <code>VITE_PROXY = [[&quot;/sys-api&quot;,&quot;http://localhost:9100&quot;],[&quot;/file-manager&quot;,&quot;http://localhost:9102&quot;]]</code></p></div>`,8);function b(p,h){const i=o("ExternalLinkIcon");return l(),t("div",null,[c,e("div",v,[u,e("p",null,[e("a",m,[n("Backend UI Doc"),a(i)])])]),_])}const f=s(r,[["render",b],["__file","web-setting.html.vue"]]);export{f as default};
