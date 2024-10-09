import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,o as t}from"./app-CYT6JKv1.js";const l={};function n(h,i){return t(),e("div",null,i[0]||(i[0]=[a(`<h2 id="gitea-workflow-generating" tabindex="-1"><a class="header-anchor" href="#gitea-workflow-generating"><span>Gitea Workflow Generating</span></a></h2><blockquote><p>goctls &gt;= 1.6.7</p></blockquote><h2 id="create-gitea-workflow-file" tabindex="-1"><a class="header-anchor" href="#create-gitea-workflow-file"><span>Create Gitea Workflow file</span></a></h2><blockquote><p>Create .gitea/workflow/docker.yaml</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">goctls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cicd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitea</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/suyuan32/simple-admin-job.git</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> goctls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cicd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitea</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Generate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> actions</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> files</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitea</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> images</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Usage:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  goctls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cicd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitea</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [flags]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Flags:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -c,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --china</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               Whether</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> located</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> China</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -h,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --help</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                help</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitea</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -o,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --output_dir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> output</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> directory,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> please</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> project&#39;s root directory (default &quot;.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  -r, --repository string   The address of the code repository, for example, &quot;https://github.com/suyuan32/simple-admin-job.git&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const p=s(l,[["render",n],["__file","3-gitea.html.vue"]]),d=JSON.parse('{"path":"/guide/cicd/3-gitea.html","title":"Gitea Workflow","lang":"en-US","frontmatter":{"order":2,"title":"Gitea Workflow","head":[["meta",{"name":"keywords","content":"gitea ci/cd, simple admin ci/cd, continuous"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/cicd/3-gitea.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/cicd/3-gitea.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Gitea Workflow"}],["meta",{"property":"og:description","content":"Gitea Workflow Generating goctls >= 1.6.7 Create Gitea Workflow file Create .gitea/workflow/docker.yaml Parameters"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gitea Workflow\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Gitea Workflow Generating goctls >= 1.6.7 Create Gitea Workflow file Create .gitea/workflow/docker.yaml Parameters","gitInclude":[]},"headers":[{"level":2,"title":"Gitea Workflow Generating","slug":"gitea-workflow-generating","link":"#gitea-workflow-generating","children":[]},{"level":2,"title":"Create Gitea Workflow file","slug":"create-gitea-workflow-file","link":"#create-gitea-workflow-file","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]}],"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"guide/cicd/3-gitea.md","autoDesc":true,"excerpt":"<h2>Gitea Workflow Generating</h2>\\n<blockquote>\\n<p>goctls &gt;= 1.6.7</p>\\n</blockquote>\\n<h2>Create Gitea Workflow file</h2>\\n<blockquote>\\n<p>Create .gitea/workflow/docker.yaml</p>\\n</blockquote>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">goctls</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> cicd</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> gitea</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -r</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> https://github.com/suyuan32/simple-admin-job.git</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -c</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,d as data};
