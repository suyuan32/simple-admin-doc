import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,c as n,d as i,e as l,b as h,o as e}from"./app-RR1yrB0I.js";const k={},p=i("h2",{id:"the-command-for-viewing-local-log-with-formatting",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#the-command-for-viewing-local-log-with-formatting"},[i("span",null,"The command for viewing local log with formatting")])],-1),r={class:"hint-container info"},d=i("p",{class:"hint-container-title"},"Video tutorial",-1),g=h(`<p>The local log view command is used to format and view local logs, making the logs easier to view.</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> view_log</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Format</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> view</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> information</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Usage:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> view_log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [flags]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Flags:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                       help</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> view_log</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -l,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --list</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                       Show</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> workspace</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> configurations</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -t,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --log_type</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            Log</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Type.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Use</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;workspace&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> param.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Support</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> error,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> stat,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> access,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> severe,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> slow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -p,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --path</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                Log</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> path.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> If</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> configuration</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> path</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> provided,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> corresponding</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> read</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> directly</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -r,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --reset_workspace</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            Clear</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> workspace</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> configurations</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -s,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --size</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                   Number</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> messages</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> display.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> displayed</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> reverse</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> order</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -w,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --workspace</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">           Saved</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> workspace</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> names</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -k,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --workspace_setting</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   Configure</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> workspace</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> data.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> After</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> configuration,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> workspace</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> directory</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> can</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> saved</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> read</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> name,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> must</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> used</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> log_type</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> parameter.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> format</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;name,directory&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><blockquote><p>Firstly, configure <code>workspace</code></p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> view_log</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> core,D:/home/data/logs/mcms/rpc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>In the example, &quot;core&quot; is a custom name used for differentiation in search. The comma in the middle must be an English comma, followed by a path that must contain log files such as error.log. The configuration will be saved, and multiple workspaces can be stored simultaneously, distinguished by name.</p></div><blockquote><p>And then you can access the log by command below:</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> view_log</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> core</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> error</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>Result</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> view_log</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> core</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> error</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;@timestamp&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;2023-07-06T11:20:06.191+08:00&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;caller&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;dberrorhandler/error_handler.go:24&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;content&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;ent: missing required field </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">EmailLog.subject</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;detail&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;target:</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">xxx@qq.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  subject:</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">测试一下</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  content:</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">这个是测试邮件</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;level&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;error&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;span&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;653212ac1b76e41f&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;trace&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;26c5ce4b81ae408595a77175dee10783&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;@timestamp&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;2023-07-06T11:11:07.036+08:00&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;caller&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;base/init_database_logic.go:33&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;content&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;database error&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;detail&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;sql/schema: modify </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">mcms_email_log</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> table: pq: column </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">subject</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of relation </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">mcms_email_log</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> contains null values&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    &quot;level&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Before Formatting</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{&quot;@timestamp&quot;:&quot;2023-07-06T11:11:07.036+08:00&quot;,&quot;caller&quot;:&quot;base/init_database_logic.go:33&quot;,&quot;content&quot;:&quot;database error&quot;,&quot;detail&quot;:&quot;sql/schema: modify \\&quot;mcms_email_log\\&quot; table: pq: column \\&quot;subject\\&quot; of relation \\&quot;mcms_email_log\\&quot; contains null values&quot;,&quot;level&quot;:&quot;error&quot;}</span></span>
<span class="line"><span>{&quot;@timestamp&quot;:&quot;2023-07-06T11:20:06.191+08:00&quot;,&quot;caller&quot;:&quot;dberrorhandler/error_handler.go:24&quot;,&quot;content&quot;:&quot;ent: missing required field \\&quot;EmailLog.subject\\&quot;&quot;,&quot;detail&quot;:&quot;target:\\&quot;1693196733@qq.com\\&quot;  subject:\\&quot;测试一下\\&quot;  content:\\&quot;这个是测试邮件\\&quot;&quot;,&quot;level&quot;:&quot;error&quot;,&quot;span&quot;:&quot;653212ac1b76e41f&quot;,&quot;trace&quot;:&quot;26c5ce4b81ae408595a77175dee10783&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function o(C,y){const s=t("BiliBili");return e(),n("div",null,[p,i("div",r,[d,l(s,{bvid:"BV1Hu4y1w7pp"})]),g])}const u=a(k,[["render",o],["__file","8-log_viewer.html.vue"]]),m=JSON.parse('{"path":"/guide/quick-start/extra/8-log_viewer.html","title":"Local Log Viewer","lang":"en-US","frontmatter":{"order":8,"title":"Local Log Viewer","head":[["meta",{"name":"keywords","content":"log viewer, json, goctls, simple admin"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/quick-start/extra/8-log_viewer.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/quick-start/extra/8-log_viewer.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Local Log Viewer"}],["meta",{"property":"og:description","content":"The command for viewing local log with formatting Video tutorial The local log view command is used to format and view local logs, making the logs easier to view. Usage Firstly,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Local Log Viewer\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"The command for viewing local log with formatting Video tutorial The local log view command is used to format and view local logs, making the logs easier to view. Usage Firstly,..."},"headers":[{"level":2,"title":"The command for viewing local log with formatting","slug":"the-command-for-viewing-local-log-with-formatting","link":"#the-command-for-viewing-local-log-with-formatting","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"createdTime":1690506325000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":2},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.36,"words":408},"filePathRelative":"guide/quick-start/extra/8-log_viewer.md","localizedDate":"July 28, 2023","autoDesc":true,"excerpt":"<h2>The command for viewing local log with formatting</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Video tutorial</p>\\n</div>\\n<p>The local log view command is used to format and view local logs, making the logs easier to view.</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> goctls</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> extra</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> view_log</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -h</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">Format</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> and</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> view</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> log</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> information</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">Usage:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  goctls</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> extra</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> view_log</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> [flags]</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">Flags:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -h,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --help</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">                       help</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> for</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> view_log</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -l,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --list</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">                       Show</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> all</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> workspace</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> configurations</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -t,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --log_type</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> string</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">            Log</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> Type.</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> Use</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> with</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"workspace\\"</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> param.</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> Support</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> error,</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> stat,</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> access,</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> severe,</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> slow</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -p,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --path</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> string</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">                Log</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> file</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> path.</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> If</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> a</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> configuration</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> file</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> path</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> is</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> provided,</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> the</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> corresponding</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> file</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> will</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> be</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> read</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> directly</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -r,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --reset_workspace</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">            Clear</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> workspace</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> configurations</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -s,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --size</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> int</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">                   Number</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> of</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> messages</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> to</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> display.</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> The</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> default</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> is</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 10,</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> displayed</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> in</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> reverse</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> order</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (default </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">10</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -w,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --workspace</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> string</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">           Saved</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> workspace</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> names</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -k,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --workspace_setting</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> string</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">   Configure</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> workspace</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> data.</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> After</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> configuration,</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> the</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> workspace</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> directory</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> can</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> be</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> saved</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> and</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> read</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> by</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> name,</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> and</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> must</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> be</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> used</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> with</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> the</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> log_type</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> parameter.</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> The</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> format</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> is</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"name,directory\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{u as comp,m as data};