import{_ as s,W as a,X as t,Y as n,Z as e,$ as l,a0 as d,H as o}from"./framework-45e551af.js";const r={},c=d(`<h2 id="web-ui-setting" tabindex="-1"><a class="header-anchor" href="#web-ui-setting" aria-hidden="true">#</a> Web UI setting</h2><blockquote><p>Mainly modify env file</p></blockquote><blockquote><p>.env</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># port
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Mainly modify the VITE_PROXY to CROS request to different host.</p>`,8),v={href:"http://localhost:9100",target:"_blank",rel:"noopener noreferrer"},u={href:"http://localhost:9102",target:"_blank",rel:"noopener noreferrer"};function m(b,_){const i=o("ExternalLinkIcon");return a(),t("div",null,[c,n("blockquote",null,[n("p",null,[e('You must write your code in one line. VITE_PROXY = [["/sys-api","'),n("a",v,[e("http://localhost:9100"),l(i)]),e('"],["/file-manager","'),n("a",u,[e("http://localhost:9102"),l(i)]),e('"]]')])])])}const h=s(r,[["render",m],["__file","web-setting.html.vue"]]);export{h as default};
