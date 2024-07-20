import{_ as e}from"./jaeger_ui-CbcA4Clh.js";import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,b as t}from"./app-CbMueymR.js";const n={},l=t(`<h2 id="go-zero-supports-jaeger-for-link-tracking-by-default-just-declare-it-in-the-etc-configuration-file" tabindex="-1"><a class="header-anchor" href="#go-zero-supports-jaeger-for-link-tracking-by-default-just-declare-it-in-the-etc-configuration-file"><span>Go Zero supports Jaeger for link tracking by default, just declare it in the etc configuration file</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Telemetry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">core-api</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # Service name</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Endpoint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">localhost:4317</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Sampler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Batcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">otlpgrpc</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # use grpc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jaeger-local-environment-deployment" tabindex="-1"><a class="header-anchor" href="#jaeger-local-environment-deployment"><span>Jaeger local environment deployment</span></a></h2><p>Open \`simple-admin-core/deploy/docker-compose/jaeger folder, execute</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The local docker was deployed and you can visit <code>http://localhost:16686/</code> locally.</p><blockquote><p>To use ES, please cancel the ES comment in <code>docker-compose.yaml</code>, Jaeger supports multiple backends at the same time, see [Backend Storage](https://www.jaegertracing.io/docs/1.18/deployment /#storage-backends)</p></blockquote><h2 id="preview" tabindex="-1"><a class="header-anchor" href="#preview"><span>Preview</span></a></h2><figure><img src="`+e+'" alt="Jaeger UI" tabindex="0" loading="lazy"><figcaption>Jaeger UI</figcaption></figure>',9),r=[l];function o(h,p){return s(),a("div",null,r)}const g=i(n,[["render",o],["__file","tracing_analysis.html.vue"]]),m=JSON.parse('{"path":"/guide/feature/tracing_analysis.html","title":"Tracing Analysis","lang":"en-US","frontmatter":{"order":14,"title":"Tracing Analysis","head":[["meta",{"name":"keywords","content":"tracing, go zero, jaeger, debug, local deployment"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/feature/tracing_analysis.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/feature/tracing_analysis.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Tracing Analysis"}],["meta",{"property":"og:description","content":"Go Zero supports Jaeger for link tracking by default, just declare it in the etc configuration file Jaeger local environment deployment Open `simple-admin-core/deploy/docker-com..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/jaeger_ui.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tracing Analysis\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/jaeger_ui.png\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Go Zero supports Jaeger for link tracking by default, just declare it in the etc configuration file Jaeger local environment deployment Open `simple-admin-core/deploy/docker-com..."},"headers":[{"level":2,"title":"Go Zero supports Jaeger for link tracking by default, just declare it in the etc configuration file","slug":"go-zero-supports-jaeger-for-link-tracking-by-default-just-declare-it-in-the-etc-configuration-file","link":"#go-zero-supports-jaeger-for-link-tracking-by-default-just-declare-it-in-the-etc-configuration-file","children":[]},{"level":2,"title":"Jaeger local environment deployment","slug":"jaeger-local-environment-deployment","link":"#jaeger-local-environment-deployment","children":[]},{"level":2,"title":"Preview","slug":"preview","link":"#preview","children":[]}],"git":{"createdTime":1676429513000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":3},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":1},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":0.37,"words":110},"filePathRelative":"guide/feature/tracing_analysis.md","localizedDate":"February 15, 2023","autoDesc":true,"excerpt":"<h2>Go Zero supports Jaeger for link tracking by default, just declare it in the etc configuration file</h2>\\n<div class=\\"language-yaml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"yaml\\" data-title=\\"yaml\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">Telemetry</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">core-api</span><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"> # Service name</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Endpoint</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">localhost:4317</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Sampler</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1.0</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  Batcher</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">otlpgrpc</span><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"> # use grpc</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{g as comp,m as data};
