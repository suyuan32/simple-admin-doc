import{_ as p,a as r}from"./example_en_title-a3g3dTRT.js";import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as s,d as i,e as a,g as t,r as c,o as h,f as l}from"./app-CYT6JKv1.js";const m={};function u(k,e){const n=c("RouteLink");return h(),o("div",null,[e[2]||(e[2]=s('<h2 id="rapid-development-demo" tabindex="-1"><a class="header-anchor" href="#rapid-development-demo"><span>Rapid development demo</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Unless you want to contribute code to the core service, it is not recommended to write your own code into the core. Please imitate <a href="https://github.com/suyuan32/simple-admin-example-api" target="_blank" rel="noopener noreferrer">example-api</a> and <a href="https://github.com/suyuan32/simple-admin-file" target="_blank" rel="noopener noreferrer">simple-admin-file</a> to create your own service<br><br> See <a href="/guide/quick-start/codegen/api_example">API Microservice</a> to quickly create an API</p></div><h2 id="install-goctls" tabindex="-1"><a class="header-anchor" href="#install-goctls"><span>Install goctls</span></a></h2>',3)),i("p",null,[a(n,{to:"/guide/basic-config/simple-admin-tools.html"},{default:t(()=>e[0]||(e[0]=[l("Simple-admin-tools")])),_:1})]),e[3]||(e[3]=s(`<h2 id="rpc-service-example-take-department-as-an-example" tabindex="-1"><a class="header-anchor" href="#rpc-service-example-take-department-as-an-example"><span>RPC service example, take department as an example</span></a></h2><blockquote><p>First add department.go in rpc/ent/schema folder</p></blockquote><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package schema</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;entgo.io/ent&quot;</span></span>
<span class="line"><span>	&quot;entgo.io/ent/dialect/entsql&quot;</span></span>
<span class="line"><span>	&quot;entgo.io/ent/schema&quot;</span></span>
<span class="line"><span>	&quot;entgo.io/ent/schema/edge&quot;</span></span>
<span class="line"><span>	&quot;entgo.io/ent/schema/field&quot;</span></span>
<span class="line"><span>	&quot;github.com/suyuan32/simple-admin-common/orm/ent/mixins&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Department struct {</span></span>
<span class="line"><span>	ent.Schema</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (Department) Fields() []ent.Field {</span></span>
<span class="line"><span>	return []ent.Field{</span></span>
<span class="line"><span>		field.String(&quot;name&quot;).Comment(&quot;Department name | 部门名称&quot;),</span></span>
<span class="line"><span>		field.String(&quot;ancestors&quot;).Comment(&quot;Parents&#39; IDs | 父级列表&quot;),</span></span>
<span class="line"><span>		field.String(&quot;leader&quot;).Comment(&quot;Department leader | 部门负责人&quot;),</span></span>
<span class="line"><span>		field.String(&quot;phone&quot;).Comment(&quot;Leader&#39;s phone number | 负责人电话&quot;),</span></span>
<span class="line"><span>		field.String(&quot;email&quot;).Comment(&quot;Leader&#39;s email | 部门负责人电子邮箱&quot;),</span></span>
<span class="line"><span>		field.String(&quot;remark&quot;).Comment(&quot;Remark | 备注&quot;),</span></span>
<span class="line"><span>		field.Uint64(&quot;parent_id&quot;).Optional().Default(0).Comment(&quot;Parent department ID | 父级部门ID&quot;),</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (Department) Mixin() []ent.Mixin {</span></span>
<span class="line"><span>	return []ent.Mixin{</span></span>
<span class="line"><span>		mixins.BaseMixin{},</span></span>
<span class="line"><span>		mixins.StatusMixin{},</span></span>
<span class="line"><span>		mixins.SortMixin{},</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (Department) Edges() []ent.Edge {</span></span>
<span class="line"><span>	return []ent.Edge{</span></span>
<span class="line"><span>		edge.To(&quot;children&quot;, Department.Type).From(&quot;parent&quot;).Unique().Field(&quot;parent_id&quot;),</span></span>
<span class="line"><span>		edge.From(&quot;users&quot;, User.Type).Ref(&quot;departments&quot;),</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (Department) Annotations() []schema.Annotation {</span></span>
<span class="line"><span>	return []schema.Annotation{</span></span>
<span class="line"><span>		entsql.Annotation{Table: &quot;sys_departments&quot;},</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generate-department-rpc-code" tabindex="-1"><a class="header-anchor" href="#generate-department-rpc-code"><span>Generate department RPC code</span></a></h2><p>Execute in the project root directory</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gen-rpc-ent-logic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> model=Department</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> group=department</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>actually execute the command</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">goctls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rpc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ent</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --schema=./rpc/ent/schema</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --service_name=core</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --project_name=core</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --o=./rpc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --model=Department</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --group=department</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --proto_out=./rpc/desc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /department.proto</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>Need to execute <code>make gen-rpc</code> to generate the types file</p></blockquote><h3 id="since-the-core-ent-file-directory-is-in-rpc-the-import-path-in-the-logic-file-needs-to-be-modified" tabindex="-1"><a class="header-anchor" href="#since-the-core-ent-file-directory-is-in-rpc-the-import-path-in-the-logic-file-needs-to-be-modified"><span>Since the core ent file directory is in rpc, the import path in the logic file needs to be modified</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;context&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/suyuan32/simple-admin-core/rpc/internal/svc&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/suyuan32/simple-admin-core/rpc/internal/utils/errorhandler&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/suyuan32/simple-admin-core/rpc/types/core&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/zeromicro/go-zero/core/logx&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.com/suyuan32/simple-admin-common/i18n&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-example" tabindex="-1"><a class="header-anchor" href="#api-example"><span>API example</span></a></h2><p>Execute in the api directory</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">goctls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> api</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> proto</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --proto=/home/ryan/GolandProjects/simple-admin-core/rpc/core.proto</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --api_service_name=core</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --rpc_service_name=Core</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --o=./</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --model=Department</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --rpc_name=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Core</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --grpc_package=github.com/suyuan32/simple-admin-core/rpc/types/core</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The CRUD code will be automatically generated, and the import also needs to be modified</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Since two languages need to be supported by default, add routes to api/internal/i18n/locals/zh.json and api/internal/i18n/locals/en.json respectively</p><p><img src="`+p+'" alt="example" loading="lazy"><img src="'+r+'" alt="example" loading="lazy"></p></div><h3 id="start-rpc-and-api" tabindex="-1"><a class="header-anchor" href="#start-rpc-and-api"><span>Start rpc and api</span></a></h3><p>Execute in the api rpc directory respectively</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> core.go</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> etc/core.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="web-development" tabindex="-1"><a class="header-anchor" href="#web-development"><span>Web development</span></a></h3>',20)),i("p",null,[a(n,{to:"/guide/quick-start/core/web_develop_example.html"},{default:t(()=>e[1]||(e[1]=[l("Simple Admin UI")])),_:1})])])}const y=d(m,[["render",u],["__file","quick_develop_example.html.vue"]]),q=JSON.parse('{"path":"/guide/quick-start/core/quick_develop_example.html","title":"Backend Development","lang":"en-US","frontmatter":{"order":1,"title":"Backend Development","head":[["meta",{"name":"keywords","content":"core development, tutorial, configuration"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://doc.ryansu.tech/zh/guide/quick-start/core/quick_develop_example.html"}],["meta",{"property":"og:url","content":"https://doc.ryansu.tech/guide/quick-start/core/quick_develop_example.html"}],["meta",{"property":"og:site_name","content":"Simple Admin"}],["meta",{"property":"og:title","content":"Backend Development"}],["meta",{"property":"og:description","content":"Rapid development demo Warning Unless you want to contribute code to the core service, it is not recommended to write your own code into the core. Please imitate example-api and..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.ryansu.tech/assets/example_zh_title.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Backend Development\\",\\"image\\":[\\"https://doc.ryansu.tech/assets/example_zh_title.png\\",\\"https://doc.ryansu.tech/assets/example_en_title.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Rapid development demo Warning Unless you want to contribute code to the core service, it is not recommended to write your own code into the core. Please imitate example-api and...","gitInclude":[]},"headers":[{"level":2,"title":"Rapid development demo","slug":"rapid-development-demo","link":"#rapid-development-demo","children":[]},{"level":2,"title":"Install goctls","slug":"install-goctls","link":"#install-goctls","children":[]},{"level":2,"title":"RPC service example, take department as an example","slug":"rpc-service-example-take-department-as-an-example","link":"#rpc-service-example-take-department-as-an-example","children":[]},{"level":2,"title":"Generate department RPC code","slug":"generate-department-rpc-code","link":"#generate-department-rpc-code","children":[{"level":3,"title":"Since the core ent file directory is in rpc, the import path in the logic file needs to be modified","slug":"since-the-core-ent-file-directory-is-in-rpc-the-import-path-in-the-logic-file-needs-to-be-modified","link":"#since-the-core-ent-file-directory-is-in-rpc-the-import-path-in-the-logic-file-needs-to-be-modified","children":[]}]},{"level":2,"title":"API example","slug":"api-example","link":"#api-example","children":[{"level":3,"title":"Start rpc and api","slug":"start-rpc-and-api","link":"#start-rpc-and-api","children":[]},{"level":3,"title":"Web development","slug":"web-development","link":"#web-development","children":[]}]}],"readingTime":{"minutes":1.36,"words":408},"filePathRelative":"guide/quick-start/core/quick_develop_example.md","autoDesc":true,"excerpt":"<h2>Rapid development demo</h2>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">Warning</p>\\n<p>Unless you want to contribute code to the core service, it is not recommended to write your own code into the core. Please imitate <a href=\\"https://github.com/suyuan32/simple-admin-example-api\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">example-api</a> and <a href=\\"https://github.com/suyuan32/simple-admin-file\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">simple-admin-file</a> to create your own service<br>\\n<br>\\nSee <a href=\\"/guide/quick-start/codegen/api_example\\">API Microservice</a> to quickly create an API</p>\\n</div>"}');export{y as comp,q as data};