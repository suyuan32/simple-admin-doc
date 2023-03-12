import{_ as n,W as s,X as e,a0 as a}from"./framework-2d2f73c4.js";const i={},l=a(`<h2 id="timing-task-module" tabindex="-1"><a class="header-anchor" href="#timing-task-module" aria-hidden="true">#</a> Timing task module</h2><h3 id="download-code" tabindex="-1"><a class="header-anchor" href="#download-code" aria-hidden="true">#</a> Download Code</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-job.git
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps" aria-hidden="true">#</a> Next Steps</h3><ul><li>Start project and core service</li><li>Initialize the database</li><li>Modify hidden to show in the menu</li></ul><h3 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure" aria-hidden="true">#</a> Project Structure</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── desc
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The project uses asynq as the scheduled task manager by default, and only needs to use Redis</p></div><h3 id="how-to-add-tasks" tabindex="-1"><a class="header-anchor" href="#how-to-add-tasks" aria-hidden="true">#</a> How to add tasks?</h3><ul><li>First, you need to define the execution logic of the task in the handler, to imitate hello world, you must implement the ProcessTask method</li><li>Register tasks with mqtask</li><li>Add tasks in the background, the pattern must be consistent with the pattern in mqtask or the beginning, the system will automatically find the closest task</li><li>You can see the effect after adding</li></ul><div class="hint-container warning"><p class="hint-container-title">Note</p><p>If you don&#39;t need a static timing task, just comment it out in main</p><p><code>job.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>serviceGroup<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>mqtask<span class="token punctuation">.</span><span class="token function">NewMQTask</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">)</span>
serviceGroup<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>dynamicperiodictask<span class="token punctuation">.</span><span class="token function">NewDPTask</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// serviceGroup.Add(scheduletask.NewSchedulerTask(ctx))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,13),t=[l];function d(c,o){return s(),e("div",null,t)}const u=n(i,[["render",d],["__file","cron.html.vue"]]);export{u as default};
