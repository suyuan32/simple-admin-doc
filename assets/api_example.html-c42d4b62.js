import{_ as i,a as l}from"./api_gen_struct-3403667f.js";import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as d,c as o,a,b as e,d as s,e as t}from"./app-2069921e.js";const c={},u=a("h1",{id:"_3-分钟开发-api-服务",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3-分钟开发-api-服务","aria-hidden":"true"},"#"),e(" 3 分钟开发 API 服务")],-1),m={class:"hint-container warning"},v=a("p",{class:"hint-container-title"},"注意",-1),b=a("p",null,"首先确认你安装了以下软件:",-1),k=a("ul",null,[a("li",null,"simple-admin-tool (goctls) v1.5.5 +")],-1),h={href:"https://go-zero.dev/cn/docs/goctl/api",target:"_blank",rel:"noopener noreferrer"},g={href:"https://go-zero.dev/cn/docs/advance/api-coding",target:"_blank",rel:"noopener noreferrer"},_=a("br",null,null,-1),x=a("br",null,null,-1),y={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"},f={class:"hint-container info"},w=a("p",{class:"hint-container-title"},"相关信息",-1),q={href:"https://www.bilibili.com/video/BV1Lh411E7Xv",target:"_blank",rel:"noopener noreferrer"},P=t(`<h2 id="api-服务的职责" tabindex="-1"><a class="header-anchor" href="#api-服务的职责" aria-hidden="true">#</a> API 服务的职责</h2><p>在 simple admin 中， API 服务充当网关的角色，主要提供以下功能：</p><ul><li>用户鉴权， 如 JWT</li><li>数据处理， 如数据过滤筛选，国际化翻译</li><li>限流和熔断</li></ul><p>一个 API 可以接入多个 RPC， 提供统一的请求入口</p><h2 id="创建-api-项目" tabindex="-1"><a class="header-anchor" href="#创建-api-项目" aria-hidden="true">#</a> 创建 API 项目</h2><blockquote><p>创建 example</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api new example <span class="token parameter variable">--i18n</span><span class="token operator">=</span>true <span class="token parameter variable">--casbin</span><span class="token operator">=</span>true <span class="token parameter variable">--trans_err</span><span class="token operator">=</span>true <span class="token parameter variable">--module_name</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-api <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8081</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>简单命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api new example <span class="token parameter variable">-i</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> github.com/suyuan32/simple-admin-example-api <span class="token parameter variable">-p</span> <span class="token number">8081</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>创建项目名称仅支持小写和驼峰命名</p></div><h3 id="api-new-参数介绍" tabindex="-1"><a class="header-anchor" href="#api-new-参数介绍" aria-hidden="true">#</a> <code>api new</code> 参数介绍</h3><table><thead><tr><th>参数</th><th>必须</th><th>默认值</th><th>介绍</th><th>使用方法</th></tr></thead><tbody><tr><td>i18n</td><td>否</td><td>false</td><td>是否启用 i18n</td><td>true 为启用</td></tr><tr><td>casbin</td><td>否</td><td>false</td><td>是否启用 casbin 进行鉴权并自动添加中间件</td><td>true 为启用</td></tr><tr><td>module_name</td><td>否</td><td></td><td>go.mod 中的 module 名称</td><td>如果项目需要被在外部 import，需要像上面例子设置为 github 或者其他地方的仓库网址， 为空则 module 为项目名称</td></tr><tr><td>trans_err</td><td>否</td><td>false</td><td>国际化翻译错误信息</td><td>true 为启用</td></tr><tr><td>port</td><td>否</td><td>9100</td><td>端口号</td><td>服务暴露的端口号</td></tr><tr><td>ent</td><td>否</td><td>false</td><td>是否启用 Ent</td><td>true 为启用，启用 Ent 可用于单体 API 服务</td></tr><tr><td>use_core_rpc</td><td>否</td><td>false</td><td>是否使用 CoreRpc</td><td>是否使用 CoreRpc, 生成 CoreRpc 配置, 若为 true, 自动生成 CoreRpc 相关文件和代码</td></tr></tbody></table><p><strong>详细参数请在命令行查看 <code>goctls api new --help</code></strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls api new <span class="token parameter variable">--help</span>
快速创建 api 服务

Usage:
  goctls api new <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
      <span class="token parameter variable">--branch</span> string        远程 repo 的分支，与 <span class="token parameter variable">--remote</span> 一起使用
  -c, <span class="token parameter variable">--casbin</span>               是否使用 Casbin
  -e, <span class="token parameter variable">--ent</span>                  API 服务中是否使用 Ent
  -h, <span class="token parameter variable">--help</span>                 <span class="token builtin class-name">help</span> <span class="token keyword">for</span> new
      <span class="token parameter variable">--home</span> string          模板的 goctls 路径，--home 和 <span class="token parameter variable">--remote</span> 不能同时设置，如果设置了，--remote 优先级更高
  -i, <span class="token parameter variable">--i18n</span>                 是否启用 i18n 国际化
  -m, <span class="token parameter variable">--module_name</span> string   go.mod 中的模块名称，例如 github.com/suyuan32/simple-admin-core
  -p, <span class="token parameter variable">--port</span> int             服务暴露的端口 <span class="token punctuation">(</span>default <span class="token number">9100</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--remote</span> string        模板的远程 <span class="token function">git</span> repo，--home 和 <span class="token parameter variable">--remote</span> 不能同时设置，如果设置了，--remote 优先级更高
                             Git repo 的目录结构必须与 https://github.com/zeromicro/go-zero-template 相一致
  -s, <span class="token parameter variable">--style</span> string         文件命名格式，参见 <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md<span class="token punctuation">]</span> <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
  -a, <span class="token parameter variable">--trans_err</span>            是否翻译错误
  -r, <span class="token parameter variable">--use_core_rpc</span>         是否使用 CoreRpc, 生成 CoreRpc 配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>你可以看到以下结构</p></blockquote><figure><img src="`+l+`" alt="Example" tabindex="0" loading="lazy"><figcaption>Example</figcaption></figure><h3 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── desc                              api声明文件存放目录
├── etc                               配置文件目录
└── internal
    ├── config
    ├── handler                       handler目录
    │   ├── base
    │   ├── student
    │   └── teacher
    ├── i18n                          国际化i18n文件目录
    │   └── locale
    ├── logic                         业务代码目录
    │   ├── base
    │   ├── student
    │   └── teacher
    ├── middleware                    中间件目录
    ├── svc                           全局参数目录
    └── types                         类型声明目录


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>然后编辑 etc/example.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> example.api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> <span class="token comment"># the same as core</span>
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> exampleApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/data/logs/example/api
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4000</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root <span class="token comment"># set your username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># set your password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">CasbinConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">ModelText</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    [request_definition]
    r = sub, obj, act
    [policy_definition]
    p = sub, obj, act
    [role_definition]
    g = _, _
    [policy_effect]
    e = some(where (p.eft == allow))
    [matchers]
    m = r.sub == p.sub &amp;&amp; keyMatch2(r.obj,p.obj) &amp;&amp; r.act == p.act</span>

<span class="token key atrule">ExampleRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>运行代码</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run example.go <span class="token parameter variable">-f</span> etc/example.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>如果看到</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Starting server at <span class="token number">127.0</span>.0.1:8081<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明运行成功.</p><h2 id="代码生成-基于-proto" tabindex="-1"><a class="header-anchor" href="#代码生成-基于-proto" aria-hidden="true">#</a> 代码生成（基于 Proto）</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>proto 必须为 <code>goctls rpc ent</code> 生成的 proto</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--output</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Student <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/types/example <span class="token parameter variable">--i18n</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>简单参数</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">-p</span> /home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">-a</span> example <span class="token parameter variable">-r</span> Example <span class="token parameter variable">--o</span> ./ <span class="token parameter variable">-m</span> Student <span class="token parameter variable">-n</span> Example <span class="token parameter variable">-g</span> github.com/suyuan32/simple-admin-example-rpc/types/example <span class="token parameter variable">-i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-proto-参数介绍" tabindex="-1"><a class="header-anchor" href="#api-proto-参数介绍" aria-hidden="true">#</a> <code>api proto</code> 参数介绍</h3><table><thead><tr><th>参数</th><th>必须</th><th>默认值</th><th>介绍</th><th>使用方法</th></tr></thead><tbody><tr><td>proto</td><td>是</td><td></td><td>proto 文件地址</td><td>输入 proto 文件的绝对路径。 <strong>注意要为合并后的 proto 即根目录下的 proto ，不是 desc 文件夹中的，因为要获取 package 和 Base 结构</strong></td></tr><tr><td>i18n</td><td>否</td><td>false</td><td>是否启用 i18n</td><td>true 为启用</td></tr><tr><td>style</td><td>否</td><td>go_zero</td><td>文件名格式</td><td>go_zero 为蛇形格式</td></tr><tr><td>api_service_name</td><td>是</td><td></td><td>服务名称</td><td>api 服务的 service 名称, 在 api 声明文件中</td></tr><tr><td>rpc_service_name</td><td>是</td><td></td><td>服务名称</td><td>rpc 服务的名称, 与 proto 文件中的 service 名称一致</td></tr><tr><td>output</td><td>是</td><td></td><td>输出位置</td><td>文件输出位置，可以为相对路径，指向 main 文件目录</td></tr><tr><td>model</td><td>是</td><td></td><td>模型名称</td><td>用于生成的模型名称，例如 User, 支持同时生成多个模型, 使用逗号分隔，如 User,Member</td></tr><tr><td>rpc_name</td><td>是</td><td></td><td>RPC 名称</td><td>输入 Example 则生成文件会生成 l.svcCtx.ExampleRpc</td></tr><tr><td>grpc_package</td><td>是</td><td></td><td>RPC *_grpc.go 包路径</td><td>在 example 中是 github.com/suyuan32/simple-admin-example-rpc/example</td></tr><tr><td>multiple</td><td>否</td><td>false</td><td>多服务</td><td>若 proto 文件中有多个 service, 需要设置为 true</td></tr><tr><td>json_style</td><td>否</td><td>goZero</td><td>JSON tag 的格式，默认为小驼峰</td><td>go_zero 为下划线， GoZero 为大驼峰</td></tr><tr><td>import_prefix</td><td>否</td><td></td><td>导入路径前缀</td><td>导入路径的前缀，仅用于项目位于子目录的情况，如 core 的 rpc 和 api</td></tr><tr><td>overwrite</td><td>否</td><td>false</td><td>是否覆盖生成文件</td><td>true 则会覆盖所有生成的文件</td></tr><tr><td>api_data</td><td>否</td><td></td><td>是否自动生成 API 初始化代码</td><td>若为 true 会自动生成API初始化代码</td></tr><tr><td>optional_service</td><td>否</td><td>false</td><td>是否为可选服务</td><td>是否为可选服务，若为 true，会自动生成服务启动判断逻辑</td></tr></tbody></table><p><strong>详细参数请在命令行查看 <code>goctls api proto --help</code></strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls api proto <span class="token parameter variable">-h</span>
从 proto 文件生成 CRUD 模板

Usage:
  goctls api proto <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -d, <span class="token parameter variable">--api_data</span>                  是否自动生成 API 初始化代码，需要 CoreRpc
  -a, <span class="token parameter variable">--api_service_name</span> string   API 服务名称
  -g, <span class="token parameter variable">--grpc_package</span> string       存储 pb 文件的 rpc 包，例如 github.com/suyuan32/simple-admin-job/types/job
  -h, <span class="token parameter variable">--help</span>                      <span class="token builtin class-name">help</span> <span class="token keyword">for</span> proto
  -i, <span class="token parameter variable">--i18n</span>                      是否启用 i18n 国际化
  -x, <span class="token parameter variable">--import_prefix</span> string      导入路径的前缀，仅用于项目位于子目录的情况，如 core 的 rpc 和 api
  -j, <span class="token parameter variable">--json_style</span> string         JSON 标记格式，默认为驼峰式 <span class="token punctuation">(</span>default <span class="token string">&quot;goZero&quot;</span><span class="token punctuation">)</span>
  -m, <span class="token parameter variable">--model</span> string              用于生成的模型名称，例如 User, 支持同时生成多个模型, 使用逗号分隔，如 User,Member
      <span class="token parameter variable">--multiple</span>                  proto 是否包含多个服务
  -t, <span class="token parameter variable">--optional_service</span>          是否为可选服务，如果为 true，则会生成判断代码
  -o, <span class="token parameter variable">--output</span> string             输出路径
  -w, <span class="token parameter variable">--overwrite</span>                 是否覆盖文件，它将覆盖所有生成的文件
  -p, <span class="token parameter variable">--proto</span> string              proto 文件路径
  -n, <span class="token parameter variable">--rpc_name</span> string           RPC 服务名称，用于调用，例如 CoreRpc 需要配置为 Core
  -r, <span class="token parameter variable">--rpc_service_name</span> string   RPC 服务名称
  -s, <span class="token parameter variable">--style</span> string              文件名格式样式 <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),C={class:"hint-container info"},E=t(`<p class="hint-container-title">相关信息</p><p>multiple 例子, multiple 用于根据不同服务生成多个 rpcclient</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>school <span class="token parameter variable">--output</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Teacher <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>School <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example <span class="token parameter variable">--multiple</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),A={href:"https://github.com/suyuan32/simple-admin-example-api/tree/multiple",target:"_blank",rel:"noopener noreferrer"},R=a("blockquote",null,[a("p",null,"生成效果")],-1),z=a("figure",null,[a("img",{src:i,alt:"pic",tabindex:"0",loading:"lazy"}),a("figcaption",null,"pic")],-1),I={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"},N=t('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>还需要手动添加<code>ExampleRpc</code>到<code>service_context</code>, <code>config</code>, <code>etc</code></p></div><h2 id="代码生成-基于-ent-的单体服务" tabindex="-1"><a class="header-anchor" href="#代码生成-基于-ent-的单体服务" aria-hidden="true">#</a> 代码生成 (基于 Ent 的单体服务)</h2>',2),j={class:"hint-container info"},S=a("p",{class:"hint-container-title"},"相关信息",-1),U={href:"https://www.bilibili.com/video/BV1oa4y1A7rT/",target:"_blank",rel:"noopener noreferrer"},M=a("div",{class:"hint-container info"},[a("p",{class:"hint-container-title"},"相关信息"),a("p",null,"如果你的项目较小， 单体 API 服务比较适合你。直接在 API 层操作数据库，无需连接 RPC。")],-1),T={class:"hint-container warning"},D=a("p",{class:"hint-container-title"},"注意",-1),B=a("code",null,"api new",-1),L=a("code",null,"--ent=true",-1),G=a("br",null,null,-1),V={href:"https://github.com/suyuan32/simple-admin-example-api-single",target:"_blank",rel:"noopener noreferrer"},Z=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api new example <span class="token parameter variable">-i</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> github.com/suyuan32/simple-admin-example-api <span class="token parameter variable">-p</span> <span class="token number">8081</span> <span class="token parameter variable">-e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),J=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api ent <span class="token parameter variable">--schema</span><span class="token operator">=</span>./ent/schema <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--output</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span><span class="token punctuation">{</span>modelName<span class="token punctuation">}</span> <span class="token parameter variable">--group</span><span class="token operator">=</span><span class="token punctuation">{</span>groupName<span class="token punctuation">}</span> <span class="token parameter variable">--search_key_num</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">--overwrite</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>必须</th><th>默认值</th><th>介绍</th><th>使用方法</th></tr></thead><tbody><tr><td>schema</td><td>是</td><td></td><td>schema 文件地址</td><td>输入 Ent schema 文件夹相对路径</td></tr><tr><td>style</td><td>否</td><td>go_zero</td><td>文件名格式</td><td>go_zero 为蛇形格式</td></tr><tr><td>api_service_name</td><td>是</td><td></td><td>服务名称</td><td>api 服务的 service 名称, 在 api 声明文件中</td></tr><tr><td>output</td><td>是</td><td></td><td>输出位置</td><td>文件输出位置，可以为相对路径，指向 main 文件目录</td></tr><tr><td>model</td><td>是</td><td></td><td>模型名称</td><td>用于生成的模型名称，例如 User，如果为 &quot;all&quot;，则为 schema 目录中的所有模型生成代码</td></tr><tr><td>search_key_num</td><td>否</td><td>3</td><td>搜索字段数量（默认为 3）</td><td>列表搜索字段数量，只能自动生成 string 的字段</td></tr><tr><td>group</td><td>是</td><td></td><td>分组名称</td><td>分组名称用于将不同 logic 文件放到不同文件夹</td></tr><tr><td>json_style</td><td>否</td><td>goZero</td><td>JSON tag 的格式，默认为小驼峰</td><td>go_zero 为下划线， GoZero 为大驼峰</td></tr><tr><td>i18n</td><td>否</td><td>false</td><td>是否启用 i18n</td><td>true 为启用</td></tr><tr><td>import_prefix</td><td>否</td><td></td><td>导入路径前缀</td><td>导入路径的前缀，仅用于项目位于子目录的情况，如 core 的 rpc 和 api</td></tr><tr><td>api_data</td><td>否</td><td></td><td>是否自动生成 API 初始化代码</td><td>若为 true 会自动生成API初始化代码</td></tr><tr><td>overwrite</td><td>否</td><td>false</td><td>是否覆盖生成文件</td><td>true 则会覆盖所有生成的文件</td></tr></tbody></table><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>快捷命令 <code>make gen-api-ent-logic model={modelName} group={groupName}</code> 表示生成 schema 为 <code>{modelName}</code> 的代码，<code>{groupName}</code>为分组名称，注意 modelName 需要首字母大写，和 schema 中的 struct 名称保持一致。使用 <code>make gen-api-ent-logic model=all group=all</code> 生成所有 schema 的 CRUD 代码。</p></div><blockquote><p>** 运行 <code>goctls api ent --help</code> 查看详细命令 **</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls api ent <span class="token parameter variable">-h</span>
从 ent 文件生成 CRUD 业务逻辑文件

Usage:
  goctls api ent <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -p, <span class="token parameter variable">--api_data</span>                  是否自动生成 API 初始化代码，需要 CoreRpc
  -a, <span class="token parameter variable">--api_service_name</span> string   API 服务名称
  -g, <span class="token parameter variable">--group</span> string              业务逻辑代码的分组名称，例如 user
  -h, <span class="token parameter variable">--help</span>                      <span class="token builtin class-name">help</span> <span class="token keyword">for</span> ent
  -i, <span class="token parameter variable">--i18n</span>                      是否启用 i18n 国际化
  -x, <span class="token parameter variable">--import_prefix</span> string      导入路径的前缀，仅用于项目位于子目录的情况，如 core 的 rpc 和 api
  -j, <span class="token parameter variable">--json_style</span> string         JSON 标记格式，默认为驼峰式 <span class="token punctuation">(</span>default <span class="token string">&quot;goZero&quot;</span><span class="token punctuation">)</span>
  -m, <span class="token parameter variable">--model</span> string              用于生成的模型名称，例如 user，如果为 <span class="token string">&quot;all&quot;</span>，则为 schema 目录中的所有模型生成代码
  -o, <span class="token parameter variable">--output</span> string             输出路径
  -w, <span class="token parameter variable">--overwrite</span>                 是否覆盖文件，它将覆盖所有生成的文件
  -c, <span class="token parameter variable">--schema</span> string             Ent 的 schema 文件夹路径
  -k, <span class="token parameter variable">--search_key_num</span> int        搜索条件的最大数量，只支持 String 类型 <span class="token punctuation">(</span>default <span class="token number">3</span><span class="token punctuation">)</span>
  -s, <span class="token parameter variable">--style</span> string              文件名格式样式 <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>goctls api ent 会同时生成 .api 文件</strong></p><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
example
├── Dockerfile
├── Makefile
├── desc                                       # 声明目录
│   ├── all.api
│   └── base.api
├── ent                                        # Ent 目录
│   ├── client.go
│   ├── ent.go
│   ├── enttest
│   │   └── enttest.go
│   ├── example
│   │   ├── example.go
│   │   └── where.go
│   ├── example.go
│   ├── example_create.go
│   ├── example_delete.go
│   ├── example_query.go
│   ├── example_update.go
│   ├── generate.go
│   ├── hook
│   │   └── hook.go
│   ├── migrate
│   │   ├── migrate.go
│   │   └── schema.go
│   ├── mutation.go
│   ├── predicate
│   │   └── predicate.go
│   ├── runtime
│   │   └── runtime.go
│   ├── runtime.go
│   ├── schema                                  # 模型目录
│   │   └── example.go
│   ├── template
│   │   ├── not_empty_update.tmpl
│   │   └── pagination.tmpl
│   └── tx.go
├── etc                                         # 配置文件目录
│   └── example.yaml
├── example.go
├── go.mod
├── go.sum
└── internal
    ├── config
    │   └── config.go
    ├── handler
    │   ├── base
    │   │   └── init_database_handler.go
    │   └── routes.go
    ├── i18n                                    # 国际化文件目录
    │   ├── locale
    │   │   ├── en.json
    │   │   └── zh.json
    │   └── vars.go
    ├── logic
    │   └── base
    │       └── init_database_logic.go
    ├── middleware
    │   └── authority_middleware.go
    ├── svc
    │   └── service_context.go
    ├── types
    │   └── types.go
    └── utils                                  # 工具目录
        ├── dberrorhandler                     # Ent错误处理工具
        │   └── error_handler.go
        └── entx                               # Ent事务支持函数
            └── ent_tx.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function O(H,F){const n=p("ExternalLinkIcon");return d(),o("div",null,[u,a("div",m,[v,b,k,a("p",null,[e("必须了解 go zero 的 API 命令 "),a("a",h,[e("API 命令"),s(n)]),e(),a("a",g,[e("api 文件编写"),s(n)]),e(),_,x,e(" 参考 "),a("a",y,[e("Example"),s(n)]),e(" 项目生成一遍，确认生成文件与 Example 项目一致，Example 项目有完整的命令")])]),a("div",f,[w,a("p",null,[a("a",q,[e("视频教程"),s(n)])])]),P,a("div",C,[E,a("p",null,[a("a",A,[e("代码"),s(n)])])]),R,z,a("blockquote",null,[a("p",null,[e("详情查看 simple admin example api 地址 "),a("a",I,[e("https://github.com/suyuan32/simple-admin-example-api"),s(n)])])]),N,a("div",j,[S,a("p",null,[a("a",U,[e("视频教程"),s(n)])])]),M,a("div",T,[D,a("p",null,[e("单体服务需要在 使用 "),B,e(" 命令时设置 "),L,e(". "),G,e(" 示例项目 "),a("a",V,[e("Single Example"),s(n)])]),Z]),J])}const X=r(c,[["render",O],["__file","api_example.html.vue"]]);export{X as default};
