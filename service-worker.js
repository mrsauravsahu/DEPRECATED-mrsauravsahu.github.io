!function(){"use strict";const e=["client/client.796fecfc.js","client/prism-okaidia.c69ad818.js","client/index.a7ee1af4.js","client/bundle.fe7599fe.js","client/index.7fe4e417.js","client/luxon.3710761b.js","client/index.90d923e9.js","client/about.3c4d16e7.js","client/index.694050a4.js","client/index.39ee8125.js","client/index.746ce6df.js","client/client.1f27918f.js"].concat(["service-worker-index.html","data/_layout.json","data/blog-posts/2020-05-21-first.md","data/blog-posts/2020-07-11-monorepo-ci.md","data/blog-posts/2020-07-12-adonis-v5-provider.md","data/blogs.json","data/socials.json","global.css","manifest.json","me-192.png","me-512.png","me.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1603558374142").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1603558374142"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1603558374142").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
