import{u as I,g as te,h as ie,i as U,j as ae,P as ue,t as le,k as se,l as L,m as x,n as re,p as Y,q as i,s as ce,R as E,v as oe,x as de,y as he,C as ne,z as ge,A as me,B as pe,D as fe,E as ve,F as w,G as ye,H as ke,I as ze,J as j,K as T,L as qe}from"./app-CbMueymR.js";const be=["/","/guide/FAQ.html","/guide/","/guide/member.html","/guide/upgrade.html","/zh/","/guide/basic-config/all_in_one.html","/guide/basic-config/configurations.html","/guide/basic-config/doge.html","/guide/basic-config/env_setting.html","/guide/basic-config/global_vars.html","/guide/basic-config/quickcmd.html","/guide/basic-config/simple-admin-tools.html","/guide/basic-config/standard.html","/guide/basic-config/web-setting.html","/guide/cicd/1-drone.html","/guide/cicd/2-gitlab.html","/guide/cicd/3-gitea.html","/guide/community-comp/1-pay.html","/guide/feature/authorization.html","/guide/feature/error_handling.html","/guide/feature/i18n.html","/guide/feature/jwt_blacklist.html","/guide/feature/log-collection.html","/guide/feature/oauth.html","/guide/feature/prometheus.html","/guide/feature/swagger.html","/guide/feature/tracing_analysis.html","/guide/feature/validator.html","/guide/official-comp/cron.html","/guide/official-comp/file_manager.html","/guide/official-comp/member.html","/guide/official-comp/message_center.html","/guide/official-comp/vip.html","/guide/quick-start/process.html","/zh/guide/FAQ.html","/zh/guide/","/zh/guide/member.html","/zh/guide/upgrade.html","/guide/basic-config/k8s/k8s-deploy.html","/guide/basic-config/k8s/minikube.html","/guide/feature/MQ/asynq.html","/guide/feature/MQ/rocketmq.html","/guide/feature/ORM/ent.html","/guide/feature/ORM/gorm.html","/guide/feature/Plugins/mongo.html","/guide/quick-start/codegen/api_example.html","/guide/quick-start/codegen/rpc_example.html","/guide/quick-start/codegen/web_codegen.html","/guide/quick-start/core/quick_develop_example.html","/guide/quick-start/core/web_develop_example.html","/guide/quick-start/extra/1-i18n.html","/guide/quick-start/extra/2-api_init_code.html","/guide/quick-start/extra/3-ent_template.html","/guide/quick-start/extra/4-docker.html","/guide/quick-start/extra/5-makefile.html","/guide/quick-start/extra/6-info.html","/guide/quick-start/extra/7-proto2api.html","/guide/quick-start/extra/8-log_viewer.html","/zh/guide/basic-config/all_in_one.html","/zh/guide/basic-config/configurations.html","/zh/guide/basic-config/doge.html","/zh/guide/basic-config/env_setting.html","/zh/guide/basic-config/global_vars.html","/zh/guide/basic-config/quickcmd.html","/zh/guide/basic-config/simple-admin-tools.html","/zh/guide/basic-config/standard.html","/zh/guide/basic-config/web-setting.html","/zh/guide/cicd/1-drone.html","/zh/guide/cicd/2-gitlab.html","/zh/guide/cicd/3-gitea.html","/zh/guide/community-comp/1-pay.html","/zh/guide/feature/authorization.html","/zh/guide/feature/error_handling.html","/zh/guide/feature/i18n.html","/zh/guide/feature/jwt_blacklist.html","/zh/guide/feature/log-collection.html","/zh/guide/feature/oauth.html","/zh/guide/feature/prometheus.html","/zh/guide/feature/swagger.html","/zh/guide/feature/tracing_analysis.html","/zh/guide/feature/validator.html","/zh/guide/official-comp/cron.html","/zh/guide/official-comp/file_manager.html","/zh/guide/official-comp/member.html","/zh/guide/official-comp/message_center.html","/zh/guide/official-comp/vip.html","/zh/guide/quick-start/process.html","/zh/guide/basic-config/k8s/k8s-deploy.html","/zh/guide/basic-config/k8s/minikube.html","/zh/guide/feature/MQ/asynq.html","/zh/guide/feature/MQ/rocketmq.html","/zh/guide/feature/ORM/ent.html","/zh/guide/feature/ORM/gorm.html","/zh/guide/feature/Plugins/mongo.html","/zh/guide/quick-start/codegen/api_example.html","/zh/guide/quick-start/codegen/rpc_example.html","/zh/guide/quick-start/codegen/web_codegen.html","/zh/guide/quick-start/core/quick_develop_example.html","/zh/guide/quick-start/core/web_develop_example.html","/zh/guide/quick-start/extra/1-i18n.html","/zh/guide/quick-start/extra/2-api_init_code.html","/zh/guide/quick-start/extra/3-ent_template.html","/zh/guide/quick-start/extra/4-docker.html","/zh/guide/quick-start/extra/5-makefile.html","/zh/guide/quick-start/extra/6-info.html","/zh/guide/quick-start/extra/7-proto2api.html","/zh/guide/quick-start/extra/8-log_viewer.html","/404.html","/guide/basic-config/","/guide/cicd/","/guide/community-comp/","/guide/feature/","/guide/official-comp/","/guide/quick-start/","/guide/basic-config/k8s/","/guide/feature/MQ/","/guide/feature/ORM/","/guide/feature/Plugins/","/guide/quick-start/codegen/","/guide/quick-start/core/","/guide/quick-start/extra/","/zh/guide/basic-config/","/zh/guide/cicd/","/zh/guide/community-comp/","/zh/guide/feature/","/zh/guide/official-comp/","/zh/guide/quick-start/","/zh/guide/basic-config/k8s/","/zh/guide/feature/MQ/","/zh/guide/feature/ORM/","/zh/guide/feature/Plugins/","/zh/guide/quick-start/codegen/","/zh/guide/quick-start/core/","/zh/guide/quick-start/extra/"],_e="SEARCH_PRO_QUERY_HISTORY",v=I(_e,[]),xe=()=>{const{queryHistoryCount:a}=w,u=a>0;return{enabled:u,queryHistory:v,addQueryHistory:l=>{u&&(v.value=Array.from(new Set([l,...v.value.slice(0,a-1)])))},removeQueryHistory:l=>{v.value=[...v.value.slice(0,l),...v.value.slice(l+1)]}}},P=a=>be[a.id]+("anchor"in a?`#${a.anchor}`:""),we="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=w,y=I(we,[]),Re=()=>{const a=$>0;return{enabled:a,resultHistory:y,addResultHistory:u=>{if(a){const l={link:P(u),display:u.display};"header"in u&&(l.header=u.header),y.value=[l,...y.value.slice(0,$-1)]}},removeResultHistory:u=>{y.value=[...y.value.slice(0,u),...y.value.slice(u+1)]}}},He=a=>{const u=ne(),l=U(),R=ge(),r=L(0),q=x(()=>r.value>0),m=me([]);return pe(()=>{const{search:p,terminate:H}=fe(),k=ve(d=>{const z=d.join(" "),{searchFilter:Q=g=>g,splitWord:M,suggestionsFilter:A,...f}=u.value;z?(r.value+=1,p(d.join(" "),l.value,f).then(g=>Q(g,z,l.value,R.value)).then(g=>{r.value-=1,m.value=g}).catch(g=>{console.warn(g),r.value-=1,r.value||(m.value=[])})):m.value=[]},w.searchDelay-w.suggestDelay);Y([a,l],([d])=>k(d),{immediate:!0}),ye(()=>{H()})}),{isSearching:q,results:m}};var Me=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:u}){const l=ie(),R=U(),r=ae(ue),{enabled:q,addQueryHistory:m,queryHistory:p,removeQueryHistory:H}=xe(),{enabled:k,resultHistory:d,addResultHistory:z,removeResultHistory:Q}=Re(),M=q||k,A=le(a,"queries"),{results:f,isSearching:g}=He(A),s=se({isQuery:!0,index:0}),h=L(0),n=L(0),D=x(()=>M&&(p.value.length>0||d.value.length>0)),S=x(()=>f.value.length>0),C=x(()=>f.value[h.value]||null),B=()=>{const{isQuery:e,index:t}=s;t===0?(s.isQuery=!e,s.index=e?d.value.length-1:p.value.length-1):s.index=t-1},G=()=>{const{isQuery:e,index:t}=s;t===(e?p.value.length-1:d.value.length-1)?(s.isQuery=!e,s.index=0):s.index=t+1},J=()=>{h.value=h.value>0?h.value-1:f.value.length-1,n.value=C.value.contents.length-1},K=()=>{h.value=h.value<f.value.length-1?h.value+1:0,n.value=0},V=()=>{n.value<C.value.contents.length-1?n.value+=1:K()},N=()=>{n.value>0?n.value-=1:J()},O=e=>e.map(t=>qe(t)?t:i(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=ke[e.index]||"$content",[c,_=""]=ze(t)?t[R.value].split("$content"):t.split("$content");return e.display.map(o=>i("div",O([c,...o,_])))}return e.display.map(t=>i("div",O(t)))},b=()=>{h.value=0,n.value=0,u("updateQuery",""),u("close")},X=()=>q?i("ul",{class:"search-pro-result-list"},i("li",{class:"search-pro-result-list-item"},[i("div",{class:"search-pro-result-title"},r.value.queryHistory),p.value.map((e,t)=>i("div",{class:["search-pro-result-item",{active:s.isQuery&&s.index===t}],onClick:()=>{u("updateQuery",e)}},[i(j,{class:"search-pro-result-type"}),i("div",{class:"search-pro-result-content"},e),i("button",{class:"search-pro-remove-icon",innerHTML:T,onClick:c=>{c.preventDefault(),c.stopPropagation(),H(t)}})]))])):null,Z=()=>k?i("ul",{class:"search-pro-result-list"},i("li",{class:"search-pro-result-list-item"},[i("div",{class:"search-pro-result-title"},r.value.resultHistory),d.value.map((e,t)=>i(E,{to:e.link,class:["search-pro-result-item",{active:!s.isQuery&&s.index===t}],onClick:()=>{b()}},()=>[i(j,{class:"search-pro-result-type"}),i("div",{class:"search-pro-result-content"},[e.header?i("div",{class:"content-header"},e.header):null,i("div",e.display.map(c=>O(c)).flat())]),i("button",{class:"search-pro-remove-icon",innerHTML:T,onClick:c=>{c.preventDefault(),c.stopPropagation(),Q(t)}})]))])):null;return re("keydown",e=>{if(a.isFocusing){if(S.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=C.value.contents[n.value];m(a.queries.join(" ")),z(t),l.push(P(t)),b()}}else if(k){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=s;s.isQuery?(u("updateQuery",p.value[t]),e.preventDefault()):(l.push(d.value[t].link),b())}}}}),Y([h,n],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>i("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!S.value:!D.value}],id:"search-pro-results"},a.queries.length?g.value?i(ce,{hint:r.value.searching}):S.value?i("ul",{class:"search-pro-result-list"},f.value.map(({title:e,contents:t},c)=>{const _=h.value===c;return i("li",{class:["search-pro-result-list-item",{active:_}]},[i("div",{class:"search-pro-result-title"},e||r.value.defaultTitle),t.map((o,ee)=>{const F=_&&n.value===ee;return i(E,{to:P(o),class:["search-pro-result-item",{active:F,"aria-selected":F}],onClick:()=>{m(a.queries.join(" ")),z(o),b()}},()=>[o.type==="text"?null:i(o.type==="title"?oe:o.type==="heading"?de:he,{class:"search-pro-result-type"}),i("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?i("div",{class:"content-header"},o.header):null,i("div",W(o))])])})])})):r.value.emptyResult:M?D.value?[X(),Z()]:r.value.emptyHistory:r.value.emptyResult)}});export{Me as default};
