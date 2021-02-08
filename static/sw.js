const staticCacheName = "site-static-v2";
const dynamicCacheName = "site-dynamic-v1";
const assets = [
  "/"
  // "/_nuxt/pages/index.js",
  // "/_nuxt/app.js",
  // "/_nuxt/commons/app.js",
  // "/_nuxt/runtime.js",
  // "/_nuxt/vendors/app.js"
];

// cache size limits function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install service worker
self.addEventListener("install", evt => {
  // console.log("service worker has been installed");

  self.skipWaiting();

  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log("caching shell asset");
      cache.addAll(assets);
    })
  );
});

// activate service worker
self.addEventListener("activate", evt => {
  // console.log("service worker has been activated");
  evt.waitUntil(
    caches.keys().then(keys => {
      // console.log(keys);
      return Promise.all(
        keys
          .filter(key => key !== staticCacheName && key !== dynamicCacheName)
          .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return (
        cacheRes ||
        fetch(evt.request).then(fetchRes => {
          return fetchRes;
          // return caches.open(dynamicCacheName).then(cache => {
          //   cache.put(evt.request.url, fetchRes.clone());
          //   limitCacheSize(dynamicCacheName, 15);
          //   return fetchRes;
          // });
        })
      );
    })
  );
});
