'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter_bootstrap.js": "d372100180b268aeabf097b105c7df10",
"index.html": "2606e4b91c315b5036e13ae6d1041852",
"/": "2606e4b91c315b5036e13ae6d1041852",
"version.json": "db9c2e2694ed0f4bc344389c7db94001",
"assets/assets/app_icon.png": "72336ef7b6bacd54250a7fcb763befe8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "db1aab2cce04f69c50c96972b41d346c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "c5b4e282ce308c6c25bef5fb66c3ba26",
"assets/AssetManifest.bin": "3fbdc098e51985f8a463663a8e4961ab",
"assets/AssetManifest.bin.json": "3c083e1801e7eb05667c8c29c115b662",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "c9d47cf140d1f90707dac928ab434c25",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main": "d5f649f54b4b83561c61135c03f59a3b",
".git/refs/remotes/origin/main": "d5f649f54b4b83561c61135c03f59a3b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/a9/8d95b2b40148cd72f794ebcecf008a32025240": "1a868d741c292c8a4cc9cb38e6600199",
".git/objects/72/d9d8060b379f1c77088ff84da804c8153f8f26": "d932a89f29c0fc58d01b95d7c48a9a8e",
".git/objects/08/2015a975234b40f025b775e25619a1cb1d34a5": "90c86bc857b85a069167994e952a75c5",
".git/objects/b7/6c9e4f26043853bf5eba14dd3cd795c6eb6bf8": "1f3d6c858aaa1eb5c6f02c622f2dad34",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b9763ec9e1ef4c3d1f3be7856e9d9afec510fb": "75963fddbfeabdb7ab85e7ca0fb7c4e8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/a3/e6bb993d5a108b8c4d2de7c50378ccc1be51cc": "4018371bc8bb61b88711e3e13c3ffa0b",
".git/objects/aa/212e7653c4698302918619c4a64cb43dea3108": "6d2eb7bfe213ffb91beb3d2cf3e34c9c",
".git/objects/2d/fd301956572f35d6dfc507581d67cb2e4d72b6": "430d6d605e46d85eefaf223fd6d6290f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/a7f2ab107dcb02fb0f682723822e74e9e2d5b4": "e60651dc7236d2dd7e549ad7ee618c77",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/7a4f384ef89b6c1930e69ac5b6da975e934fa6": "e24bda65af51d56b0902f69c1834e406",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/06/3bb44f94765c435a08a340c563feac38dc44ae": "2f3c16243c41df0f9318522a2cb50189",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0857dbc7817a6d3b9a1d711ade7383efbe41c7": "1b7c8978dddb393cd1ee5fc0cf12282e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/21/a78f34696905176633d9486c4ac8275cbab553": "838e42bd72a8d6c34990922243da6d37",
".git/objects/c3/e6deeb33cfa34d303fd7e55f46db6dac17f4ad": "50577f9a53ca393456019d8a8d03688f",
".git/objects/68/7217838311f5716eee085fbe78db61b678d837": "440049c42ac53bba85dfedcd9d7083b6",
".git/objects/c6/a088bba0b11d2f6585313b39eb2e7bddc30285": "f098afc3859ca2890bfbf683f69e63a5",
".git/objects/62/89b324e6677c6330abcbde2bf5235d2ef2ba46": "3fdb9097d63408a912f04fc8bd8e49ca",
".git/objects/cf/cdca65bea886ef6bc023da6755e6772ca8ff1f": "17d49ae3edef9fd80102989f5240acdf",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/87/f0e713716a2cf979214961c40080f5f58a4ac1": "5523973d3d0e5a858f21890f773afa54",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/74/091b9c92a30050213951049ea7b1e32ef9823a": "3796fe1934714e8f0a10c645bdafe5e3",
".git/objects/3f/377f38c5d6119c1ead12079d9a26f1ca288a94": "294a498ec2f133ebe284541a9c3c2f0d",
".git/objects/f8/011f798023ae28bb41b773f4435341cfe58133": "dea8149aef3e70da9ce8ef936d0c916f",
".git/objects/b1/a9f4103afe85155ae07ddeae14a1f5c45b9b79": "691323c93125acf53511045fef7d42e0",
".git/objects/1b/63566c0a8b6a74e8b233906ebc733ba402e31f": "6cbe99468117afdfdc3d591ed8bb1156",
".git/objects/79/b769a6f30b09f1988a47b130f5c8214106c2b5": "de0967046083087ed4c9187fbc236388",
".git/objects/5f/2919f895bcf06de875995a2c7d43db32881c54": "4651a3099952c93ae992fb3cbb13b848",
".git/objects/6a/985a8be31021ff2380e7dd42f059dadca2b53e": "30a23264d1ce5c1ad20ac185d02900b1",
".git/objects/ec/a3b9789912391836c5c9dee38809e066d8c70a": "47a18ecd4062f4c8b9611ed516a70472",
".git/objects/5b/7f70a960b98bdf4bb1fd251c581a016446873b": "995d0dd6ee4a24acef6d1fbea371a9f0",
".git/objects/95/2bcc56bc99cd277fcd6f5e9331b3ee9eaea07d": "bf4647423a138d9821694b319c2c9f8a",
".git/objects/5a/134c58faed2c8d808b3ae64d2974ae3214ea73": "d7cdf9124d0681273da37771ed86cc95",
".git/objects/fa/1f1a183ef02f36d7fe622a2bd4e809b56b249a": "7bc6ab88298895edf39eed9419c6075f",
".git/COMMIT_EDITMSG": "30193b382c08d5f4b32b7d889b2953ef",
".git/logs/HEAD": "678239308d265f10ad5aac8843998e5b",
".git/logs/refs/heads/main": "141acaec7309b47f19346bce76ea6dde",
".git/logs/refs/remotes/origin/main": "ae736b02697d7ef8cfb16d16281586df",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "54ea37c2cebd723131bbc7cc4058a029",
".git/FETCH_HEAD": "a5ac2770ca60072596b3f7637bbc9ceb",
".git/ORIG_HEAD": "49f1985cc13e6ea20a768973ddbbd9f1",
".git/index": "44c4a03030e49525daa569d4219be798",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js": "46a9186d8cb299ff2e9af2b543ab58c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "7d92b6cae711df631352b4d2fb365661",
"new_logo.png": "147e74edb12588206d646b14c4f9c7ec"};
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
