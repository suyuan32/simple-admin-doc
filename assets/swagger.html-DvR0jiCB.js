import{_ as t,a as i,b as o}from"./swagger_authority-8B5UJFxY.js";import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c,a as n,f as s,b as a,e as u}from"./app-RheKRg4O.js";const d={},m=n("h2",{id:"use-swagger",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#use-swagger"},[n("span",null,"Use swagger")])],-1),g={class:"hint-container info"},v=n("p",{class:"hint-container-title"},"Info",-1),k={href:"https://goswagger.io/use/spec/meta.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/suyuan32/simple-admin-example-features/tree/main/swagger",target:"_blank",rel:"noopener noreferrer"},h=u(`<div class="hint-container warning"><p class="hint-container-title">Warning</p><p><code>goctls</code> already supports to directly generate <code>swagger path</code> based on <code>go zero path</code>, <code>goctls</code> requires <code>v0.3.0+</code><code>goctls</code> already supports to directly generate <code>swagger</code> validation rules based on <code>validate</code>, <code>goctls</code> requires <code>v0.3.1+</code></p></div><blockquote><p>In the root of project run simple-admin-core/</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>swagger generate spec <span class="token parameter variable">--output</span><span class="token operator">=</span>./core.yml --scan-models

swagger serve --no-open <span class="token parameter variable">-F</span><span class="token operator">=</span>swagger <span class="token parameter variable">--port</span> <span class="token number">36666</span> core.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use make</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">make</span> gen-api

<span class="token function">make</span> serve-swagger
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><h3 id="get-token" tabindex="-1"><a class="header-anchor" href="#get-token"><span>Get Token</span></a></h3><blockquote><p>Firstly, log in the system and press F12 to get authorization from any request</p></blockquote><figure><img src="'+i+'" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><blockquote><p>Copy to swagger</p></blockquote><figure><img src="'+o+`" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><h3 id="comment-example" tabindex="-1"><a class="header-anchor" href="#comment-example"><span>Comment Example</span></a></h3><p>We use normally use Req suffix to represent Request， Resp to represent Response.</p><h4 id="if-the-type-name-has-suffix-req-and-info-you-can-omit-the-swagger-model-type-declaration" tabindex="-1"><a class="header-anchor" href="#if-the-type-name-has-suffix-req-and-info-you-can-omit-the-swagger-model-type-declaration"><span>If the type name has suffix &quot;Req&quot; and &quot;Info&quot;, you can omit the swagger model type declaration</span></a></h4><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token punctuation">(</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>generate</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// The response data of API information | API信息</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also overwrite it, just add your own comment.</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token punctuation">(</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>generate</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// The response data of API information | API信息</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="if-the-type-name-has-suffix-resp-you-can-omit-the-swagger-response-type-declaration-just-like-info-and-req" tabindex="-1"><a class="header-anchor" href="#if-the-type-name-has-suffix-resp-you-can-omit-the-swagger-response-type-declaration-just-like-info-and-req"><span>If the type name has suffix &quot;Resp&quot; you can omit the swagger response type declaration. Just like &quot;Info&quot; and &quot;Req&quot;</span></a></h4><blockquote><p>For route, you can just add a comment for it.</p></blockquote><p>api/desc/apis.api</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// Create or update API information | 创建或更新API</span>
@handler createOrUpdateApi
post <span class="token operator">/</span>api <span class="token punctuation">(</span>CreateOrUpdateApiReq<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>SimpleMsg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It will generate :</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> api

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can add more config in handler because it will not be over write if the file exists.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>goctls&#39; generating will only overwrite internal/types/* and internal/handler/routes.go. <br> If handler and logic and so on need to regenerate, you must delete them by yourself.</p></div><h2 id="prefix-parameters" tabindex="-1"><a class="header-anchor" href="#prefix-parameters"><span><code>prefix</code> Parameters</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@server(
    jwt: Auth
    group: api
    middleware: Authority
    prefix: /v1
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Supports setting a prefix for the route by setting the <code>prefix</code> parameter and regenerating the <code>handler</code>.</p><h2 id="go-swagger-report-error" tabindex="-1"><a class="header-anchor" href="#go-swagger-report-error"><span>Go swagger report error</span></a></h2><p>Install the latest version of go-swagger</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/go-swagger/go-swagger/cmd/swagger@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35);function f(y,q){const e=l("ExternalLinkIcon");return r(),c("div",null,[m,n("div",g,[v,n("blockquote",null,[n("p",null,[n("a",k,[s("Official Documentation"),a(e)])])]),n("p",null,[n("a",b,[s("Sample project"),a(e)]),s(" [Path and Query request example](https://github.com/suyuan32/simple-admin -example-features/blob/main/swagger/desc/base.api)")])]),h])}const P=p(d,[["render",f],["__file","swagger.html.vue"]]),x=JSON.parse('{"path":"/guide/feature/swagger.html","title":"Swagger API Document","lang":"en-US","frontmatter":{"order":4,"title":"Swagger API Document","description":"Use swagger Info Official Documentation Sample project [Path and Query request example](https://github.com/suyuan32/simple-admin -example-features/blob/main/swagger/desc/base.ap...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/feature/swagger.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/feature/swagger.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Swagger API Document"}],["meta",{"property":"og:description","content":"Use swagger Info Official Documentation Sample project [Path and Query request example](https://github.com/suyuan32/simple-admin -example-features/blob/main/swagger/desc/base.ap..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/swagger.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-10T04:40:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Swagger API Document"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2023-05-10T04:40:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Swagger API Document\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/swagger.png\\",\\"https://doc.ryansu.tech/assets/get_token.png\\",\\"https://doc.ryansu.tech/assets/swagger_authority.png\\"],\\"dateModified\\":\\"2023-05-10T04:40:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Use swagger","slug":"use-swagger","link":"#use-swagger","children":[{"level":3,"title":"Get Token","slug":"get-token","link":"#get-token","children":[]},{"level":3,"title":"Comment Example","slug":"comment-example","link":"#comment-example","children":[]}]},{"level":2,"title":"prefix Parameters","slug":"prefix-parameters","link":"#prefix-parameters","children":[]},{"level":2,"title":"Go swagger report error","slug":"go-swagger-report-error","link":"#go-swagger-report-error","children":[]}],"git":{"createdTime":1671464602000,"updatedTime":1683693617000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":5},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":5}]},"readingTime":{"minutes":2.48,"words":744},"filePathRelative":"guide/feature/swagger.md","localizedDate":"December 19, 2022","autoDesc":true,"excerpt":"<h2>Use swagger</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Info</p>\\n<blockquote>\\n<p><a href=\\"https://goswagger.io/use/spec/meta.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Official Documentation</a></p>\\n</blockquote>\\n<p><a href=\\"https://github.com/suyuan32/simple-admin-example-features/tree/main/swagger\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Sample project</a> [Path and Query request example](https://github.com/suyuan32/simple-admin -example-features/blob/main/swagger/desc/base.api)</p>\\n</div>"}');export{P as comp,x as data};
