import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as t,e as a}from"./app-ec856e6f.js";const i={},s=a(`<h2 id="api-初始化代码生成" tabindex="-1"><a class="header-anchor" href="#api-初始化代码生成" aria-hidden="true">#</a> API 初始化代码生成</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>goctls v1.5.2 +</p></div><h3 id="goctls-extra-init-code" tabindex="-1"><a class="header-anchor" href="#goctls-extra-init-code" aria-hidden="true">#</a> <code>goctls extra init_code</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra init_code <span class="token parameter variable">--model_name</span><span class="token operator">=</span>StudentInfo <span class="token parameter variable">--target</span><span class="token operator">=</span>core <span class="token parameter variable">--output</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>projects<span class="token punctuation">\\</span>simple-workspace<span class="token punctuation">\\</span>simple-admin-core<span class="token punctuation">\\</span>rpc<span class="token punctuation">\\</span>internal<span class="token punctuation">\\</span>logic<span class="token punctuation">\\</span>base<span class="token punctuation">\\</span>init_database_api_data.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数名称</th><th>必须</th><th>默认值</th><th>介绍</th></tr></thead><tbody><tr><td>model_name</td><td>是</td><td></td><td>模型名称，schema 中内部 struct 名称，如 example 中的 Student</td></tr><tr><td>target</td><td>是</td><td></td><td>目前支持 core, 意思是生成 core 项目中的 api 初始化信息</td></tr><tr><td>output</td><td>否</td><td></td><td>若为空则会输出至命令行，自行复制，或者设置为 <code>init_database_api_data.go</code> 的绝对路径</td></tr></tbody></table><blockquote><p>运行 <code>goctls extra init_code -h</code> 查看更多</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>生成初始化代码

用法：
  goctl extra init_code <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>

选项：
  -h, <span class="token parameter variable">--help</span>                显示帮助信息
  -m, <span class="token parameter variable">--model_name</span> string   模型名称，应该采用驼峰命名法，例如 StudentInfo
  -o, <span class="token parameter variable">--output</span> string       输出路径，仅支持 core 生成，例如 ./rpc/internal/logic/base/init_database_api_data.go
  -t, <span class="token parameter variable">--target</span> string       目标类型，现在仅支持 core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="console-生成效果" tabindex="-1"><a class="header-anchor" href="#console-生成效果" aria-hidden="true">#</a> console 生成效果</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ goctls extra init_code --model_name=StudentInfo --target=core
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[s];function o(l,c){return n(),t("div",null,d)}const p=e(i,[["render",o],["__file","api_init_code.html.vue"]]);export{p as default};
