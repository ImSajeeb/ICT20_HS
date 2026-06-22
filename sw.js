const CACHE_NAME = 'ict20-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './bus.html',
  './calendar.html',
  './target.html',
  './icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('docs.google.com')) return; 
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
