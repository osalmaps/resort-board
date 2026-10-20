// Minimal service worker: makes the board installable as an app.
// It does NOT cache anything - every request goes straight to the network,
// so the board always shows live Firebase data and new uploads take effect at once.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request));
});
