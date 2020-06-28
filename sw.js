// Files to cache
var cacheName = 'hro-20200627191356';
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
    '/fonts/Merriweather/Merriweather-Italic.ttf',
    '/images/agony.jpg',
    '/images/annunciation.jpg',
    '/images/ascension.jpg',
    '/images/assumption.jpg',
    '/images/baptism.jpg',
    '/images/cana.jpg',
    '/images/coronation.jpg',
    '/images/cross.jpg',
    '/images/crucifixion.jpg',
    '/images/default.jpg',
    '/images/descent.jpg',
    '/images/eucharist.jpg',
    '/images/finding.jpg',
    '/images/nativity.jpg',
    '/images/presentation.jpg',
    '/images/proclamation.jpg',
    '/images/resurrection.jpg',
    '/images/scourging.jpg',
    '/images/thorns.jpg',
    '/images/transfiguration.jpg',
    '/images/visitation.jpg'
];
var contentToCache = appShellFiles;

// Installing Service Worker
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(appShellFiles);
        })
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