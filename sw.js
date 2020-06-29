// Service worker version. Should be updated when site changes.
var cacheName = 'hro-20200627191356';
// Files to cache. This is just the "app shell." This script also stores images
// and all other docs in ServiceWorker cache as they are requested
var appShellFiles = [
    '/apple-touch-icon.png',
    '/favicon-32x32.png',
    '/favicon-16x16.png',
    '/site.webmanifest',
    '/safari-pinned-tab.svg',
    '/favicon.ico',
    '/css/normalize.css',
    '/css/main.css',
    '/index.html',
    '/js/main.js',
    '/js/vendor/modernizr-3.7.1.min.js',
    '/js/vendor/jquery-3.4.1.min.js',
    '/js/plugins.js',
    '/fonts/Merriweather/Merriweather-Regular.ttf',
    '/fonts/Merriweather/Merriweather-Bold.ttf',
    '/fonts/Merriweather/Merriweather-Italic.ttf'
];
var contentToCache = appShellFiles;

// Installing Service Worker
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(appShellFiles);
        }).catch((err) => console.log(err))
    );
});

// Clear old, unused caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

// Fetching stuff using Service Worker
self.addEventListener('fetch', function(e) {
    // If is document respond with index.html because this is an SPA anyway
    // If unknown, assume document ¯\_(ツ)_/¯
    if(e.request.destination === 'document' || e.request.destination === 'unknown') {
        e.respondWith(
            caches.match('/index.html').then(function(r) {
                return r || fetch(e.request).then(function(response) {
                    return caches.open(cacheName).then(function(cache) {
                        cache.put(e.request, response.clone());
                        return response;
                    });
                });
            })
        )
    } else {
        e.respondWith(
            caches.match(e.request).then(function(r) {
                return r || fetch(e.request).then(function(response) {
                    return caches.open(cacheName).then(function(cache) {
                        cache.put(e.request, response.clone());
                        return response;
                    });
                });
            })
        )
    }
});