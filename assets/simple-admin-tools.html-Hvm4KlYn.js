import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as e,d as s,e as o,b as a,o as r}from"./app-B6C_gI66.js";const p={},c=a('<p>Goctls 是一个为 simple admin 设计的代码生成工具, 基于 go zero 官方工具 goctl 开发而成。 它提供了许多额外的功能，例如:</p><ul><li>go-swagger : 基于 go-swagger 而不是官方的@doc 注解</li><li>多国语言支持</li><li>优化错误信息处理,支持多语言错误</li><li>简单易用的校验器</li><li>支持代码生成，生成 API,RPC 和 web 端的 CRUD 代码</li><li>对 Simple Admin 的针对性优化</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>现已支持中文，只需要设置环境变量 SIMPLE_LANG=zh 即可</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">SIMPLE_LANG</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">zh</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> goctls</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -h</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="工具安装" tabindex="-1"><a class="header-anchor" href="#工具安装"><span>工具安装</span></a></h2>',4),t={class:"hint-container info"},d=s("p",{class:"hint-container-title"},"相关信息",-1),k=s("p",null,[s("a",{href:"https://www.bilibili.com/video/BV1Lc411n7Wf",target:"_blank",rel:"noopener noreferrer"},"教学视频")],-1),h=a(`<p>从 v1.5.14 开始，工具已移至新的仓库，便于快速迭代更新 <a href="https://github.com/suyuan32/goctls" target="_blank" rel="noopener noreferrer">仓库地址</a>, 目前已支持直接命令安装，不再需要 clone 代码</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">go</span><span style="color:#032F62;--shiki-dark:#98C379;"> install</span><span style="color:#032F62;--shiki-dark:#98C379;"> github.com/suyuan32/goctls@latest</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>从 v1.5.16 版本开始支持使用 <code>goctls upgrade</code> 命令升级 goctls</p></div><h2 id="自动下载依赖" tabindex="-1"><a class="header-anchor" href="#自动下载依赖"><span>自动下载依赖</span></a></h2><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> env</span><span style="color:#032F62;--shiki-dark:#98C379;"> check</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -i</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --verbose</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会自动安装 protoc, swagger 等依赖.</p><h3 id="api-命令" tabindex="-1"><a class="header-anchor" href="#api-命令"><span>API 命令</span></a></h3><blockquote><p>命令和 goctl 一样，但是需要改成 goctls.</p></blockquote><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">生成与</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span><span style="color:#032F62;--shiki-dark:#98C379;"> 相关的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Usage:</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [flags]</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [command]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Available</span><span style="color:#032F62;--shiki-dark:#98C379;"> Commands:</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  doc</span><span style="color:#032F62;--shiki-dark:#98C379;">         生成文档文件</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  ent</span><span style="color:#032F62;--shiki-dark:#98C379;">         从</span><span style="color:#032F62;--shiki-dark:#98C379;"> ent</span><span style="color:#032F62;--shiki-dark:#98C379;"> 文件生成</span><span style="color:#032F62;--shiki-dark:#98C379;"> CRUD</span><span style="color:#032F62;--shiki-dark:#98C379;"> 业务逻辑文件</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  format</span><span style="color:#032F62;--shiki-dark:#98C379;">      格式化</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span><span style="color:#032F62;--shiki-dark:#98C379;"> 文件</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  go</span><span style="color:#032F62;--shiki-dark:#98C379;">          为提供的</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span><span style="color:#032F62;--shiki-dark:#98C379;"> 文件生成</span><span style="color:#032F62;--shiki-dark:#98C379;"> go</span><span style="color:#032F62;--shiki-dark:#98C379;"> 文件</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  new</span><span style="color:#032F62;--shiki-dark:#98C379;">         快速创建</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span><span style="color:#032F62;--shiki-dark:#98C379;"> 服务</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  plugin</span><span style="color:#032F62;--shiki-dark:#98C379;">      自定义文件生成器</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  proto</span><span style="color:#032F62;--shiki-dark:#98C379;">       从</span><span style="color:#032F62;--shiki-dark:#98C379;"> proto</span><span style="color:#032F62;--shiki-dark:#98C379;"> 文件生成</span><span style="color:#032F62;--shiki-dark:#98C379;"> CRUD</span><span style="color:#032F62;--shiki-dark:#98C379;"> 模板</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  validate</span><span style="color:#032F62;--shiki-dark:#98C379;">    验证</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span><span style="color:#032F62;--shiki-dark:#98C379;"> 文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Flags:</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">      --branch</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">   远程</span><span style="color:#032F62;--shiki-dark:#98C379;"> repo</span><span style="color:#032F62;--shiki-dark:#98C379;"> 的分支，与</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 一起使用</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -h,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --help</span><span style="color:#032F62;--shiki-dark:#98C379;">            help</span><span style="color:#032F62;--shiki-dark:#98C379;"> for</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">      --home</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">     模板的</span><span style="color:#032F62;--shiki-dark:#98C379;"> goctl</span><span style="color:#032F62;--shiki-dark:#98C379;"> 路径，--home</span><span style="color:#032F62;--shiki-dark:#98C379;"> 和</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 不能同时设置，如果设置了，--remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 优先级更高</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">      --o</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">        输出</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span><span style="color:#032F62;--shiki-dark:#98C379;"> 示例文件</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">      --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">   模板的远程</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> repo，--home</span><span style="color:#032F62;--shiki-dark:#98C379;"> 和</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 不能同时设置，如果设置了，--remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 优先级更高</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">                        Git</span><span style="color:#032F62;--shiki-dark:#98C379;"> repo</span><span style="color:#032F62;--shiki-dark:#98C379;"> 的目录结构必须与</span><span style="color:#032F62;--shiki-dark:#98C379;"> https://github.com/zeromicro/go-zero-template</span><span style="color:#032F62;--shiki-dark:#98C379;"> 相一致</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Use</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;goctls api [command] --help&quot;</span><span style="color:#032F62;--shiki-dark:#98C379;"> for</span><span style="color:#032F62;--shiki-dark:#98C379;"> more</span><span style="color:#032F62;--shiki-dark:#98C379;"> information</span><span style="color:#032F62;--shiki-dark:#98C379;"> about</span><span style="color:#032F62;--shiki-dark:#98C379;"> a</span><span style="color:#032F62;--shiki-dark:#98C379;"> command.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>例子:</p></blockquote><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> api</span><span style="color:#032F62;--shiki-dark:#98C379;"> go</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -api</span><span style="color:#032F62;--shiki-dark:#98C379;"> core.api</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -dir</span><span style="color:#032F62;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据 core.api 里的定义生成 go 文件， -dir 设置输出位置.</p><h3 id="rpc-命令" tabindex="-1"><a class="header-anchor" href="#rpc-命令"><span>Rpc 命令</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> rpc</span><span style="color:#032F62;--shiki-dark:#98C379;"> protoc</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">生成</span><span style="color:#032F62;--shiki-dark:#98C379;"> grpc</span><span style="color:#032F62;--shiki-dark:#98C379;"> 代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Usage:</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> rpc</span><span style="color:#032F62;--shiki-dark:#98C379;"> protoc</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [flags]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Examples:</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">goctl</span><span style="color:#032F62;--shiki-dark:#98C379;"> rpc</span><span style="color:#032F62;--shiki-dark:#98C379;"> protoc</span><span style="color:#032F62;--shiki-dark:#98C379;"> xx.proto</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --go_out=./pb</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --go-grpc_out=./pb</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --zrpc_out=.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Flags:</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">      --branch</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">     远程</span><span style="color:#032F62;--shiki-dark:#98C379;"> repo</span><span style="color:#032F62;--shiki-dark:#98C379;"> 的分支，与</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 一起使用</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -c,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --client</span><span style="color:#032F62;--shiki-dark:#98C379;">            是否生成</span><span style="color:#032F62;--shiki-dark:#98C379;"> client</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="color:#005CC5;--shiki-dark:#D19A66;">true</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -h,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --help</span><span style="color:#032F62;--shiki-dark:#98C379;">              help</span><span style="color:#032F62;--shiki-dark:#98C379;"> for</span><span style="color:#032F62;--shiki-dark:#98C379;"> protoc</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">      --home</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">       模板的</span><span style="color:#032F62;--shiki-dark:#98C379;"> goctl</span><span style="color:#032F62;--shiki-dark:#98C379;"> 路径，--home</span><span style="color:#032F62;--shiki-dark:#98C379;"> 和</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 不能同时设置，如果设置了，--remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 优先级更高</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -m,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --multiple</span><span style="color:#032F62;--shiki-dark:#98C379;">          在多个</span><span style="color:#032F62;--shiki-dark:#98C379;"> rpc</span><span style="color:#032F62;--shiki-dark:#98C379;"> 服务模式下生成</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">      --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">     模板的远程</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> repo，--home</span><span style="color:#032F62;--shiki-dark:#98C379;"> 和</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 不能同时设置，如果设置了，--remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> 优先级更高</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">                          Git</span><span style="color:#032F62;--shiki-dark:#98C379;"> repo</span><span style="color:#032F62;--shiki-dark:#98C379;"> 的目录结构必须与</span><span style="color:#032F62;--shiki-dark:#98C379;"> https://github.com/zeromicro/go-zero-template</span><span style="color:#032F62;--shiki-dark:#98C379;"> 相一致</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -s,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --style</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">      文件命名格式，参见</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md] (</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">default</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;go_zero&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  -v,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --verbose</span><span style="color:#032F62;--shiki-dark:#98C379;">           启用日志输出</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">      --zrpc_out</span><span style="color:#032F62;--shiki-dark:#98C379;"> string</span><span style="color:#032F62;--shiki-dark:#98C379;">   zrpc</span><span style="color:#032F62;--shiki-dark:#98C379;"> 输出目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> 例子: 生成 proto 的模板</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">\`\`\`</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">shell</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> rpc template </span><span style="color:#005CC5;--shiki-dark:#D19A66;">-o=user.proto</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成的文件</p></blockquote><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">syntax</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;proto3&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">package</span><span style="color:#032F62;--shiki-dark:#98C379;"> user</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">option</span><span style="color:#032F62;--shiki-dark:#98C379;"> go_package=&quot;. /user&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">message</span><span style="color:#032F62;--shiki-dark:#98C379;"> Request</span><span style="color:#032F62;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  string</span><span style="color:#032F62;--shiki-dark:#98C379;"> ping</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">message</span><span style="color:#032F62;--shiki-dark:#98C379;"> Response</span><span style="color:#032F62;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  string</span><span style="color:#032F62;--shiki-dark:#98C379;"> pong</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">service</span><span style="color:#032F62;--shiki-dark:#98C379;"> User</span><span style="color:#032F62;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  rpc</span><span style="color:#032F62;--shiki-dark:#98C379;"> Ping</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Request</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="color:#032F62;--shiki-dark:#98C379;">returns</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Response</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成 go 文件</p></blockquote><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">goctls</span><span style="color:#032F62;--shiki-dark:#98C379;"> rpc</span><span style="color:#032F62;--shiki-dark:#98C379;"> protoc</span><span style="color:#032F62;--shiki-dark:#98C379;"> user.proto</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --go_out=.</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --go-grpc_out=.</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --zrpc_out=.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>可以访问官网查看更多 <a href="https://go-zero.dev/docs/tutorials/cli/rpc" target="_blank" rel="noopener noreferrer">RPC command</a></p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>我们提供了 <code>make gen-rpc</code> 和 <code>make gen-api</code> 用于快速生成官方代码</p></div>`,20);function F(y,C){const n=l("BiliBili");return r(),e("div",null,[c,s("div",t,[d,k,o(n,{bvid:"BV1Lc411n7Wf"})]),h])}const u=i(p,[["render",F],["__file","simple-admin-tools.html.vue"]]),g=JSON.parse('{"path":"/zh/guide/basic-config/simple-admin-tools.html","title":"Goctls","lang":"zh-CN","frontmatter":{"order":2,"title":"Goctls","head":[["meta",{"name":"keywords","content":"goctls, goctls -h, simple admin 开发工具, 微服务工具"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/basic-config/simple-admin-tools.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/basic-config/simple-admin-tools.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Goctls"}],["meta",{"property":"og:description","content":"Goctls 是一个为 simple admin 设计的代码生成工具, 基于 go zero 官方工具 goctl 开发而成。 它提供了许多额外的功能，例如: go-swagger : 基于 go-swagger 而不是官方的@doc 注解 多国语言支持 优化错误信息处理,支持多语言错误 简单易用的校验器 支持代码生成，生成 API,RPC 和 web..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Goctls\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Goctls 是一个为 simple admin 设计的代码生成工具, 基于 go zero 官方工具 goctl 开发而成。 它提供了许多额外的功能，例如: go-swagger : 基于 go-swagger 而不是官方的@doc 注解 多国语言支持 优化错误信息处理,支持多语言错误 简单易用的校验器 支持代码生成，生成 API,RPC 和 web..."},"headers":[{"level":2,"title":"工具安装","slug":"工具安装","link":"#工具安装","children":[]},{"level":2,"title":"自动下载依赖","slug":"自动下载依赖","link":"#自动下载依赖","children":[{"level":3,"title":"API 命令","slug":"api-命令","link":"#api-命令","children":[]},{"level":3,"title":"Rpc 命令","slug":"rpc-命令","link":"#rpc-命令","children":[]}]}],"git":{"createdTime":1671464359000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":14},{"name":"Ryan SU","email":"1137661202@qq.com","commits":7},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":4}]},"readingTime":{"minutes":2.68,"words":804},"filePathRelative":"zh/guide/basic-config/simple-admin-tools.md","localizedDate":"2022年12月19日","autoDesc":true,"excerpt":"<p>Goctls 是一个为 simple admin 设计的代码生成工具, 基于 go zero 官方工具 goctl 开发而成。\\n它提供了许多额外的功能，例如:</p>\\n<ul>\\n<li>go-swagger : 基于 go-swagger 而不是官方的@doc 注解</li>\\n<li>多国语言支持</li>\\n<li>优化错误信息处理,支持多语言错误</li>\\n<li>简单易用的校验器</li>\\n<li>支持代码生成，生成 API,RPC 和 web 端的 CRUD 代码</li>\\n<li>对 Simple Admin 的针对性优化</li>\\n</ul>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>现已支持中文，只需要设置环境变量 SIMPLE_LANG=zh 即可</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-ext=\\"shell\\" data-title=\\"shell\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\" style=\\"background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#24292E;--shiki-dark:#E06C75\\">SIMPLE_LANG</span><span style=\\"color:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#032F62;--shiki-dark:#98C379\\">zh</span><span style=\\"color:#6F42C1;--shiki-dark:#61AFEF\\"> goctls</span><span style=\\"color:#005CC5;--shiki-dark:#D19A66\\"> -h</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></div>"}');export{u as comp,g as data};
