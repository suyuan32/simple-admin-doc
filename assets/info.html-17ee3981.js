import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-f458c99f.js";const o={},i=e(`<h2 id="show-info-command" tabindex="-1"><a class="header-anchor" href="#show-info-command" aria-hidden="true">#</a> Show Info Command</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls info <span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Help</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>View additional information, such as environment variables and project port usage.

Usage:
  goctl info <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Available Commands:
  <span class="token function">env</span>         View environment variables.
  port        View port usage.

Flags:
  -h, <span class="token parameter variable">--help</span>   <span class="token builtin class-name">help</span> <span class="token keyword">for</span> info


Use <span class="token string">&quot;goctl info [command] --help&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2><div class="hint-container info"><p class="hint-container-title">Info</p><p>Simple Admin Provides lots of environment variables to configure the service when develop locally or modify for the docker container.</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls info <span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Simple Admin<span class="token string">&#39;s environment variables
Notice: Environment variables have priority over configuration files
TOOLS
+-------------------------+-------------------------------------------------------------------------------------+
| KEY                     | INTRODUCTION                                                                        |
+-------------------------+-------------------------------------------------------------------------------------+
| SIMPLE_ADMIN_TOOLS_LANG | The goctls&#39;</span> <span class="token builtin class-name">help</span> message language <span class="token builtin class-name">type</span> <span class="token keyword">in</span> console, support zh and en, default is en <span class="token operator">|</span>
+-------------------------+-------------------------------------------------------------------------------------+
JWT
+-------------+-------------------+
<span class="token operator">|</span> KEY         <span class="token operator">|</span> INTRODUCTION      <span class="token operator">|</span>
+-------------+-------------------+
<span class="token operator">|</span> AUTH_SECRET <span class="token operator">|</span> JWT encrypted key <span class="token operator">|</span>
<span class="token operator">|</span> AUTH_EXPIRE <span class="token operator">|</span> JWT expired <span class="token function">time</span>  <span class="token operator">|</span>
+-------------+-------------------+
API
+-------------+--------------------------------+
<span class="token operator">|</span> KEY         <span class="token operator">|</span> INTRODUCTION                   <span class="token operator">|</span>
+-------------+--------------------------------+
<span class="token operator">|</span> API_HOST    <span class="token operator">|</span> The API <span class="token function">service</span><span class="token string">&#39;s host address |
| API_PORT    | The API service&#39;</span>s port         <span class="token operator">|</span>
<span class="token operator">|</span> API_TIMEOUT <span class="token operator">|</span> The API <span class="token function">service</span><span class="token string">&#39;s timeout      |
+-------------+--------------------------------+
RPC
+---------------+-----------------------------------------------------------------+
| KEY           | INTRODUCTION                                                    |
+---------------+-----------------------------------------------------------------+
| RPC_LISTEN_ON | The RPC service&#39;</span>s <span class="token function">host</span> and port address, such as localhost:8080 <span class="token operator">|</span>
<span class="token operator">|</span> RPC_TIMEOUT   <span class="token operator">|</span> The RPC <span class="token function">service</span><span class="token string">&#39;s timeout setting                               |
+---------------+-----------------------------------------------------------------+
LOG
+------------------+-----------------------------------------------+
| KEY              | INTRODUCTION                                  |
+------------------+-----------------------------------------------+
| LOG_SERVICE_NAME | The service&#39;</span>s name <span class="token keyword">in</span> log                     <span class="token operator">|</span>
<span class="token operator">|</span> LOG_MODE         <span class="token operator">|</span> The log mode such as file, console and volume <span class="token operator">|</span>
<span class="token operator">|</span> LOG_ENCODING     <span class="token operator">|</span> The log encoding such as json and plain       <span class="token operator">|</span>
<span class="token operator">|</span> LOG_PATH         <span class="token operator">|</span> The log storage path, use <span class="token keyword">in</span> <span class="token function">file</span> mode        <span class="token operator">|</span>
<span class="token operator">|</span> LOG_LEVEL        <span class="token operator">|</span> The log level such as info and error          <span class="token operator">|</span>
+------------------+-----------------------------------------------+
DATABASE <span class="token punctuation">(</span>Ent<span class="token punctuation">)</span>
+------------------------+----------------------------------------------------------+
<span class="token operator">|</span> KEY                    <span class="token operator">|</span> INTRODUCTION                                             <span class="token operator">|</span>
+------------------------+----------------------------------------------------------+
<span class="token operator">|</span> DATABASE_HOST          <span class="token operator">|</span> The database<span class="token string">&#39;s host address                              |
| DATABASE_PORT          | The database&#39;</span>s port                                      <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_USERNAME      <span class="token operator">|</span> The database<span class="token string">&#39;s username                                  |
| DATABASE_PASSWORD      | The database&#39;</span>s password                                  <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_DBNAME        <span class="token operator">|</span> The database<span class="token string">&#39;s name                                      |
| DATABASE_SSL_MODE      | The database&#39;</span>s ssl mode                                  <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_TYPE          <span class="token operator">|</span> The database<span class="token string">&#39;s type, support mysql, postgres and sqlite3 |
| DATABASE_MAX_OPEN_CONN | The database&#39;</span>s max opened connections                    <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_CACHE_TIME    <span class="token operator">|</span> The database<span class="token string">&#39;s cache time                                |
| DATABASE_DBPATH        | The database&#39;</span>s storage path <span class="token keyword">for</span> sqlite3                  <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_MYSQL_CONFIG  <span class="token operator">|</span> The database<span class="token string">&#39;s extra config for mysql                    |
| DATABASE_PG_CONFIG     | The database&#39;</span>s extra config <span class="token keyword">for</span> postgresql               <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_SQLITE_CONFIG <span class="token operator">|</span> The database&#39;s extra config <span class="token keyword">for</span> sqlite3                  <span class="token operator">|</span>
+------------------------+----------------------------------------------------------+
CAPTCHA
+--------------------+------------------------------------------------------+
<span class="token operator">|</span> KEY                <span class="token operator">|</span> INTRODUCTION                                         <span class="token operator">|</span>
+--------------------+------------------------------------------------------+
<span class="token operator">|</span> CAPTCHA_KEY_LONG   <span class="token operator">|</span> The captcha key length                               <span class="token operator">|</span>
<span class="token operator">|</span> CAPTCHA_IMG_WIDTH  <span class="token operator">|</span> The width of captcha                                 <span class="token operator">|</span>
<span class="token operator">|</span> CAPTCHA_IMG_HEIGHT <span class="token operator">|</span> The height of captcha                                <span class="token operator">|</span>
<span class="token operator">|</span> CAPTCHA_DRIVER     <span class="token operator">|</span> The driver of captcha such as math, string and digit <span class="token operator">|</span>
+--------------------+------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="port-usage" tabindex="-1"><a class="header-anchor" href="#port-usage" aria-hidden="true">#</a> Port Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls info port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Simple Admin&#39;s port usage
PORT
+------+------------+
<span class="token operator">|</span> PORT <span class="token operator">|</span> SERVICE    <span class="token operator">|</span>
+------+------------+
<span class="token operator">|</span> <span class="token number">9100</span> <span class="token operator">|</span> core_api   <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">9101</span> <span class="token operator">|</span> core_rpc   <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">9102</span> <span class="token operator">|</span> file_api   <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">9103</span> <span class="token operator">|</span> member_api <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">9104</span> <span class="token operator">|</span> member_rpc <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">9105</span> <span class="token operator">|</span> job_rpc    <span class="token operator">|</span>
+------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r=[i];function l(p,t){return n(),a("div",null,r)}const v=s(o,[["render",l],["__file","info.html.vue"]]);export{v as default};
