import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as p,a as n,b as s,d as c,e as a}from"./app-bc036cbf.js";const o={},u=a(`<h2 id="member-service" tabindex="-1"><a class="header-anchor" href="#member-service" aria-hidden="true">#</a> Member Service</h2><h3 id="get-code" tabindex="-1"><a class="header-anchor" href="#get-code" aria-hidden="true">#</a> Get code</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># get api code</span>
<span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-member-api.git

<span class="token comment"># get rpc code</span>
<span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-member-rpc.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modify-configuration-file" tabindex="-1"><a class="header-anchor" href="#modify-configuration-file" aria-hidden="true">#</a> Modify configuration file</h3><p>The config file is similar with core service&#39;s.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>You should check the CoreRpc config in rpc service and the MmsConf in api service.</p></div>`,6),r={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"Info",-1),m=n("li",null,"Make sure AccessSecret is the same as simple-admin-core's api set",-1),k=n("li",null,"The configuration is similar as core",-1),v=n("li",null,"Run code the same as core",-1),b={href:"http://localhost:3100/init",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,"Add API interface permissions on the role page, then restart the API service of member. You do not need to restart service after v1.0.14.",-1),f=a(`<h3 id="k8s-deployment" tabindex="-1"><a class="header-anchor" href="#k8s-deployment" aria-hidden="true">#</a> K8s Deployment</h3><blockquote><p>It is similar with core api.</p></blockquote><p>You should do these step:</p><ul><li>deploy the images via docker</li><li>modify simple-admin-backend-ui/deploy/default.conf, uncomment the mms-api rule</li><li>update ingress configmap</li><li>update ingress controller</li></ul><h3 id="configuration-file" tabindex="-1"><a class="header-anchor" href="#configuration-file" aria-hidden="true">#</a> Configuration file</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> mms.api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9104</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2 <span class="token comment"># the same as core</span>
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span>

<span class="token key atrule">CROSConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Address</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> mmsApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/data/logs/mms/api
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4000</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> postgres
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 10.5.0.2
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">5432</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> postgres <span class="token comment"># set your username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> simple<span class="token punctuation">-</span>admin. <span class="token comment"># set your password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span>

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

<span class="token key atrule">ProjectConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">UseCaptcha</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># Whether to use captcha，if false, you do not need to add  \`captcha, captchaId\` in request</span>
  <span class="token key atrule">DefaultRankID</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># The default rank ID when register</span>
  <span class="token key atrule">EmailCaptchaExpiredTime</span><span class="token punctuation">:</span> <span class="token number">600</span> <span class="token comment"># The expired time for email captcha</span>
  <span class="token key atrule">SmsTemplateId</span><span class="token punctuation">:</span> xxx <span class="token comment"># The template id for sms</span>
  <span class="token key atrule">SmsAppId</span><span class="token punctuation">:</span> xxx <span class="token comment"># The app id for sms</span>
  <span class="token key atrule">SmsSignName</span><span class="token punctuation">:</span> xxx <span class="token comment"># The signature name of sms</span>

<span class="token key atrule">MmsRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Target</span><span class="token punctuation">:</span> k8s<span class="token punctuation">:</span>//default/mms<span class="token punctuation">-</span>rpc<span class="token punctuation">-</span>svc<span class="token punctuation">:</span><span class="token number">9103</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Target</span><span class="token punctuation">:</span> k8s<span class="token punctuation">:</span>//default/core<span class="token punctuation">-</span>rpc<span class="token punctuation">-</span>svc<span class="token punctuation">:</span><span class="token number">9101</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">McmsRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Target</span><span class="token punctuation">:</span> k8s<span class="token punctuation">:</span>//default/mcms<span class="token punctuation">-</span>rpc<span class="token punctuation">-</span>svc<span class="token punctuation">:</span><span class="token number">9106</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function y(g,_){const e=i("ExternalLinkIcon");return l(),p("div",null,[u,n("div",r,[d,n("ul",null,[m,k,v,n("li",null,[s("Init database in "),n("a",b,[s("http://localhost:3100/init"),c(e)])]),h])]),f])}const C=t(o,[["render",y],["__file","member.html.vue"]]);export{C as default};
