'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cb2df0b96ea244d54f51160fdb11019a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/1/1.jpg": "21ba72d4eacf3db965095500da2db83b",
"assets/images/1/10.jpg": "676b1e140d5ba171ec26371c4546a836",
"assets/images/1/2.jpg": "40112d26040d4fb7df50590105b87331",
"assets/images/1/3.jpg": "43e5fed34956ec1b3192caaf849fac92",
"assets/images/1/4.jpg": "ad68c1876192c99fe1c034b1ceeb51d6",
"assets/images/1/5.jpg": "99f7f8a9013d87dd996d3a2d31e49faf",
"assets/images/1/6.jpg": "5524b848365fd90719f0cbb2008b0c30",
"assets/images/1/7.jpg": "84d0de0537dc4cf4a40f70d59bc02435",
"assets/images/1/8.jpg": "adb8903eb575f90d703ab476773c0134",
"assets/images/1/9.jpg": "a5c8004cd5106158f11b518eb5863a1d",
"assets/images/2/1.jpg": "90a1a0bcc7129e18801b344b5d943a7a",
"assets/images/2/10.jpg": "9aa4b7c112f138177e6a8f274c8948d3",
"assets/images/2/2.jpg": "b73d9bfb11c03cc76709e1fcddd2de02",
"assets/images/2/3.jpg": "d510fa14804f20796375112ae4d04cdf",
"assets/images/2/4.jpg": "cb0a28d7759fb9b316df1d816a3ae9e3",
"assets/images/2/5.jpg": "bb61a739a2f36483db53b4e26006c503",
"assets/images/2/6.jpg": "97ace6f73e193117a158f608f1f4ea82",
"assets/images/2/7.jpg": "499d824d0711fbdd69b00b0a1752bb2a",
"assets/images/2/8.jpg": "7755582dc4e24d4f78e70025e496ae02",
"assets/images/2/9.jpg": "f4b673121ed9a03d44c62298449a7535",
"assets/images/3/1.jpg": "7480c2b8776490650e09c7fc1ecf1b9e",
"assets/images/3/10.jpg": "8c279eb1fde1e81d214ba0ba052341b7",
"assets/images/3/2.jpg": "6d9e936f83f9f298216ecb0f79db4169",
"assets/images/3/3.jpg": "09bacf4091816a83af209185baacf83c",
"assets/images/3/4.jpg": "7d5247b7f8f9f5541cf1db1f011f432d",
"assets/images/3/5.jpg": "2865e95b8bcaa8cf49d4634de9224162",
"assets/images/3/6.jpg": "02baa49f78a204e1e674bc411248d383",
"assets/images/3/7.jpg": "0a565d871dc58fced6c9c9038e50c964",
"assets/images/3/8.jpg": "ba7adae22389fd746058c9704a6649ec",
"assets/images/3/9.jpg": "7f3efe79496a0b23e8b81c3e99c1e290",
"assets/images/4/1.jpg": "8c67cab7678ca3b758e02c4829d26d4f",
"assets/images/4/10.jpg": "9ed8ed9483667356870e747933b48ba7",
"assets/images/4/2.jpg": "d6d5ab4f0a82f4f1315b786d3e0456b0",
"assets/images/4/3.jpg": "61e1ba926b1c8e7f977d1e15ac240cbd",
"assets/images/4/4.jpg": "1759c15a83889fd54ad50bbceeb3a83b",
"assets/images/4/5.jpg": "eaf3d826f8a6a8719a2488e037d83629",
"assets/images/4/6.jpg": "217d9b85c39be33405e526ada2f2a04c",
"assets/images/4/7.jpg": "bcd583a4da19ae33be2698ce7671b4d6",
"assets/images/4/8.jpg": "32c09fd5eb31c64a01e7c03d9096f89d",
"assets/images/4/9.jpg": "3124e7bc7f38b23acea32b64ed5dd384",
"assets/images/cs.jpg": "3e7dfb246ba19c55c3fcfa4fc2af97d3",
"assets/images/logo.png": "e64be828d7d145ce95eb9450cb2dbf7b",
"assets/NOTICES": "53c3fe9b24a77bb43fa2d74dac5ce8e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0f407fc1a2bf62b2f5e9048dd6d97b88",
"/": "0f407fc1a2bf62b2f5e9048dd6d97b88",
"main.dart.js": "110248d72eda1c305dcc9b76ff4bdc10",
"manifest.json": "493fecad28046a193aa85c73f490079e",
"version.json": "fa203f2973e9ed0583fa32136858b33f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
