import{g as t,h as r,_ as n,a as e,b as s,d as a,j as o,s as c,k as l,S as i,l as u,t as h,m as f,n as v,o as p,p as d,q as g,r as m,v as b,u as w,w as y,x as E,J as D,D as x,i as R,y as S,K as I}from"./client.5830bbf4.js";function j(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=e(t);if(r){var o=e(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return s(this,n)}}function C(t,r,n){var e=t.slice();return e[1]=r[n],e}function A(t){var r,n,e,s,a,o,c,l=t[1].description+"";return{c:function(){r=u("li"),n=u("a"),e=u("ss-card"),s=h(l),c=f(),this.h()},l:function(t){r=v(t,"LI",{class:!0});var a=p(r);n=v(a,"A",{rel:!0,href:!0,class:!0});var o=p(n);e=v(o,"SS-CARD",{title:!0});var i=p(e);s=d(i,l),i.forEach(g),o.forEach(g),c=m(a),a.forEach(g),this.h()},h:function(){b(e,"title",a=t[1].title),w(n,"rel","prefetch"),w(n,"href",o="blog/"+t[1].id),w(n,"class","svelte-cr9nc3"),w(r,"class","svelte-cr9nc3")},m:function(t,a){y(t,r,a),E(r,n),E(n,e),E(e,s),E(r,c)},p:function(t,r){1&r&&l!==(l=t[1].description+"")&&D(s,l),1&r&&a!==(a=t[1].title)&&b(e,"title",a),1&r&&o!==(o="blog/"+t[1].id)&&w(n,"href",o)},d:function(t){t&&g(r)}}}function H(t){for(var r,n,e,s,a,o,c,l,i,D,j,H,P=t[0],k=[],L=0;L<P.length;L+=1)k[L]=A(C(t,P,L));return{c:function(){r=f(),n=u("div"),e=u("div"),s=u("p"),a=h("Here are a few thoughts that I thought should be written down... Don't\n      worry, the old blogs will get imported here."),o=f(),c=u("p"),l=h("Currently at:\n      "),i=u("ss-anchor"),D=h("mrsauravsahu.wordpress.com"),j=f(),H=u("ul");for(var t=0;t<k.length;t+=1)k[t].c();this.h()},l:function(t){x('[data-svelte="svelte-10h7psl"]',document.head).forEach(g),r=m(t),n=v(t,"DIV",{class:!0});var u=p(n);e=v(u,"DIV",{class:!0});var h=p(e);s=v(h,"P",{});var f=p(s);a=d(f,"Here are a few thoughts that I thought should be written down... Don't\n      worry, the old blogs will get imported here."),f.forEach(g),o=m(h),c=v(h,"P",{});var b=p(c);l=d(b,"Currently at:\n      "),i=v(b,"SS-ANCHOR",{href:!0});var w=p(i);D=d(w,"mrsauravsahu.wordpress.com"),w.forEach(g),b.forEach(g),j=m(h),H=v(h,"UL",{class:!0});for(var y=p(H),E=0;E<k.length;E+=1)k[E].l(y);y.forEach(g),h.forEach(g),u.forEach(g),this.h()},h:function(){document.title="Blog",b(i,"href","https://mrsauravsahu.wordpress.com"),w(H,"class","posts-container svelte-cr9nc3"),w(e,"class","content"),w(n,"class","container")},m:function(t,u){y(t,r,u),y(t,n,u),E(n,e),E(e,s),E(s,a),E(e,o),E(e,c),E(c,l),E(c,i),E(i,D),E(e,j),E(e,H);for(var h=0;h<k.length;h+=1)k[h].m(H,null)},p:function(t,r){var n=R(r,1)[0];if(1&n){var e;for(P=t[0],e=0;e<P.length;e+=1){var s=C(t,P,e);k[e]?k[e].p(s,n):(k[e]=A(s),k[e].c(),k[e].m(H,null))}for(;e<k.length;e+=1)k[e].d(1);k.length=P.length}},i:S,o:S,d:function(t){t&&g(r),t&&g(n),I(k,t)}}}function P(){return k.apply(this,arguments)}function k(){return(k=t(r.mark((function t(){var n,e;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("blog.json");case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",{blogs:e});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function L(t,r,n){var e=r.blogs;return t.$set=function(t){"blogs"in t&&n(0,e=t.blogs)},[e]}var V=function(t){n(e,i);var r=j(e);function e(t){var n;return a(this,e),n=r.call(this),o(l(n),t,L,H,c,{blogs:0}),n}return e}();export default V;export{P as preload};
