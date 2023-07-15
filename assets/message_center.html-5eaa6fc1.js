import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-9b949cad.js";const t={},l=e(`<h2 id="message-center" tabindex="-1"><a class="header-anchor" href="#message-center" aria-hidden="true">#</a> Message Center</h2><p>Responsible for email sending, SMS sending, announcements, and internal IM.</p><h3 id="download-code" tabindex="-1"><a class="header-anchor" href="#download-code" aria-hidden="true">#</a> Download Code</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-message-center.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="configuration-file" tabindex="-1"><a class="header-anchor" href="#configuration-file" aria-hidden="true">#</a> Configuration File</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> mcms.rpc
<span class="token key atrule">ListenOn</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9106</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> <span class="token comment"># set your username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token comment"># set your password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> mcmsRpcLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/data/logs/mcms/rpc
  <span class="token key atrule">Encoding</span><span class="token punctuation">:</span> json
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4006</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics

<span class="token key atrule">EmailConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">AuthType</span><span class="token punctuation">:</span> plain <span class="token comment"># support plain, CRAMMD5</span>
  <span class="token key atrule">EmailAddr</span><span class="token punctuation">:</span> xxx@xxx.com <span class="token comment"># the email address to send from</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> xxx <span class="token comment"># password</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">25</span> <span class="token comment"># port, default is 25</span>
  <span class="token key atrule">HostName</span><span class="token punctuation">:</span> smtp.xxxx.com <span class="token comment"># server address</span>
  <span class="token key atrule">TLS</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># whether to enable TLS</span>

<span class="token key atrule">SmsConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">SecretId</span><span class="token punctuation">:</span> xxxx
  <span class="token key atrule">SecretKey</span><span class="token punctuation">:</span> xxx
  <span class="token key atrule">Provider</span><span class="token punctuation">:</span> tencent <span class="token comment"># provider, currently supports Tencent</span>
  <span class="token key atrule">Region</span><span class="token punctuation">:</span> ap<span class="token punctuation">-</span>nanjing <span class="token comment"># server region to send the message from</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><blockquote><p>QQ Email</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">EmailConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">AuthType</span><span class="token punctuation">:</span> plain
  <span class="token key atrule">EmailAddr</span><span class="token punctuation">:</span> xx@qq.com
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> xxx <span class="token comment"># note it&#39;s the authorization code</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">465</span>
  <span class="token key atrule">HostName</span><span class="token punctuation">:</span> smtp.qq.com
  <span class="token key atrule">TLS</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Tencent Cloud SMS</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">SmsConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">SecretId</span><span class="token punctuation">:</span> xxx
  <span class="token key atrule">SecretKey</span><span class="token punctuation">:</span> xxx
  <span class="token key atrule">Provider</span><span class="token punctuation">:</span> tencent
  <span class="token key atrule">Region</span><span class="token punctuation">:</span> ap<span class="token punctuation">-</span>nanjing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p=[l];function i(c,o){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","message_center.html.vue"]]);export{d as default};
