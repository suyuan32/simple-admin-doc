import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c,a as n,b as e,d as a,w as r,e as d}from"./app-34a47d60.js";const u={},m=n("h1",{id:"quick-commands",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#quick-commands","aria-hidden":"true"},"#"),e(" Quick Commands")],-1),p={class:"hint-container warning"},v=n("p",{class:"hint-container-title"},"Note",-1),k=n("code",null,"Windows",-1),b=d(`<p>We offer several commands in makefile ， you can just run in bash:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># build docker image, require environment variables DOCKER_USERNAME</span>
<span class="token function">make</span> <span class="token function">docker</span>

<span class="token comment"># publish docker, require environment variables DOCKER_USERNAME DOCKER_PASSWORD</span>
<span class="token function">make</span> publish-docker

<span class="token comment"># generate api code with files in api/desc, and generate swagger file</span>
<span class="token function">make</span> gen-api

<span class="token comment"># generate code by rpc/core.proto</span>
<span class="token function">make</span> gen-rpc

<span class="token comment"># generate ent code</span>
<span class="token function">make</span> gen-ent

<span class="token comment"># generate swagger</span>
<span class="token function">make</span> gen-swagger

<span class="token comment"># run swagger service</span>
<span class="token function">make</span> serve-swagger

<span class="token comment"># visit doc locally</span>
<span class="token function">make</span> doc

<span class="token comment"># generate CRUD code ( You need to set model name and group name)</span>
<span class="token function">make</span> gen-rpc-ent-logic <span class="token assign-left variable">model</span><span class="token operator">=</span><span class="token punctuation">{</span>modelName<span class="token punctuation">}</span> <span class="token assign-left variable">group</span><span class="token operator">=</span><span class="token punctuation">{</span>groupName<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>You can get all commands by <code>make help</code>.</p></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment variables</h2>`,4),h=n("thead",null,[n("tr",null,[n("th",null,"Environment Variables"),n("th",null,"Introduction")])],-1),_=n("tr",null,[n("td",null,"DOCKER_USERNAME"),n("td",null,"docker repository username")],-1),g=n("tr",null,[n("td",null,"DOCKER_PASSWORD"),n("td",null,"docker repository password")],-1),f=n("td",null,"REPO",-1),w={href:"http://docker.io",target:"_blank",rel:"noopener noreferrer"},E=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"Note"),n("p",null,"If you want to publish docker images, you must set all environment variables above.")],-1);function R(N,x){const i=s("RouterLink"),t=s("ExternalLinkIcon");return l(),c("div",null,[m,n("div",p,[v,n("p",null,[n("strong",null,[e("Note: The system needs to support the make command, linux is recommended. "),k,e(" users need to set up environment "),a(i,{to:"/guide/FAQ.html#how-to-configure-the-windows-environment"},{default:r(()=>[e("Windows")]),_:1}),e(".")])])]),b,n("table",null,[h,n("tbody",null,[_,g,n("tr",null,[f,n("td",null,[e("docker repository address， official hub: "),n("a",w,[e("docker.io"),a(t)])])])])]),E])}const D=o(u,[["render",R],["__file","quickcmd.html.vue"]]);export{D as default};
