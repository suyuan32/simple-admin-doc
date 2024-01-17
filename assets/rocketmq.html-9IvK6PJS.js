import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-aX93eziH.js";const t={},o=e(`<h2 id="how-to-add-producer-to-rpc" tabindex="-1"><a class="header-anchor" href="#how-to-add-producer-to-rpc" aria-hidden="true">#</a> How to add Producer to RPC?</h2><h3 id="add-configuration-information-to-etc" tabindex="-1"><a class="header-anchor" href="#add-configuration-information-to-etc" aria-hidden="true">#</a> Add configuration information to <code>etc</code></h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">ProducerConf</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-config" tabindex="-1"><a class="header-anchor" href="#add-config" aria-hidden="true">#</a> Add config</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-rocketmqproducer-into-service-context" tabindex="-1"><a class="header-anchor" href="#add-rocketmqproducer-into-service-context" aria-hidden="true">#</a> Add <code>RocketMQProducer</code> into <code>service context</code></h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="send-messages" tabindex="-1"><a class="header-anchor" href="#send-messages" aria-hidden="true">#</a> Send Messages</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>    msg <span class="token operator">:=</span> <span class="token operator">&amp;</span>primitive<span class="token punctuation">.</span>Message<span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-add-consumer-to-rpc" tabindex="-1"><a class="header-anchor" href="#how-to-add-consumer-to-rpc" aria-hidden="true">#</a> How to add Consumer to RPC?</h2><h3 id="add-configuration-file" tabindex="-1"><a class="header-anchor" href="#add-configuration-file" aria-hidden="true">#</a> Add configuration file</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">ConsumerConf</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-config-1" tabindex="-1"><a class="header-anchor" href="#add-config-1" aria-hidden="true">#</a> Add config</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-the-consumer-task-to-the-service-context" tabindex="-1"><a class="header-anchor" href="#add-the-consumer-task-to-the-service-context" aria-hidden="true">#</a> Add the Consumer task to the <code>service context</code>:</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-consume-messages" tabindex="-1"><a class="header-anchor" href="#how-to-consume-messages" aria-hidden="true">#</a> How to consume messages?</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>RocketMQPullConsumer<span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;delete-invalid-token&quot;</span><span class="token punctuation">,</span> consumer<span class="token punctuation">.</span>MessageSelector<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span>
    msgs <span class="token operator">...</span><span class="token operator">*</span>primitive<span class="token punctuation">.</span>MessageExt<span class="token punctuation">)</span> <span class="token punctuation">(</span>consumer<span class="token punctuation">.</span>ConsumeResult<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> msgs <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;subscribe callback: %v \\n&quot;</span><span class="token punctuation">,</span> msgs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> consumer<span class="token punctuation">.</span>ConsumeSuccess<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[o];function p(i,u){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","rocketmq.html.vue"]]);export{d as default};