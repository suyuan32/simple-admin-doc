import{_ as p}from"./init_zh_cn-_lrlSFyJ.js";import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c as u,a as n,f as s,b as a,w as l,e as o}from"./app-DqXjkZhl.js";const d={},m=n("blockquote",null,[n("p",null,"Environment Requirement")],-1),v=n("li",null,"golang 1.20 +",-1),k=n("li",null,[n("strong",null,"nodejs 19.8.0 +")],-1),b=n("li",null,[n("strong",null,"mysql 8.0.30 +"),s(" | MariaDB 10.10 + | Postgres 13 + ("),n("strong",null,"Postgres 14 recommended"),s(")")],-1),h=n("li",null,"redis 7.0 +",-1),g={href:"https://goswagger.io/install.html",target:"_blank",rel:"noopener noreferrer"},y={class:"hint-container info"},f=n("p",{class:"hint-container-title"},"Info",-1),_=n("p",null,[n("strong",null,"It is recommended to use PostgreSQL Database.")],-1),q=n("br",null,null,-1),w=n("code",null,"Windows",-1),x={href:"https://learn.microsoft.com/en-us/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"},S={class:"hint-container info"},C=n("p",{class:"hint-container-title"},"Info",-1),P={href:"https://vben.ryansu.tech/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://youtu.be/_RDvlaKRRTY",target:"_blank",rel:"noopener noreferrer"},D=o('<h2 id="backend-setting" tabindex="-1"><a class="header-anchor" href="#backend-setting"><span>Backend Setting</span></a></h2><h3 id="simple-admin-core" tabindex="-1"><a class="header-anchor" href="#simple-admin-core"><span>Simple Admin Core</span></a></h3><p>Simple Admin Core is the core service for Simple Admin. It offers user management, authorization, menu management and API management and so on. It must be running.</p><div class="hint-container info"><p class="hint-container-title">Default Account</p><p>username: <strong>admin</strong><br> password: <strong>simple-admin</strong></p></div>',4),I={class:"hint-container warning"},A=n("p",{class:"hint-container-title"},"Warning",-1),T={href:"https://youtu.be/gpXOoJEeOHg",target:"_blank",rel:"noopener noreferrer"},L=o(`<blockquote><p>Clone the core code</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-core.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="local-development-setting" tabindex="-1"><a class="header-anchor" href="#local-development-setting"><span>Local development setting</span></a></h3><h4 id="api-service" tabindex="-1"><a class="header-anchor" href="#api-service"><span>API Service</span></a></h4><h5 id="notice-you-should-add-core-dev-yaml-for-development-to-avoid-conflicting-with-core-yaml-in-production" tabindex="-1"><a class="header-anchor" href="#notice-you-should-add-core-dev-yaml-for-development-to-avoid-conflicting-with-core-yaml-in-production"><span>Notice: You should add core_dev.yaml for development to avoid conflicting with core.yaml in production.</span></a></h5><blockquote><p>Add api/etc/core_dev.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0 <span class="token comment"># ip can be 0.0.0.0 or 127.0.0.1, it should be 0.0.0.0 if you want to access from another host</span>
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2 <span class="token comment"># JWT encrypt code</span>
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span> <span class="token comment"># seconds, expire duration</span>

<span class="token comment"># Cross domain config</span>
<span class="token key atrule">CROSConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Address</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> coreApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/api <span class="token comment"># log saving path，use filebeat to sync</span>
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span> <span class="token comment"># Save time (Day)</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span> <span class="token comment"># Change to your own redis address</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
  <span class="token comment"># Pass: xxx  # You can also set the password</span>

<span class="token comment"># The main difference between k8s and local development</span>
<span class="token comment"># Core service</span>
<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># The same as Core RPC&#39;s address.</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># Whether to enable the service</span>

<span class="token comment"># Scheduled Task RPC service</span>
<span class="token key atrule">JobRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9105</span> <span class="token comment"># The same as Job RPC&#39;s address.</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># Whether to enable the service</span>

<span class="token comment"># Message Center Module</span>
<span class="token key atrule">McmsRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9106</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>

<span class="token key atrule">Captcha</span><span class="token punctuation">:</span>
  <span class="token key atrule">KeyLong</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># captcha key length</span>
  <span class="token key atrule">ImgWidth</span><span class="token punctuation">:</span> <span class="token number">240</span> <span class="token comment"># captcha image width</span>
  <span class="token key atrule">ImgHeight</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># captcha image height</span>
  <span class="token key atrule">Driver</span><span class="token punctuation">:</span> digit <span class="token comment"># support four drivers: digit, string, math and chinese, default is digit</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql <span class="token comment"># support mysql, postgres, sqlite3</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span> <span class="token comment"># change to your own mysql address</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin <span class="token comment"># database name, you can set your own name</span>
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root <span class="token comment"># username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># the maximum number of opened connections in the  connection pool</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable <span class="token comment"># in postgresql, disable or require</span>
<span class="token comment"># DBPath: /home/data/sqlite.db # Database Path, you must set it when you use sqlite3.</span>
<span class="token comment"># MysqlConfig: &#39;&amp;charset=utf8&amp;loc=Asia/Shanghai&#39; # Additional configuration of Mysql</span>
<span class="token comment"># PGConfig: &#39;&#39; # Additional configuration for Postgresql</span>
<span class="token comment"># SqliteConfig: &#39;&#39; # Additional configuration for Sqlite</span>

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

<span class="token key atrule">I18nConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Dir</span><span class="token punctuation">:</span> <span class="token comment"># The external path of the I18n file, if it is not empty, it will read the external, if it is empty, it will read the i18n file inside the binary file</span>

<span class="token key atrule">ProjectConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">DefaultRole</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># default role id when register</span>
  <span class="token key atrule">DefaultDepartment</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># default department id when register</span>
  <span class="token key atrule">DefaultPosition</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># default position id when register</span>
  <span class="token key atrule">EmailCaptchaExpiredTime</span><span class="token punctuation">:</span> <span class="token number">600</span> <span class="token comment"># the expired time for email captcha</span>
  <span class="token key atrule">SmsTemplateId</span><span class="token punctuation">:</span> xxx <span class="token comment"># The template id for sms</span>
  <span class="token key atrule">SmsAppId</span><span class="token punctuation">:</span> xxx <span class="token comment"># the app id for sms</span>
  <span class="token key atrule">SmsSignName</span><span class="token punctuation">:</span> xxx <span class="token comment"># the signature name of sms</span>
  <span class="token key atrule">RegisterVerify</span><span class="token punctuation">:</span> captcha <span class="token comment"># register captcha type, support captcha, email, sms, sms_or_email</span>
  <span class="token key atrule">LoginVerify</span><span class="token punctuation">:</span> captcha <span class="token comment"># login captcha type, support captcha, email, sms, sms_or_email, all</span>
  <span class="token key atrule">ResetVerify</span><span class="token punctuation">:</span> email <span class="token comment"># reset captcha type, support email, sms, sms_or_email</span>
  <span class="token key atrule">AllowInit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># if false, ban initialization</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><blockquote><p>Small website use endpoint connect directly</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># the same as rpc address</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>It does not need service discovery，when you develop locally, you should also use this mode. There can be several endpoints.</p></blockquote></div><blockquote><p>Add rpc/etc/core_dev.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.rpc
<span class="token key atrule">ListenOn</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># ip can be 0.0.0.0 or 127.0.0.1, it should be 0.0.0.0 if you want to access from another host</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql <span class="token comment"># support mysql, postgres, sqlite3</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span> <span class="token comment"># change to your own mysql address</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin <span class="token comment"># database name, you can set your own name</span>
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root <span class="token comment"># username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># the maximum number of opened connections in the  connection pool</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable <span class="token comment"># in postgresql, disable or require</span>
<span class="token comment"># DBPath: /home/data/sqlite.db # Database Path, you must set it when you use sqlite3.</span>
<span class="token comment"># MysqlConfig: &#39;&amp;charset=utf8&amp;loc=Asia/Shanghai&#39; # Additional configuration of Mysql</span>
<span class="token comment"># PGConfig: &#39;&#39; # Additional configuration for Postgresql</span>
<span class="token comment"># SqliteConfig: &#39;&#39; # Additional configuration for Sqlite</span>

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
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/api <span class="token comment"># log saving path，use filebeat to sync</span>
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span> <span class="token comment"># Save time (Day)</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span> <span class="token comment"># Change to your own redis address</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
  <span class="token comment"># Pass: xxx  # You can also set the password</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sync-dependencies" tabindex="-1"><a class="header-anchor" href="#sync-dependencies"><span>Sync dependencies</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="run-rpc-service" tabindex="-1"><a class="header-anchor" href="#run-rpc-service"><span>Run rpc service</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> rpc

go run core.go <span class="token parameter variable">-f</span> etc/core_dev.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="run-api-service" tabindex="-1"><a class="header-anchor" href="#run-api-service"><span>Run api service</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> api

go run core.go <span class="token parameter variable">-f</span> etc/core_dev.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="frontend-setting" tabindex="-1"><a class="header-anchor" href="#frontend-setting"><span>Frontend setting</span></a></h2><h3 id="clone-the-code" tabindex="-1"><a class="header-anchor" href="#clone-the-code"><span>Clone the code</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-backend-ui.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sync-dependencies-1" tabindex="-1"><a class="header-anchor" href="#sync-dependencies-1"><span>Sync dependencies</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>If downloading dependencies fails, please upgrade pnpm to the latest version</p></div><h3 id="run-in-development-mode" tabindex="-1"><a class="header-anchor" href="#run-in-development-mode"><span>Run in development mode</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>Build</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="preview" tabindex="-1"><a class="header-anchor" href="#preview"><span>Preview</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># build and preview</span>
<span class="token function">pnpm</span> preview

<span class="token comment"># preview existing directory</span>
<span class="token function">pnpm</span> preview:dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Notice: Set the API address</p></blockquote><blockquote><p>.env.development</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Whether to open mock
VITE_USE_MOCK = false

# public path
VITE_PUBLIC_PATH = /

VITE_BUILD_COMPRESS = &#39;none&#39;

# Delete console
VITE_DROP_CONSOLE = false

# Basic interface address SPA
VITE_GLOB_API_URL=

# File upload address， optional
VITE_GLOB_UPLOAD_URL=/fms-api/upload

# Interface prefix
VITE_GLOB_API_URL_PREFIX=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Since v1.0.0, you should configure the proxy in <code>vite.config.ts</code>.</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineApplicationConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vben/vite-config&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineApplicationConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  overrides<span class="token operator">:</span> <span class="token punctuation">{</span>
    optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span>
      include<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;echarts/core&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;echarts/charts&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;echarts/components&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;echarts/renderers&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;qrcode&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;@iconify/iconify&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ant-design-vue/es/locale/zh_CN&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ant-design-vue/es/locale/en_US&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    server<span class="token operator">:</span> <span class="token punctuation">{</span>
      proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/sys-api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> <span class="token string">&quot;http://192.168.50.204:9100&quot;</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^/sys-api</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token comment">// only https</span>
          <span class="token comment">// secure: false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/fms-api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> <span class="token string">&quot;http://192.168.50.204:9102&quot;</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^/fms-api</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/mms-api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> <span class="token string">&quot;http://192.168.50.204:9104&quot;</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^/mms-api</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You should set your target <code>ip</code> and rewrite the prefix.</p><h2 id="initialize-database" tabindex="-1"><a class="header-anchor" href="#initialize-database"><span>Initialize database</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Warning</p><p><strong><em>Important:</em></strong> You should create the database before initialization, the database name should be the same as core_dev.yaml.</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># visit the address</span>
https://address:port/init

<span class="token comment"># default is</span>
https://localhost:3100/init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>You can see</p></blockquote><figure><img src="`+p+'" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><blockquote><p>File manager service is optional <a href="/guide/official-comp/file_manager">File Manager</a></p></blockquote>',40);function E(M,B){const e=i("ExternalLinkIcon"),t=i("RouteLink");return r(),u("div",null,[m,n("ul",null,[v,k,b,h,n("li",null,[n("a",g,[s("go-swagger"),a(e)])]),n("li",null,[a(t,{to:"/guide/basic-config/simple-admin-tools.html"},{default:l(()=>[s("Goctls")]),_:1})])]),n("div",y,[f,_,n("p",null,[s("It is recommended to develop under linux, because the make command is required. "),q,n("strong",null,[w,s(" users are recommended to cofigure the environment via "),a(t,{to:"/guide/FAQ.html#how-to-configure-the-windows-environment"},{default:l(()=>[s("Windows")]),_:1}),s(", you can also develop in the "),n("a",x,[s("WSL"),a(e)]),s(" environment.")])])]),n("div",S,[C,n("p",null,[n("a",P,[s("Backend UI Doc"),a(e)]),s(),n("a",R,[s("Video Tutorial"),a(e)])])]),D,n("div",I,[A,n("p",null,[s("Since v1.1.1, we recommend you to use docker to deploy local environment. "),n("a",T,[s("Tutorial"),a(e)])])]),L])}const U=c(d,[["render",E],["__file","env_setting.html.vue"]]),V=JSON.parse('{"path":"/guide/basic-config/env_setting.html","title":"Local Development Setting","lang":"en-US","frontmatter":{"order":1,"title":"Local Development Setting","description":"Environment Requirement golang 1.20 + nodejs 19.8.0 + mysql 8.0.30 + | MariaDB 10.10 + | Postgres 13 + (Postgres 14 recommended) redis 7.0 + go-swagger Info It is recommended to...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/basic-config/env_setting.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/basic-config/env_setting.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Local Development Setting"}],["meta",{"property":"og:description","content":"Environment Requirement golang 1.20 + nodejs 19.8.0 + mysql 8.0.30 + | MariaDB 10.10 + | Postgres 13 + (Postgres 14 recommended) redis 7.0 + go-swagger Info It is recommended to..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/init_zh_cn.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T02:27:17.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-04-08T02:27:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Local Development Setting\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/init_zh_cn.png\\"],\\"dateModified\\":\\"2024-04-08T02:27:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Backend Setting","slug":"backend-setting","link":"#backend-setting","children":[{"level":3,"title":"Simple Admin Core","slug":"simple-admin-core","link":"#simple-admin-core","children":[]},{"level":3,"title":"Local development setting","slug":"local-development-setting","link":"#local-development-setting","children":[]},{"level":3,"title":"Sync dependencies","slug":"sync-dependencies","link":"#sync-dependencies","children":[]},{"level":3,"title":"Run rpc service","slug":"run-rpc-service","link":"#run-rpc-service","children":[]},{"level":3,"title":"Run api service","slug":"run-api-service","link":"#run-api-service","children":[]}]},{"level":2,"title":"Frontend setting","slug":"frontend-setting","link":"#frontend-setting","children":[{"level":3,"title":"Clone the code","slug":"clone-the-code","link":"#clone-the-code","children":[]},{"level":3,"title":"Sync dependencies","slug":"sync-dependencies-1","link":"#sync-dependencies-1","children":[]},{"level":3,"title":"Run in development mode","slug":"run-in-development-mode","link":"#run-in-development-mode","children":[]},{"level":3,"title":"Build","slug":"build","link":"#build","children":[]},{"level":3,"title":"Preview","slug":"preview","link":"#preview","children":[]}]},{"level":2,"title":"Initialize database","slug":"initialize-database","link":"#initialize-database","children":[]}],"git":{"createdTime":1671464359000,"updatedTime":1712543237000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":26},{"name":"Ryan SU","email":"1137661202@qq.com","commits":9},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":3.63,"words":1088},"filePathRelative":"guide/basic-config/env_setting.md","localizedDate":"December 19, 2022","autoDesc":true,"excerpt":"<blockquote>\\n<p>Environment Requirement</p>\\n</blockquote>\\n<ul>\\n<li>golang 1.20 +</li>\\n<li><strong>nodejs 19.8.0 +</strong></li>\\n<li><strong>mysql 8.0.30 +</strong> | MariaDB 10.10 + | Postgres 13 + (<strong>Postgres 14 recommended</strong>)</li>\\n<li>redis 7.0 +</li>\\n<li><a href=\\"https://goswagger.io/install.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">go-swagger</a></li>\\n<li><a href=\\"/guide/basic-config/simple-admin-tools.html\\" target=\\"_blank\\">Goctls</a></li>\\n</ul>"}');export{U as comp,V as data};
