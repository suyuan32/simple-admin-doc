import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as t,o as n}from"./app-CYT6JKv1.js";const a={};function l(h,i){return n(),e("div",null,i[0]||(i[0]=[t(`<h2 id="i18n-text-generation" tabindex="-1"><a class="header-anchor" href="#i18n-text-generation"><span>I18n Text Generation</span></a></h2><h3 id="goctls-extra-i18n" tabindex="-1"><a class="header-anchor" href="#goctls-extra-i18n"><span><code>goctls extra i18n</code></span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">goctls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i18n</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --model_name=StudentInfo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --model_name_zh=学生信息</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --target=api</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --output=D:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">rojects</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">imple-workspace</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">imple-admin-core</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">pi</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">nternal</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">18n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\l</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">ocale</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>Parameter</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>model_name</td><td>Yes</td><td></td><td>The name of the model, which is the internal struct name in the schema, such as &quot;StudentInfo&quot; in the example.</td></tr><tr><td>model_name_zh</td><td>Yes</td><td></td><td>The Chinese translation of the model.</td></tr><tr><td>target</td><td>Yes</td><td></td><td>Currently only supports &quot;api&quot;, which means generating internationalization text for API interfaces.</td></tr><tr><td>output</td><td>No</td><td></td><td>If empty, the output will be printed to the console for copying, or set it to the location of the &quot;locale&quot; folder, and it will be automatically added to the corresponding location.</td></tr></tbody></table><blockquote><p>Run <code>goctls extra i18n -h</code> see more details</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Provide</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i18</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> json</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> text</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> generation</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Usage:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  goctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i18n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [flags]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Flags:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -h,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --help</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                   help</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i18n</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -m,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --model_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> model</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> should</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> camelcase,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> such</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> as</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> StudentInfo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -z,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --model_name_zh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> model</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name&#39;s Chinese translation, such as 学生信息</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  -o, --output string          The output dir, such as ./i18n/locale</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  -t, --target string          The target type, now only support api</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="console-generation-preview" tabindex="-1"><a class="header-anchor" href="#console-generation-preview"><span>Console generation preview</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ goctls extra i18n --model_name=StudentInfo --model_name_zh=学生信息 --target=api</span></span>
<span class="line"><span>        &quot;createStudentInfo&quot;: &quot;创建学生信息&quot;,</span></span>
<span class="line"><span>        &quot;updateStudentInfo&quot;: &quot;更新学生信息&quot;,</span></span>
<span class="line"><span>        &quot;deleteStudentInfo&quot;: &quot;删除学生信息&quot;,</span></span>
<span class="line"><span>        &quot;getStudentInfoList&quot;: &quot;获取学生信息列表&quot;,</span></span>
<span class="line"><span>        &quot;getStudentInfoById&quot;: &quot;通过ID获取学生信息&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &quot;createStudentInfo&quot;: &quot;Create a student info&quot;,</span></span>
<span class="line"><span>        &quot;updateStudentInfo&quot;: &quot;Update the student info&quot;,</span></span>
<span class="line"><span>        &quot;deleteStudentInfo&quot;: &quot;Delete student infos&quot;,</span></span>
<span class="line"><span>        &quot;getStudentInfoList&quot;: &quot;Get student info list&quot;,</span></span>
<span class="line"><span>        &quot;getStudentInfoById&quot;: &quot;Get student info by ID&quot;,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const d=s(a,[["render",l],["__file","1-i18n.html.vue"]]),o=JSON.parse('{"path":"/guide/quick-start/extra/1-i18n.html","title":"I18n Translation Text","lang":"en-US","frontmatter":{"order":1,"title":"I18n Translation Text","head":[["meta",{"name":"keywords","content":"i18n, internationalization, i18n code generation, goctls"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/quick-start/extra/1-i18n.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/quick-start/extra/1-i18n.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"I18n Translation Text"}],["meta",{"property":"og:description","content":"I18n Text Generation goctls extra i18n Run goctls extra i18n -h see more details Console generation preview"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"I18n Translation Text\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"I18n Text Generation goctls extra i18n Run goctls extra i18n -h see more details Console generation preview","gitInclude":[]},"headers":[{"level":2,"title":"I18n Text Generation","slug":"i18n-text-generation","link":"#i18n-text-generation","children":[{"level":3,"title":"goctls extra i18n","slug":"goctls-extra-i18n","link":"#goctls-extra-i18n","children":[]},{"level":3,"title":"Console generation preview","slug":"console-generation-preview","link":"#console-generation-preview","children":[]}]}],"readingTime":{"minutes":0.94,"words":283},"filePathRelative":"guide/quick-start/extra/1-i18n.md","autoDesc":true,"excerpt":"<h2>I18n Text Generation</h2>\\n<h3><code>goctls extra i18n</code></h3>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">goctls</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> extra</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> i18n</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --model_name=StudentInfo</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --model_name_zh=学生信息</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --target=api</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --output=D:</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\p</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">rojects</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\s</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">imple-workspace</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\s</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">imple-admin-core</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\a</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">pi</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\i</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">nternal</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\i</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">18n</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\l</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">ocale</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,o as data};
