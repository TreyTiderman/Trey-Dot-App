function u(n){return typeof n!="string"?!1:!isNaN(n)&&!isNaN(parseFloat(n))}function a(n){return typeof n!="string"?!1:/\s/.test(n)}function r(n,t=!1){if(n==null)return t?"IP is null or undefined":!1;if(n.length>15)return t?"IP > 15 characters":!1;const e=n.split(".");if(e.length-1!==3)return t?"IP contains < 3 periods":!1;for(let i=0;i<e.length;i++){if(a(e[i]))return t?`Octet ${i+1} contains white space`:!1;if(u(e[i])===!1)return t?`Octet ${i+1} is not a number`:!1;const l=Number(e[i]);if(l<0||l>255)return t?`Octet ${i+1} is not between 0-255`:!1}return!0}function o(n,t=!1){if(n==null)return t?"Mask is null or undefined":!1;if(n.length>15)return t?"Mask > 15 characters":!1;const e=n.split(".");if(e.length-1!==3)return t?"Mask contains < 3 periods":!1;for(let f=0;f<e.length;f++){if(a(e[f]))return t?`Octet ${f+1} contains white space`:!1;if(u(e[f])===!1)return t?`Octet ${f+1} is not a number`:!1}if(e[3]>e[2])return t?"Octet 4 greater than octet 3":!1;if(e[2]>e[1])return t?"Octet 3 greater than octet 2":!1;if(e[1]>e[0])return t?"Octet 2 greater than octet 1":!1;const i=["255"],l=["255","254","252","248","240","224","192","128","0"],c=["252","248","240","224","192","128","0"];return i.includes(e[0])===!1?t?"Octet 1 is not 255":!1:l.includes(e[1])===!1?t?"Octet 2 is not valid":!1:l.includes(e[2])===!1?t?"Octet 3 is not valid":!1:c.includes(e[3])===!1?t?"Octet 4 is not valid":!1:!0}function d(n,t=!1){return n==null?t?"Is null or undefined":!1:typeof n!="number"?t?"Is not a number":!1:n<0||n>2**32-2?t?"Is not a 32bit unsigned integer":!1:!0}export{d as a,o as b,r as v};