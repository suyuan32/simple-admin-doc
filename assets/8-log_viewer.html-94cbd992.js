import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e}from"./app-34a47d60.js";const t={},o=e(`<h2 id="the-command-for-viewing-local-log-with-formatting" tabindex="-1"><a class="header-anchor" href="#the-command-for-viewing-local-log-with-formatting" aria-hidden="true">#</a> The command for viewing local log with formatting</h2><p>The local log view command is used to format and view local logs, making the logs easier to view.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls extra view_log <span class="token parameter variable">-h</span>
Format and view log information

Usage:
  goctls extra view_log <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>                       <span class="token builtin class-name">help</span> <span class="token keyword">for</span> view_log
  -l, <span class="token parameter variable">--list</span>                       Show all workspace configurations
  -t, <span class="token parameter variable">--log_type</span> string            Log Type. Use with <span class="token string">&quot;workspace&quot;</span> param. Support error, stat, access, severe, slow
  -p, <span class="token parameter variable">--path</span> string                Log <span class="token function">file</span> path. If a configuration <span class="token function">file</span> path is provided, the corresponding <span class="token function">file</span> will be <span class="token builtin class-name">read</span> directly
  -r, <span class="token parameter variable">--reset_workspace</span>            Clear workspace configurations
  -s, <span class="token parameter variable">--size</span> int                   Number of messages to display. The default is <span class="token number">10</span>, displayed <span class="token keyword">in</span> reverse order <span class="token punctuation">(</span>default <span class="token number">10</span><span class="token punctuation">)</span>
  -w, <span class="token parameter variable">--workspace</span> string           Saved workspace names
  -k, <span class="token parameter variable">--workspace_setting</span> string   Configure workspace data. After configuration, the workspace directory can be saved and <span class="token builtin class-name">read</span> by name, and must be used with the log_type parameter. The <span class="token function">format</span> is <span class="token string">&quot;name,directory&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><blockquote><p>Firstly, configure <code>workspace</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra view_log <span class="token parameter variable">-k</span> core,D:/home/data/logs/mcms/rpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>In the example, &quot;core&quot; is a custom name used for differentiation in search. The comma in the middle must be an English comma, followed by a path that must contain log files such as error.log. The configuration will be saved, and multiple workspaces can be stored simultaneously, distinguished by name.</p></div><blockquote><p>And then you can access the log by command below:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra view_log <span class="token parameter variable">-w</span> core <span class="token parameter variable">-t</span> error <span class="token parameter variable">-s</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Result</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls extra view_log <span class="token parameter variable">-w</span> core <span class="token parameter variable">-t</span> error <span class="token parameter variable">-s</span> <span class="token number">2</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Before Formatting</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;@timestamp&quot;:&quot;2023-07-06T11:11:07.036+08:00&quot;,&quot;caller&quot;:&quot;base/init_database_logic.go:33&quot;,&quot;content&quot;:&quot;database error&quot;,&quot;detail&quot;:&quot;sql/schema: modify \\&quot;mcms_email_log\\&quot; table: pq: column \\&quot;subject\\&quot; of relation \\&quot;mcms_email_log\\&quot; contains null values&quot;,&quot;level&quot;:&quot;error&quot;}
{&quot;@timestamp&quot;:&quot;2023-07-06T11:20:06.191+08:00&quot;,&quot;caller&quot;:&quot;dberrorhandler/error_handler.go:24&quot;,&quot;content&quot;:&quot;ent: missing required field \\&quot;EmailLog.subject\\&quot;&quot;,&quot;detail&quot;:&quot;target:\\&quot;1693196733@qq.com\\&quot;  subject:\\&quot;测试一下\\&quot;  content:\\&quot;这个是测试邮件\\&quot;&quot;,&quot;level&quot;:&quot;error&quot;,&quot;span&quot;:&quot;653212ac1b76e41f&quot;,&quot;trace&quot;:&quot;26c5ce4b81ae408595a77175dee10783&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[o];function l(r,c){return a(),n("div",null,i)}const d=s(t,[["render",l],["__file","8-log_viewer.html.vue"]]);export{d as default};