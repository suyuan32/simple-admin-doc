import{_ as n,W as s,X as a,a0 as t}from"./framework-45e551af.js";const p={},e=t(`<h1 id="消息队列" tabindex="-1"><a class="header-anchor" href="#消息队列" aria-hidden="true">#</a> 消息队列</h1><h2 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h2><h3 id="producer" tabindex="-1"><a class="header-anchor" href="#producer" aria-hidden="true">#</a> Producer</h3><p>将 producer 的任务添加到 job/internal/mqs/producer 中， 参考</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> producer

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;context&quot;</span>
 <span class="token string">&quot;time&quot;</span>

 <span class="token string">&quot;github.com/apache/rocketmq-client-go/v2&quot;</span>
 <span class="token string">&quot;github.com/apache/rocketmq-client-go/v2/primitive&quot;</span>
 <span class="token string">&quot;github.com/apache/rocketmq-client-go/v2/producer&quot;</span>
 <span class="token string">&quot;github.com/go-co-op/gocron&quot;</span>
 <span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>

 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/job/internal/svc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> DeleteInvalidTokenTask <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 ctx      context<span class="token punctuation">.</span>Context
 svcCtx   <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext
 producer rocketmq<span class="token punctuation">.</span>Producer
 cron     <span class="token operator">*</span>gocron<span class="token punctuation">.</span>Scheduler
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewDeleteInvalidTokenTask</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> <span class="token operator">*</span>DeleteInvalidTokenTask <span class="token punctuation">{</span>
 p<span class="token punctuation">,</span> err <span class="token operator">:=</span> rocketmq<span class="token punctuation">.</span><span class="token function">NewProducer</span><span class="token punctuation">(</span>
  producer<span class="token punctuation">.</span><span class="token function">WithNsResolver</span><span class="token punctuation">(</span>primitive<span class="token punctuation">.</span><span class="token function">NewPassthroughResolver</span><span class="token punctuation">(</span>svcCtx<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>ProducerConf<span class="token punctuation">.</span>NsResolver<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  producer<span class="token punctuation">.</span><span class="token function">WithRetry</span><span class="token punctuation">(</span>svcCtx<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>ProducerConf<span class="token punctuation">.</span>Retry<span class="token punctuation">)</span><span class="token punctuation">)</span>
 logx<span class="token punctuation">.</span><span class="token function">Must</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>DeleteInvalidTokenTask<span class="token punctuation">{</span>
  ctx<span class="token punctuation">:</span>      ctx<span class="token punctuation">,</span>
  svcCtx<span class="token punctuation">:</span>   svcCtx<span class="token punctuation">,</span>
  producer<span class="token punctuation">:</span> p<span class="token punctuation">,</span>
  cron<span class="token punctuation">:</span>     gocron<span class="token punctuation">.</span><span class="token function">NewScheduler</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>UTC<span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>DeleteInvalidTokenTask<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 logx<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;DeleteInvalidTokenTask producer start&quot;</span><span class="token punctuation">)</span>
 err <span class="token operator">:=</span> l<span class="token punctuation">.</span>producer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 logx<span class="token punctuation">.</span><span class="token function">Must</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

 <span class="token comment">// delete invalid token every 1 minute</span>
 <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> l<span class="token punctuation">.</span>cron<span class="token punctuation">.</span><span class="token function">Every</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  msg <span class="token operator">:=</span> <span class="token operator">&amp;</span>primitive<span class="token punctuation">.</span>Message<span class="token punctuation">{</span>
   Topic<span class="token punctuation">:</span> <span class="token string">&quot;delete-invalid-token&quot;</span><span class="token punctuation">,</span>
   Body<span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;all&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  msg<span class="token punctuation">.</span><span class="token function">WithKeys</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;DeleteInvalidTokenTask&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

  res<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span>producer<span class="token punctuation">.</span><span class="token function">SendSync</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span>

  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   logx<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;DeleteInvalidTokenTask send message error: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   logx<span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">&quot;DeleteInvalidTokenTask send message success: %s\\n&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  logx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;producer error: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 l<span class="token punctuation">.</span>cron<span class="token punctuation">.</span><span class="token function">StartAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>DeleteInvalidTokenTask<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 err <span class="token operator">:=</span> l<span class="token punctuation">.</span>producer<span class="token punctuation">.</span><span class="token function">Shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span><span class="token string">&quot;DeleteInvalidTokenTask producer cannot shut down&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 l<span class="token punctuation">.</span>cron<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="consumer" tabindex="-1"><a class="header-anchor" href="#consumer" aria-hidden="true">#</a> Consumer</h3><p>将 Consumer 的任务添加到 job/internal/mqs/consumer 中， 参考</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> consumer

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;context&quot;</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>

 <span class="token string">&quot;github.com/apache/rocketmq-client-go/v2&quot;</span>
 <span class="token string">&quot;github.com/apache/rocketmq-client-go/v2/consumer&quot;</span>
 <span class="token string">&quot;github.com/apache/rocketmq-client-go/v2/primitive&quot;</span>
 <span class="token string">&quot;github.com/go-co-op/gocron&quot;</span>
 <span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>

 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/job/internal/svc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> DeleteInvalidTokenTask <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 ctx      context<span class="token punctuation">.</span>Context
 svcCtx   <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext
 consumer rocketmq<span class="token punctuation">.</span>PushConsumer
 cron     <span class="token operator">*</span>gocron<span class="token punctuation">.</span>Scheduler
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewDeleteInvalidTokenTask</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> <span class="token operator">*</span>DeleteInvalidTokenTask <span class="token punctuation">{</span>
 c<span class="token punctuation">,</span> err <span class="token operator">:=</span> rocketmq<span class="token punctuation">.</span><span class="token function">NewPushConsumer</span><span class="token punctuation">(</span>
  consumer<span class="token punctuation">.</span><span class="token function">WithGroupName</span><span class="token punctuation">(</span>svcCtx<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>ConsumerConf<span class="token punctuation">.</span>GroupName<span class="token punctuation">)</span><span class="token punctuation">,</span>
  consumer<span class="token punctuation">.</span><span class="token function">WithNsResolver</span><span class="token punctuation">(</span>primitive<span class="token punctuation">.</span><span class="token function">NewPassthroughResolver</span><span class="token punctuation">(</span>svcCtx<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>ConsumerConf<span class="token punctuation">.</span>NsResolver<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 logx<span class="token punctuation">.</span><span class="token function">Must</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

 <span class="token keyword">return</span> <span class="token operator">&amp;</span>DeleteInvalidTokenTask<span class="token punctuation">{</span>
  ctx<span class="token punctuation">:</span>      ctx<span class="token punctuation">,</span>
  svcCtx<span class="token punctuation">:</span>   svcCtx<span class="token punctuation">,</span>
  consumer<span class="token punctuation">:</span> c<span class="token punctuation">,</span>
  cron<span class="token punctuation">:</span>     gocron<span class="token punctuation">.</span><span class="token function">NewScheduler</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>UTC<span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>DeleteInvalidTokenTask<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 logx<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;DeleteInvalidTokenTask consumer start&quot;</span><span class="token punctuation">)</span>
 err <span class="token operator">:=</span> l<span class="token punctuation">.</span>consumer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 logx<span class="token punctuation">.</span><span class="token function">Must</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

 <span class="token comment">// delete invalid token every 1 minute</span>
 l<span class="token punctuation">.</span>consumer<span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;delete-invalid-token&quot;</span><span class="token punctuation">,</span> consumer<span class="token punctuation">.</span>MessageSelector<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span>
  msgs <span class="token operator">...</span><span class="token operator">*</span>primitive<span class="token punctuation">.</span>MessageExt<span class="token punctuation">)</span> <span class="token punctuation">(</span>consumer<span class="token punctuation">.</span>ConsumeResult<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> msgs <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;subscribe callback: %v \\n&quot;</span><span class="token punctuation">,</span> msgs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> consumer<span class="token punctuation">.</span>ConsumeSuccess<span class="token punctuation">,</span> <span class="token boolean">nil</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>DeleteInvalidTokenTask<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 err <span class="token operator">:=</span> l<span class="token punctuation">.</span>consumer<span class="token punctuation">.</span><span class="token function">Shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span><span class="token string">&quot;DeleteInvalidTokenTask consumer cannot shut down&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 l<span class="token punctuation">.</span>cron<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意： 需要实现 Start 和 Stop 方法</p></blockquote><h3 id="添加监听" tabindex="-1"><a class="header-anchor" href="#添加监听" aria-hidden="true">#</a> 添加监听</h3><p>修改 job/internal/listen/rmq.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> listen

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;context&quot;</span>

 <span class="token string">&quot;github.com/zeromicro/go-zero/core/service&quot;</span>

 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/job/internal/config&quot;</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/job/internal/mqs/rmq/consumer&quot;</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/job/internal/mqs/rmq/producer&quot;</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/job/internal/svc&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Rmq RocketMQ service</span>
<span class="token keyword">func</span> <span class="token function">Rmq</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">,</span> ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>service<span class="token punctuation">.</span>Service <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>service<span class="token punctuation">.</span>Service<span class="token punctuation">{</span>
  consumer<span class="token punctuation">.</span><span class="token function">NewDeleteInvalidTokenTask</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> svcCtx<span class="token punctuation">)</span><span class="token punctuation">,</span>
  producer<span class="token punctuation">.</span><span class="token function">NewDeleteInvalidTokenTask</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> svcCtx<span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h3><p>在 job 文件夹执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run core.go <span class="token parameter variable">-f</span> etc/core.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="集成-producer-进-rpc-或-api" tabindex="-1"><a class="header-anchor" href="#集成-producer-进-rpc-或-api" aria-hidden="true">#</a> 集成 producer 进 rpc 或 api</h3><p>需要在 service_context.go 初始化全局变量， 还需要在 config 添加配置</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/common/logmessage&quot;</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/internal/config&quot;</span>

 <span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
 <span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
 <span class="token string">&quot;gorm.io/gorm&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ServiceContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Config config<span class="token punctuation">.</span>Config
 DB     <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB
 Redis  <span class="token operator">*</span>redis<span class="token punctuation">.</span>Redis
 Producer rocketmq<span class="token punctuation">.</span>Producer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>ServiceContext <span class="token punctuation">{</span>
 <span class="token comment">// initialize database connection</span>
 db<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span><span class="token function">NewGORM</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span>logmessage<span class="token punctuation">.</span>DatabaseError<span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
 <span class="token punctuation">}</span>
 logx<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;Initialize database connection successfully&quot;</span><span class="token punctuation">)</span>
 <span class="token comment">// initialize redis</span>
 rds <span class="token operator">:=</span> c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">.</span><span class="token function">NewRedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 logx<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;Initialize redis connection successfully&quot;</span><span class="token punctuation">)</span>

 p<span class="token punctuation">,</span> err <span class="token operator">:=</span> rocketmq<span class="token punctuation">.</span><span class="token function">NewProducer</span><span class="token punctuation">(</span>
  producer<span class="token punctuation">.</span><span class="token function">WithNsResolver</span><span class="token punctuation">(</span>primitive<span class="token punctuation">.</span><span class="token function">NewPassthroughResolver</span><span class="token punctuation">(</span>svcCtx<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>ProducerConf<span class="token punctuation">.</span>NsResolver<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  producer<span class="token punctuation">.</span><span class="token function">WithRetry</span><span class="token punctuation">(</span>svcCtx<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>ProducerConf<span class="token punctuation">.</span>Retry<span class="token punctuation">)</span><span class="token punctuation">)</span>
 logx<span class="token punctuation">.</span><span class="token function">Must</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
 
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceContext<span class="token punctuation">{</span>
  Config<span class="token punctuation">:</span> c<span class="token punctuation">,</span>
  DB<span class="token punctuation">:</span>     db<span class="token punctuation">,</span>
  Redis<span class="token punctuation">:</span>  rds<span class="token punctuation">,</span>
  Producer<span class="token punctuation">:</span> p<span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function c(i,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","rocketmq.html.vue"]]);export{r as default};
