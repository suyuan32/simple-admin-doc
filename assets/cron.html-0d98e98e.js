import{ab as e,F as o,G as p,E as n,R as s,M as c,ac as a,U as i}from"./framework-5ae10408.js";const l={},u=a(`<h1 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h1><blockquote><p>添加定时任务</p></blockquote><p>进入 job/internal/crons/core 添加任务，参考</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> core

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;github.com/go-co-op/gocron&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/job/internal/svc&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/model&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> DeleteInvalidTokenTask <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ctx    context<span class="token punctuation">.</span>Context
	svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext
	cron   <span class="token operator">*</span>gocron<span class="token punctuation">.</span>Scheduler
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewDeleteInvalidTokenTask</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> <span class="token operator">*</span>DeleteInvalidTokenTask <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>DeleteInvalidTokenTask<span class="token punctuation">{</span>
		ctx<span class="token punctuation">:</span>    ctx<span class="token punctuation">,</span>
		svcCtx<span class="token punctuation">:</span> svcCtx<span class="token punctuation">,</span>
		cron<span class="token punctuation">:</span>   gocron<span class="token punctuation">.</span><span class="token function">NewScheduler</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>UTC<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>DeleteInvalidTokenTask<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	logx<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;cron DeleteInvalidTokenTask start&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// delete invalid token every 1 minute</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span>cron<span class="token punctuation">.</span><span class="token function">Every</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		err <span class="token operator">:=</span> l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>DB<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;status = ? and created_at &lt; ?&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>model<span class="token punctuation">.</span>Token<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			logx<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;DeleteInvalidTokenTask error: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		logx<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;successfully do the cron DeleteInvalidTokenTask&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;successfully do the cron DeleteInvalidTokenTask&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		logx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;cron error: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	l<span class="token punctuation">.</span>cron<span class="token punctuation">.</span><span class="token function">StartAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>DeleteInvalidTokenTask<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	logx<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;cron DeleteInvalidTokenTask stop&quot;</span><span class="token punctuation">)</span>
	l<span class="token punctuation">.</span>cron<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r={id:"gocron",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#gocron","aria-hidden":"true"},"#",-1),d={href:"https://github.com/go-co-op/gocron",target:"_blank",rel:"noopener noreferrer"},v=a(`<blockquote><p>注意： 需要实现 Start 和 Stop 方法</p></blockquote><blockquote><p>添加任务监听</p></blockquote><p>编辑 job/internal/listen/cron.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> listen

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/service&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/job/internal/config&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/job/internal/crons/core&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/job/internal/svc&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Cron service</span>
<span class="token keyword">func</span> <span class="token function">Cron</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">,</span> ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>service<span class="token punctuation">.</span>Service <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>service<span class="token punctuation">.</span>Service<span class="token punctuation">{</span>
		<span class="token comment">// add your cron task here</span>
		core<span class="token punctuation">.</span><span class="token function">NewDeleteInvalidTokenTask</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> svcCtx<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>启动服务</p></blockquote><p>在 job 文件夹执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run core.go <span class="token parameter variable">-f</span> etc/core.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function m(b,g){const t=i("ExternalLinkIcon");return o(),p("div",null,[u,n("h3",r,[k,s(),n("a",d,[s("Gocron"),c(t)])]),v])}const q=e(l,[["render",m],["__file","cron.html.vue"]]);export{q as default};
