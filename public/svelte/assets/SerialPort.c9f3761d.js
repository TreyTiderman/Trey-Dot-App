import{S as Ze,i as $e,s as et,e as o,c as h,t as F,z as tt,f as Qe,a,J as Ue,b as D,h as l,K as be,j as B,m as Ve,l as y,o as se,p as lt,q as me,r as nt,d as P,w as qe,v as We,x as st,y as ot,I as it,L as at,k as ct,n as ye,M as Ce,N as ze}from"./index.ec567be7.js";import rt from"./Terminal.ab582baf.js";function Ne(e,t,n){const s=e.slice();return s[9]=t[n],s}function je(e,t,n){const s=e.slice();return s[13]=t[n],s}function Je(e){let t,n,s,i,u;return n=new it({props:{name:"circle-exclamation",size:"1",color:"var(--color-bg-red)"}}),{c(){t=o("div"),Qe(n.$$.fragment),s=h(),i=o("span"),i.textContent="Plugin a USB serial device to get started",at(i,"color","var(--color-bg-red)")},m(r,k){D(r,t,k),Ve(n,t,null),l(t,s),l(t,i),u=!0},i(r){u||(se(n.$$.fragment,r),u=!0)},o(r){me(n.$$.fragment,r),u=!1},d(r){r&&P(t),We(n)}}}function Ke(e){let t,n,s;return{c(){t=o("option"),t.textContent="COM1",n=o("option"),n.textContent="COM3",s=o("option"),s.textContent="/dev/ttyUSB0",t.__value="COM1",t.value=t.__value,n.__value="COM3",n.value=n.__value,s.__value="/dev/ttyUSB0",s.value=s.__value},m(i,u){D(i,t,u),D(i,n,u),D(i,s,u)},d(i){i&&P(t),i&&P(n),i&&P(s)}}}function Xe(e){let t,n=e[13].path+"",s,i;return{c(){t=o("option"),s=F(n),t.__value=i=e[13].path,t.value=t.__value},m(u,r){D(u,t,r),l(t,s)},p(u,r){r&2&&n!==(n=u[13].path+"")&&ct(s,n),r&2&&i!==(i=u[13].path)&&(t.__value=i,t.value=t.__value)},d(u){u&&P(t)}}}function Ge(e){let t,n=e[9]+"",s;return{c(){t=o("option"),s=F(n),t.__value=e[9],t.value=t.__value},m(i,u){D(i,t,u),l(t,s)},p:ye,d(i){i&&P(t)}}}function ut(e){let t,n,s;return{c(){t=o("button"),t.textContent="Open",a(t,"class","connection-open svelte-1229h59")},m(i,u){D(i,t,u),n||(s=y(t,"click",e[11]),n=!0)},p:ye,d(i){i&&P(t),n=!1,s()}}}function ft(e){let t,n,s;return{c(){t=o("button"),t.textContent="Close",a(t,"class","connection-close svelte-1229h59")},m(i,u){D(i,t,u),n||(s=y(t,"click",e[11]),n=!0)},p:ye,d(i){i&&P(t),n=!1,s()}}}function ht(e){let t,n,s,i,u,r,k,j,J,T,d,U,K,M,oe,$,ie,S,ae,x,ce,re,ue,O,fe,b,he,R,p,Se,Oe,X,q,Re,_e,Me,z,Ie,ve,we,Ee,pe,Le,H,ge,De,N,Pe,A,G,w,xe,ee,He,Q,E,Ae,te,Be,V,L,Fe,le,W,ke,Te,v=e[1].length===0&&e[2]&&Je(),C=e[1].length===0&&e[2]&&Ke(),Y=e[1],m=[];for(let c=0;c<Y.length;c+=1)m[c]=Xe(je(e,Y,c));let Z=e[10],g=[];for(let c=0;c<Z.length;c+=1)g[c]=Ge(Ne(e,Z,c));function Ye(c,_){return c[13].isOpen?ft:ut}let de=Ye(e)(e);return N=new rt({props:{lines:e[8]}}),{c(){t=o("article"),n=o("aside"),s=o("h2"),s.textContent="Connection Settings",i=h(),v&&v.c(),u=h(),r=o("div"),k=o("label"),j=F("Device"),J=o("br"),T=h(),d=o("select"),C&&C.c(),U=tt();for(let c=0;c<m.length;c+=1)m[c].c();K=h(),M=o("label"),oe=F("Baud Rate"),$=o("br"),ie=h(),S=o("select");for(let c=0;c<g.length;c+=1)g[c].c();ae=h(),x=o("label"),ce=F("Expected Delimiter"),re=o("br"),ue=h(),O=o("input"),fe=h(),b=o("div"),b.innerHTML=`History<br/> 
        <div class="connection-ascii-hex svelte-1229h59"><button class="svelte-1229h59">Recall</button> 
          <button class="svelte-1229h59">Hide</button></div>`,he=h(),R=o("div"),p=F("Encoding Mode"),Se=o("br"),Oe=h(),X=o("div"),q=o("button"),Re=F("ASCII"),Me=h(),z=o("button"),Ie=F("HEX"),we=h(),de.c(),Ee=h(),pe=o("div"),pe.innerHTML=`<div>Caridge Return (CR) = \\r or \\x0D</div> 
      <div>Line Feed (LF) = \\n or \\x0A</div>`,Le=h(),H=o("section"),ge=o("h2"),ge.textContent="Terminal",De=h(),Qe(N.$$.fragment),Pe=h(),A=o("div"),G=o("div"),w=o("input"),xe=h(),ee=o("button"),ee.textContent="Send",He=h(),Q=o("div"),E=o("input"),Ae=h(),te=o("button"),te.textContent="Send",Be=h(),V=o("div"),L=o("input"),Fe=h(),le=o("button"),le.textContent="Send",a(d,"class","svelte-1229h59"),e[3]===void 0&&Ue(()=>e[14].call(d)),a(S,"class","svelte-1229h59"),e[9]===void 0&&Ue(()=>e[15].call(S)),a(O,"type","text"),a(O,"placeholder","\\r\\n"),a(O,"class","svelte-1229h59"),a(b,"class","svelte-1229h59"),a(q,"class","connection-ascii svelte-1229h59"),a(q,"style",_e=e[0]==="hex"?"background-color: var(--color-bg-section);":"color: var(--color-text-bright);"),a(z,"class","connection-hex svelte-1229h59"),a(z,"style",ve=e[0]==="ascii"?"background-color: var(--color-bg-section);":"color: var(--color-text-bright);"),a(X,"class","connection-ascii-hex svelte-1229h59"),a(R,"class","svelte-1229h59"),a(r,"class","connection-options svelte-1229h59"),a(pe,"class","notes svelte-1229h59"),a(n,"class","grid svelte-1229h59"),a(w,"type","text"),a(w,"placeholder","fa 01 01\\r"),a(w,"class","svelte-1229h59"),a(ee,"class","svelte-1229h59"),a(G,"class","svelte-1229h59"),a(E,"type","text"),a(E,"placeholder","\\xAA\\x11\\xFE\\x01\\x01\\x11"),a(E,"class","svelte-1229h59"),a(te,"class","svelte-1229h59"),a(Q,"class","svelte-1229h59"),a(L,"type","text"),a(L,"placeholder","\\x01\\x30\\x41\\x30\\x41\\x30\\x43\\x02\\x43\\x32\\x30\\x33\\x44\\x36\\x30\\x30\\x30\\x31\\x03\\x73\\x0D"),a(L,"class","svelte-1229h59"),a(le,"class","svelte-1229h59"),a(V,"class","svelte-1229h59"),a(A,"class","sends svelte-1229h59"),a(H,"class","grid svelte-1229h59"),a(t,"class","svelte-1229h59")},m(c,_){D(c,t,_),l(t,n),l(n,s),l(n,i),v&&v.m(n,null),l(n,u),l(n,r),l(r,k),l(k,j),l(k,J),l(k,T),l(k,d),C&&C.m(d,null),l(d,U);for(let I=0;I<m.length;I+=1)m[I].m(d,null);be(d,e[3]),l(r,K),l(r,M),l(M,oe),l(M,$),l(M,ie),l(M,S);for(let I=0;I<g.length;I+=1)g[I].m(S,null);be(S,e[9]),l(r,ae),l(r,x),l(x,ce),l(x,re),l(x,ue),l(x,O),B(O,e[4]),l(r,fe),l(r,b),l(r,he),l(r,R),l(R,p),l(R,Se),l(R,Oe),l(R,X),l(X,q),l(q,Re),l(X,Me),l(X,z),l(z,Ie),l(r,we),de.m(r,null),l(n,Ee),l(n,pe),l(t,Le),l(t,H),l(H,ge),l(H,De),Ve(N,H,null),l(H,Pe),l(H,A),l(A,G),l(G,w),B(w,e[5]),l(G,xe),l(G,ee),l(A,He),l(A,Q),l(Q,E),B(E,e[6]),l(Q,Ae),l(Q,te),l(A,Be),l(A,V),l(V,L),B(L,e[7]),l(V,Fe),l(V,le),W=!0,ke||(Te=[y(d,"change",e[14]),y(S,"change",e[15]),y(O,"input",e[16]),y(q,"click",e[17]),y(z,"click",e[18]),y(w,"input",e[19]),y(ee,"click",function(){Ce(e[12](e[5]))&&e[12](e[5]).apply(this,arguments)}),y(E,"input",e[20]),y(te,"click",function(){Ce(e[12](e[6]))&&e[12](e[6]).apply(this,arguments)}),y(L,"input",e[21]),y(le,"click",function(){Ce(e[12](e[7]))&&e[12](e[7]).apply(this,arguments)})],ke=!0)},p(c,[_]){if(e=c,e[1].length===0&&e[2]?v?_&6&&se(v,1):(v=Je(),v.c(),se(v,1),v.m(n,u)):v&&(lt(),me(v,1,1,()=>{v=null}),nt()),e[1].length===0&&e[2]?C||(C=Ke(),C.c(),C.m(d,U)):C&&(C.d(1),C=null),_&2){Y=e[1];let f;for(f=0;f<Y.length;f+=1){const ne=je(e,Y,f);m[f]?m[f].p(ne,_):(m[f]=Xe(ne),m[f].c(),m[f].m(d,null))}for(;f<m.length;f+=1)m[f].d(1);m.length=Y.length}if(_&10&&be(d,e[3]),_&1024){Z=e[10];let f;for(f=0;f<Z.length;f+=1){const ne=Ne(e,Z,f);g[f]?g[f].p(ne,_):(g[f]=Ge(ne),g[f].c(),g[f].m(S,null))}for(;f<g.length;f+=1)g[f].d(1);g.length=Z.length}_&1536&&be(S,e[9]),_&16&&O.value!==e[4]&&B(O,e[4]),(!W||_&1&&_e!==(_e=e[0]==="hex"?"background-color: var(--color-bg-section);":"color: var(--color-text-bright);"))&&a(q,"style",_e),(!W||_&1&&ve!==(ve=e[0]==="ascii"?"background-color: var(--color-bg-section);":"color: var(--color-text-bright);"))&&a(z,"style",ve),de.p(e,_);const I={};_&256&&(I.lines=e[8]),N.$set(I),_&32&&w.value!==e[5]&&B(w,e[5]),_&64&&E.value!==e[6]&&B(E,e[6]),_&128&&L.value!==e[7]&&B(L,e[7])},i(c){W||(se(v),se(N.$$.fragment,c),W=!0)},o(c){me(v),me(N.$$.fragment,c),W=!1},d(c){c&&P(t),v&&v.d(),C&&C.d(),qe(m,c),qe(g,c),de.d(),We(N),ke=!1,st(Te)}}}async function _t(e,t,n){}async function vt(e){}function pt(e,t,n){let s=[],i={isOpen:!1},u=!1;ot(async()=>{availablePortsResponse.forEach(b=>{b.serialNumber!==void 0&&n(1,s=[...s,b])}),s.length>0&&n(3,k=s[0].path),s.length>0&&setInterval(async()=>{},1*1e3),n(2,u=!0)});const r=[9600,14400,19200,38400,57600,115200];let k,j,J="\\r\\n",T="ascii";async function d(){i.isOpen?vt():_t()}let U="ka 01 01\\r",K="ka 01 00\\r",M="mc 01 02\\r";async function oe(b){}let $;function ie(b,he){if(b!=null&&b.data){let R=[];he==="hex"?b.data.forEach(p=>{p.error!==""&&(p.hex+=" <- "+p.error),R.push({wasReceived:p.wasReceived,timestampISO:p.timestampISO,data:p.hex})}):b.data.forEach(p=>{p.error!==""&&(p.ascii+=" <- "+p.error),R.push({wasReceived:p.wasReceived,timestampISO:p.timestampISO,data:p.ascii})}),n(8,$=R)}}function S(){k=ze(this),n(3,k),n(1,s)}function ae(){j=ze(this),n(9,j),n(10,r)}function x(){J=this.value,n(4,J)}const ce=()=>n(0,T="ascii"),re=()=>n(0,T="hex");function ue(){U=this.value,n(5,U)}function O(){K=this.value,n(6,K)}function fe(){M=this.value,n(7,M)}return e.$$.update=()=>{e.$$.dirty&1&&ie(i,T)},console.log("port",i),[T,s,u,k,J,U,K,M,$,j,r,d,oe,i,S,ae,x,ce,re,ue,O,fe]}class gt extends Ze{constructor(t){super(),$e(this,t,pt,ht,et,{})}}export{gt as default};
