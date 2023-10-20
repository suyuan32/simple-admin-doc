import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-9db0473b.js";const p={},e=t(`<h1 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h1><blockquote><p><strong>我们将全局变量定义到 <code>internal/svc/servicecontext.go</code> 中，并初始化</strong></p></blockquote><p>例如</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/config&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/middleware&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/i18n&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/coreclient&quot;</span>

	<span class="token string">&quot;github.com/casbin/casbin/v2&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/rest&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/zrpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ServiceContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Config    config<span class="token punctuation">.</span>Config
	Authority rest<span class="token punctuation">.</span>Middleware
	CoreRpc   coreclient<span class="token punctuation">.</span>Core
	Redis     <span class="token operator">*</span>redis<span class="token punctuation">.</span>Redis
	Casbin    <span class="token operator">*</span>casbin<span class="token punctuation">.</span>Enforcer
	Trans     <span class="token operator">*</span>i18n<span class="token punctuation">.</span>Translator
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>ServiceContext <span class="token punctuation">{</span>
	rds <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">MustNewRedis</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">)</span>

	cbn <span class="token operator">:=</span> c<span class="token punctuation">.</span>CasbinConf<span class="token punctuation">.</span><span class="token function">MustNewCasbinWithRedisWatcher</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span>Type<span class="token punctuation">,</span> c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span><span class="token function">GetDSN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">)</span>

	trans <span class="token operator">:=</span> i18n<span class="token punctuation">.</span><span class="token function">NewTranslator</span><span class="token punctuation">(</span>i18n<span class="token punctuation">.</span>LocaleFS<span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceContext<span class="token punctuation">{</span>
		Config<span class="token punctuation">:</span>    c<span class="token punctuation">,</span>
		Authority<span class="token punctuation">:</span> middleware<span class="token punctuation">.</span><span class="token function">NewAuthorityMiddleware</span><span class="token punctuation">(</span>cbn<span class="token punctuation">,</span> rds<span class="token punctuation">,</span> trans<span class="token punctuation">)</span><span class="token punctuation">.</span>Handle<span class="token punctuation">,</span>
		CoreRpc<span class="token punctuation">:</span>   coreclient<span class="token punctuation">.</span><span class="token function">NewCore</span><span class="token punctuation">(</span>zrpc<span class="token punctuation">.</span><span class="token function">NewClientIfEnable</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>CoreRpc<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		Redis<span class="token punctuation">:</span>     rds<span class="token punctuation">,</span>
		Casbin<span class="token punctuation">:</span>    cbn<span class="token punctuation">,</span>
		Trans<span class="token punctuation">:</span>     trans<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用方法</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> api

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/utils/errorhandler&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/internal/svc&quot;</span>
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

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>core<span class="token punctuation">.</span>BaseIDResp<span class="token punctuation">{</span>Id<span class="token punctuation">:</span> result<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> i18n<span class="token punctuation">.</span>CreateSuccess<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>我们可以通过 l.svcCtx 访问全局变量</strong></p></blockquote>`,7),o=[e];function c(i,u){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","global_vars.html.vue"]]);export{d as default};
