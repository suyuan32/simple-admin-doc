import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as n}from"./app-w09VT_EG.js";const e={},l=n(`<h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h3><p>Simple Admin&#39;s API service for membership service implements features such as membership management, member login, third-party login, and login via phone number or email registration. It also supports login via WeChat Mini Program.</p><h3 id="get-code" tabindex="-1"><a class="header-anchor" href="#get-code"><span>Get code</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># get api code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://github.com/suyuan32/simple-admin-member-api.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># get rpc code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://github.com/suyuan32/simple-admin-member-rpc.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modify-configuration-file" tabindex="-1"><a class="header-anchor" href="#modify-configuration-file"><span>Modify configuration file</span></a></h3><p>The config file is similar with core service&#39;s.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>You should check the CoreRpc config in rpc service and the MmsConf in api service.</p></div><div class="hint-container info"><p class="hint-container-title">Info</p><ul><li>Make sure AccessSecret is the same as simple-admin-core&#39;s api set</li><li>The configuration is similar as core</li><li>Run code the same as core</li><li>Init database in <a href="http://localhost:3100/init" target="_blank" rel="noopener noreferrer">http://localhost:3100/init</a></li><li>Add API interface permissions on the role page, then restart the API service of member. You do not need to restart service after v1.0.14.</li></ul></div><h3 id="k8s-deployment" tabindex="-1"><a class="header-anchor" href="#k8s-deployment"><span>K8s Deployment</span></a></h3><blockquote><p>It is similar with core api.</p></blockquote><p>You should do these step:</p><ul><li>deploy the images via docker</li><li>modify simple-admin-backend-ui/deploy/default.conf, uncomment the mms-api rule</li><li>update ingress configmap</li><li>update ingress controller</li></ul><h3 id="configuration-file" tabindex="-1"><a class="header-anchor" href="#configuration-file"><span>Configuration file</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">mms.api</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">Host</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">Port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">9104</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">Timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">Auth</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  AccessSecret</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">jS6VKDtsJf3z1n2VKDtsJf3z1n2</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # the same as core</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  AccessExpire</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">259200</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">CROSConf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Address</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;*&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  ServiceName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">mmsApiLogger</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Mode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">file</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/home/data/logs/mms/api</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Level</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">info</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Compress</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  KeepDays</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">7</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  StackCoolDownMillis</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">Prometheus</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Host</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/metrics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">DatabaseConf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">postgres</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Host</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10.5.0.2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5432</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  DBName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">simple_admin</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Username</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">postgres</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # set your username</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Password</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">simple-admin.</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # set your password</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  MaxOpenConn</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  SSLMode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">disable</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  CacheTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">CasbinConf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  ModelText</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    [request_definition]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    r = sub, obj, act</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    [policy_definition]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    p = sub, obj, act</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    [role_definition]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    g = _, _</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    [policy_effect]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    e = some(where (p.eft == allow))</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    [matchers]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    m = r.sub == p.sub &amp;&amp; keyMatch2(r.obj,p.obj) &amp;&amp; r.act == p.act</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">ProjectConf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  UseCaptcha</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # Whether to use captcha，if false, you do not need to add  \`captcha, captchaId\` in request</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  DefaultRankID</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # The default rank ID when register</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  EmailCaptchaExpiredTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">600</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # The expired time for email captcha</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  SmsTemplateId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">xxx</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # The template id for sms</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  SmsAppId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">xxx</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # The app id for sms</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  SmsSignName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">xxx</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # The signature name of sms</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  RegisterVerify</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">captcha</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # register captcha type, support captcha, email, sms, sms_or_email</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  LoginVerify</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">captcha</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # login captcha type, support captcha, email, sms, sms_or_email, all</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  ResetVerify</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">email</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # reset captcha type, support email, sms, sms_or_email</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">MmsRpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Target</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">k8s://default/mms-rpc-svc:9103</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">CoreRpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Target</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">k8s://default/core-rpc-svc:9101</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">McmsRpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Target</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">k8s://default/mcms-rpc-svc:9106</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[l];function h(p,k){return a(),s("div",null,t)}const c=i(e,[["render",h],["__file","member.html.vue"]]),o=JSON.parse(`{"path":"/guide/official-comp/member.html","title":"Member Service","lang":"en-US","frontmatter":{"order":2,"title":"Member Service","head":[["meta",{"name":"keywords","content":"mms, member service module, configuration, simple admin module"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/official-comp/member.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/official-comp/member.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Member Service"}],["meta",{"property":"og:description","content":"Introduction Simple Admin's API service for membership service implements features such as membership management, member login, third-party login, and login via phone number or ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Member Service\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Introduction Simple Admin's API service for membership service implements features such as membership management, member login, third-party login, and login via phone number or ..."},"headers":[{"level":3,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":3,"title":"Get code","slug":"get-code","link":"#get-code","children":[]},{"level":3,"title":"Modify configuration file","slug":"modify-configuration-file","link":"#modify-configuration-file","children":[]},{"level":3,"title":"K8s Deployment","slug":"k8s-deployment","link":"#k8s-deployment","children":[]},{"level":3,"title":"Configuration file","slug":"configuration-file","link":"#configuration-file","children":[]}],"git":{"createdTime":1677206342000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":5},{"name":"Ryan SU","email":"1137661202@qq.com","commits":3},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"guide/official-comp/member.md","localizedDate":"February 24, 2023","autoDesc":true,"excerpt":"<h3>Introduction</h3>\\n<p>Simple Admin's API service for membership service implements features such as membership management, member login, third-party login, and login via phone number or email registration. It also supports login via WeChat Mini Program.</p>\\n<h3>Get code</h3>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\"># get api code</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> clone</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> https://github.com/suyuan32/simple-admin-member-api.git</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\"># get rpc code</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> clone</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> https://github.com/suyuan32/simple-admin-member-rpc.git</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{c as comp,o as data};
