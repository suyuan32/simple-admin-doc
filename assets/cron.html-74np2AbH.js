import{_ as a}from"./cron_console-Dc6T7VfF.js";import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as e,d as s,e as p,b as r,o as d}from"./app-DbrLFopa.js";const o="/assets/cron_zh.png",c={},t=s("h3",{id:"介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#介绍"},[s("span",null,"介绍")])],-1),k={class:"hint-container info"},h=s("p",{class:"hint-container-title"},"相关信息",-1),v=s("p",null,[s("a",{href:"https://www.bilibili.com/video/BV1Ac411F7yx/",target:"_blank",rel:"noopener noreferrer"},"官方教程")],-1),m=r(`<p>Simple Admin Job 是 Simple Admin 的定时任务模块，目前已提供了基于 asynq 的动态定时任务及静态定时任务，基于 redis 实现，未来会接入 RocketMQ 实现额外的定时任务。</p><h3 id="下载代码" tabindex="-1"><a class="header-anchor" href="#下载代码"><span>下载代码</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> clone</span><span style="color:#032F62;--shiki-dark:#98C379;"> https://github.com/suyuan32/simple-admin-job.git</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置项目-本地开发" tabindex="-1"><a class="header-anchor" href="#配置项目-本地开发"><span>配置项目（本地开发）</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Name</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">job.rpc</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">ListenOn</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">0.0.0.0:9105</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">DatabaseConf</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">mysql</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Host</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">127.0.0.1</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Port</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">3306</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  DBName</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">simple_admin</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Username</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># set your username</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Password</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># set your password</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  MaxOpenConn</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">100</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  SSLMode</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">disable</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  CacheTime</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">RedisConf</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Host</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">127.0.0.1:6379</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  ServiceName</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">jobRpcLogger</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Mode</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">file</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">/home/data/logs/job/rpc</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Encoding</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">json</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Level</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">info</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Compress</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  KeepDays</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">7</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  StackCoolDownMillis</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Prometheus</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Host</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">0.0.0.0</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Port</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">4005</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">/metrics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">AsynqConf</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  # 如果你不使用 WithRedisConf 方法的话, 你需要解开以下注释定义配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  #  Addr: localhost:6379  # Redis address</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  #  Pass: # Redis Password</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  #  DB: 0 # Redis database index</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  #  Concurrency: 20 # max concurrent process job task num</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  #  SyncInterval: 10 # seconds, this field specifies how often sync should happen</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Enable</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">TaskConf</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  EnableScheduledTask</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">false</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # 是否启用静态定时任务</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  EnableDPTask</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">true</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # 是否启用动态定时任务</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接下来的步骤" tabindex="-1"><a class="header-anchor" href="#接下来的步骤"><span>接下来的步骤</span></a></h3><ul><li>启动项目和 core 服务</li><li>初始化数据库</li><li>在菜单中修改隐藏为显示</li></ul><h3 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构"><span>项目结构</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>├── desc</span></span>
<span class="line"><span>│   ├── base.proto</span></span>
<span class="line"><span>│   └── task.proto</span></span>
<span class="line"><span>├── Dockerfile</span></span>
<span class="line"><span>├── ent</span></span>
<span class="line"><span>│   ├── client.go</span></span>
<span class="line"><span>│   ├── ent.go</span></span>
<span class="line"><span>│   ├── enttest</span></span>
<span class="line"><span>│   │   └── enttest.go</span></span>
<span class="line"><span>│   ├── generate.go</span></span>
<span class="line"><span>│   ├── hook</span></span>
<span class="line"><span>│   │   └── hook.go</span></span>
<span class="line"><span>│   ├── migrate</span></span>
<span class="line"><span>│   │   ├── migrate.go</span></span>
<span class="line"><span>│   │   └── schema.go</span></span>
<span class="line"><span>│   ├── mutation.go</span></span>
<span class="line"><span>│   ├── not_empty_update.go</span></span>
<span class="line"><span>│   ├── pagination.go</span></span>
<span class="line"><span>│   ├── predicate</span></span>
<span class="line"><span>│   │   └── predicate.go</span></span>
<span class="line"><span>│   ├── runtime</span></span>
<span class="line"><span>│   │   └── runtime.go</span></span>
<span class="line"><span>│   ├── runtime.go</span></span>
<span class="line"><span>│   ├── schema</span></span>
<span class="line"><span>│   │   └── task.go</span></span>
<span class="line"><span>│   ├── task</span></span>
<span class="line"><span>│   │   ├── task.go</span></span>
<span class="line"><span>│   │   └── where.go</span></span>
<span class="line"><span>│   ├── task_create.go</span></span>
<span class="line"><span>│   ├── task_delete.go</span></span>
<span class="line"><span>│   ├── task.go</span></span>
<span class="line"><span>│   ├── task_query.go</span></span>
<span class="line"><span>│   ├── task_update.go</span></span>
<span class="line"><span>│   ├── template</span></span>
<span class="line"><span>│   │   ├── not_empty_update.tmpl</span></span>
<span class="line"><span>│   │   └── pagination.tmpl</span></span>
<span class="line"><span>│   └── tx.go</span></span>
<span class="line"><span>├── etc</span></span>
<span class="line"><span>│   ├── job_dev.yaml</span></span>
<span class="line"><span>│   └── job.yaml</span></span>
<span class="line"><span>├── go.mod</span></span>
<span class="line"><span>├── go.sum</span></span>
<span class="line"><span>├── internal</span></span>
<span class="line"><span>│   ├── config</span></span>
<span class="line"><span>│   │   └── config.go</span></span>
<span class="line"><span>│   ├── logic</span></span>
<span class="line"><span>│   │   ├── base</span></span>
<span class="line"><span>│   │   │   └── init_database_logic.go</span></span>
<span class="line"><span>│   │   └── task</span></span>
<span class="line"><span>│   │       ├── create_task_logic.go</span></span>
<span class="line"><span>│   │       ├── delete_task_logic.go</span></span>
<span class="line"><span>│   │       ├── get_task_by_id_logic.go</span></span>
<span class="line"><span>│   │       ├── get_task_list_logic.go</span></span>
<span class="line"><span>│   │       └── update_task_logic.go</span></span>
<span class="line"><span>│   ├── mqs</span></span>
<span class="line"><span>│   │   └── amq</span></span>
<span class="line"><span>│   │       ├── handler                                   # handler 目录， 用于存放任务操作逻辑</span></span>
<span class="line"><span>│   │       │   └── amq</span></span>
<span class="line"><span>│   │       │       └── base</span></span>
<span class="line"><span>│   │       │           └── hello_world.go                # hello world demo</span></span>
<span class="line"><span>│   │       ├── task</span></span>
<span class="line"><span>│   │       │   ├── dynamicperiodictask</span></span>
<span class="line"><span>│   │       │   │   └── dynamic_periodic_task.go</span></span>
<span class="line"><span>│   │       │   ├── mqtask</span></span>
<span class="line"><span>│   │       │   │   ├── mqtask.go</span></span>
<span class="line"><span>│   │       │   │   └── register.go                       # 在此处注册任务worker</span></span>
<span class="line"><span>│   │       │   └── scheduletask</span></span>
<span class="line"><span>│   │       │       ├── register.go                       # 在此处注册静态的定时任务</span></span>
<span class="line"><span>│   │       │       └── scheduletask.go</span></span>
<span class="line"><span>│   │       └── types</span></span>
<span class="line"><span>│   │           ├── pattern</span></span>
<span class="line"><span>│   │           │   └── pattern.go                        # 在此处添加任务标识 pattern, 用于区分和定位任务</span></span>
<span class="line"><span>│   │           ├── payload</span></span>
<span class="line"><span>│   │           │   └── payload.go                        # 在此处添加静态任务数据</span></span>
<span class="line"><span>│   │           └── periodicconfig</span></span>
<span class="line"><span>│   │               └── provider.go</span></span>
<span class="line"><span>│   ├── server</span></span>
<span class="line"><span>│   │   └── job_server.go</span></span>
<span class="line"><span>│   ├── svc</span></span>
<span class="line"><span>│   │   └── service_context.go</span></span>
<span class="line"><span>│   └── utils</span></span>
<span class="line"><span>│       ├── dberrorhandler</span></span>
<span class="line"><span>│       │   └── error_handler.go</span></span>
<span class="line"><span>│       └── entx</span></span>
<span class="line"><span>│           └── ent_tx.go</span></span>
<span class="line"><span>├── job</span></span>
<span class="line"><span>│   ├── job_grpc.pb.go</span></span>
<span class="line"><span>│   └── job.pb.go</span></span>
<span class="line"><span>├── jobclient</span></span>
<span class="line"><span>│   └── job.go</span></span>
<span class="line"><span>├── job.go</span></span>
<span class="line"><span>├── job.proto</span></span>
<span class="line"><span>├── LICENSE</span></span>
<span class="line"><span>├── Makefile</span></span>
<span class="line"><span>└── README.md</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>项目默认使用 asynq 作为定时任务管理器，只需要使用 Redis</p></div><h3 id="如何添加任务" tabindex="-1"><a class="header-anchor" href="#如何添加任务"><span>如何添加任务？</span></a></h3><ul><li>首先需要在 handler 定义任务的执行逻辑， 模仿 hello world, 必须实现 ProcessTask 方法</li><li>在 mqtask 注册任务</li><li>在后台添加任务，pattern 要和 mqtask 里的 pattern 一致或开头一致， 系统会自动查找最接近的任务</li><li>添加完即可看到效果</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果你需要静态定时任务，只需在配置文件声明</p><p><code>job.yaml</code></p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">TaskConf</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">  EnableScheduledTask</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">true</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> # </span><span style="color:#24292E;--shiki-dark:#E06C75;">是否启用静态定时任务</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">  EnableDPTask</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">true</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> # </span><span style="color:#24292E;--shiki-dark:#E06C75;">是否启用动态定时任务</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="定时任务表达式" tabindex="-1"><a class="header-anchor" href="#定时任务表达式"><span>定时任务表达式</span></a></h3><p>定时任务支持常用 Cron 表达式</p><div class="hint-container info"><p class="hint-container-title">默认格式</p><blockquote><p><code>* * * * *</code> 表示每秒钟都会执行</p></blockquote><table><thead><tr><th>字段</th><th>取值范围</th></tr></thead><tbody><tr><td>分钟</td><td>0-59</td></tr><tr><td>小时</td><td>0-23</td></tr><tr><td>日</td><td>1-31</td></tr><tr><td>月份</td><td>1-12</td></tr><tr><td>星期</td><td>0-6 (星期天到星期六)</td></tr></tbody></table><table><thead><tr><th>Cron 表达式</th><th>时间表</th></tr></thead><tbody><tr><td>* * * * *</td><td>每分钟</td></tr><tr><td>0 * * * *</td><td>每小时</td></tr><tr><td>0 0 * * *</td><td>每天凌晨 12 点</td></tr><tr><td>0 0 * * FRI</td><td>每周五凌晨 12 点</td></tr><tr><td>0 0 1 * *</td><td>每月 1 号凌晨 12 点</td></tr></tbody></table></div><div class="hint-container info"><p class="hint-container-title">every</p><blockquote><p><code>@every</code> 如 <code>@every 5s</code> 表示每 5 秒执行一次</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>s  秒</span></span>
<span class="line"><span>m  分</span></span>
<span class="line"><span>h  小时</span></span>
<span class="line"><span>d  天</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="如何在-core-启用-job" tabindex="-1"><a class="header-anchor" href="#如何在-core-启用-job"><span>如何在 core 启用 job</span></a></h3><p>JobRpc <code>enable</code> 设置为 true</p><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Name</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">core.api</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Host</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">0.0.0.0</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Port</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">9100</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Timeout</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">30000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Auth</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  AccessSecret</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">jS6VKDtsJf3z1n2VKDtsJf3z1n2</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  AccessExpire</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">259200</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # Seconds</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  ServiceName</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">coreApiLogger</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Mode</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">file</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">/home/ryan/logs/core/api</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Level</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">info</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Compress</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  KeepDays</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">7</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  StackCoolDownMillis</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">RedisConf</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Host</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">localhost:6379</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # change to your own ip or address</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">CoreRpc</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Endpoints</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="color:#032F62;--shiki-dark:#98C379;">127.0.0.1:9101</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Enabled</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">JobRpc</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Endpoints</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="color:#032F62;--shiki-dark:#98C379;">127.0.0.1:9105</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Enabled</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Captcha</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  KeyLong</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  ImgWidth</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">240</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  ImgHeight</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">DatabaseConf</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">postgres</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Host</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">localhost</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Port</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">5432</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  DBName</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">simple_admin</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Username</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">postgres</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Password</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  MaxOpenConn</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">100</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  SSLMode</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">disable</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  CacheTime</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#DatabaseConf:</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  Type: mysql</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  Host: localhost</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  Port: 3306</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  DBName: simple_admin</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  Username: root</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  Password: &#39;123456&#39;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  MaxOpenConn: 100</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  SSLMode: disable</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  CacheTime: 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">Prometheus</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Host</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">0.0.0.0</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Port</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">4000</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  Path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">/metrics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">CasbinConf</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  ModelText</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#D73A49;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">    [request_definition]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">    r = sub, obj, act</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">    [policy_definition]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">    p = sub, obj, act</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">    [role_definition]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">    g = _, _</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">    [policy_effect]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">    e = some(where (p.eft == allow))</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">    [matchers]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">    m = r.sub == p.sub &amp;&amp; keyMatch2(r.obj,p.obj) &amp;&amp; r.act == p.act</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#Telemetry:</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  Name: core-api</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  Endpoint: http://127.0.0.1:14268/api/traces</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  Sampler: 1.0</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#  Batcher: jaeger</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示"><span>效果展示</span></a></h3><figure><img src="`+o+'" alt="管理页面" tabindex="0" loading="lazy"><figcaption>管理页面</figcaption></figure><figure><img src="'+a+'" alt="效果" tabindex="0" loading="lazy"><figcaption>效果</figcaption></figure>',23);function y(b,u){const n=l("BiliBili");return d(),e("div",null,[t,s("div",k,[h,v,p(n,{bvid:"BV1Ac411F7yx"})]),m])}const E=i(c,[["render",y],["__file","cron.html.vue"]]),g=JSON.parse('{"path":"/zh/guide/official-comp/cron.html","title":"定时任务模块","lang":"zh-CN","frontmatter":{"order":3,"title":"定时任务模块","head":[["meta",{"name":"keywords","content":"cron, job, task, simple admin scheduler, 定时任务, 配置"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/official-comp/cron.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/official-comp/cron.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"定时任务模块"}],["meta",{"property":"og:description","content":"介绍 相关信息 官方教程 Simple Admin Job 是 Simple Admin 的定时任务模块，目前已提供了基于 asynq 的动态定时任务及静态定时任务，基于 redis 实现，未来会接入 RocketMQ 实现额外的定时任务。 下载代码 配置项目（本地开发） 接下来的步骤 启动项目和 core 服务 初始化数据库 在菜单中修改隐藏为显示 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/cron_zh.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"定时任务模块\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/cron_zh.png\\",\\"https://doc.ryansu.tech/assets/cron_console.png\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"介绍 相关信息 官方教程 Simple Admin Job 是 Simple Admin 的定时任务模块，目前已提供了基于 asynq 的动态定时任务及静态定时任务，基于 redis 实现，未来会接入 RocketMQ 实现额外的定时任务。 下载代码 配置项目（本地开发） 接下来的步骤 启动项目和 core 服务 初始化数据库 在菜单中修改隐藏为显示 ..."},"headers":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"下载代码","slug":"下载代码","link":"#下载代码","children":[]},{"level":3,"title":"配置项目（本地开发）","slug":"配置项目-本地开发","link":"#配置项目-本地开发","children":[]},{"level":3,"title":"接下来的步骤","slug":"接下来的步骤","link":"#接下来的步骤","children":[]},{"level":3,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]},{"level":3,"title":"如何添加任务？","slug":"如何添加任务","link":"#如何添加任务","children":[]},{"level":3,"title":"定时任务表达式","slug":"定时任务表达式","link":"#定时任务表达式","children":[]},{"level":3,"title":"如何在 core 启用 job","slug":"如何在-core-启用-job","link":"#如何在-core-启用-job","children":[]},{"level":3,"title":"效果展示","slug":"效果展示","link":"#效果展示","children":[]}],"git":{"createdTime":1678627279000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":4},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":3},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":3.04,"words":913},"filePathRelative":"zh/guide/official-comp/cron.md","localizedDate":"2023年3月12日","autoDesc":true,"excerpt":"<h3>介绍</h3>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p><a href=\\"https://www.bilibili.com/video/BV1Ac411F7yx/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方教程</a></p>\\n</div>\\n<p>Simple Admin Job 是 Simple Admin 的定时任务模块，目前已提供了基于 asynq 的动态定时任务及静态定时任务，基于 redis 实现，未来会接入 RocketMQ 实现额外的定时任务。</p>"}');export{E as comp,g as data};