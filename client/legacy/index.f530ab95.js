import{_ as t,a as n,b as e,d as r,j as o,s as c,k as i,S as s,l as a,m as u,n as f,o as l,p as h,q as p,r as v,t as g,u as m,P as $,v as d,w as y,x as w,y as b,z as k,A as E,B as R,C as x,D as j,E as D,i as I,F as S,G as B,H as M,I as P,J as q,h as V,K as A,L as F,M as T}from"./client.e3178e29.js";import{l as G}from"./luxon.8ec79603.js";function Y(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function z(t){var n,e,r,o;return{c:function(){n=a("div"),e=a("div"),r=a("div"),o=a("ss-ig-image"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var c=f(n);e=u(c,"DIV",{class:!0});var i=f(e);r=u(i,"DIV",{class:!0});var s=f(r);o=u(s,"SS-IG-IMAGE",{src:!0,message:!0}),f(o).forEach(l),s.forEach(l),i.forEach(l),c.forEach(l),this.h()},h:function(){o.src!=="me.jpg"&&h(o,"src","me.jpg"),h(o,"message","made you click 😂"),p(r,"class","about-photo-container svelte-1v84pey"),p(e,"class","about-container svelte-1v84pey"),p(n,"class","container")},m:function(t,c){v(t,n,c),g(n,e),g(e,r),g(r,o)},p:m,i:m,o:m,d:function(t){t&&l(n)}}}var J=function(n){t(a,s);var e=Y(a);function a(t){var n;return r(this,a),n=e.call(this),o(i(n),t,null,z,c,{}),n}return a}();function L(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function H(t,n,e){var r=t.slice();return r[2]=n[e],r}function N(t){var n;return{c:function(){n=j("--highlighted-projects")},l:function(t){n=D(t,"--highlighted-projects")},m:function(t,e){v(t,n,e)},d:function(t){t&&l(n)}}}function O(t){var n,e=t[2].title+"";return{c:function(){n=j(e)},l:function(t){n=D(t,e)},m:function(t,e){v(t,n,e)},p:function(t,r){1&r&&e!==(e=t[2].title+"")&&q(n,e)},d:function(t){t&&l(n)}}}function C(t){var n,e,r;return e=new $({props:{type:"h2",theme:"dark",$$slots:{default:[O]},$$scope:{ctx:t}}}),{c:function(){n=a("div"),d(e.$$.fragment),this.h()},l:function(t){n=u(t,"DIV",{class:!0,slot:!0});var r=f(n);w(e.$$.fragment,r),r.forEach(l),this.h()},h:function(){p(n,"class","title svelte-qke5r1"),p(n,"slot","title")},m:function(t,o){v(t,n,o),k(e,n,null),r=!0},p:function(t,n){var r={};33&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i:function(t){r||(E(e.$$.fragment,t),r=!0)},o:function(t){R(e.$$.fragment,t),r=!1},d:function(t){t&&l(n),x(e)}}}function K(t){var n,e,r=t[2].description+"";return{c:function(){n=a("div"),e=j(r),this.h()},l:function(t){n=u(t,"DIV",{class:!0,slot:!0});var o=f(n);e=D(o,r),o.forEach(l),this.h()},h:function(){p(n,"class","project-content svelte-qke5r1"),p(n,"slot","content")},m:function(t,r){v(t,n,r),g(n,e)},p:function(t,n){1&n&&r!==(r=t[2].description+"")&&q(e,r)},d:function(t){t&&l(n)}}}function _(t){var n;return{c:function(){n=y()},l:function(t){n=b(t)},m:function(t,e){v(t,n,e)},p:m,i:m,o:m,d:function(t){t&&l(n)}}}function Q(t){var n,e,r,o,c;return e=new P({props:{theme:t[1],$$slots:{default:[_],content:[K],title:[C]},$$scope:{ctx:t}}}),{c:function(){n=a("a"),d(e.$$.fragment),r=y(),this.h()},l:function(t){n=u(t,"A",{class:!0,href:!0});var o=f(n);w(e.$$.fragment,o),r=b(o),o.forEach(l),this.h()},h:function(){p(n,"class","highlight svelte-qke5r1"),p(n,"href",o=t[2].url)},m:function(t,o){v(t,n,o),k(e,n,null),g(n,r),c=!0},p:function(t,r){var i={};2&r&&(i.theme=t[1]),33&r&&(i.$$scope={dirty:r,ctx:t}),e.$set(i),(!c||1&r&&o!==(o=t[2].url))&&p(n,"href",o)},i:function(t){c||(E(e.$$.fragment,t),c=!0)},o:function(t){R(e.$$.fragment,t),c=!1},d:function(t){t&&l(n),x(e)}}}function U(t){var n,e,r,o,c,i,s,h;e=new $({props:{theme:"dark",type:"h1",$$slots:{default:[N]},$$scope:{ctx:t}}});for(var m=t[0],P=[],q=0;q<m.length;q+=1)P[q]=Q(H(t,m,q));var V=function(t){return R(P[t],1,1,(function(){P[t]=null}))};return{c:function(){n=a("div"),d(e.$$.fragment),r=y(),o=a("p"),c=j("First, here are a few of the projects that I'm working on. You can find more\n    about them on Github, be sure to give a star if you like it :) I will be\n    pinning some important links and combining the socials section here."),i=y(),s=a("div");for(var t=0;t<P.length;t+=1)P[t].c();this.h()},l:function(t){n=u(t,"DIV",{class:!0});var a=f(n);w(e.$$.fragment,a),r=b(a),o=u(a,"P",{});var h=f(o);c=D(h,"First, here are a few of the projects that I'm working on. You can find more\n    about them on Github, be sure to give a star if you like it :) I will be\n    pinning some important links and combining the socials section here."),h.forEach(l),i=b(a),s=u(a,"DIV",{class:!0});for(var p=f(s),v=0;v<P.length;v+=1)P[v].l(p);p.forEach(l),a.forEach(l),this.h()},h:function(){p(s,"class","cards-container svelte-qke5r1"),p(n,"class","projects-container ss-content svelte-qke5r1")},m:function(t,a){v(t,n,a),k(e,n,null),g(n,r),g(n,o),g(o,c),g(n,i),g(n,s);for(var u=0;u<P.length;u+=1)P[u].m(s,null);h=!0},p:function(t,n){var r=I(n,1)[0],o={};if(32&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o),3&r){var c;for(m=t[0],c=0;c<m.length;c+=1){var i=H(t,m,c);P[c]?(P[c].p(i,r),E(P[c],1)):(P[c]=Q(i),P[c].c(),E(P[c],1),P[c].m(s,null))}for(S(),c=m.length;c<P.length;c+=1)V(c);B()}},i:function(t){if(!h){E(e.$$.fragment,t);for(var n=0;n<m.length;n+=1)E(P[n]);h=!0}},o:function(t){R(e.$$.fragment,t),P=P.filter(Boolean);for(var n=0;n<P.length;n+=1)R(P[n]);h=!1},d:function(t){t&&l(n),x(e),M(P,t)}}}function W(t,n,e){var r=n.projects,o=n.theme;return t.$set=function(t){"projects"in t&&e(0,r=t.projects),"theme"in t&&e(1,o=t.theme)},[r,o]}var X=function(n){t(a,s);var e=L(a);function a(t){var n;return r(this,a),n=e.call(this),o(i(n),t,W,U,c,{projects:0,theme:1}),n}return a}();function Z(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function tt(t){var n,e,r,o,c;return{c:function(){n=a("div"),e=a("em"),r=j("My journey and experiences will always remain a work in progress... like\n    this website will never be complete. 😂\n    "),o=a("br"),c=j("\n    Je parle un peu le français et apprends tous les jours."),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var i=f(n);e=u(i,"EM",{class:!0});var s=f(e);r=D(s,"My journey and experiences will always remain a work in progress... like\n    this website will never be complete. 😂\n    "),o=u(s,"BR",{}),c=D(s,"\n    Je parle un peu le français et apprends tous les jours."),s.forEach(l),i.forEach(l),this.h()},h:function(){p(e,"class","svelte-pqz2d6"),p(n,"class","content about-line-container svelte-pqz2d6")},m:function(t,i){v(t,n,i),g(n,e),g(e,r),g(e,o),g(e,c)},p:m,i:m,o:m,d:function(t){t&&l(n)}}}var nt=function(n){t(a,s);var e=Z(a);function a(t){var n;return r(this,a),n=e.call(this),o(i(n),t,null,tt,c,{}),n}return a}();function et(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function rt(t){var n;return{c:function(){n=j("--whats-new")},l:function(t){n=D(t,"--whats-new")},m:function(t,e){v(t,n,e)},d:function(t){t&&l(n)}}}function ot(t){var n,e,r,o,c,i,s,h,m,S,B,M,P,V,A,F,T,Y,z,J,L=G.fromISO(t[0].createdAt).toFormat("EEEE, MMMM dd yyyy")+"",H=t[0].title+"",N=t[0].description+"";return e=new $({props:{type:"h1",theme:"dark",$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c:function(){n=a("div"),d(e.$$.fragment),r=y(),o=a("p"),c=j("So here's what's up. This section has all the latest things I have got\n    going. From blogs to latest YouTube videos, to pinned links... they're all\n    here.\n    "),i=a("span"),s=j("(or will be here... small note: This section is still being worked on...\n      hehe, sorry, ok, that's all.)"),h=y(),m=a("span"),S=j("Latest blog post -\n    "),B=j(L),M=y(),P=a("a"),V=a("h2"),A=j(H),F=y(),T=a("p"),Y=j(N),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var a=f(n);w(e.$$.fragment,a),r=b(a),o=u(a,"P",{});var p=f(o);c=D(p,"So here's what's up. This section has all the latest things I have got\n    going. From blogs to latest YouTube videos, to pinned links... they're all\n    here.\n    "),i=u(p,"SPAN",{class:!0});var v=f(i);s=D(v,"(or will be here... small note: This section is still being worked on...\n      hehe, sorry, ok, that's all.)"),v.forEach(l),p.forEach(l),h=b(a),m=u(a,"SPAN",{class:!0});var g=f(m);S=D(g,"Latest blog post -\n    "),B=D(g,L),g.forEach(l),M=b(a),P=u(a,"A",{href:!0,class:!0});var $=f(P);V=u($,"H2",{});var d=f(V);A=D(d,H),d.forEach(l),F=b($),T=u($,"P",{});var y=f(T);Y=D(y,N),y.forEach(l),$.forEach(l),a.forEach(l),this.h()},h:function(){p(i,"class","note"),p(m,"class","latest-blog-header svelte-kb5gkb"),p(P,"href",z="posts/".concat(t[0].id)),p(P,"class","svelte-kb5gkb"),p(n,"class","ss-content")},m:function(t,a){v(t,n,a),k(e,n,null),g(n,r),g(n,o),g(o,c),g(o,i),g(i,s),g(n,h),g(n,m),g(m,S),g(m,B),g(n,M),g(n,P),g(P,V),g(V,A),g(P,F),g(P,T),g(T,Y),J=!0},p:function(t,n){var r=I(n,1)[0],o={};2&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o),(!J||1&r)&&L!==(L=G.fromISO(t[0].createdAt).toFormat("EEEE, MMMM dd yyyy")+"")&&q(B,L),(!J||1&r)&&H!==(H=t[0].title+"")&&q(A,H),(!J||1&r)&&N!==(N=t[0].description+"")&&q(Y,N),(!J||1&r&&z!==(z="posts/".concat(t[0].id)))&&p(P,"href",z)},i:function(t){J||(E(e.$$.fragment,t),J=!0)},o:function(t){R(e.$$.fragment,t),J=!1},d:function(t){t&&l(n),x(e)}}}function ct(t,n,e){var r=n.latestBlog;return t.$set=function(t){"latestBlog"in t&&e(0,r=t.latestBlog)},[r]}var it=function(n){t(a,s);var e=et(a);function a(t){var n;return r(this,a),n=e.call(this),o(i(n),t,ct,ot,c,{latestBlog:0}),n}return a}();function st(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function at(t){var n,e,r,o,c,i,s,a,u;return e=new nt({}),o=new J({}),i=new it({props:{latestBlog:t[1]}}),a=new X({props:{projects:t[0],theme:t[2]}}),{c:function(){n=y(),d(e.$$.fragment),r=y(),d(o.$$.fragment),c=y(),d(i.$$.fragment),s=y(),d(a.$$.fragment),this.h()},l:function(t){A('[data-svelte="svelte-9q9vxe"]',document.head).forEach(l),n=b(t),w(e.$$.fragment,t),r=b(t),w(o.$$.fragment,t),c=b(t),w(i.$$.fragment,t),s=b(t),w(a.$$.fragment,t),this.h()},h:function(){document.title="Saurav Sahu"},m:function(t,f){v(t,n,f),k(e,t,f),v(t,r,f),k(o,t,f),v(t,c,f),k(i,t,f),v(t,s,f),k(a,t,f),u=!0},p:function(t,n){var e=I(n,1)[0],r={};2&e&&(r.latestBlog=t[1]),i.$set(r);var o={};1&e&&(o.projects=t[0]),4&e&&(o.theme=t[2]),a.$set(o)},i:function(t){u||(E(e.$$.fragment,t),E(o.$$.fragment,t),E(i.$$.fragment,t),E(a.$$.fragment,t),u=!0)},o:function(t){R(e.$$.fragment,t),R(o.$$.fragment,t),R(i.$$.fragment,t),R(a.$$.fragment,t),u=!1},d:function(t){t&&l(n),x(e,t),t&&l(r),x(o,t),t&&l(c),x(i,t),t&&l(s),x(a,t)}}}var ut=function(t,n,e,r){return new(e||(e=Promise))((function(o,c){function i(t){try{a(r.next(t))}catch(t){c(t)}}function s(t){try{a(r.throw(t))}catch(t){c(t)}}function a(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,s)}a((r=r.apply(t,n||[])).next())}))};function ft(t){t.params;return ut(this,void 0,void 0,V.mark((function t(){var n,e,r,o;return V.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("home.json");case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,r=e.highlights,o=e.latestBlog,t.abrupt("return",{highlights:r,latestBlog:o});case 9:case"end":return t.stop()}}),t,this)})))}function lt(t,n,e){var r;F(t,T,(function(t){return e(2,r=t)}));var o=n.highlights,c=n.latestBlog;return t.$set=function(t){"highlights"in t&&e(0,o=t.highlights),"latestBlog"in t&&e(1,c=t.latestBlog)},[o,c,r]}var ht=function(n){t(a,s);var e=st(a);function a(t){var n;return r(this,a),n=e.call(this),o(i(n),t,lt,at,c,{highlights:0,latestBlog:1}),n}return a}();export default ht;export{ft as preload};