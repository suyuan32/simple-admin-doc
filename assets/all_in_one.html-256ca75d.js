import{_ as c,W as s,X as t,Y as e,Z as a,$ as n,a0 as r,D as i}from"./framework-2d2f73c4.js";const d={},l=e("h1",{id:"一键体验-docker-compose",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一键体验-docker-compose","aria-hidden":"true"},"#"),a(" 一键体验 docker-compose")],-1),h={href:"https://github.com/suyuan32/simple-admin-core/blob/master/deploy/docker-compose/all_in_one/docker-compose.yaml",target:"_blank",rel:"noopener noreferrer"},p=r(`<h2 id="只需三步" tabindex="-1"><a class="header-anchor" href="#只需三步" aria-hidden="true">#</a> 只需三步</h2><h3 id="启动-docker-compose" tabindex="-1"><a class="header-anchor" href="#启动-docker-compose" aria-hidden="true">#</a> 启动 docker-compose</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="初始化数据库" tabindex="-1"><a class="header-anchor" href="#初始化数据库" aria-hidden="true">#</a> 初始化数据库</h3>`,4),_={href:"http://localhost/init",target:"_blank",rel:"noopener noreferrer"},m=r('<h3 id="重启-core-api-core-rpc-容器" tabindex="-1"><a class="header-anchor" href="#重启-core-api-core-rpc-容器" aria-hidden="true">#</a> 重启 core-api, core-rpc 容器</h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>deploy/docker-compose/all_in_one</code>文件夹下有 api 和 rpc 的 etc 配置文件参考</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>部署自己的服务到 docker 只需修改为自己的镜像即可</p></div>',3);function u(k,f){const o=i("ExternalLinkIcon");return s(),t("div",null,[l,e("p",null,[a("在 deploy/docker-compose/all_in_one 文件夹下, "),e("a",h,[a("Github"),n(o)])]),p,e("p",null,[e("a",_,[a("http://localhost/init"),n(o)])]),m])}const v=c(d,[["render",u],["__file","all_in_one.html.vue"]]);export{v as default};
