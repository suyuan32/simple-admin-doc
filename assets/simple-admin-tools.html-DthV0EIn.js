import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as r,a,f as n,b as e,e as i}from"./app-W8Vulmvo.js";const p={},c=i(`<p>Goctls 是一个为 simple admin 设计的代码生成工具, 基于 go zero 官方工具 goctl 开发而成。 它提供了许多额外的功能，例如:</p><ul><li>go-swagger : 基于 go-swagger 而不是官方的@doc 注解</li><li>多国语言支持</li><li>优化错误信息处理,支持多语言错误</li><li>简单易用的校验器</li><li>支持代码生成，生成 API,RPC 和 web 端的 CRUD 代码</li><li>对 Simple Admin 的针对性优化</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>现已支持中文，只需要设置环境变量 SIMPLE_LANG=zh 即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">SIMPLE_LANG</span><span class="token operator">=</span>zh goctls <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="工具安装" tabindex="-1"><a class="header-anchor" href="#工具安装" aria-hidden="true">#</a> 工具安装</h2>`,4),d={class:"hint-container info"},u=a("p",{class:"hint-container-title"},"相关信息",-1),v={href:"https://www.bilibili.com/video/BV1Lc411n7Wf",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/suyuan32/goctls",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/suyuan32/goctls@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>从 v1.5.16 版本开始支持使用 <code>goctls upgrade</code> 命令升级 goctls</p></div><h2 id="自动下载依赖" tabindex="-1"><a class="header-anchor" href="#自动下载依赖" aria-hidden="true">#</a> 自动下载依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls <span class="token function">env</span> check <span class="token parameter variable">-i</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">--verbose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会自动安装 protoc, swagger 等依赖.</p><h3 id="api-命令" tabindex="-1"><a class="header-anchor" href="#api-命令" aria-hidden="true">#</a> API 命令</h3><blockquote><p>命令和 goctl 一样，但是需要改成 goctls.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls api <span class="token parameter variable">-h</span>
生成与 api 相关的文件

Usage:
  goctls api <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
  goctls api <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Available Commands:
  doc         生成文档文件
  ent         从 ent 文件生成 CRUD 业务逻辑文件
  <span class="token function">format</span>      格式化 api 文件
  go          为提供的 api 文件生成 go 文件
  new         快速创建 api 服务
  plugin      自定义文件生成器
  proto       从 proto 文件生成 CRUD 模板
  validate    验证 api 文件

Flags:
      <span class="token parameter variable">--branch</span> string   远程 repo 的分支，与 <span class="token parameter variable">--remote</span> 一起使用
  -h, <span class="token parameter variable">--help</span>            <span class="token builtin class-name">help</span> <span class="token keyword">for</span> api
      <span class="token parameter variable">--home</span> string     模板的 goctl 路径，--home 和 <span class="token parameter variable">--remote</span> 不能同时设置，如果设置了，--remote 优先级更高
      <span class="token parameter variable">--o</span> string        输出 api 示例文件
      <span class="token parameter variable">--remote</span> string   模板的远程 <span class="token function">git</span> repo，--home 和 <span class="token parameter variable">--remote</span> 不能同时设置，如果设置了，--remote 优先级更高
                        Git repo 的目录结构必须与 https://github.com/zeromicro/go-zero-template 相一致


Use <span class="token string">&quot;goctls api [command] --help&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>例子:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api go <span class="token parameter variable">-api</span> core.api <span class="token parameter variable">-dir</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据 core.api 里的定义生成 go 文件， -dir 设置输出位置.</p><h3 id="rpc-命令" tabindex="-1"><a class="header-anchor" href="#rpc-命令" aria-hidden="true">#</a> Rpc 命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls rpc protoc <span class="token parameter variable">-h</span>
生成 grpc 代码

Usage:
  goctls rpc protoc <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Examples:
goctl rpc protoc xx.proto <span class="token parameter variable">--go_out</span><span class="token operator">=</span>./pb --go-grpc_out<span class="token operator">=</span>./pb <span class="token parameter variable">--zrpc_out</span><span class="token operator">=</span>.

Flags:
      <span class="token parameter variable">--branch</span> string     远程 repo 的分支，与 <span class="token parameter variable">--remote</span> 一起使用
  -c, <span class="token parameter variable">--client</span>            是否生成 client <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>
  -h, <span class="token parameter variable">--help</span>              <span class="token builtin class-name">help</span> <span class="token keyword">for</span> protoc
      <span class="token parameter variable">--home</span> string       模板的 goctl 路径，--home 和 <span class="token parameter variable">--remote</span> 不能同时设置，如果设置了，--remote 优先级更高
  -m, <span class="token parameter variable">--multiple</span>          在多个 rpc 服务模式下生成
      <span class="token parameter variable">--remote</span> string     模板的远程 <span class="token function">git</span> repo，--home 和 <span class="token parameter variable">--remote</span> 不能同时设置，如果设置了，--remote 优先级更高
                          Git repo 的目录结构必须与 https://github.com/zeromicro/go-zero-template 相一致
  -s, <span class="token parameter variable">--style</span> string      文件命名格式，参见 <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md<span class="token punctuation">]</span> <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
  -v, <span class="token parameter variable">--verbose</span>           启用日志输出
      <span class="token parameter variable">--zrpc_out</span> string   zrpc 输出目录

<span class="token operator">&gt;</span> 例子: 生成 proto 的模板

\`\`\`shell
goctls rpc template <span class="token parameter variable">-o</span><span class="token operator">=</span>user.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成的文件</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>syntax <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成 go 文件</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls rpc protoc user.proto <span class="token parameter variable">--go_out</span><span class="token operator">=</span>. --go-grpc_out<span class="token operator">=</span>. <span class="token parameter variable">--zrpc_out</span><span class="token operator">=</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),g={class:"hint-container info"},k=a("p",{class:"hint-container-title"},"相关信息",-1),h={href:"https://go-zero.dev/docs/goctl/zrpc",target:"_blank",rel:"noopener noreferrer"},_=a("div",{class:"hint-container warning"},[a("p",{class:"hint-container-title"},"注意"),a("p",null,[n("我们提供了 "),a("code",null,"make gen-rpc"),n(" 和 "),a("code",null,"make gen-api"),n(" 用于快速生成官方代码")])],-1);function f(x,q){const s=t("ExternalLinkIcon");return o(),r("div",null,[c,a("div",d,[u,a("p",null,[a("a",v,[n("教学视频"),e(s)])])]),a("p",null,[n("从 v1.5.14 开始，工具已移至新的仓库，便于快速迭代更新 "),a("a",m,[n("仓库地址"),e(s)]),n(", 目前已支持直接命令安装，不再需要 clone 代码")]),b,a("div",g,[k,a("p",null,[n("可以访问官网查看更多 "),a("a",h,[n("RPC command"),e(s)])])]),_])}const R=l(p,[["render",f],["__file","simple-admin-tools.html.vue"]]);export{R as default};
