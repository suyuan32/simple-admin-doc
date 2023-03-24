import{_ as l,a as i}from"./api_gen_struct-3403667f.js";import{_ as o,W as r,X as d,Y as e,Z as n,$ as s,a0 as t,D as c}from"./framework-2d2f73c4.js";const p={},u=e("h1",{id:"_3-minutes-developing-api-service",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-minutes-developing-api-service","aria-hidden":"true"},"#"),n(" 3 minutes developing API service")],-1),m={class:"hint-container warning"},v=e("p",{class:"hint-container-title"},"Note",-1),h=e("p",null,"Make sure that you have been installed follow software:",-1),b=e("ul",null,[e("li",null,"simple-admin-tool (goctls) v0.2.9-beta +")],-1),k=e("br",null,null,-1),g={href:"https://go-zero.dev/docs/goctl/api",target:"_blank",rel:"noopener noreferrer"},_={href:"https://go-zero.dev/docs/advance/api-coding",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),y=e("br",null,null,-1),x={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"},w=t(`<h2 id="responsibilities-of-the-api-service" tabindex="-1"><a class="header-anchor" href="#responsibilities-of-the-api-service" aria-hidden="true">#</a> Responsibilities of the API service</h2><p>In simple admin, the API service acts as a gateway, mainly providing the following functions:</p><ul><li>User authentication, such as JWT</li><li>Data processing, such as data filtering, international translation</li><li>Current limiting and fusing</li></ul><p>An API can access multiple RPCs, providing a unified request entry。</p><h2 id="create-api-project" tabindex="-1"><a class="header-anchor" href="#create-api-project" aria-hidden="true">#</a> Create API project</h2><blockquote><p>Create example project</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api new example <span class="token parameter variable">--i18n</span><span class="token operator">=</span>true <span class="token parameter variable">--casbin</span><span class="token operator">=</span>true <span class="token parameter variable">--go_zero_version</span><span class="token operator">=</span>v1.5.0 <span class="token parameter variable">--tool_version</span><span class="token operator">=</span>v0.2.8 <span class="token parameter variable">--trans_err</span><span class="token operator">=</span>true <span class="token parameter variable">--module_name</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-api <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8081</span> <span class="token parameter variable">--gitlab</span><span class="token operator">=</span>true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-new-parameters" tabindex="-1"><a class="header-anchor" href="#api-new-parameters" aria-hidden="true">#</a> <code>api new</code> parameters</h3>`,8),P=e("thead",null,[e("tr",null,[e("th",null,"Parameter"),e("th",null,"Must"),e("th",null,"Default"),e("th",null,"Introduction"),e("th",null,"Usage")])],-1),N=e("tr",null,[e("td",null,"i18n"),e("td",null,"No"),e("td",null,"false"),e("td",null,"Whether to use i18n"),e("td",null,"true means use")],-1),I=e("tr",null,[e("td",null,"casbin"),e("td",null,"No"),e("td",null,"false"),e("td",null,"Whether to use casbin"),e("td",null,"true means use")],-1),C=e("tr",null,[e("td",null,"module_name"),e("td",null,"Yes"),e("td"),e("td",null,"module name in go.mod"),e("td",null,"If your project will be used by other project, you should set as above which is a github repository")],-1),E=e("td",null,"go_zero_version",-1),T=e("td",null,"Yes",-1),z=e("td",null,null,-1),j=e("td",null,"go zero version",-1),S={href:"https://github.com/zeromicro/go-zero/releases",target:"_blank",rel:"noopener noreferrer"},A=e("td",null,"tool_version",-1),q=e("td",null,"Yes",-1),Y=e("td",null,null,-1),R=e("td",null,"simple admin tools version",-1),M={href:"https://github.com/suyuan32/simple-admin-tools/releases",target:"_blank",rel:"noopener noreferrer"},D=e("tr",null,[e("td",null,"trans_err"),e("td",null,"No"),e("td",null,"false"),e("td",null,"Whether to use i18n in error"),e("td",null,"true means use")],-1),L=e("tr",null,[e("td",null,"gitlab"),e("td",null,"No"),e("td",null,"false"),e("td",null,"Whether to generating gitlab-ci.yml"),e("td",null,"true means generating")],-1),W=e("tr",null,[e("td",null,"port"),e("td",null,"No"),e("td",null,"9100"),e("td",null,"port number"),e("td",null,"The service port")],-1),B=t('<p><strong>More parameters please check <code>goctls api new --help</code></strong></p><blockquote><p>You can see the project structure:</p></blockquote><figure><img src="'+i+`" alt="Example" tabindex="0" loading="lazy"><figcaption>Example</figcaption></figure><h3 id="file-structure" tabindex="-1"><a class="header-anchor" href="#file-structure" aria-hidden="true">#</a> File structure</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── desc                             api declaration file storage directory
├── etc                              configuration file directory
└── internal
     ├──config
     ├── handler                     handler directory
     │ ├── base
     │ ├── student
     │ └── teacher
     ├──                             i18n internationalization i18n file directory
     │ └── locale
     ├── logic                       logic code directory
     │ ├── base
     │ ├── student
     │ └── teacher
     ├── middleware                  middleware directory
     ├── svc                         global parameter directory
     └── types                       type declaration directory


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>And then edit etc/example.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> example.api
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Run the command below:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run example.go <span class="token parameter variable">-f</span> etc/example.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>If you see the information below:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Starting server at <span class="token number">127.0</span>.0.1:8081<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>That means running successfully.</p><h2 id="code-generation-based-on-proto-file" tabindex="-1"><a class="header-anchor" href="#code-generation-based-on-proto-file" aria-hidden="true">#</a> Code generation（based on Proto file）</h2><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Proto must be the proto generated by <code>goctls rpc ent</code></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Student <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-proto-parameters" tabindex="-1"><a class="header-anchor" href="#api-proto-parameters" aria-hidden="true">#</a> <code>api proto</code> parameters</h3>`,16),U=e("thead",null,[e("tr",null,[e("th",null,"Parameters"),e("th",null,"Must"),e("th",null,"Default"),e("th",null,"Introduction"),e("th",null,"Usage")])],-1),G=e("tr",null,[e("td",null,"proto"),e("td",null,"Yes"),e("td"),e("td",null,"Proto file path"),e("td",null,[n("Input the absolute path of proto file. "),e("strong",null,[n("It should be the proto in "),e("code",null,"root"),n(" directory, not in desc. Because it needs package data and "),e("code",null,"Base"),n(" data.")])])],-1),O=e("tr",null,[e("td",null,"style"),e("td",null,"No"),e("td",null,"go_zero"),e("td",null,"File name format"),e("td",null,"The go_zero means snack format")],-1),Z=e("tr",null,[e("td",null,"api_service_name"),e("td",null,"Yes"),e("td"),e("td",null,"API Service name"),e("td",null,[n("The API service name set in "),e("code",null,".api"),n(" file")])],-1),H=e("tr",null,[e("td",null,"rpc_service_name"),e("td",null,"Yes"),e("td"),e("td",null,"RPC Service name"),e("td",null,[n("The RPC service name set in "),e("code",null,".proto"),n(" file")])],-1),V=e("tr",null,[e("td",null,"o"),e("td",null,"Yes"),e("td"),e("td",null,"Output path"),e("td",null,"The output path，it can be relative path. It should target to the root path of project.")],-1),J=e("tr",null,[e("td",null,"model"),e("td",null,"Yes"),e("td"),e("td",null,"Model name"),e("td",null,"The structure name in schema，e.g. the Student in example project")],-1),F=e("tr",null,[e("td",null,"rpc_name"),e("td",null,"Yes"),e("td"),e("td",null,"RPC name"),e("td",null,"Input Example will generate l.svcCtx.ExampleRpc")],-1),K=e("td",null,"grpc_package",-1),X=e("td",null,"Yes",-1),$=e("td",null,null,-1),Q=e("td",null,"RPC *_grpc.go package path",-1),ee={href:"http://github.com/suyuan32/simple-admin-example-rpc/example",target:"_blank",rel:"noopener noreferrer"},ne=e("tr",null,[e("td",null,"multiple"),e("td",null,"No"),e("td",null,"false"),e("td",null,"Multiple Service"),e("td",null,"If your proto file contains multiple service, you should set true")],-1),ae=e("tr",null,[e("td",null,"json_style"),e("td",null,"No"),e("td",null,"goZero"),e("td",null,"JSON tag format, the default is small camelCase"),e("td",null,"go_zero is underscore, GoZero is large camelCase")],-1),se=e("tr",null,[e("td",null,"overwrite"),e("td",null,"No"),e("td",null,"false"),e("td",null,"Whether it covers the generated file"),e("td",null,[e("code",null,"true"),n(" will cover all generated files")])],-1),te={class:"hint-container info"},le=t(`<p class="hint-container-title">Info</p><p>Multiple Service Example, multiple is used to generate separate RPC client when there are several RPC service in one proto file.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>school <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Teacher <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>School <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example <span class="token parameter variable">--multiple</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),ie={href:"https://github.com/suyuan32/simple-admin-example-api/tree/multiple",target:"_blank",rel:"noopener noreferrer"},oe=e("p",null,"The codes generated is like below:",-1),re=e("figure",null,[e("img",{src:l,alt:"pic",tabindex:"0",loading:"lazy"}),e("figcaption",null,"pic")],-1),de={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"},ce=t('<div class="hint-container warning"><p class="hint-container-title">Note</p><p>You need to add <code>ExampleRpc</code> manually into <code>service_context</code>, <code>config</code>, <code>etc</code>.</p></div><h2 id="code-generation-ent-based-single-service" tabindex="-1"><a class="header-anchor" href="#code-generation-ent-based-single-service" aria-hidden="true">#</a> Code generation (Ent-based single service)</h2>',2),pe={class:"hint-container warning"},ue=e("p",{class:"hint-container-title"},"Note",-1),me=e("code",null,"--ent=true",-1),ve=e("code",null,"api new",-1),he=e("br",null,null,-1),be={href:"https://github.com/suyuan32/simple-admin-example-api-single",target:"_blank",rel:"noopener noreferrer"},ke=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api ent <span class="token parameter variable">--schema</span><span class="token operator">=</span>./ent/schema <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span><span class="token punctuation">{</span>modelName<span class="token punctuation">}</span> <span class="token parameter variable">--group</span><span class="token operator">=</span><span class="token punctuation">{</span>groupName<span class="token punctuation">}</span> <span class="token parameter variable">--search_key_num</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">--overwrite</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Parameter</th><th>Required</th><th>Default</th><th>Description</th><th>Usage</th></tr></thead><tbody><tr><td>schema</td><td>Yes</td><td></td><td>The address of the Ent schema file.</td><td>Enter the relative path of the Ent schema folder.</td></tr><tr><td>style</td><td>No</td><td>go_zero</td><td>The format of the file name.</td><td>snake case format for go_zero.</td></tr><tr><td>api_service_name</td><td>Yes</td><td></td><td>The service name of the API, used in the API declaration file.</td><td>In the API declaration file.</td></tr><tr><td>o</td><td>Yes</td><td></td><td>The output location of the file, relative path is accepted.</td><td>Points to the main file directory.</td></tr><tr><td>model</td><td>Yes</td><td></td><td>The name of the model in the schema.</td><td>The internal struct name in the schema, such as Student in example.</td></tr><tr><td>search_key_num</td><td>No</td><td>3</td><td>The number of search fields in the list (default is 3).</td><td>Only string type fields can be automatically generated.</td></tr><tr><td>group</td><td>Yes</td><td></td><td>The name of the group, used to put different logic files in different folders.</td><td>Put different logic files in different folders.</td></tr><tr><td>json_style</td><td>No</td><td>goZero</td><td>The format of the JSON tag, default is camel case for go_zero.</td><td>Underline for go_zero, upper camel case for GoZero.</td></tr><tr><td>overwrite</td><td>No</td><td>false</td><td>Whether to overwrite the generated files.</td><td>Overwrite all generated files when true.</td></tr></tbody></table><div class="hint-container info"><p class="hint-container-title">Info</p><p>The shortcut command <code>make gen-api-ent-logic model={modelName} group={groupName}</code> means to generate the code whose schema is <code>{modelName}</code>, and <code>{groupName}</code> is the group name. Note that the first letter of modelName needs to be capitalized. Be consistent with the struct name in the schema</p></div><h3 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure" aria-hidden="true">#</a> Directory Structure</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
example
├── Dockerfile
├── Makefile
├── desc                                   # declaration directory
│ ├── all.api
│ └── base.api
├── ent                                    # Ent directory
│ ├── client.go
│ ├── ent.go
│ ├── enttest
│ │ └── enttest.go
│ ├── example
│ │ ├── example.go
│ │ └── where.go
│ ├── example.go
│ ├── example_create.go
│ ├── example_delete.go
│ ├── example_query.go
│ ├── example_update.go
│ ├── generate.go
│ ├── hook
│ │ └── hook.go
│ ├── migrate
│ │ ├── migrate.go
│ │ └── schema.go
│ ├── mutation.go
│ ├── predicate
│ │ └── predicate.go
│ ├── runtime
│ │ └── runtime.go
│ ├── runtime.go
│ ├── schema                                 # model directory
│ │ └── example.go
│ ├── template
│ │ ├── not_empty_update.tmpl
│ │ └── pagination.tmpl
│ └── tx.go
├── etc                                      # configuration file directory
│ └── example.yaml
├── example.go
├── go.mod
├── go.sum
└── internal
     ├──config
     │ └── config.go
     ├── handler
     │ ├── base
     │ │ └── init_database_handler.go
     │ └── routes.go
     ├── i18n                                 # Internationalization file directory
     │ ├── locale
     │ │ ├── en.json
     │ │ └── zh.json
     │ └── vars.go
     ├── logic
     │ └── base
     │ └── init_database_logic.go
     ├── middleware
     │ └── authority_middleware.go
     ├── svc
     │ └── service_context.go
     ├── types
     │ └── types.go
     └── utils                                # tools directory
         ├── dberrorhandler                   # Ent error handling tool
         │ └── error_handler.go
         └── entx                             # Ent transaction support function
             └── ent_tx.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function ge(_e,fe){const a=c("ExternalLinkIcon");return r(),d("div",null,[u,e("div",m,[v,h,b,e("p",null,[k,n(" Must know go-zero's API command. "),e("a",g,[n("API Command"),s(a)]),n(),e("a",_,[n("Api Service"),s(a)]),n(),f,y,n(" Refer to the "),e("a",x,[n("Example"),s(a)]),n(" project to generate it again, confirm that the generated file is consistent with the Example project, and the Example project has complete commands.")])]),w,e("table",null,[P,e("tbody",null,[N,I,C,e("tr",null,[E,T,z,j,e("td",null,[n("Go to "),e("a",S,[n("go-zero"),s(a)]),n(" to get the latest release")])]),e("tr",null,[A,q,Y,R,e("td",null,[n("Go to "),e("a",M,[n("tool"),s(a)]),n(" to get the latest release")])]),D,L,W])]),B,e("table",null,[U,e("tbody",null,[G,O,Z,H,V,J,F,e("tr",null,[K,X,$,Q,e("td",null,[n("In example project is "),e("a",ee,[n("github.com/suyuan32/simple-admin-example-rpc/example"),s(a)])])]),ne,ae,se])]),e("div",te,[le,e("p",null,[e("a",ie,[n("Example Code"),s(a)])])]),oe,re,e("blockquote",null,[e("p",null,[n("See more detail in simple admin example api URL "),e("a",de,[n("https://github.com/suyuan32/simple-admin-example-api"),s(a)])])]),ce,e("div",pe,[ue,e("p",null,[n("Single services need to set "),me,n(" when using the "),ve,n(" command. "),he,n(" Learn from "),e("a",be,[n("Single Example"),s(a)])])]),ke])}const we=o(p,[["render",ge],["__file","api_example.html.vue"]]);export{we as default};
