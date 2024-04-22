import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as i,c as l,a as n,f as s,b as p,e as c}from"./app-BbTbWlJo.js";const o={},u=c(`<h2 id="environment-requirement" tabindex="-1"><a class="header-anchor" href="#environment-requirement"><span>Environment Requirement</span></a></h2><ul><li>minikube v1.23.0 +</li><li><strong>mysql 8.0 +</strong> | MariaDB 10.7 + | Postgres 14 + (<strong>Postgres 15 + recommended</strong>)</li><li>redis 6.0 +</li><li>docker</li></ul><h2 id="minikube-setting" tabindex="-1"><a class="header-anchor" href="#minikube-setting"><span>Minikube Setting</span></a></h2><p><a href="/guide/basic-config/k8s/minikube">Minikube</a></p><h3 id="k8s-setting" tabindex="-1"><a class="header-anchor" href="#k8s-setting"><span>K8s Setting</span></a></h3><h4 id="api-service" tabindex="-1"><a class="header-anchor" href="#api-service"><span>API service</span></a></h4><blockquote><p>api/etc/core.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0 <span class="token comment"># ip can be 0.0.0.0 or 127.0.0.1, it should be 0.0.0.0 if you want to access from another host</span>
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> jS6VKDtsJf3z1n2VKDtsJf3z1n2  <span class="token comment"># JWT encrypt code</span>
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span>  <span class="token comment"># seconds, expire duration</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> coreApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/api  <span class="token comment"># log saving path，use filebeat to sync</span>
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>  <span class="token comment"># Save time (Day)</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>  <span class="token comment"># Change to your own redis address</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
  <span class="token comment"># Pass: xxx  # You can also set the password</span>

<span class="token key atrule">CoreRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Target</span><span class="token punctuation">:</span> k8s<span class="token punctuation">:</span>//simple<span class="token punctuation">-</span>admin/corerpc<span class="token punctuation">-</span>svc<span class="token punctuation">:</span><span class="token number">9101</span> <span class="token comment"># format  k8s://namespace/service-name:port</span>

<span class="token key atrule">Captcha</span><span class="token punctuation">:</span>
  <span class="token key atrule">KeyLong</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># captcha key length</span>
  <span class="token key atrule">ImgWidth</span><span class="token punctuation">:</span> <span class="token number">240</span> <span class="token comment"># captcha image width</span>
  <span class="token key atrule">ImgHeight</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># captcha image height</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>  <span class="token comment"># change to your own mysql address</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">Config</span><span class="token punctuation">:</span> charset=utf8mb4<span class="token important">&amp;parseTime=True&amp;loc=Local</span> <span class="token comment"># set the config for time convert in gorm</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin <span class="token comment"># database name, you can set your own name</span>
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root   <span class="token comment"># username </span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># password</span>
  <span class="token key atrule">MaxIdleConn</span><span class="token punctuation">:</span> <span class="token number">10</span>  <span class="token comment"># the maximum number of connections in the idle connection pool</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># the maximum number of open connections to the database</span>
  <span class="token key atrule">LogMode</span><span class="token punctuation">:</span> error
  <span class="token key atrule">LogZap</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment"># Service monitor</span>
<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4000</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>rpc/etc/core.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core.rpc
<span class="token key atrule">ListenOn</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9101</span>  <span class="token comment"># ip can be 0.0.0.0 or 127.0.0.1, it should be 0.0.0.0 if you want to access from another host</span>

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>  <span class="token comment"># change to your own mysql address</span>
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">Config</span><span class="token punctuation">:</span> charset=utf8mb4<span class="token important">&amp;parseTime=True&amp;loc=Local</span> <span class="token comment"># set the config for time convert in gorm</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin <span class="token comment"># database name, you can set your own name</span>
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root   <span class="token comment"># username </span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># password</span>
  <span class="token key atrule">MaxIdleConn</span><span class="token punctuation">:</span> <span class="token number">10</span>  <span class="token comment"># the maximum number of connections in the idle connection pool</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># the maximum number of open connections to the database</span>
  <span class="token key atrule">LogMode</span><span class="token punctuation">:</span> error
  <span class="token key atrule">LogZap</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> coreApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/logs/core/api  <span class="token comment"># log saving path，use filebeat to sync</span>
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>  <span class="token comment"># Save time (Day)</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>


<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>  <span class="token comment"># Change to your own redis address</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
  <span class="token comment"># Pass: xxx  # You can also set the password </span>

<span class="token comment"># Service monitor</span>
<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4001</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-image-publish" tabindex="-1"><a class="header-anchor" href="#docker-image-publish"><span>Docker image publish</span></a></h3><h4 id="mammal" tabindex="-1"><a class="header-anchor" href="#mammal"><span>Mammal</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Set the env variables</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token number">0.0</span>.1  <span class="token comment"># version</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DOCKER_USERNAME</span><span class="token operator">=</span>xxx <span class="token comment"># docker repository username</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DOCKER_PASSWORD</span><span class="token operator">=</span>xxx <span class="token comment"># docker repository password</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">REPO</span><span class="token operator">=</span>docker.io  <span class="token comment"># docker repository path</span>

<span class="token comment"># build the image</span>
<span class="token function">make</span> <span class="token function">docker</span>

<span class="token comment"># publish the image</span>
<span class="token function">make</span> publish-docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>Recommend to use gitlab-ci. The project had been provided .gitlab-ci.yml， You need set variable ： $DOCKER_USERNAME 和 $DOCKER_PASSWORD in gitlab runner.</p></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>variables:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deploy-pipeline" tabindex="-1"><a class="header-anchor" href="#deploy-pipeline"><span>Deploy pipeline</span></a></h2><ul><li>build docker image</li><li>upload to docker repository</li><li>run in k8s -&gt; kubectl apply -f deploy/k8s/coreapi.yaml</li></ul><div class="hint-container info"><p class="hint-container-title">Info</p><p>You can use gitlab-ci to automatically build and push docker image</p></div><h3 id="coreapi-k8s-deployment-file-tutorial" tabindex="-1"><a class="header-anchor" href="#coreapi-k8s-deployment-file-tutorial"><span>coreapi k8s deployment file tutorial</span></a></h3><blockquote><p><code>core-api</code> is the name of service, you can find in label and metadata:name <br> Namespace is default, you can change your own namespace</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
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
        <span class="token key atrule">image</span><span class="token punctuation">:</span> ryanpower/core<span class="token punctuation">-</span>api<span class="token punctuation">:</span>0.0.19 <span class="token comment"># mainly change this image</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9100</span> <span class="token comment"># port， the same as core.yaml </span>
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
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 100m  <span class="token comment"># the lowest cpu requirement， 1000m is one cpu, set lower in development env</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 100Mi <span class="token comment"># I set 100 mb memory for local test, in production you can set 512Mi</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 1000m <span class="token comment"># the maximum cpu requirement， 1000m is one cpu, set lower in development env</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1024Mi <span class="token comment"># the maximum memory usage</span>
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> timezone
            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/localtime
          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /home/data
            <span class="token key atrule">name</span><span class="token punctuation">:</span> simple<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>pv
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> timezone
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /usr/share/zoneinfo/Asia/Shanghai
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> simple<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>pv  <span class="token comment"># log persistence volume</span>
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
<span class="token comment"># Service Monitor</span>
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
<span class="token comment"># autoscaling is used to auto-scaling the replicas， use metric-server to get usage info，but it has some bugs now, it will fix in the future.</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> autoscaling/v2
<span class="token key atrule">kind</span><span class="token punctuation">:</span> HorizontalPodAutoscaler
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>hpa<span class="token punctuation">-</span>c
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> simple<span class="token punctuation">-</span>admin
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>hpa<span class="token punctuation">-</span>c
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">scaleTargetRef</span><span class="token punctuation">:</span>
    <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
    <span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
    <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api
  <span class="token key atrule">minReplicas</span><span class="token punctuation">:</span> <span class="token number">3</span>  <span class="token comment"># the min replicas number</span>
  <span class="token key atrule">maxReplicas</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># the max replicas number</span>
  <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> Resource
      <span class="token key atrule">resource</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> cpu
        <span class="token key atrule">target</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> Utilization
          <span class="token key atrule">averageUtilization</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># average usage 80%</span>

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> autoscaling/v2
<span class="token key atrule">kind</span><span class="token punctuation">:</span> HorizontalPodAutoscaler
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>hpa<span class="token punctuation">-</span>m
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> simple<span class="token punctuation">-</span>admin
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>corerpc and backendui are similar.</p></blockquote><h2 id="frontend-nginx-setting" tabindex="-1"><a class="header-anchor" href="#frontend-nginx-setting"><span>Frontend nginx setting</span></a></h2><blockquote><p>simple-admin-backend-ui/deploy/default.conf</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),r={class:"hint-container warning"},d=n("p",{class:"hint-container-title"},"Warning",-1),k={href:"http://%7Bservice-name%7D.%7Bnamespace%7D.svc.cluster.local:%7Bport%7D/",target:"_blank",rel:"noopener noreferrer"},m=n("h4",{id:"quick-deployment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#quick-deployment"},[n("span",null,"Quick Deployment")])],-1),v=n("blockquote",null,[n("p",null,"Run deploy/k8s/setup.sh")],-1);function b(y,h){const a=t("ExternalLinkIcon");return i(),l("div",null,[u,n("div",r,[d,n("p",null,[s("proxy_pass format: "),n("a",k,[s("http://{service-name}.{namespace}.svc.cluster.local:{port}/"),p(a)])])]),m,v])}const x=e(o,[["render",b],["__file","k8s-deploy.html.vue"]]),S=JSON.parse('{"path":"/guide/basic-config/k8s/k8s-deploy.html","title":"K8s Deployment","lang":"en-US","frontmatter":{"order":1,"title":"K8s Deployment","description":"Environment Requirement minikube v1.23.0 + mysql 8.0 + | MariaDB 10.7 + | Postgres 14 + (Postgres 15 + recommended) redis 6.0 + docker Minikube Setting Minikube K8s Setting API ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/basic-config/k8s/k8s-deploy.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/basic-config/k8s/k8s-deploy.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"K8s Deployment"}],["meta",{"property":"og:description","content":"Environment Requirement minikube v1.23.0 + mysql 8.0 + | MariaDB 10.7 + | Postgres 14 + (Postgres 15 + recommended) redis 6.0 + docker Minikube Setting Minikube K8s Setting API ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-17T00:19:29.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-01-17T00:19:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"K8s Deployment\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T00:19:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Environment Requirement","slug":"environment-requirement","link":"#environment-requirement","children":[]},{"level":2,"title":"Minikube Setting","slug":"minikube-setting","link":"#minikube-setting","children":[{"level":3,"title":"K8s Setting","slug":"k8s-setting","link":"#k8s-setting","children":[]},{"level":3,"title":"Docker image publish","slug":"docker-image-publish","link":"#docker-image-publish","children":[]}]},{"level":2,"title":"Deploy pipeline","slug":"deploy-pipeline","link":"#deploy-pipeline","children":[{"level":3,"title":"coreapi k8s deployment file tutorial","slug":"coreapi-k8s-deployment-file-tutorial","link":"#coreapi-k8s-deployment-file-tutorial","children":[]}]},{"level":2,"title":"Frontend nginx setting","slug":"frontend-nginx-setting","link":"#frontend-nginx-setting","children":[]}],"git":{"createdTime":1671464359000,"updatedTime":1705450769000,"contributors":[{"name":"Ryan SU","email":"1137661202@qq.com","commits":4},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":1},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":3.4,"words":1019},"filePathRelative":"guide/basic-config/k8s/k8s-deploy.md","localizedDate":"December 19, 2022","autoDesc":true,"excerpt":"<h2>Environment Requirement</h2>\\n<ul>\\n<li>minikube v1.23.0 +</li>\\n<li><strong>mysql 8.0 +</strong> | MariaDB 10.7 + | Postgres 14 + (<strong>Postgres 15 + recommended</strong>)</li>\\n<li>redis 6.0 +</li>\\n<li>docker</li>\\n</ul>\\n<h2>Minikube Setting</h2>\\n<p><a href=\\"/guide/basic-config/k8s/minikube\\">Minikube</a></p>"}');export{x as comp,S as data};
