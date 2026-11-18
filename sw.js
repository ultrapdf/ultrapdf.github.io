/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-afac4cd2'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "pwa-maskable-512x512.png",
    "revision": "49fcfaf8343d9ba6d3916ffc27e08c54"
  }, {
    "url": "pwa-512x512.png",
    "revision": "a8ddb0cb1c9df0ecf256a1928c7eed28"
  }, {
    "url": "pwa-192x192.png",
    "revision": "f6ec66df77b0c7bbf4c5f9400cca13c1"
  }, {
    "url": "og-cover.jpg",
    "revision": "9625304b93d59c225adceb4fe51acf4e"
  }, {
    "url": "index.html",
    "revision": "21a97054bbf688531f2313617edb6ae1"
  }, {
    "url": "icon.svg",
    "revision": "83a7ac89b76fcb47a508199facaa721f"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "26eb7e9522660491d76cb84c631dae47"
  }, {
    "url": "assets/workbox-window.prod.es5-Bd17z0YL.js",
    "revision": null
  }, {
    "url": "assets/vendor-ui-BSd4216s.js",
    "revision": null
  }, {
    "url": "assets/vendor-pdf-Dm120zMa.js",
    "revision": null
  }, {
    "url": "assets/rolldown-runtime-pP25SEvz.js",
    "revision": null
  }, {
    "url": "assets/pdf.worker.min-CIqJB0yW.mjs",
    "revision": null
  }, {
    "url": "assets/index-DNYbwHJR.css",
    "revision": null
  }, {
    "url": "assets/index-CQ8SVJb2.js",
    "revision": null
  }, {
    "url": ".nojekyll",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "26eb7e9522660491d76cb84c631dae47"
  }, {
    "url": "humans.txt",
    "revision": "fc2e9bd9a12d3b735bd615c5ec91806c"
  }, {
    "url": "icon.svg",
    "revision": "83a7ac89b76fcb47a508199facaa721f"
  }, {
    "url": "og-cover.jpg",
    "revision": "9625304b93d59c225adceb4fe51acf4e"
  }, {
    "url": "pwa-192x192.png",
    "revision": "f6ec66df77b0c7bbf4c5f9400cca13c1"
  }, {
    "url": "pwa-512x512.png",
    "revision": "a8ddb0cb1c9df0ecf256a1928c7eed28"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "49fcfaf8343d9ba6d3916ffc27e08c54"
  }, {
    "url": "robots.txt",
    "revision": "64bbef0dd71eabe9d5e7cbff609926ae"
  }, {
    "url": "sitemap.xml",
    "revision": "ff6fca47737efce2114eccb0aa0059ba"
  }, {
    "url": "manifest.webmanifest",
    "revision": "8568b0e58d4230b778093cd50dd07698"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    denylist: [/\.zip$/, /robots\.txt$/, /sitemap\.xml$/, /humans\.txt$/]
  }));
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "gstatic-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
