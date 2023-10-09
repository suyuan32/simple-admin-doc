import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,e as n}from"./app-2c193ac5.js";const i={},l=n(`<h2 id="drone-ci-文件生成" tabindex="-1"><a class="header-anchor" href="#drone-ci-文件生成" aria-hidden="true">#</a> Drone CI 文件生成</h2><blockquote><p>goctls &gt;= 1.6.6</p></blockquote><h2 id="创建-gitlab-ci-文件" tabindex="-1"><a class="header-anchor" href="#创建-gitlab-ci-文件" aria-hidden="true">#</a> 创建 Gitlab CI 文件</h2><blockquote><p>创建 .gitlab-ci.yaml</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls cicd gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数介绍" tabindex="-1"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ goctls cicd gitlab <span class="token parameter variable">-h</span>
生成 gitlab-ci.yml 文件

Usage:
  goctls cicd gitlab <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>                <span class="token builtin class-name">help</span> <span class="token keyword">for</span> gitlab
  -o, <span class="token parameter variable">--output_dir</span> string   输出目录 <span class="token punctuation">(</span>default <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function c(d,r){return e(),s("div",null,t)}const p=a(i,[["render",c],["__file","2-gitlab.html.vue"]]);export{p as default};