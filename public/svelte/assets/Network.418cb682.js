import{S as Ht,i as At,s as Vt,z as Pe,b as H,o as w,p as le,q as C,r as se,d as A,A as rt,B as ft,C as Bt,e as r,c as x,a as f,h as i,l as T,D as Ft,E as Et,F as Gt,x as qt,t as M,k as G,I as ee,f as L,m as j,n as zt,v as J,G as Rt,w as Ce,y as Tt,H as oe}from"./index.ec567be7.js";import Ot from"./SetIP.3a2e68ad.js";import"./helper.d8077148.js";function ut(n){let e,s,l,t,a,c,p,o=n[1]&&dt(n);const d=n[11].default,b=Bt(d,n,n[10],null);return{c(){e=r("dialog"),s=r("main"),o&&o.c(),l=x(),b&&b.c(),f(s,"style",t=n[9].style),f(s,"class","svelte-1iyuur6"),f(e,"class","svelte-1iyuur6")},m(m,v){H(m,e,v),i(e,s),o&&o.m(s,null),i(s,l),b&&b.m(s,null),n[12](s),a=!0,c||(p=[T(e,"mousedown",n[5]),T(e,"mouseup",n[7]),T(e,"mouseleave",n[7]),T(e,"mousemove",n[8])],c=!0)},p(m,v){m[1]?o?(o.p(m,v),v&2&&w(o,1)):(o=dt(m),o.c(),w(o,1),o.m(s,l)):o&&(le(),C(o,1,1,()=>{o=null}),se()),b&&b.p&&(!a||v&1024)&&Ft(b,d,m,m[10],a?Gt(d,m[10],v,null):Et(m[10]),null),(!a||v&512&&t!==(t=m[9].style))&&f(s,"style",t)},i(m){a||(w(o),w(b,m),a=!0)},o(m){C(o),C(b,m),a=!1},d(m){m&&A(e),o&&o.d(),b&&b.d(m),n[12](null),c=!1,qt(p)}}}function dt(n){let e,s,l,t,a,c,p,o=n[2]&&pt(n);return{c(){e=r("h2"),s=M(n[1]),l=x(),o&&o.c(),t=Pe(),f(e,"class","svelte-1iyuur6")},m(d,b){H(d,e,b),i(e,s),H(d,l,b),o&&o.m(d,b),H(d,t,b),a=!0,c||(p=T(e,"mousedown",n[6]),c=!0)},p(d,b){(!a||b&2)&&G(s,d[1]),d[2]?o?(o.p(d,b),b&4&&w(o,1)):(o=pt(d),o.c(),w(o,1),o.m(t.parentNode,t)):o&&(le(),C(o,1,1,()=>{o=null}),se())},i(d){a||(w(o),a=!0)},o(d){C(o),a=!1},d(d){d&&A(e),d&&A(l),o&&o.d(d),d&&A(t),c=!1,p()}}}function pt(n){let e,s,l,t,a;return s=new ee({props:{name:"xmark"}}),{c(){e=r("button"),L(s.$$.fragment),f(e,"class","dialogExit svelte-1iyuur6")},m(c,p){H(c,e,p),j(s,e,null),l=!0,t||(a=T(e,"click",n[3]),t=!0)},p:zt,i(c){l||(w(s.$$.fragment,c),l=!0)},o(c){C(s.$$.fragment,c),l=!1},d(c){c&&A(e),J(s),t=!1,a()}}}function Wt(n){let e,s,l=n[0]&&ut(n);return{c(){l&&l.c(),e=Pe()},m(t,a){l&&l.m(t,a),H(t,e,a),s=!0},p(t,[a]){t[0]?l?(l.p(t,a),a&1&&w(l,1)):(l=ut(t),l.c(),w(l,1),l.m(e.parentNode,e)):l&&(le(),C(l,1,1,()=>{l=null}),se())},i(t){s||(w(l),s=!0)},o(t){C(l),s=!1},d(t){l&&l.d(t),t&&A(e)}}}function Xt(n,e,s){let{$$slots:l={},$$scope:t}=e,{show:a=!0}=e,{title:c}=e,{closeIcon:p=!0}=e;function o(){s(0,a=!1)}function d(_){_.target.localName==="dialog"&&o()}let b,m,v,h={x:0,y:0},y;function D(_){b=!0,m={x:_.clientX,y:_.clientY};let $=y.style.transform;$===""&&($="0, 0"),$=$.replace("translate(","").replace("px","").replace("px","").replace(")","").split(","),h={x:Number($[0]),y:Number($[1])}}function u(){b=!1}function S(_){_.preventDefault(),b&&(v={x:_.clientX-m.x+h.x,y:_.clientY-m.y+h.y},s(4,y.style.transform=`translate(${v.x}px, ${v.y}px)`,y))}function g(_){Rt[_?"unshift":"push"](()=>{y=_,s(4,y)})}return n.$$set=_=>{s(9,e=rt(rt({},e),ft(_))),"show"in _&&s(0,a=_.show),"title"in _&&s(1,c=_.title),"closeIcon"in _&&s(2,p=_.closeIcon),"$$scope"in _&&s(10,t=_.$$scope)},e=ft(e),[a,c,p,o,y,d,D,u,S,e,t,l,g]}class Yt extends Ht{constructor(e){super(),At(this,e,Xt,Wt,Vt,{show:0,title:1,closeIcon:2,close:3})}get close(){return this.$$.ctx[3]}}function _t(n,e,s){const l=n.slice();return l[15]=e[s],l}function mt(n,e,s){const l=n.slice();return l[15]=e[s],l}function vt(n,e,s){const l=n.slice();return l[18]=e[s],l[20]=s,l}function ht(n,e,s){const l=n.slice();return l[18]=e[s],l[20]=s,l}function gt(n,e,s){const l=n.slice();return l[24]=e[s],l}function kt(n,e,s){const l=n.slice();return l[27]=e[s],l}function Lt(n){let e,s;return e=new Ot({}),{c(){L(e.$$.fragment)},m(l,t){j(e,l,t),s=!0},i(l){s||(w(e.$$.fragment,l),s=!0)},o(l){C(e.$$.fragment,l),s=!1},d(l){J(e,l)}}}function bt(n){let e,s=n[27].name+"",l;return{c(){e=r("option"),l=M(s),e.__value=n[27].name,e.value=e.__value},m(t,a){H(t,e,a),i(e,l)},p:zt,d(t){t&&A(e)}}}function xt(n){let e,s=n[0].nicSelected.ipsAdded,l=[];for(let t=0;t<s.length;t+=1)l[t]=yt(gt(n,s,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=Pe()},m(t,a){for(let c=0;c<l.length;c+=1)l[c].m(t,a);H(t,e,a)},p(t,a){if(a&1){s=t[0].nicSelected.ipsAdded;let c;for(c=0;c<s.length;c+=1){const p=gt(t,s,c);l[c]?l[c].p(p,a):(l[c]=yt(p),l[c].c(),l[c].m(e.parentNode,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=s.length}},d(t){Ce(l,t),t&&A(e)}}}function yt(n){let e,s,l,t,a=n[24].ip+"",c,p,o,d,b,m,v=n[24].mask+"",h,y,D;return{c(){e=r("div"),s=r("div"),s.textContent="+ IP:",l=x(),t=r("div"),c=M(a),p=x(),o=r("div"),d=r("div"),d.textContent="Mask:",b=x(),m=r("div"),h=M(v),y=x(),D=r("br"),f(s,"class","svelte-iicyt"),f(t,"class","svelte-iicyt"),f(e,"class","flex bright svelte-iicyt"),f(d,"class","svelte-iicyt"),f(m,"class","svelte-iicyt"),f(o,"class","svelte-iicyt")},m(u,S){H(u,e,S),i(e,s),i(e,l),i(e,t),i(t,c),H(u,p,S),H(u,o,S),i(o,d),i(o,b),i(o,m),i(m,h),H(u,y,S),H(u,D,S)},p(u,S){S&1&&a!==(a=u[24].ip+"")&&G(c,a),S&1&&v!==(v=u[24].mask+"")&&G(h,v)},d(u){u&&A(e),u&&A(p),u&&A(o),u&&A(y),u&&A(D)}}}function St(n){let e,s=n[0].nicSelected.dns,l=[];for(let t=0;t<s.length;t+=1)l[t]=wt(ht(n,s,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=Pe()},m(t,a){for(let c=0;c<l.length;c+=1)l[c].m(t,a);H(t,e,a)},p(t,a){if(a&1){s=t[0].nicSelected.dns;let c;for(c=0;c<s.length;c+=1){const p=ht(t,s,c);l[c]?l[c].p(p,a):(l[c]=wt(p),l[c].c(),l[c].m(e.parentNode,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=s.length}},d(t){Ce(l,t),t&&A(e)}}}function wt(n){let e,s,l,t=n[20]+1+"",a,c,p,o,d=n[18]+"",b,m;return{c(){e=r("div"),s=r("div"),l=M("DNS"),a=M(t),c=M(":"),p=x(),o=r("div"),b=M(d),m=x(),f(s,"class","svelte-iicyt"),f(o,"class","svelte-iicyt"),f(e,"class","svelte-iicyt")},m(v,h){H(v,e,h),i(e,s),i(s,l),i(s,a),i(s,c),i(e,p),i(e,o),i(o,b),i(e,m)},p(v,h){h&1&&d!==(d=v[18]+"")&&G(b,d)},d(v){v&&A(e)}}}function jt(n){let e,s,l,t,a,c,p,o,d,b,m,v,h,y,D,u,S,g,_,$,U;const V=[Qt,Kt],N=[];function ne(P,q){return P[0].presetSelected.name==="DHCP"?0:1}D=ne(n),u=N[D]=V[D](n);let B=n[0].presets,I=[];for(let P=0;P<B.length;P+=1)I[P]=Dt(_t(n,B,P));const ce=P=>C(I[P],1,1,()=>{I[P]=null});return{c(){e=r("div"),s=r("div"),s.innerHTML=`<span class="svelte-iicyt">IP</span> 
            <span class="svelte-iicyt">Mask</span> 
            <span class="svelte-iicyt">Gateway</span> 
            <span class="svelte-iicyt">DNS1</span> 
            <span class="svelte-iicyt">DNS2</span>`,l=x(),t=r("button"),a=r("span"),a.textContent="DHCP",c=x(),p=r("span"),p.textContent="-",o=x(),d=r("span"),d.textContent="-",b=x(),m=r("span"),m.textContent="-",v=x(),h=r("span"),h.textContent="-",y=x(),u.c(),g=x();for(let P=0;P<I.length;P+=1)I[P].c();f(s,"class","svelte-iicyt"),f(a,"class","svelte-iicyt"),f(p,"class","svelte-iicyt"),f(d,"class","svelte-iicyt"),f(m,"class","svelte-iicyt"),f(h,"class","svelte-iicyt"),f(t,"class",S=oe(n[0].presetSelected.name==="DHCP"?"presetSelected":"")+" svelte-iicyt"),f(e,"class","presetTable svelte-iicyt")},m(P,q){H(P,e,q),i(e,s),i(e,l),i(e,t),i(t,a),i(t,c),i(t,p),i(t,o),i(t,d),i(t,b),i(t,m),i(t,v),i(t,h),i(t,y),N[D].m(t,null),i(e,g);for(let F=0;F<I.length;F+=1)I[F].m(e,null);_=!0,$||(U=T(t,"click",n[12]),$=!0)},p(P,q){let F=D;if(D=ne(P),D!==F&&(le(),C(N[F],1,1,()=>{N[F]=null}),se(),u=N[D],u||(u=N[D]=V[D](P),u.c()),w(u,1),u.m(t,null)),(!_||q&1&&S!==(S=oe(P[0].presetSelected.name==="DHCP"?"presetSelected":"")+" svelte-iicyt"))&&f(t,"class",S),q&129){B=P[0].presets;let z;for(z=0;z<B.length;z+=1){const re=_t(P,B,z);I[z]?(I[z].p(re,q),w(I[z],1)):(I[z]=Dt(re),I[z].c(),w(I[z],1),I[z].m(e,null))}for(le(),z=B.length;z<I.length;z+=1)ce(z);se()}},i(P){if(!_){w(u);for(let q=0;q<B.length;q+=1)w(I[q]);_=!0}},o(P){C(u),I=I.filter(Boolean);for(let q=0;q<I.length;q+=1)C(I[q]);_=!1},d(P){P&&A(e),N[D].d(),Ce(I,P),$=!1,U()}}}function Jt(n){let e,s,l,t,a,c,p,o,d,b,m,v=n[0].presetSelected.name==="DHCP"&&It(),h=n[0].presets,y=[];for(let u=0;u<h.length;u+=1)y[u]=Nt(mt(n,h,u));const D=u=>C(y[u],1,1,()=>{y[u]=null});return{c(){e=r("div"),s=r("button"),l=r("h3"),l.textContent="DHCP",t=x(),a=r("span"),a.textContent="Request an address",c=x(),v&&v.c(),o=x();for(let u=0;u<y.length;u+=1)y[u].c();f(a,"class","svelte-iicyt"),f(s,"class",p=oe(n[0].presetSelected.name==="DHCP"?"presetSelected":"")+" svelte-iicyt"),f(e,"class","presetButtons svelte-iicyt")},m(u,S){H(u,e,S),i(e,s),i(s,l),i(s,t),i(s,a),i(s,c),v&&v.m(s,null),i(e,o);for(let g=0;g<y.length;g+=1)y[g].m(e,null);d=!0,b||(m=T(s,"click",n[10]),b=!0)},p(u,S){if(u[0].presetSelected.name==="DHCP"?v?S&1&&w(v,1):(v=It(),v.c(),w(v,1),v.m(s,null)):v&&(le(),C(v,1,1,()=>{v=null}),se()),(!d||S&1&&p!==(p=oe(u[0].presetSelected.name==="DHCP"?"presetSelected":"")+" svelte-iicyt"))&&f(s,"class",p),S&129){h=u[0].presets;let g;for(g=0;g<h.length;g+=1){const _=mt(u,h,g);y[g]?(y[g].p(_,S),w(y[g],1)):(y[g]=Nt(_),y[g].c(),w(y[g],1),y[g].m(e,null))}for(le(),g=h.length;g<y.length;g+=1)D(g);se()}},i(u){if(!d){w(v);for(let S=0;S<h.length;S+=1)w(y[S]);d=!0}},o(u){C(v),y=y.filter(Boolean);for(let S=0;S<y.length;S+=1)C(y[S]);d=!1},d(u){u&&A(e),v&&v.d(),Ce(y,u),b=!1,m()}}}function Kt(n){let e,s,l;return s=new ee({props:{name:"square-outline"}}),{c(){e=r("div"),L(s.$$.fragment),f(e,"class","checkmark svelte-iicyt")},m(t,a){H(t,e,a),j(s,e,null),l=!0},i(t){l||(w(s.$$.fragment,t),l=!0)},o(t){C(s.$$.fragment,t),l=!1},d(t){t&&A(e),J(s)}}}function Qt(n){let e,s,l;return s=new ee({props:{name:"square-check"}}),{c(){e=r("div"),L(s.$$.fragment),f(e,"class","checkmark svelte-iicyt")},m(t,a){H(t,e,a),j(s,e,null),l=!0},i(t){l||(w(s.$$.fragment,t),l=!0)},o(t){C(s.$$.fragment,t),l=!1},d(t){t&&A(e),J(s)}}}function Ut(n){let e,s,l;return s=new ee({props:{name:"square-outline"}}),{c(){e=r("div"),L(s.$$.fragment),f(e,"class","checkmark svelte-iicyt")},m(t,a){H(t,e,a),j(s,e,null),l=!0},i(t){l||(w(s.$$.fragment,t),l=!0)},o(t){C(s.$$.fragment,t),l=!1},d(t){t&&A(e),J(s)}}}function Zt(n){let e,s,l;return s=new ee({props:{name:"square-check"}}),{c(){e=r("div"),L(s.$$.fragment),f(e,"class","checkmark svelte-iicyt")},m(t,a){H(t,e,a),j(s,e,null),l=!0},i(t){l||(w(s.$$.fragment,t),l=!0)},o(t){C(s.$$.fragment,t),l=!1},d(t){t&&A(e),J(s)}}}function Dt(n){let e,s,l=n[15].ip+"",t,a,c,p=n[15].mask+"",o,d,b,m=(n[15].gateway||"-")+"",v,h,y,D=(n[15].dns[0]||"-")+"",u,S,g,_=(n[15].dns[1]||"-")+"",$,U,V,N,ne,B,I,ce,P;const q=[Zt,Ut],F=[];function z(K,Q){return K[15].name===K[0].presetSelected.name?0:1}V=z(n),N=F[V]=q[V](n);function re(){return n[13](n[15])}return{c(){e=r("button"),s=r("span"),t=M(l),a=x(),c=r("span"),o=M(p),d=x(),b=r("span"),v=M(m),h=x(),y=r("span"),u=M(D),S=x(),g=r("span"),$=M(_),U=x(),N.c(),ne=x(),f(s,"class","svelte-iicyt"),f(c,"class","svelte-iicyt"),f(b,"class","svelte-iicyt"),f(y,"class","svelte-iicyt"),f(g,"class","svelte-iicyt"),f(e,"class",B=oe(n[15].name===n[0].presetSelected.name?"presetSelected":"")+" svelte-iicyt")},m(K,Q){H(K,e,Q),i(e,s),i(s,t),i(e,a),i(e,c),i(c,o),i(e,d),i(e,b),i(b,v),i(e,h),i(e,y),i(y,u),i(e,S),i(e,g),i(g,$),i(e,U),F[V].m(e,null),i(e,ne),I=!0,ce||(P=T(e,"click",re),ce=!0)},p(K,Q){n=K,(!I||Q&1)&&l!==(l=n[15].ip+"")&&G(t,l),(!I||Q&1)&&p!==(p=n[15].mask+"")&&G(o,p),(!I||Q&1)&&m!==(m=(n[15].gateway||"-")+"")&&G(v,m),(!I||Q&1)&&D!==(D=(n[15].dns[0]||"-")+"")&&G(u,D),(!I||Q&1)&&_!==(_=(n[15].dns[1]||"-")+"")&&G($,_);let fe=V;V=z(n),V!==fe&&(le(),C(F[fe],1,1,()=>{F[fe]=null}),se(),N=F[V],N||(N=F[V]=q[V](n),N.c()),w(N,1),N.m(e,ne)),(!I||Q&1&&B!==(B=oe(n[15].name===n[0].presetSelected.name?"presetSelected":"")+" svelte-iicyt"))&&f(e,"class",B)},i(K){I||(w(N),I=!0)},o(K){C(N),I=!1},d(K){K&&A(e),F[V].d(),ce=!1,P()}}}function It(n){let e,s,l;return s=new ee({props:{name:"check"}}),{c(){e=r("div"),L(s.$$.fragment),f(e,"class","checkmark svelte-iicyt")},m(t,a){H(t,e,a),j(s,e,null),l=!0},i(t){l||(w(s.$$.fragment,t),l=!0)},o(t){C(s.$$.fragment,t),l=!1},d(t){t&&A(e),J(s)}}}function $t(n){let e,s,l=n[15].gateway+"",t;return{c(){e=r("span"),s=M("Gate: "),t=M(l),f(e,"class","svelte-iicyt")},m(a,c){H(a,e,c),i(e,s),i(e,t)},p(a,c){c&1&&l!==(l=a[15].gateway+"")&&G(t,l)},d(a){a&&A(e)}}}function Ct(n){let e,s=n[15].dns,l=[];for(let t=0;t<s.length;t+=1)l[t]=Pt(vt(n,s,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=Pe()},m(t,a){for(let c=0;c<l.length;c+=1)l[c].m(t,a);H(t,e,a)},p(t,a){if(a&1){s=t[15].dns;let c;for(c=0;c<s.length;c+=1){const p=vt(t,s,c);l[c]?l[c].p(p,a):(l[c]=Pt(p),l[c].c(),l[c].m(e.parentNode,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=s.length}},d(t){Ce(l,t),t&&A(e)}}}function Pt(n){let e,s,l=n[20]+1+"",t,a,c=n[18]+"",p;return{c(){e=r("div"),s=M("DNS"),t=M(l),a=M(": "),p=M(c)},m(o,d){H(o,e,d),i(e,s),i(e,t),i(e,a),i(e,p)},p(o,d){d&1&&c!==(c=o[18]+"")&&G(p,c)},d(o){o&&A(e)}}}function Mt(n){let e,s,l;return s=new ee({props:{name:"check"}}),{c(){e=r("div"),L(s.$$.fragment),f(e,"class","checkmark svelte-iicyt")},m(t,a){H(t,e,a),j(s,e,null),l=!0},i(t){l||(w(s.$$.fragment,t),l=!0)},o(t){C(s.$$.fragment,t),l=!1},d(t){t&&A(e),J(s)}}}function Nt(n){let e,s,l=n[15].ip+"",t,a,c,p,o=n[15].mask+"",d,b,m,v,h,y,D,u,S,g=n[15].gateway&&$t(n),_=n[15].dns.length>0&&Ct(n),$=n[15].name===n[0].presetSelected.name&&Mt();function U(){return n[11](n[15])}return{c(){e=r("button"),s=r("h3"),t=M(l),a=x(),c=r("span"),p=M("Mask: "),d=M(o),b=x(),g&&g.c(),m=x(),_&&_.c(),v=x(),$&&$.c(),h=x(),f(c,"class","svelte-iicyt"),f(e,"class",y=oe(n[15].name===n[0].presetSelected.name?"presetSelected":"")+" svelte-iicyt")},m(V,N){H(V,e,N),i(e,s),i(s,t),i(e,a),i(e,c),i(c,p),i(c,d),i(e,b),g&&g.m(e,null),i(e,m),_&&_.m(e,null),i(e,v),$&&$.m(e,null),i(e,h),D=!0,u||(S=T(e,"click",U),u=!0)},p(V,N){n=V,(!D||N&1)&&l!==(l=n[15].ip+"")&&G(t,l),(!D||N&1)&&o!==(o=n[15].mask+"")&&G(d,o),n[15].gateway?g?g.p(n,N):(g=$t(n),g.c(),g.m(e,m)):g&&(g.d(1),g=null),n[15].dns.length>0?_?_.p(n,N):(_=Ct(n),_.c(),_.m(e,v)):_&&(_.d(1),_=null),n[15].name===n[0].presetSelected.name?$?N&1&&w($,1):($=Mt(),$.c(),w($,1),$.m(e,h)):$&&(le(),C($,1,1,()=>{$=null}),se()),(!D||N&1&&y!==(y=oe(n[15].name===n[0].presetSelected.name?"presetSelected":"")+" svelte-iicyt"))&&f(e,"class",y)},i(V){D||(w($),D=!0)},o(V){C($),D=!1},d(V){V&&A(e),g&&g.d(),_&&_.d(),$&&$.d(),u=!1,S()}}}function el(n){let e,s,l,t,a,c,p,o,d,b,m,v,h,y,D=n[0].nicSelected.ip+"",u,S,g,_,$,U,V=n[0].nicSelected.mask+"",N,ne,B,I,ce,P,q=n[0].nicSelected.gateway+"",F,z,re,K,Q,fe,Te,Oe,pe,Me,We,Ne,He=n[0].nicSelected.ipIsDhcp+"",Be,Xe,_e,Ae,Ye,Ve,qe=n[0].nicSelected.interfaceMetric+"",Fe,Le,me,ve,Ee,je,te,he,Je,ge,Ke,ke,Qe,be,Ue,xe,Ze,ye,et,Se,tt,we,lt,ue,ze,De,st,Ie,nt,R,O,ie,Ge,it;e=new Yt({props:{title:"Set IP",show:n[0].showSetIP,$$slots:{default:[Lt]},$$scope:{ctx:n}}});let $e=n[1].nics,W=[];for(let k=0;k<$e.length;k+=1)W[k]=bt(kt(n,$e,k));let X=n[0].nicSelected.ipsAdded.length>0&&xt(n),Y=n[0].nicSelected.dns.length>0&&St(n);ge=new ee({props:{name:"square-plus",size:"1"}}),be=new ee({props:{name:"check",size:"1"}}),ye=new ee({props:{name:"plus",size:"1"}}),we=new ee({props:{name:"trash",size:"1"}}),Ie=new ee({props:{name:"arrows-rotate",size:".8",style:"display: inline;",color:"var(--color-text-dim)"}});const ct=[Jt,jt],ae=[];function at(k,E){return k[0].presetViewMode==="buttons"?0:k[0].presetViewMode==="table"?1:-1}return~(R=at(n))&&(O=ae[R]=ct[R](n)),{c(){L(e.$$.fragment),s=x(),l=r("article"),t=r("aside"),a=r("h2"),a.textContent="Server Interfaces",c=x(),p=r("label"),o=M("Select Interface "),d=r("br"),b=x(),m=r("select");for(let k=0;k<W.length;k+=1)W[k].c();v=x(),h=r("div"),y=r("h3"),u=M(D),S=x(),g=r("div"),_=r("div"),_.textContent="Mask:",$=x(),U=r("div"),N=M(V),ne=x(),B=r("div"),I=r("div"),I.textContent="Gate:",ce=x(),P=r("div"),F=M(q),z=x(),re=r("br"),K=x(),X&&X.c(),Q=x(),Y&&Y.c(),fe=x(),Te=r("br"),Oe=x(),pe=r("div"),Me=r("div"),Me.textContent="DHCP:",We=x(),Ne=r("div"),Be=M(He),Xe=x(),_e=r("div"),Ae=r("div"),Ae.textContent="Metric:",Ye=x(),Ve=r("div"),Fe=M(qe),Le=x(),me=r("section"),ve=r("div"),Ee=r("h2"),Ee.textContent="Preset Actions",je=x(),te=r("div"),he=r("button"),Je=M(`New \r
          `),L(ge.$$.fragment),Ke=x(),ke=r("button"),Qe=M(`Set \r
          `),L(be.$$.fragment),Ue=x(),xe=r("button"),Ze=M(`Add \r
          `),L(ye.$$.fragment),et=x(),Se=r("button"),tt=M(`Remove\r
          `),L(we.$$.fragment),lt=x(),ue=r("div"),ze=r("h2"),De=r("button"),st=M(`Select Preset\r
          `),L(Ie.$$.fragment),nt=x(),O&&O.c(),f(_,"class","svelte-iicyt"),f(U,"class","svelte-iicyt"),f(g,"class","svelte-iicyt"),f(I,"class","svelte-iicyt"),f(P,"class","svelte-iicyt"),f(B,"class","svelte-iicyt"),f(Me,"class","svelte-iicyt"),f(Ne,"class","svelte-iicyt"),f(pe,"class","svelte-iicyt"),f(Ae,"class","svelte-iicyt"),f(Ve,"class","svelte-iicyt"),f(_e,"class","svelte-iicyt"),f(h,"class","nicInfo svelte-iicyt"),f(t,"class","grid svelte-iicyt"),f(he,"class","cyan svelte-iicyt"),f(ke,"class","green svelte-iicyt"),f(xe,"class","yellow svelte-iicyt"),f(Se,"class","red svelte-iicyt"),f(te,"class","actionButtons svelte-iicyt"),f(ve,"class","actions svelte-iicyt"),f(De,"class","svelte-iicyt"),f(ze,"class","svelte-iicyt"),f(ue,"class","presets svelte-iicyt"),f(me,"class","grid svelte-iicyt"),f(l,"class","svelte-iicyt")},m(k,E){j(e,k,E),H(k,s,E),H(k,l,E),i(l,t),i(t,a),i(t,c),i(t,p),i(p,o),i(p,d),i(p,b),i(p,m);for(let de=0;de<W.length;de+=1)W[de].m(m,null);i(t,v),i(t,h),i(h,y),i(y,u),i(h,S),i(h,g),i(g,_),i(g,$),i(g,U),i(U,N),i(h,ne),i(h,B),i(B,I),i(B,ce),i(B,P),i(P,F),i(h,z),i(h,re),i(h,K),X&&X.m(h,null),i(h,Q),Y&&Y.m(h,null),i(h,fe),i(h,Te),i(h,Oe),i(h,pe),i(pe,Me),i(pe,We),i(pe,Ne),i(Ne,Be),i(h,Xe),i(h,_e),i(_e,Ae),i(_e,Ye),i(_e,Ve),i(Ve,Fe),i(l,Le),i(l,me),i(me,ve),i(ve,Ee),i(ve,je),i(ve,te),i(te,he),i(he,Je),j(ge,he,null),i(te,Ke),i(te,ke),i(ke,Qe),j(be,ke,null),i(te,Ue),i(te,xe),i(xe,Ze),j(ye,xe,null),i(te,et),i(te,Se),i(Se,tt),j(we,Se,null),i(me,lt),i(me,ue),i(ue,ze),i(ze,De),i(De,st),j(Ie,De,null),i(ue,nt),~R&&ae[R].m(ue,null),ie=!0,Ge||(it=[T(m,"input",n[2]),T(he,"click",n[3]),T(ke,"click",n[4]),T(xe,"click",n[5]),T(Se,"click",n[6]),T(De,"click",n[9])],Ge=!0)},p(k,[E]){const de={};if(E&1&&(de.show=k[0].showSetIP),E&1073741824&&(de.$$scope={dirty:E,ctx:k}),e.$set(de),E&2){$e=k[1].nics;let Z;for(Z=0;Z<$e.length;Z+=1){const ot=kt(k,$e,Z);W[Z]?W[Z].p(ot,E):(W[Z]=bt(ot),W[Z].c(),W[Z].m(m,null))}for(;Z<W.length;Z+=1)W[Z].d(1);W.length=$e.length}(!ie||E&1)&&D!==(D=k[0].nicSelected.ip+"")&&G(u,D),(!ie||E&1)&&V!==(V=k[0].nicSelected.mask+"")&&G(N,V),(!ie||E&1)&&q!==(q=k[0].nicSelected.gateway+"")&&G(F,q),k[0].nicSelected.ipsAdded.length>0?X?X.p(k,E):(X=xt(k),X.c(),X.m(h,Q)):X&&(X.d(1),X=null),k[0].nicSelected.dns.length>0?Y?Y.p(k,E):(Y=St(k),Y.c(),Y.m(h,fe)):Y&&(Y.d(1),Y=null),(!ie||E&1)&&He!==(He=k[0].nicSelected.ipIsDhcp+"")&&G(Be,He),(!ie||E&1)&&qe!==(qe=k[0].nicSelected.interfaceMetric+"")&&G(Fe,qe);let Re=R;R=at(k),R===Re?~R&&ae[R].p(k,E):(O&&(le(),C(ae[Re],1,1,()=>{ae[Re]=null}),se()),~R?(O=ae[R],O?O.p(k,E):(O=ae[R]=ct[R](k),O.c()),w(O,1),O.m(ue,null)):O=null)},i(k){ie||(w(e.$$.fragment,k),w(ge.$$.fragment,k),w(be.$$.fragment,k),w(ye.$$.fragment,k),w(we.$$.fragment,k),w(Ie.$$.fragment,k),w(O),ie=!0)},o(k){C(e.$$.fragment,k),C(ge.$$.fragment,k),C(be.$$.fragment,k),C(ye.$$.fragment,k),C(we.$$.fragment,k),C(Ie.$$.fragment,k),C(O),ie=!1},d(k){J(e,k),k&&A(s),k&&A(l),Ce(W,k),X&&X.d(),Y&&Y.d(),J(ge),J(be),J(ye),J(we),J(Ie),~R&&ae[R].d(),Ge=!1,qt(it)}}}function tl(n,e,s){let l={nics:[{name:"Fake NIC",interfaceMetric:"xx",ipIsDhcp:!1,ip:"xxx.xxx.xxx.xxx",mask:"xxx.xxx.xxx.xxx",gateway:"xxx.xxx.xxx.xxx",ipsAdded:[{ip:"xxx.xxx.xxx.xxx",mask:"xxx.xxx.xxx.xxx"}],dnsIsDhcp:!1,dns:["xxx.xxx.xxx.xxx","xxx.xxx.xxx.xxx"]},{name:"Fake WiFi",interfaceMetric:"75",ipIsDhcp:!0,ip:"10.0.1.69",mask:"255.255.0.0",gateway:"10.0.1.1",dnsIsDhcp:!0,dns:["10.0.1.5","10.0.1.7"],ipsAdded:[]},{name:"Fake Ethernet",interfaceMetric:"25",ipIsDhcp:!1,ip:"192.168.1.9",mask:"255.255.255.0",gateway:"192.168.1.254",dnsIsDhcp:!1,dns:["192.168.1.1"],ipsAdded:[{ip:"169.254.0.9",mask:"255.255.0.0"},{ip:"192.168.2.9",mask:"255.255.255.0"},{ip:"192.168.3.9",mask:"255.255.255.0"}]}]},t={showSetIP:!1,nicSelected:{name:"Fake NIC",interfaceMetric:"xx",ipIsDhcp:!1,ip:"xxx.xxx.xxx.xxx",mask:"xxx.xxx.xxx.xxx",gateway:"xxx.xxx.xxx.xxx",ipsAdded:[{ip:"xxx.xxx.xxx.xxx",mask:"xxx.xxx.xxx.xxx"}],dnsIsDhcp:!1,dns:["xxx.xxx.xxx.xxx","xxx.xxx.xxx.xxx"]},presetSelected:{name:"0",ipIsDhcp:!1,ip:"192.168.0.9",mask:"255.255.255.0",gateway:"192.168.0.1",dnsIsDhcp:!1,dns:["192.168.0.1","1.1.1.1"]},presetViewMode:"buttons",presets:[{name:"0",ipIsDhcp:!1,ip:"192.168.0.9",mask:"255.255.255.0",gateway:"192.168.0.1",dnsIsDhcp:!1,dns:["192.168.0.1","1.1.1.1"]},{name:"1",ipIsDhcp:!1,ip:"192.168.1.9",mask:"255.255.255.0",gateway:"192.168.1.1",dnsIsDhcp:!1,dns:["192.168.1.1","1.1.1.1"]},{name:"2",ipIsDhcp:!1,ip:"192.168.2.9",mask:"255.255.255.0",gateway:"192.168.2.1",dnsIsDhcp:!1,dns:["192.168.2.1","1.1.1.1"]},{name:"3",ipIsDhcp:!1,ip:"192.168.3.9",mask:"255.255.255.0",gateway:"192.168.3.1",dnsIsDhcp:!1,dns:["192.168.3.1","1.1.1.1"]},{name:"4",ipIsDhcp:!1,ip:"192.168.1.9",mask:"255.255.0.0",gateway:"192.168.0.1",dnsIsDhcp:!1,dns:["192.168.0.1","1.1.1.1"]},{name:"10",ipIsDhcp:!1,ip:"10.0.0.9",mask:"255.0.0.0",gateway:"10.0.0.1",dnsIsDhcp:!1,dns:["10.0.0.1","1.1.1.1"]},{name:"169",ipIsDhcp:!1,ip:"169.254.0.9",mask:"255.255.0.0",gateway:"",dnsIsDhcp:!1,dns:[]},{name:"172",ipIsDhcp:!1,ip:"172.22.0.9",mask:"255.255.0.0",gateway:"172.22.0.2",dnsIsDhcp:!1,dns:["172.22.0.2","1.1.1.1"]}]};function a(S){const g=l.nics.find(_=>_.name===S.target.value);s(0,t.nicSelected=g,t),console.log("Interface selected changed to",S.target.value,g)}function c(){console.log("Open Popup to create a preset"),s(0,t.showSetIP=!0,t)}function p(){console.log("Set current preset as network settings",t.presetSelected)}function o(){console.log("Add current preset to network settings",t.presetSelected)}function d(){console.log("Remove preset from list",t.presetSelected)}function b(S){console.log("Selected preset changed to",S),s(0,t.presetSelected=S,t)}function m(){console.log("Selected preset changed to DHCP"),s(0,t.presetSelected={name:"DHCP",ipIsDhcp:!0,dnsIsDhcp:!0},t)}function v(){t.presetViewMode==="buttons"?s(0,t.presetViewMode="table",t):t.presetViewMode==="table"?s(0,t.presetViewMode="buttons",t):s(0,t.presetViewMode="table",t),console.log("Preset View Mode Changed to",t.presetViewMode)}return Tt(async()=>{s(0,t.nicSelected=l.nics[0],t),document.documentElement.offsetWidth>1200&&s(0,t.presetViewMode="table",t)}),[t,l,a,c,p,o,d,b,m,v,()=>m(),S=>b(S),()=>m(),S=>b(S)]}class il extends Ht{constructor(e){super(),At(this,e,tl,el,Vt,{})}}export{il as default};
