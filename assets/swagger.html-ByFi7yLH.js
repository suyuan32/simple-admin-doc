import{_ as t,a as i,b as o}from"./swagger_authority-8B5UJFxY.js";import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as r,a as n,f as s,b as e,e as d}from"./app-DWOMpjIH.js";const u={},m=n("h2",{id:"使用-swagger-生成-api-文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-swagger-生成-api-文档"},[n("span",null,"使用 swagger 生成 API 文档")])],-1),g={class:"hint-container info"},v=n("p",{class:"hint-container-title"},"相关信息",-1),k={href:"https://goswagger.io/use/spec/meta.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/suyuan32/simple-admin-example-features/tree/main/swagger",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/suyuan32/simple-admin-example-features/blob/main/swagger/desc/base.api",target:"_blank",rel:"noopener noreferrer"},f={class:"hint-container info"},q=n("p",{class:"hint-container-title"},"相关信息",-1),w={href:"https://www.bilibili.com/video/BV1sg4y1L7ju",target:"_blank",rel:"noopener noreferrer"},A=d(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>goctls</code> 已支持根据 <code>go zero path</code> 直接生成 <code>swagger path</code>, <code>goctls</code> 需要 <code>v0.3.0+</code><code>goctls</code> 已支持根据 <code>validate</code> 直接生成 <code>swagger</code>校验规则, <code>goctls</code> 需要 <code>v0.3.1+</code></p></div><blockquote><p>在项目根目录运行 simple-admin-core/</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>swagger generate spec <span class="token parameter variable">--output</span><span class="token operator">=</span>./core.yml --scan-models

swagger serve --no-open <span class="token parameter variable">-F</span><span class="token operator">=</span>swagger <span class="token parameter variable">--port</span> <span class="token number">36666</span> core.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><h3 id="获取-token" tabindex="-1"><a class="header-anchor" href="#获取-token"><span>获取 Token</span></a></h3><blockquote><p>先登录系统，在任意请求中复制 authorization</p></blockquote><figure><img src="'+i+'" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><blockquote><p>粘贴到 swagger</p></blockquote><figure><img src="'+o+`" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><h3 id="注解规范" tabindex="-1"><a class="header-anchor" href="#注解规范"><span>注解规范</span></a></h3><p>通常对于请求参数我们使用 Req 即 Request 的缩写， 返回值 Resp 即 Response 的缩写</p><h4 id="如果你声明的类型后缀有-req-和-info-你可以忽略-swagger-model-的声明-系统自动添加-swagger-model-注解" tabindex="-1"><a class="header-anchor" href="#如果你声明的类型后缀有-req-和-info-你可以忽略-swagger-model-的声明-系统自动添加-swagger-model-注解"><span>如果你声明的类型后缀有 &quot;Req&quot; 和 &quot;Info&quot;, 你可以忽略 swagger:model 的声明. 系统自动添加 swagger:model 注解</span></a></h4><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token punctuation">(</span>
    <span class="token comment">// The response data of API information | API信息</span>
    ApiInfo <span class="token punctuation">{</span>
        BaseInfo

        <span class="token comment">// API path | API路径</span>
        Path          <span class="token builtin">string</span> <span class="token string">\`json:&quot;path&quot;\`</span>

        <span class="token comment">// Api translation | API 多语言翻译</span>
        Title         <span class="token builtin">string</span> <span class="token string">\`json:&quot;title&quot;\`</span>

        <span class="token comment">// API Description | API 描述</span>
        Description   <span class="token builtin">string</span> <span class="token string">\`json:&quot;description&quot;\`</span>

        <span class="token comment">// API group | API分组</span>
        Group         <span class="token builtin">string</span> <span class="token string">\`json:&quot;group&quot;\`</span>

        <span class="token comment">// API request method e.g. POST | API请求类型 如POST</span>
        Method        <span class="token builtin">string</span> <span class="token string">\`json:&quot;method&quot;\`</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// The response data of API information | API信息</span>
<span class="token comment">// swagger:model ApiInfo</span>
<span class="token keyword">type</span> ApiInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 BaseInfo
 <span class="token comment">// API path | API路径</span>
 Path <span class="token builtin">string</span> <span class="token string">\`json:&quot;path&quot;\`</span>
 <span class="token comment">// Api translation | API 多语言翻译</span>
 Title <span class="token builtin">string</span> <span class="token string">\`json:&quot;title&quot;\`</span>
 <span class="token comment">// API Description | API 描述</span>
 Description <span class="token builtin">string</span> <span class="token string">\`json:&quot;description&quot;\`</span>
 <span class="token comment">// API group | API分组</span>
 Group <span class="token builtin">string</span> <span class="token string">\`json:&quot;group&quot;\`</span>
 <span class="token comment">// API request method e.g. POST | API请求类型 如POST</span>
 Method <span class="token builtin">string</span> <span class="token string">\`json:&quot;method&quot;\`</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以覆盖掉它, 添加自己的 swagger 类型，如下：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token punctuation">(</span>
    <span class="token comment">// The response data of API information | API信息</span>
    <span class="token comment">// swagger:response ApiInfo</span>
    ApiInfo <span class="token punctuation">{</span>
        BaseInfo

        <span class="token comment">// API path | API路径</span>
        Path          <span class="token builtin">string</span> <span class="token string">\`json:&quot;path&quot;\`</span>

        <span class="token comment">// Api translation | API 多语言翻译</span>
        Title         <span class="token builtin">string</span> <span class="token string">\`json:&quot;title&quot;\`</span>

        <span class="token comment">// API Description | API 描述</span>
        Description   <span class="token builtin">string</span> <span class="token string">\`json:&quot;description&quot;\`</span>

        <span class="token comment">// API group | API分组</span>
        Group         <span class="token builtin">string</span> <span class="token string">\`json:&quot;group&quot;\`</span>

        <span class="token comment">// API request method e.g. POST | API请求类型 如POST</span>
        Method        <span class="token builtin">string</span> <span class="token string">\`json:&quot;method&quot;\`</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// The response data of API information | API信息</span>
<span class="token comment">// swagger:response ApiInfo</span>
<span class="token keyword">type</span> ApiInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 BaseInfo
 <span class="token comment">// API path | API路径</span>
 Path <span class="token builtin">string</span> <span class="token string">\`json:&quot;path&quot;\`</span>
 <span class="token comment">// Api translation | API 多语言翻译</span>
 Title <span class="token builtin">string</span> <span class="token string">\`json:&quot;title&quot;\`</span>
 <span class="token comment">// API Description | API 描述</span>
 Description <span class="token builtin">string</span> <span class="token string">\`json:&quot;description&quot;\`</span>
 <span class="token comment">// API group | API分组</span>
 Group <span class="token builtin">string</span> <span class="token string">\`json:&quot;group&quot;\`</span>
 <span class="token comment">// API request method e.g. POST | API请求类型 如POST</span>
 Method <span class="token builtin">string</span> <span class="token string">\`json:&quot;method&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如果类型后缀为-resp-你可以忽略-swagger-注解-系统自动添加-response-注解-和-info-req-类似" tabindex="-1"><a class="header-anchor" href="#如果类型后缀为-resp-你可以忽略-swagger-注解-系统自动添加-response-注解-和-info-req-类似"><span>如果类型后缀为&quot;Resp&quot;，你可以忽略 swagger 注解，系统自动添加 response 注解. 和 &quot;Info&quot; &quot;Req&quot; 类似</span></a></h4><blockquote><p>对于 route 来说，只需添加简单的一行介绍即可</p></blockquote><p>api/desc/apis.api</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// Create or update API information | 创建或更新API</span>
@handler createOrUpdateApi
post <span class="token operator">/</span>api <span class="token punctuation">(</span>CreateOrUpdateApiReq<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>SimpleMsg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将会生成 :</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> api

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;net/http&quot;</span>

 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/logic/api&quot;</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/svc&quot;</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/types&quot;</span>
 <span class="token string">&quot;github.com/zeromicro/go-zero/rest/httpx&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// swagger:route post /api api CreateOrUpdateApi</span>
<span class="token comment">//</span>
<span class="token comment">// Create or update API information | 创建或更新API</span>
<span class="token comment">//</span>
<span class="token comment">// Create or update API information | 创建或更新API</span>
<span class="token comment">//</span>
<span class="token comment">// Parameters:</span>
<span class="token comment">//  + name: body</span>
<span class="token comment">//    require: true</span>
<span class="token comment">//    in: body</span>
<span class="token comment">//    type: CreateOrUpdateApiReq</span>
<span class="token comment">//</span>
<span class="token comment">// Responses:</span>
<span class="token comment">//  200: SimpleMsg</span>
<span class="token comment">//  401: SimpleMsg</span>
<span class="token comment">//  500: SimpleMsg</span>

<span class="token keyword">func</span> <span class="token function">CreateOrUpdateApiHandler</span><span class="token punctuation">(</span>svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> http<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> req types<span class="token punctuation">.</span>CreateOrUpdateApiReq
  <span class="token keyword">if</span> err <span class="token operator">:=</span> httpx<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token operator">&amp;</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   httpx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  l <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">NewCreateOrUpdateApiLogic</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> svcCtx<span class="token punctuation">)</span>
  resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span><span class="token function">CreateOrUpdateApi</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   err <span class="token operator">=</span> svcCtx<span class="token punctuation">.</span>Trans<span class="token punctuation">.</span><span class="token function">TransError</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Accept-Language&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   httpx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   httpx<span class="token punctuation">.</span><span class="token function">OkJson</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> resp<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以修改不同的 response， 或者进行更复杂的配置， 它不会被覆盖，除非将文件删除。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意 goctls 的生成只会覆盖 internal/types/* 和 internal/handler/routes.go， 如果 handler 需要重新生成需要手动删除再生成。</p></div><h2 id="prefix-参数" tabindex="-1"><a class="header-anchor" href="#prefix-参数"><span><code>prefix</code> 参数</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@server(
    jwt: Auth
    group: api
    middleware: Authority
    prefix: /v1
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持 prefix 设置路由前缀，只需设置 <code>prefix</code> ，并重新生成 <code>handler</code> 即可</p><h2 id="go-swagger-报错" tabindex="-1"><a class="header-anchor" href="#go-swagger-报错"><span>go swagger 报错</span></a></h2><p>安装最新版 go-swagger</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/go-swagger/go-swagger/cmd/swagger@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,33);function P(y,I){const a=l("ExternalLinkIcon");return c(),r("div",null,[m,n("div",g,[v,n("blockquote",null,[n("p",null,[n("a",k,[s("官方文档"),e(a)])])]),n("p",null,[n("a",b,[s("示例项目"),e(a)]),s(),n("a",h,[s("Path 和 Query 请求例子"),e(a)])])]),n("div",f,[q,n("p",null,[n("a",w,[s("视频教程"),e(a)])])]),A])}const S=p(u,[["render",P],["__file","swagger.html.vue"]]),j=JSON.parse('{"path":"/zh/guide/feature/swagger.html","title":"Swagger","lang":"zh-CN","frontmatter":{"order":4,"title":"Swagger","description":"使用 swagger 生成 API 文档 相关信息 官方文档 示例项目 Path 和 Query 请求例子 相关信息 视频教程 注意 goctls 已支持根据 go zero path 直接生成 swagger path, goctls 需要 v0.3.0+ goctls 已支持根据 validate 直接生成 swagger校验规则, goctls ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/swagger.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/swagger.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Swagger"}],["meta",{"property":"og:description","content":"使用 swagger 生成 API 文档 相关信息 官方文档 示例项目 Path 和 Query 请求例子 相关信息 视频教程 注意 goctls 已支持根据 go zero path 直接生成 swagger path, goctls 需要 v0.3.0+ goctls 已支持根据 validate 直接生成 swagger校验规则, goctls ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/swagger.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-10T04:40:17.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2023-05-10T04:40:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Swagger\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/swagger.png\\",\\"https://doc.ryansu.tech/assets/get_token.png\\",\\"https://doc.ryansu.tech/assets/swagger_authority.png\\"],\\"dateModified\\":\\"2023-05-10T04:40:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"使用 swagger 生成 API 文档","slug":"使用-swagger-生成-api-文档","link":"#使用-swagger-生成-api-文档","children":[{"level":3,"title":"获取 Token","slug":"获取-token","link":"#获取-token","children":[]},{"level":3,"title":"注解规范","slug":"注解规范","link":"#注解规范","children":[]}]},{"level":2,"title":"prefix 参数","slug":"prefix-参数","link":"#prefix-参数","children":[]},{"level":2,"title":"go swagger 报错","slug":"go-swagger-报错","link":"#go-swagger-报错","children":[]}],"git":{"createdTime":1671464359000,"updatedTime":1683693617000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":7},{"name":"Ryan SU","email":"1137661202@qq.com","commits":5}]},"readingTime":{"minutes":2.85,"words":855},"filePathRelative":"zh/guide/feature/swagger.md","localizedDate":"2022年12月19日","autoDesc":true,"excerpt":"<h2>使用 swagger 生成 API 文档</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<blockquote>\\n<p><a href=\\"https://goswagger.io/use/spec/meta.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a></p>\\n</blockquote>\\n<p><a href=\\"https://github.com/suyuan32/simple-admin-example-features/tree/main/swagger\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">示例项目</a> <a href=\\"https://github.com/suyuan32/simple-admin-example-features/blob/main/swagger/desc/base.api\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Path 和 Query 请求例子</a></p>\\n</div>"}');export{S as comp,j as data};
