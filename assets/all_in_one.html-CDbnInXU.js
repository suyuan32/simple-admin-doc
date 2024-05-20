import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,c as n,d as e,e as i,b as r,o as c}from"./app-SeIJRtVB.js";const s={},l={class:"hint-container info"},d=e("p",{class:"hint-container-title"},"Video tutorial",-1),p=r(`<h2 id="quick-start-with-docker-compose" tabindex="-1"><a class="header-anchor" href="#quick-start-with-docker-compose"><span>Quick start with docker-compose</span></a></h2><p>In <code>deploy/docker-compose/all_in_one</code> directory, <a href="https://github.com/suyuan32/simple-admin-core/tree/master/deploy/docker-compose/all_in_one" target="_blank" rel="noopener noreferrer">Github</a></p><p>There are mysql and postgres folders, choose a folder to open according to your needs.</p><h2 id="_2-steps" tabindex="-1"><a class="header-anchor" href="#_2-steps"><span>2 Steps</span></a></h2><h3 id="_1-run-docker-compose" tabindex="-1"><a class="header-anchor" href="#_1-run-docker-compose"><span>1. Run docker-compose</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-initialize-database" tabindex="-1"><a class="header-anchor" href="#_2-initialize-database"><span>2. Initialize database</span></a></h3><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>If a 503 error occurs, please restart the backend UI container separately.</p></div><p><a href="http://localhost/init" target="_blank" rel="noopener noreferrer">http://localhost/init</a></p><h3 id="_3-restart-api-container" tabindex="-1"><a class="header-anchor" href="#_3-restart-api-container"><span>3. Restart API container</span></a></h3><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>You should restart core-api container after initalization in order to refresh casbin cache. You do not need to restart service after v1.0.14.</p></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>In <code>deploy/docker-compose/all_in_one</code> folder, you can check the api and rpc configuration</p></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>To deploy your own service to docker, you only need to modify it to your own image</p></div>`,13);function h(m,u){const t=a("BiliBili");return c(),n("div",null,[e("div",l,[d,i(t,{bvid:"BV1do4y1g7VL"})]),p])}const y=o(s,[["render",h],["__file","all_in_one.html.vue"]]),g=JSON.parse('{"path":"/guide/basic-config/all_in_one.html","title":"Docker Deploy","lang":"en-US","frontmatter":{"order":1,"title":"Docker Deploy","head":[["meta",{"name":"keywords","content":"docker, all in one, one click, docker-compose"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/basic-config/all_in_one.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/basic-config/all_in_one.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Docker Deploy"}],["meta",{"property":"og:description","content":"Video tutorial Quick start with docker-compose In deploy/docker-compose/all_in_one directory, Github There are mysql and postgres folders, choose a folder to open according to y..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker Deploy\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Video tutorial Quick start with docker-compose In deploy/docker-compose/all_in_one directory, Github There are mysql and postgres folders, choose a folder to open according to y..."},"headers":[{"level":2,"title":"Quick start with docker-compose","slug":"quick-start-with-docker-compose","link":"#quick-start-with-docker-compose","children":[]},{"level":2,"title":"2 Steps","slug":"_2-steps","link":"#_2-steps","children":[{"level":3,"title":"1. Run docker-compose","slug":"_1-run-docker-compose","link":"#_1-run-docker-compose","children":[]},{"level":3,"title":"2. Initialize database","slug":"_2-initialize-database","link":"#_2-initialize-database","children":[]},{"level":3,"title":"3. Restart API container","slug":"_3-restart-api-container","link":"#_3-restart-api-container","children":[]}]}],"git":{"createdTime":1671464359000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":6},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":4}]},"readingTime":{"minutes":0.48,"words":143},"filePathRelative":"guide/basic-config/all_in_one.md","localizedDate":"December 19, 2022","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Video tutorial</p>\\n</div>\\n<h2>Quick start with docker-compose</h2>\\n<p>In <code>deploy/docker-compose/all_in_one</code> directory, <a href=\\"https://github.com/suyuan32/simple-admin-core/tree/master/deploy/docker-compose/all_in_one\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Github</a></p>"}');export{y as comp,g as data};
