!function(){"use strict";const t=["client/client.6596af98.js","client/prism-okaidia.c69ad818.js","client/index.a7ee1af4.js","client/bundle.fe7599fe.js","client/index.95664952.js","client/luxon.3710761b.js","client/index.3b4de033.js","client/about.2f1c87c1.js","client/index.59802a68.js","client/index.fe4fe589.js","client/index.765e06a8.js","client/index.58c93768.js","client/insta-coding.95047ded.js","client/insta.22858238.js","client/client.7acb4561.js"].concat(["service-worker-index.html","data/_layout.json","data/blog-posts/2020-05-21-first.md","data/blog-posts/2020-07-11-monorepo-ci.md","data/blog-posts/2020-07-12-adonis-v5-provider.md","data/blogs.json","data/socials.json","global.css","manifest.json","me-192.png","me-512.png","me.jpg","store/1-stuff-from-the-past/content.md","store/10-have-been-busy/content.md","store/11-recommended-channels/content.md","store/12-been-busy/content.md","store/13-first-year-complete-almost/content.md","store/14-moving/content.md","store/15-catching-up/content.md","store/16-getting-reference-to-the-accent-color/content.md","store/17-the-timer-class/content.md","store/18-things-x2-f-x2-f-to-do-right-after-you-install-a-linux-distro/content.md","store/19-where-have-i-been/content.md","store/2-leaving-a-customer-tailored-operating-system/content.md","store/20-my-interview-experience/content.md","store/21-so-how-did-i-do/content.md","store/22-four-unexplainable-years/content.md","store/23-friends/content.md","store/24-understanding-your-dreams/content.md","store/25-my-love-hate-relationship/content.md","store/26-failure/content.md","store/27-that-mini-heart-attack/content.md","store/28-the-game-of-life/content.md","store/29-the-need-for-i-ms/content.md","store/3-starting-to-like-ubuntu/content.md","store/30-the-post-that-cannot-be-posted/content.md","store/31-how-we-express-ourselves/content.md","store/32-maintaining-a-triphasic-sleep-cycle/content.md","store/33-should-i-move-on/content.md","store/34-301/content.md","store/35-first/content.md","store/36-ci-for-monorepos/content.md","store/37-adonis-v5-writing-your-first-custom-provider/content.md","store/38-adding-type-script-to-sapper-projects/content.md","store/39-hello-comments/content.md","store/4-the-real-me/content.md","store/40-custom-vscode-profiles/content.md","store/41-cert-az900/content.md","store/42-french-300-days/content.md","store/43-host-on-custom-domain/content.md","store/44-documenting-dotenv-files-for-nodejs-projects/content.md","store/45-referential-data-validations-with-yupjs/content.md","store/46-downsizing-docker-images/content.md","store/47-learnings-from-my-first-vscode-extension/content.md","store/48-my-personal-computing-setup/content.md","store/49-software-versioning-an-intro-with-gitversion/content.md","store/49-software-versioning-an-intro-with-gitversion/images/gitversion-in-github-actions.png","store/49-software-versioning-an-intro-with-gitversion/images/semver-summary.jpeg","store/5-solving-a-few-issues/content.md","store/50-cicd-vscode-extension/content.md","store/6-a-nice-adventure/content.md","store/7-update-x27-a-nice-adventure-x27/content.md","store/8-networking/content.md","store/9-what-to-do/content.md","store/Blog.csv","store/Link.csv"]),e=new Set(t);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1633255603915").then(e=>e.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const e of t)"cache1633255603915"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&e.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline1633255603915").then(async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const o=await e.match(t.request);if(o)return o;throw n}}))))})}();
