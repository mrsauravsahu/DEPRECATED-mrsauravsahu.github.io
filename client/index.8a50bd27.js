import{S as t,i as s,s as a,a as e,e as n,t as o,q as r,f as c,g as i,c as l,b as h,d as f,j as u,h as d,k as g,l as v,z as b,n as m}from"./client.f835053b.js";function p(t){let s,a,p,w,x,E,y,j,$,A,S,k,z,C=t[0].title+"";return document.title=s=t[0].title,{c(){a=e(),p=n("div"),w=n("h1"),x=o(C),E=e(),y=n("ss-anchor"),j=o("🔽 read raw"),$=e(),A=n("a"),S=e(),k=n("wc-markdown"),this.h()},l(t){r('[data-svelte="svelte-w2z4eh"]',document.head).forEach(c),a=i(t),p=l(t,"DIV",{class:!0});var s=h(p);w=l(s,"H1",{});var e=h(w);x=f(e,C),e.forEach(c),E=i(s),y=l(s,"SS-ANCHOR",{href:!0});var n=h(y);j=f(n,"🔽 read raw"),n.forEach(c),$=i(s),A=l(s,"A",{href:!0}),h(A).forEach(c),S=i(s),k=l(s,"WC-MARKDOWN",{src:!0,highlight:!0,class:!0}),h(k).forEach(c),s.forEach(c),this.h()},h(){u(y,"href",t[1]),d(A,"href",t[1]),k.src!==(z=t[1])&&u(k,"src",z),u(k,"highlight",""),u(k,"class","svelte-tg136x"),d(p,"class","content")},m(t,s){g(t,a,s),g(t,p,s),v(p,w),v(w,x),v(p,E),v(p,y),v(y,j),v(p,$),v(p,A),v(p,S),v(p,k)},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&C!==(C=t[0].title+"")&&b(x,C)},i:m,o:m,d(t){t&&c(a),t&&c(p)}}}var w=function(t,s,a,e){return new(a||(a=Promise))((function(n,o){function r(t){try{i(e.next(t))}catch(t){o(t)}}function c(t){try{i(e.throw(t))}catch(t){o(t)}}function i(t){var s;t.done?n(t.value):(s=t.value,s instanceof a?s:new a((function(t){t(s)}))).then(r,c)}i((e=e.apply(t,s||[])).next())}))};function x({params:t}){return w(this,void 0,void 0,(function*(){const{blogId:s}=t,a=yield this.fetch(`blog/${s}.json`);return yield a.json()}))}function E(t,s,a){let{blog:e}=s;const n=`blog/${e.id}/${e.posts[0].id}/file`;return t.$set=t=>{"blog"in t&&a(0,e=t.blog)},[e,n]}export default class extends t{constructor(t){super(),s(this,t,E,p,a,{blog:0})}}export{x as preload};
