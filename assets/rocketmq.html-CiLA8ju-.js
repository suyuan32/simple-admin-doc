import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-iw6MeW5y.js";const t={},o=e(`<h2 id="如何添加-producer-到-rpc-中" tabindex="-1"><a class="header-anchor" href="#如何添加-producer-到-rpc-中"><span>如何添加 Producer 到 RPC 中？</span></a></h2><h3 id="添加配置信息到-etc" tabindex="-1"><a class="header-anchor" href="#添加配置信息到-etc"><span>添加配置信息到 <code>etc</code></span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">ProducerConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">NsResolver</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9876</span>
  <span class="token key atrule">GroupName</span><span class="token punctuation">:</span> core
  <span class="token key atrule">Namespace</span><span class="token punctuation">:</span> core
  <span class="token key atrule">InstanceName</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>producer
  <span class="token key atrule">MsgTimeOut</span><span class="token punctuation">:</span> <span class="token number">20</span>
  <span class="token key atrule">DefaultTopicQueueNums</span><span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token key atrule">CreateTopicKey</span><span class="token punctuation">:</span> TBW102
  <span class="token key atrule">CompressMsgBodyOverHowMuch</span><span class="token punctuation">:</span> <span class="token number">4096</span>
  <span class="token key atrule">CompressLevel</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token key atrule">Retry</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">AccessKey</span><span class="token punctuation">:</span> admin
  <span class="token key atrule">SecretKey</span><span class="token punctuation">:</span> admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-config" tabindex="-1"><a class="header-anchor" href="#添加-config"><span>添加 config</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/plugins/casbin&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/plugins/mq/rocketmq&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/zrpc&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/config&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	zrpc<span class="token punctuation">.</span>RpcServerConf
	DatabaseConf config<span class="token punctuation">.</span>DatabaseConf
	CasbinConf   casbin<span class="token punctuation">.</span>CasbinConf
	RedisConf    redis<span class="token punctuation">.</span>RedisConf
	ProducerConf rocketmq<span class="token punctuation">.</span>ProducerConf
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-rocketmqproducer-到-service-context" tabindex="-1"><a class="header-anchor" href="#添加-rocketmqproducer-到-service-context"><span>添加 <code>RocketMQProducer</code> 到 <code>service context</code></span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/apache/rocketmq-client-go/v2&quot;</span>
	<span class="token string">&quot;github.com/hibiken/asynq&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/ent&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/internal/config&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ServiceContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Config           config<span class="token punctuation">.</span>Config
	DB               <span class="token operator">*</span>ent<span class="token punctuation">.</span>Client
	Redis            <span class="token operator">*</span>redis<span class="token punctuation">.</span>Redis
	MQProducer       <span class="token operator">*</span>asynq<span class="token punctuation">.</span>Client
	RocketMQProducer <span class="token operator">*</span>rocketmq<span class="token punctuation">.</span>Producer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>ServiceContext <span class="token punctuation">{</span>
	db <span class="token operator">:=</span> ent<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>
		ent<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>logx<span class="token punctuation">.</span>Info<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// logger</span>
		ent<span class="token punctuation">.</span><span class="token function">Driver</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span><span class="token function">NewNoCacheDriver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		ent<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// debug mode</span>
	<span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceContext<span class="token punctuation">{</span>
		Config<span class="token punctuation">:</span>           c<span class="token punctuation">,</span>
		DB<span class="token punctuation">:</span>               db<span class="token punctuation">,</span>
		Redis<span class="token punctuation">:</span>            redis<span class="token punctuation">.</span><span class="token function">MustNewRedis</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">)</span><span class="token punctuation">,</span>
		RocketMQProducer<span class="token punctuation">:</span> c<span class="token punctuation">.</span>ProducerConf<span class="token punctuation">.</span><span class="token function">MustNewProducer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送消息" tabindex="-1"><a class="header-anchor" href="#发送消息"><span>发送消息</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>    msg <span class="token operator">:=</span> <span class="token operator">&amp;</span>primitive<span class="token punctuation">.</span>Message<span class="token punctuation">{</span>
        Topic<span class="token punctuation">:</span> <span class="token string">&quot;delete-invalid-token&quot;</span><span class="token punctuation">,</span>
        Body<span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;all&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    msg<span class="token punctuation">.</span><span class="token function">WithKeys</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;DeleteInvalidTokenTask&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    res<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>RocketMQProducer<span class="token punctuation">.</span><span class="token function">SendSync</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>ctx<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
    
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        logx<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;DeleteInvalidTokenTask send msg error: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        logx<span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">&quot;DeleteInvalidTokenTask send msg success: %s\\n&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何添加-consumer-到-rpc" tabindex="-1"><a class="header-anchor" href="#如何添加-consumer-到-rpc"><span>如何添加 Consumer 到 RPC？</span></a></h2><h3 id="添加配置文件" tabindex="-1"><a class="header-anchor" href="#添加配置文件"><span>添加配置文件</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">ConsumerConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">NsResolver</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9876</span>
  <span class="token key atrule">GroupName</span><span class="token punctuation">:</span> core
  <span class="token key atrule">Namespace</span><span class="token punctuation">:</span> core
  <span class="token key atrule">InstanceName</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>consumer
  <span class="token key atrule">Strategy</span><span class="token punctuation">:</span> AllocateByAveragely
  <span class="token key atrule">RebalanceLockInterval</span><span class="token punctuation">:</span> <span class="token number">20</span>
  <span class="token key atrule">MaxReconsumeTimes</span><span class="token punctuation">:</span> <span class="token number">-1</span>
  <span class="token key atrule">ConsumerModel</span><span class="token punctuation">:</span> Clustering
  <span class="token key atrule">AutoCommit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">Resolver</span><span class="token punctuation">:</span> DEFAULT
  <span class="token key atrule">AccessKey</span><span class="token punctuation">:</span> admin
  <span class="token key atrule">SecretKey</span><span class="token punctuation">:</span> admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-config-1" tabindex="-1"><a class="header-anchor" href="#添加-config-1"><span>添加 config</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/plugins/casbin&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/plugins/mq/rocketmq&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/zrpc&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/config&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	zrpc<span class="token punctuation">.</span>RpcServerConf
	DatabaseConf config<span class="token punctuation">.</span>DatabaseConf
	CasbinConf   casbin<span class="token punctuation">.</span>CasbinConf
	RedisConf    redis<span class="token punctuation">.</span>RedisConf
	ConsumerConf rocketmq<span class="token punctuation">.</span>ConsumerConf
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将-consumer-的任务添加到-service-context-中" tabindex="-1"><a class="header-anchor" href="#将-consumer-的任务添加到-service-context-中"><span>将 Consumer 的任务添加到 service context 中：</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/apache/rocketmq-client-go/v2&quot;</span>
	<span class="token string">&quot;github.com/hibiken/asynq&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/ent&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/internal/config&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ServiceContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Config               config<span class="token punctuation">.</span>Config
	DB                   <span class="token operator">*</span>ent<span class="token punctuation">.</span>Client
	Redis                <span class="token operator">*</span>redis<span class="token punctuation">.</span>Redis
	MQProducer           <span class="token operator">*</span>asynq<span class="token punctuation">.</span>Client
	RocketMQPushConsumer <span class="token operator">*</span>rocketmq<span class="token punctuation">.</span>PushConsumer
	RocketMQPullConsumer <span class="token operator">*</span>rocketmq<span class="token punctuation">.</span>PullConsumer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>ServiceContext <span class="token punctuation">{</span>
	db <span class="token operator">:=</span> ent<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>
		ent<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>logx<span class="token punctuation">.</span>Info<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// logger</span>
		ent<span class="token punctuation">.</span><span class="token function">Driver</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span><span class="token function">NewNoCacheDriver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		ent<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// debug mode</span>
	<span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceContext<span class="token punctuation">{</span>
		Config<span class="token punctuation">:</span>               c<span class="token punctuation">,</span>
		DB<span class="token punctuation">:</span>                   db<span class="token punctuation">,</span>
		Redis<span class="token punctuation">:</span>                redis<span class="token punctuation">.</span><span class="token function">MustNewRedis</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">)</span><span class="token punctuation">,</span>
		RocketMQPushConsumer<span class="token punctuation">:</span> c<span class="token punctuation">.</span>ConsumerConf<span class="token punctuation">.</span><span class="token function">MustNewPushConsumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// push consumer</span>
		RocketMQPullConsumer<span class="token punctuation">:</span> c<span class="token punctuation">.</span>ConsumerConf<span class="token punctuation">.</span><span class="token function">MustNewPullConsumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// pull consumer</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如何消费消息？</p></blockquote><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>RocketMQPullConsumer<span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;delete-invalid-token&quot;</span><span class="token punctuation">,</span> consumer<span class="token punctuation">.</span>MessageSelector<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span>
    msgs <span class="token operator">...</span><span class="token operator">*</span>primitive<span class="token punctuation">.</span>MessageExt<span class="token punctuation">)</span> <span class="token punctuation">(</span>consumer<span class="token punctuation">.</span>ConsumeResult<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> msgs <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;subscribe callback: %v \\n&quot;</span><span class="token punctuation">,</span> msgs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> consumer<span class="token punctuation">.</span>ConsumeSuccess<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[o];function p(i,u){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","rocketmq.html.vue"]]),k=JSON.parse('{"path":"/zh/guide/feature/MQ/rocketmq.html","title":"RocketMQ 消息队列","lang":"zh-CN","frontmatter":{"order":2,"title":"RocketMQ 消息队列","description":"如何添加 Producer 到 RPC 中？ 添加配置信息到 etc 添加 config 添加 RocketMQProducer 到 service context 发送消息 如何添加 Consumer 到 RPC？ 添加配置文件 添加 config 将 Consumer 的任务添加到 service context 中： 如何消费消息？","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/MQ/rocketmq.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/MQ/rocketmq.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"RocketMQ 消息队列"}],["meta",{"property":"og:description","content":"如何添加 Producer 到 RPC 中？ 添加配置信息到 etc 添加 config 添加 RocketMQProducer 到 service context 发送消息 如何添加 Consumer 到 RPC？ 添加配置文件 添加 config 将 Consumer 的任务添加到 service context 中： 如何消费消息？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-10T01:23:35.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-01-10T01:23:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ 消息队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-10T01:23:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"如何添加 Producer 到 RPC 中？","slug":"如何添加-producer-到-rpc-中","link":"#如何添加-producer-到-rpc-中","children":[{"level":3,"title":"添加配置信息到 etc","slug":"添加配置信息到-etc","link":"#添加配置信息到-etc","children":[]},{"level":3,"title":"添加 config","slug":"添加-config","link":"#添加-config","children":[]},{"level":3,"title":"添加 RocketMQProducer 到  service context","slug":"添加-rocketmqproducer-到-service-context","link":"#添加-rocketmqproducer-到-service-context","children":[]},{"level":3,"title":"发送消息","slug":"发送消息","link":"#发送消息","children":[]}]},{"level":2,"title":"如何添加 Consumer 到 RPC？","slug":"如何添加-consumer-到-rpc","link":"#如何添加-consumer-到-rpc","children":[{"level":3,"title":"添加配置文件","slug":"添加配置文件","link":"#添加配置文件","children":[]},{"level":3,"title":"添加 config","slug":"添加-config-1","link":"#添加-config-1","children":[]},{"level":3,"title":"将 Consumer 的任务添加到 service context 中：","slug":"将-consumer-的任务添加到-service-context-中","link":"#将-consumer-的任务添加到-service-context-中","children":[]}]}],"git":{"createdTime":1671464359000,"updatedTime":1704849815000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":3},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.26,"words":379},"filePathRelative":"zh/guide/feature/MQ/rocketmq.md","localizedDate":"2022年12月19日","autoDesc":true,"excerpt":"<h2>如何添加 Producer 到 RPC 中？</h2>\\n<h3>添加配置信息到 <code>etc</code></h3>\\n<div class=\\"language-yaml\\" data-ext=\\"yml\\" data-title=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">ProducerConf</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">NsResolver</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token punctuation\\">-</span> 127.0.0.1<span class=\\"token punctuation\\">:</span><span class=\\"token number\\">9876</span>\\n  <span class=\\"token key atrule\\">GroupName</span><span class=\\"token punctuation\\">:</span> core\\n  <span class=\\"token key atrule\\">Namespace</span><span class=\\"token punctuation\\">:</span> core\\n  <span class=\\"token key atrule\\">InstanceName</span><span class=\\"token punctuation\\">:</span> core<span class=\\"token punctuation\\">-</span>producer\\n  <span class=\\"token key atrule\\">MsgTimeOut</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">20</span>\\n  <span class=\\"token key atrule\\">DefaultTopicQueueNums</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">4</span>\\n  <span class=\\"token key atrule\\">CreateTopicKey</span><span class=\\"token punctuation\\">:</span> TBW102\\n  <span class=\\"token key atrule\\">CompressMsgBodyOverHowMuch</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">4096</span>\\n  <span class=\\"token key atrule\\">CompressLevel</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">5</span>\\n  <span class=\\"token key atrule\\">Retry</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span>\\n  <span class=\\"token key atrule\\">AccessKey</span><span class=\\"token punctuation\\">:</span> admin\\n  <span class=\\"token key atrule\\">SecretKey</span><span class=\\"token punctuation\\">:</span> admin\\n</code></pre></div>"}');export{d as comp,k as data};
