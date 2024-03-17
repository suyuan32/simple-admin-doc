import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as s}from"./app-vt1uXxlM.js";const a={},t=s(`<blockquote><p>goctls &gt;= 1.5.14</p></blockquote><p>This command is used to generate field content in the api through proto. It is mainly used to generate structures other than CRUD code generation, that is, convert extra messages in rpc into the type of the api, making it more convenient for proto to access the api.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ goctls extra proto2api <span class="token parameter variable">-h</span>
Generate additional data <span class="token keyword">for</span> API, such as <span class="token builtin class-name">type</span> and service, through proto.

Usage:
  goctls extra proto2api <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -a, <span class="token parameter variable">--api_path</span> string     API <span class="token function">file</span> path. If it is empty, the output will be displayed on the console.
  -g, <span class="token parameter variable">--group_name</span> string   Group name. If it is empty, it will be the lowercase of the model name.
  -h, <span class="token parameter variable">--help</span>                <span class="token builtin class-name">help</span> <span class="token keyword">for</span> proto2api
  -j, <span class="token parameter variable">--json_style</span> string   The <span class="token function">format</span> of the JSON fields, defaulting to goZero. <span class="token punctuation">(</span>default <span class="token string">&quot;goZero&quot;</span><span class="token punctuation">)</span>
  -m, <span class="token parameter variable">--model_name</span> string   Model name used <span class="token keyword">for</span> filtering RPC.
      <span class="token parameter variable">--multiple</span>            Whether it is a proto <span class="token keyword">for</span> multiple services.
  -p, <span class="token parameter variable">--proto_path</span> string   Proto <span class="token function">file</span> path. Note that it is the proto <span class="token function">file</span> <span class="token keyword">in</span> the root directory, not <span class="token keyword">in</span> the desc folder.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>The proto file must contain the corresponding <code>group</code> annotations. The api file must already have <code>type</code> and <code>service</code> defined, otherwise it is recommended to copy from the console.</p></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls extra proto2api <span class="token parameter variable">-m</span> OauthProvider <span class="token parameter variable">-p</span> D:/projects/simpleadmin/feature-workspace/simple-admin-core/rpc/core.proto
<span class="token parameter variable">-a</span> D:/projects/simpleadmin/feature-workspace/simple-admin-core/api/desc/core/api.api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>syntax = &quot;v1&quot;

info(
    title: &quot;API management&quot;
    desc: &quot;API management is used to register APIs and manage APIs&quot;
    author: &quot;Ryan Su&quot;
    email: &quot;yuansu.china.work@gmail.com&quot;
    version: &quot;v1.0&quot;
)

import &quot;../base.api&quot;

type (
    // OauthRedirectResp
    OauthRedirectResp {
        // Url
        Url  string \`json:&quot;url&quot;\`

    }

    // UserInfo
    UserInfo {
        // CreatedAt
        CreatedAt  *int64 \`json:&quot;createdAt,optional&quot;\`

        // UpdatedAt
        UpdatedAt  *int64 \`json:&quot;updatedAt,optional&quot;\`

        // Status
        Status  *uint32 \`json:&quot;status,optional&quot;\`

        // Username
        Username  *string \`json:&quot;username,optional&quot;\`

        // Password
        Password  *string \`json:&quot;password,optional&quot;\`

        // Nickname
        Nickname  *string \`json:&quot;nickname,optional&quot;\`

        // HomePath
        HomePath  *string \`json:&quot;homePath,optional&quot;\`

        // RoleIds
        RoleIds  []uint64 \`json:&quot;roleIds&quot;\`

        // Mobile
        Mobile  *string \`json:&quot;mobile,optional&quot;\`

        // Avatar
        Avatar  *string \`json:&quot;avatar,optional&quot;\`

        // DepartmentId
        DepartmentId  *uint64 \`json:&quot;departmentId,optional&quot;\`

        // PositionIds
        PositionIds  []uint64 \`json:&quot;positionIds&quot;\`

        // RoleCodes
        RoleCodes  []string \`json:&quot;roleCodes&quot;\`

    }

    // CallbackReq
    CallbackReq {
        // State
        State  string \`json:&quot;state&quot;\`

        // Code
        Code  string \`json:&quot;code&quot;\`

    }

    // OauthLoginReq
    OauthLoginReq {
        // State
        State  string \`json:&quot;state&quot;\`

        // Provider
        Provider  string \`json:&quot;provider&quot;\`

    }

    // The API information | API信息
    ApiInfo {
        BaseIDInfo

        // Translated Name | 多语言名称
        Trans string \`json:&quot;trans,optional&quot;\`

        // API path | API路径
        Path *string \`json:&quot;path,optional&quot; validate:&quot;omitempty,min=1,max=80&quot;\`

        // API Description | API 描述
        Description *string \`json:&quot;description,optional&quot; validate:&quot;omitempty,max=100&quot;\`

        // API group | API分组
        Group *string \`json:&quot;group,optional&quot; validate:&quot;omitempty,min=1,max=20&quot;\`

        // API request method e.g. POST | API请求类型 如POST
        Method *string \`json:&quot;method,optional&quot; validate:&quot;omitempty,uppercase,min=3,max=7&quot;\`

        // Whether is required | 是否是必须的 api
        IsRequired *bool \`json:&quot;isRequired,optional&quot;\`
    }

    // The response data of API list | API列表数据
    ApiListResp {
        BaseDataInfo

        // API list data | API 列表数据
        Data ApiListInfo \`json:&quot;data&quot;\`
    }

    // API list data | API 列表数据
    ApiListInfo {
        BaseListInfo

        // The API list data | API列表数据
        Data  []ApiInfo  \`json:&quot;data&quot;\`
    }

    // Get API list request params | API列表请求参数
    ApiListReq {
        PageInfo

        // API path | API路径
        Path *string \`json:&quot;path,optional&quot; validate:&quot;omitempty,max=200&quot;\`

        // API Description | API 描述
        Description *string \`json:&quot;description,optional&quot; validate:&quot;omitempty,max=100&quot;\`

        // API group | API分组
        Group *string \`json:&quot;group,optional&quot; validate:&quot;omitempty,max=20&quot;\`

        // API request method e.g. POST | API请求类型 如POST
        Method *string \`json:&quot;method,optional&quot; validate:&quot;omitempty,uppercase,min=3,max=7&quot;\`

        // Whether is required | 是否是必须的 api
        IsRequired *bool \`json:&quot;isRequired,optional&quot;\`
    }

    // API information response | API信息返回体
    ApiInfoResp {
        BaseDataInfo

        // API information | API数据
        Data ApiInfo \`json:&quot;data&quot;\`
    }
)

@server(
    jwt: Auth
    group: api
    middleware: Authority
)

service Core {
    // oauthLogin
    @handler oauthLogin
    post /oauthprovider/oauth_login (OauthLoginReq) returns (OauthRedirectResp)

    // oauthCallback
    @handler oauthCallback
    post /oauthprovider/oauth_callback (CallbackReq) returns (UserInfo)

    // Create API information | 创建API
    @handler createApi
    post /api/create(ApiInfo) returns (BaseMsgResp)

    // Update API information | 创建API
    @handler updateApi
    post /api/update(ApiInfo) returns (BaseMsgResp)

    // Delete API information | 删除API信息
    @handler deleteApi
    post /api/delete (IDsReq) returns (BaseMsgResp)

    // Get API list | 获取API列表
    @handler getApiList
    post /api/list (ApiListReq) returns (ApiListResp)

    // Get API by ID | 通过ID获取API
    @handler getApiById
    post /api (IDReq) returns (ApiInfoResp)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We tested to generate the oauth provider into the api file, and found that all methods in the same group (except CRUD) will be automatically generated. This command greatly facilitates the development of API.</p>`,8),l=[t];function d(o,r){return n(),i("div",null,l)}const c=e(a,[["render",d],["__file","7-proto2api.html.vue"]]),m=JSON.parse('{"path":"/guide/quick-start/extra/7-proto2api.html","title":"Proto To Api","lang":"en-US","frontmatter":{"order":7,"title":"Proto To Api","description":"goctls >= 1.5.14 This command is used to generate field content in the api through proto. It is mainly used to generate structures other than CRUD code generation, that is, conv...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/quick-start/extra/7-proto2api.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/quick-start/extra/7-proto2api.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Proto To Api"}],["meta",{"property":"og:description","content":"goctls >= 1.5.14 This command is used to generate field content in the api through proto. It is mainly used to generate structures other than CRUD code generation, that is, conv..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-28T09:02:03.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-02-28T09:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Proto To Api\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-28T09:02:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"createdTime":1690506325000,"updatedTime":1709110923000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":2.69,"words":806},"filePathRelative":"guide/quick-start/extra/7-proto2api.md","localizedDate":"July 28, 2023","autoDesc":true,"excerpt":"<blockquote>\\n<p>goctls &gt;= 1.5.14</p>\\n</blockquote>\\n<p>This command is used to generate field content in the api through proto. It is mainly used to generate structures other than CRUD code generation, that is, convert extra messages in rpc into the type of the api, making it more convenient for proto to access the api.</p>"}');export{c as comp,m as data};
