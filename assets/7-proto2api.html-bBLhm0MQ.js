import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,b as i}from"./app-Be3nXhZs.js";const p={},l=i(`<p>该命令用于通过 proto 生成 api 中的字段内容, 主要用于生成除了 CRUD 代码生成之外的结构体，即将 rpc 中额外的 message 转换为 api 的 type，使得 proto 接入 api 更便捷.</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proto2api</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">通过</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proto</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 生成</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> api</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 额外数据，如</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> type</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 和</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Usage:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proto2api</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [flags]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Flags:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -a,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --api_path</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">     api</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 文件路径，若为空则会输出到控制台</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -g,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --group_name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   分组名称，若为空则为模型名称的小写</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                help</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proto2api</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -j,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --json_style</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   JSON</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 字段的格式，默认为</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> goZero</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (default </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;goZero&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -m,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --model_name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   模型名称，用于过滤</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rpc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">      --multiple</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            是否为多</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 的</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proto</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  -p,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --proto_path</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   proto</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 文件路径，注意为根目录下的</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proto</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 不是</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> desc</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 文件夹中的</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proto</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>proto 文件中必须含有对应的 group 注释 api 文件中必须已有 type 和 service, 否则建议从控制台复制</p></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">goctls</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extra</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proto2api</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> OauthProvider</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> D:/projects/simpleadmin/feature-workspace/simple-admin-core/rpc/core.proto</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-a</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> D:/projects/simpleadmin/feature-workspace/simple-admin-core/api/desc/core/api.api</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>syntax = &quot;v1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>info(</span></span>
<span class="line"><span>    title: &quot;API management&quot;</span></span>
<span class="line"><span>    desc: &quot;API management is used to register APIs and manage APIs&quot;</span></span>
<span class="line"><span>    author: &quot;Ryan Su&quot;</span></span>
<span class="line"><span>    email: &quot;yuansu.china.work@gmail.com&quot;</span></span>
<span class="line"><span>    version: &quot;v1.0&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;../base.api&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type (</span></span>
<span class="line"><span>    // OauthRedirectResp</span></span>
<span class="line"><span>    OauthRedirectResp {</span></span>
<span class="line"><span>        // Url</span></span>
<span class="line"><span>        Url  string \`json:&quot;url&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // UserInfo</span></span>
<span class="line"><span>    UserInfo {</span></span>
<span class="line"><span>        // CreatedAt</span></span>
<span class="line"><span>        CreatedAt  *int64 \`json:&quot;createdAt,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // UpdatedAt</span></span>
<span class="line"><span>        UpdatedAt  *int64 \`json:&quot;updatedAt,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Status</span></span>
<span class="line"><span>        Status  *uint32 \`json:&quot;status,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Username</span></span>
<span class="line"><span>        Username  *string \`json:&quot;username,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Password</span></span>
<span class="line"><span>        Password  *string \`json:&quot;password,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Nickname</span></span>
<span class="line"><span>        Nickname  *string \`json:&quot;nickname,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // HomePath</span></span>
<span class="line"><span>        HomePath  *string \`json:&quot;homePath,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // RoleIds</span></span>
<span class="line"><span>        RoleIds  []uint64 \`json:&quot;roleIds&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Mobile</span></span>
<span class="line"><span>        Mobile  *string \`json:&quot;mobile,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Avatar</span></span>
<span class="line"><span>        Avatar  *string \`json:&quot;avatar,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // DepartmentId</span></span>
<span class="line"><span>        DepartmentId  *uint64 \`json:&quot;departmentId,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // PositionIds</span></span>
<span class="line"><span>        PositionIds  []uint64 \`json:&quot;positionIds&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // RoleCodes</span></span>
<span class="line"><span>        RoleCodes  []string \`json:&quot;roleCodes&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // CallbackReq</span></span>
<span class="line"><span>    CallbackReq {</span></span>
<span class="line"><span>        // State</span></span>
<span class="line"><span>        State  string \`json:&quot;state&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Code</span></span>
<span class="line"><span>        Code  string \`json:&quot;code&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // OauthLoginReq</span></span>
<span class="line"><span>    OauthLoginReq {</span></span>
<span class="line"><span>        // State</span></span>
<span class="line"><span>        State  string \`json:&quot;state&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Provider</span></span>
<span class="line"><span>        Provider  string \`json:&quot;provider&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // The API information | API信息</span></span>
<span class="line"><span>    ApiInfo {</span></span>
<span class="line"><span>        BaseIDInfo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Translated Name | 多语言名称</span></span>
<span class="line"><span>        Trans string \`json:&quot;trans,optional&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // API path | API路径</span></span>
<span class="line"><span>        Path *string \`json:&quot;path,optional&quot; validate:&quot;omitempty,min=1,max=80&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // API Description | API 描述</span></span>
<span class="line"><span>        Description *string \`json:&quot;description,optional&quot; validate:&quot;omitempty,max=100&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // API group | API分组</span></span>
<span class="line"><span>        Group *string \`json:&quot;group,optional&quot; validate:&quot;omitempty,min=1,max=20&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // API request method e.g. POST | API请求类型 如POST</span></span>
<span class="line"><span>        Method *string \`json:&quot;method,optional&quot; validate:&quot;omitempty,uppercase,min=3,max=7&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Whether is required | 是否是必须的 api</span></span>
<span class="line"><span>        IsRequired *bool \`json:&quot;isRequired,optional&quot;\`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // The response data of API list | API列表数据</span></span>
<span class="line"><span>    ApiListResp {</span></span>
<span class="line"><span>        BaseDataInfo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // API list data | API 列表数据</span></span>
<span class="line"><span>        Data ApiListInfo \`json:&quot;data&quot;\`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // API list data | API 列表数据</span></span>
<span class="line"><span>    ApiListInfo {</span></span>
<span class="line"><span>        BaseListInfo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // The API list data | API列表数据</span></span>
<span class="line"><span>        Data  []ApiInfo  \`json:&quot;data&quot;\`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Get API list request params | API列表请求参数</span></span>
<span class="line"><span>    ApiListReq {</span></span>
<span class="line"><span>        PageInfo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // API path | API路径</span></span>
<span class="line"><span>        Path *string \`json:&quot;path,optional&quot; validate:&quot;omitempty,max=200&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // API Description | API 描述</span></span>
<span class="line"><span>        Description *string \`json:&quot;description,optional&quot; validate:&quot;omitempty,max=100&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // API group | API分组</span></span>
<span class="line"><span>        Group *string \`json:&quot;group,optional&quot; validate:&quot;omitempty,max=20&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // API request method e.g. POST | API请求类型 如POST</span></span>
<span class="line"><span>        Method *string \`json:&quot;method,optional&quot; validate:&quot;omitempty,uppercase,min=3,max=7&quot;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Whether is required | 是否是必须的 api</span></span>
<span class="line"><span>        IsRequired *bool \`json:&quot;isRequired,optional&quot;\`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // API information response | API信息返回体</span></span>
<span class="line"><span>    ApiInfoResp {</span></span>
<span class="line"><span>        BaseDataInfo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // API information | API数据</span></span>
<span class="line"><span>        Data ApiInfo \`json:&quot;data&quot;\`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@server(</span></span>
<span class="line"><span>    jwt: Auth</span></span>
<span class="line"><span>    group: api</span></span>
<span class="line"><span>    middleware: Authority</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service Core {</span></span>
<span class="line"><span>    // oauthLogin</span></span>
<span class="line"><span>    @handler oauthLogin</span></span>
<span class="line"><span>    post /oauthprovider/oauth_login (OauthLoginReq) returns (OauthRedirectResp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // oauthCallback</span></span>
<span class="line"><span>    @handler oauthCallback</span></span>
<span class="line"><span>    post /oauthprovider/oauth_callback (CallbackReq) returns (UserInfo)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Create API information | 创建API</span></span>
<span class="line"><span>    @handler createApi</span></span>
<span class="line"><span>    post /api/create(ApiInfo) returns (BaseMsgResp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Update API information | 创建API</span></span>
<span class="line"><span>    @handler updateApi</span></span>
<span class="line"><span>    post /api/update(ApiInfo) returns (BaseMsgResp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Delete API information | 删除API信息</span></span>
<span class="line"><span>    @handler deleteApi</span></span>
<span class="line"><span>    post /api/delete (IDsReq) returns (BaseMsgResp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Get API list | 获取API列表</span></span>
<span class="line"><span>    @handler getApiList</span></span>
<span class="line"><span>    post /api/list (ApiListReq) returns (ApiListResp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Get API by ID | 通过ID获取API</span></span>
<span class="line"><span>    @handler getApiById</span></span>
<span class="line"><span>    post /api (IDReq) returns (ApiInfoResp)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们测试将 oauth provider 生成到 api 的文件中，发现会自动生成同一个 group 内的所有方法（除了 CRUD）， 这个命令极大方便了 api 的开发</p>`,7),e=[l];function t(d,r){return a(),n("div",null,e)}const o=s(p,[["render",t],["__file","7-proto2api.html.vue"]]),v=JSON.parse('{"path":"/zh/guide/quick-start/extra/7-proto2api.html","title":"Proto转Api","lang":"zh-CN","frontmatter":{"order":7,"title":"Proto转Api","head":[["meta",{"name":"keywords","content":"proto, convert to api, proto 转换, protobuf"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/quick-start/extra/7-proto2api.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/quick-start/extra/7-proto2api.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Proto转Api"}],["meta",{"property":"og:description","content":"该命令用于通过 proto 生成 api 中的字段内容, 主要用于生成除了 CRUD 代码生成之外的结构体，即将 rpc 中额外的 message 转换为 api 的 type，使得 proto 接入 api 更便捷. 注意 proto 文件中必须含有对应的 group 注释 api 文件中必须已有 type 和 service, 否则建议从控制台复制..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:41:28.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Proto转Api\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"该命令用于通过 proto 生成 api 中的字段内容, 主要用于生成除了 CRUD 代码生成之外的结构体，即将 rpc 中额外的 message 转换为 api 的 type，使得 proto 接入 api 更便捷. 注意 proto 文件中必须含有对应的 group 注释 api 文件中必须已有 type 和 service, 否则建议从控制台复制..."},"headers":[{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]}],"git":{"createdTime":1689945450000,"updatedTime":1716201688000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":3},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":2.88,"words":864},"filePathRelative":"zh/guide/quick-start/extra/7-proto2api.md","localizedDate":"2023年7月21日","autoDesc":true,"excerpt":"<p>该命令用于通过 proto 生成 api 中的字段内容, 主要用于生成除了 CRUD 代码生成之外的结构体，即将 rpc 中额外的 message 转换为 api 的 type，使得 proto 接入 api 更便捷.</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> goctls</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> extra</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> proto2api</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -h</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">通过</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> proto</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 生成</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> api</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 额外数据，如</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> type</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 和</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> service</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">Usage:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  goctls</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> extra</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> proto2api</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> [flags]</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">Flags:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -a,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --api_path</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> string</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">     api</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 文件路径，若为空则会输出到控制台</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -g,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --group_name</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> string</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">   分组名称，若为空则为模型名称的小写</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -h,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --help</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">                help</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> for</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> proto2api</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -j,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --json_style</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> string</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">   JSON</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 字段的格式，默认为</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> goZero</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (default </span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"goZero\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -m,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --model_name</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> string</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">   模型名称，用于过滤</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> rpc</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">      --multiple</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">            是否为多</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> service</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 的</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> proto</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  -p,</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --proto_path</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> string</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">   proto</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 文件路径，注意为根目录下的</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> proto</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 不是</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> desc</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 文件夹中的</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> proto</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 文件</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,v as data};
