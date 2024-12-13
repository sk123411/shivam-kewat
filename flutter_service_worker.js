'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "096ca214c177b86879fc3f0412872668",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0ace0e67e07863917ff388020ecb6d67",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "75f8cd86361b504fafb07b6eeca5fff6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ef6d56a7e666f4c286240a47c8115ab",
".git/logs/refs/heads/master": "6ef6d56a7e666f4c286240a47c8115ab",
".git/logs/refs/remotes/origin/master": "a22ad229f7d346fc24898ba48191d359",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/0f30cbb086d752e54b6ae39af28f662ffc758d": "929e7613ce617f1792c1b09f0e5d43a0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/31/c573b5508e49ede54d70af5cbe300ccc67bfbb": "89e2ca3746c9de77447ffb7b366b8860",
".git/objects/32/36ddd47e25199c22dec63854f2e51ae0c39fa0": "63a3206d388e15b57d0c1a26b7ea0fea",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/8b93d7a5aa18927d3c629b998e802ce42d8a0e": "3452944a7db78eec1ae4ee604eb9e018",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ce9932f8808c90257f5456885e7008dd2eb7d9": "ad3d9653b6dd71424dd29fbf98b1c4f8",
".git/objects/50/c707800c43720b836960f7cda44ad0abca81aa": "5d31670ee32adf46c462f2a7fa576524",
".git/objects/54/e4791a026780d4f9fab397d4a41636244765b8": "4079b687278e71270e6987df88040a12",
".git/objects/57/5d8b4a0235c452925dd41b05b46ff9ede86c22": "db9436d1db8f8960c932e63d301a8e96",
".git/objects/5e/c0e1488339a82ddf44c297d40c6b07fb592d40": "2cd2705afc852e0f80f7eb311a567106",
".git/objects/60/8d2ded0795bfdeb453d89809c046e417f4bffc": "177773650367bd1ae7360f81db29b1cf",
".git/objects/64/ffb7cf6b59b19609e1ee57f865c7d156e0879c": "75a1752a86bbb0ca7f0172624adb304e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/ca78092e4c581ae0cf64fa64885146e8aa2c19": "c6931407bf429d45f8b3755237bd4aac",
".git/objects/70/05606dd621bf0822e713468b8a76854baa35d2": "f40cb05a0d28fdd54704139295fad0fb",
".git/objects/73/ba34b00958c3714bd52108a4a050b8c6a54abd": "d62fb0941739724ffcf549b631ea53da",
".git/objects/7a/fe356384f66417d359ffeacb29f0bacf3c278a": "1b41461227550679d6af5ff878004333",
".git/objects/7f/2bf53824c082bed60f663aea85c518064d2aba": "2bd81bea23a5704db02b54c099a6b173",
".git/objects/81/156387b6ea0aca498a82256134e9263fe4dfa6": "2ce7b110ad15861e016fdd05d5e694a9",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b574804de64d3314703a05a565558f791ba110": "7535ebba15db4d6ad5c11df4a184f416",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/42fb8df5b916f9f611704a4a8e576aba09b0d8": "5ac17863184f16ee91cade592673858e",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/6619e50d9819347450c2fd26a04b73336fc47e": "c00e5d031124f3825a528a17989b8753",
".git/objects/9e/4dc65a7ec900bd26e27f5ab561dba3d79ca7b9": "288bdd84f3804b913e7c215ebe6befb6",
".git/objects/a9/f390361fce92b2fd16b82068a2bfbef8a61a03": "ae55da41c6e3e591586b68fd9e8ba6bd",
".git/objects/ac/af82764f8d91f40cfbe8968308030ba819e32f": "978a7d95d76dad4f49ab809ea5b424ef",
".git/objects/ad/0b5748aa72fa32c6f16e1f9c59f53438d37a02": "f05213fd7614ca48307e4f0dc7456049",
".git/objects/b0/9a65449efd8d6adda3444fd46da1f49681e70f": "44b22e847fae4bac5e46b1a7be0a5e14",
".git/objects/b0/c0ed1e4ea987e8401a5a765c45e65f8190675e": "75be8b8c01d5d16c725e94e4c07e8a28",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/ce/6f5874b0a50f87df6d2f3100366a6a5ab17186": "3fa26fe539c643ec3e32d83961add67a",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/f82b7237343d33ee71c521fa6a85dbc9b0c6db": "0edf20c5131a031e32ccadb9663316b5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/483b281ec57a537ca21460552caf4b9e2f405e": "a9f0f6fea9b4c484fbfd8bfe39fb94dc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e5/335faaef2a605a4c7e012eb2cff274c0a09898": "96add618b0074cf12188144a35898e63",
".git/objects/eb/1e59365cfd621a725498393d141f192779499d": "1866e37c61185078ffaeff5623d01c28",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/ORIG_HEAD": "9c5c2b30cab9381a6eeb98aa20af10dd",
".git/refs/heads/master": "9c5c2b30cab9381a6eeb98aa20af10dd",
".git/refs/remotes/origin/master": "9c5c2b30cab9381a6eeb98aa20af10dd",
"assets/AssetManifest.bin": "f4dd6c96fa078b5e20319728cc2b618f",
"assets/AssetManifest.bin.json": "cab48d3e68aa2bdeec17e6df6fefeca9",
"assets/AssetManifest.json": "099cf2ed29fc315a97448054d28e2297",
"assets/assets/android.png": "8a249e356afcf8905523214c621db0e0",
"assets/assets/background.png": "c49cd8450ee5bbbee9dfb17448ec2bab",
"assets/assets/bsss.png": "cb02eb4838878ed02d59dd419c9ef5c7",
"assets/assets/din.png": "8488d6c7d3d8027d6ac3cedf091e4530",
"assets/assets/flu.png": "b04282e8552f8c82594cfce3569bce65",
"assets/assets/github.png": "102f803cb2270d832bae61cb1fd2672a",
"assets/assets/hotbit.png": "dd38ee8d9acf5c22fb3bc1da9b454260",
"assets/assets/medium.png": "c3a6383ca187b764cb60937e4a14d1d8",
"assets/assets/neo.png": "19c54f7f00ed87a51947fb58e68c7782",
"assets/assets/profile.jpg": "8b4ddf8d8aae4ec93c3686058e734139",
"assets/assets/udemy.png": "b21a40bd71fd9e4e0588a8d9f086b702",
"assets/assets/web.png": "993124b502f66a131c5443476bfe172e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "58647120a8a1ac1f4a3fe6b0042d6d8d",
"assets/NOTICES": "5091b135675d46e835f256282d5994fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "490d6b779b945689a581d43b905233f3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e56b258fff725e609a82a725cb78f692",
"/": "e56b258fff725e609a82a725cb78f692",
"main.dart.js": "211793103d2856220b1338bb1c4d5aae",
"manifest.json": "9f023c6ca25376b6ea4e98449c17de4a",
"version.json": "c36b567f0445931d193d74680f0232f7"};
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
