import{S as Y,i as Z,s as $,I as ee,e as d,t as se,a as y,c as G,b as f,f as J,g as a,m as O,l as _,h as te,j as M,u as le,k as N,v as ae,n as R,o as z,G as ne,E as ce,B as oe,p as ie,q as T,C as H,P as re}from"./index.c4c2aa46.js";function X(t){let n,s,c,l,r;return s=new ee({props:{name:"arrow_back",size:"2"}}),{c(){n=d("button"),G(s.$$.fragment),f(n,"class","back svelte-dx84yj")},m(o,e){J(o,n,e),O(s,n,null),c=!0,l||(r=[_(n,"pointerup",t[5]),_(n,"pointerdown",t[6])],l=!0)},p:oe,i(o){c||(M(s.$$.fragment,o),c=!0)},o(o){N(s.$$.fragment,o),c=!1},d(o){o&&R(n),z(s),l=!1,ne(r)}}}function pe(t){let n,s,c,l,r,o,e,v,g,i,u,m,C,b,W,x,q,h,B,k,P,F,A,S,Q,w,U,E,L,I,D,V,p=t[0]!==""&&X(t);return L=new ee({props:{name:"check"}}),{c(){n=d("div"),s=d("div"),c=d("h2"),l=se(t[2]),r=y(),p&&p.c(),o=y(),e=d("div"),v=d("button"),v.innerHTML=`<div class="svelte-dx84yj"><span class="svelte-dx84yj">1</span> 
        <span class="svelte-dx84yj"></span></div>`,g=y(),i=d("button"),i.innerHTML=`<div class="svelte-dx84yj"><span class="svelte-dx84yj">2</span> 
        <span class="svelte-dx84yj">ABC</span></div>`,u=y(),m=d("button"),m.innerHTML=`<div class="svelte-dx84yj"><span class="svelte-dx84yj">3</span> 
        <span class="svelte-dx84yj">DEF</span></div>`,C=y(),b=d("button"),b.innerHTML=`<div class="svelte-dx84yj"><span class="svelte-dx84yj">4</span> 
        <span class="svelte-dx84yj">GHI</span></div>`,W=y(),x=d("button"),x.innerHTML=`<div class="svelte-dx84yj"><span class="svelte-dx84yj">5</span> 
        <span class="svelte-dx84yj">JKL</span></div>`,q=y(),h=d("button"),h.innerHTML=`<div class="svelte-dx84yj"><span class="svelte-dx84yj">6</span> 
        <span class="svelte-dx84yj">MNO</span></div>`,B=y(),k=d("button"),k.innerHTML=`<div class="svelte-dx84yj"><span class="svelte-dx84yj">7</span> 
        <span class="svelte-dx84yj">PQRS</span></div>`,P=y(),F=d("button"),F.innerHTML=`<div class="svelte-dx84yj"><span class="svelte-dx84yj">8</span> 
        <span class="svelte-dx84yj">TUV</span></div>`,A=y(),S=d("button"),S.innerHTML=`<div class="svelte-dx84yj"><span class="svelte-dx84yj">9</span> 
        <span class="svelte-dx84yj">WXYZ</span></div>`,Q=y(),w=d("button"),w.innerHTML=`<div class="svelte-dx84yj"><span class="svelte-dx84yj">0</span> 
        <span class="svelte-dx84yj"></span></div>`,U=y(),E=d("button"),G(L.$$.fragment),f(c,"class","svelte-dx84yj"),f(s,"class","number svelte-dx84yj"),f(v,"class","svelte-dx84yj"),f(i,"class","svelte-dx84yj"),f(m,"class","svelte-dx84yj"),f(b,"class","svelte-dx84yj"),f(x,"class","svelte-dx84yj"),f(h,"class","svelte-dx84yj"),f(k,"class","svelte-dx84yj"),f(F,"class","svelte-dx84yj"),f(S,"class","svelte-dx84yj"),f(w,"class","svelte-dx84yj"),f(E,"class","enter svelte-dx84yj"),f(e,"class","grid3x3 svelte-dx84yj"),f(n,"class","wholeKeypad svelte-dx84yj")},m(j,K){J(j,n,K),a(n,s),a(s,c),a(c,l),a(s,r),p&&p.m(s,null),a(n,o),a(n,e),a(e,v),a(e,g),a(e,i),a(e,u),a(e,m),a(e,C),a(e,b),a(e,W),a(e,x),a(e,q),a(e,h),a(e,B),a(e,k),a(e,P),a(e,F),a(e,A),a(e,S),a(e,Q),a(e,w),a(e,U),a(e,E),O(L,E,null),I=!0,D||(V=[_(v,"click",t[7]),_(i,"click",t[8]),_(m,"click",t[9]),_(b,"click",t[10]),_(x,"click",t[11]),_(h,"click",t[12]),_(k,"click",t[13]),_(F,"click",t[14]),_(S,"click",t[15]),_(w,"click",t[16]),_(E,"click",t[4])],D=!0)},p(j,[K]){(!I||K&4)&&te(l,j[2]),j[0]!==""?p?(p.p(j,K),K&1&&M(p,1)):(p=X(j),p.c(),M(p,1),p.m(s,null)):p&&(le(),N(p,1,1,()=>{p=null}),ae())},i(j){I||(M(p),M(L.$$.fragment,j),I=!0)},o(j){N(p),N(L.$$.fragment,j),I=!1},d(j){j&&R(n),p&&p.d(),z(L),D=!1,ne(V)}}}let de=1;function ue(t){let n="";for(let s=0;s<t.length;s++){const c=t[s];s!==t.length-1?n+="\u2022":n+=c}return n}function fe(t,n,s){let c;const l=ce();let r,o="";function e(P){o.length<10&&s(0,o+=P),l("press",P),l("number",o)}function v(){l("enter",o)}const g=()=>{clearTimeout(r),s(0,o=o.slice(0,-1))},i=()=>{s(1,r=setTimeout(()=>{s(0,o="")},de*1e3))},u=()=>e("1"),m=()=>e("2"),C=()=>e("3"),b=()=>e("4"),W=()=>e("5"),x=()=>e("6"),q=()=>e("7"),h=()=>e("8"),B=()=>e("9"),k=()=>e("0");return t.$$.update=()=>{t.$$.dirty&1&&s(2,c=ue(o))},[o,r,c,e,v,g,i,u,m,C,b,W,x,q,h,B,k]}class ve extends Y{constructor(n){super(),Z(this,n,fe,pe,$,{})}}function ge(t){let n,s,c,l,r,o;return s=new ve({}),s.$on("enter",t[1]),{c(){n=d("section"),G(s.$$.fragment),c=y(),l=d("p"),r=se(t[0]),f(n,"class","svelte-1sf4ry7")},m(e,v){J(e,n,v),O(s,n,null),a(n,c),a(n,l),a(l,r),o=!0},p(e,[v]){(!o||v&1)&&te(r,e[0])},i(e){o||(M(s.$$.fragment,e),o=!0)},o(e){N(s.$$.fragment,e),o=!1},d(e){e&&R(n),z(s)}}}function ye(t,n,s){let c,l;ie(t,T,g=>s(3,l=g));let{config:r={name:"Passcode",file:"PasscodePage",heading:"Enter code to continue...",passcodes:[{code:"123",page:"home"},{code:"777",configFile:"examples/small.json"}]}}=n,o=r.passcodes;function e(g){let i=g;i=i[0]==="/"?i.substring(1):i,i=i.endsWith(".json")?i:`${i}.json`,console.log("config file name",i),s(0,c="Loading.");let u=setInterval(()=>{s(0,c+="."),c.length>12&&s(0,c="Loading.")},250);re(i).then(m=>{setTimeout(()=>{clearInterval(u),H(T,l.config=m,l),H(T,l.router.popup="",l),H(T,l.router.page=l.config.client.startup.page,l)},2e3)})}function v(g){const i=g.detail;o.forEach(u=>{i===u.code?(u.configFile?(s(0,c="Loading..."),console.log("passcode.configFile",u.configFile),e(u.configFile)):u.page&&(s(0,c="Sucess"),console.log("passcode.page",u.page),H(T,l.router.popup="",l),H(T,l.router.page=u.page,l)),u.popup&&(s(0,c="Sucess"),console.log("passcode.popup",u.popup),H(T,l.router.popup=u.popup,l))):s(0,c="Wrong code. Try again...")})}return t.$$set=g=>{"config"in g&&s(2,r=g.config)},t.$$.update=()=>{t.$$.dirty&4&&console.log("config",r)},s(0,c=""),[c,v,r]}class je extends Y{constructor(n){super(),Z(this,n,ye,ge,$,{config:2})}}export{je as default};
