import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as r,a,b as e,d as s,e as i}from"./app-7e6b45aa.js";const p={},c=i(`<h1 id="simple-admin-tools" tabindex="-1"><a class="header-anchor" href="#simple-admin-tools" aria-hidden="true">#</a> Simple admin tools</h1><p>Simple admin tools 是一个基于 go-zero 的 fork 项目。<br> 它提供了许多额外的功能，例如:</p><ul><li>go-swagger : 基于 go-swagger 而不是官方的@doc 注解</li><li>多国语言支持</li><li>优化错误信息处理,支持多语言错误</li><li>简单易用的校验器</li><li>支持代码生成，生成 API,RPC 和 web 端的 CRUD 代码</li><li>对 Simple Admin 的针对性优化</li></ul><p>由于本工具是 fork 项目，因此使用 goctls 会有些麻烦. 使用 fork 主要是为了同步官方最新代码。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>现已支持中文，只需要设置环境变量 SIMPLE_ADMIN_TOOLS_LANG=zh 即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">SIMPLE_ADMIN_TOOLS_LANG</span><span class="token operator">=</span>zh goctls <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="工具安装" tabindex="-1"><a class="header-anchor" href="#工具安装" aria-hidden="true">#</a> 工具安装</h2>`,6),d={href:"https://github.com/suyuan32/goctls",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/suyuan32/goctls@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="自动下载依赖" tabindex="-1"><a class="header-anchor" href="#自动下载依赖" aria-hidden="true">#</a> 自动下载依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls <span class="token function">env</span> check <span class="token parameter variable">-i</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">--verbose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会自动安装 protoc, swagger 等依赖.</p><h3 id="api-命令" tabindex="-1"><a class="header-anchor" href="#api-命令" aria-hidden="true">#</a> API 命令</h3><blockquote><p>命令和 goctl 一样，但是需要改成 goctls.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls api <span class="token parameter variable">-h</span>
NAME:
   goctl api - generate api related files

USAGE:
   goctl api <span class="token builtin class-name">command</span> <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

COMMANDS:
   new       fast create api <span class="token function">service</span>
   <span class="token function">format</span>    <span class="token function">format</span> api files
   validate  validate api <span class="token function">file</span>
   doc       generate doc files
   go        generate go files <span class="token keyword">for</span> provided api <span class="token keyword">in</span> yaml <span class="token function">file</span>
   <span class="token function">java</span>      generate <span class="token function">java</span> files <span class="token keyword">for</span> provided api <span class="token keyword">in</span> api <span class="token function">file</span>
   ts        generate ts files <span class="token keyword">for</span> provided api <span class="token keyword">in</span> api <span class="token function">file</span>
   dart      generate dart files <span class="token keyword">for</span> provided api <span class="token keyword">in</span> api <span class="token function">file</span>
   kt        generate kotlin code <span class="token keyword">for</span> provided api <span class="token function">file</span>
   plugin    custom <span class="token function">file</span> generator

OPTIONS:
   <span class="token parameter variable">-o</span> value        output a sample api <span class="token function">file</span>
   <span class="token parameter variable">--home</span> value    the goctl home path of the template, <span class="token parameter variable">--home</span> and <span class="token parameter variable">--remote</span> cannot be <span class="token builtin class-name">set</span> at the same time, <span class="token keyword">if</span> they are, <span class="token parameter variable">--remote</span> has higher priority
   <span class="token parameter variable">--remote</span> value  the remote <span class="token function">git</span> repo of the template, <span class="token parameter variable">--home</span> and <span class="token parameter variable">--remote</span> cannot be <span class="token builtin class-name">set</span> at the same time, <span class="token keyword">if</span> they are, <span class="token parameter variable">--remote</span> has higher priority
                   The <span class="token function">git</span> repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
   <span class="token parameter variable">--branch</span> value  the branch of the remote repo, it does work with <span class="token parameter variable">--remote</span>
   --help, <span class="token parameter variable">-h</span>      show <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>例子:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api go <span class="token parameter variable">-api</span> core.api <span class="token parameter variable">-dir</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据 core.api 里的定义生成 go 文件， -dir 设置输出位置.</p><h3 id="rpc-命令" tabindex="-1"><a class="header-anchor" href="#rpc-命令" aria-hidden="true">#</a> Rpc 命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctl rpc protoc <span class="token parameter variable">-h</span>
NAME:
   goctl rpc protoc - generate grpc code

USAGE:
   example: goctl rpc protoc xx.proto <span class="token parameter variable">--go_out</span><span class="token operator">=</span>./pb --go-grpc_out<span class="token operator">=</span>./pb <span class="token parameter variable">--zrpc_out</span><span class="token operator">=</span>.

DESCRIPTION:
   <span class="token keyword">for</span> details, see https://go-zero.dev/cn/goctl-rpc.html

OPTIONS:
   <span class="token parameter variable">--zrpc_out</span> value  the zrpc output directory
   <span class="token parameter variable">--style</span> value     the <span class="token function">file</span> naming format, see <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md<span class="token punctuation">]</span>
   <span class="token parameter variable">--home</span> value      the goctl home path of the template
   <span class="token parameter variable">--remote</span> value    the remote <span class="token function">git</span> repo of the template, <span class="token parameter variable">--home</span> and <span class="token parameter variable">--remote</span> cannot be <span class="token builtin class-name">set</span> at the same time, <span class="token keyword">if</span> they are, <span class="token parameter variable">--remote</span> has higher priority
                     The <span class="token function">git</span> repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
   <span class="token parameter variable">--branch</span> value    the branch of the remote repo, it does work with <span class="token parameter variable">--remote</span>
   --verbose, <span class="token parameter variable">-v</span>     <span class="token builtin class-name">enable</span> log output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>例子: 生成 proto 的模板</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctl rpc template <span class="token parameter variable">-o</span><span class="token operator">=</span>user.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>生成的文件</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>syntax <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

