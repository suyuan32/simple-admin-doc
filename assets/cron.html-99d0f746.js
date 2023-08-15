import{_ as n}from"./cron_console-894872c3.js";import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,e as i}from"./app-bc036cbf.js";const t="/assets/cron_en.png",l={},c=i(`<h2 id="timing-task-module" tabindex="-1"><a class="header-anchor" href="#timing-task-module" aria-hidden="true">#</a> Timing task module</h2><h3 id="download-code" tabindex="-1"><a class="header-anchor" href="#download-code" aria-hidden="true">#</a> Download Code</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-job.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="configuration-project-local-development" tabindex="-1"><a class="header-anchor" href="#configuration-project-local-development" aria-hidden="true">#</a> Configuration project (local development)</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> job.rpc
<span class="token key atrule">ListenOn</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9105</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> <span class="token comment"># set your username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token comment"># set your password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> jobRpcLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/data/logs/job/rpc
  <span class="token key atrule">Encoding</span><span class="token punctuation">:</span> json
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4005</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics

<span class="token key atrule">AsynqConf</span><span class="token punctuation">:</span>
  <span class="token comment"># If you don&#39;t use the WithRedisConf method, you need to untie the following annotations to define the configuration</span>

  <span class="token comment"># Addr: localhost:6379 # Redis address</span>
  <span class="token comment"># Pass: # Redis Password</span>
  <span class="token comment"># DB: 0 # Redis database index</span>
  <span class="token comment"># Concurrency: 20 # max concurrent process job task num</span>
  <span class="token comment"># SyncInterval: 10 # seconds, this field specifies how often sync should happen</span>
  <span class="token key atrule">Enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">TaskConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">EnableScheduledTask</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># Whether to enable static scheduled tasks</span>
  <span class="token key atrule">EnableDPTask</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># Whether to enable dynamic scheduled tasks</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps" aria-hidden="true">#</a> Next Steps</h3><ul><li>Start project and core service</li><li>Initialize the database</li><li>Modify hidden to show in the menu</li></ul><h3 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure" aria-hidden="true">#</a> Project Structure</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── desc
│ ├── base.proto
│ └── task.proto
├── Dockerfile
├── ent
│ ├── client.go
│ ├── ent.go
│ ├── enttest
│ │ └── enttest.go
│ ├── generate.go
│ ├── hook
│ │ └── hook.go
│ ├── migrate
│ │ ├── migrate.go
│ │ └── schema.go
│ ├── mutation.go
│ ├── not_empty_update.go
│ ├── pagination.go
│ ├── predicate
│ │ └── predicate.go
│ ├── runtime
│ │ └── runtime.go
│ ├── runtime.go
│ ├── schema
│ │ └── task.go
│ ├── task
│ │ ├── task.go
│ │ └── where.go
│ ├── task_create.go
│ ├── task_delete.go
│ ├── task.go
│ ├── task_query.go
│ ├── task_update.go
│ ├── template
│ │ ├── not_empty_update.tmpl
│ │ └── pagination.tmpl
│ └── tx.go
├── etc.
│ ├── job_dev.yaml
│ └── job.yaml
├── go.mod
├── go.sum
├── internal
│ ├──config
│ │ └── config.go
│ ├── logic
│ │ ├── base
│ │ │ └── init_database_logic.go
│ │ └── task
│ │ ├── create_task_logic.go
│ │ ├── delete_task_logic.go
│ │ ├── get_task_by_id_logic.go
│ │ ├── get_task_list_logic.go
│ │ └── update_task_logic.go
│ ├── mqs
│ │ └── amq
│ │ ├── handler                                                 # handler directory, used to store task operation logic
│ │ │ └── amq
│ │ │ └── base
│ │ │ └── hello_world.go # hello world demo
│ │ ├── task
│ │ │ ├── dynamicperiodictask
│ │ │ │ └── dynamic_periodic_task.go
│ │ │ ├── mqtask
│ │ │ │ ├── mqtask.go
│ │ │ │ └── register.go                                         # register task worker here
│ │ │ └── scheduletask
│ │ │ ├── register.go                                           # Register static scheduled tasks here
│ │ │ └── scheduletask.go
│ │ └── types
│ │ ├── pattern
│ │ │ └── pattern.go                                            # Add task identification pattern here to distinguish and locate tasks
│ │ ├── payload
│ │ │ └── payload.go                                            # Add static task data here
│ │ └── periodicconfig
│ │ └── provider.go
│ ├── server
│ │ └── job_server.go
│ ├── svc
│ │ └── service_context.go
│ └── utils
│ ├── dberrorhandler
│ │ └── error_handler.go
│ └── entx
│ └── ent_tx.go
├── job
│ ├── job_grpc.pb.go
│ └── job.pb.go
├── jobclient
│ └── job.go
├── job.go
├── job.proto
├── LICENSE
├── Makefile
└── README.md

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The project uses asynq as the scheduled task manager by default, and only needs to use Redis</p></div><h3 id="how-to-add-tasks" tabindex="-1"><a class="header-anchor" href="#how-to-add-tasks" aria-hidden="true">#</a> How to add tasks?</h3><ul><li>First, you need to define the execution logic of the task in the handler, to imitate hello world, you must implement the <code>ProcessTask</code> method</li><li>Register tasks with <code>mqtask</code></li><li>Add tasks in the background, the pattern must be consistent with the <code>pattern</code> in mqtask or the beginning, the system will automatically find the closest task</li><li>You can see the effect after adding</li></ul><div class="hint-container warning"><p class="hint-container-title">Note</p><p>If you need a static scheduled task, just declare it in the configuration file</p><p><code>job.yaml</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>TaskConf<span class="token punctuation">:</span>
   EnableScheduledTask<span class="token punctuation">:</span> <span class="token boolean">true</span> # Whether to enable static scheduled tasks
   EnableDPTask<span class="token punctuation">:</span> <span class="token boolean">true</span> # Whether to enable dynamic scheduled tasks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="timing-cron-expression" tabindex="-1"><a class="header-anchor" href="#timing-cron-expression" aria-hidden="true">#</a> Timing cron expression</h3><p>Timing tasks support common Cron expressions</p><div class="hint-container info"><p class="hint-container-title">default format</p><blockquote><p><code>* * * * *</code><br> Indicates that it will be executed every second</p></blockquote><table><thead><tr><th>Field</th><th>Range</th></tr></thead><tbody><tr><td>Minute</td><td>0-59</td></tr><tr><td>Hour</td><td>0-23</td></tr><tr><td>Day of the month</td><td>1-31</td></tr><tr><td>Month</td><td>1-12</td></tr><tr><td>Day of the week</td><td>0-6 (Sunday to Saturday)</td></tr></tbody></table><table><thead><tr><th>Cron expression</th><th>Schedule</th></tr></thead><tbody><tr><td>* * * * *</td><td>Every minute</td></tr><tr><td>0 * * * *</td><td>Every hour</td></tr><tr><td>0 0 * * *</td><td>Every day at 12:00 AM</td></tr><tr><td>0 0 * * FRI</td><td>At 12:00 AM, only on Friday</td></tr><tr><td>0 0 1 * *</td><td>At 12:00 AM, on day 1 of the month</td></tr></tbody></table></div></div><div class="hint-container info"><p class="hint-container-title">every</p><blockquote><p><code>@every</code> such as <code>@every 5s</code> means to execute every 5 seconds</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s for seconds
m for minutes
h for hours
d for days
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="how-to-enable-job-in-core" tabindex="-1"><a class="header-anchor" href="#how-to-enable-job-in-core" aria-hidden="true">#</a> How to enable job in core</h3><p>JobRpc <code>enable</code> set to true</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span> <span class="token comment"># Seconds</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> coreApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/api
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">6379</span> <span class="token comment"># change to your own ip or address</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node

<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9101</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">JobRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9105</span>
  <span class="token key atrule">Enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">Captcha</span><span class="token punctuation">:</span>
  <span class="token key atrule">KeyLong</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token key atrule">ImgWidth</span><span class="token punctuation">:</span> <span class="token number">240</span>
  <span class="token key atrule">ImgHeight</span><span class="token punctuation">:</span> <span class="token number">80</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> postgres
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">5432</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> postgres
  <span class="token key atrule">Password</span><span class="token punctuation">:</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">30</span>

<span class="token comment">#DatabaseConf:</span>
<span class="token comment">#  Type: mysql</span>
<span class="token comment">#  Host: localhost</span>
<span class="token comment">#  Port: 3306</span>
<span class="token comment">#  DBName: simple_admin</span>
<span class="token comment">#  Username: root</span>
<span class="token comment">#  Password: &#39;123456&#39;</span>
<span class="token comment">#  MaxOpenConn: 100</span>
<span class="token comment">#  SSLMode: disable</span>
<span class="token comment">#  CacheTime: 5</span>

<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4000</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics

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

<span class="token comment">#Telemetry:</span>
<span class="token comment">#  Name: core-api</span>
<span class="token comment">#  Endpoint: http://127.0.0.1:14268/api/traces</span>
<span class="token comment">#  Sampler: 1.0</span>
<span class="token comment">#  Batcher: jaeger</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="preview" tabindex="-1"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h3><figure><img src="`+t+'" alt="Management Page" tabindex="0" loading="lazy"><figcaption>Management Page</figcaption></figure><figure><img src="'+n+'" alt="Console Log" tabindex="0" loading="lazy"><figcaption>Console Log</figcaption></figure>',20),o=[c];function d(p,r){return e(),a("div",null,o)}const k=s(l,[["render",d],["__file","cron.html.vue"]]);export{k as default};
