'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "334fcb58f69cf9298df64fbe1e28618b",
"version.json": "b51f0ac596ca5cfe839d5478bdf03818",
"index.html": "40c411a989f5c2b1133bbaf426aa84a3",
"/": "40c411a989f5c2b1133bbaf426aa84a3",
"main.dart.js": "adb5a77825781a43a5d1fce258343f01",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5394903ebee167d9b2d9f3367b5772b0",
"icons/Icon-192.png": "5394903ebee167d9b2d9f3367b5772b0",
"icons/Icon-maskable-192.png": "5394903ebee167d9b2d9f3367b5772b0",
"icons/Icon-maskable-512.png": "5394903ebee167d9b2d9f3367b5772b0",
"icons/Icon-512.png": "5394903ebee167d9b2d9f3367b5772b0",
"manifest.json": "41830af6dfcafa9151977f4ba31cfcef",
"assets/AssetManifest.json": "56578991a848aa00b867b38ef6cfd12c",
"assets/NOTICES": "9db8769fcad0d9d390bc4c4c3666faa8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "1b73c4dae13858aa37cdc23eaa3f4d17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "52088fff966142da8fd6def48fddae4d",
"assets/fonts/MaterialIcons-Regular.otf": "56826dc7def458b53502757413e8756b",
"assets/assets/FEST_ICON.png": "5394903ebee167d9b2d9f3367b5772b0",
"assets/assets/background_home.jpeg": "6b2545a620b3115ee5b8fff206002a9f",
"assets/assets/avengers_images/blackpanther.png": "ce498dc0ef7e221c216b508d02ea27f7",
"assets/assets/avengers_images/spiderman.png": "07021213be89dac42ac6294ae54c3512",
"assets/assets/avengers_images/thanos.jpg": "e55edf18df24bc32e6f3a94688ec44ba",
"assets/assets/avengers_images/loki.jpg": "06c43f053ce04bd5e3ddb81bb25e95fa",
"assets/assets/avengers_images/captain_america.jpg": "f11c2bbba662b4c416c334ac61c8ce4c",
"assets/assets/avengers_images/blacwidow.png": "6bd2898244a8cde9cc75d05f11389b6a",
"assets/assets/avengers_images/thor.png": "a9a4a7995d37b7d3132eefd8e51e1c23",
"assets/assets/avengers_images/hulk.png": "fe7719c3b1c47573f5976cf80ede1f1d",
"assets/assets/avengers_images/iron_man.jpg": "8fdb0ede1686545c61c9e2c5d1d8725a",
"assets/assets/meme.png": "a9f241abd5d8ae19ac6b204c03fee428",
"assets/assets/splash_screen_logo.png": "282248e59635c10e5e035a0848e9c272",
"assets/assets/header_logo.png": "0d49e829a5266c38426e014fa79d8925",
"assets/assets/kes_logo.png": "c8c28e583849d1e3964d9b4e9d0b764e",
"assets/assets/fest_long_white.png": "2e367cea7b5482587fdb41a97e21edc7",
"assets/assets/header_logo.jpeg": "7cd54b297f31dc92ece659e49eaf2f80",
"assets/assets/members/naitik.jpg": "e5b7c98a238ce74c11b9407e550069b3",
"assets/assets/members/SWADHIN.jpg": "d345ad30a6683c7a918233271ae472ec",
"assets/assets/members/nishant.png": "3245ea13d043f8a30f8d12444b507c5f",
"assets/assets/members/swadin_chakra.jpg": "eef9a0f1894036b288117806112a9b86",
"assets/assets/members/soumen.JPG": "95371eae60cad9a694fe6a91a184ed1c",
"assets/assets/members/Shreyesht.jpg": "d114af524e482f4d4e1366aeac0d3a55",
"assets/assets/members/sounak.jpg": "d0a2316820fb69881f00244ced321682",
"assets/assets/members/ravindra.jpg": "3e32e15035da6f5060e362f6d85a90c8",
"assets/assets/members/rehyan.jpeg": "30852c447dc8405d31bfd12960f8e6b6",
"assets/assets/members/sujal.jpeg": "abeae2804895b1ed0e79dc448cb55e81",
"assets/assets/members/Sai.jpg": "3af599cdca84c09b7d9e175cc2e4874d",
"assets/assets/members/BOIBHAV.jpg": "9125f8a3383e5e1f6aba11f2e42d9e96",
"assets/assets/members/Snehangshu.jpg": "4a836cb2637924a690f1eee3c26b2d1b",
"assets/assets/members/vasshkar.jpg": "84547359200e8d3e5a6ef5bf56eed89d",
"assets/assets/members/shubham.jpg": "4121c071166737a8937299b920577e11",
"assets/assets/splash_vid-ezgif.com-optimize.gif": "7348946a6a348b4f5999dc76210e0f4e",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
