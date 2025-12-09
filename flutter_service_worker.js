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
"flutter_bootstrap.js": "248f91b8e88efc53557d8fda800b3e03",
"index.html": "28a2e7e70587d7df9c806be346fdd941",
"/": "28a2e7e70587d7df9c806be346fdd941",
"version.json": "db9c2e2694ed0f4bc344389c7db94001",
"assets/assets/app_icon.png": "72336ef7b6bacd54250a7fcb763befe8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "31fad5fdd7fe960df3afc30d7556baa4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "c5b4e282ce308c6c25bef5fb66c3ba26",
"assets/AssetManifest.bin": "3fbdc098e51985f8a463663a8e4961ab",
"assets/AssetManifest.bin.json": "3c083e1801e7eb05667c8c29c115b662",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "945247f05b257c3a96ea92048d00e443",
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
".git/refs/heads/main": "c1c9991ccb4a346b6e2feb9f0411eee1",
".git/refs/remotes/origin/main": "c1c9991ccb4a346b6e2feb9f0411eee1",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/a9/8d95b2b40148cd72f794ebcecf008a32025240": "1a868d741c292c8a4cc9cb38e6600199",
".git/objects/72/d9d8060b379f1c77088ff84da804c8153f8f26": "d932a89f29c0fc58d01b95d7c48a9a8e",
".git/objects/08/2015a975234b40f025b775e25619a1cb1d34a5": "90c86bc857b85a069167994e952a75c5",
".git/objects/b7/6c9e4f26043853bf5eba14dd3cd795c6eb6bf8": "1f3d6c858aaa1eb5c6f02c622f2dad34",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b9763ec9e1ef4c3d1f3be7856e9d9afec510fb": "75963fddbfeabdb7ab85e7ca0fb7c4e8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c6c30e89492025b4d74dc90ad5bdf90a3f5837": "0099d7d896a2db4ee7be67869c257f2e",
".git/objects/a3/e6bb993d5a108b8c4d2de7c50378ccc1be51cc": "4018371bc8bb61b88711e3e13c3ffa0b",
".git/objects/aa/212e7653c4698302918619c4a64cb43dea3108": "6d2eb7bfe213ffb91beb3d2cf3e34c9c",
".git/objects/2d/fd301956572f35d6dfc507581d67cb2e4d72b6": "430d6d605e46d85eefaf223fd6d6290f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4ec6731e8042b54a668b888ac54ba3f3445e5a": "44c4128222fae7719785680dd69ebd64",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/a7f2ab107dcb02fb0f682723822e74e9e2d5b4": "e60651dc7236d2dd7e549ad7ee618c77",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/418a1671a07d78dc0b5311ceabf60256a4be54": "3200d30f1bfaed6ba21cf150294f2da2",
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
".git/objects/6b/687be000e8ae967313a1b6218590825235ea24": "4ebe6efec43b555c664c22d1da749714",
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
".git/objects/19/47b6e2739faf988ff7fd85e8d3e83a2477a758": "205621062db23b790be04ee4ba334821",
".git/objects/df/95c1a66ed5a81bcbf304aed2fb9c5d0b4a7dc0": "0357e9b6a37476911eb3e522e0e0d803",
".git/objects/14/8cf86026415c0473e1d7c0ec2c2c0a69b479df": "f75c22b6338110f9e48ef231bf208aee",
".git/objects/a6/cdcba38216d3d6bc1f5aba6161afa7b8f8b76a": "9c3ba5bdf518b1903c9026fcc65ffed2",
".git/objects/a6/b8ae78afa5f00256c4f18c8f0c9e8e33f688e6": "7d7114c526eb1f26f04d90f9ece26778",
".git/objects/af/1d3320b65a855b9fd9b1d88e4b89dc5bf4a658": "3b8e23352a1bfaa395a7edaf82a764b6",
".git/objects/1e/0d56a665cf6d16c2df6ac462d77e59755123e7": "0692c997cc6dd2408a183d388461e6d8",
".git/objects/0d/12cbdbd2f54d42b0b4908c0dea83a0b501b045": "5f5c1241037d0330c0103411712ce42a",
".git/objects/ea/b073c7ceebecd2615473d3472819d3c3e0d9c2": "e1476617edff9015610f4d936ecd2bc9",
".git/objects/92/97e37e13f88b89ec0b80c1b5f121a91730d0c2": "5315b6384daeaf35bbca093a115ccfbd",
".git/objects/92/0208898c82fc6ff2c765ca632fe45e3567dc63": "8bf0dfbff32374c0708922614dde0f1b",
".git/objects/a4/1a58593a43e8a125fe360ce5ffe78cf12975ff": "71c440658737668c83866f0f4e3b1073",
".git/objects/5e/09d4874078394262a871be6293dcbb3c3d7429": "a3c5bc390426e7dcdbb9f892d482961a",
".git/objects/f0/de7ed958c3f75697d8bab6670bffbee1fd7cce": "cdc8cb57866337ee0b58c3a9dba40102",
".git/objects/e4/3c37bbe78afef30d548e823be93ec64e8bc669": "d0c2653714d81a63b8929563841cde51",
".git/objects/54/93606c5b019eb0bb90f19ed3278362327c3a5b": "a11033e50106b7e366c2d91335aa8ca1",
".git/objects/42/db9da330e4d7b204427cbf1b12f5391c4bba1d": "3185116209b383fe473080ed68c8c55f",
".git/objects/3b/0396ce40b7f47885ea27c05490080b1bfa50d0": "855d74f9ea140baa502a5dc14d3b7611",
".git/objects/5c/14ccbf540ace7c1f3886a90ef558d60281cf1a": "1f0a83eca232d6cef87a50840c9b4e4d",
".git/objects/d9/e7dfdc09a0d31fcb2b0aa3e326160a70b9381b": "8dfe81fa2b0923a029ab47c24ccbd807",
".git/objects/d9/fa35427f795503e62037356c7d632975fa4a60": "aca0c92d37066d94a457ec780ae09b0b",
".git/objects/53/ed59b330e03f0f8b0f701d1bd769ae6f451300": "afeb1bd94fbb97b7314c8f0e6a1ca2ed",
".git/objects/53/1041a4f82ca8fb312d3d4dca27f5f692111753": "ecfee21658e87dd6f3d0232c7f9b35bc",
".git/objects/b2/2d7c9ad382b04a88141e07caf675c2e5f396aa": "81a2b33400d7ca71754601b46f81a339",
".git/objects/36/63cd75607bdf49324b50a48de6e402420a1a51": "8939493be07b8c5280c137ead77dd119",
".git/objects/cd/a1e516f2e90422187f98f360a19f24c18bcd4c": "a2ead895f7e1631587d90456f6760735",
".git/objects/1a/ddac9391ef57b55bfba464902abbbb90b51218": "a0864e9697adf5365a19f59d93d30236",
".git/objects/77/35366a2a55caa1761130a7fa50d17013441e9f": "12b81bf53f9c20f791bd5efcc59076dd",
".git/objects/23/4ecfefae91044b45f0c3d46f756ddeb64ad8c9": "03cc80592f950d7b91cf2c5f2e259706",
".git/objects/18/a4e56ec0dc962f9a4e5a3105e25cfedba34c4e": "80d553814a1bd3833d3e2e0d9b6df4d1",
".git/objects/00/d6293f7a22cb14da47f4d70d15eae01ba18f80": "58d1639967e0bd8753d04425d493737b",
".git/objects/0c/7e6b84b7abde07aef07c60be62352c14f0c21b": "e1a5753f5dc08fa95fc38da168a233c5",
".git/objects/04/094f77dbc389e0265493ad7fd7db5b5118ddec": "1313705a6c67f09f3a8c9428c7e758cd",
".git/objects/b4/31c68aa9723e88716026c9fb4c4e4bd6d45f41": "cd434aacab7570b68a774e4eae1c039d",
".git/objects/c7/6d1a2e8d7d9ad28c2201dc30c9cc1e413e412e": "8142b9256df511ce87848c13071c4063",
".git/objects/27/3f2af24f9a274e49e3e3e1b38affc04bb79c38": "5e722314eb76dae91b1e4ebc5f5e1250",
".git/objects/ab/e7de3bee7309f96adbe2db2e7a7c7991f1417b": "06e83301925bcd498f735b1bd5ec2b1b",
".git/objects/30/b179b098df8481ab29600de90017fecd8d36af": "b0beef5540a65e90ca7041c971bbf45f",
".git/objects/85/5e6fab0744bece088fc9478f2e15f80a581093": "494d66e06b8abaeb5d7187c0150c6097",
".git/COMMIT_EDITMSG": "bdc812fad0248f8947c96aea1b4274b9",
".git/logs/HEAD": "3d6e411c17f2e08d230a66b8142c9924",
".git/logs/refs/heads/main": "bbaf08effff4a901ca64bb4e9789c3a6",
".git/logs/refs/remotes/origin/main": "c4dd4aaa5845aadadb3daab9dfaf76e0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "54ea37c2cebd723131bbc7cc4058a029",
".git/FETCH_HEAD": "a5ac2770ca60072596b3f7637bbc9ceb",
".git/ORIG_HEAD": "49f1985cc13e6ea20a768973ddbbd9f1",
".git/index": "233e61afac1a6b2cd5233d739bcb0724",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js": "3904f9cd1449b39c727edd48648fe175",
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
