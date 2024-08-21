import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,b as n}from"./app-5txk5biM.js";const t={},l=n(`<h2 id="什么是-nats" tabindex="-1"><a class="header-anchor" href="#什么是-nats"><span>什么是 Nats?</span></a></h2><div class="hint-container info"><p class="hint-container-title">官方文档</p><p><a href="https://nats.io/" target="_blank" rel="noopener noreferrer">文档</a></p></div><p>NATS 是一个开源的分布式消息队列系统，基于消息发布-订阅机制。它的主要特点包括：</p><ol><li><strong>高性能</strong>：NATS 以其低延迟和高吞吐量著称，适用于需要快速消息传递的场景。</li><li><strong>简单易用</strong>：NATS 提供了简单的 API，支持多种编程语言，使得开发者可以轻松集成。</li><li><strong>灵活的消息传递模式</strong>：NATS 支持多种消息传递模式，包括发布-订阅、请求-响应和队列组。</li><li><strong>持久化选项</strong>：虽然核心 NATS 不支持消息持久化，但 NATS JetStream 提供了持久化消息队列的功能。</li></ol><h3 id="添加-nats-配置信息" tabindex="-1"><a class="header-anchor" href="#添加-nats-配置信息"><span>添加 Nats 配置信息</span></a></h3><p><code>etc</code></p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">NatsConf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;nats://localhost:42223&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  ReconnectWait</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  MaxReconnect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支持的配置" tabindex="-1"><a class="header-anchor" href="#支持的配置"><span>支持的配置</span></a></h3><table><thead><tr><th>名称</th><th>默认值</th><th>介绍</th></tr></thead><tbody><tr><td>Hosts</td><td>无</td><td>服务器地址，列表形式</td></tr><tr><td>ReconnectWait</td><td>5 （单位： 秒）</td><td>重试等待时间</td></tr><tr><td>MaxReconnect</td><td>5 （单位： 次）</td><td>最大重试次数</td></tr><tr><td>UserCred</td><td>无</td><td>授权验证 cred 文件路径</td></tr><tr><td>NkeyFile</td><td>无</td><td>N Key 文件路径</td></tr><tr><td>TlsClientCert</td><td>无</td><td>Tls 客户端证书路径</td></tr><tr><td>TlsClientKey</td><td>无</td><td>Tls 客户端秘钥路径</td></tr><tr><td>TlsCACert</td><td>无</td><td>Tls CA 证书路径</td></tr><tr><td>UserJwt</td><td>无</td><td>用户 Jwt 令牌</td></tr></tbody></table><h3 id="添加配置到-config" tabindex="-1"><a class="header-anchor" href="#添加配置到-config"><span>添加配置到 <code>config</code></span></a></h3><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/suyuan32/simple-admin-common/plugins/casbin&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/suyuan32/simple-admin-common/plugins/mq/asynq&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/suyuan32/simple-admin-common/plugins/mq/nats&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/zeromicro/go-zero/zrpc&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/suyuan32/simple-admin-common/config&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Config</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> struct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">	zrpc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">RpcServerConf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	DatabaseConf</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">DatabaseConf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	CasbinConf</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">   casbin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">CasbinConf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	RedisConf</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">RedisConf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	AsynqConf</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    asynq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">AsynqConf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	NatsConf</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">           nats</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Conf</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化-service-context" tabindex="-1"><a class="header-anchor" href="#初始化-service-context"><span>初始化 <code>service_context</code></span></a></h3><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> svc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/hibiken/asynq&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/suyuan32/simple-admin-core/rpc/ent&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/suyuan32/simple-admin-core/rpc/internal/config&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/zeromicro/go-zero/core/logx&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ServiceContext</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> struct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	Config</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">     config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Config</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	DB</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">         *</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Client</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	Redis</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">      *</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	MQProducer</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">asynq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Client</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	Nats</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">      jetstream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">JetStream</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> NewServiceContext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">c</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ServiceContext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	db</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">NewClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		ent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">logx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Info</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// logger</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		ent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Driver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DatabaseConf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">NewNoCacheDriver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()),</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		ent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Debug</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// debug mode</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	nats</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">NatsConf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">NewJetStream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	logx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Must</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> &amp;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ServiceContext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		Config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:     </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		DB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:         </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		Redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:      </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">MustNewRedis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RedisConf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		MQProducer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">asynq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">NewClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AsynqConf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WithRedisConf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RedisConf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">NewRedisOpt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()),</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		Nats</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:      </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">nats</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>使用 <code>c.NatsConf.NewConnection()</code> 初始化 Nats 连接或使用 <code>c.NatsConf.NewJetStream()</code> 来初始化 jetstream 连接</p></div>`,14),e=[l];function h(k,p){return a(),i("div",null,e)}const c=s(t,[["render",h],["__file","nats.html.vue"]]),g=JSON.parse('{"path":"/zh/guide/feature/MQ/nats.html","title":"Nats 消息队列","lang":"zh-CN","frontmatter":{"order":3,"title":"Nats 消息队列","head":[["meta",{"name":"keywords","content":"nats, jetstream, 消息队列, 轻量"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/MQ/nats.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/MQ/nats.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Nats 消息队列"}],["meta",{"property":"og:description","content":"什么是 Nats? 官方文档 文档 NATS 是一个开源的分布式消息队列系统，基于消息发布-订阅机制。它的主要特点包括： 高性能：NATS 以其低延迟和高吞吐量著称，适用于需要快速消息传递的场景。 简单易用：NATS 提供了简单的 API，支持多种编程语言，使得开发者可以轻松集成。 灵活的消息传递模式：NATS 支持多种消息传递模式，包括发布-订阅、请..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-21T03:15:41.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-08-21T03:15:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nats 消息队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-21T03:15:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"什么是 Nats? 官方文档 文档 NATS 是一个开源的分布式消息队列系统，基于消息发布-订阅机制。它的主要特点包括： 高性能：NATS 以其低延迟和高吞吐量著称，适用于需要快速消息传递的场景。 简单易用：NATS 提供了简单的 API，支持多种编程语言，使得开发者可以轻松集成。 灵活的消息传递模式：NATS 支持多种消息传递模式，包括发布-订阅、请..."},"headers":[{"level":2,"title":"什么是 Nats?","slug":"什么是-nats","link":"#什么是-nats","children":[{"level":3,"title":"添加 Nats 配置信息","slug":"添加-nats-配置信息","link":"#添加-nats-配置信息","children":[]},{"level":3,"title":"支持的配置","slug":"支持的配置","link":"#支持的配置","children":[]},{"level":3,"title":"添加配置到 config","slug":"添加配置到-config","link":"#添加配置到-config","children":[]},{"level":3,"title":"初始化 service_context","slug":"初始化-service-context","link":"#初始化-service-context","children":[]}]}],"git":{"createdTime":1724210141000,"updatedTime":1724210141000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":1.5,"words":449},"filePathRelative":"zh/guide/feature/MQ/nats.md","localizedDate":"2024年8月21日","autoDesc":true,"excerpt":"<h2>什么是 Nats?</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">官方文档</p>\\n<p><a href=\\"https://nats.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">文档</a></p>\\n</div>\\n<p>NATS 是一个开源的分布式消息队列系统，基于消息发布-订阅机制。它的主要特点包括：</p>\\n<ol>\\n<li><strong>高性能</strong>：NATS 以其低延迟和高吞吐量著称，适用于需要快速消息传递的场景。</li>\\n<li><strong>简单易用</strong>：NATS 提供了简单的 API，支持多种编程语言，使得开发者可以轻松集成。</li>\\n<li><strong>灵活的消息传递模式</strong>：NATS 支持多种消息传递模式，包括发布-订阅、请求-响应和队列组。</li>\\n<li><strong>持久化选项</strong>：虽然核心 NATS 不支持消息持久化，但 NATS JetStream 提供了持久化消息队列的功能。</li>\\n</ol>"}');export{c as comp,g as data};
