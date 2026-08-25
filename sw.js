const CACHE_NAME = "gjm-scan-v2";

// Files that change when the app is updated — always try the network
// first so a reload picks up the latest version automatically.
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
];

// Files that rarely or never change once shipped — safe to serve
// straight from cache for speed and offline use.
const STATIC_ASSETS = [
  "./icons/icon-72.png",
  "./icons/icon-96.png",
  "./icons/icon-128.png",
  "./icons/icon-144.png",
  "./icons/icon-152.png",
  "./icons/icon-192.png",
  "./icons/icon-384.png",
  "./icons/icon-512.png",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png",
  "./icons/logo.png",
  "./fonts/sora-latin-600-normal.woff2",
  "./fonts/sora-latin-700-normal.woff2",
  "./fonts/sora-latin-800-normal.woff2",
  "./fonts/jetbrains-mono-latin-400-normal.woff2",
  "./fonts/jetbrains-mono-latin-500-normal.woff2",
  "./vendor/qrcode.min.js",
  "./vendor/JsBarcode.all.min.js",
  "./vendor/html5-qrcode.min.js",
  "./vendor/jspdf.umd.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll([...APP_SHELL, ...STATIC_ASSETS]))
      .catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

function isAppShellRequest(pathname) {
  return APP_SHELL.some((path) => {
    const clean = path.replace("./", "/");
    return pathname === clean || pathname.endsWith(clean) || (clean === "/" && pathname.endsWith("/"));
  });
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin && isAppShellRequest(url.pathname)) {
    // Network-first: get the latest app code when online, fall back to
    // the last cached copy when offline.
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for vendor libraries, fonts and icons.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);
    })
  );
});
