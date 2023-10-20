import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,e as n}from"./app-9db0473b.js";const t={},i=n(`<h2 id="ent-文件生成" tabindex="-1"><a class="header-anchor" href="#ent-文件生成" aria-hidden="true">#</a> Ent 文件生成</h2><h3 id="extra-ent-template-模板生成" tabindex="-1"><a class="header-anchor" href="#extra-ent-template-模板生成" aria-hidden="true">#</a> <code>extra ent template</code> 模板生成</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra ent template <span class="token parameter variable">-u</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数名称</th><th>必须</th><th>默认值</th><th>介绍</th></tr></thead><tbody><tr><td>update</td><td>否</td><td>false</td><td>是否更新本地所有 template 及 ent 版本</td></tr><tr><td>list</td><td>否</td><td>false</td><td>列出所有支持的模板</td></tr><tr><td>dir</td><td>否</td><td></td><td>ent 目录，若为空则会尝试自动查找，需要在项目根目录执行才可以自动查找</td></tr><tr><td>add</td><td>否</td><td></td><td>添加模板，需要为列表内的模板</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>用法：
  goctl extra ent template <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>

选项：
  -a, <span class="token parameter variable">--add</span> string   添加 ent 模板
  -d, <span class="token parameter variable">--dir</span> string   ent 目录。如果为空，则 goctls 将自动查找
  -h, <span class="token parameter variable">--help</span>         显示帮助信息
  -l, <span class="token parameter variable">--list</span>         列出所有支持的模板
  -u, <span class="token parameter variable">--update</span>       更新所有模板
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extra-ent-mixin-模板生成" tabindex="-1"><a class="header-anchor" href="#extra-ent-mixin-模板生成" aria-hidden="true">#</a> <code>extra ent mixin</code> 模板生成</h3><blockquote><p>goctls &gt;= 1.5.14</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra ent mixin <span class="token parameter variable">-a</span> soft_delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls extra ent mixin <span class="token parameter variable">-h</span>
Usage:
  goctls extra ent mixin <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -a, <span class="token parameter variable">--add</span> string   为 ent 添加 Mixin 模板
  -d, <span class="token parameter variable">--dir</span> string   ent 目录。如果为空，goctls 将自动查找它
  -h, <span class="token parameter variable">--help</span>         <span class="token builtin class-name">help</span> <span class="token keyword">for</span> mixin
  -l, <span class="token parameter variable">--list</span>         列出所有支持的模板
  -u, <span class="token parameter variable">--update</span>       更新所有模板
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前已支持软删除模板</p><h3 id="extra-ent-import-数据库结构导出到-schema" tabindex="-1"><a class="header-anchor" href="#extra-ent-import-数据库结构导出到-schema" aria-hidden="true">#</a> <code>extra ent import</code> 数据库结构导出到 schema</h3><blockquote><p>goctls &gt;= 1.5.18</p></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><p>建议直接在项目<strong>根目录</strong>执行命令，可以不用配置 <code>-o</code> 参数, 例如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra ent <span class="token function">import</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;mysql://root:simple-admin.@tcp(localhost:3306)/simple_admin?charset=utf8mb4&amp;parseTime=True&amp;loc=Local&quot;</span> <span class="token parameter variable">-t</span> <span class="token string">&quot;sys_tokens&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls extra ent <span class="token function">import</span> <span class="token parameter variable">-h</span>
从数据库生成 Ent Schema

Usage:
  goctls extra ent <span class="token function">import</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -d, <span class="token parameter variable">--dsn</span> string      数据库的 DSN 地址，支持 mysql 和 postgres。 例子：<span class="token string">&quot;mysql://user:pass@tcp(localhost:3306)/dbname&quot;</span>
                        <span class="token string">&quot;postgres://user:pass@host:port/dbname&quot;</span>
  -h, <span class="token parameter variable">--help</span>            <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token function">import</span>
  -o, <span class="token parameter variable">--output</span> string   输出路径，为项目根目录
  -t, <span class="token parameter variable">--tables</span> string   指定数据表，例子： sys_users,sys_tokens

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>goctls 支持生成 index 索引，但是索引的名称的后缀必须为字段名称，且只支持生成单索引，不支持复合索引</p></div><h3 id="extra-ent-schema-命令生成空的-schema-文件" tabindex="-1"><a class="header-anchor" href="#extra-ent-schema-命令生成空的-schema-文件" aria-hidden="true">#</a> <code>extra ent schema</code> 命令生成空的 schema 文件</h3><blockquote><p>goctls &gt;= 1.5.20</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls extra ent schema <span class="token parameter variable">-h</span>
生成 schema 空白文件

Usage:
  goctls extra ent schema <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>                <span class="token builtin class-name">help</span> <span class="token keyword">for</span> schema
  -m, <span class="token parameter variable">--model_name</span> string   Model 名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[i];function r(d,c){return e(),s("div",null,l)}const m=a(t,[["render",r],["__file","3-ent_template.html.vue"]]);export{m as default};
