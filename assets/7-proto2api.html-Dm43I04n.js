import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,e as s}from"./app-CK-zxo63.js";const a={},t=s(`<blockquote><p>goctls &gt;= 1.5.14</p></blockquote><p>该命令用于通过 proto 生成 api 中的字段内容, 主要用于生成除了 CRUD 代码生成之外的结构体，即将 rpc 中额外的 message 转换为 api 的 type，使得 proto 接入 api 更便捷.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ goctls extra proto2api <span class="token parameter variable">-h</span>
通过 proto 生成 api 额外数据，如 <span class="token builtin class-name">type</span> 和 <span class="token function">service</span>

Usage:
  goctls extra proto2api <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -a, <span class="token parameter variable">--api_path</span> string     api 文件路径，若为空则会输出到控制台
  -g, <span class="token parameter variable">--group_name</span> string   分组名称，若为空则为模型名称的小写
  -h, <span class="token parameter variable">--help</span>                <span class="token builtin class-name">help</span> <span class="token keyword">for</span> proto2api
  -j, <span class="token parameter variable">--json_style</span> string   JSON 字段的格式，默认为 goZero <span class="token punctuation">(</span>default <span class="token string">&quot;goZero&quot;</span><span class="token punctuation">)</span>
  -m, <span class="token parameter variable">--model_name</span> string   模型名称，用于过滤 rpc
      <span class="token parameter variable">--multiple</span>            是否为多 <span class="token function">service</span> 的 proto
  -p, <span class="token parameter variable">--proto_path</span> string   proto 文件路径，注意为根目录下的 proto 不是 desc 文件夹中的 proto 文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>proto 文件中必须含有对应的 group 注释 api 文件中必须已有 type 和 service, 否则建议从控制台复制</p></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctls extra proto2api <span class="token parameter variable">-m</span> OauthProvider <span class="token parameter variable">-p</span> D:/projects/simpleadmin/feature-workspace/simple-admin-core/rpc/core.proto
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们测试将 oauth provider 生成到 api 的文件中，发现会自动生成同一个 group 内的所有方法（除了 CRUD）， 这个命令极大方便了 api 的开发</p>`,8),l=[t];function r(d,o){return i(),e("div",null,l)}const c=n(a,[["render",r],["__file","7-proto2api.html.vue"]]),p=JSON.parse('{"path":"/zh/guide/quick-start/extra/7-proto2api.html","title":"Proto转Api","lang":"zh-CN","frontmatter":{"order":7,"title":"Proto转Api","description":"goctls >= 1.5.14 该命令用于通过 proto 生成 api 中的字段内容, 主要用于生成除了 CRUD 代码生成之外的结构体，即将 rpc 中额外的 message 转换为 api 的 type，使得 proto 接入 api 更便捷. 注意 proto 文件中必须含有对应的 group 注释 api 文件中必须已有 type 和 se...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://doc.ryansu.tech/guide/quick-start/extra/7-proto2api.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/zh/guide/quick-start/extra/7-proto2api.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Proto转Api"}],["meta",{"property":"og:description","content":"goctls >= 1.5.14 该命令用于通过 proto 生成 api 中的字段内容, 主要用于生成除了 CRUD 代码生成之外的结构体，即将 rpc 中额外的 message 转换为 api 的 type，使得 proto 接入 api 更便捷. 注意 proto 文件中必须含有对应的 group 注释 api 文件中必须已有 type 和 se..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-28T09:02:03.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2024-02-28T09:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Proto转Api\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-28T09:02:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]}],"git":{"createdTime":1689945450000,"updatedTime":1709110923000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2},{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":2.84,"words":853},"filePathRelative":"zh/guide/quick-start/extra/7-proto2api.md","localizedDate":"2023年7月21日","autoDesc":true,"excerpt":"<blockquote>\\n<p>goctls &gt;= 1.5.14</p>\\n</blockquote>\\n<p>该命令用于通过 proto 生成 api 中的字段内容, 主要用于生成除了 CRUD 代码生成之外的结构体，即将 rpc 中额外的 message 转换为 api 的 type，使得 proto 接入 api 更便捷.</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ goctls extra proto2api <span class=\\"token parameter variable\\">-h</span>\\n通过 proto 生成 api 额外数据，如 <span class=\\"token builtin class-name\\">type</span> 和 <span class=\\"token function\\">service</span>\\n\\nUsage:\\n  goctls extra proto2api <span class=\\"token punctuation\\">[</span>flags<span class=\\"token punctuation\\">]</span>\\n\\nFlags:\\n  -a, <span class=\\"token parameter variable\\">--api_path</span> string     api 文件路径，若为空则会输出到控制台\\n  -g, <span class=\\"token parameter variable\\">--group_name</span> string   分组名称，若为空则为模型名称的小写\\n  -h, <span class=\\"token parameter variable\\">--help</span>                <span class=\\"token builtin class-name\\">help</span> <span class=\\"token keyword\\">for</span> proto2api\\n  -j, <span class=\\"token parameter variable\\">--json_style</span> string   JSON 字段的格式，默认为 goZero <span class=\\"token punctuation\\">(</span>default <span class=\\"token string\\">\\"goZero\\"</span><span class=\\"token punctuation\\">)</span>\\n  -m, <span class=\\"token parameter variable\\">--model_name</span> string   模型名称，用于过滤 rpc\\n      <span class=\\"token parameter variable\\">--multiple</span>            是否为多 <span class=\\"token function\\">service</span> 的 proto\\n  -p, <span class=\\"token parameter variable\\">--proto_path</span> string   proto 文件路径，注意为根目录下的 proto 不是 desc 文件夹中的 proto 文件\\n\\n</code></pre></div>"}');export{c as comp,p as data};
