// 离线缓存：先用网络拿最新版，没网时用缓存
const CACHE = "savedeadlines-v3";
const FILES = ["./", "index.html", "config.js", "manifest.json", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
const CDN = "https://cdn.jsdelivr.net/npm/@supabase/";
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = e.request.url;
  const ours = new URL(url).origin === location.origin, lib = url.startsWith(CDN);
  if (!ours && !lib) return;            // 同步请求（Supabase）不经过缓存
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || (ours ? caches.match("index.html") : Response.error())))
  );
});
