import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,c as e,d as i,e as h,b as n,o as l}from"./app-w09VT_EG.js";const k={},r=i("h2",{id:"generating-dockerfile",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#generating-dockerfile"},[i("span",null,"Generating Dockerfile")])],-1),p={class:"hint-container info"},d=i("p",{class:"hint-container-title"},"Video tutorial",-1),o=n(`<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -l</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yuansu.china.work@gmail.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 9104</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mms</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rpc</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -z</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Asia/Shanghai</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="introduction-to-docker-parameters" tabindex="-1"><a class="header-anchor" href="#introduction-to-docker-parameters"><span>Introduction to <code>docker</code> Parameters</span></a></h3><table><thead><tr><th>Parameter</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>service_name</td><td>Yes</td><td></td><td>The service name of the project, such as <code>core</code></td></tr><tr><td>service_type</td><td>No</td><td><code>rpc</code></td><td>The service type, such as <code>rpc</code> or <code>api</code></td></tr><tr><td>author</td><td>No</td><td><code>example@example.com</code></td><td>The author information</td></tr><tr><td>base</td><td>No</td><td><code>alpine:latest</code></td><td>The base image to run the project</td></tr><tr><td>branch</td><td>No</td><td></td><td>The branch of the remote repository, it must be used with <code>--remote</code></td></tr><tr><td>china</td><td>No</td><td></td><td>If your server is in China, set this to <code>true</code></td></tr><tr><td>home</td><td>No</td><td></td><td>The goctl home path of the template, <code>--home</code> and <code>--remote</code> cannot be set at the same time, if they are, <code>--remote</code> has higher priority</td></tr><tr><td>image</td><td>No</td><td><code>golang:1.20.3-alpine3.17</code></td><td>The image for building the project</td></tr><tr><td>port</td><td>No</td><td></td><td>The port to expose, default none</td></tr><tr><td>remote</td><td>No</td><td></td><td>The remote git repository of the template, <code>--home</code> and <code>--remote</code> cannot be set at the same time, if they are, <code>--remote</code> has higher priority. The git repository directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure</td></tr><tr><td>tz</td><td>No</td><td></td><td>The timezone of the container, such as <code>Asia/Shanghai</code></td></tr><tr><td>local_build</td><td>No</td><td>false</td><td>Whether to build the project locally, without using an intermediate image</td></tr></tbody></table><blockquote><p>Run <code>goctls docker -h</code> to see more:</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Generate</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Dockerfile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Usage:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [flags]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Flags:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -u,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --author</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">         The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> author</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> information</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;example@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -a,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --base</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">           The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> base</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> image</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> project</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;alpine:latest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -b,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --branch</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">         The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> repo,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> it</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> does</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> work</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --remote</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -c,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --china</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                 If</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> China,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                  help</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -m,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --home</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">           The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> goctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> home</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> path</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> template,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --home</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> and</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cannot</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> same</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> time,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> if</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> they</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> are,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> higher</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> priority</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -i,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --image</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> image</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> building</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> project</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;golang:1.20.5-alpine3.17&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -l,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --local_build</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">           Whether</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> project</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> locally</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> without</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> using</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> intermediate</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> images</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -p,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --port</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">              The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> port</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> expose,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> none</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -r,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">         The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> repo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> template,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --home</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> and</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cannot</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> same</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> time,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> if</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> they</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> are,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> higher</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> priority</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">                              The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> repo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> directory</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> must</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> consistent</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://github.com/zeromicro/go-zero-template</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> directory</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> structure</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -s,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --service_name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -t,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --service_type</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> type,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> such</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rpc,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> api</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;rpc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -z,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --tz</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">             The</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> timezone</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> container,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> such</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Asia/Shanghai</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables"><span>Environment variables</span></a></h2><table><thead><tr><th>Environment Variables</th><th>Introduction</th></tr></thead><tbody><tr><td>DOCKER_USERNAME</td><td>docker repository username</td></tr><tr><td>DOCKER_PASSWORD</td><td>docker repository password</td></tr><tr><td>REPO</td><td>docker repository address， official hub: docker.io</td></tr></tbody></table>`,7);function g(c,y){const s=t("BiliBili");return l(),e("div",null,[r,i("div",p,[d,h(s,{bvid:"BV1h34y137gL"})]),o])}const m=a(k,[["render",g],["__file","4-docker.html.vue"]]),u=JSON.parse('{"path":"/guide/quick-start/extra/4-docker.html","title":"Dockerfile","lang":"en-US","frontmatter":{"order":4,"title":"Dockerfile","head":[["meta",{"name":"keywords","content":"docker, dockerfile, code generation, simple admin"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/quick-start/extra/4-docker.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/quick-start/extra/4-docker.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Dockerfile"}],["meta",{"property":"og:description","content":"Generating Dockerfile Video tutorial Introduction to docker Parameters Run goctls docker -h to see more: Environment variables"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dockerfile\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Generating Dockerfile Video tutorial Introduction to docker Parameters Run goctls docker -h to see more: Environment variables"},"headers":[{"level":2,"title":"Generating Dockerfile","slug":"generating-dockerfile","link":"#generating-dockerfile","children":[{"level":3,"title":"Introduction to docker Parameters","slug":"introduction-to-docker-parameters","link":"#introduction-to-docker-parameters","children":[]}]},{"level":2,"title":"Environment variables","slug":"environment-variables","link":"#environment-variables","children":[]}],"git":{"createdTime":1683693617000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":5},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.47,"words":441},"filePathRelative":"guide/quick-start/extra/4-docker.md","localizedDate":"May 10, 2023","autoDesc":true,"excerpt":"<h2>Generating Dockerfile</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Video tutorial</p>\\n</div>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">goctls</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> docker</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -l</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -u</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> yuansu.china.work@gmail.com</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -c</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -p</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 9104</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -s</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> mms</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -t</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> rpc</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -z</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> Asia/Shanghai</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{m as comp,u as data};
