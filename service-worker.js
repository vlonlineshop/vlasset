self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("asset-manager").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "chart.min.js",
        "icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
