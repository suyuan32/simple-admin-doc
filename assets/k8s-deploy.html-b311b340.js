import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as o,a as n,d as e,w as u,b as s,e as t}from"./app-17572d2e.js";const r={},k=t('<h1 id="部署k8s" tabindex="-1"><a class="header-anchor" href="#部署k8s" aria-hidden="true">#</a> 部署K8s</h1><h2 id="环境需求" tabindex="-1"><a class="header-anchor" href="#环境需求" aria-hidden="true">#</a> 环境需求</h2><ul><li>minikube v1.23.0 +</li><li><strong>mysql 8.0 +</strong> | MariaDB 10.7 + | Postgres 14 + (<strong>Postgres 15 + 推荐</strong>)</li><li>redis 6.0 +</li><li>docker</li></ul><h2 id="minikube-配置" tabindex="-1"><a class="header-anchor" href="#minikube-配置" aria-hidden="true">#</a> Minikube 配置</h2>',4),d=t(`<h3 id="k8s配置" tabindex="-1"><a class="header-anchor" href="#k8s配置" aria-hidden="true">#</a> K8s配置</h3><h4 id="api-服务" tabindex="-1"><a class="header-anchor" href="#api-服务" aria-hidden="true">#</a> API 服务</h4><blockquote><p>api/etc/core.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0 <span class="token comment"># 需要 0.0.0.0 以便外部访问</span>
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2  <span class="token comment"># JWT的加密密钥，各个API应保持一致才能解析</span>
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span>  <span class="token comment"># 秒，过期时间</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> coreApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file <span class="token comment"># 日志模式</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/api  <span class="token comment"># log 保存路径，使用filebeat同步</span>
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info <span class="token comment"># 日志等级</span>
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 日志压缩</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>  <span class="token comment"># 保存时长（天）</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># 多少毫秒后再次写入堆栈跟踪。用来避免堆栈跟踪日志过多</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>  <span class="token comment"># 改成自己的redis地址</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
  <span class="token comment"># Pass: xxx  # 也可以设置密码</span>

<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Target</span><span class="token punctuation">:</span> k8s<span class="token punctuation">:</span>//simple<span class="token punctuation">-</span>admin/corerpc<span class="token punctuation">-</span>svc<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># 格式 k8s://namespace/service-name:port</span>

<span class="token key atrule">Captcha</span><span class="token punctuation">:</span>
  <span class="token key atrule">KeyLong</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 验证码长度</span>
  <span class="token key atrule">ImgWidth</span><span class="token punctuation">:</span> <span class="token number">240</span> <span class="token comment"># 验证码图片宽度</span>
  <span class="token key atrule">ImgHeight</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># 验证码图片高度</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>  <span class="token comment"># 修改成自己的mysql地址</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">Config</span><span class="token punctuation">:</span> charset=utf8mb4<span class="token important">&amp;parseTime=True&amp;loc=Local</span> <span class="token comment"># gorm时间转换需要如下配置</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin <span class="token comment"># 数据库名，可以自定义</span>
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root   <span class="token comment"># 用户名</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># 密码</span>
  <span class="token key atrule">MaxIdleConn</span><span class="token punctuation">:</span> <span class="token number">10</span>  <span class="token comment"># 最大空闲连接</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># 最大连接数</span>
  <span class="token key atrule">LogMode</span><span class="token punctuation">:</span> error <span class="token comment"># log 级别</span>
  <span class="token key atrule">LogZap</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 目前log zap还未实现</span>

<span class="token comment"># 服务监控</span>
<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4000</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>rpc/etc/core.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.rpc
<span class="token key atrule">ListenOn</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9101</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>  <span class="token comment"># 修改成自己的mysql地址</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">Config</span><span class="token punctuation">:</span> charset=utf8mb4<span class="token important">&amp;parseTime=True&amp;loc=Local</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root   <span class="token comment"># 用户名</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># 密码</span>
  <span class="token key atrule">MaxIdleConn</span><span class="token punctuation">:</span> <span class="token number">10</span>  <span class="token comment"># 最大空闲连接</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># 最大连接数</span>
  <span class="token key atrule">LogMode</span><span class="token punctuation">:</span> error
  <span class="token key atrule">LogZap</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> coreRpcLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/rpc  <span class="token comment"># log 保存路径，使用filebeat同步</span>
  <span class="token key atrule">Encoding</span><span class="token punctuation">:</span> json
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>  <span class="token comment"># 保存时长（天）</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 192.168.50.216<span class="token punctuation">:</span><span class="token number">6379</span>   <span class="token comment"># 改成自己的redis地址</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
  <span class="token comment"># Pass: xxx  # 也可以设置密码</span>

<span class="token comment"># 服务监控</span>
<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4001</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker镜像编译发布" tabindex="-1"><a class="header-anchor" href="#docker镜像编译发布" aria-hidden="true">#</a> Docker镜像编译发布</h3><blockquote><p>手动编译</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置环境变量</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token number">0.0</span>.1  <span class="token comment"># 版本号</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DOCKER_USERNAME</span><span class="token operator">=</span>xxx <span class="token comment"># docker仓库用户名</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DOCKER_PASSWORD</span><span class="token operator">=</span>xxx <span class="token comment"># docker仓库密码</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">REPO</span><span class="token operator">=</span>docker.io  <span class="token comment"># docker仓库地址</span>

<span class="token comment"># 生成镜像</span>
<span class="token function">make</span> <span class="token function">docker</span>

<span class="token comment"># 发布镜像</span>
<span class="token function">make</span> publish-docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>建议使用 gitlab-ci， 项目已默认提供， 需要在 gitlab runner 设置 variable ： $DOCKER_USERNAME 和 $DOCKER_PASSWORD</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>variables:
  VERSION: 0.0.19
  REPO: docker.io

stages:
  - info
  - build
  - publish
  - clean

info-job:
  stage: info
  script:
    - echo &quot;Start build version $VERSION&quot;
    - export VERSION=$VERSION
    - export DOCKER_USERNAME=$DOCKER_USERNAME
    - export DOCKER_PASSWORD=$DOCKER_PASSWORD
    - export REPO=$REPO

build-job:
  stage: build
  script:
    - echo &quot;Compiling the code and build docker image...&quot;
    - make docker
    - echo &quot;Compile complete.&quot;

deploy-job:
  stage: publish
  environment: production
  script:
    - echo &quot;Publish docker images...&quot;
    - make publish-docker
    - echo &quot;Docker images successfully published.&quot;

clean-job:
  stage: clean
  script:
    # 删除所有 none 镜像 | delete all none images
    - docker images |grep none|awk &#39;{print $3}&#39;|xargs docker rmi
    - echo &quot;Delete all none images successfully.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署流程" tabindex="-1"><a class="header-anchor" href="#部署流程" aria-hidden="true">#</a> 部署流程</h2><ul><li>生成docker镜像</li><li>上传docker仓库</li><li>在k8s集群使用命令 kubectl apply -f deploy/k8s/coreapi.yaml 等直接部署</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>生成镜像和上传仓库建议直接使用gitlab-ci自动发布</p></div><h3 id="coreapi-部署文件详解" tabindex="-1"><a class="header-anchor" href="#coreapi-部署文件详解" aria-hidden="true">#</a> coreapi 部署文件详解</h3><blockquote><p>coreapi 是所有服务的label和metadata:name <br> 命名空间默认是 default, 可自行修改</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">revisionHistoryLimit</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> endpoints<span class="token punctuation">-</span>finder
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api
        <span class="token key atrule">image</span><span class="token punctuation">:</span> ryanpower/core<span class="token punctuation">-</span>api<span class="token punctuation">:</span>0.0.19 <span class="token comment"># 主要修改此处镜像</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9100</span> <span class="token comment"># 端口， 与 core.yaml 内配置端口相同</span>
        <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>
          <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>
            <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
          <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
          <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>
            <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">15</span>
          <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">20</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 100m  <span class="token comment"># 最低 cpu 需求， 1000m 为一个cpu,测试环境建议小一些</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 100Mi <span class="token comment"># 本地调试我设置了 100 mb, 正式环境可以为 512Mi</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 1000m <span class="token comment"># 最高占用 cpu</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1024Mi <span class="token comment"># 最高占用的内存</span>
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span> 
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> timezone
              <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/localtime
            <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /home/data
              <span class="token key atrule">name</span><span class="token punctuation">:</span> simple<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>pv
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> timezone
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /usr/share/zoneinfo/Asia/Shanghai
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> simple<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>pv  <span class="token comment"># log 持久化卷</span>
          <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
            <span class="token key atrule">claimName</span><span class="token punctuation">:</span> simple<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>claim 

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>svc
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>svc
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9100</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> api
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>svc
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>svc
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">4000</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">4000</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api


<span class="token punctuation">---</span>
<span class="token comment"># 服务监控</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> monitoring.coreos.com/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceMonitor
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>rpc
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">serviceMonitor</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>rpc<span class="token punctuation">-</span>svc
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> prometheus

<span class="token punctuation">---</span>
<span class="token comment"># autoscaling 用于动态增加负载，通过 metric-server 获取使用率，目前获取 metric 还有些问题，近期会修复</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> autoscaling/v2
<span class="token key atrule">kind</span><span class="token punctuation">:</span> HorizontalPodAutoscaler
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>hpa<span class="token punctuation">-</span>c
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>hpa<span class="token punctuation">-</span>c
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">scaleTargetRef</span><span class="token punctuation">:</span>
    <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
    <span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
    <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api
  <span class="token key atrule">minReplicas</span><span class="token punctuation">:</span> <span class="token number">3</span>  <span class="token comment"># 最小副本</span>
  <span class="token key atrule">maxReplicas</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># 最大副本</span>
  <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> Resource
      <span class="token key atrule">resource</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> cpu
        <span class="token key atrule">target</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> Utilization
          <span class="token key atrule">averageUtilization</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># 平均使用率 80%</span>

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> autoscaling/v2
<span class="token key atrule">kind</span><span class="token punctuation">:</span> HorizontalPodAutoscaler
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>hpa<span class="token punctuation">-</span>m
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>hpa<span class="token punctuation">-</span>m
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">scaleTargetRef</span><span class="token punctuation">:</span>
    <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
    <span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
    <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api
  <span class="token key atrule">minReplicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">maxReplicas</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> Resource
      <span class="token key atrule">resource</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> memory
        <span class="token key atrule">target</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> Utilization
          <span class="token key atrule">averageUtilization</span><span class="token punctuation">:</span> <span class="token number">80</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>core rpc 和 backend ui 相似</p></blockquote><h2 id="前端-nginx-请求设置" tabindex="-1"><a class="header-anchor" href="#前端-nginx-请求设置" aria-hidden="true">#</a> 前端 nginx 请求设置</h2><blockquote><p>simple-admin-backend-ui/deploy/default.conf</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /sys-api/ {
        proxy_pass  http://core-api-svc.default.svc.cluster.local:9100/;
    }
    
    # location /file-manager/ {
    #     proxy_pass  http://file-api-svc.default.svc.cluster.local:9102/;
    # }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),v={class:"hint-container warning"},m=n("p",{class:"hint-container-title"},"注意",-1),b={href:"http://%7Bservice-name%7D.%7Bnamespace%7D.svc.cluster.local:%7Bport%7D/",target:"_blank",rel:"noopener noreferrer"},y=n("h4",{id:"快速部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快速部署","aria-hidden":"true"},"#"),s(" 快速部署")],-1),h=n("blockquote",null,[n("p",null,"执行 deploy/k8s/setup.sh")],-1);function g(x,f){const l=a("RouterLink"),p=a("ExternalLinkIcon");return c(),o("div",null,[k,n("p",null,[e(l,{to:"/zh/guide/basic-config/k8s/simple-admin/zh-cn/docs/minikube.html"},{default:u(()=>[s("Minikube")]),_:1})]),d,n("div",v,[m,n("p",null,[s("proxy_pass 格式 "),n("a",b,[s("http://{service-name}.{namespace}.svc.cluster.local:{port}/"),e(p)])])]),y,h])}const q=i(r,[["render",g],["__file","k8s-deploy.html.vue"]]);export{q as default};
