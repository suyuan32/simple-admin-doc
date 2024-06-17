import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as n}from"./app-CcFyfeqH.js";const e={},t=n(`<blockquote><p>项目支持国际化多语言，主要分为前端国际化和后端国际化</p></blockquote><h2 id="前端国际化" tabindex="-1"><a class="header-anchor" href="#前端国际化"><span>前端国际化</span></a></h2><blockquote><p>前端国际化文件位于 <code>src/locales/*</code> 中,前端静态文本翻译由前端进行国际化</p></blockquote><p>在 vue 或 ts 文件中调用</p><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> useI18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 使用方法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;sys.dictionary.dictionaryList&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://doc.vvbin.cn/dep/i18n.html" target="_blank" rel="noopener noreferrer">详细教程</a></p><h2 id="后端国际化" tabindex="-1"><a class="header-anchor" href="#后端国际化"><span>后端国际化</span></a></h2><blockquote><p>国际化文件位于 i18n 文件夹，后端国际化用于翻译所有来自后端的动态数据，core 中的目录结构为</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>├── locale</span></span>
<span class="line"><span>│   ├── en.json</span></span>
<span class="line"><span>│   └── zh.json</span></span>
<span class="line"><span>├── translator.go</span></span>
<span class="line"><span>├── translator_test.go</span></span>
<span class="line"><span>└── var.go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需在 en.json 和 zh.json 中添加翻译即可, 也可以自己添加其他语言，只需要添加对应的 json 文件如 <code>ja.json</code></p><h3 id="初始化方法" tabindex="-1"><a class="header-anchor" href="#初始化方法"><span>初始化方法</span></a></h3><div class="hint-container warning"><p class="hint-container-title">v1.7.7 版本之后, goctls 自动生成以下配置</p><p>在 config 文件中添加 i18n 配置</p><blockquote><p>config.go</p></blockquote><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/suyuan32/simple-admin-common/config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/suyuan32/simple-admin-common/i18n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/suyuan32/simple-admin-common/plugins/casbin</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/zeromicro/go-zero/rest</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/zeromicro/go-zero/zrpc</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Config</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">	rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">RestConf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	Auth</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">               rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">AuthConf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	DatabaseConf</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">       config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">DatabaseConf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	CasbinDatabaseConf</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">DatabaseConf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	RedisConf</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">          config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">RedisConf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	CasbinConf</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">         casbin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">CasbinConf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	CoreRpc</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">            zrpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">RpcClientConf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	CROSConf</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">           config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">CROSConf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	I18nConf</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">           i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Conf</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 添加这个配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>xxx.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">I18nConf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  Dir</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 如果为空则读取 embeded 内的文件，如果不为空则读取指定路径文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	trans</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">NewTranslator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">I18nConf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i18n2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">LocaleFS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">l</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">svcCtx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Trans</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Trans</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">l</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;common.success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,15),l=[t];function h(k,p){return a(),s("div",null,l)}const c=i(e,[["render",h],["__file","i18n.html.vue"]]),o=JSON.parse('{"path":"/zh/guide/feature/i18n.html","title":"国际化","lang":"zh-CN","frontmatter":{"order":13,"title":"国际化","head":[["meta",{"name":"keywords","content":"i18n, internationalizaion, simple admin i18n, 国际化, 翻译"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/i18n.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/i18n.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"国际化"}],["meta",{"property":"og:description","content":"项目支持国际化多语言，主要分为前端国际化和后端国际化 前端国际化 前端国际化文件位于 src/locales/* 中,前端静态文本翻译由前端进行国际化 在 vue 或 ts 文件中调用 详细教程 后端国际化 国际化文件位于 i18n 文件夹，后端国际化用于翻译所有来自后端的动态数据，core 中的目录结构为 只需在 en.json 和 zh.json ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-14T12:47:48.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-06-14T12:47:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"国际化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-14T12:47:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"项目支持国际化多语言，主要分为前端国际化和后端国际化 前端国际化 前端国际化文件位于 src/locales/* 中,前端静态文本翻译由前端进行国际化 在 vue 或 ts 文件中调用 详细教程 后端国际化 国际化文件位于 i18n 文件夹，后端国际化用于翻译所有来自后端的动态数据，core 中的目录结构为 只需在 en.json 和 zh.json ..."},"headers":[{"level":2,"title":"前端国际化","slug":"前端国际化","link":"#前端国际化","children":[]},{"level":2,"title":"后端国际化","slug":"后端国际化","link":"#后端国际化","children":[{"level":3,"title":"初始化方法","slug":"初始化方法","link":"#初始化方法","children":[]}]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}],"git":{"createdTime":1672312156000,"updatedTime":1718369268000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":5},{"name":"Ryan SU","email":"1137661202@qq.com","commits":4},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.04,"words":312},"filePathRelative":"zh/guide/feature/i18n.md","localizedDate":"2022年12月29日","autoDesc":true,"excerpt":"<blockquote>\\n<p>项目支持国际化多语言，主要分为前端国际化和后端国际化</p>\\n</blockquote>\\n<h2>前端国际化</h2>\\n<blockquote>\\n<p>前端国际化文件位于 <code>src/locales/*</code> 中,前端静态文本翻译由前端进行国际化</p>\\n</blockquote>\\n<p>在 vue 或 ts 文件中调用</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"typescript\\" data-title=\\"typescript\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\">t</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> } </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> useI18n</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 使用方法</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> name</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> t</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"sys.dictionary.dictionaryList\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">);</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,o as data};