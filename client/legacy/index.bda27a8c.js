import{_ as t,a as n,b as e,d as r,j as o,s as c,k as i,S as a,l as s,m as u,n as f,o as l,p as h,q as p,r as v,t as g,u as m,P as $,v as d,w as y,x as w,y as b,z as E,A as j,B as R,C as x,D as k,E as D,i as I,F as B,G as S,H as M,I as P,J as V,h as A,K as F,L as T,M as G}from"./client.77ac5c5a.js";import{l as q}from"./luxon.e5156c1b.js";function Y(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function z(t){var n,e,r,o;return{c:function(){n=s("div"),e=s("div"),r=s("div"),o=s("ss-ig-image"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var c=f(n);e=u(c,"DIV",{class:!0});var i=f(e);r=u(i,"DIV",{class:!0});var a=f(r);o=u(a,"SS-IG-IMAGE",{src:!0,message:!0}),f(o).forEach(l),a.forEach(l),i.forEach(l),c.forEach(l),this.h()},h:function(){o.src!=="me.jpg"&&h(o,"src","me.jpg"),h(o,"message","made you click 😂"),p(r,"class","about-photo-container svelte-1v84pey"),p(e,"class","about-container svelte-1v84pey"),p(n,"class","container")},m:function(t,c){v(t,n,c),g(n,e),g(e,r),g(r,o)},p:m,i:m,o:m,d:function(t){t&&l(n)}}}var H=function(n){t(s,a);var e=Y(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,null,z,c,{}),n}return s}();function J(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function L(t,n,e){var r=t.slice();return r[2]=n[e],r}function O(t){var n;return{c:function(){n=k("--highlighted-projects")},l:function(t){n=D(t,"--highlighted-projects")},m:function(t,e){v(t,n,e)},d:function(t){t&&l(n)}}}function C(t){var n,e=t[2].title+"";return{c:function(){n=k(e)},l:function(t){n=D(t,e)},m:function(t,e){v(t,n,e)},p:function(t,r){1&r&&e!==(e=t[2].title+"")&&V(n,e)},d:function(t){t&&l(n)}}}function K(t){var n,e,r;return e=new $({props:{type:"h5",theme:"dark",$$slots:{default:[C]},$$scope:{ctx:t}}}),{c:function(){n=s("div"),d(e.$$.fragment),this.h()},l:function(t){n=u(t,"DIV",{class:!0,slot:!0});var r=f(n);w(e.$$.fragment,r),r.forEach(l),this.h()},h:function(){p(n,"class","title svelte-1we6jwb"),p(n,"slot","title")},m:function(t,o){v(t,n,o),E(e,n,null),r=!0},p:function(t,n){var r={};33&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i:function(t){r||(j(e.$$.fragment,t),r=!0)},o:function(t){R(e.$$.fragment,t),r=!1},d:function(t){t&&l(n),x(e)}}}function N(t){var n,e,r=t[2].description+"";return{c:function(){n=s("div"),e=k(r),this.h()},l:function(t){n=u(t,"DIV",{class:!0,slot:!0});var o=f(n);e=D(o,r),o.forEach(l),this.h()},h:function(){p(n,"class","project-content svelte-1we6jwb"),p(n,"slot","content")},m:function(t,r){v(t,n,r),g(n,e)},p:function(t,n){1&n&&r!==(r=t[2].description+"")&&V(e,r)},d:function(t){t&&l(n)}}}function _(t){var n;return{c:function(){n=y()},l:function(t){n=b(t)},m:function(t,e){v(t,n,e)},p:m,i:m,o:m,d:function(t){t&&l(n)}}}function Q(t){var n,e,r,o,c;return e=new P({props:{theme:t[1],$$slots:{default:[_],content:[N],title:[K]},$$scope:{ctx:t}}}),{c:function(){n=s("a"),d(e.$$.fragment),r=y(),this.h()},l:function(t){n=u(t,"A",{class:!0,href:!0});var o=f(n);w(e.$$.fragment,o),r=b(o),o.forEach(l),this.h()},h:function(){p(n,"class","highlight svelte-1we6jwb"),p(n,"href",o=t[2].url)},m:function(t,o){v(t,n,o),E(e,n,null),g(n,r),c=!0},p:function(t,r){var i={};2&r&&(i.theme=t[1]),33&r&&(i.$$scope={dirty:r,ctx:t}),e.$set(i),(!c||1&r&&o!==(o=t[2].url))&&p(n,"href",o)},i:function(t){c||(j(e.$$.fragment,t),c=!0)},o:function(t){R(e.$$.fragment,t),c=!1},d:function(t){t&&l(n),x(e)}}}function U(t){var n,e,r,o,c,i,a,h;e=new $({props:{theme:"dark",type:"h1",$$slots:{default:[O]},$$scope:{ctx:t}}});for(var m=t[0],P=[],V=0;V<m.length;V+=1)P[V]=Q(L(t,m,V));var A=function(t){return R(P[t],1,1,(function(){P[t]=null}))};return{c:function(){n=s("div"),d(e.$$.fragment),r=y(),o=s("p"),c=k("First, here are a few of the projects that I'm working on. You can find more\n    about them on Github, be sure to give a star if you like it :) I will be\n    pinning some important links and combining the socials section here."),i=y(),a=s("div");for(var t=0;t<P.length;t+=1)P[t].c();this.h()},l:function(t){n=u(t,"DIV",{class:!0});var s=f(n);w(e.$$.fragment,s),r=b(s),o=u(s,"P",{});var h=f(o);c=D(h,"First, here are a few of the projects that I'm working on. You can find more\n    about them on Github, be sure to give a star if you like it :) I will be\n    pinning some important links and combining the socials section here."),h.forEach(l),i=b(s),a=u(s,"DIV",{class:!0});for(var p=f(a),v=0;v<P.length;v+=1)P[v].l(p);p.forEach(l),s.forEach(l),this.h()},h:function(){p(a,"class","cards-container svelte-1we6jwb"),p(n,"class","projects-container ss-content svelte-1we6jwb")},m:function(t,s){v(t,n,s),E(e,n,null),g(n,r),g(n,o),g(o,c),g(n,i),g(n,a);for(var u=0;u<P.length;u+=1)P[u].m(a,null);h=!0},p:function(t,n){var r=I(n,1)[0],o={};if(32&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o),3&r){var c;for(m=t[0],c=0;c<m.length;c+=1){var i=L(t,m,c);P[c]?(P[c].p(i,r),j(P[c],1)):(P[c]=Q(i),P[c].c(),j(P[c],1),P[c].m(a,null))}for(B(),c=m.length;c<P.length;c+=1)A(c);S()}},i:function(t){if(!h){j(e.$$.fragment,t);for(var n=0;n<m.length;n+=1)j(P[n]);h=!0}},o:function(t){R(e.$$.fragment,t),P=P.filter(Boolean);for(var n=0;n<P.length;n+=1)R(P[n]);h=!1},d:function(t){t&&l(n),x(e),M(P,t)}}}function W(t,n,e){var r=n.projects,o=n.theme;return t.$set=function(t){"projects"in t&&e(0,r=t.projects),"theme"in t&&e(1,o=t.theme)},[r,o]}var X=function(n){t(s,a);var e=J(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,W,U,c,{projects:0,theme:1}),n}return s}();function Z(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function tt(t){var n,e,r,o,c;return{c:function(){n=s("div"),e=s("em"),r=k("My journey and experiences will always remain a work in progress... like\n    this website will never be complete. 😂\n    "),o=s("br"),c=k("\n    Je parle un peu le français et apprends tous les jours."),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var i=f(n);e=u(i,"EM",{class:!0});var a=f(e);r=D(a,"My journey and experiences will always remain a work in progress... like\n    this website will never be complete. 😂\n    "),o=u(a,"BR",{}),c=D(a,"\n    Je parle un peu le français et apprends tous les jours."),a.forEach(l),i.forEach(l),this.h()},h:function(){p(e,"class","svelte-pqz2d6"),p(n,"class","content about-line-container svelte-pqz2d6")},m:function(t,i){v(t,n,i),g(n,e),g(e,r),g(e,o),g(e,c)},p:m,i:m,o:m,d:function(t){t&&l(n)}}}var nt=function(n){t(s,a);var e=Z(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,null,tt,c,{}),n}return s}();function et(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function rt(t){var n;return{c:function(){n=k("--whats-new")},l:function(t){n=D(t,"--whats-new")},m:function(t,e){v(t,n,e)},d:function(t){t&&l(n)}}}function ot(t){var n,e,r,o,c,i,a,h,m,B,S,M,P,A,F,T,G,Y,z,H,J=q.fromISO(t[0].createdAt).toFormat("EEEE, MMMM dd yyyy")+"",L=t[0].title+"",O=t[0].description+"";return e=new $({props:{type:"h1",theme:"dark",$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c:function(){n=s("div"),d(e.$$.fragment),r=y(),o=s("p"),c=k("So here's what's up. This section has all the latest things I have got\n    going. From blogs to latest YouTube videos, to pinned links... they're all\n    here.\n    "),i=s("span"),a=k("(or will be here... small note: This section is still being worked on...\n      hehe, sorry, ok, that's all.)"),h=y(),m=s("h6"),B=k("Latest blog post -\n    "),S=k(J),M=y(),P=s("a"),A=s("h3"),F=k(L),T=y(),G=s("p"),Y=k(O),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var s=f(n);w(e.$$.fragment,s),r=b(s),o=u(s,"P",{});var p=f(o);c=D(p,"So here's what's up. This section has all the latest things I have got\n    going. From blogs to latest YouTube videos, to pinned links... they're all\n    here.\n    "),i=u(p,"SPAN",{class:!0});var v=f(i);a=D(v,"(or will be here... small note: This section is still being worked on...\n      hehe, sorry, ok, that's all.)"),v.forEach(l),p.forEach(l),h=b(s),m=u(s,"H6",{});var g=f(m);B=D(g,"Latest blog post -\n    "),S=D(g,J),g.forEach(l),M=b(s),P=u(s,"A",{href:!0,class:!0});var $=f(P);A=u($,"H3",{});var d=f(A);F=D(d,L),d.forEach(l),T=b($),G=u($,"P",{});var y=f(G);Y=D(y,O),y.forEach(l),$.forEach(l),s.forEach(l),this.h()},h:function(){p(i,"class","note"),p(P,"href",z="blog/".concat(t[0].id)),p(P,"class","svelte-gr1me4"),p(n,"class","ss-content")},m:function(t,s){v(t,n,s),E(e,n,null),g(n,r),g(n,o),g(o,c),g(o,i),g(i,a),g(n,h),g(n,m),g(m,B),g(m,S),g(n,M),g(n,P),g(P,A),g(A,F),g(P,T),g(P,G),g(G,Y),H=!0},p:function(t,n){var r=I(n,1)[0],o={};2&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o),(!H||1&r)&&J!==(J=q.fromISO(t[0].createdAt).toFormat("EEEE, MMMM dd yyyy")+"")&&V(S,J),(!H||1&r)&&L!==(L=t[0].title+"")&&V(F,L),(!H||1&r)&&O!==(O=t[0].description+"")&&V(Y,O),(!H||1&r&&z!==(z="blog/".concat(t[0].id)))&&p(P,"href",z)},i:function(t){H||(j(e.$$.fragment,t),H=!0)},o:function(t){R(e.$$.fragment,t),H=!1},d:function(t){t&&l(n),x(e)}}}function ct(t,n,e){var r=n.latestBlog;return t.$set=function(t){"latestBlog"in t&&e(0,r=t.latestBlog)},[r]}var it=function(n){t(s,a);var e=et(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,ct,ot,c,{latestBlog:0}),n}return s}();function at(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function st(t){var n,e,r,o,c,i,a,s,u;return e=new nt({}),o=new H({}),i=new it({props:{latestBlog:t[1]}}),s=new X({props:{projects:t[0],theme:t[2]}}),{c:function(){n=y(),d(e.$$.fragment),r=y(),d(o.$$.fragment),c=y(),d(i.$$.fragment),a=y(),d(s.$$.fragment),this.h()},l:function(t){F('[data-svelte="svelte-9q9vxe"]',document.head).forEach(l),n=b(t),w(e.$$.fragment,t),r=b(t),w(o.$$.fragment,t),c=b(t),w(i.$$.fragment,t),a=b(t),w(s.$$.fragment,t),this.h()},h:function(){document.title="Saurav Sahu"},m:function(t,f){v(t,n,f),E(e,t,f),v(t,r,f),E(o,t,f),v(t,c,f),E(i,t,f),v(t,a,f),E(s,t,f),u=!0},p:function(t,n){var e=I(n,1)[0],r={};2&e&&(r.latestBlog=t[1]),i.$set(r);var o={};1&e&&(o.projects=t[0]),4&e&&(o.theme=t[2]),s.$set(o)},i:function(t){u||(j(e.$$.fragment,t),j(o.$$.fragment,t),j(i.$$.fragment,t),j(s.$$.fragment,t),u=!0)},o:function(t){R(e.$$.fragment,t),R(o.$$.fragment,t),R(i.$$.fragment,t),R(s.$$.fragment,t),u=!1},d:function(t){t&&l(n),x(e,t),t&&l(r),x(o,t),t&&l(c),x(i,t),t&&l(a),x(s,t)}}}var ut=function(t,n,e,r){return new(e||(e=Promise))((function(o,c){function i(t){try{s(r.next(t))}catch(t){c(t)}}function a(t){try{s(r.throw(t))}catch(t){c(t)}}function s(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,a)}s((r=r.apply(t,n||[])).next())}))};function ft(t){t.params;return ut(this,void 0,void 0,A.mark((function t(){var n,e,r,o;return A.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("home.json");case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,r=e.highlights,o=e.latestBlog,t.abrupt("return",{highlights:r,latestBlog:o});case 9:case"end":return t.stop()}}),t,this)})))}function lt(t,n,e){var r;T(t,G,(function(t){return e(2,r=t)}));var o=n.highlights,c=n.latestBlog;return t.$set=function(t){"highlights"in t&&e(0,o=t.highlights),"latestBlog"in t&&e(1,c=t.latestBlog)},[o,c,r]}var ht=function(n){t(s,a);var e=at(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,lt,st,c,{highlights:0,latestBlog:1}),n}return s}();export default ht;export{ft as preload};