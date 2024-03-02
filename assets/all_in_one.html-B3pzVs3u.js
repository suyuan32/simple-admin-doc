import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as i,c,a as n,f as s,b as e,e as t}from"./app-BBzSwu8A.js";const o={},u={href:"https://github.com/suyuan32/simple-admin-core/tree/master/deploy/docker-compose/all_in_one",target:"_blank",rel:"noopener noreferrer"},r=t(`<p>有 mysql 和 postgres 文件夹，根据需求选择一个文件夹打开。</p><h2 id="只需三步" tabindex="-1"><a class="header-anchor" href="#只需三步"><span>只需三步</span></a></h2><h3 id="_1-启动-docker-compose" tabindex="-1"><a class="header-anchor" href="#_1-启动-docker-compose"><span>1. 启动 docker-compose</span></a></h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>由于国内获取镜像较慢，现已提供阿里云镜像服务，需要手动获取镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同理只需要将 core-api-docker 替换为其他镜像即可获取其他镜像</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-初始化数据库" tabindex="-1"><a class="header-anchor" href="#_2-初始化数据库"><span>2. 初始化数据库</span></a></h3>`,6),k={href:"http://localhost/init",target:"_blank",rel:"noopener noreferrer"},d=t(`<h3 id="_3-重启-api" tabindex="-1"><a class="header-anchor" href="#_3-重启-api"><span>3. 重启 API</span></a></h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>初始化完成后需要重启 core-api 容器，强制刷新 casbin 缓存, v1.0.14 开始不需要重启服务</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>deploy/docker-compose/all_in_one</code>文件夹下有 api 和 rpc 的 etc 配置文件参考</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>部署自己的服务到 docker 只需修改为自己的镜像即可</p></div><h2 id="国内-docker-compose-例子" tabindex="-1"><a class="header-anchor" href="#国内-docker-compose-例子"><span>国内 docker-compose 例子</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>只需把 ryanpower 替换为阿里云镜像地址即可</p></div><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">postgresql</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
  <span class="token key atrule">fms</span><span class="token punctuation">:</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">simple-admin</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 10.5.0.0/16

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">postgresql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> bitnami/postgresql<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> postgresql
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5432:5432&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">POSTGRESQL_DATABASE</span><span class="token punctuation">:</span> <span class="token string">&quot;simple_admin&quot;</span>
      <span class="token key atrule">POSTGRESQL_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;simple-admin.&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> postgresql<span class="token punctuation">:</span>/bitnami/postgresql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple-admin</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> postgresql<span class="token punctuation">-</span>server
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 10.5.0.2
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1000M
        <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.05&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 200M

  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>7.0.5<span class="token punctuation">-</span>alpine
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> redis<span class="token punctuation">:</span>/data
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple-admin</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> redis<span class="token punctuation">-</span>server
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 10.5.0.3
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
        <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.05&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 200M

  <span class="token key atrule">core-rpc</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/simple_admin/core<span class="token punctuation">-</span>rpc<span class="token punctuation">-</span>docker<span class="token punctuation">:</span>v1.1.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>rpc
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token comment">#    ports:</span>
    <span class="token comment">#      - &#39;9101:9101&#39;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple-admin</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> core<span class="token punctuation">-</span>rpc
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 10.5.0.4
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
        <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.05&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 200M

  <span class="token key atrule">job-rpc</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/simple_admin/job<span class="token punctuation">-</span>rpc<span class="token punctuation">-</span>docker<span class="token punctuation">:</span>v1.1.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> job<span class="token punctuation">-</span>rpc
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token comment">#    ports:</span>
    <span class="token comment">#      - &#39;9105:9105&#39;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple-admin</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> job<span class="token punctuation">-</span>rpc
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 10.5.0.7
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
        <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.05&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 200M

  <span class="token key atrule">core-api</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/simple_admin/core<span class="token punctuation">-</span>api<span class="token punctuation">-</span>docker<span class="token punctuation">:</span>v1.1.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">I18N_DIR</span><span class="token punctuation">:</span> <span class="token string">&quot;/app/etc/&quot;</span>
    <span class="token comment">#      AUTH_SECRET: &#39;jS6VKDtsJf3z1n2VKDtsJf3z1n2&#39;</span>
    <span class="token comment">#    ports:</span>
    <span class="token comment">#      - &#39;9100:9100&#39;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple-admin</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> core<span class="token punctuation">-</span>api
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 10.5.0.5
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
        <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.05&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 200M

  <span class="token key atrule">backend-ui</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/simple_admin/backend<span class="token punctuation">-</span>ui<span class="token punctuation">-</span>docker<span class="token punctuation">:</span>v1.1.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> backend<span class="token punctuation">-</span>ui
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple-admin</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> backend<span class="token punctuation">-</span>ui
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 10.5.0.6
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
        <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.05&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 200M

  <span class="token key atrule">fms-api</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/simple_admin/fms<span class="token punctuation">-</span>api<span class="token punctuation">-</span>docker<span class="token punctuation">:</span>v1.1.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> fms<span class="token punctuation">-</span>api
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token comment">#    environment:</span>
    <span class="token comment">#      SERVER_URL: &#39;http://localhost:81&#39;</span>
    <span class="token comment">#      AUTH_SECRET: &#39;jS6VKDtsJf3z1n2VKDtsJf3z1n2&#39;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token comment">#      - &#39;9102:9102&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;81:80&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> fms<span class="token punctuation">:</span>/home/data
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple-admin</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> fms<span class="token punctuation">-</span>api
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 10.5.0.8
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
        <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.05&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 200M

  <span class="token key atrule">mcms-rpc</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/simple_admin/mcms<span class="token punctuation">-</span>rpc<span class="token punctuation">-</span>docker<span class="token punctuation">:</span>v1.1.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mcms<span class="token punctuation">-</span>rpc
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token comment">#    environment:</span>
    <span class="token comment">#      EMAIL_ADDR: xxx@gamil.com</span>
    <span class="token comment">#    ports:</span>
    <span class="token comment">#      - &#39;9106:9106&#39;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple-admin</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> mcms<span class="token punctuation">-</span>rpc
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 10.5.0.9
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
        <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
          <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.05&quot;</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 200M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(m,b){const a=l("ExternalLinkIcon");return i(),c("div",null,[n("p",null,[s("在 deploy/docker-compose/all_in_one 文件夹下, "),n("a",u,[s("Github"),e(a)])]),r,n("p",null,[n("a",k,[s("http://localhost/init"),e(a)])]),d])}const g=p(o,[["render",v],["__file","all_in_one.html.vue"]]),_=JSON.parse('{"path":"/zh/guide/basic-config/all_in_one.html","title":"Docker一键部署","lang":"zh-CN","frontmatter":{"order":1,"title":"Docker一键部署","description":"在 deploy/docker-compose/all_in_one 文件夹下, Github 有 mysql 和 postgres 文件夹，根据需求选择一个文件夹打开。 只需三步 1. 启动 docker-compose 相关信息 由于国内获取镜像较慢，现已提供阿里云镜像服务，需要手动获取镜像 同理只需要将 core-api-docker 替换为其他...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/basic-config/all_in_one.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/basic-config/all_in_one.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Docker一键部署"}],["meta",{"property":"og:description","content":"在 deploy/docker-compose/all_in_one 文件夹下, Github 有 mysql 和 postgres 文件夹，根据需求选择一个文件夹打开。 只需三步 1. 启动 docker-compose 相关信息 由于国内获取镜像较慢，现已提供阿里云镜像服务，需要手动获取镜像 同理只需要将 core-api-docker 替换为其他..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-17T00:19:29.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-01-17T00:19:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker一键部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T00:19:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"只需三步","slug":"只需三步","link":"#只需三步","children":[{"level":3,"title":"1. 启动 docker-compose","slug":"_1-启动-docker-compose","link":"#_1-启动-docker-compose","children":[]},{"level":3,"title":"2. 初始化数据库","slug":"_2-初始化数据库","link":"#_2-初始化数据库","children":[]},{"level":3,"title":"3. 重启 API","slug":"_3-重启-api","link":"#_3-重启-api","children":[]}]},{"level":2,"title":"国内 docker-compose 例子","slug":"国内-docker-compose-例子","link":"#国内-docker-compose-例子","children":[]}],"git":{"createdTime":1681193934000,"updatedTime":1705450769000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":8},{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":1.87,"words":560},"filePathRelative":"zh/guide/basic-config/all_in_one.md","localizedDate":"2023年4月11日","autoDesc":true,"excerpt":"<p>在 deploy/docker-compose/all_in_one 文件夹下, <a href=\\"https://github.com/suyuan32/simple-admin-core/tree/master/deploy/docker-compose/all_in_one\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Github</a></p>\\n<p>有 mysql 和 postgres 文件夹，根据需求选择一个文件夹打开。</p>\\n<h2>只需三步</h2>\\n<h3>1. 启动 docker-compose</h3>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>由于国内获取镜像较慢，现已提供阿里云镜像服务，需要手动获取镜像</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker</span> pull registry.cn-hangzhou.aliyuncs.com/simple_admin/core-api-docker:<span class=\\"token punctuation\\">[</span>镜像版本号<span class=\\"token punctuation\\">]</span>\\n</code></pre></div><p>同理只需要将 core-api-docker 替换为其他镜像即可获取其他镜像</p>\\n</div>"}');export{g as comp,_ as data};
