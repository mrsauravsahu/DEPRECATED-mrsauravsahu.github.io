import{S as t,i as e,s,e as n,t as a,a as l,c as r,b as o,d as i,f as c,g as h,h as f,j as u,k as v,l as d,z as k,q as p,n as m,A as g}from"./client.785e7c39.js";import{l as E}from"./luxon.85dfef4d.js";function y(t,e,s){const n=t.slice();return n[1]=e[s],n}function x(t){let e,s,p,m,g,y,x,I,j,A=E.fromISO(t[1].createdAt).toRelative()+"";return{c(){e=n("a"),s=n("div"),p=n("ss-card"),m=n("div"),g=n("h4"),y=a(A),I=l(),this.h()},l(t){e=r(t,"A",{href:!0,class:!0});var n=o(e);s=r(n,"DIV",{class:!0});var a=o(s);p=r(a,"SS-CARD",{title:!0});var l=o(p);m=r(l,"DIV",{class:!0});var f=o(m);g=r(f,"H4",{class:!0});var u=o(g);y=i(u,A),u.forEach(c),f.forEach(c),l.forEach(c),a.forEach(c),I=h(n),n.forEach(c),this.h()},h(){f(g,"class","svelte-140ok0t"),f(m,"class","link-content svelte-140ok0t"),u(p,"title",x=t[1].title),f(s,"class","link svelte-140ok0t"),f(e,"href",j=t[1].url),f(e,"class","svelte-140ok0t")},m(t,n){v(t,e,n),d(e,s),d(s,p),d(p,m),d(m,g),d(g,y),d(e,I)},p(t,s){1&s&&A!==(A=E.fromISO(t[1].createdAt).toRelative()+"")&&k(y,A),1&s&&x!==(x=t[1].title)&&u(p,"title",x),1&s&&j!==(j=t[1].url)&&f(e,"href",j)},d(t){t&&c(e)}}}function I(t){let e,s,u,k,E,I,j=t[0],A=[];for(let e=0;e<j.length;e+=1)A[e]=x(y(t,j,e));return{c(){e=l(),s=n("div"),u=n("p"),k=a("Links to interesting places that are pinned for your perusal. 😬"),E=l(),I=n("div");for(let t=0;t<A.length;t+=1)A[t].c();this.h()},l(t){p('[data-svelte="svelte-6byih4"]',document.head).forEach(c),e=h(t),s=r(t,"DIV",{class:!0});var n=o(s);u=r(n,"P",{});var a=o(u);k=i(a,"Links to interesting places that are pinned for your perusal. 😬"),a.forEach(c),E=h(n),I=r(n,"DIV",{class:!0});var l=o(I);for(let t=0;t<A.length;t+=1)A[t].l(l);l.forEach(c),n.forEach(c),this.h()},h(){document.title="Links",f(I,"class","links-container svelte-140ok0t"),f(s,"class","content svelte-140ok0t")},m(t,n){v(t,e,n),v(t,s,n),d(s,u),d(u,k),d(s,E),d(s,I);for(let t=0;t<A.length;t+=1)A[t].m(I,null)},p(t,[e]){if(1&e){let s;for(j=t[0],s=0;s<j.length;s+=1){const n=y(t,j,s);A[s]?A[s].p(n,e):(A[s]=x(n),A[s].c(),A[s].m(I,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=j.length}},i:m,o:m,d(t){t&&c(e),t&&c(s),g(A,t)}}}var j=function(t,e,s,n){return new(s||(s=Promise))((function(a,l){function r(t){try{i(n.next(t))}catch(t){l(t)}}function o(t){try{i(n.throw(t))}catch(t){l(t)}}function i(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,o)}i((n=n.apply(t,e||[])).next())}))};function A(){return j(this,void 0,void 0,(function*(){const t=yield this.fetch("links.json");return{links:(yield t.json()).data}}))}function D(t,e,s){let{links:n}=e;return t.$set=t=>{"links"in t&&s(0,n=t.links)},[n]}export default class extends t{constructor(t){super(),e(this,t,D,I,s,{links:0})}}export{A as preload};
