import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as n}from"./app-BByg4QdE.js";const i={},s=n(`<h2 id="api-initialize-code-generation" tabindex="-1"><a class="header-anchor" href="#api-initialize-code-generation"><span>API Initialize Code Generation</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>goctls v1.5.2 +</p></div><h3 id="goctls-extra-init-code" tabindex="-1"><a class="header-anchor" href="#goctls-extra-init-code"><span><code>goctls extra init_code</code></span></a></h3><blockquote><p>Run in root directory of project</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls extra init_code <span class="token parameter variable">-m</span> StudentInfo <span class="token parameter variable">-t</span> other <span class="token parameter variable">-n</span> Core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Parameter</th><th>Required</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td>model_name</td><td>Yes</td><td></td><td>The model name, the internal struct name in the schema, such as Student in the example</td></tr><tr><td>target</td><td>Yes</td><td></td><td>The target type, now support core and other</td></tr><tr><td>output</td><td>No</td><td></td><td>The output path, the project&#39;s root directory</td></tr><tr><td>service_name</td><td>Yes</td><td>Other</td><td>The service name</td></tr><tr><td>route_prefix</td><td>No</td><td>false</td><td>Whether to generate route prefix, it must begin with &quot;/&quot;</td></tr><tr><td>style</td><td>Yes</td><td>go_zero</td><td>The file naming style</td></tr></tbody></table><blockquote><p>Run <code>goctls extra init_code -h</code> see more details</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ goctls extra init_code <span class="token parameter variable">-h</span>
Generating initialize code

Usage:
  goctls extra init_code <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>                  <span class="token builtin class-name">help</span> <span class="token keyword">for</span> init_code
  -m, <span class="token parameter variable">--model_name</span> string     The model name, it should be camelcase, such as StudentInfo
  -o, <span class="token parameter variable">--output</span> string         The output path, the project&#39;s root directory  <span class="token punctuation">(</span>default <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
  -p, <span class="token parameter variable">--route_prefix</span> string   The prefix of the route path
  -n, <span class="token parameter variable">--service_name</span> string   Service name，such as <span class="token string">&quot;Core&quot;</span> <span class="token punctuation">(</span>default <span class="token string">&quot;Other&quot;</span><span class="token punctuation">)</span>
  -s, <span class="token parameter variable">--style</span> string          The <span class="token function">file</span> naming format, see <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md<span class="token punctuation">]</span> <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
  -t, <span class="token parameter variable">--target</span> string         The target type, now support core and other
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[s];function r(c,l){return e(),a("div",null,o)}const u=t(i,[["render",r],["__file","2-api_init_code.html.vue"]]),m=JSON.parse('{"path":"/guide/quick-start/extra/2-api_init_code.html","title":"API Initialization","lang":"en-US","frontmatter":{"order":2,"title":"API Initialization","description":"API Initialize Code Generation Warning goctls v1.5.2 + goctls extra init_code Run in root directory of project Run goctls extra init_code -h see more details","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/quick-start/extra/2-api_init_code.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/quick-start/extra/2-api_init_code.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"API Initialization"}],["meta",{"property":"og:description","content":"API Initialize Code Generation Warning goctls v1.5.2 + goctls extra init_code Run in root directory of project Run goctls extra init_code -h see more details"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-11T06:22:48.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-01-11T06:22:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"API Initialization\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-11T06:22:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"API Initialize Code Generation","slug":"api-initialize-code-generation","link":"#api-initialize-code-generation","children":[{"level":3,"title":"goctls extra init_code","slug":"goctls-extra-init-code","link":"#goctls-extra-init-code","children":[]}]}],"git":{"createdTime":1680859418000,"updatedTime":1704954168000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":5},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":0.65,"words":196},"filePathRelative":"guide/quick-start/extra/2-api_init_code.md","localizedDate":"April 7, 2023","autoDesc":true,"excerpt":"<h2>API Initialize Code Generation</h2>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">Warning</p>\\n<p>goctls v1.5.2 +</p>\\n</div>\\n<h3><code>goctls extra init_code</code></h3>\\n<blockquote>\\n<p>Run in root directory of project</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>goctls extra init_code <span class=\\"token parameter variable\\">-m</span> StudentInfo <span class=\\"token parameter variable\\">-t</span> other <span class=\\"token parameter variable\\">-n</span> Core\\n</code></pre></div>"}');export{u as comp,m as data};