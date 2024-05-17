import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-BLH1Rwid.js";const t={},l=e(`<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3><p>Simple Admin 的消息中心模块，主要负责邮件发送， sms 短信发送， 公告及内部 im 等，支持任意 smtp 邮箱服务，支持阿里云，腾讯云和合一短信。</p><h3 id="下载代码" tabindex="-1"><a class="header-anchor" href="#下载代码"><span>下载代码</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-message-center.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> mcms.rpc
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[l];function p(c,o){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","message_center.html.vue"]]),m=JSON.parse('{"path":"/zh/guide/official-comp/message_center.html","title":"消息中心模块","lang":"zh-CN","frontmatter":{"order":4,"title":"消息中心模块","description":"介绍 Simple Admin 的消息中心模块，主要负责邮件发送， sms 短信发送， 公告及内部 im 等，支持任意 smtp 邮箱服务，支持阿里云，腾讯云和合一短信。 下载代码 配置文件","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/official-comp/message_center.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/official-comp/message_center.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"消息中心模块"}],["meta",{"property":"og:description","content":"介绍 Simple Admin 的消息中心模块，主要负责邮件发送， sms 短信发送， 公告及内部 im 等，支持任意 smtp 邮箱服务，支持阿里云，腾讯云和合一短信。 下载代码 配置文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-09T09:26:29.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2023-10-09T09:26:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息中心模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-09T09:26:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"下载代码","slug":"下载代码","link":"#下载代码","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}],"git":{"createdTime":1688648907000,"updatedTime":1696843589000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"zh/guide/official-comp/message_center.md","localizedDate":"2023年7月6日","autoDesc":true,"excerpt":"<h3>介绍</h3>\\n<p>Simple Admin 的消息中心模块，主要负责邮件发送， sms 短信发送， 公告及内部 im 等，支持任意 smtp 邮箱服务，支持阿里云，腾讯云和合一短信。</p>\\n<h3>下载代码</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> clone https://github.com/suyuan32/simple-admin-message-center.git\\n</code></pre></div>"}');export{d as comp,m as data};