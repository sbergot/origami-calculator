"use strict";

const VERSION = "v1::";
const CACHE_NAME = VERSION + "pages";
const CACHE_FILES = [
  "/",
  "/baggi/",
  "/corolle/",
  "/hexagonale/",
  "/kata/",
  "/masu/",
  "/moda-masu/",
  "/v-pouch/",
];

function getErrorResponse() {
  return new Response("<h1>Service Unavailable</h1>", {
    status: 503,
    statusText: "Service Unavailable",
    headers: new Headers({
      "Content-Type": "text/html",
    }),
  });
}

// fetch the resource from the network
const fromNetwork = (request, timeout) =>
  new Promise((fulfill, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request).then((response) => {
      clearTimeout(timeoutId);
      console.log("from network: " + request.url)
      fulfill(response);
      updateCache(request, response);
    }, reject);
  });

// fetch the resource from the browser cache
const fromCache = (request) =>
  caches
    .open(CACHE_NAME)
    .then((cache) =>
      cache
        .match(request)
        .then((matching) => matching || getErrorResponse())
    );

// cache the current page to make it available for offline
const updateCache = (request, response) =>
  caches.open(CACHE_NAME).then((cache) => cache.put(request, response));

// general strategy when making a request (eg if online try to fetch it
// from the network with a timeout, if something fails serve from cache)
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    fromNetwork(evt.request, 3000).catch(() => fromCache(evt.request))
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return !key.startsWith(VERSION);
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});

self.addEventListener("install", (evt) =>
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  )
);
