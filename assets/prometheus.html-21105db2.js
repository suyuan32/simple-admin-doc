import{_ as n}from"./prometheus-961b2794.js";import{_ as r,W as a,X as i,Y as e,Z as t,$ as s,a0 as l,E as c}from"./framework-eab520b4.js";const d={},h=e("h1",{id:"service-monitoring",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#service-monitoring","aria-hidden":"true"},"#"),t(" Service Monitoring")],-1),u=e("h2",{id:"we-use-prometheus-to-do-the-service-monitoring",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#we-use-prometheus-to-do-the-service-monitoring","aria-hidden":"true"},"#"),t(" We use Prometheus to do the service monitoring.")],-1),p=e("blockquote",null,[e("p",null,"Install Prometheus")],-1),_={href:"https://prometheus-operator.dev/docs/prologue/quick-start/",target:"_blank",rel:"noopener noreferrer"},m=l(`<blockquote><p>After installation, cd simple-admin-core/deploy/k8s/prometheus</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Run</span>
<span class="token function">sh</span> setup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={href:"http://localhost:9090",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),v=e("figure",null,[e("img",{src:n,alt:"pic",tabindex:"0",loading:"lazy"}),e("figcaption",null,"pic")],-1);function b(k,x){const o=c("ExternalLinkIcon");return a(),i("div",null,[h,u,p,e("p",null,[e("a",_,[t("Install Steps"),s(o)])]),m,e("blockquote",null,[e("p",null,[t("Browse "),e("a",f,[t("http://localhost:9090"),s(o)]),t(),g,t(" View status - targets")])]),v])}const w=r(d,[["render",b],["__file","prometheus.html.vue"]]);export{w as default};
