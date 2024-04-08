import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,e as n}from"./app-BByg4QdE.js";const t={},o=n(`<h2 id="本地日志查看命令" tabindex="-1"><a class="header-anchor" href="#本地日志查看命令"><span>本地日志查看命令</span></a></h2><p>本地日志查看命令用于格式化查看本地日志，使得日志更易查看。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ goctls extra view_log <span class="token parameter variable">-h</span>
格式化查看 log 信息

Usage:
  goctls extra view_log <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>                       <span class="token builtin class-name">help</span> <span class="token keyword">for</span> view_log
  -l, <span class="token parameter variable">--list</span>                       显示所有 workspace 配置
  -t, <span class="token parameter variable">--log_type</span> string            日志类型，需配合 workspace 使用，支持 error，stat，access，severe，slow
  -p, <span class="token parameter variable">--path</span> string                log 文件路径，若配置文件路径，将会直接读取对应文件
  -r, <span class="token parameter variable">--reset_workspace</span>            清空工作区配置
  -s, <span class="token parameter variable">--size</span> int                   显示的消息数量，默认为10条，倒序显示 <span class="token punctuation">(</span>default <span class="token number">10</span><span class="token punctuation">)</span>
  -w, <span class="token parameter variable">--workspace</span> string           已保存的工作区名称
  -k, <span class="token parameter variable">--workspace_setting</span> string   配置工作区数据，配置后可保存并通过名称读取工作区目录，需配合 log_type 参数使用 ， 格式为 <span class="token string">&quot;名称,目录&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><blockquote><p>首先配置 workspace</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls extra view_log <span class="token parameter variable">-k</span> core,D:/home/data/logs/mcms/rpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>例子中 core 为自定义名称，用于区分查找， 中间的逗号必须为英文逗号，后面跟上路径，路径内必须含有 log 文件如 error.log 等，配置将会保存，可以同时存储多个 workspace , 通过 name 区分即可。</p></div><blockquote><p>然后就可以通过命令直接访问 log 了</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls extra view_log <span class="token parameter variable">-w</span> core <span class="token parameter variable">-t</span> error <span class="token parameter variable">-s</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>效果</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ goctls extra view_log <span class="token parameter variable">-w</span> core <span class="token parameter variable">-t</span> error <span class="token parameter variable">-s</span> <span class="token number">2</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;@timestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-07-06T11:20:06.191+08:00&quot;</span>,
    <span class="token string">&quot;caller&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;dberrorhandler/error_handler.go:24&quot;</span>,
    <span class="token string">&quot;content&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ent: missing required field <span class="token entity" title="\\&quot;">\\&quot;</span>EmailLog.subject<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>,
    <span class="token string">&quot;detail&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;target:<span class="token entity" title="\\&quot;">\\&quot;</span>xxx@qq.com<span class="token entity" title="\\&quot;">\\&quot;</span>  subject:<span class="token entity" title="\\&quot;">\\&quot;</span>测试一下<span class="token entity" title="\\&quot;">\\&quot;</span>  content:<span class="token entity" title="\\&quot;">\\&quot;</span>这个是测试邮件<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>,
    <span class="token string">&quot;level&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;error&quot;</span>,
    <span class="token string">&quot;span&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;653212ac1b76e41f&quot;</span>,
    <span class="token string">&quot;trace&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;26c5ce4b81ae408595a77175dee10783&quot;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;@timestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-07-06T11:11:07.036+08:00&quot;</span>,
    <span class="token string">&quot;caller&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;base/init_database_logic.go:33&quot;</span>,
    <span class="token string">&quot;content&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;database error&quot;</span>,
    <span class="token string">&quot;detail&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sql/schema: modify <span class="token entity" title="\\&quot;">\\&quot;</span>mcms_email_log<span class="token entity" title="\\&quot;">\\&quot;</span> table: pq: column <span class="token entity" title="\\&quot;">\\&quot;</span>subject<span class="token entity" title="\\&quot;">\\&quot;</span> of relation <span class="token entity" title="\\&quot;">\\&quot;</span>mcms_email_log<span class="token entity" title="\\&quot;">\\&quot;</span> contains null values&quot;</span>,
    <span class="token string">&quot;level&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;error&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>格式化前</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{&quot;@timestamp&quot;:&quot;2023-07-06T11:11:07.036+08:00&quot;,&quot;caller&quot;:&quot;base/init_database_logic.go:33&quot;,&quot;content&quot;:&quot;database error&quot;,&quot;detail&quot;:&quot;sql/schema: modify \\&quot;mcms_email_log\\&quot; table: pq: column \\&quot;subject\\&quot; of relation \\&quot;mcms_email_log\\&quot; contains null values&quot;,&quot;level&quot;:&quot;error&quot;}
{&quot;@timestamp&quot;:&quot;2023-07-06T11:20:06.191+08:00&quot;,&quot;caller&quot;:&quot;dberrorhandler/error_handler.go:24&quot;,&quot;content&quot;:&quot;ent: missing required field \\&quot;EmailLog.subject\\&quot;&quot;,&quot;detail&quot;:&quot;target:\\&quot;1693196733@qq.com\\&quot;  subject:\\&quot;测试一下\\&quot;  content:\\&quot;这个是测试邮件\\&quot;&quot;,&quot;level&quot;:&quot;error&quot;,&quot;span&quot;:&quot;653212ac1b76e41f&quot;,&quot;trace&quot;:&quot;26c5ce4b81ae408595a77175dee10783&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[o];function i(r,p){return s(),e("div",null,l)}const d=a(t,[["render",i],["__file","8-log_viewer.html.vue"]]),m=JSON.parse('{"path":"/zh/guide/quick-start/extra/8-log_viewer.html","title":"本地日志查看","lang":"zh-CN","frontmatter":{"order":8,"title":"本地日志查看","description":"本地日志查看命令 本地日志查看命令用于格式化查看本地日志，使得日志更易查看。 使用方法 首先配置 workspace 注意 例子中 core 为自定义名称，用于区分查找， 中间的逗号必须为英文逗号，后面跟上路径，路径内必须含有 log 文件如 error.log 等，配置将会保存，可以同时存储多个 workspace , 通过 name 区分即可。 然...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/quick-start/extra/8-log_viewer.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/quick-start/extra/8-log_viewer.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"本地日志查看"}],["meta",{"property":"og:description","content":"本地日志查看命令 本地日志查看命令用于格式化查看本地日志，使得日志更易查看。 使用方法 首先配置 workspace 注意 例子中 core 为自定义名称，用于区分查找， 中间的逗号必须为英文逗号，后面跟上路径，路径内必须含有 log 文件如 error.log 等，配置将会保存，可以同时存储多个 workspace , 通过 name 区分即可。 然..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-10T01:23:35.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-01-10T01:23:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"本地日志查看\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-10T01:23:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"本地日志查看命令","slug":"本地日志查看命令","link":"#本地日志查看命令","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}],"git":{"createdTime":1690506325000,"updatedTime":1704849815000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":1.58,"words":474},"filePathRelative":"zh/guide/quick-start/extra/8-log_viewer.md","localizedDate":"2023年7月28日","autoDesc":true,"excerpt":"<h2>本地日志查看命令</h2>\\n<p>本地日志查看命令用于格式化查看本地日志，使得日志更易查看。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ goctls extra view_log <span class=\\"token parameter variable\\">-h</span>\\n格式化查看 log 信息\\n\\nUsage:\\n  goctls extra view_log <span class=\\"token punctuation\\">[</span>flags<span class=\\"token punctuation\\">]</span>\\n\\nFlags:\\n  -h, <span class=\\"token parameter variable\\">--help</span>                       <span class=\\"token builtin class-name\\">help</span> <span class=\\"token keyword\\">for</span> view_log\\n  -l, <span class=\\"token parameter variable\\">--list</span>                       显示所有 workspace 配置\\n  -t, <span class=\\"token parameter variable\\">--log_type</span> string            日志类型，需配合 workspace 使用，支持 error，stat，access，severe，slow\\n  -p, <span class=\\"token parameter variable\\">--path</span> string                log 文件路径，若配置文件路径，将会直接读取对应文件\\n  -r, <span class=\\"token parameter variable\\">--reset_workspace</span>            清空工作区配置\\n  -s, <span class=\\"token parameter variable\\">--size</span> int                   显示的消息数量，默认为10条，倒序显示 <span class=\\"token punctuation\\">(</span>default <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span>\\n  -w, <span class=\\"token parameter variable\\">--workspace</span> string           已保存的工作区名称\\n  -k, <span class=\\"token parameter variable\\">--workspace_setting</span> string   配置工作区数据，配置后可保存并通过名称读取工作区目录，需配合 log_type 参数使用 ， 格式为 <span class=\\"token string\\">\\"名称,目录\\"</span>\\n</code></pre></div>"}');export{d as comp,m as data};