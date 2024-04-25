import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,e}from"./app-DnnH-GAL.js";const o={},i=e(`<h2 id="show-info-command" tabindex="-1"><a class="header-anchor" href="#show-info-command"><span>Show Info Command</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls info <span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Help</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>View additional information, such as environment variables and project port usage.

Usage:
  goctl info <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Available Commands:
  <span class="token function">env</span>         View environment variables.
  port        View port usage.

Flags:
  -h, <span class="token parameter variable">--help</span>   <span class="token builtin class-name">help</span> <span class="token keyword">for</span> info


Use <span class="token string">&quot;goctl info [command] --help&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables"><span>Environment Variables</span></a></h2><div class="hint-container info"><p class="hint-container-title">Info</p><p>Simple Admin Provides lots of environment variables to configure the service when develop locally or modify for the docker container.</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls info <span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Simple Admin<span class="token string">&#39;s environment variables
Notice: Environment variables have priority over configuration files
TOOLS
+-------------------------+-------------------------------------------------------------------------------------+
| KEY                     | INTRODUCTION                                                                        |
+-------------------------+-------------------------------------------------------------------------------------+
| SIMPLE_LANG | The goctls&#39;</span> <span class="token builtin class-name">help</span> message language <span class="token builtin class-name">type</span> <span class="token keyword">in</span> console, support zh and en, default is en <span class="token operator">|</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Show the supported services</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls info <span class="token function">env</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Service
+--------------+-------------------------+
<span class="token operator">|</span> SERVICE NAME <span class="token operator">|</span> INTRODUCTION            <span class="token operator">|</span>
+--------------+-------------------------+
<span class="token operator">|</span> core         <span class="token operator">|</span> Core Service            <span class="token operator">|</span>
<span class="token operator">|</span> fms          <span class="token operator">|</span> File Management Service <span class="token operator">|</span>
+--------------+-------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Show the target service&#39;s environment variables</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls info <span class="token function">env</span> <span class="token parameter variable">-s</span> mcms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Simple Admin&#39;s environment variables
Notice: Environment variables have priority over configuration files
FMS
+----------------+----------------------------------------------------------------------+
<span class="token operator">|</span> KEY            <span class="token operator">|</span> INTRODUCTION                                                         <span class="token operator">|</span>
+----------------+----------------------------------------------------------------------+
<span class="token operator">|</span> MAX_IMAGE_SIZE <span class="token operator">|</span> Maximum size of image files                                          <span class="token operator">|</span>
<span class="token operator">|</span> MAX_VIDEO_SIZE <span class="token operator">|</span> Maximum size of video files                                          <span class="token operator">|</span>
<span class="token operator">|</span> MAX_AUDIO_SIZE <span class="token operator">|</span> Maximum size of audio files                                          <span class="token operator">|</span>
<span class="token operator">|</span> MAX_OTHER_SIZE <span class="token operator">|</span> Maximum size of files of other types                                 <span class="token operator">|</span>
<span class="token operator">|</span> PRIVATE_PATH   <span class="token operator">|</span> Local storage address <span class="token keyword">for</span> private files                              <span class="token operator">|</span>
<span class="token operator">|</span> PUBLIC_PATH    <span class="token operator">|</span> Local storage address <span class="token keyword">for</span> public files                               <span class="token operator">|</span>
<span class="token operator">|</span> SERVER_URL     <span class="token operator">|</span> Domain name or IP address of the server, such as http://localhost:81 <span class="token operator">|</span>
+----------------+----------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="port-usage" tabindex="-1"><a class="header-anchor" href="#port-usage"><span>Port Usage</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls info port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Simple Admin&#39;s port usage
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),t=[i];function r(l,p){return n(),a("div",null,t)}const v=s(o,[["render",r],["__file","6-info.html.vue"]]),m=JSON.parse('{"path":"/guide/quick-start/extra/6-info.html","title":"Show Configuration Info","lang":"en-US","frontmatter":{"order":9,"title":"Show Configuration Info","description":"Show Info Command Help Environment Variables Info Simple Admin Provides lots of environment variables to configure the service when develop locally or modify for the docker cont...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/quick-start/extra/6-info.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/quick-start/extra/6-info.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Show Configuration Info"}],["meta",{"property":"og:description","content":"Show Info Command Help Environment Variables Info Simple Admin Provides lots of environment variables to configure the service when develop locally or modify for the docker cont..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-10T01:23:35.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-01-10T01:23:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Show Configuration Info\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-10T01:23:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Show Info Command","slug":"show-info-command","link":"#show-info-command","children":[]},{"level":2,"title":"Environment Variables","slug":"environment-variables","link":"#environment-variables","children":[]},{"level":2,"title":"Port Usage","slug":"port-usage","link":"#port-usage","children":[]}],"git":{"createdTime":1684149945000,"updatedTime":1704849815000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":4}]},"readingTime":{"minutes":1.57,"words":472},"filePathRelative":"guide/quick-start/extra/6-info.md","localizedDate":"May 15, 2023","autoDesc":true,"excerpt":"<h2>Show Info Command</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>goctls info <span class=\\"token function\\">env</span>\\n</code></pre></div><blockquote>\\n<p>Help</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>View additional information, such as environment variables and project port usage.\\n\\nUsage:\\n  goctl info <span class=\\"token punctuation\\">[</span>command<span class=\\"token punctuation\\">]</span>\\n\\nAvailable Commands:\\n  <span class=\\"token function\\">env</span>         View environment variables.\\n  port        View port usage.\\n\\nFlags:\\n  -h, <span class=\\"token parameter variable\\">--help</span>   <span class=\\"token builtin class-name\\">help</span> <span class=\\"token keyword\\">for</span> info\\n\\n\\nUse <span class=\\"token string\\">\\"goctl info [command] --help\\"</span> <span class=\\"token keyword\\">for</span> <span class=\\"token function\\">more</span> information about a command.\\n</code></pre></div>"}');export{v as comp,m as data};
