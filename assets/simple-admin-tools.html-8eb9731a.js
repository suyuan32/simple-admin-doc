import{_ as s,W as i,X as l,Y as a,Z as o,$ as t,a0 as e,H as r}from"./framework-a7967ab1.js";const c={},p=e(`<h1 id="simple-admin-tools" tabindex="-1"><a class="header-anchor" href="#simple-admin-tools" aria-hidden="true">#</a> Simple admin tools</h1><p>Simple admin tools 是一个基于go-zero的fork项目。 它提供了许多额外的功能，例如:</p><ul><li>go-swagger : 基于go-swagger而不是官方的@doc注解</li><li>多国语言支持</li><li>优化错误信息处理,支持多语言错误</li><li>简单易用的校验器</li><li>支持代码生成，生成API,RPC 和 web 端的CRUD代码</li><li>支持多种额外插件如GORM, RocketMQ</li><li>对Simple Admin 的针对性优化</li></ul><p>由于本工具是fork项目，因此使用goctls会有些麻烦. 使用fork主要是为了同步官方最新代码。</p><p>我们不能直接使用 go get and go install 命令安装 goctl 因为他会安装官方的文件，我们需要自行编译。</p><p>下面是构建goctls的过程.</p><blockquote><p>构建 goctls</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-tools.git

<span class="token builtin class-name">cd</span> tools/goctl

go mod tidy

<span class="token comment"># 输出goctls文件避免和官方的goctl冲突</span>
go build <span class="token parameter variable">-o</span> goctls goctl.go

<span class="token function">cp</span> ./goctls <span class="token variable">$GOPATH</span>/bin/goctls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>简单方法： 直接运行在 goctl 文件夹运行 <code>sh build.sh</code></p></blockquote><blockquote><p>如何使用？</p></blockquote><h2 id="自动下载依赖" tabindex="-1"><a class="header-anchor" href="#自动下载依赖" aria-hidden="true">#</a> 自动下载依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls <span class="token function">env</span> check <span class="token parameter variable">-i</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">--verbose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会自动安装 protoc, swagger 等依赖.</p><h3 id="api-命令" tabindex="-1"><a class="header-anchor" href="#api-命令" aria-hidden="true">#</a> API 命令</h3><blockquote><p>命令和goctl一样，但是需要改成 goctls.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls api <span class="token parameter variable">-h</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>例子: 生成proto的模板</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctl rpc template <span class="token parameter variable">-o</span><span class="token operator">=</span>user.proto
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成go文件</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctl rpc protoc user.proto <span class="token parameter variable">--go_out</span><span class="token operator">=</span>. --go-grpc_out<span class="token operator">=</span>. <span class="token parameter variable">--zrpc_out</span><span class="token operator">=</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27),d={href:"https://go-zero.dev/docs/goctl/zrpc",target:"_blank",rel:"noopener noreferrer"},u=e(`<blockquote><p>go.mod 配置</p></blockquote><p>导入fork项目需要使用 replace 命令。</p><div class="language-mod line-numbers-mode" data-ext="mod"><pre class="language-mod"><code>module github.com/suyuan32/simple-admin-core

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

replace github.com/zeromicro/go-zero v1.4.3 =&gt; github.com/suyuan32/simple-admin-tools v0.1.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>简单的方法是使用 goctls migrate命令.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls migrate --zero-version v1.4.3 --tool-version v0.1.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>这个命令可以快速添加 replace 语句， 但是不要运行多次， 会导致添加重复和 replace, 后续需要升级依赖的话直接修改 simple-admin-tools 的版本即可，然后 <strong>go mod tidy</strong>.</p></blockquote><blockquote><p>新版本API和RPC均支持新建时直接设置tool版本进行replace</p></blockquote>`,7);function v(m,b){const n=r("ExternalLinkIcon");return i(),l("div",null,[p,a("p",null,[a("a",d,[o("More"),t(n)])]),u])}const k=s(c,[["render",v],["__file","simple-admin-tools.html.vue"]]);export{k as default};
