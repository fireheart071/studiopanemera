/* Service Worker: media cache
   - Runtime cache-first strategy for images and videos (Cloudinary + same-origin)
   - Keeps cache size bounded via trimCache
   - Supports messages: {type: 'CLEAR_MEDIA_CACHE'} and {type: 'SKIP_WAITING'}
*/

const CACHE_NAME = 'media-cache-v1';
const MAX_ENTRIES = 80; // max number of media items to keep

function isMediaRequest(request) {
  try {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();

    // Cloudinary domain check (common pattern)
    if (url.hostname.includes('cloudinary.com') || url.hostname.includes('res.cloudinary.com')) {
      return true;
    }

    // common media extensions
    return (pathname.match(/\.(png|jpg|jpeg|gif|webp|avif|mp4|webm|ogg|mov)$/));
  } catch {
    return false;
  }
}

async function trimCache(cache, maxEntries) {
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  const removeCount = keys.length - maxEntries;
  for (let i = 0; i < removeCount; i++) {
    await cache.delete(keys[i]);
  }
}

self.addEventListener('install', () => {
  // Activate immediately after install
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Claim clients so the SW starts controlling pages immediately
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  if (!isMediaRequest(req)) return; // only handle media

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    if (cached) return cached;

    try {
      const response = await fetch(req);
      // Only cache successful responses
      if (response && response.status === 200 && response.type !== 'opaque') {
        cache.put(req, response.clone());
        // Trim cache to keep size bounded
        trimCache(cache, MAX_ENTRIES).catch(() => {});
      } else if (response && response.status === 200 && response.type === 'opaque') {
        // Opaque responses (e.g. cross-origin without CORS) can still be cached
        cache.put(req, response.clone());
        trimCache(cache, MAX_ENTRIES).catch(() => {});
      }
      return response;
    } catch {
      // network failed; fall back to cached if any
      if (cached) return cached;
      return new Response('Network error', { status: 504 });
    }
  })());
});

self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data && data.type === 'CLEAR_MEDIA_CACHE') {
    caches.delete(CACHE_NAME);
  }
  if (data && data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// End of sw.js
