import{_ as c}from"./init_zh_cn-25f120d7.js";import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as d,a as n,b as s,d as a,w as t,e as r}from"./app-dca4f23c.js";const u={},m=n("h1",{id:"本地开发环境配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本地开发环境配置","aria-hidden":"true"},"#"),s(" 本地开发环境配置")],-1),v=n("h2",{id:"环境需求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境需求","aria-hidden":"true"},"#"),s(" 环境需求")],-1),k=n("li",null,"golang 1.20 +",-1),b=n("li",null,[n("strong",null,"nodejs 19.8.0 +")],-1),h=n("li",null,[n("strong",null,"mysql 8.0.21 +"),s(" | MariaDB 10.7 + | Postgres 13 + ("),n("strong",null,"Postgres 14 推荐"),s(")")],-1),g=n("li",null,"redis 7.0 +",-1),y={href:"https://goswagger.io/install.html",target:"_blank",rel:"noopener noreferrer"},_={class:"hint-container info"},f=n("p",{class:"hint-container-title"},"相关信息",-1),q=n("code",null,"Ubuntu 22.10",-1),x=n("br",null,null,-1),P=n("code",null,"Windows",-1),C={href:"https://learn.microsoft.com/en-us/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"},E={class:"hint-container info"},w=n("p",{class:"hint-container-title"},"相关信息",-1),I={href:"https://www.bilibili.com/video/BV1Hg4y1M7T5",target:"_blank",rel:"noopener noreferrer"},S={href:"https://vben.ryansu.pro/zh/",target:"_blank",rel:"noopener noreferrer"},L=n("h2",{id:"后端部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#后端部署","aria-hidden":"true"},"#"),s(" 后端部署")],-1),D={class:"hint-container warning"},T=n("p",{class:"hint-container-title"},"注意",-1),A={href:"https://www.bilibili.com/video/BV1do4y1g7VL",target:"_blank",rel:"noopener noreferrer"},R=r(`<h3 id="simple-admin-core" tabindex="-1"><a class="header-anchor" href="#simple-admin-core" aria-hidden="true">#</a> simple admin core</h3><p>simple admin core 是核心代码，主要负责用户注册鉴权和充当网关的角色以及后台的各类配置。</p><div class="hint-container info"><p class="hint-container-title">默认账号</p><p>username: <strong>admin</strong><br> password: <strong>simple-admin</strong></p></div><h3 id="下载代码" tabindex="-1"><a class="header-anchor" href="#下载代码" aria-hidden="true">#</a> 下载代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-core.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="本地调试配置" tabindex="-1"><a class="header-anchor" href="#本地调试配置" aria-hidden="true">#</a> 本地调试配置</h3><h4 id="api-服务" tabindex="-1"><a class="header-anchor" href="#api-服务" aria-hidden="true">#</a> API 服务</h4><h5 id="注意本地测试最好创建-core-dev-yaml-与部署文件-core-yaml-区分开" tabindex="-1"><a class="header-anchor" href="#注意本地测试最好创建-core-dev-yaml-与部署文件-core-yaml-区分开" aria-hidden="true">#</a> 注意本地测试最好创建 core_dev.yaml 与部署文件 core.yaml 区分开</h5><blockquote><p>添加 api/etc/core_dev.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0 <span class="token comment"># ip可以是0.0.0.0也可以是127.0.0.1,如需其他外部主机访问则需要为 0.0.0.0</span>
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2 <span class="token comment"># JWT的加密密钥，各个API应保持一致才能解析</span>
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span> <span class="token comment"># 秒，过期时间</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> coreApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/api <span class="token comment"># log 保存路径，使用filebeat同步</span>
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span> <span class="token comment"># 保存时长（天）</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span> <span class="token comment"># 改成自己的redis地址</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
  <span class="token comment"># Pass: xxx  # 也可以设置密码</span>

<span class="token comment"># 与 k8s 主要是此处服务发现不同</span>
<span class="token comment"># 核心模块</span>
<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># 与 Core RPC 地址相同</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否启用</span>

<span class="token comment"># 定时任务模块</span>
<span class="token key atrule">JobRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9105</span> <span class="token comment"># 与 Job RPC 地址相同</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 是否启用</span>

<span class="token key atrule">Captcha</span><span class="token punctuation">:</span>
  <span class="token key atrule">KeyLong</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 验证码长度</span>
  <span class="token key atrule">ImgWidth</span><span class="token punctuation">:</span> <span class="token number">240</span> <span class="token comment"># 验证码图片宽度</span>
  <span class="token key atrule">ImgHeight</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># 验证码图片高度</span>
  <span class="token key atrule">Driver</span><span class="token punctuation">:</span> digit <span class="token comment"># 支持三种驱动 digit, string, math, 默认为 digit</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql <span class="token comment"># 支持 mysql, postgres, sqlite3</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span> <span class="token comment"># 修改成自己的mysql地址</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin <span class="token comment"># 数据库名称</span>
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root <span class="token comment"># 用户名</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># 密码</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># 最大连接数</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable <span class="token comment"># 是否在 postgresql 中使用 SSL, disable 或 require</span>
<span class="token comment"># DBPath: /home/data/sqlite.db # Sqlite 数据库文件存放位置，使用 sqlite3时必须设置</span>
<span class="token comment"># MysqlConfig: &#39;&amp;charset=utf8&amp;loc=Asia/Shanghai&#39; # Mysql的额外配置</span>
<span class="token comment"># PGConfig: &#39;&#39;  # Postgresql 的额外配置</span>
<span class="token comment"># SqliteConfig: &#39;&#39; # Sqlite 的额外配置</span>

<span class="token comment"># casbin 规则</span>
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
  <span class="token key atrule">Dir</span><span class="token punctuation">:</span> <span class="token comment"># I18n 文件的外部路径，若不为空则会读取外部，若为空则读取二进制文件内部的i18n文件</span>

<span class="token key atrule">ProjectConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">DefaultRole</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 注册用户默认的角色ID</span>
  <span class="token key atrule">DefaultDepartment</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 注册用户默认的部门 ID</span>
  <span class="token key atrule">DefaultPosition</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 注册用户默认的职位 ID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><blockquote><p>小型网站直接使用</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># the same as rpc address</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>的方式直连，不需要服务发现，本地调试也是使用直连的方式， Endpoints 可以有多个</p></blockquote></div><blockquote><p>添加 rpc/etc/core_dev.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.rpc
<span class="token key atrule">ListenOn</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># ip可以是0.0.0.0也可以是127.0.0.1,如需其他外部主机访问则需要为 0.0.0.0</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql <span class="token comment"># 支持 mysql, postgres, sqlite3</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span> <span class="token comment"># 修改成自己的mysql地址</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin <span class="token comment"># 数据库名称</span>
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root <span class="token comment"># 用户名</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># 密码</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># 最大连接数</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable <span class="token comment"># 是否在 postgresql 中使用 SSL, disable 或 require</span>
<span class="token comment"># DBPath: /home/data/sqlite.db # Sqlite 数据库文件存放位置，使用 sqlite3时必须设置</span>
<span class="token comment"># MysqlConfig: &#39;&amp;charset=utf8&amp;loc=Asia/Shanghai&#39; # Mysql的额外配置</span>
<span class="token comment"># PGConfig: &#39;&#39;  # Postgresql 的额外配置</span>
<span class="token comment"># SqliteConfig: &#39;&#39; # Sqlite 的额外配置</span>

<span class="token comment"># casbin 规则</span>
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
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> coreRpcLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/rpc <span class="token comment"># log 保存路径，使用filebeat同步</span>
  <span class="token key atrule">Encoding</span><span class="token punctuation">:</span> json
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span> <span class="token comment"># 保存时长（天）</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 192.168.50.216<span class="token punctuation">:</span><span class="token number">6379</span> <span class="token comment"># 改成自己的redis地址</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
  <span class="token comment"># Pass: xxx  # 也可以设置密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置依赖" tabindex="-1"><a class="header-anchor" href="#配置依赖" aria-hidden="true">#</a> 配置依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="运行-rpc-服务" tabindex="-1"><a class="header-anchor" href="#运行-rpc-服务" aria-hidden="true">#</a> 运行 rpc 服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> rpc

go run core.go <span class="token parameter variable">-f</span> etc/core_dev.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行-api-服务" tabindex="-1"><a class="header-anchor" href="#运行-api-服务" aria-hidden="true">#</a> 运行 api 服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> api

go run core.go <span class="token parameter variable">-f</span> etc/core_dev.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前端配置" tabindex="-1"><a class="header-anchor" href="#前端配置" aria-hidden="true">#</a> 前端配置</h2><h3 id="下载代码-1" tabindex="-1"><a class="header-anchor" href="#下载代码-1" aria-hidden="true">#</a> 下载代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-backend-ui.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="下载依赖" tabindex="-1"><a class="header-anchor" href="#下载依赖" aria-hidden="true">#</a> 下载依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果下载依赖失败，请升级 pnpm 至最新版</p></div><h3 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译后再预览</span>
<span class="token function">pnpm</span> preview

<span class="token comment"># 直接预览dist文件夹，不重复编译</span>
<span class="token function">pnpm</span> preview:dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意-配置后端-api-地址" tabindex="-1"><a class="header-anchor" href="#注意-配置后端-api-地址" aria-hidden="true">#</a> 注意 配置后端 API 地址</h3><blockquote><p>.env.development</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Whether to open mock
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>主要修改 VITE_PROXY 中的 sys-api 配置， 使用 localhost 或 127.0.0.1 调试本地，也可设置成其他远程 ip, filemanager 访问的是文件服务</p></blockquote><h2 id="初始化数据库" tabindex="-1"><a class="header-anchor" href="#初始化数据库" aria-hidden="true">#</a> 初始化数据库</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong><em>重要:</em></strong> 在初始化数据库前必须先创建数据库, 数据库名称和配置文件中的名称相同.</p><p><strong>初始化完成后需要重启 API, 用于刷新 casbin 缓存</strong></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 访问前端地址端口</span>
https://address:port/init

<span class="token comment"># 默认</span>
https://localhost:3100/init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入界面</p><figure><img src="`+c+'" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><blockquote><p>文件服务初始化是可选的，没有运行文件 api 可以不初始化</p></blockquote>',41);function M(B,V){const e=l("ExternalLinkIcon"),i=l("RouterLink");return p(),d("div",null,[m,v,n("ul",null,[k,b,h,g,n("li",null,[n("a",y,[s("go-swagger"),a(e)])]),n("li",null,[a(i,{to:"/zh/guide/basic-config/simple-admin-tools.html"},{default:t(()=>[s("Simple Admin Tool")]),_:1})])]),n("div",_,[f,n("p",null,[s("推荐在 linux 下开发，因为需要用到 make 命令，官方在 "),q,s(" 环境下开发. "),x,n("strong",null,[P,s(" 用户建议自行配置环境， 参考 "),a(i,{to:"/zh/guide/FAQ.html#%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE-windows-%E7%8E%AF%E5%A2%83"},{default:t(()=>[s("Windows")]),_:1}),s("， 或者在 "),n("a",C,[s("WSL"),a(e)]),s(" 环境下开发")])])]),n("div",E,[w,n("p",null,[n("a",I,[s("视频教程"),a(e)]),s(),n("a",S,[s("Backend UI 文档"),a(e)])])]),L,n("div",D,[T,n("p",null,[s("除非要二次开发 core 服务， 否则建议直接接入官方镜像， 参考教程 "),n("a",A,[s("直接接入 Core 服务"),a(e)])])]),R])}const N=o(u,[["render",M],["__file","env_setting.html.vue"]]);export{N as default};
