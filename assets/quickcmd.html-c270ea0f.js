import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as o,a as n,b as s,d as a,w as d,e as r}from"./app-cf2c5f9b.js";const p={},u=n("h1",{id:"快捷命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快捷命令","aria-hidden":"true"},"#"),s(" 快捷命令")],-1),m=n("p",null,"我们提供了许多快捷命令在 makefile 中， 只需在根目录执行即可",-1),v={class:"hint-container warning"},k=n("p",{class:"hint-container-title"},"注意",-1),h=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译 docker image, 需要设置环境变量 DOCKER_USERNAME VERSION</span>
<span class="token function">make</span> <span class="token function">docker</span>

<span class="token comment"># 发布 docker 需要设置环境变量 DOCKER_USERNAME VERSION DOCKER_PASSWORD</span>
<span class="token function">make</span> publish-docker

<span class="token comment"># 根据 api/desc 生成 api代码并更新 swagger</span>
<span class="token function">make</span> gen-api

<span class="token comment"># 根据 rpc/core.proto 生成代码</span>
<span class="token function">make</span> gen-rpc

<span class="token comment"># 生成 ent 代码</span>
<span class="token function">make</span> gen-ent

<span class="token comment"># 生成 swagger</span>
<span class="token function">make</span> gen-swagger

<span class="token comment"># 启动 swagger 服务</span>
<span class="token function">make</span> serve-swagger

<span class="token comment"># 本地查看 doc</span>
<span class="token function">make</span> doc

<span class="token comment"># 生成 CRUD 代码 ( 你需要设置model name 和 group name)</span>
<span class="token function">make</span> gen-rpc-ent-logic <span class="token assign-left variable">model</span><span class="token operator">=</span><span class="token punctuation">{</span>modelName<span class="token punctuation">}</span> <span class="token assign-left variable">group</span><span class="token operator">=</span><span class="token punctuation">{</span>groupName<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>你也可以通过执行 <code>make help</code> 获取所有命令</strong></p></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2>`,3),_=n("thead",null,[n("tr",null,[n("th",null,"环境变量"),n("th",null,"介绍")])],-1),b=n("tr",null,[n("td",null,"DOCKER_USERNAME"),n("td",null,"docker 仓库用户名")],-1),g=n("tr",null,[n("td",null,"DOCKER_PASSWORD"),n("td",null,"docker 仓库密码")],-1),f=n("td",null,"REPO",-1),E={href:"http://docker.io",target:"_blank",rel:"noopener noreferrer"},R=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"若要发布镜像需要 export 上述环境变量")],-1);function w(x,D){const i=e("RouterLink"),t=e("ExternalLinkIcon");return c(),o("div",null,[u,m,n("div",v,[k,n("p",null,[n("strong",null,[s("注意：需要系统支持 make 命令，建议 linux, Windows 用户请先配置环境 "),a(i,{to:"/zh/guide/FAQ.html#%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE-windows-%E7%8E%AF%E5%A2%83"},{default:d(()=>[s("Windows")]),_:1})])])]),h,n("table",null,[_,n("tbody",null,[b,g,n("tr",null,[f,n("td",null,[s("docker 仓库地址， 官网为 "),n("a",E,[s("docker.io"),a(t)])])])])]),R])}const O=l(p,[["render",w],["__file","quickcmd.html.vue"]]);export{O as default};
