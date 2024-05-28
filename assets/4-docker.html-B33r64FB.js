import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,c as i,d as s,e as n,b as r,o as l}from"./app-DbrLFopa.js";const o={},d=s("h2",{id:"dockerfile-生成",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#dockerfile-生成"},[s("span",null,"Dockerfile 生成")])],-1),p={class:"hint-container info"},c=s("p",{class:"hint-container-title"},"视频教程",-1),k=r(`<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> docker</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -l</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -u</span><span style="color:#032F62;--shiki-dark:#98C379;"> yuansu.china.work@gmail.com</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -c</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 9104</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -s</span><span style="color:#032F62;--shiki-dark:#98C379;"> mms</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="color:#032F62;--shiki-dark:#98C379;"> rpc</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -z</span><span style="color:#032F62;--shiki-dark:#98C379;"> Asia/Shanghai</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker-参数介绍" tabindex="-1"><a class="header-anchor" href="#docker-参数介绍"><span><code>docker</code> 参数介绍</span></a></h3><table><thead><tr><th>参数名称</th><th>必须</th><th>默认值</th><th>介绍</th></tr></thead><tbody><tr><td>service_name</td><td>是</td><td></td><td>项目的服务名称, 如 core</td></tr><tr><td>service_type</td><td>否</td><td>rpc</td><td>服务类型，如 rpc，api</td></tr><tr><td>auther</td><td>否</td><td>example@example.com</td><td>作者信息</td></tr><tr><td>base</td><td>否</td><td>alpine:latest</td><td>运行项目的基础镜像</td></tr><tr><td>branch</td><td>否</td><td></td><td>远程仓库的分支，需要与 --remote 一起使用</td></tr><tr><td>china</td><td>否</td><td></td><td>如果你的服务器在中国，请设置为 true</td></tr><tr><td>home</td><td>否</td><td></td><td>模板的 goctl home 路径，不能与 --remote 同时设置，如果同时设置，则以 --remote 为准</td></tr><tr><td>image</td><td>否</td><td>golang:1.20.3-alpine3.17</td><td>用于构建项目的镜像</td></tr><tr><td>port</td><td>否</td><td></td><td>暴露的端口号，默认为不暴露</td></tr><tr><td>remote</td><td>否</td><td></td><td>模板的远程 git 仓库，不能与 --home 同时设置，如果同时设置，则以 --remote 为准 git 仓库目录结构必须与 https://github.com/zeromicro/go-zero-template 一致</td></tr><tr><td>tz</td><td>否</td><td></td><td>容器的时区，如 Asia/Shanghai</td></tr><tr><td>local_build</td><td>否</td><td>false</td><td>是否在本地构建项目，不使用中间镜像</td></tr></tbody></table><blockquote><p>运行 <code>goctls docker -h</code> 查看更多</p></blockquote><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">生成</span><span style="color:#032F62;--shiki-dark:#98C379;"> Dockerfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Usage:</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> docker</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [flags]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Flags:</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -u,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --author</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">         作者信息</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;example@example.com&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -a,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --base</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">           运行项目的基础镜像</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;alpine:latest&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -b,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --branch</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">         远程</span><span style="color:#032F62;--shiki-dark:#98C379;"> repo</span><span style="color:#032F62;--shiki-dark:#98C379;"> 的分支，与</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 一起使用</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -c,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --china</span><span style="color:#032F62;--shiki-dark:#98C379;">                 如果您的服务器在中国，请设置为</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -h,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --help</span><span style="color:#032F62;--shiki-dark:#98C379;">                  help</span><span style="color:#032F62;--shiki-dark:#98C379;"> for</span><span style="color:#032F62;--shiki-dark:#98C379;"> docker</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -m,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --home</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">           模板的</span><span style="color:#032F62;--shiki-dark:#98C379;"> goctl</span><span style="color:#032F62;--shiki-dark:#98C379;"> 路径，--home</span><span style="color:#032F62;--shiki-dark:#98C379;"> 和</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 不能同时设置，如果设置了，--remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 优先级更高</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -i,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --image</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">          构建项目的镜像</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;golang:1.20.5-alpine3.17&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -l,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --local_build</span><span style="color:#032F62;--shiki-dark:#98C379;">           是否在本地构建项目，不使用中间镜像</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -p,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --port</span><span style="color:#032F62;--shiki-dark:#98C379;"> int</span><span style="color:#032F62;--shiki-dark:#98C379;">              暴露的端口，默认为无</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -r,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">         模板的远程</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> repo，--home</span><span style="color:#032F62;--shiki-dark:#98C379;"> 和</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 不能同时设置，如果设置了，--remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 优先级更高</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">                              Git</span><span style="color:#032F62;--shiki-dark:#98C379;"> repo</span><span style="color:#032F62;--shiki-dark:#98C379;"> 的目录结构必须与</span><span style="color:#032F62;--shiki-dark:#98C379;"> https://github.com/zeromicro/go-zero-template</span><span style="color:#032F62;--shiki-dark:#98C379;"> 相一致</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -s,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --service_name</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">   项目的服务名称</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -t,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --service_type</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">   服务类型，例如</span><span style="color:#032F62;--shiki-dark:#98C379;"> rpc、api</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;rpc&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -z,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --tz</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">             容器的时区，例如</span><span style="color:#032F62;--shiki-dark:#98C379;"> Asia/Shanghai</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h2><table><thead><tr><th>环境变量</th><th>介绍</th></tr></thead><tbody><tr><td>DOCKER_USERNAME</td><td>docker 仓库用户名</td></tr><tr><td>DOCKER_PASSWORD</td><td>docker 仓库密码</td></tr><tr><td>REPO</td><td>docker 仓库地址， 官网为 docker.io</td></tr></tbody></table>`,7);function h(y,C){const a=t("BiliBili");return l(),i("div",null,[d,s("div",p,[c,n(a,{bvid:"BV1h34y137gL"})]),k])}const u=e(o,[["render",h],["__file","4-docker.html.vue"]]),g=JSON.parse('{"path":"/zh/guide/quick-start/extra/4-docker.html","title":"Dockerfile","lang":"zh-CN","frontmatter":{"order":4,"title":"Dockerfile","head":[["meta",{"name":"keywords","content":"docker, dockerfile, 代码生成, code generation, simple admin"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/quick-start/extra/4-docker.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/quick-start/extra/4-docker.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Dockerfile"}],["meta",{"property":"og:description","content":"Dockerfile 生成 视频教程 docker 参数介绍 运行 goctls docker -h 查看更多 环境变量"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dockerfile\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Dockerfile 生成 视频教程 docker 参数介绍 运行 goctls docker -h 查看更多 环境变量"},"headers":[{"level":2,"title":"Dockerfile 生成","slug":"dockerfile-生成","link":"#dockerfile-生成","children":[{"level":3,"title":"docker 参数介绍","slug":"docker-参数介绍","link":"#docker-参数介绍","children":[]}]},{"level":2,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[]}],"git":{"createdTime":1683693617000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":4},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.77,"words":532},"filePathRelative":"zh/guide/quick-start/extra/4-docker.md","localizedDate":"2023年5月10日","autoDesc":true,"excerpt":"<h2>Dockerfile 生成</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">视频教程</p>\\n</div>\\n<div class=\\"language-shell line-numbers-mode\\" data-ext=\\"shell\\" data-title=\\"shell\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\" style=\\"background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#6F42C1;--shiki-dark:#61AFEF\\">goctls</span><span style=\\"color:#032F62;--shiki-dark:#98C379\\"> docker</span><span style=\\"color:#005CC5;--shiki-dark:#D19A66\\"> -l</span><span style=\\"color:#005CC5;--shiki-dark:#D19A66\\"> -u</span><span style=\\"color:#032F62;--shiki-dark:#98C379\\"> yuansu.china.work@gmail.com</span><span style=\\"color:#005CC5;--shiki-dark:#D19A66\\"> -c</span><span style=\\"color:#005CC5;--shiki-dark:#D19A66\\"> -p</span><span style=\\"color:#005CC5;--shiki-dark:#D19A66\\"> 9104</span><span style=\\"color:#005CC5;--shiki-dark:#D19A66\\"> -s</span><span style=\\"color:#032F62;--shiki-dark:#98C379\\"> mms</span><span style=\\"color:#005CC5;--shiki-dark:#D19A66\\"> -t</span><span style=\\"color:#032F62;--shiki-dark:#98C379\\"> rpc</span><span style=\\"color:#005CC5;--shiki-dark:#D19A66\\"> -z</span><span style=\\"color:#032F62;--shiki-dark:#98C379\\"> Asia/Shanghai</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{u as comp,g as data};