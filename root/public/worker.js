"use strict";

const version = "v1::";

const cachename = version + "pages";

function getErrorResponse() {
  return new Response("<h1>Service Unavailable</h1>", {
    status: 503,
    statusText: "Service Unavailable",
    headers: new Headers({
      "Content-Type": "text/html",
    }),
  });
}

function cacheFirstResponse(event) {
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      var networked = fetch(event.request)
        .then(fetchedFromNetwork, unableToResolve)
        .catch(unableToResolve);

      return cached || networked;

      function fetchedFromNetwork(response) {
        var cacheCopy = response.clone();

        caches.open(version + "pages").then(function add(cache) {
          console.log("updating " + event.request.url);
          return cache.put(event.request, cacheCopy);
        });

        return response;
      }

      function unableToResolve() {
        return getErrorResponse();
      }
    })
  );
}

function networkFirstResponse(event) {
  event.respondWith(
    caches.match(event.request).then(async function (cached) {
      var networked = await fetch(event.request)
        .then(fetchedFromNetwork, unableToResolve)
        .catch(unableToResolve);

      return networked || cached || getErrorResponse();

      function fetchedFromNetwork(response) {
        var cacheCopy = response.clone();

        caches.open(version + "pages").then(function add(cache) {
          console.log("updating " + event.request.url);
          return cache.put(event.request, cacheCopy);
        });

        return response;
      }

      function unableToResolve() {
        return null;
      }
    })
  );
}

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") {
    return;
  }
  if (event.request.destination === "document") {
    networkFirstResponse(event);
  } else {
    cacheFirstResponse(event);
  }
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return !key.startsWith(version);
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});
