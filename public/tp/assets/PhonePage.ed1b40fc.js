import{S as R,i as U,s as V,e as _,a as h,b as f,f as C,g as r,l as g,B as I,n as w,G as W,E as Z,c as q,m as D,u as O,k as N,v as Q,j as E,o as G,I as F,d as X,t as j,h as K}from"./index.c4c2aa46.js";function x(c){let e,t,i,l,s,o,n,p,a,u,d,v,m,b,P,y,z,T,k,$,B,S,L,A,H,M;return{c(){e=_("div"),t=_("button"),t.textContent="1",i=h(),l=_("button"),l.textContent="2",s=h(),o=_("button"),o.textContent="3",n=h(),p=_("button"),p.textContent="4",a=h(),u=_("button"),u.textContent="5",d=h(),v=_("button"),v.textContent="6",m=h(),b=_("button"),b.textContent="7",P=h(),y=_("button"),y.textContent="8",z=h(),T=_("button"),T.textContent="9",k=h(),$=_("button"),$.textContent="*",B=h(),S=_("button"),S.textContent="0",L=h(),A=_("button"),A.textContent="#",f(t,"class","svelte-nf7u48"),f(l,"class","svelte-nf7u48"),f(o,"class","svelte-nf7u48"),f(p,"class","svelte-nf7u48"),f(u,"class","svelte-nf7u48"),f(v,"class","svelte-nf7u48"),f(b,"class","svelte-nf7u48"),f(y,"class","svelte-nf7u48"),f(T,"class","svelte-nf7u48"),f($,"class","svelte-nf7u48"),f(S,"class","svelte-nf7u48"),f(A,"class","svelte-nf7u48"),f(e,"class","grid3x3 svelte-nf7u48")},m(J,Y){C(J,e,Y),r(e,t),r(e,i),r(e,l),r(e,s),r(e,o),r(e,n),r(e,p),r(e,a),r(e,u),r(e,d),r(e,v),r(e,m),r(e,b),r(e,P),r(e,y),r(e,z),r(e,T),r(e,k),r(e,$),r(e,B),r(e,S),r(e,L),r(e,A),H||(M=[g(t,"click",c[1]),g(l,"click",c[2]),g(o,"click",c[3]),g(p,"click",c[4]),g(u,"click",c[5]),g(v,"click",c[6]),g(b,"click",c[7]),g(y,"click",c[8]),g(T,"click",c[9]),g($,"click",c[10]),g(S,"click",c[11]),g(A,"click",c[12])],H=!0)},p:I,i:I,o:I,d(J){J&&w(e),H=!1,W(M)}}}function ee(c){const e=Z();return[e,()=>{e("press","1")},()=>{e("press","2")},()=>{e("press","3")},()=>{e("press","4")},()=>{e("press","5")},()=>{e("press","6")},()=>{e("press","7")},()=>{e("press","8")},()=>{e("press","9")},()=>{e("press","*")},()=>{e("press","0")},()=>{e("press","#")}]}class te extends R{constructor(e){super(),U(this,e,ee,x,V,{})}}function le(c){let e,t,i,l,s;return l=new F({props:{name:"arrow_back",size:"2"}}),{c(){e=_("h2"),e.textContent=`${c[5]}`,t=h(),i=_("button"),q(l.$$.fragment),X(e,"color","var(--color-text-dim)"),f(e,"class","svelte-e8noev"),f(i,"class","back hide svelte-e8noev")},m(o,n){C(o,e,n),C(o,t,n),C(o,i,n),D(l,i,null),s=!0},p:I,i(o){s||(E(l.$$.fragment,o),s=!0)},o(o){N(l.$$.fragment,o),s=!1},d(o){o&&w(e),o&&w(t),o&&w(i),G(l)}}}function ne(c){let e,t,i,l,s,o,n,p;return s=new F({props:{name:"arrow_back",size:"2"}}),{c(){e=_("h2"),t=j(c[4]),i=h(),l=_("button"),q(s.$$.fragment),f(e,"class","svelte-e8noev"),f(l,"class","back svelte-e8noev")},m(a,u){C(a,e,u),r(e,t),C(a,i,u),C(a,l,u),D(s,l,null),o=!0,n||(p=[g(l,"pointerup",c[7]),g(l,"pointerdown",c[8])],n=!0)},p(a,u){(!o||u&16)&&K(t,a[4])},i(a){o||(E(s.$$.fragment,a),o=!0)},o(a){N(s.$$.fragment,a),o=!1},d(a){a&&w(e),a&&w(i),a&&w(l),G(s),n=!1,W(p)}}}function se(c){let e,t,i,l,s,o,n,p,a,u,d,v;return d=new F({props:{name:"arrow_back",size:"2"}}),{c(){e=_("div"),t=_("h2"),i=j(c[4]),l=h(),s=_("h2"),o=_("pre"),n=j(c[3]),p=j(" "),a=h(),u=_("button"),q(d.$$.fragment),f(t,"class","smallNum svelte-e8noev"),f(s,"class","dtmf svelte-e8noev"),X(e,"margin-right","auto"),f(e,"class","svelte-e8noev"),f(u,"class","back hide svelte-e8noev")},m(m,b){C(m,e,b),r(e,t),r(t,i),r(e,l),r(e,s),r(s,o),r(o,n),r(o,p),C(m,a,b),C(m,u,b),D(d,u,null),v=!0},p(m,b){(!v||b&16)&&K(i,m[4]),(!v||b&8)&&K(n,m[3])},i(m){v||(E(d.$$.fragment,m),v=!0)},o(m){N(d.$$.fragment,m),v=!1},d(m){m&&w(e),m&&w(a),m&&w(u),G(d)}}}function ce(c){let e,t,i,l,s,o;return t=new F({props:{name:"call",size:"2"}}),{c(){e=_("button"),q(t.$$.fragment),i=j(`
          Call`),f(e,"class","call svelte-e8noev")},m(n,p){C(n,e,p),D(t,e,null),r(e,i),l=!0,s||(o=g(e,"click",c[11]),s=!0)},p:I,i(n){l||(E(t.$$.fragment,n),l=!0)},o(n){N(t.$$.fragment,n),l=!1},d(n){n&&w(e),G(t),s=!1,o()}}}function oe(c){let e,t,i,l,s,o;return t=new F({props:{name:"call_end",size:"2"}}),{c(){e=_("button"),q(t.$$.fragment),i=j(`
          End`),f(e,"class","end svelte-e8noev")},m(n,p){C(n,e,p),D(t,e,null),r(e,i),l=!0,s||(o=g(e,"click",c[10]),s=!0)},p:I,i(n){l||(E(t.$$.fragment,n),l=!0)},o(n){N(t.$$.fragment,n),l=!1},d(n){n&&w(e),G(t),s=!1,o()}}}function re(c){let e,t,i,l,s,o,n,p,a,u,d,v;const m=[se,ne,le],b=[];function P(k,$){return k[2]?0:k[0].length>0?1:2}l=P(c),s=b[l]=m[l](c),n=new te({}),n.$on("press",c[9]);const y=[oe,ce],z=[];function T(k,$){return k[2]?0:1}return u=T(c),d=z[u]=y[u](c),{c(){e=_("section"),t=_("div"),i=_("div"),s.c(),o=h(),q(n.$$.fragment),p=h(),a=_("div"),d.c(),f(i,"class","number svelte-e8noev"),f(a,"class","callButtons svelte-e8noev"),f(t,"class","svelte-e8noev"),f(e,"class","svelte-e8noev")},m(k,$){C(k,e,$),r(e,t),r(t,i),b[l].m(i,null),r(t,o),D(n,t,null),r(t,p),r(t,a),z[u].m(a,null),v=!0},p(k,[$]){let B=l;l=P(k),l===B?b[l].p(k,$):(O(),N(b[B],1,1,()=>{b[B]=null}),Q(),s=b[l],s?s.p(k,$):(s=b[l]=m[l](k),s.c()),E(s,1),s.m(i,null));let S=u;u=T(k),u===S?z[u].p(k,$):(O(),N(z[S],1,1,()=>{z[S]=null}),Q(),d=z[u],d?d.p(k,$):(d=z[u]=y[u](k),d.c()),E(d,1),d.m(a,null))},i(k){v||(E(s),E(n.$$.fragment,k),E(d),v=!0)},o(k){N(s),N(n.$$.fragment,k),N(d),v=!1},d(k){k&&w(e),b[l].d(),G(n),z[u].d()}}}let ie=1;function ue(c){let e="";for(let t=0;t<c.length;t++){const i=c[t];t===3&&c.length>=7&&(e+="-"),t===6&&c.length>7&&(e+="-"),e+=i}return e}function ae(c,e,t){let i,{config:l={name:"Phone",placeholder:"405-123-4567"}}=e,s,o=!1,n="",p="",a=l.placeholder||"123-456-6789";const u=()=>{clearTimeout(s),t(0,n=n.slice(0,-1))},d=()=>{t(1,s=setTimeout(()=>{t(0,n=""),t(3,p="")},ie*1e3))},v=P=>{const y=P.detail;o?t(3,p+=y):n.length<10&&t(0,n+=y)},m=()=>{t(2,o=!1)},b=()=>{t(3,p=""),t(2,o=!0)};return c.$$set=P=>{"config"in P&&t(6,l=P.config)},c.$$.update=()=>{c.$$.dirty&1&&t(4,i=ue(n))},[n,s,o,p,i,a,l,u,d,v,m,b]}class fe extends R{constructor(e){super(),U(this,e,ae,re,V,{config:6})}}export{fe as default};