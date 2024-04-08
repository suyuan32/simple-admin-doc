import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,e as n}from"./app-BByg4QdE.js";const s={},r=n(`<h2 id="dockerfile-生成" tabindex="-1"><a class="header-anchor" href="#dockerfile-生成"><span>Dockerfile 生成</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls <span class="token function">docker</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-u</span> yuansu.china.work@gmail.com <span class="token parameter variable">-c</span> <span class="token parameter variable">-p</span> <span class="token number">9104</span> <span class="token parameter variable">-s</span> mms <span class="token parameter variable">-t</span> rpc <span class="token parameter variable">-z</span> Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker-参数介绍" tabindex="-1"><a class="header-anchor" href="#docker-参数介绍"><span><code>docker</code> 参数介绍</span></a></h3><table><thead><tr><th>参数名称</th><th>必须</th><th>默认值</th><th>介绍</th></tr></thead><tbody><tr><td>service_name</td><td>是</td><td></td><td>项目的服务名称, 如 core</td></tr><tr><td>service_type</td><td>否</td><td>rpc</td><td>服务类型，如 rpc，api</td></tr><tr><td>auther</td><td>否</td><td>example@example.com</td><td>作者信息</td></tr><tr><td>base</td><td>否</td><td>alpine:latest</td><td>运行项目的基础镜像</td></tr><tr><td>branch</td><td>否</td><td></td><td>远程仓库的分支，需要与 --remote 一起使用</td></tr><tr><td>china</td><td>否</td><td></td><td>如果你的服务器在中国，请设置为 true</td></tr><tr><td>home</td><td>否</td><td></td><td>模板的 goctl home 路径，不能与 --remote 同时设置，如果同时设置，则以 --remote 为准</td></tr><tr><td>image</td><td>否</td><td>golang:1.20.3-alpine3.17</td><td>用于构建项目的镜像</td></tr><tr><td>port</td><td>否</td><td></td><td>暴露的端口号，默认为不暴露</td></tr><tr><td>remote</td><td>否</td><td></td><td>模板的远程 git 仓库，不能与 --home 同时设置，如果同时设置，则以 --remote 为准 git 仓库目录结构必须与 https://github.com/zeromicro/go-zero-template 一致</td></tr><tr><td>tz</td><td>否</td><td></td><td>容器的时区，如 Asia/Shanghai</td></tr><tr><td>local_build</td><td>否</td><td>false</td><td>是否在本地构建项目，不使用中间镜像</td></tr></tbody></table><blockquote><p>运行 <code>goctls docker -h</code> 查看更多</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
生成 Dockerfile

Usage:
  goctls <span class="token function">docker</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -u, <span class="token parameter variable">--author</span> string         作者信息 <span class="token punctuation">(</span>default <span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">)</span>
  -a, <span class="token parameter variable">--base</span> string           运行项目的基础镜像 <span class="token punctuation">(</span>default <span class="token string">&quot;alpine:latest&quot;</span><span class="token punctuation">)</span>
  -b, <span class="token parameter variable">--branch</span> string         远程 repo 的分支，与 <span class="token parameter variable">--remote</span> 一起使用
  -c, <span class="token parameter variable">--china</span>                 如果您的服务器在中国，请设置为 <span class="token boolean">true</span>
  -h, <span class="token parameter variable">--help</span>                  <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token function">docker</span>
  -m, <span class="token parameter variable">--home</span> string           模板的 goctl 路径，--home 和 <span class="token parameter variable">--remote</span> 不能同时设置，如果设置了，--remote 优先级更高
  -i, <span class="token parameter variable">--image</span> string          构建项目的镜像 <span class="token punctuation">(</span>default <span class="token string">&quot;golang:1.20.5-alpine3.17&quot;</span><span class="token punctuation">)</span>
  -l, <span class="token parameter variable">--local_build</span>           是否在本地构建项目，不使用中间镜像
  -p, <span class="token parameter variable">--port</span> int              暴露的端口，默认为无
  -r, <span class="token parameter variable">--remote</span> string         模板的远程 <span class="token function">git</span> repo，--home 和 <span class="token parameter variable">--remote</span> 不能同时设置，如果设置了，--remote 优先级更高
                              Git repo 的目录结构必须与 https://github.com/zeromicro/go-zero-template 相一致
  -s, <span class="token parameter variable">--service_name</span> string   项目的服务名称
  -t, <span class="token parameter variable">--service_type</span> string   服务类型，例如 rpc、api <span class="token punctuation">(</span>default <span class="token string">&quot;rpc&quot;</span><span class="token punctuation">)</span>
  -z, <span class="token parameter variable">--tz</span> string             容器的时区，例如 Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h2><table><thead><tr><th>环境变量</th><th>介绍</th></tr></thead><tbody><tr><td>DOCKER_USERNAME</td><td>docker 仓库用户名</td></tr><tr><td>DOCKER_PASSWORD</td><td>docker 仓库密码</td></tr><tr><td>REPO</td><td>docker 仓库地址， 官网为 docker.io</td></tr></tbody></table>`,8),l=[r];function d(i,o){return a(),t("div",null,l)}const m=e(s,[["render",d],["__file","4-docker.html.vue"]]),u=JSON.parse('{"path":"/zh/guide/quick-start/extra/4-docker.html","title":"Dockerfile","lang":"zh-CN","frontmatter":{"order":4,"title":"Dockerfile","description":"Dockerfile 生成 docker 参数介绍 运行 goctls docker -h 查看更多 环境变量","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/quick-start/extra/4-docker.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/quick-start/extra/4-docker.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Dockerfile"}],["meta",{"property":"og:description","content":"Dockerfile 生成 docker 参数介绍 运行 goctls docker -h 查看更多 环境变量"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-11T06:15:56.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2023-10-11T06:15:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dockerfile\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-11T06:15:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Dockerfile 生成","slug":"dockerfile-生成","link":"#dockerfile-生成","children":[{"level":3,"title":"docker 参数介绍","slug":"docker-参数介绍","link":"#docker-参数介绍","children":[]}]},{"level":2,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[]}],"git":{"createdTime":1683693617000,"updatedTime":1697004956000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":4}]},"readingTime":{"minutes":1.69,"words":508},"filePathRelative":"zh/guide/quick-start/extra/4-docker.md","localizedDate":"2023年5月10日","autoDesc":true,"excerpt":"<h2>Dockerfile 生成</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>goctls <span class=\\"token function\\">docker</span> <span class=\\"token parameter variable\\">-l</span> <span class=\\"token parameter variable\\">-u</span> yuansu.china.work@gmail.com <span class=\\"token parameter variable\\">-c</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token number\\">9104</span> <span class=\\"token parameter variable\\">-s</span> mms <span class=\\"token parameter variable\\">-t</span> rpc <span class=\\"token parameter variable\\">-z</span> Asia/Shanghai\\n</code></pre></div>"}');export{m as comp,u as data};