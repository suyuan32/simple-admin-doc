import{_ as i,a as p}from"./ent_gen_logic-6662d943.js";import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as r,a as n,b as s,d as e,e as t}from"./app-42d49464.js";const d={},u=n("h1",{id:"_3-minutes-developing-rpc-service",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-minutes-developing-rpc-service","aria-hidden":"true"},"#"),s(" 3 minutes developing RPC service")],-1),m={class:"hint-container warning"},v=n("p",{class:"hint-container-title"},"Note",-1),k=n("p",null,"Make sure that you have been installed follow software:",-1),b=n("ul",null,[n("li",null,"simple-admin-tool (goctls) v1.5.5 +")],-1),h=n("br",null,null,-1),g={href:"https://go-zero.dev/docs/goctl/zrpc/#%E6%96%B9%E5%BC%8F%E4%BA%8C%E9%80%9A%E8%BF%87%E6%8C%87%E5%AE%9Aproto%E7%94%9F%E6%88%90rpc%E6%9C%8D%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"},f={href:"https://go-zero.dev/docs/advance/rpc-call",target:"_blank",rel:"noopener noreferrer"},y=n("br",null,null,-1),_=n("br",null,null,-1),x={href:"https://github.com/suyuan32/simple-admin-example-rpc",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"rpc-responsibilities",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rpc-responsibilities","aria-hidden":"true"},"#"),s(" RPC Responsibilities")],-1),q=n("p",null,"In Simple Admin, RPC is mainly used to obtain data and provide extended functions. It mainly has the following responsibilities:",-1),C=n("ul",null,[n("li",null,"Interact with the database to obtain the required data, such as PostgreSql"),n("li",null,"Interact with data sources to obtain data, such as ES"),n("li",null,"Provide additional functions for API layer calls, such as sending text messages and emails")],-1),E=n("p",null,"Multiple different APIs can access the same RPC to call its functions.",-1),S={class:"hint-container info"},R=n("p",{class:"hint-container-title"},"Info",-1),T={href:"https://youtu.be/Yv7d2EKy9ZE",target:"_blank",rel:"noopener noreferrer"},z=t(`<h2 id="create-rpc-project" tabindex="-1"><a class="header-anchor" href="#create-rpc-project" aria-hidden="true">#</a> Create RPC project</h2><blockquote><p>Create example project</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls rpc new example <span class="token parameter variable">--ent</span><span class="token operator">=</span>true <span class="token parameter variable">--module_name</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8080</span> <span class="token parameter variable">--desc</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Simpler Command</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls rpc new example <span class="token parameter variable">-e</span> <span class="token parameter variable">-m</span> github.com/suyuan32/simple-admin-example-rpc  <span class="token parameter variable">-p</span> <span class="token number">8080</span> <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The project name only supports lowercase and camelcase and must be not contains <code>rpc</code> words.</p></div><h3 id="rpc-new-parameters" tabindex="-1"><a class="header-anchor" href="#rpc-new-parameters" aria-hidden="true">#</a> <code>rpc new</code> parameters</h3><table><thead><tr><th>Parameter</th><th>Must</th><th>Default</th><th>Introduction</th><th>Usage</th></tr></thead><tbody><tr><td>ent</td><td>No</td><td>false</td><td>Whether to use Ent</td><td>true means use</td></tr><tr><td>i18n</td><td>No</td><td>false</td><td>Whether to use i18n</td><td>true means use</td></tr><tr><td>module_name</td><td>No</td><td></td><td>Module name in go.mod</td><td>If your project will be used by other project, you should set as above which is a github repository. If it is empty, the module will be the same as project name.</td></tr><tr><td>port</td><td>No</td><td>9100</td><td>Port number</td><td>The service port</td></tr><tr><td>desc</td><td>No</td><td>false</td><td>Whether to split the proto file into the desc folder</td><td>true will generate the desc folder</td></tr><tr><td>style</td><td>No</td><td>go_zero</td><td>The format of the file name.</td><td>snake case format is go_zero.</td></tr></tbody></table><p>** More parameters please check <code>goctls rpc new --help</code> **</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls rpc new <span class="token parameter variable">--help</span>
Generate rpc demo <span class="token function">service</span>

Usage:
  goctl rpc new <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
      <span class="token parameter variable">--branch</span> string            The branch of the remote repo, it does work with <span class="token parameter variable">--remote</span>
  -d, <span class="token parameter variable">--desc</span>                     Whether to create desc folder <span class="token keyword">for</span> splitting proto files
  -e, <span class="token parameter variable">--ent</span>                      Whether use Ent <span class="token keyword">in</span> project
  -h, <span class="token parameter variable">--help</span>                     <span class="token builtin class-name">help</span> <span class="token keyword">for</span> new
      <span class="token parameter variable">--home</span> string              The goctl home path of the template, <span class="token parameter variable">--home</span> and <span class="token parameter variable">--remote</span> cannot be <span class="token builtin class-name">set</span> at the same time, <span class="token keyword">if</span> they are, <span class="token parameter variable">--remote</span> has higher priority
  -i, <span class="token parameter variable">--i18n</span>                     Whether to use i18n
      <span class="token parameter variable">--idea</span>                     For idea plugin <span class="token punctuation">[</span>optional<span class="token punctuation">]</span>
  -m, <span class="token parameter variable">--module_name</span> string       The module name <span class="token keyword">in</span> go.mod. e.g. github.com/suyuan32/simple-admin-core
  -p, <span class="token parameter variable">--port</span> int                 The <span class="token function">service</span> port exposed <span class="token punctuation">(</span>default <span class="token number">9110</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--remote</span> string            The remote <span class="token function">git</span> repo of the template, <span class="token parameter variable">--home</span> and <span class="token parameter variable">--remote</span> cannot be <span class="token builtin class-name">set</span> at the same time, <span class="token keyword">if</span> they are, <span class="token parameter variable">--remote</span> has higher priority
                                 The <span class="token function">git</span> repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure
  -s, <span class="token parameter variable">--style</span> string             The <span class="token function">file</span> naming format, see <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md<span class="token punctuation">]</span> <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
  -v, <span class="token parameter variable">--verbose</span>                  Enable log output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>You can see the project structure:</p></blockquote><figure><img src="`+i+`" alt="Example" tabindex="0" loading="lazy"><figcaption>Example</figcaption></figure><h3 id="file-structure" tabindex="-1"><a class="header-anchor" href="#file-structure" aria-hidden="true">#</a> File structure</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── desc                               proto file directory
├── ent                                ent file directory
│ ├── enttest
│ ├── hook
│ ├── migrate
│ ├── predicate
│ ├── runtime
│ ├── schema                            ent schema declaration directory
│ ├── student
│ ├── teacher
│ └── template
├── etc                                 configuration file directory
├── example                             grpc and types directory
├── exampleclient                       client directory
└── internal
     ├──config
     ├── logic                          logic code directory
     │ ├── base
     │ ├── student
     │ └── teacher
     ├── server
     └── svc                            global service_context directory
     └── utils                          tools such as ent error handler and ent transaction function

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And then edit etc/example.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> example.rpc
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="edit-schema" tabindex="-1"><a class="header-anchor" href="#edit-schema" aria-hidden="true">#</a> Edit schema</h3><p>Enter ent/schema, change example.go into student.go, adding mixins and the fields address, uuid</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> schema

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="generate-ent-code" tabindex="-1"><a class="header-anchor" href="#generate-ent-code" aria-hidden="true">#</a> Generate Ent code</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> gen-ent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="generate-student-crud-logic-codes" tabindex="-1"><a class="header-anchor" href="#generate-student-crud-logic-codes" aria-hidden="true">#</a> Generate Student CRUD logic codes</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls rpc ent <span class="token parameter variable">--schema</span><span class="token operator">=</span>./ent/schema  <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--multiple</span><span class="token operator">=</span>false <span class="token parameter variable">--service_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--output</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Student <span class="token parameter variable">--group</span><span class="token operator">=</span>student <span class="token parameter variable">--proto_out</span><span class="token operator">=</span>./desc/student.proto

<span class="token function">make</span> gen-rpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rpc-ent-parameters" tabindex="-1"><a class="header-anchor" href="#rpc-ent-parameters" aria-hidden="true">#</a> <code>rpc ent</code> parameters</h3><table><thead><tr><th>Parameters</th><th>Must</th><th>Default</th><th>Introduction</th><th>Usage</th></tr></thead><tbody><tr><td>schema</td><td>Yes</td><td></td><td>Schema folder</td><td>Input the relative path of Ent schema</td></tr><tr><td>style</td><td>No</td><td>go_zero</td><td>File name format</td><td>The go_zero means snack format</td></tr><tr><td>service_name</td><td>Yes</td><td></td><td>service name</td><td>The same as the service name in the proto file</td></tr><tr><td>project_name</td><td>Yes</td><td></td><td>project name</td><td>Same as the name you create project, same as main file name, needs to be set in multiple mode, single service is same as service name by default</td></tr><tr><td>output</td><td>Yes</td><td></td><td>Output path</td><td>The output path，it can be relative path. It should target to the root path of project.</td></tr><tr><td>model</td><td>Yes</td><td></td><td>Model name</td><td>The structure name in schema，e.g. the Student in example project</td></tr><tr><td>group</td><td>Yes</td><td></td><td>Group Name</td><td>The group name is used to separate logic code</td></tr><tr><td>multiple</td><td>No</td><td>false</td><td>Multiple Service</td><td>If your proto file contains multiple service, you should set true</td></tr><tr><td>proto_out</td><td>No</td><td></td><td>Proto file output directory</td><td>If it is empty, the data will be generated to the proto file in the root directory of the project, otherwise it will be generated in the specified path desc, such as ./desc/student.proto, note that the folder storing proto must be desc, and there can be sub-files inside folder</td></tr><tr><td>proto_field_style</td><td>no</td><td>go_zero</td><td>proto field naming format</td><td>default is underscore</td></tr><tr><td>i18n</td><td>No</td><td>false</td><td>Whether to use i18n</td><td>true means use</td></tr><tr><td>import_prefix</td><td>No</td><td></td><td>The path prefix of import</td><td>Import paths&#39; prefix is only used when the service in sub folder, such as core service&#39;s api and rpc</td></tr><tr><td>overwrite</td><td>No</td><td>false</td><td>Whether it covers the generated file</td><td><code>true</code> will cover all generated files</td></tr></tbody></table>`,25),N={class:"hint-container info"},I=t(`<p class="hint-container-title">Info</p><p>Multiple Example, multiple is used to generate separate RPC client when there are several RPC service in one proto file.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>school <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Teacher <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>School <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example <span class="token parameter variable">--multiple</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),P={href:"https://github.com/suyuan32/simple-admin-example-rpc/tree/multiple-example",target:"_blank",rel:"noopener noreferrer"},j=t(`<p><strong>More parameters please check <code>goctls rpc ent --help</code></strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls rpc ent <span class="token parameter variable">--help</span>
Generate CRUD template codes by Ent

Usage:
  goctl rpc ent <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -g, <span class="token parameter variable">--group</span> string               The group name <span class="token keyword">for</span> logic. e.g. user
  -h, <span class="token parameter variable">--help</span>                       <span class="token builtin class-name">help</span> <span class="token keyword">for</span> ent
  -i, <span class="token parameter variable">--i18n</span>                       Whether to use i18n
  -x, <span class="token parameter variable">--import_prefix</span> string       Import paths<span class="token string">&#39; prefix is only used when the service in sub folder, such as core service&#39;</span>s api and rpc
  -m, <span class="token parameter variable">--model</span> string               The model name <span class="token keyword">for</span> generating e.g. user, <span class="token keyword">if</span> it is empty, generate codes <span class="token keyword">for</span> all models <span class="token keyword">in</span> schema directory
      <span class="token parameter variable">--multiple</span>                   Generated <span class="token keyword">in</span> multiple rpc <span class="token function">service</span> mode
  -o, <span class="token parameter variable">--output</span> string              The output path
  -w, <span class="token parameter variable">--overwrite</span>                  Whether to overwrite the files, it will overwrite all generated files
  -p, <span class="token parameter variable">--project_name</span> string        The project name
  -f, <span class="token parameter variable">--proto_field_style</span> string   The proto field style <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
  -t, <span class="token parameter variable">--proto_out</span> string           The output proto <span class="token function">file</span> path
  -c, <span class="token parameter variable">--schema</span> string              The schema path of the Ent
  -k, <span class="token parameter variable">--search_key_num</span> int         The max number of search keys <span class="token punctuation">(</span>default <span class="token number">3</span><span class="token punctuation">)</span>
  -r, <span class="token parameter variable">--service_name</span> string        The <span class="token function">service</span> name
  -s, <span class="token parameter variable">--style</span> string               The <span class="token function">file</span> name <span class="token function">format</span> style <span class="token punctuation">(</span>default <span class="token string">&quot;go_zero&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The tool will automatically recognize the proto files in the <code>desc</code> folder, and subfolders can also be created inside the <code>desc</code>, <code>package</code> and <code>go_package</code> only need to be declared once in base.proto,<br> The tool will automatically merge all proto files into the proto file in the project root directory. To split proto files in old projects, you only need to split the proto in the root directory to the desc folder.</p></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>Quick command: <code>make gen-rpc-ent-logic model={modelName} group={groupName}</code> indicates that only the code whose schema is <code>{modelName}</code> is generated, and <code>{groupName}</code> is the group name. Note that modelName needs an initial Uppercase, consistent with the struct name in the schema。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Generate the Student structure in the schema</span>
<span class="token function">make</span> gen-rpc-ent-logic <span class="token assign-left variable">model</span><span class="token operator">=</span>Student <span class="token assign-left variable">group</span><span class="token operator">=</span>student

<span class="token function">make</span> gen-rpc

<span class="token comment"># You may need to run</span>
go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="logic" tabindex="0" loading="lazy"><figcaption>logic</figcaption></figure><p>You can see CRUD code !</p></div><blockquote><p>And then you can run the code !</p></blockquote><blockquote><p>Proto File code</p></blockquote><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use group comment to separate rpc logic</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run example.go <span class="token parameter variable">-f</span> etc/example.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>If you see information below:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Starting server at <span class="token number">127.0</span>.0.1:8080<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),M={href:"https://github.com/suyuan32/simple-admin-file/blob/master/api/internal/logic/file/init_database_logic.go",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/suyuan32/simple-admin-example-rpc",target:"_blank",rel:"noopener noreferrer"},A=t(`<blockquote><p>How to call the RPC in simple admin example api</p></blockquote><h3 id="add-config" tabindex="-1"><a class="header-anchor" href="#add-config" aria-hidden="true">#</a> Add config</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-example-rpc-in-service-context" tabindex="-1"><a class="header-anchor" href="#add-example-rpc-in-service-context" aria-hidden="true">#</a> Add example rpc in service context</h3><blockquote><p>Edit service context</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>And then you can call in via l.svcCtx.ExampleRpc in logic code.</strong></p></blockquote>`,7),B={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"};function F(U,L){const a=l("ExternalLinkIcon");return c(),r("div",null,[u,n("div",m,[v,k,b,n("p",null,[h,s(" Must know go-zero's RPC command. "),n("a",g,[s("RPC Command"),e(a)]),s(),n("a",f,[s("RPC Service"),e(a)]),s(),y,_,s(" Refer to the "),n("a",x,[s("Example"),e(a)]),s(" project to generate it again, confirm that the generated file is consistent with the Example project, and the Example project has complete commands.")])]),w,q,C,E,n("div",S,[R,n("p",null,[n("a",T,[s("Video Tutorial"),e(a)])])]),z,n("div",N,[I,n("p",null,[n("a",P,[s("Example Code"),e(a)])])]),j,n("p",null,[s("That means the codes run successfully, you need to finish the database initialization like: "),n("a",M,[s("simple admin file"),e(a)])]),n("blockquote",null,[n("p",null,[s("Project URL "),n("a",D,[s("https://github.com/suyuan32/simple-admin-example-rpc"),e(a)])])]),A,n("blockquote",null,[n("p",null,[s("simple admin example api "),n("a",B,[s("https://github.com/suyuan32/simple-admin-example-api"),e(a)])])])])}const H=o(d,[["render",F],["__file","rpc_example.html.vue"]]);export{H as default};
