import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-CbMueymR.js";const n={},t=e(`<h2 id="makefile-generation" tabindex="-1"><a class="header-anchor" href="#makefile-generation"><span>Makefile Generation</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">goctls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> makefile</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> core</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rpc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go_zero</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>Help</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Generate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> makefile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Usage:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  goctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> makefile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [flags]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Flags:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -d,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --dir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            Directory</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> where</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> makefile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> located.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -e,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --ent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                   Whether</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Ent.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -h,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --help</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                  help</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> makefile</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -i,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --i18n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                  Whether</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i18n</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -n,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --service_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   Service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -t,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --service_type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   Service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> type:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> api,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> single,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rpc.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -s,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --style</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> naming</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> format,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> see</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>If run <code>goctls extra makefile</code> without any params，goctls will try to load configuration from original makefile.</p></div>`,5),l=[t];function h(k,r){return a(),s("div",null,l)}const o=i(n,[["render",h],["__file","5-makefile.html.vue"]]),g=JSON.parse('{"path":"/guide/quick-start/extra/5-makefile.html","title":"Makefile","lang":"en-US","frontmatter":{"order":5,"title":"Makefile","head":[["meta",{"name":"keywords","content":"makefile, code generation, make help"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/quick-start/extra/5-makefile.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/quick-start/extra/5-makefile.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Makefile"}],["meta",{"property":"og:description","content":"Makefile Generation Help Warning If run goctls extra makefile without any params，goctls will try to load configuration from original makefile."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Makefile\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Makefile Generation Help Warning If run goctls extra makefile without any params，goctls will try to load configuration from original makefile."},"headers":[{"level":2,"title":"Makefile Generation","slug":"makefile-generation","link":"#makefile-generation","children":[]}],"git":{"createdTime":1684149945000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":2},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":0.36,"words":109},"filePathRelative":"guide/quick-start/extra/5-makefile.md","localizedDate":"May 15, 2023","autoDesc":true,"excerpt":"<h2>Makefile Generation</h2>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">goctls</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> extra</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> makefile</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -n</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> core</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -t</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> rpc</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -s</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> go_zero</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -i</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -e</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,g as data};
