import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,e as a}from"./app-76000805.js";const s={},o=a(`<h2 id="i18n-text-generation" tabindex="-1"><a class="header-anchor" href="#i18n-text-generation" aria-hidden="true">#</a> I18n Text Generation</h2><div class="hint-container warning"><p class="hint-container-title">Note</p><p>goctls v1.5.2 +</p></div><h3 id="goctls-extra-i18n" tabindex="-1"><a class="header-anchor" href="#goctls-extra-i18n" aria-hidden="true">#</a> <code>goctls extra i18n</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra i18n <span class="token parameter variable">--model_name</span><span class="token operator">=</span>StudentInfo <span class="token parameter variable">--model_name_zh</span><span class="token operator">=</span>学生信息 <span class="token parameter variable">--target</span><span class="token operator">=</span>api <span class="token parameter variable">--output</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>projects<span class="token punctuation">\\</span>simple-workspace<span class="token punctuation">\\</span>simple-admin-core<span class="token punctuation">\\</span>api<span class="token punctuation">\\</span>internal<span class="token punctuation">\\</span>i18n<span class="token punctuation">\\</span>locale
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Parameter</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>model_name</td><td>Yes</td><td></td><td>The name of the model, which is the internal struct name in the schema, such as &quot;StudentInfo&quot; in the example.</td></tr><tr><td>model_name_zh</td><td>Yes</td><td></td><td>The Chinese translation of the model.</td></tr><tr><td>target</td><td>Yes</td><td></td><td>Currently only supports &quot;api&quot;, which means generating internationalization text for API interfaces.</td></tr><tr><td>output</td><td>No</td><td></td><td>If empty, the output will be printed to the console for copying, or set it to the location of the &quot;locale&quot; folder, and it will be automatically added to the corresponding location.</td></tr></tbody></table><blockquote><p>Run <code>goctls extra i18n -h</code> see more details</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Provide i18 json text generation

Usage:
  goctl extra i18n <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>                   <span class="token builtin class-name">help</span> <span class="token keyword">for</span> i18n
  -m, <span class="token parameter variable">--model_name</span> string      The model name, it should be camelcase, such as StudentInfo
  -z, <span class="token parameter variable">--model_name_zh</span> string   The model name&#39;s Chinese translation, such as 学生信息
  -o, <span class="token parameter variable">--output</span> string          The output dir, such as ./i18n/locale
  -t, <span class="token parameter variable">--target</span> string          The target type, now only support api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="console-generation-preview" tabindex="-1"><a class="header-anchor" href="#console-generation-preview" aria-hidden="true">#</a> Console generation preview</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ goctls extra i18n --model_name=StudentInfo --model_name_zh=学生信息 --target=api
        &quot;createStudentInfo&quot;: &quot;创建学生信息&quot;,
        &quot;updateStudentInfo&quot;: &quot;更新学生信息&quot;,
        &quot;deleteStudentInfo&quot;: &quot;删除学生信息&quot;,
        &quot;getStudentInfoList&quot;: &quot;获取学生信息列表&quot;,
        &quot;getStudentInfoById&quot;: &quot;通过ID获取学生信息&quot;,

        &quot;createStudentInfo&quot;: &quot;Create a student info&quot;,
        &quot;updateStudentInfo&quot;: &quot;Update the student info&quot;,
        &quot;deleteStudentInfo&quot;: &quot;Delete student infos&quot;,
        &quot;getStudentInfoList&quot;: &quot;Get student info list&quot;,
        &quot;getStudentInfoById&quot;: &quot;Get student info by ID&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[o];function d(l,r){return t(),n("div",null,i)}const p=e(s,[["render",d],["__file","1-i18n.html.vue"]]);export{p as default};