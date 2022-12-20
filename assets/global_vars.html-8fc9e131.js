import{_ as n,W as s,X as a,a0 as t}from"./framework-eab520b4.js";const p={},o=t(`<h1 id="global-variables" tabindex="-1"><a class="header-anchor" href="#global-variables" aria-hidden="true">#</a> Global Variables</h1><blockquote><p>We define the global variables in internal/svc/servicecontext.go, and initialize them. <br> For example:</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/pkg/ent&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/internal/config&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ServiceContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Config config<span class="token punctuation">.</span>Config
	DB     <span class="token operator">*</span>ent<span class="token punctuation">.</span>Client
	Redis  <span class="token operator">*</span>redis<span class="token punctuation">.</span>Redis
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>ServiceContext <span class="token punctuation">{</span>
	opts<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span><span class="token function">NewEntOption</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">)</span>
	logx<span class="token punctuation">.</span><span class="token function">Must</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

	db <span class="token operator">:=</span> ent<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>opts<span class="token operator">...</span><span class="token punctuation">)</span>
	logx<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;Initialize database connection successfully&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// initialize redis</span>
	rds <span class="token operator">:=</span> c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">.</span><span class="token function">NewRedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>rds<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		logx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Initialize redis failed&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	logx<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;Initialize redis connection successfully&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceContext<span class="token punctuation">{</span>
		Config<span class="token punctuation">:</span> c<span class="token punctuation">,</span>
		DB<span class="token punctuation">:</span>     db<span class="token punctuation">,</span>
		Redis<span class="token punctuation">:</span>  rds<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>How to use it?</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> logic

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/pkg/ent&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/pkg/msg/i18n&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/pkg/statuserr&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/internal/svc&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/types/core&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/errorx&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> CreateOrUpdateApiLogic <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ctx    context<span class="token punctuation">.</span>Context
	svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext
	logx<span class="token punctuation">.</span>Logger
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewCreateOrUpdateApiLogic</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> <span class="token operator">*</span>CreateOrUpdateApiLogic <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>CreateOrUpdateApiLogic<span class="token punctuation">{</span>
		ctx<span class="token punctuation">:</span>    ctx<span class="token punctuation">,</span>
		svcCtx<span class="token punctuation">:</span> svcCtx<span class="token punctuation">,</span>
		Logger<span class="token punctuation">:</span> logx<span class="token punctuation">.</span><span class="token function">WithContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// api management service</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>CreateOrUpdateApiLogic<span class="token punctuation">)</span> <span class="token function">CreateOrUpdateApi</span><span class="token punctuation">(</span>in <span class="token operator">*</span>core<span class="token punctuation">.</span>ApiInfo<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>core<span class="token punctuation">.</span>BaseResp<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> in<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		err <span class="token operator">:=</span> l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>DB<span class="token punctuation">.</span>API<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
			<span class="token function">SetPath</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Path<span class="token punctuation">)</span><span class="token punctuation">.</span>
			<span class="token function">SetDescription</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Description<span class="token punctuation">)</span><span class="token punctuation">.</span>
			<span class="token function">SetAPIGroup</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Group<span class="token punctuation">)</span><span class="token punctuation">.</span>
			<span class="token function">SetMethod</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Method<span class="token punctuation">)</span><span class="token punctuation">.</span>
			<span class="token function">Exec</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>ctx<span class="token punctuation">)</span>

		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">switch</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> ent<span class="token punctuation">.</span><span class="token function">IsConstraintError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">:</span>
				logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> statuserr<span class="token punctuation">.</span><span class="token function">NewInvalidArgumentError</span><span class="token punctuation">(</span>i18n<span class="token punctuation">.</span>ApiAlreadyExists<span class="token punctuation">)</span>
			<span class="token keyword">default</span><span class="token punctuation">:</span>
				logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span>logmsg<span class="token punctuation">.</span>DatabaseError<span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> statuserr<span class="token punctuation">.</span><span class="token function">NewInternalError</span><span class="token punctuation">(</span>i18n<span class="token punctuation">.</span>DatabaseError<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> <span class="token operator">&amp;</span>core<span class="token punctuation">.</span>BaseResp<span class="token punctuation">{</span>Msg<span class="token punctuation">:</span> i18n<span class="token punctuation">.</span>CreateSuccess<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		err <span class="token operator">:=</span> l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>DB<span class="token punctuation">.</span>API<span class="token punctuation">.</span><span class="token function">UpdateOneID</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span>
			<span class="token function">SetPath</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Path<span class="token punctuation">)</span><span class="token punctuation">.</span>
			<span class="token function">SetDescription</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Description<span class="token punctuation">)</span><span class="token punctuation">.</span>
			<span class="token function">SetAPIGroup</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Group<span class="token punctuation">)</span><span class="token punctuation">.</span>
			<span class="token function">SetMethod</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>Method<span class="token punctuation">)</span><span class="token punctuation">.</span>
			<span class="token function">Exec</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>ctx<span class="token punctuation">)</span>

		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">switch</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> ent<span class="token punctuation">.</span><span class="token function">IsNotFound</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">:</span>
				logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> statuserr<span class="token punctuation">.</span><span class="token function">NewInvalidArgumentError</span><span class="token punctuation">(</span>i18n<span class="token punctuation">.</span>TargetNotFound<span class="token punctuation">)</span>
			<span class="token keyword">case</span> ent<span class="token punctuation">.</span><span class="token function">IsConstraintError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">:</span>
				logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> statuserr<span class="token punctuation">.</span><span class="token function">NewInvalidArgumentError</span><span class="token punctuation">(</span>i18n<span class="token punctuation">.</span>UpdateFailed<span class="token punctuation">)</span>
			<span class="token keyword">default</span><span class="token punctuation">:</span>
				logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span>logmsg<span class="token punctuation">.</span>DatabaseError<span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> statuserr<span class="token punctuation">.</span><span class="token function">NewInternalError</span><span class="token punctuation">(</span>i18n<span class="token punctuation">.</span>DatabaseError<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> <span class="token operator">&amp;</span>core<span class="token punctuation">.</span>BaseResp<span class="token punctuation">{</span>Msg<span class="token punctuation">:</span> i18n<span class="token punctuation">.</span>UpdateSuccess<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>We can get the global variables via l.svcCtx.</p></blockquote>`,6),e=[o];function c(i,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","global_vars.html.vue"]]);export{r as default};
