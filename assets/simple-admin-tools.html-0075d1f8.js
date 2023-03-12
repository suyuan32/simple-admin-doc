import{_ as o,W as t,X as l,Y as e,Z as n,$ as i,a0 as a,D as r}from"./framework-2d2f73c4.js";const c={},p=a(`<h1 id="simple-admin-tools" tabindex="-1"><a class="header-anchor" href="#simple-admin-tools" aria-hidden="true">#</a> Simple admin tools</h1><p>Simple admin tools is a tool fork from go-zero. It provides more addition features than origin project such as:</p><ul><li>go-swagger : it is different with origin which uses @doc comments</li><li>multi-language support</li><li>optimize error message</li><li>fully support validator and easy to use</li><li>code auto generation for API, RPC and web</li><li>error handling which support multi-languages</li><li>several plugins such as RocketMQ, GORM</li><li>so on</li></ul><blockquote><p>But it is a little complex to install the goctls and import the dependencies due to forking.<br> Let me show you how to build the code by yourself.</p></blockquote><blockquote><p>Build goctls</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-tools.git

<span class="token builtin class-name">cd</span> tools/goctl

go mod tidy

<span class="token comment"># output goctls in order not to conflict with goctl</span>
go build <span class="token parameter variable">-o</span> goctls goctl.go

<span class="token function">cp</span> ./goctls <span class="token variable">$GOPATH</span>/bin/goctls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d={class:"hint-container info"},u=e("p",{class:"hint-container-title"},"Easy Way",-1),m={href:"http://build.sh",target:"_blank",rel:"noopener noreferrer"},v=a(`<h2 id="auto-fix-all-dependencies-command" tabindex="-1"><a class="header-anchor" href="#auto-fix-all-dependencies-command" aria-hidden="true">#</a> Auto fix all dependencies command</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls <span class="token function">env</span> check <span class="token parameter variable">-i</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">--verbose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Run this command can auto install protoc, swagger and so on.</p><h2 id="api-command" tabindex="-1"><a class="header-anchor" href="#api-command" aria-hidden="true">#</a> API command</h2><blockquote><p>The command is the same as goctl, but you should use goctls instead.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls api <span class="token parameter variable">-h</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Example:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api go <span class="token parameter variable">-api</span> core.api <span class="token parameter variable">-dir</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This means generating go files by core.api&#39;s declaration in current directory. -dir set the output path.</p><h2 id="rpc-command" tabindex="-1"><a class="header-anchor" href="#rpc-command" aria-hidden="true">#</a> Rpc command</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctl rpc protoc <span class="token parameter variable">-h</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Example: <br> Generate proto template</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctl rpc template <span class="token parameter variable">-o</span><span class="token operator">=</span>user.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>syntax <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Generate go files</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctl rpc protoc user.proto <span class="token parameter variable">--go_out</span><span class="token operator">=</span>. --go-grpc_out<span class="token operator">=</span>. <span class="token parameter variable">--zrpc_out</span><span class="token operator">=</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),b={class:"hint-container info"},g=e("p",{class:"hint-container-title"},"Info",-1),h={href:"https://go-zero.dev/docs/goctl/zrpc",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="project-go-mod-setting" tabindex="-1"><a class="header-anchor" href="#project-go-mod-setting" aria-hidden="true">#</a> Project go.mod setting</h2><p>We know that if we want to import fork project we should use replace command.</p><div class="language-mod line-numbers-mode" data-ext="mod"><pre class="language-mod"><code>module github.com/suyuan32/simple-admin-core

go 1.19

require (
 github.com/casbin/casbin/v2 v2.52.1
 github.com/casbin/gorm-adapter/v3 v3.7.4
 github.com/go-playground/locales v0.14.0
 github.com/go-playground/validator/v10 v10.11.1
 github.com/golang-jwt/jwt/v4 v4.4.2
 github.com/google/uuid v1.3.0
 github.com/mojocn/base64Captcha v1.3.5
 github.com/pkg/errors v0.9.1
 github.com/stretchr/testify v1.8.0
 github.com/suyuan32/simple-admin-tools/plugins/registry/consul v0.0.0-20220923060146-bde681863b8d
 github.com/zeromicro/go-zero v1.4.1
 golang.org/x/crypto v0.0.0-20220722155217-630584e8d5aa
 google.golang.org/grpc v1.49.0
 google.golang.org/protobuf v1.28.1
 gorm.io/gorm v1.23.8
)

replace github.com/zeromicro/go-zero v1.4.1 =&gt; github.com/suyuan32/simple-admin-tools v0.0.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>In order to make it easier. You can use the command in goctls.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls migrate --zero-version v1.4.1 --tool-version v0.0.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>It can help you to add replace code but it cannot run multiple times because it will add multiple replace lines in the go.mod file. You can just edit go.mod file can modify the simple-admin-tools version manually and run <strong>go mod tidy</strong>.</p></blockquote><blockquote><p>Both API and RPC of the new version support directly setting the tool version for replacement when creating a new one</p></blockquote>`,7);function f(y,_){const s=r("ExternalLinkIcon");return t(),l("div",null,[p,e("div",d,[u,e("p",null,[n("You can just run "),e("strong",null,[n("sh "),e("a",m,[n("build.sh"),i(s)])]),n(" in goctl directory")])]),v,e("div",b,[g,e("p",null,[n("You can get "),e("a",h,[n("More Document"),i(s)]),n(" on go zero official website.")])]),k])}const x=o(c,[["render",f],["__file","simple-admin-tools.html.vue"]]);export{x as default};
