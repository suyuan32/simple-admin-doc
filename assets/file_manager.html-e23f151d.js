import{_ as e,W as t,X as l,Y as n,Z as s,$ as p,a0 as c,F as o}from"./framework-6f82d902.js";const i={},u=c(`<h2 id="文件上传服务" tabindex="-1"><a class="header-anchor" href="#文件上传服务" aria-hidden="true">#</a> 文件上传服务</h2><blockquote><p>下载代码</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-file.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>修改配置文件 etc/file.yaml</p></blockquote><h4 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> file_manager_0
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9102</span>
<span class="token key atrule">MaxBytes</span><span class="token punctuation">:</span> <span class="token number">1073741824</span> <span class="token comment"># max content length : 1 gb</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span> <span class="token comment"># bigger max bytes need longer timeout</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span>  <span class="token comment"># Seconds</span>

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

<span class="token key atrule">UploadConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">MaxImageSize</span><span class="token punctuation">:</span> <span class="token number">33554432</span>  <span class="token comment"># 32 mb 最大图片大小</span>
  <span class="token key atrule">MaxVideoSize</span><span class="token punctuation">:</span> <span class="token number">1073741824</span> <span class="token comment"># 1gb 最大视频大小</span>
  <span class="token key atrule">MaxAudioSize</span><span class="token punctuation">:</span> <span class="token number">33554432</span>  <span class="token comment"># 32mb 最大音频大小</span>
  <span class="token key atrule">MaxOtherSize</span><span class="token punctuation">:</span> <span class="token number">10485760</span>  <span class="token comment"># 10 mb 最大其他类型大小</span>
  <span class="token key atrule">PrivateStorePath</span><span class="token punctuation">:</span> /home/ryan/www/private  <span class="token comment"># private 私有文件路径</span>
  <span class="token key atrule">PublicStorePath</span><span class="token punctuation">:</span> /home/ryan/www/public  <span class="token comment"># public path for every one access e.g. nginx path 公开文件路径</span>

<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Target</span><span class="token punctuation">:</span> k8s<span class="token punctuation">:</span>//default/core<span class="token punctuation">-</span>rpc<span class="token punctuation">-</span>svc<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># core rpc address, use endpoint in local | core 服务RPC地址，本地测试使用直连</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>你可以使用nginx 将 PublicStorePath 转发为静态地址方便前端调用</p></blockquote>`,7),r={href:"http://localhost:3100/init",target:"_blank",rel:"noopener noreferrer"},k=n("h3",{id:"k8s-部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#k8s-部署","aria-hidden":"true"},"#"),s(" K8s 部署")],-1),d=n("blockquote",null,[n("p",null,"和 core api 相似")],-1),m=n("p",null,"你应该做如下工作:",-1),v=n("ul",null,[n("li",null,"通过 fileapi.yaml 部署服务"),n("li",null,"修改 simple-admin-backend-ui/deploy/default.conf ，解开 file-manager注释"),n("li",null,"更新 ingress configmap"),n("li",null,"更新 ingress controller")],-1);function b(y,h){const a=o("ExternalLinkIcon");return t(),l("div",null,[u,n("blockquote",null,[n("p",null,[s("确保 AccessSecret 和 simple-admin-core的api配置文件内一致 配置方式参考core 运行方式同理 初始化数据库 "),n("a",r,[s("http://localhost:3100/init"),p(a)])])]),k,d,m,v])}const g=e(i,[["render",b],["__file","file_manager.html.vue"]]);export{g as default};
