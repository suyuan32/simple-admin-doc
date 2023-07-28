import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as t,e as a}from"./app-f7e94db1.js";const i={},s=a(`<h2 id="api-initialize-code-generation" tabindex="-1"><a class="header-anchor" href="#api-initialize-code-generation" aria-hidden="true">#</a> API Initialize Code Generation</h2><div class="hint-container warning"><p class="hint-container-title">Note</p><p>goctls v1.5.2 +</p></div><h3 id="goctls-extra-init-code" tabindex="-1"><a class="header-anchor" href="#goctls-extra-init-code" aria-hidden="true">#</a> <code>goctls extra init_code</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra init_code <span class="token parameter variable">--model_name</span><span class="token operator">=</span>StudentInfo <span class="token parameter variable">--target</span><span class="token operator">=</span>core <span class="token parameter variable">--output</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>projects<span class="token punctuation">\\</span>simple-workspace<span class="token punctuation">\\</span>simple-admin-core<span class="token punctuation">\\</span>rpc<span class="token punctuation">\\</span>internal<span class="token punctuation">\\</span>logic<span class="token punctuation">\\</span>base<span class="token punctuation">\\</span>init_database_api_data.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Parameter</th><th>Required</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td>model_name</td><td>Yes</td><td></td><td>The model name, the internal struct name in the schema, such as Student in the example</td></tr><tr><td>model_name_zh</td><td>Yes</td><td></td><td>Model Chinese translation</td></tr><tr><td>target</td><td>Yes</td><td></td><td>Currently supports <code>core</code>, which means to generate api initialization information in the core project</td></tr><tr><td>output</td><td>No</td><td></td><td>If it is empty, it will be output to the command line, copied by itself, or set to the absolute path of <code>init_database_api_data.go</code></td></tr></tbody></table><blockquote><p>Run <code>goctls extra init_code -h</code> see more details</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Generating initialize code

Usage:
  goctl extra init_code <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>                <span class="token builtin class-name">help</span> <span class="token keyword">for</span> init_code
  -m, <span class="token parameter variable">--model_name</span> string   The model name, it should be camelcase, such as StudentInfo
  -o, <span class="token parameter variable">--output</span> string       The output path, only support core generating, such as ./rpc/internal/logic/base/init_database_api_data.go
  -t, <span class="token parameter variable">--target</span> string       The target type, now only support core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="console-generation-preview" tabindex="-1"><a class="header-anchor" href="#console-generation-preview" aria-hidden="true">#</a> Console generation preview</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ goctls extra init_code --model_name=StudentInfo --target=core
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[s];function o(l,r){return n(),t("div",null,d)}const p=e(i,[["render",o],["__file","2-api_init_code.html.vue"]]);export{p as default};
