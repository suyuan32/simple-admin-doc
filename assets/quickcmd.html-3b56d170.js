import{_ as a,W as i,X as t,Y as n,Z as e,$ as l,a0 as o,F as c}from"./framework-2d290880.js";const r={},d=o(`<h1 id="quick-commands" tabindex="-1"><a class="header-anchor" href="#quick-commands" aria-hidden="true">#</a> Quick Commands</h1><div class="hint-container warning"><p class="hint-container-title">Note</p><p><strong>Note: The system needs to support the make command, linux is recommended</strong></p></div><p>We offer several commands in makefile ， you can just run in bash:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># build docker image, require environment variables DOCKER_USERNAME VERSION </span>
<span class="token function">make</span> <span class="token function">docker</span>  

<span class="token comment"># publish docker, require environment variables DOCKER_USERNAME VERSION DOCKER_PASSWORD</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>You can also learn the commands from the Makefile.</p></blockquote><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment variables</h2>`,6),u=n("thead",null,[n("tr",null,[n("th",null,"Environment Variables"),n("th",null,"Introduction")])],-1),m=n("tr",null,[n("td",null,"VERSION"),n("td",null,"Version number such as 0.0.1")],-1),p=n("tr",null,[n("td",null,"DOCKER_USERNAME"),n("td",null,"docker repository username")],-1),v=n("tr",null,[n("td",null,"DOCKER_PASSWORD"),n("td",null,"docker repository password")],-1),k=n("td",null,"REPO",-1),b={href:"http://docker.io",target:"_blank",rel:"noopener noreferrer"},h=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"Note"),n("p",null,"If you want to publish docker images, you must set all environment variables above.")],-1);function g(_,f){const s=c("ExternalLinkIcon");return i(),t("div",null,[d,n("table",null,[u,n("tbody",null,[m,p,v,n("tr",null,[k,n("td",null,[e("docker repository address， official hub: "),n("a",b,[e("docker.io"),l(s)])])])])]),h])}const N=a(r,[["render",g],["__file","quickcmd.html.vue"]]);export{N as default};
