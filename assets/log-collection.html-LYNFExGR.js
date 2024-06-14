import{_ as i}from"./kibana-B_dHhmbP.js";import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as e,b as l}from"./app-RR1yrB0I.js";const n={},t=l(`<blockquote><p>本项目主要使用 EFK 进行日志收集</p></blockquote><ul><li>Elasticsearch</li><li>Filebeat</li><li>Kibana</li></ul><h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2><ul><li><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html" target="_blank" rel="noopener noreferrer">Elasticsearch</a></li><li><a href="https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html" target="_blank" rel="noopener noreferrer">Filebeat</a></li><li><a href="https://www.elastic.co/guide/en/kibana/current/docker.html" target="_blank" rel="noopener noreferrer">Kibana</a></li></ul><h2 id="测试环境快速安装方法" tabindex="-1"><a class="header-anchor" href="#测试环境快速安装方法"><span>测试环境快速安装方法</span></a></h2><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># es</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> es01</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --net</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> elastic</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 9200:9200</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 9300:9300</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ES_JAVA_OPTS=&quot;-Xms1g -Xmx1g&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 3g</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker.elastic.co/elasticsearch/elasticsearch:8.4.3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># kibana</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> kib-01</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --net</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> elastic</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 5601:5601</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker.elastic.co/kibana/kibana:8.4.3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filebeat" tabindex="-1"><a class="header-anchor" href="#filebeat"><span>Filebeat</span></a></h3><p>修改 filebeat-deploy.yaml， 位置 simple-admin-core/deploy/k8s/log-collection/filebeat/</p><blockquote><p>可以添加 log 来源位置，默认有 core</p></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">log</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      paths</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/home/data/logs/core/*/*.log</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          env</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ELASTICSEARCH_HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">              value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;192.168.50.216&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # ES的地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ELASTICSEARCH_PORT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">              value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;9200&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # ES的端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ELASTICSEARCH_USERNAME</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">              value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">elastic</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # ES 的用户名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ELASTICSEARCH_PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">              value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">UQ==CXXjw47bK_I13*f1</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 密码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ELASTICSEARCH_CA_FINGERPRINT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">              value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">8d6aed6bba745f2f0aaa46f628e3124c82ae6727c1f5e207e3d821ffeefb5e5e</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 信任的CA指纹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ELASTIC_CLOUD_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">              value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 云 ID， 可选</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ELASTIC_CLOUD_AUTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">              value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 云 Token， 可选</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="然后使用脚本部署-filebeat" tabindex="-1"><a class="header-anchor" href="#然后使用脚本部署-filebeat"><span>然后使用脚本部署 filebeat</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 进入 simple-admin-core/deploy/k8s/log-collection/filebeat</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apply</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> filebeat-deploy.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示"><span>效果展示</span></a></h3><figure><img src="`+i+'" alt="Pic" tabindex="0" loading="lazy"><figcaption>Pic</figcaption></figure>',17),h=[t];function k(r,p){return e(),a("div",null,h)}const g=s(n,[["render",k],["__file","log-collection.html.vue"]]),y=JSON.parse('{"path":"/zh/guide/feature/log-collection.html","title":"日志收集","lang":"zh-CN","frontmatter":{"order":8,"title":"日志收集","head":[["meta",{"name":"keywords","content":"日志收集, log collecting, efk, elasticsearch"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/log-collection.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/log-collection.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"日志收集"}],["meta",{"property":"og:description","content":"本项目主要使用 EFK 进行日志收集 Elasticsearch Filebeat Kibana 安装方法 Elasticsearch Filebeat Kibana 测试环境快速安装方法 Docker Filebeat 修改 filebeat-deploy.yaml， 位置 simple-admin-core/deploy/k8s/log-colle..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/kibana.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"日志收集\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/kibana.png\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"本项目主要使用 EFK 进行日志收集 Elasticsearch Filebeat Kibana 安装方法 Elasticsearch Filebeat Kibana 测试环境快速安装方法 Docker Filebeat 修改 filebeat-deploy.yaml， 位置 simple-admin-core/deploy/k8s/log-colle..."},"headers":[{"level":2,"title":"安装方法","slug":"安装方法","link":"#安装方法","children":[]},{"level":2,"title":"测试环境快速安装方法","slug":"测试环境快速安装方法","link":"#测试环境快速安装方法","children":[{"level":3,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":3,"title":"Filebeat","slug":"filebeat","link":"#filebeat","children":[]},{"level":3,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]},{"level":3,"title":"然后使用脚本部署 filebeat","slug":"然后使用脚本部署-filebeat","link":"#然后使用脚本部署-filebeat","children":[]},{"level":3,"title":"效果展示","slug":"效果展示","link":"#效果展示","children":[]}]}],"git":{"createdTime":1671464359000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":3},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"zh/guide/feature/log-collection.md","localizedDate":"2022年12月19日","autoDesc":true,"excerpt":"<blockquote>\\n<p>本项目主要使用 EFK 进行日志收集</p>\\n</blockquote>\\n<ul>\\n<li>Elasticsearch</li>\\n<li>Filebeat</li>\\n<li>Kibana</li>\\n</ul>\\n<h2>安装方法</h2>\\n<ul>\\n<li><a href=\\"https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Elasticsearch</a></li>\\n<li><a href=\\"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Filebeat</a></li>\\n<li><a href=\\"https://www.elastic.co/guide/en/kibana/current/docker.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Kibana</a></li>\\n</ul>"}');export{g as comp,y as data};