import{S as t,i as e,s,P as n,e as l,j as a,k as o,c as r,a as c,l as i,m as f,d as h,f as u,g as p,o as $,h as d,t as m,p as v,q as g,r as k,A as y,u as w,w as x,x as j,y as E,v as I,z as A,n as T}from"./client.796fecfc.js";import{l as b}from"./luxon.3710761b.js";function D(t,e,s){const n=t.slice();return n[1]=e[s],n}function S(t){let e;return{c(){e=k("--links")},l(t){e=w(t,"--links")},m(t,s){p(t,e,s)},d(t){t&&h(e)}}}function V(t){let e,s=t[1].title+"";return{c(){e=k(s)},l(t){e=w(t,s)},m(t,s){p(t,e,s)},p(t,n){1&n&&s!==(s=t[1].title+"")&&A(e,s)},d(t){t&&h(e)}}}function L(t){let e,s,o;return s=new n({props:{type:"h2",theme:"dark",$$slots:{default:[V]},$$scope:{ctx:t}}}),{c(){e=l("div"),a(s.$$.fragment),this.h()},l(t){e=r(t,"DIV",{slot:!0,class:!0});var n=c(e);i(s.$$.fragment,n),n.forEach(h),this.h()},h(){u(e,"slot","title"),u(e,"class","svelte-1jp3klf")},m(t,n){p(t,e,n),$(s,e,null),o=!0},p(t,e){const n={};17&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){o||(m(s.$$.fragment,t),o=!0)},o(t){v(s.$$.fragment,t),o=!1},d(t){t&&h(e),g(s)}}}function O(t){let e,s,n,a=b.fromISO(t[1].createdAt).toRelative()+"";return{c(){e=l("div"),s=l("h4"),n=k(a),this.h()},l(t){e=r(t,"DIV",{class:!0,slot:!0});var l=c(e);s=r(l,"H4",{});var o=c(s);n=w(o,a),o.forEach(h),l.forEach(h),this.h()},h(){u(e,"class"," svelte-1jp3klf"),u(e,"slot","content")},m(t,l){p(t,e,l),d(e,s),d(s,n)},p(t,e){1&e&&a!==(a=b.fromISO(t[1].createdAt).toRelative()+"")&&A(n,a)},d(t){t&&h(e)}}}function P(t){let e;return{c(){e=o()},l(t){e=f(t)},m(t,s){p(t,e,s)},p:T,i:T,o:T,d(t){t&&h(e)}}}function R(t){let e,s,n,k,y;return s=new E({props:{theme:"dark",$$slots:{default:[P],content:[O],title:[L]},$$scope:{ctx:t}}}),{c(){e=l("a"),a(s.$$.fragment),n=o(),this.h()},l(t){e=r(t,"A",{href:!0,class:!0});var l=c(e);i(s.$$.fragment,l),n=f(l),l.forEach(h),this.h()},h(){u(e,"href",k=t[1].url),u(e,"class","svelte-1jp3klf")},m(t,l){p(t,e,l),$(s,e,null),d(e,n),y=!0},p(t,n){const l={};17&n&&(l.$$scope={dirty:n,ctx:t}),s.$set(l),(!y||1&n&&k!==(k=t[1].url))&&u(e,"href",k)},i(t){y||(m(s.$$.fragment,t),y=!0)},o(t){v(s.$$.fragment,t),y=!1},d(t){t&&h(e),g(s)}}}function U(t){let e,s,E,A,T,b,V,L,O,P;E=new n({props:{type:"h1",theme:"dark",$$slots:{default:[S]},$$scope:{ctx:t}}});let U=t[0],Y=[];for(let e=0;e<U.length;e+=1)Y[e]=R(D(t,U,e));const q=t=>v(Y[t],1,1,()=>{Y[t]=null});return{c(){e=o(),s=l("section"),a(E.$$.fragment),A=o(),T=l("div"),b=l("p"),V=k("Links to interesting places that are pinned for your perusal. 😬 These get updated every week with the latest YouTube videos. And coming soon, will showcase latest photos from Unsplash."),L=o(),O=l("div");for(let t=0;t<Y.length;t+=1)Y[t].c();this.h()},l(t){y('[data-svelte="svelte-6byih4"]',document.head).forEach(h),e=f(t),s=r(t,"SECTION",{class:!0});var n=c(s);i(E.$$.fragment,n),A=f(n),T=r(n,"DIV",{class:!0});var l=c(T);b=r(l,"P",{class:!0});var a=c(b);V=w(a,"Links to interesting places that are pinned for your perusal. 😬 These get updated every week with the latest YouTube videos. And coming soon, will showcase latest photos from Unsplash."),a.forEach(h),L=f(l),O=r(l,"DIV",{class:!0});var o=c(O);for(let t=0;t<Y.length;t+=1)Y[t].l(o);o.forEach(h),l.forEach(h),n.forEach(h),this.h()},h(){document.title="Links",u(b,"class","svelte-1jp3klf"),u(O,"class","links-container svelte-1jp3klf"),u(T,"class","links-content svelte-1jp3klf"),u(s,"class","ss-content svelte-1jp3klf")},m(t,n){p(t,e,n),p(t,s,n),$(E,s,null),d(s,A),d(s,T),d(T,b),d(b,V),d(T,L),d(T,O);for(let t=0;t<Y.length;t+=1)Y[t].m(O,null);P=!0},p(t,[e]){const s={};if(16&e&&(s.$$scope={dirty:e,ctx:t}),E.$set(s),1&e){let s;for(U=t[0],s=0;s<U.length;s+=1){const n=D(t,U,s);Y[s]?(Y[s].p(n,e),m(Y[s],1)):(Y[s]=R(n),Y[s].c(),m(Y[s],1),Y[s].m(O,null))}for(I(),s=U.length;s<Y.length;s+=1)q(s);x()}},i(t){if(!P){m(E.$$.fragment,t);for(let t=0;t<U.length;t+=1)m(Y[t]);P=!0}},o(t){v(E.$$.fragment,t),Y=Y.filter(Boolean);for(let t=0;t<Y.length;t+=1)v(Y[t]);P=!1},d(t){t&&h(e),t&&h(s),g(E),j(Y,t)}}}var Y=function(t,e,s,n){return new(s||(s=Promise))((function(l,a){function o(t){try{c(n.next(t))}catch(t){a(t)}}function r(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?l(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,r)}c((n=n.apply(t,e||[])).next())}))};function q(){return Y(this,void 0,void 0,(function*(){const t=yield this.fetch("links.json");return{links:(yield t.json()).data}}))}function z(t,e,s){let{links:n}=e;return t.$set=t=>{"links"in t&&s(0,n=t.links)},[n]}export default class extends t{constructor(t){super(),e(this,t,z,U,s,{links:0})}}export{q as preload};