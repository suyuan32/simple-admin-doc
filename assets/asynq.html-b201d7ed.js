import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c as p,a as n,b as s,d as c,e as i}from"./app-15ccea53.js";const u={},l=n("h2",{id:"如何在-rpc-使用-asynq-作为消息队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何在-rpc-使用-asynq-作为消息队列","aria-hidden":"true"},"#"),s(" 如何在 RPC 使用 Asynq 作为消息队列？")],-1),r={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"官方文档",-1),k={href:"https://github.com/hibiken/asynq/wiki",target:"_blank",rel:"noopener noreferrer"},v=i(`<h3 id="添加-asynq-配置信息" tabindex="-1"><a class="header-anchor" href="#添加-asynq-配置信息" aria-hidden="true">#</a> 添加 Asynq 配置信息</h3><p><code>etc</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">AsynqConf</span><span class="token punctuation">:</span>
<span class="token comment"># if you do not use WithRedisConf, you should uncomment the configuration below</span>

<span class="token comment">#  Addr: localhost:6379  # Redis address</span>
<span class="token comment">#  Pass: # Redis Password</span>
<span class="token comment">#  DB: 0 # Redis database index</span>
<span class="token comment">#  Concurrency: 20 # max concurrent process job task num</span>
<span class="token comment">#  SyncInterval: 10 # seconds, this field specifies how often sync should happen</span>
  <span class="token key atrule">Enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加配置到-config" tabindex="-1"><a class="header-anchor" href="#添加配置到-config" aria-hidden="true">#</a> 添加配置到 <code>config</code></h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/plugins/casbin&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/plugins/mq/asynq&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/zrpc&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/config&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	zrpc<span class="token punctuation">.</span>RpcServerConf
	DatabaseConf config<span class="token punctuation">.</span>DatabaseConf
	CasbinConf   casbin<span class="token punctuation">.</span>CasbinConf
	RedisConf    redis<span class="token punctuation">.</span>RedisConf
	AsynqConf    asynq<span class="token punctuation">.</span>AsynqConf
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化-service-context" tabindex="-1"><a class="header-anchor" href="#初始化-service-context" aria-hidden="true">#</a> 初始化 <code>service_context</code></h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/hibiken/asynq&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/ent&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/internal/config&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ServiceContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Config     config<span class="token punctuation">.</span>Config
	DB         <span class="token operator">*</span>ent<span class="token punctuation">.</span>Client
	Redis      <span class="token operator">*</span>redis<span class="token punctuation">.</span>Redis
	MQProducer <span class="token operator">*</span>asynq<span class="token punctuation">.</span>Client
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>ServiceContext <span class="token punctuation">{</span>
	db <span class="token operator">:=</span> ent<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>
		ent<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>logx<span class="token punctuation">.</span>Info<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// logger</span>
		ent<span class="token punctuation">.</span><span class="token function">Driver</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span><span class="token function">NewNoCacheDriver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		ent<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// debug mode</span>
	<span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceContext<span class="token punctuation">{</span>
		Config<span class="token punctuation">:</span>     c<span class="token punctuation">,</span>
		DB<span class="token punctuation">:</span>         db<span class="token punctuation">,</span>
		Redis<span class="token punctuation">:</span>      redis<span class="token punctuation">.</span><span class="token function">MustNewRedis</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">)</span><span class="token punctuation">,</span>
		MQProducer<span class="token punctuation">:</span> asynq<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>AsynqConf<span class="token punctuation">.</span><span class="token function">WithRedisConf</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">NewRedisOpt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用-client" tabindex="-1"><a class="header-anchor" href="#调用-client" aria-hidden="true">#</a> 调用 Client</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> api

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>

	<span class="token string">&quot;github.com/hibiken/asynq&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/internal/svc&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/internal/utils/errorhandler&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/types/core&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/i18n&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> CreateApiLogic <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ctx    context<span class="token punctuation">.</span>Context
	svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext
	logx<span class="token punctuation">.</span>Logger
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewCreateApiLogic</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> <span class="token operator">*</span>CreateApiLogic <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>CreateApiLogic<span class="token punctuation">{</span>
		ctx<span class="token punctuation">:</span>    ctx<span class="token punctuation">,</span>
		svcCtx<span class="token punctuation">:</span> svcCtx<span class="token punctuation">,</span>
		Logger<span class="token punctuation">:</span> logx<span class="token punctuation">.</span><span class="token function">WithContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>CreateApiLogic<span class="token punctuation">)</span> <span class="token function">CreateApi</span><span class="token punctuation">(</span>in <span class="token operator">*</span>core<span class="token punctuation">.</span>ApiInfo<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>core<span class="token punctuation">.</span>BaseIDResp<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	result<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>DB<span class="token punctuation">.</span>API<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
		<span class="token function">SetPath</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Path<span class="token punctuation">)</span><span class="token punctuation">.</span>
		<span class="token function">SetDescription</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Description<span class="token punctuation">)</span><span class="token punctuation">.</span>
		<span class="token function">SetAPIGroup</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>ApiGroup<span class="token punctuation">)</span><span class="token punctuation">.</span>
		<span class="token function">SetMethod</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Method<span class="token punctuation">)</span><span class="token punctuation">.</span>
		<span class="token function">Save</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>ctx<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errorhandler<span class="token punctuation">.</span><span class="token function">DefaultEntError</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>Logger<span class="token punctuation">,</span> err<span class="token punctuation">,</span> in<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	task <span class="token operator">:=</span> asynq<span class="token punctuation">.</span><span class="token function">NewTask</span><span class="token punctuation">(</span><span class="token string">&quot;hello_world&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;{\\&quot;name\\&quot;:\\&quot;api test\\&quot;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>MQProducer<span class="token punctuation">.</span><span class="token function">Enqueue</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>core<span class="token punctuation">.</span>BaseIDResp<span class="token punctuation">{</span>Id<span class="token punctuation">:</span> result<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> i18n<span class="token punctuation">.</span>CreateSuccess<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="延迟队列" tabindex="-1"><a class="header-anchor" href="#延迟队列" aria-hidden="true">#</a> 延迟队列</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>MQProducer<span class="token punctuation">.</span><span class="token function">Enqueue</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> asynq<span class="token punctuation">.</span><span class="token function">ProcessIn</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Hour<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function m(b,g){const a=e("ExternalLinkIcon");return o(),p("div",null,[l,n("div",r,[d,n("p",null,[n("a",k,[s("文档"),c(a)])])]),v])}const y=t(u,[["render",m],["__file","asynq.html.vue"]]);export{y as default};
