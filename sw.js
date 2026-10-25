// Skyfall Arcana moved to https://skyfallarcana.github.io/ — this worker removes the old offline copy.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate("https://skyfallarcana.github.io/")))));