package user<span class="token punctuation">;</span>
option <span class="token assign-left variable">go_package</span><span class="token operator">=</span><span class="token string">&quot;. /user&quot;</span><span class="token punctuation">;</span>

message Request <span class="token punctuation">{</span>
  string <span class="token function">ping</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

message Response <span class="token punctuation">{</span>
  string pong <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">service</span> User <span class="token punctuation">{</span>
  rpc Ping<span class="token punctuation">(</span>Request<span class="token punctuation">)</span> returns<span class="token punctuation">(</span>Response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成 go 文件</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctl rpc protoc user.proto <span class="token parameter variable">--go_out</span><span class="token operator">=</span>. --go-grpc_out<span class="token operator">=</span>. <span class="token parameter variable">--zrpc_out</span><span class="token operator">=</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),v={class:"hint-container info"},m=a("p",{class:"hint-container-title"},"相关信息",-1),b={href:"https://go-zero.dev/docs/goctl/zrpc",target:"_blank",rel:"noopener noreferrer"},k=a("div",{class:"hint-container warning"},[a("p",{class:"hint-container-title"},"注意"),a("p",null,[e("我们提供了 "),a("code",null,"make gen-rpc"),e(" 和 "),a("code",null,"make gen-api"),e(" 用于快速生成官方代码")])],-1);function h(g,f){const n=l("ExternalLinkIcon");return o(),r("div",null,[c,a("p",null,[e("从 v1.5.14 开始，工具已移至新的仓库，便于快速迭代更新 "),a("a",d,[e("仓库地址"),s(n)]),e(", 目前已支持直接命令安装，不再需要 clone 代码")]),u,a("div",v,[m,a("p",null,[e("可以访问官网查看更多 "),a("a",b,[e("RPC command"),s(n)])])]),k])}const w=t(p,[["render",h],["__file","simple-admin-tools.html.vue"]]);export{w as default};
