import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,b as n}from"./app-w09VT_EG.js";const e={},t=n(`<div class="hint-container info"><p class="hint-container-title">相关信息</p><p><a href="https://github.com/suyuan32/simple-admin-example-features/tree/main/mongo" target="_blank" rel="noopener noreferrer">示例项目</a> <a href="https://github.com/mongodb/mongo-go-driver" target="_blank" rel="noopener noreferrer">官方页面</a></p></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">MongodbConf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Host</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">192.168.50.216</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">27017</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  DBName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">school</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Username</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">root</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # set your username</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Password</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">simple_admin</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # set your password</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  AuthMechanism</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">SCRAM-SHA-256</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  AuthSource</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">admin</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: ?</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">connect=direct</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> svc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/casbin/casbin/v2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/zeromicro/go-zero/rest</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">go.mongodb.org/mongo-driver/mongo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/suyuan32/simple-admin-example-mongo/internal/config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	i18n2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/suyuan32/simple-admin-example-mongo/internal/i18n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/suyuan32/simple-admin-common/i18n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ServiceContext</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	Config</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">        config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	Casbin</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">casbin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Enforcer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	Authority</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">     rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Middleware</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	Trans</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">         *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Translator</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	Mongo</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">         *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">mongo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Client</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	MongoDatabase</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">mongo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Database</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> NewServiceContext</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">c</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ServiceContext</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	trans</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">NewTranslator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i18n2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">LocaleFS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ServiceContext</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		Config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:        </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		Trans</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:         </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">trans</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		Mongo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:         </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MongodbConf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">MustNewClient</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		MongoDatabase</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MongodbConf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">MustNewDatabase</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[t];function h(k,p){return a(),i("div",null,l)}const o=s(e,[["render",h],["__file","mongo.html.vue"]]),g=JSON.parse('{"path":"/zh/guide/feature/Plugins/mongo.html","title":"MongoDB","lang":"zh-CN","frontmatter":{"order":1,"title":"MongoDB","head":[["meta",{"name":"keywords","content":"mongodb, database, nosql, simple admin"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/Plugins/mongo.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/Plugins/mongo.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"MongoDB"}],["meta",{"property":"og:description","content":"相关信息 示例项目 官方页面 配置文件 初始化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MongoDB\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"相关信息 示例项目 官方页面 配置文件 初始化"},"headers":[{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":2,"title":"初始化","slug":"初始化","link":"#初始化","children":[]}],"git":{"createdTime":1680168786000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":1},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":0.4,"words":120},"filePathRelative":"zh/guide/feature/Plugins/mongo.md","localizedDate":"2023年3月30日","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p><a href=\\"https://github.com/suyuan32/simple-admin-example-features/tree/main/mongo\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">示例项目</a> <a href=\\"https://github.com/mongodb/mongo-go-driver\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方页面</a></p>\\n</div>"}');export{o as comp,g as data};
