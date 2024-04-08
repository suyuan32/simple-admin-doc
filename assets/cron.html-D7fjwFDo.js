import{_ as n}from"./cron_console-Dc6T7VfF.js";import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as t}from"./app-BByg4QdE.js";const i="/assets/cron_en.png",l={},o=t(`<h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h3><p>Simple Admin Job is the scheduled task module of Simple Admin. It currently provides dynamic and static scheduled tasks based on asynq and implemented using Redis. In the future, it will integrate with RocketMQ to implement additional scheduled tasks.</p><h3 id="download-code" tabindex="-1"><a class="header-anchor" href="#download-code"><span>Download Code</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-job.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="configuration-project-local-development" tabindex="-1"><a class="header-anchor" href="#configuration-project-local-development"><span>Configuration project (local development)</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> job.rpc
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h3><ul><li>Start project and core service</li><li>Initialize the database</li><li>Modify hidden to show in the menu</li></ul><h3 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure"><span>Project Structure</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>├── desc
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>The project uses asynq as the scheduled task manager by default, and only needs to use Redis</p></div><h3 id="how-to-add-tasks" tabindex="-1"><a class="header-anchor" href="#how-to-add-tasks"><span>How to add tasks?</span></a></h3><ul><li>First, you need to define the execution logic of the task in the handler, to imitate hello world, you must implement the <code>ProcessTask</code> method</li><li>Register tasks with <code>mqtask</code></li><li>Add tasks in the background, the pattern must be consistent with the <code>pattern</code> in mqtask or the beginning, the system will automatically find the closest task</li><li>You can see the effect after adding</li></ul><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>If you need a static scheduled task, just declare it in the configuration file</p><p><code>job.yaml</code></p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>TaskConf<span class="token punctuation">:</span>
   EnableScheduledTask<span class="token punctuation">:</span> <span class="token boolean">true</span> # Whether to enable static scheduled tasks
   EnableDPTask<span class="token punctuation">:</span> <span class="token boolean">true</span> # Whether to enable dynamic scheduled tasks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="timing-cron-expression" tabindex="-1"><a class="header-anchor" href="#timing-cron-expression"><span>Timing cron expression</span></a></h3><p>Timing tasks support common Cron expressions</p><div class="hint-container info"><p class="hint-container-title">default format</p><blockquote><p><code>* * * * *</code> Indicates that it will be executed every second</p></blockquote><table><thead><tr><th>Field</th><th>Range</th></tr></thead><tbody><tr><td>Minute</td><td>0-59</td></tr><tr><td>Hour</td><td>0-23</td></tr><tr><td>Day of the month</td><td>1-31</td></tr><tr><td>Month</td><td>1-12</td></tr><tr><td>Day of the week</td><td>0-6 (Sunday to Saturday)</td></tr></tbody></table><table><thead><tr><th>Cron expression</th><th>Schedule</th></tr></thead><tbody><tr><td>* * * * *</td><td>Every minute</td></tr><tr><td>0 * * * *</td><td>Every hour</td></tr><tr><td>0 0 * * *</td><td>Every day at 12:00 AM</td></tr><tr><td>0 0 * * FRI</td><td>At 12:00 AM, only on Friday</td></tr><tr><td>0 0 1 * *</td><td>At 12:00 AM, on day 1 of the month</td></tr></tbody></table></div></div><div class="hint-container info"><p class="hint-container-title">every</p><blockquote><p><code>@every</code> such as <code>@every 5s</code> means to execute every 5 seconds</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>s for seconds
m for minutes
h for hours
d for days
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="how-to-enable-job-in-core" tabindex="-1"><a class="header-anchor" href="#how-to-enable-job-in-core"><span>How to enable job in core</span></a></h3><p>JobRpc <code>enable</code> set to true</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.api
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="preview" tabindex="-1"><a class="header-anchor" href="#preview"><span>Preview</span></a></h3><figure><img src="`+i+'" alt="Management Page" tabindex="0" loading="lazy"><figcaption>Management Page</figcaption></figure><figure><img src="'+n+'" alt="Console Log" tabindex="0" loading="lazy"><figcaption>Console Log</figcaption></figure>',21),c=[o];function d(p,r){return e(),a("div",null,c)}const k=s(l,[["render",d],["__file","cron.html.vue"]]),b=JSON.parse('{"path":"/guide/official-comp/cron.html","title":"Timed Task Module","lang":"en-US","frontmatter":{"order":3,"title":"Timed Task Module","description":"Introduction Simple Admin Job is the scheduled task module of Simple Admin. It currently provides dynamic and static scheduled tasks based on asynq and implemented using Redis. ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/official-comp/cron.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/official-comp/cron.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Timed Task Module"}],["meta",{"property":"og:description","content":"Introduction Simple Admin Job is the scheduled task module of Simple Admin. It currently provides dynamic and static scheduled tasks based on asynq and implemented using Redis. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/cron_en.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-09T09:26:29.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2023-10-09T09:26:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Timed Task Module\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/cron_en.png\\",\\"https://doc.ryansu.tech/assets/cron_console.png\\"],\\"dateModified\\":\\"2023-10-09T09:26:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":3,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":3,"title":"Download Code","slug":"download-code","link":"#download-code","children":[]},{"level":3,"title":"Configuration project (local development)","slug":"configuration-project-local-development","link":"#configuration-project-local-development","children":[]},{"level":3,"title":"Next Steps","slug":"next-steps","link":"#next-steps","children":[]},{"level":3,"title":"Project Structure","slug":"project-structure","link":"#project-structure","children":[]},{"level":3,"title":"How to add tasks?","slug":"how-to-add-tasks","link":"#how-to-add-tasks","children":[]},{"level":3,"title":"How to enable job in core","slug":"how-to-enable-job-in-core","link":"#how-to-enable-job-in-core","children":[]},{"level":3,"title":"Preview","slug":"preview","link":"#preview","children":[]}],"git":{"createdTime":1678627279000,"updatedTime":1696843589000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":4},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":2.45,"words":734},"filePathRelative":"guide/official-comp/cron.md","localizedDate":"March 12, 2023","autoDesc":true,"excerpt":"<h3>Introduction</h3>\\n<p>Simple Admin Job is the scheduled task module of Simple Admin. It currently provides dynamic and static scheduled tasks based on asynq and implemented using Redis. In the future, it will integrate with RocketMQ to implement additional scheduled tasks.</p>\\n<h3>Download Code</h3>"}');export{k as comp,b as data};
