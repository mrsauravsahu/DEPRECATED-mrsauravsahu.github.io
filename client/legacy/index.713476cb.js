import{h as t,_ as n,a as r,b as e,d as a,j as s,s as c,k as o,S as i,l,t as u,m as f,n as h,o as v,p as d,q as p,r as k,u as m,v as y,w as g,x,L as E,D,i as R,y as w,M as I}from"./client.83cdd2b7.js";import{l as S}from"./luxon.732caca1.js";function j(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=r(t);if(n){var c=r(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return e(this,a)}}function b(t,n,r){var e=t.slice();return e[1]=n[r],e}function A(t){var n,r,e,a,s,c,o,i,D,R=S.fromISO(t[1].createdAt).toRelative()+"";return{c:function(){n=l("a"),r=l("div"),e=l("ss-card"),a=l("div"),s=l("h4"),c=u(R),i=f(),this.h()},l:function(t){n=h(t,"A",{href:!0,class:!0});var o=v(n);r=h(o,"DIV",{class:!0});var l=v(r);e=h(l,"SS-CARD",{title:!0});var u=v(e);a=h(u,"DIV",{class:!0});var f=v(a);s=h(f,"H4",{class:!0});var m=v(s);c=d(m,R),m.forEach(p),f.forEach(p),u.forEach(p),l.forEach(p),i=k(o),o.forEach(p),this.h()},h:function(){m(s,"class","svelte-140ok0t"),m(a,"class","link-content svelte-140ok0t"),y(e,"title",o=t[1].title),m(r,"class","link svelte-140ok0t"),m(n,"href",D=t[1].url),m(n,"class","svelte-140ok0t")},m:function(t,o){g(t,n,o),x(n,r),x(r,e),x(e,a),x(a,s),x(s,c),x(n,i)},p:function(t,r){1&r&&R!==(R=S.fromISO(t[1].createdAt).toRelative()+"")&&E(c,R),1&r&&o!==(o=t[1].title)&&y(e,"title",o),1&r&&D!==(D=t[1].url)&&m(n,"href",D)},d:function(t){t&&p(n)}}}function L(t){for(var n,r,e,a,s,c,o=t[0],i=[],y=0;y<o.length;y+=1)i[y]=A(b(t,o,y));return{c:function(){n=f(),r=l("div"),e=l("p"),a=u("Links to interesting places that are pinned for your perusal. 😬"),s=f(),c=l("div");for(var t=0;t<i.length;t+=1)i[t].c();this.h()},l:function(t){D('[data-svelte="svelte-6byih4"]',document.head).forEach(p),n=k(t),r=h(t,"DIV",{class:!0});var o=v(r);e=h(o,"P",{});var l=v(e);a=d(l,"Links to interesting places that are pinned for your perusal. 😬"),l.forEach(p),s=k(o),c=h(o,"DIV",{class:!0});for(var u=v(c),f=0;f<i.length;f+=1)i[f].l(u);u.forEach(p),o.forEach(p),this.h()},h:function(){document.title="Links",m(c,"class","links-container svelte-140ok0t"),m(r,"class","content svelte-140ok0t")},m:function(t,o){g(t,n,o),g(t,r,o),x(r,e),x(e,a),x(r,s),x(r,c);for(var l=0;l<i.length;l+=1)i[l].m(c,null)},p:function(t,n){var r=R(n,1)[0];if(1&r){var e;for(o=t[0],e=0;e<o.length;e+=1){var a=b(t,o,e);i[e]?i[e].p(a,r):(i[e]=A(a),i[e].c(),i[e].m(c,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=o.length}},i:w,o:w,d:function(t){t&&p(n),t&&p(r),I(i,t)}}}var V=function(t,n,r,e){return new(r||(r=Promise))((function(a,s){function c(t){try{i(e.next(t))}catch(t){s(t)}}function o(t){try{i(e.throw(t))}catch(t){s(t)}}function i(t){var n;t.done?a(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(c,o)}i((e=e.apply(t,n||[])).next())}))};function P(){return V(this,void 0,void 0,t.mark((function n(){var r,e;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("links.json");case 2:return r=t.sent,t.next=5,r.json();case 5:return e=t.sent,t.abrupt("return",{links:e.data});case 7:case"end":return t.stop()}}),n,this)})))}function O(t,n,r){var e=n.links;return t.$set=function(t){"links"in t&&r(0,e=t.links)},[e]}var q=function(t){n(e,i);var r=j(e);function e(t){var n;return a(this,e),n=r.call(this),s(o(n),t,O,L,c,{links:0}),n}return e}();export default q;export{P as preload};
