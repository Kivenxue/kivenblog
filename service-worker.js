/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "48d42b7bda60c761d664550ec374b0d8"
  },
  {
    "url": "about/index.html",
    "revision": "d705fc75484a6fc8ef7cb4ac2ef9a1e0"
  },
  {
    "url": "assets/css/0.styles.03430559.css",
    "revision": "bb1861cf1f19c2bfd31367a8d49f69eb"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.e1fdcf98.js",
    "revision": "3006ab48ac88aef4d3e315a87325e7fc"
  },
  {
    "url": "assets/js/10.858f5fe0.js",
    "revision": "6e403eb2df47b592b9ccc537b92ca329"
  },
  {
    "url": "assets/js/11.244dcefc.js",
    "revision": "1d83610b4635cf50507f0cd4be296e43"
  },
  {
    "url": "assets/js/12.e0e293e1.js",
    "revision": "fcba33e8a442acc3a34466e63e5edee2"
  },
  {
    "url": "assets/js/13.0064fa34.js",
    "revision": "b16ca9459d4764282f05687a53f6544a"
  },
  {
    "url": "assets/js/14.fa9abcc7.js",
    "revision": "d13a3ee912e437fcefb5d4d5cd973f78"
  },
  {
    "url": "assets/js/15.103e8c94.js",
    "revision": "d288e11f05ad6f72ad2fcb1c8323ad95"
  },
  {
    "url": "assets/js/16.f401e63a.js",
    "revision": "78e328b51ea48992bcfdfa1a7fbdebb0"
  },
  {
    "url": "assets/js/17.36c17473.js",
    "revision": "2d8b4bb15a65e1675c8f49da9e26d138"
  },
  {
    "url": "assets/js/18.5c1d1625.js",
    "revision": "6cadafefeefd3dcc3303261efd57803a"
  },
  {
    "url": "assets/js/19.c7ee4c3c.js",
    "revision": "00974bdb7e7e307c552caf0cfc96fb02"
  },
  {
    "url": "assets/js/20.4d854fbf.js",
    "revision": "6056ac48b8e0f54499238360c7931559"
  },
  {
    "url": "assets/js/21.0bda2f30.js",
    "revision": "84557a8e6e26b7275179c8ced58b986f"
  },
  {
    "url": "assets/js/22.5484fc27.js",
    "revision": "3ade4c89a0a7c004050427e3274aa1e2"
  },
  {
    "url": "assets/js/23.b5c0d9a1.js",
    "revision": "24740c7b2ca336784bf8eef514c62bbf"
  },
  {
    "url": "assets/js/24.74090827.js",
    "revision": "d4847dd692c9819e6e6fc19151a282f0"
  },
  {
    "url": "assets/js/25.3dd13354.js",
    "revision": "9475442f094c7cae705557879701a445"
  },
  {
    "url": "assets/js/26.441115dd.js",
    "revision": "486f4cc6b2177d4bd581b0b67f4f0df3"
  },
  {
    "url": "assets/js/27.778da2c0.js",
    "revision": "fe13ca4e0d0058d17bff30470cf7278e"
  },
  {
    "url": "assets/js/28.45143b1a.js",
    "revision": "8016121cafc67d7082150f4bef366fb6"
  },
  {
    "url": "assets/js/3.03a1a095.js",
    "revision": "fe6e454dddae0d663a3e21c9ae98f252"
  },
  {
    "url": "assets/js/4.67de951c.js",
    "revision": "cbe229e97fc986d8cfffac9e6d23245a"
  },
  {
    "url": "assets/js/5.4452e821.js",
    "revision": "df8925dd6ce5ca8852b73f9439b3101c"
  },
  {
    "url": "assets/js/6.5ceba33a.js",
    "revision": "78e95a3baaccad54906c8e32634e20e4"
  },
  {
    "url": "assets/js/7.0c039431.js",
    "revision": "89609fcd59ba6728431dc1abc1cdf2c0"
  },
  {
    "url": "assets/js/8.7fc5536e.js",
    "revision": "dadb162163bd219a19c0168e20b92e1b"
  },
  {
    "url": "assets/js/9.6d34b20f.js",
    "revision": "391c9ce117a3ce7f9697931ce2b2c5e4"
  },
  {
    "url": "assets/js/app.11c7f476.js",
    "revision": "c062193e14eb55590029027fbaa28ae4"
  },
  {
    "url": "avatar.jpg",
    "revision": "f946117f0297982c963a13e56f5eae90"
  },
  {
    "url": "bg1.jpg",
    "revision": "356508fac5747aab398743063f4cb9ea"
  },
  {
    "url": "blogs/Bugfix/2018/121501.html",
    "revision": "e3533a954870a0e1cb83d49876ae0c03"
  },
  {
    "url": "blogs/Bugfix/2019/092101.html",
    "revision": "12ea23eb0f73917fa33d7e03dacac085"
  },
  {
    "url": "blogs/Feeling/2016/121501.html",
    "revision": "4ff699682491c66e7e924245a65b1ac4"
  },
  {
    "url": "blogs/Feeling/2017/092101.html",
    "revision": "6b5571e74c0069f5b2ed3af691e3b387"
  },
  {
    "url": "blogs/other/first.html",
    "revision": "e24fa1b0c5977921e7a9f82d0f106c13"
  },
  {
    "url": "categories/Bugfix/index.html",
    "revision": "167c25ba38ab04d656a889488d7517af"
  },
  {
    "url": "categories/index.html",
    "revision": "8b3184f0e81e0f1dbbfd323c0c210865"
  },
  {
    "url": "categories/Life perception/index.html",
    "revision": "6daec3720420db508bc002d3dbc609b5"
  },
  {
    "url": "categories/博文/index.html",
    "revision": "0b858faac8346ae7d8a2e02f01a129ea"
  },
  {
    "url": "chrome-pwa-icon/chrome-192x192.png",
    "revision": "a969f3640e466d21f688891f45515075"
  },
  {
    "url": "chrome-pwa-icon/chrome-256x256.png",
    "revision": "98ae30e488646725dcaf0938162b10b8"
  },
  {
    "url": "index.html",
    "revision": "3c66c6d7b96c51ac82286f3a1c4a8f7c"
  },
  {
    "url": "Interview/Html+Css/Html5+Css3.html",
    "revision": "4cc37eadd10a47bc5979fc14b80da01b"
  },
  {
    "url": "Interview/index.html",
    "revision": "1054ba6f3a01853beb74cf035dc5d121"
  },
  {
    "url": "Interview/JavaScript/JavaScript.html",
    "revision": "e1058d24898feb26ffa630a6caca662a"
  },
  {
    "url": "logo.png",
    "revision": "0ce0e4962aed92d9d4eae83a75d981f2"
  },
  {
    "url": "notes/Css3/css.html",
    "revision": "2c1de528f361415e0ef188588decce87"
  },
  {
    "url": "notes/Flutter/flutter.html",
    "revision": "e15d037e723bb5d4b342ce7eaacf772d"
  },
  {
    "url": "notes/Html5/html.html",
    "revision": "f327d4d9d13a1adb0728e0980268d80b"
  },
  {
    "url": "notes/Html5/html5.html",
    "revision": "7ac233eda3ad26a6ab6a5ea099dd8853"
  },
  {
    "url": "notes/index.html",
    "revision": "a1884d5777e787a58ef397e1d3679933"
  },
  {
    "url": "notes/Javascript/javascript_basis.html",
    "revision": "14beae28ec0e939fc00390a4f39062be"
  },
  {
    "url": "notes/Javascript/javascript_max.html",
    "revision": "53d84cd13e685c5c716c5c4e93dfbe23"
  },
  {
    "url": "notes/TypeScript/typescript.html",
    "revision": "0fd36caaaa13af6c65ab1afce2b9ecc6"
  },
  {
    "url": "tag/Bug解决方案/index.html",
    "revision": "43b3472f9ab59eb3fb2e40c5ec74eb16"
  },
  {
    "url": "tag/Flutter[basis]/index.html",
    "revision": "72225d9f452a220cc2276d966137ee03"
  },
  {
    "url": "tag/index.html",
    "revision": "0f954d6229478192112cb1c330f9bfcd"
  },
  {
    "url": "tag/JavaScript[basis]/index.html",
    "revision": "af92d6313a85ad9d0e1fd01529af237e"
  },
  {
    "url": "tag/JavaScript[max]/index.html",
    "revision": "389de574de1c69580f4a9c6a841dbbca"
  },
  {
    "url": "tag/TypeScript[basis]/index.html",
    "revision": "48179da7ad404e0dda5c35398e21e9e3"
  },
  {
    "url": "tag/日常/index.html",
    "revision": "a4a848d559f5b8752f69721e030e9ccf"
  },
  {
    "url": "tag/生活感/index.html",
    "revision": "d55e9da45cd873526ffb50e5a489ba44"
  },
  {
    "url": "timeline/index.html",
    "revision": "7f19a19b193c474dfdf8f0b065bd06fb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
