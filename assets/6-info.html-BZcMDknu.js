import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,e}from"./app-DWOMpjIH.js";const o={},p=e(`<h2 id="查看信息命令" tabindex="-1"><a class="header-anchor" href="#查看信息命令"><span>查看信息命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls info <span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>帮助信息</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>查看额外信息，如环境变量和项目端口使用情况

Usage:
  goctl info <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Available Commands:
  <span class="token function">env</span>         查看环境变量
  port        查看端口使用情况

Flags:
  -h, <span class="token parameter variable">--help</span>   <span class="token builtin class-name">help</span> <span class="token keyword">for</span> info


Use <span class="token string">&quot;goctl info [command] --help&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>Simple Admin Tool 目前已提供多种环境变量方便在本地调试时快速配置 docker 环境而不需要修改配置文件</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">SIMPLE_LANG</span><span class="token operator">=</span>zh goctls info <span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Simple Admin的环境变量
注意： 环境变量的优先级大于配置文件
TOOLS
+-------------------------+--------------------------------------------------------+
<span class="token operator">|</span> 环境变量名称            <span class="token operator">|</span> 环境变量介绍                                           <span class="token operator">|</span>
+-------------------------+--------------------------------------------------------+
<span class="token operator">|</span> SIMPLE_LANG <span class="token operator">|</span> 控制台中goctls的帮助信息语言类型，支持zh和en，默认为en <span class="token operator">|</span>
+-------------------------+--------------------------------------------------------+
JWT
+--------------+--------------+
<span class="token operator">|</span> 环境变量名称 <span class="token operator">|</span> 环境变量介绍 <span class="token operator">|</span>
+--------------+--------------+
<span class="token operator">|</span> AUTH_SECRET  <span class="token operator">|</span> JWT加密密钥  <span class="token operator">|</span>
<span class="token operator">|</span> AUTH_EXPIRE  <span class="token operator">|</span> JWT过期时间  <span class="token operator">|</span>
+--------------+--------------+
API
+--------------+-------------------+
<span class="token operator">|</span> 环境变量名称 <span class="token operator">|</span> 环境变量介绍      <span class="token operator">|</span>
+--------------+-------------------+
<span class="token operator">|</span> API_HOST     <span class="token operator">|</span> API服务的主机地址 <span class="token operator">|</span>
<span class="token operator">|</span> API_PORT     <span class="token operator">|</span> API 服务端口      <span class="token operator">|</span>
<span class="token operator">|</span> API_TIMEOUT  <span class="token operator">|</span> API 服务超时时间  <span class="token operator">|</span>
+--------------+-------------------+
RPC
+---------------+-------------------------------------------+
<span class="token operator">|</span> 环境变量名称  <span class="token operator">|</span> 环境变量介绍                              <span class="token operator">|</span>
+---------------+-------------------------------------------+
<span class="token operator">|</span> RPC_LISTEN_ON <span class="token operator">|</span> RPC服务的主机和端口地址，如localhost:8080 <span class="token operator">|</span>
<span class="token operator">|</span> RPC_TIMEOUT   <span class="token operator">|</span> RPC 服务的超时设置                        <span class="token operator">|</span>
+---------------+-------------------------------------------+
LOG
+------------------+--------------------------------------+
<span class="token operator">|</span> 环境变量名称     <span class="token operator">|</span> 环境变量介绍                         <span class="token operator">|</span>
+------------------+--------------------------------------+
<span class="token operator">|</span> LOG_SERVICE_NAME <span class="token operator">|</span> 日志中的服务名称                     <span class="token operator">|</span>
<span class="token operator">|</span> LOG_MODE         <span class="token operator">|</span> 日志模式, 如 file, console 和 volume <span class="token operator">|</span>
<span class="token operator">|</span> LOG_ENCODING     <span class="token operator">|</span> 日志编码如 json、plain               <span class="token operator">|</span>
<span class="token operator">|</span> LOG_PATH         <span class="token operator">|</span> 日志存放路径，当 mode 为 <span class="token function">file</span> 时启用 <span class="token operator">|</span>
<span class="token operator">|</span> LOG_LEVEL        <span class="token operator">|</span> 日志级别如 info, error               <span class="token operator">|</span>
+------------------+--------------------------------------+
DATABASE <span class="token punctuation">(</span>Ent<span class="token punctuation">)</span>
+------------------------+------------------------------------------+
<span class="token operator">|</span> 环境变量名称           <span class="token operator">|</span> 环境变量介绍                             <span class="token operator">|</span>
+------------------------+------------------------------------------+
<span class="token operator">|</span> DATABASE_HOST          <span class="token operator">|</span> 数据库的主机地址                         <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_PORT          <span class="token operator">|</span> 数据库端口                               <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_USERNAME      <span class="token operator">|</span> 数据库的用户名                           <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_PASSWORD      <span class="token operator">|</span> 数据库密码                               <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_DBNAME        <span class="token operator">|</span> 数据库名称                               <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_SSL_MODE      <span class="token operator">|</span> 数据库的ssl模式                          <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_TYPE          <span class="token operator">|</span> 数据库类型，支持mysql、postgres和sqlite3 <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_MAX_OPEN_CONN <span class="token operator">|</span> 数据库的最大打开连接数                   <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_CACHE_TIME    <span class="token operator">|</span> 数据库的缓存时间                         <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_DBPATH        <span class="token operator">|</span> sqlite3 的数据库存放路径                 <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_MYSQL_CONFIG  <span class="token operator">|</span> 数据库对 mysql 的额外配置                <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_PG_CONFIG     <span class="token operator">|</span> 数据库对 postgresql 的额外配置           <span class="token operator">|</span>
<span class="token operator">|</span> DATABASE_SQLITE_CONFIG <span class="token operator">|</span> 数据库对 sqlite3 的额外配置              <span class="token operator">|</span>
+------------------------+------------------------------------------+
CAPTCHA
+--------------------+---------------------------+
<span class="token operator">|</span> 环境变量名称       <span class="token operator">|</span> 环境变量介绍              <span class="token operator">|</span>
+--------------------+---------------------------+
<span class="token operator">|</span> CAPTCHA_KEY_LONG   <span class="token operator">|</span> 验证码长度                <span class="token operator">|</span>
<span class="token operator">|</span> CAPTCHA_IMG_WIDTH  <span class="token operator">|</span> 验证码宽度                <span class="token operator">|</span>
<span class="token operator">|</span> CAPTCHA_IMG_HEIGHT <span class="token operator">|</span> 验证码高度                <span class="token operator">|</span>
<span class="token operator">|</span> CAPTCHA_DRIVER     <span class="token operator">|</span> 验证码类型如 math, string <span class="token operator">|</span>
+--------------------+---------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查看支持的服务</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls info <span class="token function">env</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Service
+----------+--------------+
<span class="token operator">|</span> 服务名称 <span class="token operator">|</span> 服务介绍     <span class="token operator">|</span>
+----------+--------------+
<span class="token operator">|</span> core     <span class="token operator">|</span> 核心服务     <span class="token operator">|</span>
<span class="token operator">|</span> fms      <span class="token operator">|</span> 文件服务     <span class="token operator">|</span>
+----------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查看特定服务的环境变量</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls info <span class="token function">env</span> <span class="token parameter variable">-s</span> fms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>FMS
+----------------+--------------------------------------------+
<span class="token operator">|</span> 环境变量名称   <span class="token operator">|</span> 环境变量介绍                               <span class="token operator">|</span>
+----------------+--------------------------------------------+
<span class="token operator">|</span> MAX_IMAGE_SIZE <span class="token operator">|</span> 图片文件最大大小                           <span class="token operator">|</span>
<span class="token operator">|</span> MAX_VIDEO_SIZE <span class="token operator">|</span> 视频文件最大大小                           <span class="token operator">|</span>
<span class="token operator">|</span> MAX_AUDIO_SIZE <span class="token operator">|</span> 音频文件最大大小                           <span class="token operator">|</span>
<span class="token operator">|</span> MAX_OTHER_SIZE <span class="token operator">|</span> 其他类型文件最大大小                       <span class="token operator">|</span>
<span class="token operator">|</span> PRIVATE_PATH   <span class="token operator">|</span> 私人文件本地存储地址                       <span class="token operator">|</span>
<span class="token operator">|</span> PUBLIC_PATH    <span class="token operator">|</span> 公开文件本地存储地址                       <span class="token operator">|</span>
<span class="token operator">|</span> SERVER_URL     <span class="token operator">|</span> 服务器域名或IP地址，如 http://localhost:81 <span class="token operator">|</span>
+----------------+--------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="端口占用" tabindex="-1"><a class="header-anchor" href="#端口占用"><span>端口占用</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">SIMPLE_LANG</span><span class="token operator">=</span>zh goctls info port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Simple Admin的端口使用情况
PORT
+------+------------+
<span class="token operator">|</span> 端口 <span class="token operator">|</span> 服务       <span class="token operator">|</span>
+------+------------+
<span class="token operator">|</span> <span class="token number">9100</span> <span class="token operator">|</span> core_api   <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">9101</span> <span class="token operator">|</span> core_rpc   <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">9102</span> <span class="token operator">|</span> file_api   <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">9103</span> <span class="token operator">|</span> member_api <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">9104</span> <span class="token operator">|</span> member_rpc <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">9105</span> <span class="token operator">|</span> job_rpc    <span class="token operator">|</span>
+------+------------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),t=[p];function l(r,i){return n(),a("div",null,t)}const v=s(o,[["render",l],["__file","6-info.html.vue"]]),u=JSON.parse('{"path":"/zh/guide/quick-start/extra/6-info.html","title":"配置信息查看","lang":"zh-CN","frontmatter":{"order":9,"title":"配置信息查看","description":"查看信息命令 帮助信息 环境变量 相关信息 Simple Admin Tool 目前已提供多种环境变量方便在本地调试时快速配置 docker 环境而不需要修改配置文件 查看支持的服务 查看特定服务的环境变量 端口占用","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/quick-start/extra/6-info.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/quick-start/extra/6-info.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"配置信息查看"}],["meta",{"property":"og:description","content":"查看信息命令 帮助信息 环境变量 相关信息 Simple Admin Tool 目前已提供多种环境变量方便在本地调试时快速配置 docker 环境而不需要修改配置文件 查看支持的服务 查看特定服务的环境变量 端口占用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-10T01:23:35.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-01-10T01:23:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置信息查看\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-10T01:23:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"查看信息命令","slug":"查看信息命令","link":"#查看信息命令","children":[]},{"level":2,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[]},{"level":2,"title":"端口占用","slug":"端口占用","link":"#端口占用","children":[]}],"git":{"createdTime":1684149945000,"updatedTime":1704849815000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":2.34,"words":701},"filePathRelative":"zh/guide/quick-start/extra/6-info.md","localizedDate":"2023年5月15日","autoDesc":true,"excerpt":"<h2>查看信息命令</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>goctls info <span class=\\"token function\\">env</span>\\n</code></pre></div><blockquote>\\n<p>帮助信息</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>查看额外信息，如环境变量和项目端口使用情况\\n\\nUsage:\\n  goctl info <span class=\\"token punctuation\\">[</span>command<span class=\\"token punctuation\\">]</span>\\n\\nAvailable Commands:\\n  <span class=\\"token function\\">env</span>         查看环境变量\\n  port        查看端口使用情况\\n\\nFlags:\\n  -h, <span class=\\"token parameter variable\\">--help</span>   <span class=\\"token builtin class-name\\">help</span> <span class=\\"token keyword\\">for</span> info\\n\\n\\nUse <span class=\\"token string\\">\\"goctl info [command] --help\\"</span> <span class=\\"token keyword\\">for</span> <span class=\\"token function\\">more</span> information about a command.\\n</code></pre></div>"}');export{v as comp,u as data};
