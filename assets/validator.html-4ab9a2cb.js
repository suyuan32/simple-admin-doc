import{ab as t,F as e,G as o,E as n,R as i,M as p,ac as s,U as l}from"./framework-5ae10408.js";const c={},u=s(`<h2 id="validator-使用" tabindex="-1"><a class="header-anchor" href="#validator-使用" aria-hidden="true">#</a> Validator 使用</h2><blockquote><p>只需要在 api 中结构声明中使用 validate tag 即可实现校验</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // login request | 登录参数
    // swagger:model LoginReq
    LoginReq {
        // User Name | 用户名
        // Required: true
        // Max length: 20
        Username   string \`json:&quot;username&quot; validate:&quot;alphanum,max=20&quot;\`

        // Password | 密码
        // Required: true
        // Min length: 6
        // Max length: 30
        Password   string \`json:&quot;password&quot; validate:&quot;max=30,min=6&quot;\`

        // Captcha Id which store in redis | 验证码编号, 存在redis中
        // Required: true
        // Max length: 20
        CaptchaId  string \`json:&quot;captchaId&quot;  validate:&quot;len=20&quot;\`

        // The Captcha which users input | 用户输入的验证码
        // Required: true
        // Max length: 5
        Captcha    string \`json:&quot;captcha&quot; validate:&quot;len=5&quot;\`
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>支持多语言，默认支持中文和英文，如果需要其他语言请自行添加</p></blockquote>`,4),r={href:"https://github.com/suyuan32/simple-admin-tools/blob/master/rest/httpx/util.go",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewValidator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Validator <span class="token punctuation">{</span>
	v <span class="token operator">:=</span> Validator<span class="token punctuation">{</span><span class="token punctuation">}</span>
	en <span class="token operator">:=</span> enLang<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	zh <span class="token operator">:=</span> zhLang<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	v<span class="token punctuation">.</span>Uni <span class="token operator">=</span> ut<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>zh<span class="token punctuation">,</span> en<span class="token punctuation">,</span> zh<span class="token punctuation">)</span>
	v<span class="token punctuation">.</span>Validator <span class="token operator">=</span> validator<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	enTrans<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> v<span class="token punctuation">.</span>Uni<span class="token punctuation">.</span><span class="token function">GetTranslator</span><span class="token punctuation">(</span><span class="token string">&quot;en&quot;</span><span class="token punctuation">)</span>
	zhTrans<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> v<span class="token punctuation">.</span>Uni<span class="token punctuation">.</span><span class="token function">GetTranslator</span><span class="token punctuation">(</span><span class="token string">&quot;zh&quot;</span><span class="token punctuation">)</span>
	v<span class="token punctuation">.</span>Trans <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>ut<span class="token punctuation">.</span>Translator<span class="token punctuation">)</span>
	v<span class="token punctuation">.</span>Trans<span class="token punctuation">[</span><span class="token string">&quot;en&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> enTrans
	v<span class="token punctuation">.</span>Trans<span class="token punctuation">[</span><span class="token string">&quot;zh&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> zhTrans
	<span class="token comment">// add support languages</span>
	<span class="token function">initSupportLanguages</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	err <span class="token operator">:=</span> enTranslations<span class="token punctuation">.</span><span class="token function">RegisterDefaultTranslations</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>Validator<span class="token punctuation">,</span> enTrans<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span><span class="token string">&quot;register English translation failed&quot;</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	err <span class="token operator">=</span> zhTranslations<span class="token punctuation">.</span><span class="token function">RegisterDefaultTranslations</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>Validator<span class="token punctuation">,</span> zhTrans<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span><span class="token string">&quot;register Chinese translation failed&quot;</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>v
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意： 添加validate标签后默认不能为空，若需要允许为空需要添加 omitempty</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Get token list request params | token列表请求参数</span>
    <span class="token comment">// swagger:model TokenListReq</span>
    TokenListReq <span class="token punctuation">{</span>
        PageInfo
        <span class="token comment">// User&#39;s UUID | 用户的UUID</span>
        <span class="token comment">// Required: true</span>
        <span class="token comment">// Max Length: 36</span>
        UUID      <span class="token builtin">string</span> <span class="token string">\`json:&quot;UUID&quot; validate:&quot;omitempty,len=36&quot;\`</span>

        <span class="token comment">// user&#39;s nickname | 用户的昵称</span>
        <span class="token comment">// Required: true</span>
        <span class="token comment">// Max length: 10</span>
        Nickname  <span class="token builtin">string</span>  <span class="token string">\`json:&quot;nickname&quot; validate:&quot;omitempty,alphanumunicode,max=10&quot;\`</span>

        <span class="token comment">// User Name | 用户名</span>
        <span class="token comment">// Required: true</span>
        <span class="token comment">// Max length: 20</span>
        Username   <span class="token builtin">string</span> <span class="token string">\`json:&quot;username&quot; validate:&quot;omitempty,alphanum,max=20&quot;\`</span>

        <span class="token comment">// The user&#39;s email address | 用户的邮箱</span>
        <span class="token comment">// Required: true</span>
        <span class="token comment">// Max length: 100</span>
        Email     <span class="token builtin">string</span> <span class="token string">\`json:&quot;email&quot; validate:&quot;omitempty,email,max=100&quot;\`</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(k,m){const a=l("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[i("文件"),p(a)])]),d])}const g=t(c,[["render",v],["__file","validator.html.vue"]]);export{g as default};
