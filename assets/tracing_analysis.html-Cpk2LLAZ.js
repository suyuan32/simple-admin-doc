import{_ as e}from"./jaeger_ui-CbcA4Clh.js";import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as n}from"./app-CYT6JKv1.js";const l={};function r(h,i){return n(),a("div",null,i[0]||(i[0]=[t(`<h2 id="go-zero-默认支持-jaeger-进行链路追踪-只需在-etc-的配置文件中声明即可" tabindex="-1"><a class="header-anchor" href="#go-zero-默认支持-jaeger-进行链路追踪-只需在-etc-的配置文件中声明即可"><span>Go Zero 默认支持 Jaeger 进行链路追踪， 只需在 etc 的配置文件中声明即可</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Telemetry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">core-api</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 服务名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Endpoint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">localhost:4317</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Sampler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Batcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">otlpgrpc</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 使用 grpc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jaeger-本地环境部署" tabindex="-1"><a class="header-anchor" href="#jaeger-本地环境部署"><span>Jaeger 本地环境部署</span></a></h2><p>打开 \`simple-admin-core/deploy/docker-compose/jaeger 文件夹, 执行</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>即可配置本地环境，本地访问 <code>http://localhost:16686/</code> 即可</p><blockquote><p>若要使用 ES, 请取消 <code>docker-compose.yaml</code> 中的 ES 注释， Jaeger 同时支持多种后端，详情查看 <a href="https://www.jaegertracing.io/docs/1.18/deployment/#storage-backends" target="_blank" rel="noopener noreferrer">Backend Storage</a></p></blockquote><h2 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示"><span>效果展示</span></a></h2><figure><img src="`+e+'" alt="Jaeger UI" tabindex="0" loading="lazy"><figcaption>Jaeger UI</figcaption></figure>',9)]))}const c=s(l,[["render",r],["__file","tracing_analysis.html.vue"]]),k=JSON.parse('{"path":"/zh/guide/feature/tracing_analysis.html","title":"链路追踪","lang":"zh-CN","frontmatter":{"order":14,"title":"链路追踪","head":[["meta",{"name":"keywords","content":"tracing, go zero, jaeger, debug, 链路追踪, 本地部署"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/feature/tracing_analysis.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/feature/tracing_analysis.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"链路追踪"}],["meta",{"property":"og:description","content":"Go Zero 默认支持 Jaeger 进行链路追踪， 只需在 etc 的配置文件中声明即可 Jaeger 本地环境部署 打开 `simple-admin-core/deploy/docker-compose/jaeger 文件夹, 执行 即可配置本地环境，本地访问 http://localhost:16686/ 即可 若要使用 ES, 请取消 doc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/jaeger_ui.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"链路追踪\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/jaeger_ui.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Go Zero 默认支持 Jaeger 进行链路追踪， 只需在 etc 的配置文件中声明即可 Jaeger 本地环境部署 打开 `simple-admin-core/deploy/docker-compose/jaeger 文件夹, 执行 即可配置本地环境，本地访问 http://localhost:16686/ 即可 若要使用 ES, 请取消 doc...","gitInclude":[]},"headers":[{"level":2,"title":"Go Zero 默认支持 Jaeger 进行链路追踪， 只需在 etc 的配置文件中声明即可","slug":"go-zero-默认支持-jaeger-进行链路追踪-只需在-etc-的配置文件中声明即可","link":"#go-zero-默认支持-jaeger-进行链路追踪-只需在-etc-的配置文件中声明即可","children":[]},{"level":2,"title":"Jaeger 本地环境部署","slug":"jaeger-本地环境部署","link":"#jaeger-本地环境部署","children":[]},{"level":2,"title":"效果展示","slug":"效果展示","link":"#效果展示","children":[]}],"readingTime":{"minutes":0.51,"words":152},"filePathRelative":"zh/guide/feature/tracing_analysis.md","autoDesc":true,"excerpt":"<h2>Go Zero 默认支持 Jaeger 进行链路追踪， 只需在 etc 的配置文件中声明即可</h2>\\n<div class=\\"language-yaml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"yaml\\" data-title=\\"yaml\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">Telemetry</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">core-api</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> # 服务名称</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Endpoint</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">localhost:4317</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Sampler</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1.0</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Batcher</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">otlpgrpc</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> # 使用 grpc</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,k as data};
