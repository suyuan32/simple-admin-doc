import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,e as n}from"./app-godE9eeS.js";const i={},t=n(`<h2 id="gitea-文件生成" tabindex="-1"><a class="header-anchor" href="#gitea-文件生成" aria-hidden="true">#</a> Gitea 文件生成</h2><blockquote><p>goctls &gt;= 1.6.7</p></blockquote><h2 id="创建-gitea-workflow-文件" tabindex="-1"><a class="header-anchor" href="#创建-gitea-workflow-文件" aria-hidden="true">#</a> 创建 Gitea Workflow 文件</h2><blockquote><p>创建 .gitea/workflow/docker.yaml</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls cicd gitea <span class="token parameter variable">-r</span> https://github.com/suyuan32/simple-admin-job.git <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数介绍" tabindex="-1"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls cicd gitea <span class="token parameter variable">-h</span>
生成 gitea 的 actions 文件, 用于构建 <span class="token function">docker</span>

Usage:
  goctls cicd gitea <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -c, <span class="token parameter variable">--china</span>               服务器是否在中国
  -h, <span class="token parameter variable">--help</span>                <span class="token builtin class-name">help</span> <span class="token keyword">for</span> gitea
  -o, <span class="token parameter variable">--output_dir</span> string   输出的目录，为项目根目录 <span class="token punctuation">(</span>default <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
  -r, <span class="token parameter variable">--repository</span> string   代码仓库的地址, 例如 <span class="token string">&quot;https://github.com/suyuan32/simple-admin-job.git&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[t];function r(c,o){return e(),s("div",null,l)}const u=a(i,[["render",r],["__file","3-gitea.html.vue"]]);export{u as default};
