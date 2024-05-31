import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as t,b as a}from"./app-w09VT_EG.js";const n={},e=a(`<h2 id="i18n-文本生成" tabindex="-1"><a class="header-anchor" href="#i18n-文本生成"><span>i18n 文本生成</span></a></h2><h3 id="goctls-extra-i18n" tabindex="-1"><a class="header-anchor" href="#goctls-extra-i18n"><span><code>goctls extra i18n</code></span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> i18n</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --model_name=StudentInfo</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --model_name_zh=学生信息</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --target=api</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --output=D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\p</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">rojects</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\s</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">imple-workspace</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\s</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">imple-admin-core</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\a</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">pi</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\i</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">nternal</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\i</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">18n</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\l</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">ocale</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>参数名称</th><th>必须</th><th>默认值</th><th>介绍</th></tr></thead><tbody><tr><td>model_name</td><td>是</td><td></td><td>模型名称，schema 中内部 struct 名称，如 example 中的 StudentInfo</td></tr><tr><td>model_name_zh</td><td>是</td><td></td><td>模型中文名称</td></tr><tr><td>target</td><td>是</td><td></td><td>目前支持 api, 意思是生成 api 接口的国际化文本</td></tr><tr><td>output</td><td>否</td><td></td><td>若为空则会输出至命令行，自行复制，或者设置为 <code>locale</code> 文件夹的位置，将会自动添加到对应位置</td></tr></tbody></table><blockquote><p>运行 <code>goctls extra i18n -h</code> 查看更多</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">提供</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> i18n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 的</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> JSON</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 文本生成</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">用法：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  goctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [选项]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">选项：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                   显示帮助信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -m,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --model_name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">      模型名称，应该采用驼峰命名法，例如</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> StudentInfo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -z,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --model_name_zh</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   模型名称的中文翻译，例如</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 学生信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -o,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --output</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          输出目录，例如</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ./i18n/locale</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -t,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --target</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          目标类型，现在仅支持</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> api</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="console-的效果" tabindex="-1"><a class="header-anchor" href="#console-的效果"><span>console 的效果</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>$ goctls extra i18n --model_name=StudentInfo --model_name_zh=学生信息 --target=api</span></span>
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
<span class="line"><span>        &quot;getStudentInfoById&quot;: &quot;Get student info by ID&quot;,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[e];function h(d,p){return t(),s("div",null,l)}const o=i(n,[["render",h],["__file","1-i18n.html.vue"]]),c=JSON.parse('{"path":"/zh/guide/quick-start/extra/1-i18n.html","title":"国际化翻译","lang":"zh-CN","frontmatter":{"order":1,"title":"国际化翻译","head":[["meta",{"name":"keywords","content":"i18n, internationalization, i18n code generation, i18n 代码生成"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/quick-start/extra/1-i18n.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/quick-start/extra/1-i18n.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"国际化翻译"}],["meta",{"property":"og:description","content":"i18n 文本生成 goctls extra i18n 运行 goctls extra i18n -h 查看更多 console 的效果"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"国际化翻译\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"i18n 文本生成 goctls extra i18n 运行 goctls extra i18n -h 查看更多 console 的效果"},"headers":[{"level":2,"title":"i18n 文本生成","slug":"i18n-文本生成","link":"#i18n-文本生成","children":[{"level":3,"title":"goctls extra i18n","slug":"goctls-extra-i18n","link":"#goctls-extra-i18n","children":[]},{"level":3,"title":"console 的效果","slug":"console-的效果","link":"#console-的效果","children":[]}]}],"git":{"createdTime":1680859418000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":2},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.11,"words":333},"filePathRelative":"zh/guide/quick-start/extra/1-i18n.md","localizedDate":"2023年4月7日","autoDesc":true,"excerpt":"<h2>i18n 文本生成</h2>\\n<h3><code>goctls extra i18n</code></h3>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">goctls</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> extra</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> i18n</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --model_name=StudentInfo</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --model_name_zh=学生信息</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --target=api</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --output=D:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">\\\\p</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">rojects</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">\\\\s</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">imple-workspace</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">\\\\s</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">imple-admin-core</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">\\\\a</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">pi</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">\\\\i</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">nternal</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">\\\\i</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">18n</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">\\\\l</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">ocale</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,c as data};
