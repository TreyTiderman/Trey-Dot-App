import{S as U,i as V,s as X,I as B,e as g,f as E,c as C,t as R,a as y,L as P,J as Y,b as O,h as a,m as H,O as x,l as ee,k as q,o as w,p as K,r as M,q as S,d as z,v as W,w as te,G as le}from"./index.a03b319b.js";function j(l,e,t){const i=l.slice();return i[9]=e[t],i}function ie(l){let e,t,i;return t=new B({props:{name:"up-long",size:".8",style:"display: inline;",color:"var(--color-bg-green)"}}),{c(){e=g("div"),E(t.$$.fragment),y(e,"class","terminal-col1 svelte-1v086yv")},m(s,r){O(s,e,r),H(t,e,null),i=!0},i(s){i||(w(t.$$.fragment,s),i=!0)},o(s){S(t.$$.fragment,s),i=!1},d(s){s&&z(e),W(t)}}}function se(l){let e,t,i;return t=new B({props:{name:"down-long",size:".8",style:"display: inline;",color:"var(--color-bg-blue)"}}),{c(){e=g("div"),E(t.$$.fragment),y(e,"class","terminal-col1 svelte-1v086yv")},m(s,r){O(s,e,r),H(t,e,null),i=!0},i(s){i||(w(t.$$.fragment,s),i=!0)},o(s){S(t.$$.fragment,s),i=!1},d(s){s&&z(e),W(t)}}}function ne(l){let e,t=l[9].timestampISO.split("T")[1].slice(3).split(".")[0]+"",i;return{c(){e=g("span"),i=R(t),y(e,"class","svelte-1v086yv")},m(s,r){O(s,e,r),a(e,i)},p(s,r){r&1&&t!==(t=s[9].timestampISO.split("T")[1].slice(3).split(".")[0]+"")&&q(i,t)},d(s){s&&z(e)}}}function re(l){let e,t=l[9].timestampISO.split("T")[1].split("Z")[0]+"",i;return{c(){e=g("span"),i=R(t),y(e,"class","svelte-1v086yv")},m(s,r){O(s,e,r),a(e,i)},p(s,r){r&1&&t!==(t=s[9].timestampISO.split("T")[1].split("Z")[0]+"")&&q(i,t)},d(s){s&&z(e)}}}function ae(l){let e,t=l[9].timestampISO.split("T")[0]+"",i,s,r,o=l[9].timestampISO.split("T")[1].split("Z")[0]+"",p;return{c(){e=g("span"),i=R(t),s=C(),r=g("span"),p=R(o),y(e,"class","svelte-1v086yv"),y(r,"class","svelte-1v086yv")},m(c,v){O(c,e,v),a(e,i),O(c,s,v),O(c,r,v),a(r,p)},p(c,v){v&1&&t!==(t=c[9].timestampISO.split("T")[0]+"")&&q(i,t),v&1&&o!==(o=c[9].timestampISO.split("T")[1].split("Z")[0]+"")&&q(p,o)},d(c){c&&z(e),c&&z(s),c&&z(r)}}}function A(l){let e,t,i,s,r,o,p,c,v=l[9].data+"",T,L,f;const D=[se,ie],h=[];function G(u,k){return u[9].wasReceived?0:1}t=G(l),i=h[t]=D[t](l);function I(u,k){return u[4]==="datetime"?ae:u[4]==="time"?re:ne}let F=I(l),d=F(l);return{c(){e=g("div"),i.c(),s=C(),r=g("div"),d.c(),o=C(),p=g("div"),c=g("pre"),T=R(v),L=C(),y(r,"class","terminal-col2 svelte-1v086yv"),y(c,"class","svelte-1v086yv"),y(p,"class","terminal-col3 svelte-1v086yv"),y(e,"class","terminal-line textButton svelte-1v086yv")},m(u,k){O(u,e,k),h[t].m(e,null),a(e,s),a(e,r),d.m(r,null),a(e,o),a(e,p),a(p,c),a(c,T),a(e,L),f=!0},p(u,k){let $=t;t=G(u),t!==$&&(K(),S(h[$],1,1,()=>{h[$]=null}),M(),i=h[t],i||(i=h[t]=D[t](u),i.c()),w(i,1),i.m(e,s)),F===(F=I(u))&&d?d.p(u,k):(d.d(1),d=F(u),d&&(d.c(),d.m(r,null))),(!f||k&1)&&v!==(v=u[9].data+"")&&q(T,v)},i(u){f||(w(i),f=!0)},o(u){S(i),f=!1},d(u){u&&z(e),h[t].d(),d.d()}}}function oe(l){let e,t,i,s,r,o,p=l[4]==="datetime"?"Date Time":"Time",c,v,T,L,f,D,h,G,I,F,d,u,k,$,J;s=new B({props:{name:"up-down",size:".8",style:"display: inline;"}}),T=new B({props:{name:"arrows-rotate",size:".8",style:"display: inline;",color:"var(--color-text-dim)"}}),h=new B({props:{name:"up-long",size:".8",style:"display: inline;",color:"var(--color-bg-green)"}}),I=new B({props:{name:"down-long",size:".8",style:"display: inline;",color:"var(--color-bg-blue)"}});let Z=l[0],m=[];for(let n=0;n<Z.length;n+=1)m[n]=A(j(l,Z,n));const Q=n=>S(m[n],1,1,()=>{m[n]=null});return{c(){e=g("section"),t=g("div"),i=g("div"),E(s.$$.fragment),r=C(),o=g("button"),c=R(p),v=C(),E(T.$$.fragment),L=C(),f=g("pre"),D=R("Sent "),E(h.$$.fragment),G=R(" / Received "),E(I.$$.fragment),F=C(),d=g("div");for(let n=0;n<m.length;n+=1)m[n].c();y(i,"class","terminal-col1 svelte-1v086yv"),y(o,"class","terminal-col2 textButton svelte-1v086yv"),y(f,"class","terminal-col3 svelte-1v086yv"),y(t,"class","terminal-header svelte-1v086yv"),y(d,"class","terminal-lines svelte-1v086yv"),y(e,"class","terminal svelte-1v086yv"),P(e,"--col2-width",l[3]),Y(()=>l[8].call(e))},m(n,b){O(n,e,b),a(e,t),a(t,i),H(s,i,null),a(t,r),a(t,o),a(o,c),a(o,v),H(T,o,null),a(t,L),a(t,f),a(f,D),H(h,f,null),a(f,G),H(I,f,null),a(e,F),a(e,d);for(let _=0;_<m.length;_+=1)m[_].m(d,null);l[7](e),u=x(e,l[8].bind(e)),k=!0,$||(J=ee(o,"click",l[5]),$=!0)},p(n,[b]){if((!k||b&16)&&p!==(p=n[4]==="datetime"?"Date Time":"Time")&&q(c,p),b&17){Z=n[0];let _;for(_=0;_<Z.length;_+=1){const N=j(n,Z,_);m[_]?(m[_].p(N,b),w(m[_],1)):(m[_]=A(N),m[_].c(),w(m[_],1),m[_].m(d,null))}for(K(),_=Z.length;_<m.length;_+=1)Q(_);M()}(!k||b&8)&&P(e,"--col2-width",n[3])},i(n){if(!k){w(s.$$.fragment,n),w(T.$$.fragment,n),w(h.$$.fragment,n),w(I.$$.fragment,n);for(let b=0;b<Z.length;b+=1)w(m[b]);k=!0}},o(n){S(s.$$.fragment,n),S(T.$$.fragment,n),S(h.$$.fragment,n),S(I.$$.fragment,n),m=m.filter(Boolean);for(let b=0;b<m.length;b+=1)S(m[b]);k=!1},d(n){n&&z(e),W(s),W(T),W(h),W(I),te(m,n),l[7](null),u(),$=!1,J()}}}let ce=1e3;function fe(l){let e=(l==null?void 0:l.scrollTop)+(l==null?void 0:l.offsetHeight)+10,t=l==null?void 0:l.scrollHeight;e>=t&&(l.scrollTop+=100,setTimeout(()=>l.scrollTop+=100,5))}function me(l){l.forEach(e=>{e.data=e.data.replace(/\r/g,"\\r"),e.data=e.data.replace(/\n/g,"\\n")})}function ue(l,e,t){let i,s,{showCRLF:r=!0}=e,{lines:o=[{wasReceived:!0,timestampISO:"2022-10-16T21:05:38.425Z",data:"No data yet..."}]}=e,p;function c(){i==="datetime"?(t(4,i="time"),t(3,s="6.75rem")):i==="time"?(t(4,i="timeShort"),t(3,s="4rem")):(t(4,i="datetime"),t(3,s="12rem"))}let v;function T(f){le[f?"unshift":"push"](()=>{v=f,t(2,v)})}function L(){p=this.offsetWidth,t(1,p)}return l.$$set=f=>{"showCRLF"in f&&t(6,r=f.showCRLF),"lines"in f&&t(0,o=f.lines)},l.$$.update=()=>{l.$$.dirty&2&&t(4,i=p>600?"time":"timeShort"),l.$$.dirty&2&&t(3,s=p>600?"6.75rem":"4rem"),l.$$.dirty&1&&o.length>ce&&o.shift(),l.$$.dirty&5&&o&&fe(v),l.$$.dirty&65&&r&&me(o)},[o,p,v,s,i,c,r,T,L]}class ve extends U{constructor(e){super(),V(this,e,ue,oe,X,{showCRLF:6,lines:0})}}export{ve as default};