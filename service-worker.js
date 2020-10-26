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
    "revision": "29fa9a9311e57cd2defc203d440e0e55"
  },
  {
    "url": "about/index.html",
    "revision": "81d410084f0d89a00227e8148ed55746"
  },
  {
    "url": "assets/css/0.styles.a109df2f.css",
    "revision": "96400d86e2f0145a012016644a04c9a5"
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
    "url": "assets/js/12.a5592f7d.js",
    "revision": "97f9c5b7c18839bb4b6105003a8c951e"
  },
  {
    "url": "assets/js/13.bdb68017.js",
    "revision": "3127280dc0fe18e07a549f5a0d1ecf6e"
  },
  {
    "url": "assets/js/14.aa90a7e0.js",
    "revision": "eda971ff487da3e7ff1f392270df1571"
  },
  {
    "url": "assets/js/15.37c8c118.js",
    "revision": "1b2497e3dd56bb8e37e854af31cfa7ae"
  },
  {
    "url": "assets/js/16.7830ebec.js",
    "revision": "6fed6d807e126e44411f43e4772e5ccd"
  },
  {
    "url": "assets/js/17.36c17473.js",
    "revision": "2d8b4bb15a65e1675c8f49da9e26d138"
  },
  {
    "url": "assets/js/18.1902ff36.js",
    "revision": "c7a07345171954936b1134e67454ee40"
  },
  {
    "url": "assets/js/19.f30c6439.js",
    "revision": "00cd95743478fa3bc6f8b0510633eb0e"
  },
  {
    "url": "assets/js/20.017d9b85.js",
    "revision": "b147b1c809331ad2c2f749b033f3e9c8"
  },
  {
    "url": "assets/js/21.6fa7f08c.js",
    "revision": "33e5b8d6b7562fa55dcb68521c740dc4"
  },
  {
    "url": "assets/js/22.2bd747ca.js",
    "revision": "738cb968c4c2600f46534203179930d7"
  },
  {
    "url": "assets/js/23.4df2c49e.js",
    "revision": "e2dc81750236322985f812ba42a6713c"
  },
  {
    "url": "assets/js/24.bd43e03a.js",
    "revision": "496d3cb4f6adc931ab609e42cfc53359"
  },
  {
    "url": "assets/js/25.821637be.js",
    "revision": "39d605f53304eb7333d824ca89e44363"
  },
  {
    "url": "assets/js/26.f53434fd.js",
    "revision": "886f03ba46bce34cf7aacca6cd06d9b4"
  },
  {
    "url": "assets/js/27.6d6572e8.js",
    "revision": "571637d17cee369c47344a8455cbaa7e"
  },
  {
    "url": "assets/js/3.92bba1c6.js",
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
    "url": "assets/js/9.f9265451.js",
    "revision": "b1a44cf2bdbc6b83b22ee15778037fe5"
  },
  {
    "url": "assets/js/app.41dced6d.js",
    "revision": "9fe6e7eab0a83c167e08682a69285aeb"
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
    "revision": "efc6028ad550cec8812b294db2aee7a6"
  },
  {
    "url": "blogs/Bugfix/2019/092101.html",
    "revision": "bec4a4b7e388550ad72ac867a58815c6"
  },
  {
    "url": "blogs/Feeling/2016/121501.html",
    "revision": "02f8834da641b5d659613d79f30780a5"
  },
  {
    "url": "blogs/Feeling/2017/092101.html",
    "revision": "5fac50854a8819489fe0ddc00f569af7"
  },
  {
    "url": "blogs/other/first.html",
    "revision": "461ef83556fdf1198d971c574f3002ec"
  },
  {
    "url": "categories/Bugfix/index.html",
    "revision": "197a828532b148fceab5f8b9ed9ee2d4"
  },
  {
    "url": "categories/index.html",
    "revision": "b096fc8a536b98ebcc58abf209340f83"
  },
  {
    "url": "categories/Life perception/index.html",
    "revision": "c1a77fe735784805d8c922c0554581f4"
  },
  {
    "url": "categories/博文/index.html",
    "revision": "2a4c5a1ed5bf7b41364985e9be919617"
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
    "revision": "0b68064bca970b6753d874a90df6a7f4"
  },
  {
    "url": "Interview/Html+Css/Html5+Css3.html",
    "revision": "e794e8ae58eb5f36bf608a088d0175da"
  },
  {
    "url": "Interview/index.html",
    "revision": "ad59070bd26f12491ad0cd5a39dab503"
  },
  {
    "url": "Interview/JavaScript/JavaScript.html",
    "revision": "3014066c316eaf040c7767b22d7440f2"
  },
  {
    "url": "logo.png",
    "revision": "0ce0e4962aed92d9d4eae83a75d981f2"
  },
  {
    "url": "notes/Css3/css.html",
    "revision": "bed169bccc67adee6d5ef39f98265c35"
  },
  {
    "url": "notes/Html5/html.html",
    "revision": "14f8e599e4a4d33a88c95d504fb1da51"
  },
  {
    "url": "notes/Html5/html5.html",
    "revision": "d163f344263aacc58db87eac87bf08b2"
  },
  {
    "url": "notes/index.html",
    "revision": "8b063a0cbdc40d8a3847faa18b601e27"
  },
  {
    "url": "notes/Javascript/javascript_basis.html",
    "revision": "7d6b6465d0c85e564ef7229b7ea3ede1"
  },
  {
    "url": "notes/Javascript/javascript_max.html",
    "revision": "543f20cad78b2db48323201e2c40df8b"
  },
  {
    "url": "notes/TypeScript/typescript.html",
    "revision": "535103fe68e352e84212dfc4498b25d4"
  },
  {
    "url": "tag/Bug解决方案/index.html",
    "revision": "9ea5cd0926c8aa641c7d7758aebc0e6a"
  },
  {
    "url": "tag/index.html",
    "revision": "e8a19238b265373eaeac0d58003ec664"
  },
  {
    "url": "tag/JavaScript[basis]/index.html",
    "revision": "2cae616c3285d224a0fbe9bb49cb20c1"
  },
  {
    "url": "tag/JavaScript[max]/index.html",
    "revision": "a3dc1043834679e510d132c93dc3f3f9"
  },
  {
    "url": "tag/TypeScript[basis]/index.html",
    "revision": "c3f18c263cabea0c2cc4237fbcd81330"
  },
  {
    "url": "tag/日常/index.html",
    "revision": "97af160248a037c98f87c6e01022c976"
  },
  {
    "url": "tag/生活感/index.html",
    "revision": "ff06f6a4d78f8dd979aa24a4d816aa31"
  },
  {
    "url": "timeline/index.html",
    "revision": "a9a0330c5a473afe51e282056b21cad8"
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
