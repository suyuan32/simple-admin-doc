import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e as s}from"./app-qjOf8u7L.js";const i={},l=s(`<h2 id="makefile-generation" tabindex="-1"><a class="header-anchor" href="#makefile-generation" aria-hidden="true">#</a> Makefile Generation</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra makefile <span class="token parameter variable">-n</span> core <span class="token parameter variable">-t</span> rpc <span class="token parameter variable">-s</span> go_zero <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Help</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Generate makefile file.

Usage:
  goctl extra makefile <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -d, <span class="token parameter variable">--dir</span> string            Directory where the makefile <span class="token function">file</span> is located.
  -e, <span class="token parameter variable">--ent</span>                   Whether to use Ent.
  -h, <span class="token parameter variable">--help</span>                  <span class="token builtin class-name">help</span> <span class="token keyword">for</span> makefile
  -i, <span class="token parameter variable">--i18n</span>                  Whether to use i18n
  -n, <span class="token parameter variable">--service_name</span> string   Service name.
  -t, <span class="token parameter variable">--service_type</span> string   Service type: api, single, or rpc.
  -s, <span class="token parameter variable">--style</span> string          The <span class="token function">file</span> naming format, see <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>If run <code>goctls extra makefile</code> without any params，goctls will try to load configuration from original makefile.</p></div>`,5),r=[l];function t(c,o){return a(),n("div",null,r)}const m=e(i,[["render",t],["__file","5-makefile.html.vue"]]);export{m as default};
