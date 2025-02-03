'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/config": "9dff0e87aad4cb0dc9e87febbcd76515",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "940c1e0ff28d37072395c9a174ffca27",
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
".git/index": "f43f9875b619279665a3b121cf000439",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac1d6edbf7824c23d214dadbb3baab09",
".git/logs/refs/heads/master": "ac1d6edbf7824c23d214dadbb3baab09",
".git/logs/refs/remotes/origin/master": "685f58e2df3ef3afb9ccd75447fd12fd",
".git/objects/00/30b0228760306c83ca3e2e248a77d71a0766eb": "8370dc6afcefe4262082b91046d364a7",
".git/objects/04/36712885a7575bd2cccec6d4c22262fc2b859c": "7a465ddf24fe2ca4b5f44db364533e7f",
".git/objects/06/5ea59dcb8ba660f65fc2124e2aaba0dcd04c0a": "5940d9cb848bc26a4d5a2880ef239a8f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/0f30cbb086d752e54b6ae39af28f662ffc758d": "929e7613ce617f1792c1b09f0e5d43a0",
".git/objects/1b/eed1bb56fd2c82bc641580562944d98162f7ed": "b919cacdea209565c2244d25754afdbd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/507cfc441303d427fa6c980e7421a8b4a3f014": "c7260c45961e2d7d68a3802985f36e50",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/31/c573b5508e49ede54d70af5cbe300ccc67bfbb": "89e2ca3746c9de77447ffb7b366b8860",
".git/objects/32/36ddd47e25199c22dec63854f2e51ae0c39fa0": "63a3206d388e15b57d0c1a26b7ea0fea",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/bf923187fbe13e117db71ae9463a15ab080ff2": "56666aed83c49e32eaadf3e41add2f88",
".git/objects/39/8d9bd0cd4a53714493bee76029f05de935d03b": "60cbbf0afa212eec0fdbd8f85673c85c",
".git/objects/3a/1c9f6802407cfe07d4bcfcf34971d83411eeec": "2dbb4a0b87fa159eff04f73c42f6d38e",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/b738adf5b2e30ced262853a1e357916e2c1160": "e9aa7ac57b7684ef9f247729231aa37a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/8b93d7a5aa18927d3c629b998e802ce42d8a0e": "3452944a7db78eec1ae4ee604eb9e018",
".git/objects/43/36394959d1cd81ab01a9d0562fa95cc56e502b": "3978374331bfefb15a9d620ad2ea9a69",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ce9932f8808c90257f5456885e7008dd2eb7d9": "ad3d9653b6dd71424dd29fbf98b1c4f8",
".git/objects/48/5493595b7bb322823549cb197d162e564a774f": "7778c66561a5e80b9bdc372b9266246f",
".git/objects/49/034c734a73bda4be2d5200162852f012b9e646": "75bb31b052c8886689e5dbd0920cbb2a",
".git/objects/4d/4ab0c12af80654f00ca74f619650a453f49005": "305af3c758b499434be9a7daae0b94b4",
".git/objects/50/a76f3d3a47a8c82ea2f90213496a09228e8529": "b4b8ca196e675b9eea676499b3b4b148",
".git/objects/50/c707800c43720b836960f7cda44ad0abca81aa": "5d31670ee32adf46c462f2a7fa576524",
".git/objects/54/e4791a026780d4f9fab397d4a41636244765b8": "4079b687278e71270e6987df88040a12",
".git/objects/57/5d8b4a0235c452925dd41b05b46ff9ede86c22": "db9436d1db8f8960c932e63d301a8e96",
".git/objects/5e/c0e1488339a82ddf44c297d40c6b07fb592d40": "2cd2705afc852e0f80f7eb311a567106",
".git/objects/60/761d044e495dcf5d01910a39af69c1377ec248": "f40387382bb5b64605054cc8523d7b2e",
".git/objects/60/8d2ded0795bfdeb453d89809c046e417f4bffc": "177773650367bd1ae7360f81db29b1cf",
".git/objects/64/ffb7cf6b59b19609e1ee57f865c7d156e0879c": "75a1752a86bbb0ca7f0172624adb304e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/ca78092e4c581ae0cf64fa64885146e8aa2c19": "c6931407bf429d45f8b3755237bd4aac",
".git/objects/6e/c9b5484ad0d7fb2fbfb2203425c4665cb1d56c": "ef221bd4e5432ad2811ac6fd628dbdd5",
".git/objects/70/05606dd621bf0822e713468b8a76854baa35d2": "f40cb05a0d28fdd54704139295fad0fb",
".git/objects/73/ba34b00958c3714bd52108a4a050b8c6a54abd": "d62fb0941739724ffcf549b631ea53da",
".git/objects/7a/fe356384f66417d359ffeacb29f0bacf3c278a": "1b41461227550679d6af5ff878004333",
".git/objects/7f/2bf53824c082bed60f663aea85c518064d2aba": "2bd81bea23a5704db02b54c099a6b173",
".git/objects/81/156387b6ea0aca498a82256134e9263fe4dfa6": "2ce7b110ad15861e016fdd05d5e694a9",
".git/objects/81/d671f3bb269b712a92acd03aadba12e8b2a2b5": "6ab75ef7461fbcf2100c2f90a652c248",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/a8b34905c799d50e4c2714832d76644b50143c": "b0c475ae3c06a40bb0c0331578636792",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bf9b28fbbb197cb018831c78af1aef51bf1692": "56b32d2d4ceb40e987bf10c407f36a5c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fb05f90388ea28442a4426755dbc73580b3bb1": "9442817aabe5f86e2655c57df27a650a",
".git/objects/8c/b574804de64d3314703a05a565558f791ba110": "7535ebba15db4d6ad5c11df4a184f416",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/42fb8df5b916f9f611704a4a8e576aba09b0d8": "5ac17863184f16ee91cade592673858e",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/6619e50d9819347450c2fd26a04b73336fc47e": "c00e5d031124f3825a528a17989b8753",
".git/objects/9e/4dc65a7ec900bd26e27f5ab561dba3d79ca7b9": "288bdd84f3804b913e7c215ebe6befb6",
".git/objects/9f/7a37413743a7ee68dc3dd24d941c3fea4bc6c1": "08a8faecc876fc4217233ee275c93124",
".git/objects/a2/26805e0a12fa454889935acf123dc33ae65fc7": "96a3bc264cf43d752de6f6c024146e94",
".git/objects/a9/f390361fce92b2fd16b82068a2bfbef8a61a03": "ae55da41c6e3e591586b68fd9e8ba6bd",
".git/objects/ac/af82764f8d91f40cfbe8968308030ba819e32f": "978a7d95d76dad4f49ab809ea5b424ef",
".git/objects/ad/0b5748aa72fa32c6f16e1f9c59f53438d37a02": "f05213fd7614ca48307e4f0dc7456049",
".git/objects/b0/9a65449efd8d6adda3444fd46da1f49681e70f": "44b22e847fae4bac5e46b1a7be0a5e14",
".git/objects/b0/c0ed1e4ea987e8401a5a765c45e65f8190675e": "75be8b8c01d5d16c725e94e4c07e8a28",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/c1ee315a6ee640d8bcfe01ed25cd1640846ae1": "1beb30e33a852438373b9554d6d00e95",
".git/objects/b7/1e556127e7175ccf17c7975b5404f514e20026": "c8a9eee05be5493f4ef9ea3b44c65b21",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4c91f9c4f0dbb35628661f01d304cb67b1d358": "c6ab46c79edc1865ba3b3317ab70826f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/db8ccc3379cd8ee95a80cece92a72ddddf4ef4": "310bdc116199b69ee70cea268639df34",
".git/objects/bd/a5a24fc4eb4ab097576c289416544b8a64bb96": "6ccd65db4d6f9ad8fd26d32153e9b7e3",
".git/objects/bf/c29a605982986aca9e228c0a46e01f27106eb3": "672e1f548010a41c2e680229a63a74d5",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c3/24bd176531911127925315aa3b286bcea29cce": "c580f1a88d31b5976bae3e22b04886b4",
".git/objects/c7/628cf006e8e63acf32d9cc3bf4631dc7d7b100": "e59f58753236a6536691e823313d66b8",
".git/objects/c9/66f4affdf82285a70118b5880661d8f2ec8ee2": "780a1cba430f13f6b08cefcab980377a",
".git/objects/c9/7586d7461351ac196cf6c2515cdf042478acb5": "bebb362f058f69fcdfa37e05c04be153",
".git/objects/cd/96c87d77150416259ed6e4aa668bf9cb4e9fb9": "d2c2c5fa7f53c2552076a69543d9bc8b",
".git/objects/ce/6f5874b0a50f87df6d2f3100366a6a5ab17186": "3fa26fe539c643ec3e32d83961add67a",
".git/objects/cf/090d529cc66cf1043faf7c8f34a30753de145b": "17688637458b5f867ac02290489c7189",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/f82b7237343d33ee71c521fa6a85dbc9b0c6db": "0edf20c5131a031e32ccadb9663316b5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/483b281ec57a537ca21460552caf4b9e2f405e": "a9f0f6fea9b4c484fbfd8bfe39fb94dc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/a3d59f0383ccba9e0f036ffbb0123332ccdce2": "36cb21e3e133b360126bced18f6c9f5b",
".git/objects/e5/335faaef2a605a4c7e012eb2cff274c0a09898": "96add618b0074cf12188144a35898e63",
".git/objects/e5/cce3adfe0f7e2210528cd196d885e719791b01": "36643f519d1cfe00fe67ab1b69be9b05",
".git/objects/eb/1e59365cfd621a725498393d141f192779499d": "1866e37c61185078ffaeff5623d01c28",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/ORIG_HEAD": "f17af92de692c3272c05df10644376c0",
".git/refs/heads/master": "a7f6fa70127944197bbdfc84f9030e5d",
".git/refs/remotes/origin/master": "a7f6fa70127944197bbdfc84f9030e5d",
"assets/AssetManifest.bin": "c29e3638389696bc99ba647a0049dd5e",
"assets/AssetManifest.bin.json": "6edb8cb2fc5ae007fa6dfafdcdaa389e",
"assets/AssetManifest.json": "b96b1c786d643c8ed11952313b000c5f",
"assets/assets/android.png": "8a249e356afcf8905523214c621db0e0",
"assets/assets/background.png": "c49cd8450ee5bbbee9dfb17448ec2bab",
"assets/assets/bsss.png": "cb02eb4838878ed02d59dd419c9ef5c7",
"assets/assets/din.png": "8488d6c7d3d8027d6ac3cedf091e4530",
"assets/assets/flu.png": "b04282e8552f8c82594cfce3569bce65",
"assets/assets/freelance.png": "a3de245534ebc0bffc45995e6955fa8b",
"assets/assets/github.png": "102f803cb2270d832bae61cb1fd2672a",
"assets/assets/gonogo.png": "9afb4f8c26009312b9dacad8b8f6ad71",
"assets/assets/hotbit.png": "dd38ee8d9acf5c22fb3bc1da9b454260",
"assets/assets/mar.png": "b8efc3bdc508a051dc78cbc496c8d049",
"assets/assets/medium.png": "c3a6383ca187b764cb60937e4a14d1d8",
"assets/assets/neo.png": "19c54f7f00ed87a51947fb58e68c7782",
"assets/assets/por.png": "e2d43f56ef4706ffa5fca824ba561e5f",
"assets/assets/profile.jpg": "8b4ddf8d8aae4ec93c3686058e734139",
"assets/assets/rec.png": "568d3873341d192eaee5e2eb5bf7ce24",
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
"flutter_bootstrap.js": "c76e8c7842fed95a248f81afe79a603e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e56b258fff725e609a82a725cb78f692",
"/": "e56b258fff725e609a82a725cb78f692",
"main.dart.js": "d1498037c893f50167ef0256a73d63c3",
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
