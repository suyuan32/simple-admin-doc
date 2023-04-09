import{_ as l,a as i}from"./api_gen_struct-3403667f.js";import{_ as r,W as o,X as p,Y as n,Z as e,$ as s,a0 as t,D as c}from"./framework-2d2f73c4.js";const d={},u=n("h1",{id:"_3-分钟开发-api-服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-分钟开发-api-服务","aria-hidden":"true"},"#"),e(" 3 分钟开发 API 服务")],-1),m={class:"hint-container warning"},v=n("p",{class:"hint-container-title"},"注意",-1),b=n("p",null,"首先确认你安装了以下软件:",-1),k=n("ul",null,[n("li",null,"simple-admin-tool (goctls) v0.3.2 +")],-1),h={href:"https://go-zero.dev/cn/docs/goctl/api",target:"_blank",rel:"noopener noreferrer"},g={href:"https://go-zero.dev/cn/docs/advance/api-coding",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),f=n("br",null,null,-1),y={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"},x=t(`<h2 id="api-服务的职责" tabindex="-1"><a class="header-anchor" href="#api-服务的职责" aria-hidden="true">#</a> API 服务的职责</h2><p>在 simple admin 中， API 服务充当网关的角色，主要提供以下功能：</p><ul><li>用户鉴权， 如 JWT</li><li>数据处理， 如数据过滤筛选，国际化翻译</li><li>限流和熔断</li></ul><p>一个 API 可以接入多个 RPC， 提供统一的请求入口</p><h2 id="创建-api-项目" tabindex="-1"><a class="header-anchor" href="#创建-api-项目" aria-hidden="true">#</a> 创建 API 项目</h2><p>创建 example</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api new example <span class="token parameter variable">--i18n</span><span class="token operator">=</span>true <span class="token parameter variable">--casbin</span><span class="token operator">=</span>true <span class="token parameter variable">--go_zero_version</span><span class="token operator">=</span>v1.5.1 <span class="token parameter variable">--tool_version</span><span class="token operator">=</span>v0.3.2 <span class="token parameter variable">--trans_err</span><span class="token operator">=</span>true <span class="token parameter variable">--module_name</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-api <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8081</span> <span class="token parameter variable">--gitlab</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-new-参数介绍" tabindex="-1"><a class="header-anchor" href="#api-new-参数介绍" aria-hidden="true">#</a> <code>api new</code> 参数介绍</h3>`,8),w=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"必须"),n("th",null,"默认值"),n("th",null,"介绍"),n("th",null,"使用方法")])],-1),T=n("tr",null,[n("td",null,"i18n"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否启用 i18n"),n("td",null,"true 为启用")],-1),z=n("tr",null,[n("td",null,"casbin"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否启用 casbin"),n("td",null,"true 为启用")],-1),P=n("tr",null,[n("td",null,"module_name"),n("td",null,"是"),n("td"),n("td",null,"go.mod 中的 module 名称"),n("td",null,"如果项目需要被在外部 import，需要像上面例子设置为 github 或者其他地方的仓库网址， 为空则只在本地使用")],-1),q=n("td",null,"go_zero_version",-1),E=n("td",null,"是",-1),C=n("td",null,null,-1),N=n("td",null,"go zero 版本",-1),A={href:"https://github.com/zeromicro/go-zero/releases",target:"_blank",rel:"noopener noreferrer"},j=n("td",null,"tool_version",-1),I=n("td",null,"是",-1),S=n("td",null,null,-1),R=n("td",null,"simple admin tools 版本号",-1),W={href:"https://github.com/suyuan32/simple-admin-tools/releases",target:"_blank",rel:"noopener noreferrer"},D=n("tr",null,[n("td",null,"trans_err"),n("td",null,"否"),n("td",null,"false"),n("td",null,"国际化翻译错误信息"),n("td",null,"true 为启用")],-1),M=n("tr",null,[n("td",null,"gitlab"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否生成 gitlab-ci.yml"),n("td",null,"true 为生成")],-1),Z=n("tr",null,[n("td",null,"port"),n("td",null,"否"),n("td",null,"9100"),n("td",null,"端口号"),n("td",null,"服务暴露的端口号")],-1),G=n("tr",null,[n("td",null,"ent"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否启用 Ent"),n("td",null,"true 为启用，启用 Ent 可用于单体 API 服务")],-1),L=t(`<p><strong>详细参数请在命令行查看 <code>goctls api new --help</code></strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls api new <span class="token parameter variable">--help</span>
Fast create api <span class="token function">service</span>

Usage:
  goctl api new <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
      <span class="token parameter variable">--branch</span> string            The branch of the remote repo, it does work with <span class="token parameter variable">--remote</span>
  -c, <span class="token parameter variable">--casbin</span>                   Whether to use the Casbin
  -e, <span class="token parameter variable">--ent</span>                      Whether to use Ent <span class="token keyword">in</span> API <span class="token function">service</span>
  -g, <span class="token parameter variable">--gitlab</span>                   Whether to use gitlab CI/CD
  -z, <span class="token parameter variable">--go_zero_version</span> string   The go zero version used <span class="token keyword">for</span> replacement. e.g. v1.5.0, see <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/releases<span class="token punctuation">]</span>
  -h, <span class="token parameter variable">--help</span>                     <span class="token builtin class-name">help</span> <span class="token keyword">for</span> new
      <span class="token parameter variable">--home</span> string              The goctl home path of the template, <span class="token parameter variable">--home</span> and <span class="token parameter variable">--remote</span> cannot be <span class="token builtin class-name">set</span> at the same time, <span class="token keyword">if</span> they are, <span class="token parameter variable">--remote</span> has higher priority
  -i, <span class="token parameter variable">--i18n</span>                     Whether to use i18n
  -m, <span class="token parameter variable">--module_name</span> string       The module name <span class="token keyword">in</span> go.mod. e.g. github.com/suyuan32/simple-admin-core
  -p, <span class="token parameter variable">--port</span> int                 The <span class="token function">service</span> port exposed <span class="token punctuation">(</span>default <span class="token number">9100</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--remote</span> string            The remote <span class="token function">git</span> repo of the template, <span class="token parameter variable">--home</span> and <span class="token parameter variable">--remote</span> cannot be <span class="token builtin class-name">set</span> at the same time, <span class="token keyword">if</span> they are, <span class="token parameter variable">--remote</span> has higher priority
                                 The <span class="token function">git</span> repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
  -s, <span class="token parameter variable">--style</span> string             The <span class="token function">file</span> naming format, see <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md<span class="token punctuation">]</span> <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
  -t, <span class="token parameter variable">--tool_version</span> string      The simple admin tool version version used <span class="token keyword">for</span> migration. e.g. v0.3.0, see <span class="token punctuation">[</span>https://github.com/suyuan32/simple-admin-tools/releases<span class="token punctuation">]</span>
  -a, <span class="token parameter variable">--trans_err</span>                Whether to translate the error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>你可以看到以下结构</p></blockquote><figure><img src="`+i+`" alt="Example" tabindex="0" loading="lazy"><figcaption>Example</figcaption></figure><h3 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── desc                              api声明文件存放目录
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明运行成功.</p><h2 id="代码生成-基于-proto" tabindex="-1"><a class="header-anchor" href="#代码生成-基于-proto" aria-hidden="true">#</a> 代码生成（基于 Proto）</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>proto 必须为 <code>goctls rpc ent</code> 生成的 proto</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--output</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Student <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-proto-参数介绍" tabindex="-1"><a class="header-anchor" href="#api-proto-参数介绍" aria-hidden="true">#</a> <code>api proto</code> 参数介绍</h3>`,17),U=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"必须"),n("th",null,"默认值"),n("th",null,"介绍"),n("th",null,"使用方法")])],-1),B=n("tr",null,[n("td",null,"proto"),n("td",null,"是"),n("td"),n("td",null,"proto 文件地址"),n("td",null,[e("输入 proto 文件的绝对路径。 "),n("strong",null,"注意要为合并后的 proto 即根目录下的 proto ，不是 desc 文件夹中的，因为要获取 package 和 Base 结构")])],-1),J=n("tr",null,[n("td",null,"style"),n("td",null,"否"),n("td",null,"go_zero"),n("td",null,"文件名格式"),n("td",null,"go_zero 为蛇形格式")],-1),O=n("tr",null,[n("td",null,"api_service_name"),n("td",null,"是"),n("td"),n("td",null,"服务名称"),n("td",null,"api 服务的 service 名称, 在 api 声明文件中")],-1),F=n("tr",null,[n("td",null,"rpc_service_name"),n("td",null,"是"),n("td"),n("td",null,"服务名称"),n("td",null,"rpc 服务的名称, 与 proto 文件中的 service 名称一致")],-1),H=n("tr",null,[n("td",null,"output"),n("td",null,"是"),n("td"),n("td",null,"输出位置"),n("td",null,"文件输出位置，可以为相对路径，指向 main 文件目录")],-1),V=n("tr",null,[n("td",null,"model"),n("td",null,"是"),n("td"),n("td",null,"模型名称"),n("td",null,"schema 中内部 struct 名称，如 example 中的 Student")],-1),$=n("tr",null,[n("td",null,"rpc_name"),n("td",null,"是"),n("td"),n("td",null,"RPC 名称"),n("td",null,"输入 Example 则生成文件会生成 l.svcCtx.ExampleRpc")],-1),K=n("td",null,"grpc_package",-1),X=n("td",null,"是",-1),Y=n("td",null,null,-1),Q=n("td",null,"RPC *_grpc.go 包路径",-1),nn={href:"http://github.com/suyuan32/simple-admin-example-rpc/example",target:"_blank",rel:"noopener noreferrer"},en=n("tr",null,[n("td",null,"multiple"),n("td",null,"否"),n("td",null,"false"),n("td",null,"多服务"),n("td",null,"若 proto 文件中有多个 service, 需要设置为 true")],-1),an=n("tr",null,[n("td",null,"json_style"),n("td",null,"否"),n("td",null,"goZero"),n("td",null,"JSON tag 的格式，默认为小驼峰"),n("td",null,"go_zero 为下划线， GoZero 为大驼峰")],-1),sn=n("tr",null,[n("td",null,"overwrite"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否覆盖生成文件"),n("td",null,"true 则会覆盖所有生成的文件")],-1),tn=t(`<p><strong>详细参数请在命令行查看 <code>goctls api proto --help</code></strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls api proto <span class="token parameter variable">--help</span>
Generate CRUD template from proto <span class="token function">file</span>

Usage:
  goctl api proto <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -a, <span class="token parameter variable">--api_service_name</span> string   The API <span class="token function">service</span> name
  -g, <span class="token parameter variable">--grpc_package</span> string       The rpc package <span class="token function">which</span> stores pb file. e.g. github.com/suyuan32/simple-admin-job/types/job
  -h, <span class="token parameter variable">--help</span>                      <span class="token builtin class-name">help</span> <span class="token keyword">for</span> proto
  -j, <span class="token parameter variable">--json_style</span> string         The JSON tag format, default is camelcase <span class="token punctuation">(</span>default <span class="token string">&quot;goZero&quot;</span><span class="token punctuation">)</span>
  -m, <span class="token parameter variable">--model</span> string              The model name <span class="token keyword">for</span> generating e.g. user, <span class="token keyword">if</span> it is empty, generate codes <span class="token keyword">for</span> all models <span class="token keyword">in</span> schema directory
      <span class="token parameter variable">--multiple</span>                  Whether the proto contains multiple services
  -o, <span class="token parameter variable">--output</span> string             The output path
  -w, <span class="token parameter variable">--overwrite</span>                 Whether to overwrite the files, it will overwrite all generated files
  -p, <span class="token parameter variable">--proto</span> string              The proto path
  -n, <span class="token parameter variable">--rpc_name</span> string           The rpc name <span class="token keyword">in</span> <span class="token function">service</span> context. e.g. CoreRpc
  -r, <span class="token parameter variable">--rpc_service_name</span> string   The RPC <span class="token function">service</span> name
  -k, <span class="token parameter variable">--search_key_num</span> int        The max number of search keys <span class="token punctuation">(</span>default <span class="token number">3</span><span class="token punctuation">)</span>
  -s, <span class="token parameter variable">--style</span> string              The <span class="token function">file</span> name <span class="token function">format</span> style <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ln={class:"hint-container info"},rn=t(`<p class="hint-container-title">相关信息</p><p>multiple 例子, multiple 用于根据不同服务生成多个 rpcclient</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>school <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Teacher <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>School <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example <span class="token parameter variable">--multiple</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),on={href:"https://github.com/suyuan32/simple-admin-example-api/tree/multiple",target:"_blank",rel:"noopener noreferrer"},pn=n("blockquote",null,[n("p",null,"生成效果")],-1),cn=n("figure",null,[n("img",{src:l,alt:"pic",tabindex:"0",loading:"lazy"}),n("figcaption",null,"pic")],-1),dn={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"},un=t('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>还需要手动添加<code>ExampleRpc</code>到<code>service_context</code>, <code>config</code>, <code>etc</code></p></div><h2 id="代码生成-基于-ent-的单体服务" tabindex="-1"><a class="header-anchor" href="#代码生成-基于-ent-的单体服务" aria-hidden="true">#</a> 代码生成 (基于 Ent 的单体服务)</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>如果你的项目较小， 单体 API 服务比较适合你。直接在 API 层操作数据库，无需连接 RPC。</p></div>',3),mn={class:"hint-container warning"},vn=n("p",{class:"hint-container-title"},"注意",-1),bn=n("code",null,"api new",-1),kn=n("code",null,"--ent=true",-1),hn=n("br",null,null,-1),gn={href:"https://github.com/suyuan32/simple-admin-example-api-single",target:"_blank",rel:"noopener noreferrer"},_n=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api ent <span class="token parameter variable">--schema</span><span class="token operator">=</span>./ent/schema <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--output</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span><span class="token punctuation">{</span>modelName<span class="token punctuation">}</span> <span class="token parameter variable">--group</span><span class="token operator">=</span><span class="token punctuation">{</span>groupName<span class="token punctuation">}</span> <span class="token parameter variable">--search_key_num</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">--overwrite</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>必须</th><th>默认值</th><th>介绍</th><th>使用方法</th></tr></thead><tbody><tr><td>schema</td><td>是</td><td></td><td>schema 文件地址</td><td>输入 Ent schema 文件夹相对路径</td></tr><tr><td>style</td><td>否</td><td>go_zero</td><td>文件名格式</td><td>go_zero 为蛇形格式</td></tr><tr><td>api_service_name</td><td>是</td><td></td><td>服务名称</td><td>api 服务的 service 名称, 在 api 声明文件中</td></tr><tr><td>output</td><td>是</td><td></td><td>输出位置</td><td>文件输出位置，可以为相对路径，指向 main 文件目录</td></tr><tr><td>model</td><td>是</td><td></td><td>模型名称</td><td>schema 中内部 struct 名称，如 example 中的 Student</td></tr><tr><td>search_key_num</td><td>否</td><td>3</td><td>搜索字段数量（默认为 3）</td><td>列表搜索字段数量，只能自动生成 string 的字段</td></tr><tr><td>group</td><td>是</td><td></td><td>分组名称</td><td>分组名称用于将不同 logic 文件放到不同文件夹</td></tr><tr><td>json_style</td><td>否</td><td>goZero</td><td>JSON tag 的格式，默认为小驼峰</td><td>go_zero 为下划线， GoZero 为大驼峰</td></tr><tr><td>overwrite</td><td>否</td><td>false</td><td>是否覆盖生成文件</td><td>true 则会覆盖所有生成的文件</td></tr></tbody></table><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>快捷命令 <code>make gen-api-ent-logic model={modelName} group={groupName}</code> 表示生成 schema 为 <code>{modelName}</code> 的代码，<code>{groupName}</code>为分组名称，注意 modelName 需要首字母大写，和 schema 中的 struct 名称保持一致</p></div><blockquote><p>** 运行 <code>goctls api ent --help</code> 查看详细命令 **</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls api ent <span class="token parameter variable">--help</span>
Generate CRUD logic files from ent <span class="token function">file</span>

Usage:
  goctl api ent <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -a, <span class="token parameter variable">--api_service_name</span> string   The API <span class="token function">service</span> name
  -g, <span class="token parameter variable">--group</span> string              The group name <span class="token keyword">for</span> logic. e.g. user
  -h, <span class="token parameter variable">--help</span>                      <span class="token builtin class-name">help</span> <span class="token keyword">for</span> ent
  -j, <span class="token parameter variable">--json_style</span> string         The JSON tag format, default is camelcase <span class="token punctuation">(</span>default <span class="token string">&quot;goZero&quot;</span><span class="token punctuation">)</span>
  -m, <span class="token parameter variable">--model</span> string              The model name <span class="token keyword">for</span> generating e.g. user, <span class="token keyword">if</span> it is empty, generate codes <span class="token keyword">for</span> all models <span class="token keyword">in</span> schema directory
  -o, <span class="token parameter variable">--output</span> string             The output path
  -w, <span class="token parameter variable">--overwrite</span>                 Whether to overwrite the files, it will overwrite all generated files
  -c, <span class="token parameter variable">--schema</span> string             The schema path of the Ent
  -k, <span class="token parameter variable">--search_key_num</span> int        The max number of search keys <span class="token punctuation">(</span>default <span class="token number">3</span><span class="token punctuation">)</span>
  -s, <span class="token parameter variable">--style</span> string              The <span class="token function">file</span> name <span class="token function">format</span> style <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function fn(yn,xn){const a=c("ExternalLinkIcon");return o(),p("div",null,[u,n("div",m,[v,b,k,n("p",null,[e("必须了解 go zero 的 API 命令 "),n("a",h,[e("API 命令"),s(a)]),e(),n("a",g,[e("api 文件编写"),s(a)]),e(),_,f,e(" 参考 "),n("a",y,[e("Example"),s(a)]),e(" 项目生成一遍，确认生成文件与 Example 项目一致，Example 项目有完整的命令")])]),x,n("table",null,[w,n("tbody",null,[T,z,P,n("tr",null,[q,E,C,N,n("td",null,[e("需要到"),n("a",A,[e("go-zero"),s(a)]),e("查看最新 release")])]),n("tr",null,[j,I,S,R,n("td",null,[e("需要到"),n("a",W,[e("tool"),s(a)]),e("查看 simple admin tools 最新 release")])]),D,M,Z,G])]),L,n("table",null,[U,n("tbody",null,[B,J,O,F,H,V,$,n("tr",null,[K,X,Y,Q,n("td",null,[e("在 example 中是 "),n("a",nn,[e("github.com/suyuan32/simple-admin-example-rpc/example"),s(a)])])]),en,an,sn])]),tn,n("div",ln,[rn,n("p",null,[n("a",on,[e("代码"),s(a)])])]),pn,cn,n("blockquote",null,[n("p",null,[e("详情查看 simple admin example api 地址 "),n("a",dn,[e("https://github.com/suyuan32/simple-admin-example-api"),s(a)])])]),un,n("div",mn,[vn,n("p",null,[e("单体服务需要在 使用 "),bn,e(" 命令时设置 "),kn,e(". "),hn,e(" 示例项目 "),n("a",gn,[e("Single Example"),s(a)])])]),_n])}const zn=r(d,[["render",fn],["__file","api_example.html.vue"]]);export{zn as default};
