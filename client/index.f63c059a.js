import{S as t,i as e,s as a,a as s,e as n,t as o,q as r,f as c,g as i,c as l,b as h,d as f,j as d,h as u,k as g,l as v,z as m,n as b}from"./client.5d32d8ed.js";function p(t){let e,a,p,w,x,E,y,j,A,S,$,k,z,C=t[0].title+"";return document.title=e=t[0].title,{c(){a=s(),p=n("div"),w=n("h1"),x=o(C),E=s(),y=n("ss-anchor"),j=o("🔽 read raw"),A=s(),S=n("a"),$=s(),k=n("wc-markdown"),this.h()},l(t){r('[data-svelte="svelte-w2z4eh"]',document.head).forEach(c),a=i(t),p=l(t,"DIV",{class:!0});var e=h(p);w=l(e,"H1",{});var s=h(w);x=f(s,C),s.forEach(c),E=i(e),y=l(e,"SS-ANCHOR",{href:!0});var n=h(y);j=f(n,"🔽 read raw"),n.forEach(c),A=i(e),S=l(e,"A",{href:!0}),h(S).forEach(c),$=i(e),k=l(e,"WC-MARKDOWN",{src:!0,highlight:!0,class:!0}),h(k).forEach(c),e.forEach(c),this.h()},h(){d(y,"href",t[1]),u(S,"href",t[1]),k.src!==(z=t[1])&&d(k,"src",z),d(k,"highlight",""),d(k,"class","svelte-tg136x"),u(p,"class","content")},m(t,e){g(t,a,e),g(t,p,e),v(p,w),v(w,x),v(p,E),v(p,y),v(y,j),v(p,A),v(p,S),v(p,$),v(p,k)},p(t,[a]){1&a&&e!==(e=t[0].title)&&(document.title=e),1&a&&C!==(C=t[0].title+"")&&m(x,C)},i:b,o:b,d(t){t&&c(a),t&&c(p)}}}var w=function(t,e,a,s){return new(a||(a=Promise))((function(n,o){function r(t){try{i(s.next(t))}catch(t){o(t)}}function c(t){try{i(s.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(r,c)}i((s=s.apply(t,e||[])).next())}))};function x({params:t}){return w(this,void 0,void 0,(function*(){const{blogId:e}=t,a=yield this.fetch(`blog/${e}.json`);return yield a.json()}))}function E(t,e,a){let{blog:s}=e;const n=`blog/${s.id}/file`;return t.$set=t=>{"blog"in t&&a(0,s=t.blog)},[s,n]}export default class extends t{constructor(t){super(),e(this,t,E,p,a,{blog:0})}}export{x as preload};