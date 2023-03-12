import{_ as o}from"./init_zh_cn-25f120d7.js";import{_ as c,W as d,X as p,Y as n,Z as s,$ as e,a1 as i,a0 as r,D as t}from"./framework-2d2f73c4.js";const u={},m=n("h1",{id:"local-development-setting",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#local-development-setting","aria-hidden":"true"},"#"),s(" Local Development Setting")],-1),v=n("blockquote",null,[n("p",null,"Environment Requirement")],-1),b=n("li",null,"golang 1.19 +",-1),k=n("li",null,[n("strong",null,"nodejs 18.8.0 +")],-1),h=n("li",null,[n("strong",null,"mysql 8.0 +"),s(" | MariaDB 10.7 + | Postgres 14 + ("),n("strong",null,"Postgres 15 + recommended"),s(")")],-1),g=n("li",null,"redis 6.0 +",-1),y={href:"https://goswagger.io/install.html",target:"_blank",rel:"noopener noreferrer"},f=r(`<div class="hint-container info"><p class="hint-container-title">Info</p><p>It is recommended to develop under linux, because the make command is required. We use Ubuntu 22.10.</p></div><h2 id="backend-setting" tabindex="-1"><a class="header-anchor" href="#backend-setting" aria-hidden="true">#</a> Backend Setting</h2><h3 id="simple-admin-core" tabindex="-1"><a class="header-anchor" href="#simple-admin-core" aria-hidden="true">#</a> simple admin core</h3><p>simple admin core is the core service for simple admin. It offers user management, authorization, menu management and API management and so on. It must be running.</p><div class="hint-container info"><p class="hint-container-title">Default Account</p><p>username: <strong>admin</strong><br> password: <strong>simple-admin</strong></p></div><blockquote><p>Clone the core code</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-core.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="local-development-setting-1" tabindex="-1"><a class="header-anchor" href="#local-development-setting-1" aria-hidden="true">#</a> Local development setting</h3><h4 id="api-service" tabindex="-1"><a class="header-anchor" href="#api-service" aria-hidden="true">#</a> API Service</h4><h5 id="notice-you-should-add-core-dev-yaml-for-development-to-avoid-conflicting-with-core-yaml-in-production" tabindex="-1"><a class="header-anchor" href="#notice-you-should-add-core-dev-yaml-for-development-to-avoid-conflicting-with-core-yaml-in-production" aria-hidden="true">#</a> Notice: You should add core_dev.yaml for development to avoid conflicting with core.yaml in production.</h5><blockquote><p>Add api/etc/core_dev.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0 <span class="token comment"># ip can be 0.0.0.0 or 127.0.0.1, it should be 0.0.0.0 if you want to access from another host</span>
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2  <span class="token comment"># JWT encrypt code</span>
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span>  <span class="token comment"># seconds, expire duration</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> coreApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/api  <span class="token comment"># log saving path，use filebeat to sync</span>
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>  <span class="token comment"># Save time (Day)</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>  <span class="token comment"># Change to your own redis address</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
  <span class="token comment"># Pass: xxx  # You can also set the password </span>

<span class="token comment"># The main difference between k8s and local development</span>
<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># the same as rpc address</span>

<span class="token key atrule">Captcha</span><span class="token punctuation">:</span>
  <span class="token key atrule">KeyLong</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># captcha key length</span>
  <span class="token key atrule">ImgWidth</span><span class="token punctuation">:</span> <span class="token number">240</span> <span class="token comment"># captcha image width</span>
  <span class="token key atrule">ImgHeight</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># captcha image height</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql <span class="token comment"># support mysql and postgres</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>  <span class="token comment"># change to your own mysql address</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin <span class="token comment"># database name, you can set your own name</span>
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root   <span class="token comment"># username </span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># the maximum number of opened connections in the  connection pool</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable <span class="token comment"># in postgresql, disable or require</span>

<span class="token comment"># casbin rule</span>
<span class="token key atrule">CasbinConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">ModelText</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    [request_definition]
    r = sub, obj, act
    [policy_definition]
    p = sub, obj, act
    [role_definition]
    g = _, _
    [policy_effect]
    e = some(where (p.eft == allow))
    [matchers]
    m = r.sub == p.sub &amp;&amp; keyMatch2(r.obj,p.obj) &amp;&amp; r.act == p.act</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><blockquote><p>Small website use endpoint connect directly</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># the same as rpc address</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>it does not need service discovery，when you develop locally, you should also use this mode. There can be several endpoints.</p></blockquote></div><blockquote><p>Add rpc/etc/core_dev.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.rpc
<span class="token key atrule">ListenOn</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9101</span>  <span class="token comment"># ip can be 0.0.0.0 or 127.0.0.1, it should be 0.0.0.0 if you want to access from another host</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql <span class="token comment"># support mysql and postgres</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>  <span class="token comment"># change to your own mysql address</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin <span class="token comment"># database name, you can set your own name</span>
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root   <span class="token comment"># username </span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># the maximum number of opened connections in the  connection pool</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable <span class="token comment"># in postgresql, disable or require</span>
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># second, database cache time，it will cause delay when update or create，but it can help to speed up get data.</span>

<span class="token comment"># casbin rule</span>
<span class="token key atrule">CasbinConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">ModelText</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    [request_definition]
    r = sub, obj, act
    [policy_definition]
    p = sub, obj, act
    [role_definition]
    g = _, _
    [policy_effect]
    e = some(where (p.eft == allow))
    [matchers]
    m = r.sub == p.sub &amp;&amp; keyMatch2(r.obj,p.obj) &amp;&amp; r.act == p.act</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> coreApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/api  <span class="token comment"># log saving path，use filebeat to sync</span>
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>  <span class="token comment"># Save time (Day)</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>


<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>  <span class="token comment"># Change to your own redis address</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
  <span class="token comment"># Pass: xxx  # You can also set the password </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sync-dependencies" tabindex="-1"><a class="header-anchor" href="#sync-dependencies" aria-hidden="true">#</a> Sync dependencies</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="run-rpc-service" tabindex="-1"><a class="header-anchor" href="#run-rpc-service" aria-hidden="true">#</a> Run rpc service</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> rpc

go run core.go <span class="token parameter variable">-f</span> etc/core_dev.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="run-api-service" tabindex="-1"><a class="header-anchor" href="#run-api-service" aria-hidden="true">#</a> Run api service</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> api

go run core.go <span class="token parameter variable">-f</span> etc/core_dev.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="frontend-setting" tabindex="-1"><a class="header-anchor" href="#frontend-setting" aria-hidden="true">#</a> Frontend setting</h2><h3 id="clone-the-code" tabindex="-1"><a class="header-anchor" href="#clone-the-code" aria-hidden="true">#</a> Clone the code</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-backend-ui.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sync-dependencies-1" tabindex="-1"><a class="header-anchor" href="#sync-dependencies-1" aria-hidden="true">#</a> Sync dependencies</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>If downloading dependencies fails, please upgrade pnpm to the latest version</p></div><h3 id="run-in-development-mode" tabindex="-1"><a class="header-anchor" href="#run-in-development-mode" aria-hidden="true">#</a> Run in development mode</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> Build</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="preview" tabindex="-1"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># build and preview</span>
<span class="token function">pnpm</span> preview

<span class="token comment"># preview existing directory</span>
<span class="token function">pnpm</span> preview:dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Notice: Set the API address</p></blockquote><blockquote><p>.env.development</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Whether to open mock
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Mainly modify sys-api in VITE_PROXY， use localhost or 127.0.0.1 to connect local service，\\ you can also set your own address, file-manager is the API for upload it is optional</p></blockquote><h2 id="initialize-database" tabindex="-1"><a class="header-anchor" href="#initialize-database" aria-hidden="true">#</a> Initialize database</h2><div class="hint-container warning"><p class="hint-container-title">Note</p><p><em><strong>Important:</strong></em> You should create the database before initialization, the database name should be the same as core_dev.yaml.</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># visit the address</span>
https://address:port/init

<span class="token comment"># default is</span>
https://localhost:3100/init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>You can see</p></blockquote><figure><img src="`+o+'" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure>',42),_=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"Note"),n("p",null,[n("strong",null,"After initialization, you should restart api and rpc service.")])],-1);function x(q,w){const l=t("ExternalLinkIcon"),a=t("RouterLink");return d(),p("div",null,[m,v,n("ul",null,[b,k,h,g,n("li",null,[n("a",y,[s("go-swagger"),e(l)])]),n("li",null,[e(a,{to:"/guide/basic-config/simple-admin-tools.html"},{default:i(()=>[s("Simple Admin Tool")]),_:1})])]),f,n("blockquote",null,[n("p",null,[s("File manager service is optional "),e(a,{to:"/simple-admin/en/docs/file_manager.html"},{default:i(()=>[s("File Manager")]),_:1})])]),_])}const L=c(u,[["render",x],["__file","env_setting.html.vue"]]);export{L as default};
