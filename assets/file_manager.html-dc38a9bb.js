import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as p,a as n,b as s,d as i,e as c}from"./app-32cc172f.js";const o={},u=c(`<h2 id="文件上传服务" tabindex="-1"><a class="header-anchor" href="#文件上传服务" aria-hidden="true">#</a> 文件上传服务</h2><h3 id="下载代码" tabindex="-1"><a class="header-anchor" href="#下载代码" aria-hidden="true">#</a> 下载代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-file.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改配置文件-etc-file-yaml" tabindex="-1"><a class="header-anchor" href="#修改配置文件-etc-file-yaml" aria-hidden="true">#</a> 修改配置文件 etc/file.yaml</h3><h4 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> file_manager_0
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9102</span>
<span class="token key atrule">MaxBytes</span><span class="token punctuation">:</span> <span class="token number">1073741824</span> <span class="token comment"># 所有类型的最大容量 : 1 gb</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span> <span class="token comment"># 超时时间</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span> <span class="token comment"># Seconds</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> fileManagerLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/file/api
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node

<span class="token comment"># File Manager 服务的数据库</span>
<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> <span class="token comment"># set your username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token comment"># set your password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token comment"># Casbin 数据库，需要 Core鉴权的话和 Core 保持一致</span>
<span class="token key atrule">CasbinDatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> <span class="token comment"># set your username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token comment"># set your password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">UploadConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">MaxImageSize</span><span class="token punctuation">:</span> <span class="token number">33554432</span> <span class="token comment"># 32 mb 最大图片大小</span>
  <span class="token key atrule">MaxVideoSize</span><span class="token punctuation">:</span> <span class="token number">1073741824</span> <span class="token comment"># 1gb 最大视频大小</span>
  <span class="token key atrule">MaxAudioSize</span><span class="token punctuation">:</span> <span class="token number">33554432</span> <span class="token comment"># 32mb 最大音频大小</span>
  <span class="token key atrule">MaxOtherSize</span><span class="token punctuation">:</span> <span class="token number">10485760</span> <span class="token comment"># 10 mb 最大其他类型大小</span>
  <span class="token key atrule">PrivateStorePath</span><span class="token punctuation">:</span> /home/ryan/www/private <span class="token comment"># private 私有文件路径</span>
  <span class="token key atrule">PublicStorePath</span><span class="token punctuation">:</span> /home/ryan/www/public <span class="token comment"># public path for every one access e.g. nginx path 公开文件路径</span>

<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Target</span><span class="token punctuation">:</span> k8s<span class="token punctuation">:</span>//default/core<span class="token punctuation">-</span>rpc<span class="token punctuation">-</span>svc<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># core rpc address, use endpoint in local | core 服务RPC地址，本地测试使用直连</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"相关信息",-1),k=n("li",null,[n("p",null,"你可以使用 nginx 将 PublicStorePath 转发为静态地址方便前端调用")],-1),m=n("li",null,[n("p",null,"确保 AccessSecret 和 simple-admin-core 的 api 配置文件内一致")],-1),v=n("li",null,[n("p",null,"配置方式参考 core")],-1),b=n("li",null,[n("p",null,"运行方式同理")],-1),h={href:"http://localhost:3100/init",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,[n("p",null,"在角色页面添加 API 接口权限，然后重启 file 的 API，v1.0.14 之后无需重启")],-1),_=n("h3",{id:"k8s-部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#k8s-部署","aria-hidden":"true"},"#"),s(" K8s 部署")],-1),f=n("blockquote",null,[n("p",null,"和 core api 相似")],-1),g=n("p",null,"你应该做如下工作:",-1),x=n("ul",null,[n("li",null,"通过 fileapi.yaml 部署服务"),n("li",null,"修改 simple-admin-backend-ui/deploy/default.conf ，解开 file-manager 注释"),n("li",null,"更新 ingress configmap"),n("li",null,"更新 ingress controller")],-1);function S(C,P){const a=l("ExternalLinkIcon");return t(),p("div",null,[u,n("div",r,[d,n("ul",null,[k,m,v,b,n("li",null,[n("p",null,[s("初始化数据库 "),n("a",h,[s("http://localhost:3100/init"),i(a)])])]),y])]),_,f,g,x])}const D=e(o,[["render",S],["__file","file_manager.html.vue"]]);export{D as default};
