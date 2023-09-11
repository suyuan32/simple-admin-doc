import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as i,a as n,b as s,d as o,e as p}from"./app-421e0ef1.js";const c={},u=p(`<h2 id="file-manager-service" tabindex="-1"><a class="header-anchor" href="#file-manager-service" aria-hidden="true">#</a> File manager service</h2><h3 id="get-code" tabindex="-1"><a class="header-anchor" href="#get-code" aria-hidden="true">#</a> Get code</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-file.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="modify-configuration-file" tabindex="-1"><a class="header-anchor" href="#modify-configuration-file" aria-hidden="true">#</a> Modify configuration file</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> file_manager_0
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9102</span>
<span class="token key atrule">MaxBytes</span><span class="token punctuation">:</span> <span class="token number">1073741824</span> <span class="token comment"># max content length : 1 gb</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span> <span class="token comment"># bigger max bytes need longer timeout</span>

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

<span class="token comment"># The database of file manager service.</span>
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

<span class="token comment"># Casbin database, normally, it is the same as Core.</span>
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
  <span class="token key atrule">MaxImageSize</span><span class="token punctuation">:</span> <span class="token number">33554432</span> <span class="token comment"># 32 mb the maximum size of image</span>
  <span class="token key atrule">MaxVideoSize</span><span class="token punctuation">:</span> <span class="token number">1073741824</span> <span class="token comment"># 1gb the maximum size of video</span>
  <span class="token key atrule">MaxAudioSize</span><span class="token punctuation">:</span> <span class="token number">33554432</span> <span class="token comment"># 32mb the maximum size of audio</span>
  <span class="token key atrule">MaxOtherSize</span><span class="token punctuation">:</span> <span class="token number">10485760</span> <span class="token comment"># 10 mb the maximum size of other type</span>
  <span class="token key atrule">PrivateStorePath</span><span class="token punctuation">:</span> /home/ryan/www/private <span class="token comment"># private path</span>
  <span class="token key atrule">PublicStorePath</span><span class="token punctuation">:</span> /home/ryan/www/public <span class="token comment"># public path for every one access e.g. nginx path</span>
  <span class="token key atrule">ServerURL</span><span class="token punctuation">:</span> <span class="token string">&quot;http://192.168.50.204:81&quot;</span> <span class="token comment"># the local url to access the files</span>
  <span class="token key atrule">DeleteFileWithCloud</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># whether to delete cloud file when delete the data in database</span>

<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Target</span><span class="token punctuation">:</span> k8s<span class="token punctuation">:</span>//default/core<span class="token punctuation">-</span>rpc<span class="token punctuation">-</span>svc<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># core rpc address, use endpoint in local | core 服务RPC地址，本地测试使用直连</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"Info",-1),m=n("li",null,"You should use nginx to set PublicStorePath as static path for front end.",-1),k=n("li",null,"Make sure AccessSecret is the same as simple-admin-core's api set",-1),v=n("li",null,"The configuration is similar as core",-1),b=n("li",null,"Run code the same as core",-1),h={href:"http://localhost:3100/init",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,"Add API interface permissions on the role page, then restart the API service of file manager. You do not need to restart service after v1.0.14.",-1),f=n("h3",{id:"k8s-deployment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#k8s-deployment","aria-hidden":"true"},"#"),s(" K8s Deployment")],-1),g=n("blockquote",null,[n("p",null,"It is similar with core api.")],-1),_=n("p",null,"You should do these step:",-1),x=n("ul",null,[n("li",null,"deploy the images via fileapi.yaml"),n("li",null,"modify simple-admin-backend-ui/deploy/default.conf, uncomment the file manager rule"),n("li",null,"update ingress configmap"),n("li",null,"update ingress controller")],-1);function S(C,P){const a=t("ExternalLinkIcon");return l(),i("div",null,[u,n("div",r,[d,n("ul",null,[m,k,v,b,n("li",null,[s("Init database in "),n("a",h,[s("http://localhost:3100/init"),o(a)])]),y])]),f,g,_,x])}const z=e(c,[["render",S],["__file","file_manager.html.vue"]]);export{z as default};
