!function(){"use strict";const e=["client/client.81f0464f.js","client/prism-okaidia.c69ad818.js","client/index.a7ee1af4.js","client/bundle.fe7599fe.js","client/index.4e68a79d.js","client/about.5c813a91.js","client/index.791e71bc.js","client/index.0df801bd.js","client/client.8dc5cf13.js"].concat(["service-worker-index.html","data/_layout.json","data/blog-posts/2020-05-21-first.md","data/blog-posts/2020-07-11-monorepo-ci.md","data/blog-posts/2020-07-12-adonis-v5-provider.md","data/blogs.json","global.css","manifest.json","me-192.png","me-512.png","me.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1599574770259").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1599574770259"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1599574770259").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
