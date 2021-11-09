'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cb9492a9e717bb0c5aeacb49312731c6",
".git/config": "8db13dd0599cc5529f39587cde39d537",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "780ba02d22d0c2681ba7b84b36fd28fc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "730c5cbfee083b17fc1396763d8d284b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2ff4c4f390dac6a397011edc8abd4d72",
".git/logs/refs/heads/htmlbuild": "2ee515e52195343808d649544a7cb360",
".git/logs/refs/heads/main": "bc0785e2a86fdc5728fb0327720e01d5",
".git/logs/refs/remotes/origin/htmlbuild": "7dcd5b0a827b39c3bc775af537005445",
".git/objects/04/2fd136d47bff0e7d906a6968a71e768183559a": "ccef8755a4fd2ef95227d588bffa6cfc",
".git/objects/04/d0385c623b045a5bc0410d5159d53e227524a5": "e2f868ffb5d30db4099f2c66f421f79b",
".git/objects/0d/fa91c7011ebd47b531c6662cbb1f148bfae53c": "8fad07d8502ff189637a895234a48937",
".git/objects/0e/d44834884073bbdf4c084bc5bb185b6ef6262c": "c6ee526420d2bdcafe398cdc1a9009f7",
".git/objects/12/d79b02186bb46a5f26d1ab19f13111bc549b27": "f2709ee009558017a3886fbe6e7bece4",
".git/objects/14/fff27a6aa9dbbe1c30ac124c781c06852fd16a": "e46305525f0a529633d570aa4acba618",
".git/objects/18/c6ca490d1a325246917264e283363413d1b0e8": "7cbbc50e44cdf6913e617687bf276282",
".git/objects/1d/2b459901b075b44b180d0d6fd4094f8672b307": "a6e5b4e252235e9ed06dfb41c364b4f4",
".git/objects/20/292af1fca5f5f06b5391fd95f09c1b80ba01fe": "12e544e0a76a233ed15bb6d10b94ce86",
".git/objects/27/9e8046f358929e23504740352924adb848f712": "cc1a5a0d1a9e108ff57b94e7281b7b4f",
".git/objects/28/be68296e3cf95a90c0d3b9d8dca3ea75bfee85": "53c91c1c6d26a5b8c9af78cda7e7c29f",
".git/objects/29/bc839376600ba1e466eca9e8c9d1528afc02fa": "d8088cc511f62e92a0f59f509b1ccc5a",
".git/objects/2a/577b3849dbe9dcb4d3d57208f0bdb8350164f0": "89746cef1f9dcb7d6967f109d275cfb0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/20eb6be6939406ed0d21a7ba2f7d3fb7cad88a": "a8ddfaccf547b493cda341f20a5a3b53",
".git/objects/3c/d40c763b8d91c5197e1feed046cba968a3af85": "2a1c691f429118c2b74c36f93404b4cd",
".git/objects/3d/11af0dc00de901760c802abf79f129a53d56ec": "f880bb41960f9be83728387e55ecf290",
".git/objects/45/b0d9456ac1fc51ab10e315a36465b67be86276": "60765b3f14e773760a223a3a495a16be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/5329b62cc7f5950b6965f458c25e737cd5470f": "83864e5f2c47cde140a6d76fe8413bee",
".git/objects/48/c393aed1a71127e48d5f4fa8ef068db5bf4078": "606c8a232245196ab939c66e823ae775",
".git/objects/4f/6b6001206a591711ed56aeee17e6204eeb1ae3": "8bf206305a0088803f07ecb6f73f69e9",
".git/objects/50/8fb53f783a5fc2e8a56c248ef84edabee119c0": "e43b9526ebe75b868419869e90cd9840",
".git/objects/50/9391287068bcd31a11e4f4d910e07552ccee9b": "a8dfcf665531b64b4febb769fb57b7a1",
".git/objects/51/9d99da4636aac35ca1361e4972a8af0aa60aa6": "5163a8bab439c00b88f9737b06272aae",
".git/objects/5f/1112375e0d7843f2d37b6ba0c93eea28f1efc1": "d61e718e06204b4217d535e0a27df57a",
".git/objects/62/8447966b7aa19d2b07ee837c3349896ae40ad7": "f1a765506e1d938f8950bc51ddde7112",
".git/objects/66/ca90d597d0c9212274eb23f7275c4123c92eb5": "35e96e60c2359a55f8ecff03c11c40e3",
".git/objects/77/956b0ba7a9c4d9f318765fae89fc525719c2dc": "b50328845b2214e36bed4b6328960f08",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/43dc4dd6aa0792687e419e0d5687ab84aa88d4": "c6d6d6a6b63825035736172a58b53d7b",
".git/objects/82/1f6ac8dae35528aa85cd79af008ea05009b133": "926e1392c7ece78180371faf52a44963",
".git/objects/87/7680f67163e5a84d85f5463d0b8480e8c33d60": "611db830b8ea94f88e40aaa4405c82cc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7649881869e0a472a4b95a8102bb34a247150a": "3bdd5247cf664e0c659bfcc0616ded33",
".git/objects/89/b3723582b7b69732413226dce6341a88a0f724": "071996f91b559086cc60dbc219e6cb2b",
".git/objects/8a/2df86ffa5cb71e97dde4782f4cc6748a5d2532": "67750795e6b29cc08cfd3e256aa28c84",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/2eaeac4448617fb2df0723a35b2521f751f2e4": "653f635ef758de94f9b3a87487eb185a",
".git/objects/8d/dea07b88bdf34db9b7d953752207f4bb4c7983": "66ae28448541681187cffba15b975529",
".git/objects/91/4e11c221baea6789b91660d3f587ce38a7a058": "fa1b32e8cf54869582fbb27f69473d04",
".git/objects/91/99ea72c6b16f6bfc06a57a247119b38cc0bc60": "1ac31e2e3c33699220cb4db8b721a54a",
".git/objects/96/2ded338a6241d9d18eaaf5c8fb12b8947d59de": "ad13ee0dbe649f4411fd472ac0c9a18f",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/3362b03b4086df99683a018fec8dc16051d28f": "6c7cbb18f430db9425d9e59fdd221c9a",
".git/objects/a7/02cf57fbce315bea7f7d4c46814a50ad1b47dc": "7a0a313a778ee46cfbb89cdcd99c902e",
".git/objects/a8/57e6eac6a3c79ad1e371d3f57439cdcbf33564": "606f4ac32ebc1655d2f985a31adb6fa7",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/e42aa797762a8b2817e437e0ced3afc2decfd1": "da3d7edc6f7605d5f342511df6b0a4cb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/ae406ebed22efff923ff99a3a1dbe20cb65370": "f02b54f9503460eb954153ab7f1f048c",
".git/objects/b2/9af6844437485ef67c7a76b5ef6f0fcf0fbfd9": "9a3c28dee28c33d1c4bc1d7f6752aa90",
".git/objects/b6/287fc5b3dd0f89f032fada57fac38835377078": "874ae60a166f924b4e1b4107f1da33e6",
".git/objects/b6/5b0d05e6199aa4e693f48c6f6c87cac7aa29ab": "0d347672889e4b4534d2137fcc8a4639",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0523c6a6f02bf9479fc311e588c059b489eecd": "fde853f206dae854cae8c645a001b648",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c6/bb4b7a3f50335794b6cf2aad33e465245c57ef": "26bc777eb1ae40afc10af0389093c5f5",
".git/objects/d1/844d34206fcd39b5c9ba0743c372b2b2235a93": "988e8c85d51c8e708851c806c925f88d",
".git/objects/d4/c37878b7e677a1af2d74c54080c9336d60c8a2": "a31aaf8877f0456d55bfd47a533547a1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/380d47163e119d1dc43e582d26476c5865d63b": "dff491ec8f1afae56ddbdf4503eef39e",
".git/objects/e1/c0b37a9b2b2839a3bc390a0295816c25c16ceb": "af7ce56e040f4e5bbf65e66a9f0fc3bc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/145f360ebad5e4fa948f748bd69b34add85d1b": "a34a6bbe5db0929d772eed91370a9baa",
".git/objects/e9/26dad18ba83d425846e1c9b4f93bb35f0255cc": "aa98639c0f59b9bb3fe972f0b049be37",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/99aa2b990ba24b3a67d2c1155b1c1e5f304886": "182ab5c98cf418f8b9c98b193687288f",
".git/objects/f7/ee58268a1b6cda5c369b62ad77823d5500cce3": "ff92d87e15cb0f5635a01feeb62139c2",
".git/objects/f9/7c9b78fe8e631a7d5b1f6cda8febaad2e2b808": "dd3af1fd3a3fa42a1350dbb1244e1bcb",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/refs/heads/htmlbuild": "5ab3fd2bd08ce8aa8cd03fac1ed2f1ca",
".git/refs/heads/main": "5ab3fd2bd08ce8aa8cd03fac1ed2f1ca",
".git/refs/remotes/origin/htmlbuild": "5ab3fd2bd08ce8aa8cd03fac1ed2f1ca",
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
"composer.json": "99914b932bd37a50b983c5e7c90ae93b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7968d0a77b84fd3d3c4d91080784f63d",
"/": "7968d0a77b84fd3d3c4d91080784f63d",
"main.dart.js": "34defcbe19dcabe3b549f8b00a2a828b",
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
