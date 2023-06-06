import{_ as p,a as l}from"./ent_gen_logic-6662d943.js";import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as r,a as n,b as s,d as e,e as t}from"./app-9c019e8a.js";const u={},d=n("h1",{id:"_3-分钟开发-rpc-服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-分钟开发-rpc-服务","aria-hidden":"true"},"#"),s(" 3 分钟开发 RPC 服务")],-1),m={class:"hint-container warning"},v=n("p",{class:"hint-container-title"},"注意",-1),k=n("p",null,"首先确认你安装了以下软件:",-1),b=n("ul",null,[n("li",null,"simple-admin-tool (goctls) v1.5.5 +")],-1),g={href:"https://go-zero.dev/cn/docs/goctl/zrpc/#%E6%96%B9%E5%BC%8F%E4%BA%8C%E9%80%9A%E8%BF%87%E6%8C%87%E5%AE%9Aproto%E7%94%9F%E6%88%90rpc%E6%9C%8D%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"},h={href:"https://go-zero.dev/cn/docs/advance/rpc-call",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),f={href:"https://github.com/suyuan32/simple-admin-example-rpc",target:"_blank",rel:"noopener noreferrer"},y={class:"hint-container info"},x=n("p",{class:"hint-container-title"},"相关信息",-1),w={href:"https://www.bilibili.com/video/BV12s4y1R755",target:"_blank",rel:"noopener noreferrer"},q=t(`<h2 id="rpc-职责" tabindex="-1"><a class="header-anchor" href="#rpc-职责" aria-hidden="true">#</a> RPC 职责</h2><p>在 Simple Admin 中， RPC 主要用于获取数据以及提供扩展功能， 主要有以下职责：</p><ul><li>与数据库交互，获取所需数据， 如 PostgreSql</li><li>与数据源交互获取数据， 如 ES</li><li>提供额外功能供 API 层调用，如发短信，邮件</li></ul><p>多个不同的 API 都可以接入同一个 RPC 调用其功能。</p><h2 id="创建-rpc-基本项目" tabindex="-1"><a class="header-anchor" href="#创建-rpc-基本项目" aria-hidden="true">#</a> 创建 RPC 基本项目</h2><blockquote><p>创建 example 服务</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls rpc new example <span class="token parameter variable">--ent</span><span class="token operator">=</span>true <span class="token parameter variable">--module_name</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc <span class="token parameter variable">--go_zero_version</span><span class="token operator">=</span>v1.5.2 <span class="token parameter variable">--tool_version</span><span class="token operator">=</span>v1.5.5 <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8080</span> <span class="token parameter variable">--gitlab</span><span class="token operator">=</span>true <span class="token parameter variable">--desc</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>简单命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls rpc new example <span class="token parameter variable">-e</span> <span class="token parameter variable">-m</span> github.com/suyuan32/simple-admin-example-rpc  <span class="token parameter variable">-p</span> <span class="token number">8080</span> <span class="token parameter variable">-g</span> <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>创建项目名称仅支持小写和驼峰命名, 项目名称不能包含 rpc 字符</p></div><h3 id="rpc-new参数介绍" tabindex="-1"><a class="header-anchor" href="#rpc-new参数介绍" aria-hidden="true">#</a> <code>rpc new</code>参数介绍</h3>`,11),C=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"必须"),n("th",null,"默认值"),n("th",null,"介绍"),n("th",null,"使用方法")])],-1),z=n("tr",null,[n("td",null,"ent"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否启用 ent"),n("td",null,"true 为启用")],-1),S=n("tr",null,[n("td",null,"module_name"),n("td",null,"否"),n("td"),n("td",null,"go.mod 中的 module 名称"),n("td",null,"如果项目需要被在外部 import，需要像上面例子设置为 github 或者其他地方的仓库网址， 为空则 module 为项目名称")],-1),E=n("tr",null,[n("td",null,"style"),n("td",null,"否"),n("td",null,"go_zero"),n("td",null,"文件名格式"),n("td",null,"go_zero 为蛇形格式")],-1),R=n("td",null,"go_zero_version",-1),P=n("td",null,"否",-1),N=n("td",null,"v1.5.2",-1),D=n("td",null,"go zero 版本",-1),B={href:"https://github.com/zeromicro/go-zero/releases",target:"_blank",rel:"noopener noreferrer"},I=n("td",null,"tool_version",-1),A=n("td",null,"否",-1),M=n("td",null,"v1.5.5",-1),L=n("td",null,"simple admin tools 版本号",-1),F={href:"https://github.com/suyuan32/simple-admin-tools/releases",target:"_blank",rel:"noopener noreferrer"},T=n("tr",null,[n("td",null,"gitlab"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否生成 gitlab-ci.yml"),n("td",null,"true 为生成")],-1),U=n("tr",null,[n("td",null,"port"),n("td",null,"否"),n("td",null,"9100"),n("td",null,"端口号"),n("td",null,"服务暴露的端口号")],-1),V=n("tr",null,[n("td",null,"desc"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否拆分 proto 文件到 desc 文件夹"),n("td",null,"true 会生成 desc 文件夹")],-1),j=n("tr",null,[n("td",null,"i18n"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否启用 i18n"),n("td",null,"true 为启用")],-1),H=t(`<p>** 详细参数请在命令行查看 <code>goctls rpc new --help</code> **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls rpc new <span class="token parameter variable">--help</span>
生成 rpc 演示服务

Usage:
  goctl rpc new <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
      <span class="token parameter variable">--branch</span> string            远程 repo 的分支，与 <span class="token parameter variable">--remote</span> 一起使用
  -d, <span class="token parameter variable">--desc</span>                     是否为拆分 proto 文件创建 desc 文件夹
  -e, <span class="token parameter variable">--ent</span>                      是否在项目中使用 Ent
  -g, <span class="token parameter variable">--gitlab</span>                   是否使用 gitlab-ci
  -z, <span class="token parameter variable">--go_zero_version</span> string   用于替换的 go zero 版本，例如：v1.5.2，请参见 <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/releases<span class="token punctuation">]</span> <span class="token punctuation">(</span>default <span class="token string">&quot;v1.5.2&quot;</span><span class="token punctuation">)</span>
  -h, <span class="token parameter variable">--help</span>                     <span class="token builtin class-name">help</span> <span class="token keyword">for</span> new
      <span class="token parameter variable">--home</span> string              模板的 goctl 路径，--home 和 <span class="token parameter variable">--remote</span> 不能同时设置，如果设置了，--remote 优先级更高
  -i, <span class="token parameter variable">--i18n</span>                     是否启用 i18n 国际化
      <span class="token parameter variable">--idea</span>                     对于 idea 插件 <span class="token punctuation">[</span>可选<span class="token punctuation">]</span>
  -m, <span class="token parameter variable">--module_name</span> string       go.mod 中的模块名称，例如：github.com/suyuan32/simple-admin-core
  -p, <span class="token parameter variable">--port</span> int                 服务公开的端口 <span class="token punctuation">(</span>default <span class="token number">9110</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--remote</span> string            模板的远程 <span class="token function">git</span> repo，--home 和 <span class="token parameter variable">--remote</span> 不能同时设置，如果设置了，--remote 优先级更高
                                 Git repo 的目录结构必须与 https://github.com/zeromicro/go-zero-template 相一致
  -s, <span class="token parameter variable">--style</span> string             文件命名格式，参见 <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md<span class="token punctuation">]</span> <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
  -t, <span class="token parameter variable">--tool_version</span> string      用于迁移的 simple admin 工具版本，例如：v1.5.5，请参见 <span class="token punctuation">[</span>https://github.com/suyuan32/simple-admin-tools/releases<span class="token punctuation">]</span> <span class="token punctuation">(</span>default <span class="token string">&quot;v1.5.6&quot;</span><span class="token punctuation">)</span>
  -v, <span class="token parameter variable">--verbose</span>                  启用日志输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>你可以看到如下项目结构</p></blockquote><figure><img src="`+p+`" alt="Example" tabindex="0" loading="lazy"><figcaption>Example</figcaption></figure><h3 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── desc                                  proto 文件目录
├── ent                                   ent 文件目录
│   ├── enttest
│   ├── hook
│   ├── migrate
│   ├── predicate
│   ├── runtime
│   ├── schema                            ent schema声明目录
│   ├── student
│   ├── teacher
│   └── template
├── etc                                   配置文件目录
├── example                               grpc和types目录
├── exampleclient                         客户端client目录
└── internal
    ├── config
    ├── logic                             业务代码目录
    │   ├── base
    │   ├── student
    │   └── teacher
    ├── server
    └── svc                               全局service_context目录
    └── utils                             工具库如 ent 错误处理以及事务函数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编辑 etc/example.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> example.rpc
<span class="token key atrule">ListenOn</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">8080</span>

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

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> exampleRpcLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/data/logs/example/rpc
  <span class="token key atrule">Encoding</span><span class="token punctuation">:</span> json
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4001</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编辑-schema" tabindex="-1"><a class="header-anchor" href="#编辑-schema" aria-hidden="true">#</a> 编辑 schema</h3><p>进入目录 ent/schema, 修改 example.go, 改名为 student.go 添加 mixin 和字段 address 和 uuid</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> schema

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;entgo.io/ent&quot;</span>
 <span class="token string">&quot;entgo.io/ent/schema/field&quot;</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/ent/schema/mixins&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Student holds the schema definition for the Student entity.</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 ent<span class="token punctuation">.</span>Schema
<span class="token punctuation">}</span>

<span class="token comment">// Fields of the Student.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>Student<span class="token punctuation">)</span> <span class="token function">Fields</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ent<span class="token punctuation">.</span>Field <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ent<span class="token punctuation">.</span>Field<span class="token punctuation">{</span>
  field<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  field<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>Student<span class="token punctuation">)</span> <span class="token function">Mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ent<span class="token punctuation">.</span>Mixin <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ent<span class="token punctuation">.</span>Mixin<span class="token punctuation">{</span>
  mixins<span class="token punctuation">.</span>BaseMixin<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Edges of the Student.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>Student<span class="token punctuation">)</span> <span class="token function">Edges</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ent<span class="token punctuation">.</span>Edge <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成-ent-代码" tabindex="-1"><a class="header-anchor" href="#生成-ent-代码" aria-hidden="true">#</a> 生成 Ent 代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> gen-ent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生成-student-逻辑代码" tabindex="-1"><a class="header-anchor" href="#生成-student-逻辑代码" aria-hidden="true">#</a> 生成 Student 逻辑代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls rpc ent <span class="token parameter variable">--schema</span><span class="token operator">=</span>./ent/schema  <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--multiple</span><span class="token operator">=</span>false <span class="token parameter variable">--service_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--output</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Student <span class="token parameter variable">--group</span><span class="token operator">=</span>student <span class="token parameter variable">--proto_out</span><span class="token operator">=</span>./desc/student.proto

<span class="token function">make</span> gen-rpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rpc-ent参数介绍" tabindex="-1"><a class="header-anchor" href="#rpc-ent参数介绍" aria-hidden="true">#</a> <code>rpc ent</code>参数介绍</h3><table><thead><tr><th>参数</th><th>必须</th><th>默认值</th><th>介绍</th><th>使用方法</th></tr></thead><tbody><tr><td>schema</td><td>是</td><td></td><td>schema 文件地址</td><td>输入 Ent schema 文件夹相对路径</td></tr><tr><td>style</td><td>否</td><td>go_zero</td><td>文件名格式</td><td>go_zero 为蛇形格式</td></tr><tr><td>i18n</td><td>否</td><td>false</td><td>是否启用 i18n</td><td>true 为启用</td></tr><tr><td>service_name</td><td>是</td><td></td><td>服务名称</td><td>和 proto 文件中的 service 名称相同</td></tr><tr><td>project_name</td><td>是</td><td></td><td>项目名称</td><td>和 new 时的名称相同，和 main 文件名一致, 在 multiple 模式下需要设置，单 service 默认和 service name 相同</td></tr><tr><td>output</td><td>是</td><td></td><td>输出位置</td><td>文件输出位置，可以为相对路径，指向 main 文件目录</td></tr><tr><td>model</td><td>是</td><td></td><td>模型名称</td><td>schema 中内部 struct 名称，如 example 中的 Student</td></tr><tr><td>search_key_num</td><td>否</td><td>3</td><td>搜索字段数量（默认为 3）</td><td>列表搜索字段数量，只能自动生成 string 的字段</td></tr><tr><td>group</td><td>是</td><td></td><td>分组名称</td><td>分组名称用于将不同 logic 文件放到不同文件夹</td></tr><tr><td>multiple</td><td>否</td><td>false</td><td>多服务</td><td>若 proto 文件中有多个 service, 需要设置为 true</td></tr><tr><td>proto_out</td><td>否</td><td></td><td>是否拆分 proto 文件</td><td>若为空则会将数据生成到项目根目录的 proto 文件，否则将会生成到指定路径 desc 中，如 ./desc/student.proto, 注意存放 proto 的文件夹必须为 desc, 内部可以有子文件夹</td></tr><tr><td>proto_field_style</td><td>否</td><td>go_zero</td><td>proto 字段命名格式</td><td>默认为下划线</td></tr><tr><td>import_prefix</td><td>否</td><td></td><td>导入路径前缀</td><td>导入路径的前缀，仅用于项目位于子目录的情况，如 core 的 rpc 和 api</td></tr><tr><td>overwrite</td><td>否</td><td>false</td><td>是否覆盖生成文件</td><td>true 则会覆盖所有生成的文件</td></tr></tbody></table>`,17),G={class:"hint-container info"},O=t(`<p class="hint-container-title">相关信息</p><p>multiple 例子, multiple 用于根据不同服务生成多个 rpcclient</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>school <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Teacher <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>School <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example <span class="token parameter variable">--multiple</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),W={href:"https://github.com/suyuan32/simple-admin-example-rpc/tree/multiple-example",target:"_blank",rel:"noopener noreferrer"},$=t(`<p>详细参数请在命令行查看 <code>goctls rpc ent --help</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls rpc ent <span class="token parameter variable">--help</span>
通过 Ent 生成 CRUD 模板代码

Usage:
  goctl rpc ent <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -g, <span class="token parameter variable">--group</span> string               逻辑的组名称，例如：user
  -h, <span class="token parameter variable">--help</span>                       <span class="token builtin class-name">help</span> <span class="token keyword">for</span> ent
  -i, <span class="token parameter variable">--i18n</span>                       是否启用 i18n 国际化
  -x, <span class="token parameter variable">--import_prefix</span> string       导入路径的前缀，仅用于项目位于子目录的情况，如 core 的 rpc 和 api
  -m, <span class="token parameter variable">--model</span> string               生成的模型名称，例如：user，如果为空，则为 schema 目录中所有模型生成代码
      <span class="token parameter variable">--multiple</span>                   在多个 rpc 服务模式下生成
  -o, <span class="token parameter variable">--output</span> string              输出路径
  -w, <span class="token parameter variable">--overwrite</span>                  是否覆盖文件，它将覆盖所有生成的文件
  -p, <span class="token parameter variable">--project_name</span> string        项目名称
  -f, <span class="token parameter variable">--proto_field_style</span> string   proto 字段样式 <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
  -t, <span class="token parameter variable">--proto_out</span> string           输出 proto 文件路径
  -c, <span class="token parameter variable">--schema</span> string              Ent 的 schema 路径
  -k, <span class="token parameter variable">--search_key_num</span> int         搜索键的最大数量 <span class="token punctuation">(</span>default <span class="token number">3</span><span class="token punctuation">)</span>
  -r, <span class="token parameter variable">--service_name</span> string        服务名称
  -s, <span class="token parameter variable">--style</span> string               文件名格式样式 <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意： 工具会自动识别 desc 文件夹中的 proto 文件，desc 内部也可以创建子文件夹，package 和 go_package 只需在 base.proto 声明一次， 工具会自动将所有 proto 文件合并至项目根目录的 proto 文件中。旧项目拆分 proto 文件只需将根目录下的 proto 自行拆分至 desc 文件夹即可。</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>快捷命令：<code>make gen-rpc-ent-logic model={modelName} group={groupName}</code> 表示生成 schema 为 <code>{modelName}</code> 的代码，<code>{groupName}</code>为分组名称，注意 modelName 需要首字母大写，和 schema 中的 struct 名称保持一致</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成 schema 中的 Student 结构</span>
<span class="token function">make</span> gen-rpc-ent-logic <span class="token assign-left variable">model</span><span class="token operator">=</span>Student <span class="token assign-left variable">group</span><span class="token operator">=</span>student

<span class="token function">make</span> gen-rpc

<span class="token comment"># 可能需要运行下</span>
go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="logic" tabindex="0" loading="lazy"><figcaption>logic</figcaption></figure><p>可以看到 crud 代码已生成</p><blockquote><p>proto 文件代码</p></blockquote><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> example<span class="token punctuation">;</span>
<span class="token keyword">option</span> go_package<span class="token operator">=</span><span class="token string">&quot;./example&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">Empty</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">IDReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">IDsReq</span> <span class="token punctuation">{</span>
  <span class="token keyword">repeated</span> <span class="token builtin">uint64</span> ids <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">UUIDReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> uuid <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">BaseResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> msg <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">PageInfoReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> page_size <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// Student message</span>

<span class="token keyword">message</span> <span class="token class-name">StudentInfo</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> created_at <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> updated_at <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> age <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">StudentListResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> total <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">StudentInfo</span> data <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">StudentPageReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> page_size <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">service</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
  <span class="token comment">// group: base</span>
  <span class="token keyword">rpc</span> <span class="token function">initDatabase</span> <span class="token punctuation">(</span><span class="token class-name">Empty</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Student management</span>
  <span class="token comment">// group: student</span>
  <span class="token keyword">rpc</span> <span class="token function">createOrUpdateStudent</span> <span class="token punctuation">(</span><span class="token class-name">StudentInfo</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// group: student</span>
  <span class="token keyword">rpc</span> <span class="token function">getStudentList</span> <span class="token punctuation">(</span><span class="token class-name">StudentPageReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">StudentListResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// group: student</span>
  <span class="token keyword">rpc</span> <span class="token function">deleteStudent</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// group: student</span>
  <span class="token keyword">rpc</span> <span class="token function">batchDeleteStudent</span> <span class="token punctuation">(</span><span class="token class-name">IDsReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 group 注释给 rpc 分组</p><blockquote><p>然后代码就可以运行啦 !</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run example.go <span class="token parameter variable">-f</span> etc/example.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>如果看到</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Starting server at <span class="token number">127.0</span>.0.1:8080<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明运行成功.</p>`,15),K={class:"hint-container warning"},J=n("p",{class:"hint-container-title"},"注意",-1),Q={href:"https://github.com/suyuan32/simple-admin-member-rpc/blob/main/internal/logic/base/init_database_logic.go",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/suyuan32/simple-admin-example-rpc",target:"_blank",rel:"noopener noreferrer"},Y=t(`<h2 id="simple-admin-example-api-中如何远程调用该-rpc" tabindex="-1"><a class="header-anchor" href="#simple-admin-example-api-中如何远程调用该-rpc" aria-hidden="true">#</a> simple admin example api 中如何远程调用该 RPC</h2><h3 id="添加-config" tabindex="-1"><a class="header-anchor" href="#添加-config" aria-hidden="true">#</a> 添加 config</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/config&quot;</span>
 <span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
 <span class="token string">&quot;github.com/zeromicro/go-zero/rest&quot;</span>
 <span class="token string">&quot;github.com/zeromicro/go-zero/zrpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 rest<span class="token punctuation">.</span>RestConf
 Auth         rest<span class="token punctuation">.</span>AuthConf
 DatabaseConf config<span class="token punctuation">.</span>DatabaseConf
 RedisConf    redis<span class="token punctuation">.</span>RedisConf
 CasbinConf   config<span class="token punctuation">.</span>CasbinConf
 ExampleRpc   zrpc<span class="token punctuation">.</span>RpcClientConf
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-example-rpc" tabindex="-1"><a class="header-anchor" href="#添加-example-rpc" aria-hidden="true">#</a> 添加 example rpc</h3><blockquote><p>修改 service context</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-example-rpc/exampleclient&quot;</span>
 <span class="token string">&quot;github.com/zeromicro/go-zero/zrpc&quot;</span>

 <span class="token string">&quot;github.com/suyuan32/simple-admin-example-api/internal/config&quot;</span>
 i18n2 <span class="token string">&quot;github.com/suyuan32/simple-admin-example-api/internal/i18n&quot;</span>
 <span class="token string">&quot;github.com/suyuan32/simple-admin-example-api/internal/middleware&quot;</span>

 <span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/i18n&quot;</span>

 <span class="token string">&quot;github.com/casbin/casbin/v2&quot;</span>
 <span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
 <span class="token string">&quot;github.com/zeromicro/go-zero/rest&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ServiceContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Config     config<span class="token punctuation">.</span>Config
 ExampleRpc exampleclient<span class="token punctuation">.</span>Example
 Casbin     <span class="token operator">*</span>casbin<span class="token punctuation">.</span>Enforcer
 Authority  rest<span class="token punctuation">.</span>Middleware
 Trans      <span class="token operator">*</span>i18n<span class="token punctuation">.</span>Translator
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>ServiceContext <span class="token punctuation">{</span>

 rds <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">MustNewRedis</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">)</span>

 cbn <span class="token operator">:=</span> c<span class="token punctuation">.</span>CasbinConf<span class="token punctuation">.</span><span class="token function">MustNewCasbinWithRedisWatcher</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span>Type<span class="token punctuation">,</span> c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span><span class="token function">GetDSN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">)</span>

 trans <span class="token operator">:=</span> i18n<span class="token punctuation">.</span><span class="token function">NewTranslator</span><span class="token punctuation">(</span>i18n2<span class="token punctuation">.</span>LocaleFS<span class="token punctuation">)</span>

 <span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceContext<span class="token punctuation">{</span>
  Config<span class="token punctuation">:</span>     c<span class="token punctuation">,</span>
  Authority<span class="token punctuation">:</span>  middleware<span class="token punctuation">.</span><span class="token function">NewAuthorityMiddleware</span><span class="token punctuation">(</span>cbn<span class="token punctuation">,</span> rds<span class="token punctuation">)</span><span class="token punctuation">.</span>Handle<span class="token punctuation">,</span>
  Trans<span class="token punctuation">:</span>      trans<span class="token punctuation">,</span>
  ExampleRpc<span class="token punctuation">:</span> exampleclient<span class="token punctuation">.</span><span class="token function">NewExample</span><span class="token punctuation">(</span>zrpc<span class="token punctuation">.</span><span class="token function">NewClientIfEnable</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>ExampleRpc<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 logic 直接调用 l.svcCtx.ExampleRpc 即可</p>`,7),Z={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"};function nn(sn,an){const a=o("ExternalLinkIcon");return c(),r("div",null,[d,n("div",m,[v,k,b,n("p",null,[s("必须了解 go zero 的 RPC 命令 "),n("a",g,[s("RPC 命令"),e(a)]),s(),n("a",h,[s("RPC 服务"),e(a)]),_,s(" 参考 "),n("a",f,[s("Example"),e(a)]),s(" 项目生成一遍，确认生成文件与 Example 项目一致，Example 项目有完整的命令")])]),n("div",y,[x,n("p",null,[n("a",w,[s("视频教程"),e(a)])])]),q,n("table",null,[C,n("tbody",null,[z,S,E,n("tr",null,[R,P,N,D,n("td",null,[s("需要到"),n("a",B,[s("go-zero"),e(a)]),s("查看最新 release")])]),n("tr",null,[I,A,M,L,n("td",null,[s("需要到"),n("a",F,[s("tool"),e(a)]),s("查看 simple admin tools 最新 release")])]),T,U,V,j])]),H,n("div",G,[O,n("p",null,[n("a",W,[s("示例代码"),e(a)])])]),$,n("div",K,[J,n("p",null,[s("后续还需要修改数据库初始化函数，参考 "),n("a",Q,[s("simple admin member"),e(a)])])]),n("blockquote",null,[n("p",null,[s("项目地址 "),n("a",X,[s("https://github.com/suyuan32/simple-admin-example-rpc"),e(a)])])]),Y,n("blockquote",null,[n("p",null,[s("simple admin example api 地址 "),n("a",Z,[s("https://github.com/suyuan32/simple-admin-example-api"),e(a)])])])])}const ln=i(u,[["render",nn],["__file","rpc_example.html.vue"]]);export{ln as default};
