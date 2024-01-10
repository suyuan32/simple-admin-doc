import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as n,e as a}from"./app-qjOf8u7L.js";const s={},i=a(`<h2 id="api-initialize-code-generation" tabindex="-1"><a class="header-anchor" href="#api-initialize-code-generation" aria-hidden="true">#</a> API Initialize Code Generation</h2><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>goctls v1.5.2 +</p></div><h3 id="goctls-extra-init-code" tabindex="-1"><a class="header-anchor" href="#goctls-extra-init-code" aria-hidden="true">#</a> <code>goctls extra init_code</code></h3><blockquote><p>Run in root directory of project</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra init_code <span class="token parameter variable">-m</span> StudentInfo <span class="token parameter variable">-t</span> other <span class="token parameter variable">-n</span> Core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Parameter</th><th>Required</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td>model_name</td><td>Yes</td><td></td><td>The model name, the internal struct name in the schema, such as Student in the example</td></tr><tr><td>target</td><td>Yes</td><td></td><td>The target type, now support core and other</td></tr><tr><td>output</td><td>No</td><td></td><td>The output path, the project&#39;s root directory</td></tr><tr><td>service_name</td><td>Yes</td><td>Other</td><td>The service name</td></tr><tr><td>style</td><td>Yes</td><td>go_zero</td><td>The file naming style</td></tr></tbody></table><blockquote><p>Run <code>goctls extra init_code -h</code> see more details</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Generating initialize code

Usage:
  goctls extra init_code <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>                  <span class="token builtin class-name">help</span> <span class="token keyword">for</span> init_code
  -m, <span class="token parameter variable">--model_name</span> string     The model name, it should be camelcase, such as StudentInfo
  -o, <span class="token parameter variable">--output</span> string         The output path, the project&#39;s root directory  <span class="token punctuation">(</span>default <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
  -n, <span class="token parameter variable">--service_name</span> string   Service name，such as <span class="token string">&quot;Core&quot;</span> <span class="token punctuation">(</span>default <span class="token string">&quot;Other&quot;</span><span class="token punctuation">)</span>
  -s, <span class="token parameter variable">--style</span> string          The <span class="token function">file</span> naming format, see <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md<span class="token punctuation">]</span> <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
  -t, <span class="token parameter variable">--target</span> string         The target type, now support core and other
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="console-generation-preview" tabindex="-1"><a class="header-anchor" href="#console-generation-preview" aria-hidden="true">#</a> Console generation preview</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ goctls extra init_code --model_name=StudentInfo --target=core
// STUDENTINFO

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath(&quot;/student_info/create&quot;).
        SetDescription(&quot;apiDesc.createStudentInfo&quot;).
        SetAPIGroup(&quot;student_info&quot;).
        SetMethod(&quot;POST&quot;),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath(&quot;/student_info/update&quot;).
        SetDescription(&quot;apiDesc.updateStudentInfo&quot;).
        SetAPIGroup(&quot;student_info&quot;).
        SetMethod(&quot;POST&quot;),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath(&quot;/student_info/delete&quot;).
        SetDescription(&quot;apiDesc.deleteStudentInfo&quot;).
        SetAPIGroup(&quot;student_info&quot;).
        SetMethod(&quot;POST&quot;),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath(&quot;/student_info/list&quot;).
        SetDescription(&quot;apiDesc.getStudentInfoList&quot;).
        SetAPIGroup(&quot;student_info&quot;).
        SetMethod(&quot;POST&quot;),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath(&quot;/student_info&quot;).
        SetDescription(&quot;apiDesc.getStudentInfoById&quot;).
        SetAPIGroup(&quot;student_info&quot;).
        SetMethod(&quot;POST&quot;),
    )

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d=[i];function o(r,l){return t(),n("div",null,d)}const p=e(s,[["render",o],["__file","2-api_init_code.html.vue"]]);export{p as default};
