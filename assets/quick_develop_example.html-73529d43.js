import{_ as o,a as i}from"./example_en_title-65efdae2.js";import{_ as c,W as u,X as r,Y as s,Z as n,$ as a,a1 as t,a0 as k,E as l}from"./framework-eab520b4.js";const d={},v=s("h2",{id:"快速开发demo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#快速开发demo","aria-hidden":"true"},"#"),n(" 快速开发demo")],-1),m={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/suyuan32/simple-admin-file",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/suyuan32/simple-admin-core/tree/example",target:"_blank",rel:"noopener noreferrer"},y=k(`<blockquote><p>RPC服务例子</p></blockquote><blockquote><p>首先修改 rpc/core.proto</p></blockquote><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> core<span class="token punctuation">;</span>

<span class="token keyword">option</span> go_package <span class="token operator">=</span> <span class="token string">&quot;./core&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// base message</span>
<span class="token keyword">message</span> <span class="token class-name">Empty</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">IDReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> ID <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">UUIDReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> UUID <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">BaseResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> msg <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">PageInfoReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> page_size <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// user message</span>

<span class="token keyword">message</span> <span class="token class-name">LoginReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> username <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> password <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">LoginResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> role_name <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> role_value <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> role_id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">ChangePasswordReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> uuid <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> old_password <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> new_password <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">CreateOrUpdateUserReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> avatar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> role_id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> mobile <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> email <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span>  status <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> username <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> nickname <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> password <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">UserInfoResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> avatar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> role_id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> mobile <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> email <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span>  status <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> username <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> UUID <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> nickname <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> roleName <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> create_at <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> update_at <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> roleValue <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">UserListResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint32</span> total <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">UserInfoResp</span> data <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">GetUserListReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> page_size <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> username <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> nickname <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> email <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> mobile <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> role_id <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">UpdateProfileReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> uuid <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> nickname <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> email <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> mobile <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> avatar <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// menu messages</span>

<span class="token keyword">message</span> <span class="token class-name">CreateOrUpdateMenuReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint32</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> parent_id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> path <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> redirect <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> component <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> order_no <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
  <span class="token builtin">bool</span> disabled <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">Meta</span> meta <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> menu_type <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">MenuInfo</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> create_at <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> update_at <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> level <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> parent_id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> path <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> redirect <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> component <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> order_no <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token builtin">bool</span> disabled <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">Meta</span> meta <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">MenuInfo</span> children <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> menu_type <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">Meta</span> <span class="token punctuation">{</span>
  <span class="token builtin">bool</span> keep_alive <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">bool</span> hide_menu <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">bool</span> hide_breadcrumb <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> current_active_menu <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> title <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> icon <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  <span class="token builtin">bool</span> close_tab <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">MenuInfoList</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> total <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">MenuInfo</span> data <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">MenuRoleInfo</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> menu_id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> role_id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">MenuRoleListResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> total <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">MenuRoleInfo</span> data <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">CreateMenuParamReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> menu_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> type <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> key <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> value <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">UpdateMenuParamReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> menu_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> type <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> key <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> value <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">MenuParamResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> menu_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> type <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> key <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> value <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> create_at <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> update_at <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">MenuParamListResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> total <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">MenuParamResp</span> data <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// role messages</span>

<span class="token keyword">message</span> <span class="token class-name">RoleInfo</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> value <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> default_router <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> status <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> remark <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> order_no <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> createdAt <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">RoleListResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> total <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">RoleInfo</span> data <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">SetStatusReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">uint32</span> status <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// casbin</span>
<span class="token keyword">message</span> <span class="token class-name">UpdatePolicyReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> role_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">PolicyPartInfo</span> rules <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">PolicyPartInfo</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> path <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> method <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">CreatePolicyReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> role_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">PolicyPartInfo</span> info <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// api message</span>
<span class="token keyword">message</span> <span class="token class-name">ApiInfo</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> create_at <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> path <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> description <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> group <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> method <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">ApiListResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> total <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">ApiInfo</span> data <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">ApiPageReq</span> <span class="token punctuation">{</span>
  <span class="token positional-class-name class-name">PageInfoReq</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> path <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> description <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> method <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> group <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// authorization message</span>

<span class="token keyword">message</span> <span class="token class-name">RoleMenuAuthorityReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> role_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token builtin">uint64</span> menu_id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// return the role&#39;s authorization menu&#39;s ids</span>
<span class="token keyword">message</span> <span class="token class-name">RoleMenuAuthorityResp</span> <span class="token punctuation">{</span>
  <span class="token keyword">repeated</span> <span class="token builtin">uint64</span> menu_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// example</span>
<span class="token keyword">message</span> <span class="token class-name">HelloReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// service</span>

<span class="token keyword">service</span> <span class="token class-name">core</span> <span class="token punctuation">{</span>
  <span class="token comment">// init</span>
  <span class="token keyword">rpc</span> <span class="token function">initDatabase</span> <span class="token punctuation">(</span><span class="token class-name">Empty</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// user service</span>
  <span class="token keyword">rpc</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">LoginReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">LoginResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">changePassword</span> <span class="token punctuation">(</span><span class="token class-name">ChangePasswordReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">createOrUpdateUser</span> <span class="token punctuation">(</span><span class="token class-name">CreateOrUpdateUserReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">getUserById</span> <span class="token punctuation">(</span><span class="token class-name">UUIDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">UserInfoResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">getUserList</span> <span class="token punctuation">(</span><span class="token class-name">GetUserListReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">UserListResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">deleteUser</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">updateProfile</span> <span class="token punctuation">(</span><span class="token class-name">UpdateProfileReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// menu service</span>
  <span class="token comment">//menu management</span>
  <span class="token keyword">rpc</span> <span class="token function">createOrUpdateMenu</span> <span class="token punctuation">(</span><span class="token class-name">CreateOrUpdateMenuReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">deleteMenu</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">getMenuListByRole</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">MenuInfoList</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">getMenuByPage</span> <span class="token punctuation">(</span><span class="token class-name">PageInfoReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">MenuInfoList</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">createMenuParam</span> <span class="token punctuation">(</span><span class="token class-name">CreateMenuParamReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">updateMenuParam</span> <span class="token punctuation">(</span><span class="token class-name">UpdateMenuParamReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">deleteMenuParam</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">getMenuParamById</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">MenuParamResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">geMenuParamListById</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">MenuParamListResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// role service</span>
  <span class="token keyword">rpc</span> <span class="token function">createOrUpdateRole</span> <span class="token punctuation">(</span><span class="token class-name">RoleInfo</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">deleteRole</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">getRoleById</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">RoleInfo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">getRoleList</span> <span class="token punctuation">(</span><span class="token class-name">PageInfoReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">RoleListResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">setRoleStatus</span> <span class="token punctuation">(</span><span class="token class-name">SetStatusReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// api management service</span>
  <span class="token keyword">rpc</span> <span class="token function">createOrUpdateApi</span> <span class="token punctuation">(</span><span class="token class-name">ApiInfo</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">deleteApi</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">getApiList</span> <span class="token punctuation">(</span><span class="token class-name">ApiPageReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">ApiListResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// authorization management service</span>
  <span class="token keyword">rpc</span> <span class="token function">getMenuAuthority</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">RoleMenuAuthorityResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">rpc</span> <span class="token function">createOrUpdateMenuAuthority</span> <span class="token punctuation">(</span><span class="token class-name">RoleMenuAuthorityReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// example</span>
  <span class="token keyword">rpc</span> <span class="token function">hello</span> <span class="token punctuation">(</span><span class="token class-name">HelloReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>添加 example rpc接口 <br> 在rpc目录下运行</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls rpc protoc core.proto <span class="token parameter variable">--proto_path</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-core/rpc/ <span class="token parameter variable">--go_out</span><span class="token operator">=</span>./types --go-grpc_out<span class="token operator">=</span>./types <span class="token parameter variable">--zrpc_out</span><span class="token operator">=</span>./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>proto_path需要绝对路径</p></blockquote><p>修改 internal/logic/hellologic.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> logic

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/internal/svc&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/types/core&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> HelloLogic <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ctx    context<span class="token punctuation">.</span>Context
	svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext
	logx<span class="token punctuation">.</span>Logger
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewHelloLogic</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> <span class="token operator">*</span>HelloLogic <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>HelloLogic<span class="token punctuation">{</span>
		ctx<span class="token punctuation">:</span>    ctx<span class="token punctuation">,</span>
		svcCtx<span class="token punctuation">:</span> svcCtx<span class="token punctuation">,</span>
		Logger<span class="token punctuation">:</span> logx<span class="token punctuation">.</span><span class="token function">WithContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// example</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>HelloLogic<span class="token punctuation">)</span> <span class="token function">Hello</span><span class="token punctuation">(</span>in <span class="token operator">*</span>core<span class="token punctuation">.</span>HelloReq<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>core<span class="token punctuation">.</span>BaseResp<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>core<span class="token punctuation">.</span>BaseResp<span class="token punctuation">{</span>Msg<span class="token punctuation">:</span> in<span class="token punctuation">.</span>Name<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>然后在 api/desc/ 目录下添加 example.api</p></blockquote><div class="language-api line-numbers-mode" data-ext="api"><pre class="language-api"><code>syntax = &quot;v1&quot;

info(
    title: &quot;type title here&quot;
    desc: &quot;type desc here&quot;
    author: &quot;type author here&quot;
    email: &quot;type email here&quot;
    version: &quot;type version here&quot;
)

type (
    // Hello response | Hello返回信息
    // swagger:response HelloResp
    HelloResp {
        // Msg
        Msg    string  \`json:&quot;msg&quot;\`

    }

        // Hello request | Hello请求
        // swagger:model HelloReq
    HelloReq {
        // Name | 名称
        // Required: true
        Name   string \`json:&quot;name&quot; validate:&quot;max=10&quot;\`
    }
)

@server(
    jwt: Auth
    group: example
)

service core {
    // swagger:route POST /example/hello example hello
    // Hello | Hello
    // Parameters:
    //  + name: body
    //    require: true
    //    in: body
    //    type: HelloReq
    // Responses:
    //   200: HelloResp
    //   401: HelloResp
    //   500: HelloResp
    @handler hello
    post /example/hello (HelloReq) returns (HelloResp)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>修改 core.api</p></blockquote><div class="language-api line-numbers-mode" data-ext="api"><pre class="language-api"><code>syntax = &quot;v1&quot;

info(
	title: &quot;core service&quot;
	desc: &quot;this is the api discribe file for core services&quot;
	author: &quot;ryansu&quot;
	email: &quot;yuansu.china.work@gmail.com&quot;
	version: &quot;v1.0&quot;
)

import &quot;role.api&quot;
import &quot;user.api&quot;
import &quot;menu.api&quot;
import &quot;captcha.api&quot;
import &quot;apis.api&quot;
import &quot;authority.api&quot;
import &quot;example.api&quot;         # here
import &quot;base.api&quot;

@server(
	group: core
)

service core {
	// swagger:route get /core/health core healthCheck
	// Check the system status | 检查系统状态
	@handler healthCheck
	get /core/health
	
	// swagger:route get /core/init/database core initDatabase
	// Initialize database | 初始化数据库
	// Responses:
	//   200: SimpleMsg
	//   500: SimpleMsg
	@handler initDatabase
	get /core/init/database returns (SimpleMsg)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在 desc目录下执行</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api go <span class="token parameter variable">-api</span> core.api <span class="token parameter variable">-dir</span> <span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>修改 api/internal/logic/example/hellologic.go</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> example

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/rpc/types/core&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/svc&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/api/internal/types&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> HelloLogic <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	logx<span class="token punctuation">.</span>Logger
	ctx    context<span class="token punctuation">.</span>Context
	svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewHelloLogic</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> svcCtx <span class="token operator">*</span>svc<span class="token punctuation">.</span>ServiceContext<span class="token punctuation">)</span> <span class="token operator">*</span>HelloLogic <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>HelloLogic<span class="token punctuation">{</span>
		Logger<span class="token punctuation">:</span> logx<span class="token punctuation">.</span><span class="token function">WithContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">,</span>
		ctx<span class="token punctuation">:</span>    ctx<span class="token punctuation">,</span>
		svcCtx<span class="token punctuation">:</span> svcCtx<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>HelloLogic<span class="token punctuation">)</span> <span class="token function">Hello</span><span class="token punctuation">(</span>req <span class="token operator">*</span>types<span class="token punctuation">.</span>HelloReq<span class="token punctuation">)</span> <span class="token punctuation">(</span>resp <span class="token operator">*</span>types<span class="token punctuation">.</span>HelloResp<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	result<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span>svcCtx<span class="token punctuation">.</span>CoreRpc<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>core<span class="token punctuation">.</span>HelloReq<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> req<span class="token punctuation">.</span>Name<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>types<span class="token punctuation">.</span>HelloResp<span class="token punctuation">{</span>Msg<span class="token punctuation">:</span> result<span class="token punctuation">.</span>Msg<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>由于默认需要支持两种语言，所以要分别在 pkg/i18n/locals/zh.json 和 pkg/i18n/locals/en.json 添加 route</p></blockquote><p><img src="`+o+'" alt="example" loading="lazy"><img src="'+i+`" alt="example" loading="lazy"></p><blockquote><p>启动 rpc 和 api</p></blockquote><p>分别在 api rpc 目录下执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run core.go <span class="token parameter variable">-f</span> etc/core.yaml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21);function q(w,R){const e=l("ExternalLinkIcon"),p=l("RouterLink");return u(),r("div",null,[v,s("blockquote",null,[s("p",null,[n("除非想为 core 服务贡献代码，否则不建议将自己的代码写进 core 。请模仿 "),s("a",m,[n("example-api"),a(e)]),n(" 和 "),s("a",b,[n("simple-admin-file"),a(e)]),n(" 创建自己的服务 查看 "),a(p,{to:"/zh/guide/quick-start/api_example.html"},{default:t(()=>[n("API微服务")]),_:1}),n(" 快速创建 API")])]),s("p",null,[s("a",g,[n("例子"),a(e)])]),s("blockquote",null,[s("p",null,[n("安装goctls "),a(p,{to:"/zh/guide/basic-config/simple-admin-tools.html"},{default:t(()=>[n("Simple-admin-tool")]),_:1})])]),y,s("blockquote",null,[s("p",null,[n("网页端开发 "),a(p,{to:"/zh/guide/quick-start/core/web_develop_example.html"},{default:t(()=>[n("Simple Admin UI")]),_:1})])])])}const _=c(d,[["render",q],["__file","quick_develop_example.html.vue"]]);export{_ as default};
