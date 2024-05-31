import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,c as n,d as i,e as d,b as e,o as l}from"./app-w09VT_EG.js";const r={},h=i("h2",{id:"validator-使用",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#validator-使用"},[i("span",null,"Validator 使用")])],-1),p={class:"hint-container info"},k=i("p",{class:"hint-container-title"},"相关信息",-1),o=i("p",null,[i("a",{href:"https://www.bilibili.com/video/BV19s4y1c7Br",target:"_blank",rel:"noopener noreferrer"},"视频教程")],-1),c=e(`<p>Simple Admin Tools 集成 <a href="https://github.com/go-playground/validator" target="_blank" rel="noopener noreferrer">validator</a> 库</p><blockquote><p>只需要在 api 中结构声明中使用 validate tag 即可实现校验</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> // login request | 登录参数</span></span>
<span class="line"><span>    // swagger:model LoginReq</span></span>
<span class="line"><span>    LoginReq {</span></span>
<span class="line"><span>        // User Name | 用户名</span></span>
<span class="line"><span>        Username   string \`json:&quot;username&quot; validate:&quot;alphanum,max=20&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Password | 密码</span></span>
<span class="line"><span>        Password   string \`json:&quot;password&quot; validate:&quot;max=30,min=6&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Captcha Id which store in redis | 验证码编号, 存在redis中</span></span>
<span class="line"><span>        CaptchaId  string \`json:&quot;captchaId&quot;  validate:&quot;len=20&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // The Captcha which users input | 用户输入的验证码</span></span>
<span class="line"><span>        Captcha    string \`json:&quot;captcha&quot; validate:&quot;len=5&quot;\`</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="额外扩展" tabindex="-1"><a class="header-anchor" href="#额外扩展"><span>额外扩展</span></a></h3><p>以下提供三个接口用于扩展 validator, 只需要在 main 函数中调用即可</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 注册额外语言</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">httpx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">RegisterValidationTranslation</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">trans</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ut</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Translator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">registerFn</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> validator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">RegisterTranslationsFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	translationFn</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> validator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TranslationFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 注册自定义方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">httpx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">RegisterValidation</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> validator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 设置自定义错误码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">httpx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">SetValidatorErrorCode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">code</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">flag</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/zeromicro/go-zero/rest/httpx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/suyuan32/simple-admin-core/api/internal/config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/suyuan32/simple-admin-core/api/internal/handler</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/suyuan32/simple-admin-core/api/internal/svc</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/zeromicro/go-zero/core/conf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/zeromicro/go-zero/rest</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> configFile</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> flag</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;etc/core.yaml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;the config file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	flag</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Parse</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	conf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">MustLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">configFile</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">conf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">UseEnv</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	server</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">MustNewServer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">RestConf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">WithCors</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	defer</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Stop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> svc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">NewServiceContext</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	handler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">RegisterHandlers</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 设置自定义错误码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	httpx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">SetValidatorErrorCode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Starting server at </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">...</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Host</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意： 添加 validate 标签后默认不能为空，若需要允许为空需要添加 omitempty</p></blockquote><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Get token list request params | token列表请求参数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // swagger:model TokenListReq</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    TokenListReq</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        PageInfo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // User&#39;s UUID | 用户的UUID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        UUID</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> \`json:&quot;UUID&quot; validate:&quot;omitempty,len=36&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // user&#39;s nickname | 用户的昵称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        Nickname</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  \`json:&quot;nickname&quot; validate:&quot;omitempty,alphanumunicode,max=10&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // User Name | 用户名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        Username</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">   string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> \`json:&quot;username&quot; validate:&quot;omitempty,alphanum,max=20&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // The user&#39;s email address | 用户的邮箱</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        Email</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">     string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> \`json:&quot;email&quot; validate:&quot;omitempty,email,max=100&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="校验全自动生成" tabindex="-1"><a class="header-anchor" href="#校验全自动生成"><span>校验全自动生成</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在 <code>goctls</code> v0.3.1 之后支持 <code>validate</code> 全端自动生成，只需在 api 文件中声明 <code>validate</code> tag 即可</p></div><p>对于 <code>string</code> 类型， 支持 <code>max, min, len, required</code> 校验自动生成至 <code>swagger, backend</code> 对于 <code>int - float</code> 类型， 支持 <code>lt,lte,gt,gte, required</code> 校验自动生成至 <code>swagger, backend</code></p><h2 id="取消校验" tabindex="-1"><a class="header-anchor" href="#取消校验"><span>取消校验</span></a></h2><h3 id="若不需要校验可以在-handler-中将-parse-中的-isvalidate-设置为-false" tabindex="-1"><a class="header-anchor" href="#若不需要校验可以在-handler-中将-parse-中的-isvalidate-设置为-false"><span>若不需要校验可以在 Handler 中将 Parse 中的 isValidate 设置为 false</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> err</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> httpx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Parse</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    httpx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ErrorCtx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">w</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的校验类型" tabindex="-1"><a class="header-anchor" href="#支持的校验类型"><span>支持的校验类型</span></a></h2><h3 id="字段" tabindex="-1"><a class="header-anchor" href="#字段"><span>字段</span></a></h3><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>eqcsfield</td><td>字段等于另一个字段（相对）</td></tr><tr><td>eqfield</td><td>字段等于另一个字段</td></tr><tr><td>fieldcontains</td><td>在文档中未记录</td></tr><tr><td>fieldexcludes</td><td>在文档中未记录</td></tr><tr><td>gtcsfield</td><td>字段大于另一个相对字段</td></tr><tr><td>gtecsfield</td><td>字段大于或等于另一个相对字段</td></tr><tr><td>gtefield</td><td>字段大于或等于另一个字段</td></tr><tr><td>gtfield</td><td>字段大于另一个字段</td></tr><tr><td>ltcsfield</td><td>字段小于另一个相对字段</td></tr><tr><td>ltecsfield</td><td>字段小于或等于另一个相对字段</td></tr><tr><td>ltefield</td><td>字段小于或等于另一个字段</td></tr><tr><td>ltfield</td><td>字段小于另一个字段</td></tr><tr><td>necsfield</td><td>字段不等于另一个字段（相对）</td></tr><tr><td>nefield</td><td>字段不等于另一个字段</td></tr></tbody></table><h3 id="网络" tabindex="-1"><a class="header-anchor" href="#网络"><span>网络</span></a></h3><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>cidr</td><td>无类别域间路由 CIDR</td></tr><tr><td>cidrv4</td><td>无类别域间路由 CIDRv4</td></tr><tr><td>cidrv6</td><td>无类别域间路由 CIDRv6</td></tr><tr><td>datauri</td><td>数据 URL</td></tr><tr><td>fqdn</td><td>完全限定域名（FQDN）</td></tr><tr><td>hostname</td><td>主机名 RFC 952</td></tr><tr><td>hostname_port</td><td>主机端口</td></tr><tr><td>hostname_rfc1123</td><td>主机名 RFC 1123</td></tr><tr><td>ip</td><td>互联网协议地址 IP</td></tr><tr><td>ip4_addr</td><td>互联网协议地址 IPv4</td></tr><tr><td>ip6_addr</td><td>IPv6 网际协议地址</td></tr><tr><td>ip_addr</td><td>IP 网际协议地址</td></tr><tr><td>ipv4</td><td>IPv4 网际协议地址</td></tr><tr><td>ipv6</td><td>IPv6 网际协议地址</td></tr><tr><td>mac</td><td>媒体访问控制地址 MAC</td></tr><tr><td>tcp4_addr</td><td>TCPv4 传输控制协议地址</td></tr><tr><td>tcp6_addr</td><td>TCPv6 传输控制协议地址</td></tr><tr><td>tcp_addr</td><td>TCP 传输控制协议地址</td></tr><tr><td>udp4_addr</td><td>UDPv4 用户数据报协议地址</td></tr><tr><td>udp6_addr</td><td>UDPv6 用户数据报协议地址</td></tr><tr><td>udp_addr</td><td>UDP 用户数据报协议地址</td></tr><tr><td>unix_addr</td><td>Unix 域套接字端点地址</td></tr><tr><td>uri</td><td>URI 字符串</td></tr><tr><td>url</td><td>URL 字符串</td></tr><tr><td>url_encoded</td><td>URL 编码</td></tr><tr><td>urn_rfc2141</td><td>URN RFC 2141 字符串</td></tr></tbody></table><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h3><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>alpha</td><td>仅包含字母</td></tr><tr><td>alphanum</td><td>包含字母和数字</td></tr><tr><td>alphanumunicode</td><td>包含字母和数字（Unicode）</td></tr><tr><td>alphaunicode</td><td>仅包含字母（Unicode）</td></tr><tr><td>ascii</td><td>ASCII 字符串</td></tr><tr><td>boolean</td><td>布尔值</td></tr><tr><td>contains</td><td>包含</td></tr><tr><td>containsany</td><td>包含任意字符</td></tr><tr><td>containsrune</td><td>包含指定字符</td></tr><tr><td>endsnotwith</td><td>不以指定字符结尾</td></tr><tr><td>endswith</td><td>以指定字符结尾</td></tr><tr><td>excludes</td><td>不包含</td></tr><tr><td>excludesall</td><td>不包含任意字符</td></tr><tr><td>excludesrune</td><td>不包含指定字符</td></tr><tr><td>lowercase</td><td>全部小写</td></tr><tr><td>multibyte</td><td>多字节字符</td></tr><tr><td>number</td><td>在 doc.go 中未记录</td></tr><tr><td>numeric</td><td>数字</td></tr><tr><td>printascii</td><td>可打印的 ASCII 字符串</td></tr><tr><td>startsnotwith</td><td>不以指定字符开头</td></tr><tr><td>startswith</td><td>以指定字符开头</td></tr><tr><td>uppercase</td><td>全部大写</td></tr></tbody></table><h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h3><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>base64</td><td>Base64 字符串</td></tr><tr><td>base64url</td><td>Base64URL 字符串</td></tr><tr><td>bic</td><td>商业标识代码 (ISO 9362)</td></tr><tr><td>bcp47_language_tag</td><td>语言标签 (BCP 47)</td></tr><tr><td>btc_addr</td><td>比特币地址</td></tr><tr><td>btc_addr_bech32</td><td>比特币 Bech32 地址 (segwit)</td></tr><tr><td>credit_card</td><td>信用卡号</td></tr><tr><td>datetime</td><td>日期时间</td></tr><tr><td>e164</td><td>e164 格式的电话号码</td></tr><tr><td>email</td><td>电子邮件字符串</td></tr><tr><td>eth_addr</td><td>以太坊地址</td></tr><tr><td>hexadecimal</td><td>十六进制字符串</td></tr><tr><td>hexcolor</td><td>十六进制颜色字符串</td></tr><tr><td>hsl</td><td>HSL 字符串</td></tr><tr><td>hsla</td><td>HSLA 字符串</td></tr><tr><td>html</td><td>HTML 标签</td></tr><tr><td>html_encoded</td><td>HTML 编码</td></tr><tr><td>isbn</td><td>国际标准书号</td></tr><tr><td>isbn10</td><td>国际标准书号 10 位</td></tr><tr><td>isbn13</td><td>国际标准书号 13 位</td></tr><tr><td>iso3166_1_alpha2</td><td>两字母国家代码 (ISO 3166-1 alpha-2)</td></tr><tr><td>iso3166_1_alpha3</td><td>三字母国家代码 (ISO 3166-1 alpha-3)</td></tr><tr><td>iso3166_1_alpha_numeric</td><td>数字国家代码 (ISO 3166-1 numeric)</td></tr><tr><td>iso3166_2</td><td>国家分区代码 (ISO 3166-2)</td></tr><tr><td>iso4217</td><td>货币代码 (ISO 4217)</td></tr><tr><td>json</td><td>JSON</td></tr><tr><td>jwt</td><td>JSON Web Token (JWT)</td></tr><tr><td>latitude</td><td>纬度</td></tr><tr><td>longitude</td><td>经度</td></tr><tr><td>postcode_iso3166_alpha2</td><td>邮政编码</td></tr><tr><td>postcode_iso3166_alpha2_field</td><td>邮政编码</td></tr><tr><td>rgb</td><td>RGB 字符串</td></tr><tr><td>rgba</td><td>RGBA 字符串</td></tr><tr><td>ssn</td><td>社会安全号码 SSN</td></tr><tr><td>timezone</td><td>时区</td></tr><tr><td>uuid</td><td>通用唯一标识符 UUID</td></tr><tr><td>uuid3</td><td>通用唯一标识符 UUID v3</td></tr><tr><td>uuid3_rfc4122</td><td>通用唯一标识符 UUID v3 RFC4122</td></tr><tr><td>uuid4</td><td>通用唯一标识符 UUID v4</td></tr><tr><td>uuid4_rfc4122</td><td>通用唯一标识符 UUID v4 RFC4122</td></tr><tr><td>uuid5</td><td>通用唯一标识符 UUID v5</td></tr><tr><td>uuid5_rfc4122</td><td>通用唯一标识符 UUID v5 RFC4122</td></tr><tr><td>uuid_rfc4122</td><td>通用唯一标识符 UUID RFC4122</td></tr><tr><td>md4</td><td>MD4 哈希</td></tr><tr><td>md5</td><td>MD5 哈希</td></tr><tr><td>sha256</td><td>SHA256 哈希</td></tr><tr><td>sha384</td><td>SHA384 哈希</td></tr><tr><td>sha512</td><td>SHA512 哈希</td></tr><tr><td>ripemd128</td><td>RIPEMD-128 哈希</td></tr><tr><td>ripemd128</td><td>RIPEMD-160 哈希</td></tr><tr><td>tiger128</td><td>TIGER128 哈希</td></tr><tr><td>tiger160</td><td>TIGER160 哈希</td></tr><tr><td>tiger192</td><td>TIGER192 哈希</td></tr><tr><td>semver</td><td>语义化版本 2.0.0</td></tr><tr><td>ulid</td><td>可排序的通用唯一标识符 ULID</td></tr></tbody></table><h3 id="比较" tabindex="-1"><a class="header-anchor" href="#比较"><span>比较</span></a></h3><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>eq</td><td>等于</td></tr><tr><td>gt</td><td>大于</td></tr><tr><td>gte</td><td>大于等于</td></tr><tr><td>lt</td><td>小于</td></tr><tr><td>lte</td><td>小于等于</td></tr><tr><td>ne</td><td>不等于</td></tr></tbody></table><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>dir</td><td>目录路径</td></tr><tr><td>file</td><td>文件路径</td></tr><tr><td>isdefault</td><td>是否默认</td></tr><tr><td>len</td><td>长度</td></tr><tr><td>max</td><td>最大值</td></tr><tr><td>min</td><td>最小值</td></tr><tr><td>oneof</td><td>其中之一</td></tr><tr><td>required</td><td>必填项</td></tr><tr><td>required_if</td><td>如果满足条件则必填</td></tr><tr><td>required_unless</td><td>除非满足条件否则必填</td></tr><tr><td>required_with</td><td>如果与其他字段同时存在则必填</td></tr><tr><td>required_with_all</td><td>如果与所有其他字段同时存在则必填</td></tr><tr><td>required_without</td><td>如果与其他字段不同时存在则必填</td></tr><tr><td>required_without_all</td><td>如果与所有其他字段不同时存在则必填</td></tr><tr><td>excluded_if</td><td>如果满足条件则排除</td></tr><tr><td>excluded_unless</td><td>除非满足条件否则排除</td></tr><tr><td>excluded_with</td><td>如果与其他字段同时存在则排除</td></tr><tr><td>excluded_with_all</td><td>如果与所有其他字段同时存在则排除</td></tr><tr><td>excluded_without</td><td>如果与其他字段不同时存在则排除</td></tr><tr><td>excluded_without_all</td><td>如果与所有其他字段不同时存在则排除</td></tr><tr><td>unique</td><td>唯一值</td></tr></tbody></table><h4 id="别名" tabindex="-1"><a class="header-anchor" href="#别名"><span>别名</span></a></h4><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>iscolor</td><td>是否为颜色，hexcolor|rgb|rgba|hsl|hsla</td></tr><tr><td>country_code</td><td>是否为城市代码，iso3166_1_alpha2|iso3166_1_alpha3|iso3166_1_alpha_numeric</td></tr></tbody></table>`,31);function g(u,y){const s=a("BiliBili");return l(),n("div",null,[h,i("div",p,[k,o,d(s,{bvid:"BV19s4y1c7Br"})]),c])}const B=t(r,[["render",g],["__file","validator.html.vue"]]),E=JSON.parse('{"path":"/zh/guide/feature/validator.html","title":"验证器","lang":"zh-CN","frontmatter":{"order":3,"title":"验证器","head":[["meta",{"name":"keywords","content":"validator, golang, simple admin validation, 校验器"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/validator.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/validator.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"验证器"}],["meta",{"property":"og:description","content":"Validator 使用 相关信息 视频教程 Simple Admin Tools 集成 validator 库 只需要在 api 中结构声明中使用 validate tag 即可实现校验 额外扩展 以下提供三个接口用于扩展 validator, 只需要在 main 函数中调用即可 例子 注意： 添加 validate 标签后默认不能为空，若需要允许为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"验证器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Validator 使用 相关信息 视频教程 Simple Admin Tools 集成 validator 库 只需要在 api 中结构声明中使用 validate tag 即可实现校验 额外扩展 以下提供三个接口用于扩展 validator, 只需要在 main 函数中调用即可 例子 注意： 添加 validate 标签后默认不能为空，若需要允许为..."},"headers":[{"level":2,"title":"Validator 使用","slug":"validator-使用","link":"#validator-使用","children":[{"level":3,"title":"额外扩展","slug":"额外扩展","link":"#额外扩展","children":[]}]},{"level":2,"title":"校验全自动生成","slug":"校验全自动生成","link":"#校验全自动生成","children":[]},{"level":2,"title":"取消校验","slug":"取消校验","link":"#取消校验","children":[{"level":3,"title":"若不需要校验可以在 Handler 中将 Parse 中的 isValidate 设置为 false","slug":"若不需要校验可以在-handler-中将-parse-中的-isvalidate-设置为-false","link":"#若不需要校验可以在-handler-中将-parse-中的-isvalidate-设置为-false","children":[]}]},{"level":2,"title":"支持的校验类型","slug":"支持的校验类型","link":"#支持的校验类型","children":[{"level":3,"title":"字段","slug":"字段","link":"#字段","children":[]},{"level":3,"title":"网络","slug":"网络","link":"#网络","children":[]},{"level":3,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":3,"title":"格式","slug":"格式","link":"#格式","children":[]},{"level":3,"title":"比较","slug":"比较","link":"#比较","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"git":{"createdTime":1671464359000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":4},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":3},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":5.75,"words":1724},"filePathRelative":"zh/guide/feature/validator.md","localizedDate":"2022年12月19日","autoDesc":true,"excerpt":"<h2>Validator 使用</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p><a href=\\"https://www.bilibili.com/video/BV19s4y1c7Br\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">视频教程</a></p>\\n</div>\\n<p>Simple Admin Tools 集成 <a href=\\"https://github.com/go-playground/validator\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">validator</a> 库</p>"}');export{B as comp,E as data};
