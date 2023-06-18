import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,e as n}from"./app-9625e4e2.js";const d={},s=n(`<h2 id="ent-文件生成" tabindex="-1"><a class="header-anchor" href="#ent-文件生成" aria-hidden="true">#</a> Ent 文件生成</h2><h3 id="extra-ent-template-模板生成" tabindex="-1"><a class="header-anchor" href="#extra-ent-template-模板生成" aria-hidden="true">#</a> <code>extra ent template</code> 模板生成</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra ent template <span class="token parameter variable">-u</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数名称</th><th>必须</th><th>默认值</th><th>介绍</th></tr></thead><tbody><tr><td>update</td><td>否</td><td>false</td><td>是否更新本地所有 template 及 ent 版本</td></tr><tr><td>list</td><td>否</td><td>false</td><td>列出所有支持的模板</td></tr><tr><td>dir</td><td>否</td><td></td><td>ent 目录，若为空则会尝试自动查找，需要在项目根目录执行才可以自动查找</td></tr><tr><td>add</td><td>否</td><td></td><td>添加模板，需要为列表内的模板</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>用法：
  goctl extra ent template <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>

选项：
  -a, <span class="token parameter variable">--add</span> string   添加 ent 模板
  -d, <span class="token parameter variable">--dir</span> string   ent 目录。如果为空，则 goctls 将自动查找
  -h, <span class="token parameter variable">--help</span>         显示帮助信息
  -l, <span class="token parameter variable">--list</span>         列出所有支持的模板
  -u, <span class="token parameter variable">--update</span>       更新所有模板
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[s];function l(i,c){return t(),a("div",null,r)}const m=e(d,[["render",l],["__file","ent_template.html.vue"]]);export{m as default};
