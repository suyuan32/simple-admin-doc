import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as c,c as i,a as n,f as a,b as t,e as p}from"./app-BBzSwu8A.js";const u={},l=p(`<p>我们使用Casbin进行权限验证.</p><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h2><h3 id="使用-redis-监控权限变化" tabindex="-1"><a class="header-anchor" href="#使用-redis-监控权限变化"><span>使用 redis 监控权限变化</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>cbn <span class="token operator">:=</span> c<span class="token punctuation">.</span>CasbinConf<span class="token punctuation">.</span><span class="token function">MustNewCasbinWithRedisWatcher</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span>Type<span class="token punctuation">,</span> c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span><span class="token function">GetDSN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建中间件" tabindex="-1"><a class="header-anchor" href="#创建中间件"><span>创建中间件</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> middleware

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;strings&quot;</span>

	<span class="token string">&quot;github.com/casbin/casbin/v2&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/enum/errorcode&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/errorx&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/rest/httpx&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-common/i18n&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> AuthorityMiddleware <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Cbn   <span class="token operator">*</span>casbin<span class="token punctuation">.</span>Enforcer
	Rds   <span class="token operator">*</span>redis<span class="token punctuation">.</span>Redis
	Trans <span class="token operator">*</span>i18n<span class="token punctuation">.</span>Translator
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewAuthorityMiddleware</span><span class="token punctuation">(</span>cbn <span class="token operator">*</span>casbin<span class="token punctuation">.</span>Enforcer<span class="token punctuation">,</span> rds <span class="token operator">*</span>redis<span class="token punctuation">.</span>Redis<span class="token punctuation">,</span> trans <span class="token operator">*</span>i18n<span class="token punctuation">.</span>Translator<span class="token punctuation">)</span> <span class="token operator">*</span>AuthorityMiddleware <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>AuthorityMiddleware<span class="token punctuation">{</span>
		Cbn<span class="token punctuation">:</span>   cbn<span class="token punctuation">,</span>
		Rds<span class="token punctuation">:</span>   rds<span class="token punctuation">,</span>
		Trans<span class="token punctuation">:</span> trans<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>AuthorityMiddleware<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>next http<span class="token punctuation">.</span>HandlerFunc<span class="token punctuation">)</span> http<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// get the path</span>
		obj <span class="token operator">:=</span> r<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path
		<span class="token comment">// get the method</span>
		act <span class="token operator">:=</span> r<span class="token punctuation">.</span>Method
		<span class="token comment">// get the role id</span>
		roleIds <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span><span class="token string">&quot;roleId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>

		<span class="token comment">// check jwt blacklist</span>
		jwtResult<span class="token punctuation">,</span> err <span class="token operator">:=</span> m<span class="token punctuation">.</span>Rds<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;token_&quot;</span> <span class="token operator">+</span> r<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span><span class="token string">&quot;redis error in jwt&quot;</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			httpx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> errorx<span class="token punctuation">.</span><span class="token function">NewApiError</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> jwtResult <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">{</span>
			logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span><span class="token string">&quot;token in blacklist&quot;</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			httpx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> errorx<span class="token punctuation">.</span><span class="token function">NewApiErrorWithoutMsg</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

		result <span class="token operator">:=</span> <span class="token function">batchCheck</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>Cbn<span class="token punctuation">,</span> roleIds<span class="token punctuation">,</span> act<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>

		<span class="token keyword">if</span> result <span class="token punctuation">{</span>
			logx<span class="token punctuation">.</span><span class="token function">Infow</span><span class="token punctuation">(</span><span class="token string">&quot;HTTP/HTTPS Request&quot;</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;UUID&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;method&quot;</span><span class="token punctuation">,</span> act<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token function">next</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span><span class="token string">&quot;the role is not permitted to access the API&quot;</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;roleId&quot;</span><span class="token punctuation">,</span> roleIds<span class="token punctuation">)</span><span class="token punctuation">,</span>
				logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;method&quot;</span><span class="token punctuation">,</span> act<span class="token punctuation">)</span><span class="token punctuation">)</span>
			httpx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> errorx<span class="token punctuation">.</span><span class="token function">NewCodeError</span><span class="token punctuation">(</span>errorcode<span class="token punctuation">.</span>PermissionDenied<span class="token punctuation">,</span> m<span class="token punctuation">.</span>Trans<span class="token punctuation">.</span><span class="token function">Trans</span><span class="token punctuation">(</span>
				context<span class="token punctuation">.</span><span class="token function">WithValue</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;lang&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Accept-Language&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token string">&quot;common.permissionDeny&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">batchCheck</span><span class="token punctuation">(</span>cbn <span class="token operator">*</span>casbin<span class="token punctuation">.</span>Enforcer<span class="token punctuation">,</span> roleIds<span class="token punctuation">,</span> act<span class="token punctuation">,</span> obj <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> checkReq <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>any
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>roleIds<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		checkReq <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>checkReq<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span>v<span class="token punctuation">,</span> obj<span class="token punctuation">,</span> act<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	result<span class="token punctuation">,</span> err <span class="token operator">:=</span> cbn<span class="token punctuation">.</span><span class="token function">BatchEnforce</span><span class="token punctuation">(</span>checkReq<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span><span class="token string">&quot;Casbin enforce error&quot;</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> result <span class="token punctuation">{</span>
		<span class="token keyword">if</span> v <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r={href:"https://github.com/suyuan32/simple-admin-core/blob/master/api/internal/middleware/authoritymiddleware.go",target:"_blank",rel:"noopener noreferrer"},k=p(`<h2 id="在-api-文件中使用" tabindex="-1"><a class="header-anchor" href="#在-api-文件中使用"><span>在 api 文件中使用</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@server(
    jwt: Auth
    group: api
    middleware: Authority
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d={href:"https://go-zero.dev/cn/docs/advance/middleware",target:"_blank",rel:"noopener noreferrer"},v=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"相关信息"),n("p",null,"目前API生成已支持自动生成鉴权中间件")],-1);function m(b,h){const s=e("ExternalLinkIcon");return c(),i("div",null,[l,n("p",null,[n("a",r,[a("Middleware"),t(s)])]),k,n("p",null,[n("a",d,[a("如何使用中间件"),t(s)])]),v])}const q=o(u,[["render",m],["__file","authorization.html.vue"]]),y=JSON.parse('{"path":"/zh/guide/feature/authorization.html","title":"权限验证","lang":"zh-CN","frontmatter":{"order":12,"title":"权限验证","description":"我们使用Casbin进行权限验证. 初始化 使用 redis 监控权限变化 创建中间件 Middleware 在 api 文件中使用 如何使用中间件 相关信息 目前API生成已支持自动生成鉴权中间件","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/authorization.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/authorization.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"权限验证"}],["meta",{"property":"og:description","content":"我们使用Casbin进行权限验证. 初始化 使用 redis 监控权限变化 创建中间件 Middleware 在 api 文件中使用 如何使用中间件 相关信息 目前API生成已支持自动生成鉴权中间件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-17T00:19:29.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-01-17T00:19:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"权限验证\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T00:19:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"初始化","slug":"初始化","link":"#初始化","children":[{"level":3,"title":"使用 redis 监控权限变化","slug":"使用-redis-监控权限变化","link":"#使用-redis-监控权限变化","children":[]}]},{"level":2,"title":"创建中间件","slug":"创建中间件","link":"#创建中间件","children":[]},{"level":2,"title":"在 api 文件中使用","slug":"在-api-文件中使用","link":"#在-api-文件中使用","children":[]}],"git":{"createdTime":1671464602000,"updatedTime":1705450769000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":8},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"zh/guide/feature/authorization.md","localizedDate":"2022年12月19日","autoDesc":true,"excerpt":"<p>我们使用Casbin进行权限验证.</p>\\n<h2>初始化</h2>\\n<h3>使用 redis 监控权限变化</h3>\\n<div class=\\"language-go\\" data-ext=\\"go\\" data-title=\\"go\\"><pre class=\\"language-go\\"><code>cbn <span class=\\"token operator\\">:=</span> c<span class=\\"token punctuation\\">.</span>CasbinConf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">MustNewCasbinWithRedisWatcher</span><span class=\\"token punctuation\\">(</span>c<span class=\\"token punctuation\\">.</span>DatabaseConf<span class=\\"token punctuation\\">.</span>Type<span class=\\"token punctuation\\">,</span> c<span class=\\"token punctuation\\">.</span>DatabaseConf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">GetDSN</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> c<span class=\\"token punctuation\\">.</span>RedisConf<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}');export{q as comp,y as data};