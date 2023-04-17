import{_ as i,a as t,b as o}from"./swagger_authority-f5f7790d.js";import{_ as p,W as l,X as c,Y as n,Z as s,$ as e,a0 as r,D as d}from"./framework-2d2f73c4.js";const u={},m=n("h2",{id:"使用-swagger-生成-api-文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-swagger-生成-api-文档","aria-hidden":"true"},"#"),s(" 使用 swagger 生成 API 文档")],-1),v={class:"hint-container info"},k=n("p",{class:"hint-container-title"},"相关信息",-1),g={href:"https://goswagger.io/use/spec/meta.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/suyuan32/simple-admin-example-features/tree/main/swagger",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/suyuan32/simple-admin-example-features/blob/main/swagger/desc/base.api",target:"_blank",rel:"noopener noreferrer"},q=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>goctls</code> 已支持根据 <code>go zero path</code> 直接生成 <code>swagger path</code>, <code>goctls</code> 需要 <code>v0.3.0+</code><code>goctls</code> 已支持根据 <code>validate</code> 直接生成 <code>swagger</code>校验规则, <code>goctls</code> 需要 <code>v0.3.1+</code></p></div><blockquote><p>在项目根目录运行 simple-admin-core/</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>swagger generate spec <span class="token parameter variable">--output</span><span class="token operator">=</span>./core.yml --scan-models

swagger serve --no-open <span class="token parameter variable">-F</span><span class="token operator">=</span>swagger <span class="token parameter variable">--port</span> <span class="token number">36666</span> core.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><h3 id="获取-token" tabindex="-1"><a class="header-anchor" href="#获取-token" aria-hidden="true">#</a> 获取 Token</h3><blockquote><p>先登录系统，在任意请求中复制 authorization</p></blockquote><figure><img src="'+t+'" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><blockquote><p>粘贴到 swagger</p></blockquote><figure><img src="'+o+`" alt="pic" tabindex="0" loading="lazy"><figcaption>pic</figcaption></figure><h3 id="注解规范" tabindex="-1"><a class="header-anchor" href="#注解规范" aria-hidden="true">#</a> 注解规范</h3><p>通常对于请求参数我们使用 Req 即 Request 的缩写， 返回值 Resp 即 Response 的缩写</p><h4 id="如果你声明的类型后缀有-req-和-info-你可以忽略-swagger-model-的声明-系统自动添加-swagger-model-注解" tabindex="-1"><a class="header-anchor" href="#如果你声明的类型后缀有-req-和-info-你可以忽略-swagger-model-的声明-系统自动添加-swagger-model-注解" aria-hidden="true">#</a> 如果你声明的类型后缀有 &quot;Req&quot; 和 &quot;Info&quot;, 你可以忽略 swagger:model 的声明. 系统自动添加 swagger:model 注解</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token punctuation">(</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// The response data of API information | API信息</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以覆盖掉它, 添加自己的 swagger 类型，如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token punctuation">(</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// The response data of API information | API信息</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如果类型后缀为-resp-你可以忽略-swagger-注解-系统自动添加-response-注解-和-info-req-类似" tabindex="-1"><a class="header-anchor" href="#如果类型后缀为-resp-你可以忽略-swagger-注解-系统自动添加-response-注解-和-info-req-类似" aria-hidden="true">#</a> 如果类型后缀为&quot;Resp&quot;，你可以忽略 swagger 注解，系统自动添加 response 注解. 和 &quot;Info&quot; &quot;Req&quot; 类似</h4><blockquote><p>对于 route 来说，只需添加简单的一行介绍即可</p></blockquote><p>api/desc/apis.api</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Create or update API information | 创建或更新API</span>
@handler createOrUpdateApi
post <span class="token operator">/</span>api <span class="token punctuation">(</span>CreateOrUpdateApiReq<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>SimpleMsg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将会生成 :</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> api

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以修改不同的 response， 或者进行更复杂的配置， 它不会被覆盖，除非将文件删除。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意 goctls 的生成只会覆盖 internal/types/* 和 internal/handler/routes.go， 如果 handler 需要重新生成需要手动删除再生成。</p></div><h2 id="prefix-参数" tabindex="-1"><a class="header-anchor" href="#prefix-参数" aria-hidden="true">#</a> <code>prefix</code> 参数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@server(
    jwt: Auth
    group: api
    middleware: Authority
    prefix: /v1
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>goctls v1.5.2</code> 已支持 prefix 设置路由前缀，只需设置 <code>prefix</code> ，并重新生成 <code>handler</code> 即可</p><h2 id="go-swagger-报错" tabindex="-1"><a class="header-anchor" href="#go-swagger-报错" aria-hidden="true">#</a> go swagger 报错</h2><p>安装最新版 go-swagger</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/go-swagger/go-swagger/cmd/swagger@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,33);function f(A,I){const a=d("ExternalLinkIcon");return l(),c("div",null,[m,n("div",v,[k,n("blockquote",null,[n("p",null,[n("a",g,[s("官方文档"),e(a)])])]),n("p",null,[n("a",b,[s("示例项目"),e(a)]),s(),n("a",h,[s("Path 和 Query 请求例子"),e(a)])])]),q])}const x=p(u,[["render",f],["__file","swagger.html.vue"]]);export{x as default};
