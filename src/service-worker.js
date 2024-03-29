try {
    const PRECACHE = "precache-v2";
    const RUNTIME = "runtime";

    // A list of local resources we always want to be cached.
    const PRECACHE_URLS = [
        `any url`, // Alias for index.html
    ];

    // The install handler takes care of precaching the resources we always need.
    self.addEventListener("install", (event) => {
        console.log("installing sw");

        event.waitUntil(
            caches
                .open(PRECACHE)
                .then((cache) => cache.addAll(PRECACHE_URLS))
                .then(self.skipWaiting())
        );
    });
    // The activate handler takes care of cleaning up old caches.
    self.addEventListener("activate", (event) => {
        const currentCaches = [PRECACHE, RUNTIME];
        console.log("activate cache");
        event.waitUntil(
            caches
                .keys()
                .then((cacheNames) => {
                    return cacheNames.filter(
                        (cacheName) => !currentCaches.includes(cacheName)
                    );
                })
                .then((cachesToDelete) => {
                    console.log("cache is deleting");
                    return Promise.all(
                        cachesToDelete.map((cacheToDelete) => {
                            return caches.delete(cacheToDelete);
                        })
                    );
                })
                .then(() => self.clients.claim())
        );
    });

    self.addEventListener("fetch", (event) => {
        // Skip cross-origin requests, like those for Google Analytics.
        if (event.request.url.startsWith(self.location.origin)) {
            event.respondWith(
                caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    return caches.open(RUNTIME).then((cache) => {
                        return fetch(event.request, {}).then((response) => {
                            // Put a copy of the response in the runtime cache.
                            return cache
                                .put(event.request, response.clone())
                                .then(() => {
                                    return response;
                                });
                        });
                    });
                })
            );
        }
    });
} catch (e) {
    console.log(e);
}
