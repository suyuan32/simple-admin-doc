import{_ as e}from"./cron_console-Dc6T7VfF.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as t,a as n,f as c,b as o,e as d}from"./app-DmMe0Ngp.js";const p="/assets/cron_zh.png",r={},u=n("h3",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍"},[n("span",null,"介绍")])],-1),v={class:"hint-container info"},m=n("p",{class:"hint-container-title"},"相关信息",-1),b={href:"https://www.bilibili.com/video/BV1Ac411F7yx/",target:"_blank",rel:"noopener noreferrer"},k=d(`<p>Simple Admin Job 是 Simple Admin 的定时任务模块，目前已提供了基于 asynq 的动态定时任务及静态定时任务，基于 redis 实现，未来会接入 RocketMQ 实现额外的定时任务。</p><h3 id="下载代码" tabindex="-1"><a class="header-anchor" href="#下载代码"><span>下载代码</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-job.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置项目-本地开发" tabindex="-1"><a class="header-anchor" href="#配置项目-本地开发"><span>配置项目（本地开发）</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> job.rpc
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
  <span class="token comment"># 如果你不使用 WithRedisConf 方法的话, 你需要解开以下注释定义配置</span>

  <span class="token comment">#  Addr: localhost:6379  # Redis address</span>
  <span class="token comment">#  Pass: # Redis Password</span>
  <span class="token comment">#  DB: 0 # Redis database index</span>
  <span class="token comment">#  Concurrency: 20 # max concurrent process job task num</span>
  <span class="token comment">#  SyncInterval: 10 # seconds, this field specifies how often sync should happen</span>
  <span class="token key atrule">Enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">TaskConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">EnableScheduledTask</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 是否启用静态定时任务</span>
  <span class="token key atrule">EnableDPTask</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否启用动态定时任务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接下来的步骤" tabindex="-1"><a class="header-anchor" href="#接下来的步骤"><span>接下来的步骤</span></a></h3><ul><li>启动项目和 core 服务</li><li>初始化数据库</li><li>在菜单中修改隐藏为显示</li></ul><h3 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构"><span>项目结构</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>├── desc
│   ├── base.proto
│   └── task.proto
├── Dockerfile
├── ent
│   ├── client.go
│   ├── ent.go
│   ├── enttest
│   │   └── enttest.go
│   ├── generate.go
│   ├── hook
│   │   └── hook.go
│   ├── migrate
│   │   ├── migrate.go
│   │   └── schema.go
│   ├── mutation.go
│   ├── not_empty_update.go
│   ├── pagination.go
│   ├── predicate
│   │   └── predicate.go
│   ├── runtime
│   │   └── runtime.go
│   ├── runtime.go
│   ├── schema
│   │   └── task.go
│   ├── task
│   │   ├── task.go
│   │   └── where.go
│   ├── task_create.go
│   ├── task_delete.go
│   ├── task.go
│   ├── task_query.go
│   ├── task_update.go
│   ├── template
│   │   ├── not_empty_update.tmpl
│   │   └── pagination.tmpl
│   └── tx.go
├── etc
│   ├── job_dev.yaml
│   └── job.yaml
├── go.mod
├── go.sum
├── internal
│   ├── config
│   │   └── config.go
│   ├── logic
│   │   ├── base
│   │   │   └── init_database_logic.go
│   │   └── task
│   │       ├── create_task_logic.go
│   │       ├── delete_task_logic.go
│   │       ├── get_task_by_id_logic.go
│   │       ├── get_task_list_logic.go
│   │       └── update_task_logic.go
│   ├── mqs
│   │   └── amq
│   │       ├── handler                                   # handler 目录， 用于存放任务操作逻辑
│   │       │   └── amq
│   │       │       └── base
│   │       │           └── hello_world.go                # hello world demo
│   │       ├── task
│   │       │   ├── dynamicperiodictask
│   │       │   │   └── dynamic_periodic_task.go
│   │       │   ├── mqtask
│   │       │   │   ├── mqtask.go
│   │       │   │   └── register.go                       # 在此处注册任务worker
│   │       │   └── scheduletask
│   │       │       ├── register.go                       # 在此处注册静态的定时任务
│   │       │       └── scheduletask.go
│   │       └── types
│   │           ├── pattern
│   │           │   └── pattern.go                        # 在此处添加任务标识 pattern, 用于区分和定位任务
│   │           ├── payload
│   │           │   └── payload.go                        # 在此处添加静态任务数据
│   │           └── periodicconfig
│   │               └── provider.go
│   ├── server
│   │   └── job_server.go
│   ├── svc
│   │   └── service_context.go
│   └── utils
│       ├── dberrorhandler
│       │   └── error_handler.go
│       └── entx
│           └── ent_tx.go
├── job
│   ├── job_grpc.pb.go
│   └── job.pb.go
├── jobclient
│   └── job.go
├── job.go
├── job.proto
├── LICENSE
├── Makefile
└── README.md

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>项目默认使用 asynq 作为定时任务管理器，只需要使用 Redis</p></div><h3 id="如何添加任务" tabindex="-1"><a class="header-anchor" href="#如何添加任务"><span>如何添加任务？</span></a></h3><ul><li>首先需要在 handler 定义任务的执行逻辑， 模仿 hello world, 必须实现 ProcessTask 方法</li><li>在 mqtask 注册任务</li><li>在后台添加任务，pattern 要和 mqtask 里的 pattern 一致或开头一致， 系统会自动查找最接近的任务</li><li>添加完即可看到效果</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果你需要静态定时任务，只需在配置文件声明</p><p><code>job.yaml</code></p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>TaskConf<span class="token punctuation">:</span>
  EnableScheduledTask<span class="token punctuation">:</span> <span class="token boolean">true</span> # 是否启用静态定时任务
  EnableDPTask<span class="token punctuation">:</span> <span class="token boolean">true</span> # 是否启用动态定时任务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="定时任务表达式" tabindex="-1"><a class="header-anchor" href="#定时任务表达式"><span>定时任务表达式</span></a></h3><p>定时任务支持常用 Cron 表达式</p><div class="hint-container info"><p class="hint-container-title">默认格式</p><blockquote><p><code>* * * * *</code> 表示每秒钟都会执行</p></blockquote><table><thead><tr><th>字段</th><th>取值范围</th></tr></thead><tbody><tr><td>分钟</td><td>0-59</td></tr><tr><td>小时</td><td>0-23</td></tr><tr><td>日</td><td>1-31</td></tr><tr><td>月份</td><td>1-12</td></tr><tr><td>星期</td><td>0-6 (星期天到星期六)</td></tr></tbody></table><table><thead><tr><th>Cron 表达式</th><th>时间表</th></tr></thead><tbody><tr><td>* * * * *</td><td>每分钟</td></tr><tr><td>0 * * * *</td><td>每小时</td></tr><tr><td>0 0 * * *</td><td>每天凌晨 12 点</td></tr><tr><td>0 0 * * FRI</td><td>每周五凌晨 12 点</td></tr><tr><td>0 0 1 * *</td><td>每月 1 号凌晨 12 点</td></tr></tbody></table></div><div class="hint-container info"><p class="hint-container-title">every</p><blockquote><p><code>@every</code> 如 <code>@every 5s</code> 表示每 5 秒执行一次</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>s  秒
m  分
h  小时
d  天
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="如何在-core-启用-job" tabindex="-1"><a class="header-anchor" href="#如何在-core-启用-job"><span>如何在 core 启用 job</span></a></h3><p>JobRpc <code>enable</code> 设置为 true</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.api
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示"><span>效果展示</span></a></h3><figure><img src="`+p+'" alt="管理页面" tabindex="0" loading="lazy"><figcaption>管理页面</figcaption></figure><figure><img src="'+e+'" alt="效果" tabindex="0" loading="lazy"><figcaption>效果</figcaption></figure>',23);function h(g,y){const s=i("ExternalLinkIcon");return l(),t("div",null,[u,n("div",v,[m,n("p",null,[n("a",b,[c("官方教程"),o(s)])])]),k])}const S=a(r,[["render",h],["__file","cron.html.vue"]]),j=JSON.parse('{"path":"/zh/guide/official-comp/cron.html","title":"定时任务模块","lang":"zh-CN","frontmatter":{"order":3,"title":"定时任务模块","description":"介绍 相关信息 官方教程 Simple Admin Job 是 Simple Admin 的定时任务模块，目前已提供了基于 asynq 的动态定时任务及静态定时任务，基于 redis 实现，未来会接入 RocketMQ 实现额外的定时任务。 下载代码 配置项目（本地开发） 接下来的步骤 启动项目和 core 服务 初始化数据库 在菜单中修改隐藏为显示 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/official-comp/cron.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/official-comp/cron.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"定时任务模块"}],["meta",{"property":"og:description","content":"介绍 相关信息 官方教程 Simple Admin Job 是 Simple Admin 的定时任务模块，目前已提供了基于 asynq 的动态定时任务及静态定时任务，基于 redis 实现，未来会接入 RocketMQ 实现额外的定时任务。 下载代码 配置项目（本地开发） 接下来的步骤 启动项目和 core 服务 初始化数据库 在菜单中修改隐藏为显示 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/cron_zh.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-09T09:26:29.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"定时任务模块"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2023-10-09T09:26:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"定时任务模块\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/cron_zh.png\\",\\"https://doc.ryansu.tech/assets/cron_console.png\\"],\\"dateModified\\":\\"2023-10-09T09:26:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"下载代码","slug":"下载代码","link":"#下载代码","children":[]},{"level":3,"title":"配置项目（本地开发）","slug":"配置项目-本地开发","link":"#配置项目-本地开发","children":[]},{"level":3,"title":"接下来的步骤","slug":"接下来的步骤","link":"#接下来的步骤","children":[]},{"level":3,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]},{"level":3,"title":"如何添加任务？","slug":"如何添加任务","link":"#如何添加任务","children":[]},{"level":3,"title":"定时任务表达式","slug":"定时任务表达式","link":"#定时任务表达式","children":[]},{"level":3,"title":"如何在 core 启用 job","slug":"如何在-core-启用-job","link":"#如何在-core-启用-job","children":[]},{"level":3,"title":"效果展示","slug":"效果展示","link":"#效果展示","children":[]}],"git":{"createdTime":1678627279000,"updatedTime":1696843589000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":4},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":2.97,"words":892},"filePathRelative":"zh/guide/official-comp/cron.md","localizedDate":"2023年3月12日","autoDesc":true,"excerpt":"<h3>介绍</h3>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p><a href=\\"https://www.bilibili.com/video/BV1Ac411F7yx/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方教程</a></p>\\n</div>\\n<p>Simple Admin Job 是 Simple Admin 的定时任务模块，目前已提供了基于 asynq 的动态定时任务及静态定时任务，基于 redis 实现，未来会接入 RocketMQ 实现额外的定时任务。</p>"}');export{S as comp,j as data};
