import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c,a as n,f as p,b as i,e as a}from"./app-BBzSwu8A.js";const l={},r=a(`<blockquote><p>项目支持国际化多语言，主要分为前端国际化和后端国际化</p></blockquote><h2 id="前端国际化" tabindex="-1"><a class="header-anchor" href="#前端国际化"><span>前端国际化</span></a></h2><blockquote><p>前端国际化文件位于 <code>src/locales/*</code> 中,前端静态文本翻译由前端进行国际化</p></blockquote><p>在 vue 或 ts 文件中调用</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用方法</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;sys.dictionary.dictionaryList&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u={href:"https://doc.vvbin.cn/dep/i18n.html",target:"_blank",rel:"noopener noreferrer"},d=a(`<h2 id="后端国际化" tabindex="-1"><a class="header-anchor" href="#后端国际化"><span>后端国际化</span></a></h2><blockquote><p>国际化文件位于 i18n 文件夹，后端国际化用于翻译所有来自后端的动态数据，core 中的目录结构为</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>├── locale
│   ├── en.json
│   └── zh.json
├── translator.go
├── translator_test.go
└── var.go

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需在 en.json 和 zh.json 中添加翻译即可</p><h3 id="初始化方法" tabindex="-1"><a class="header-anchor" href="#初始化方法"><span>初始化方法</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>trans <span class="token operator">:=</span> i18n<span class="token punctuation">.</span><span class="token function">NewTranslator</span><span class="token punctuation">(</span>i18n2<span class="token punctuation">.</span>LocaleFS<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>Trans<span class="token punctuation">.</span><span class="token function">Trans</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>ctx<span class="token punctuation">,</span> i18n<span class="token punctuation">.</span>Success<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="读取外部文件" tabindex="-1"><a class="header-anchor" href="#读取外部文件"><span>读取外部文件</span></a></h3><p>在 v1.0.7 版本之后支持读取外部 i18n 文件</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>    <span class="token keyword">var</span> trans <span class="token operator">*</span>i18n<span class="token punctuation">.</span>Translator
	<span class="token keyword">if</span> c<span class="token punctuation">.</span>I18nConf<span class="token punctuation">.</span>Dir <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		trans <span class="token operator">=</span> i18n<span class="token punctuation">.</span><span class="token function">NewTranslatorFromFile</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>I18nConf<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		trans <span class="token operator">=</span> i18n<span class="token punctuation">.</span><span class="token function">NewTranslator</span><span class="token punctuation">(</span>i18n2<span class="token punctuation">.</span>LocaleFS<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>i18n.NewTranslatorFromFile(c.I18nConf)</code> 即可读取外部文件</p>`,12);function k(m,v){const s=t("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[n("a",u,[p("详细教程"),i(s)])]),d])}const b=e(l,[["render",k],["__file","i18n.html.vue"]]),y=JSON.parse('{"path":"/zh/guide/feature/i18n.html","title":"国际化","lang":"zh-CN","frontmatter":{"order":13,"title":"国际化","description":"项目支持国际化多语言，主要分为前端国际化和后端国际化 前端国际化 前端国际化文件位于 src/locales/* 中,前端静态文本翻译由前端进行国际化 在 vue 或 ts 文件中调用 详细教程 后端国际化 国际化文件位于 i18n 文件夹，后端国际化用于翻译所有来自后端的动态数据，core 中的目录结构为 只需在 en.json 和 zh.json ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/i18n.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/i18n.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"国际化"}],["meta",{"property":"og:description","content":"项目支持国际化多语言，主要分为前端国际化和后端国际化 前端国际化 前端国际化文件位于 src/locales/* 中,前端静态文本翻译由前端进行国际化 在 vue 或 ts 文件中调用 详细教程 后端国际化 国际化文件位于 i18n 文件夹，后端国际化用于翻译所有来自后端的动态数据，core 中的目录结构为 只需在 en.json 和 zh.json ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-17T00:19:29.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-01-17T00:19:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"国际化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T00:19:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"前端国际化","slug":"前端国际化","link":"#前端国际化","children":[]},{"level":2,"title":"后端国际化","slug":"后端国际化","link":"#后端国际化","children":[{"level":3,"title":"初始化方法","slug":"初始化方法","link":"#初始化方法","children":[]},{"level":3,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":3,"title":"读取外部文件","slug":"读取外部文件","link":"#读取外部文件","children":[]}]}],"git":{"createdTime":1672312156000,"updatedTime":1705450769000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":4},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":2},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":0.73,"words":218},"filePathRelative":"zh/guide/feature/i18n.md","localizedDate":"2022年12月29日","autoDesc":true,"excerpt":"<blockquote>\\n<p>项目支持国际化多语言，主要分为前端国际化和后端国际化</p>\\n</blockquote>\\n<h2>前端国际化</h2>\\n<blockquote>\\n<p>前端国际化文件位于 <code>src/locales/*</code> 中,前端静态文本翻译由前端进行国际化</p>\\n</blockquote>\\n<p>在 vue 或 ts 文件中调用</p>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span> t <span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">useI18n</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 使用方法</span>\\n<span class=\\"token keyword\\">const</span> name <span class=\\"token operator\\">=</span> <span class=\\"token function\\">t</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"sys.dictionary.dictionaryList\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{b as comp,y as data};