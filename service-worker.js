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
    "revision": "eaf6fe99d361af07c93a93c10da2b738"
  },
  {
    "url": "about/index.html",
    "revision": "156a74fe161c32abd6275abce07cec3f"
  },
  {
    "url": "assets/css/0.styles.dc74f534.css",
    "revision": "97f01082c470519fe2a3fbdda8b24066"
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
    "url": "assets/js/1.58bb6475.js",
    "revision": "cedf5d20390247305bcdd22113bcd50e"
  },
  {
    "url": "assets/js/10.b80417c3.js",
    "revision": "501e07a905a934053afed25eaa1dbdf0"
  },
  {
    "url": "assets/js/11.0fc38194.js",
    "revision": "cb0d622bed6a603cfa207afee6937093"
  },
  {
    "url": "assets/js/12.23f96061.js",
    "revision": "04136f9617ea1d950cb0458026071345"
  },
  {
    "url": "assets/js/13.897dadfb.js",
    "revision": "b5087c1bcf0a0d7ffccfacd2796964e7"
  },
  {
    "url": "assets/js/14.8028d46b.js",
    "revision": "6626c43223e5c2c062be7b67099e9670"
  },
  {
    "url": "assets/js/15.a0a88ed4.js",
    "revision": "275f068757540ccf93f5010dbac85596"
  },
  {
    "url": "assets/js/16.e7c88323.js",
    "revision": "053803877027d737a094273f223d3de6"
  },
  {
    "url": "assets/js/17.0ac6bbf4.js",
    "revision": "ad0cdc03446a99fd64137784e9b52a27"
  },
  {
    "url": "assets/js/18.22e17173.js",
    "revision": "689730260dee2507c48aa46bd88d3262"
  },
  {
    "url": "assets/js/19.fb686249.js",
    "revision": "f6d7169dde176f91dc9461e6575eb2bf"
  },
  {
    "url": "assets/js/20.c4df8ba1.js",
    "revision": "29b563fb47f94b5df0bd816b2da9029c"
  },
  {
    "url": "assets/js/21.27ff48a4.js",
    "revision": "f63f98619e66ff85004e2ec92e41a921"
  },
  {
    "url": "assets/js/22.ce7a6b4f.js",
    "revision": "2a1b4c9db458b2c02d67887ba569d22c"
  },
  {
    "url": "assets/js/23.c9c14921.js",
    "revision": "81b2bb83598d68e74aa8195238172761"
  },
  {
    "url": "assets/js/24.f5c3a5bb.js",
    "revision": "87945692ed02a027e022de326c35725c"
  },
  {
    "url": "assets/js/25.8741c09a.js",
    "revision": "f36a7fdeb127c58ed7f18a969e7ed927"
  },
  {
    "url": "assets/js/26.24348f78.js",
    "revision": "dea0445a13055cc814eda8b18c771f4c"
  },
  {
    "url": "assets/js/27.37c8384f.js",
    "revision": "697c2267b13182e894e7ae1b05b495d7"
  },
  {
    "url": "assets/js/3.ee027652.js",
    "revision": "0c8457694bfd6857f7b612121bdc9822"
  },
  {
    "url": "assets/js/4.deeb2ccd.js",
    "revision": "92be72c8521bf7ead6fc68452ecaa2f6"
  },
  {
    "url": "assets/js/5.2e4ee3bc.js",
    "revision": "c2eff19d86e2d779affaafefa4525edf"
  },
  {
    "url": "assets/js/6.1b717280.js",
    "revision": "c6ca6cd70f07ff87fbf6a9197f461766"
  },
  {
    "url": "assets/js/7.6cfb4029.js",
    "revision": "ccb9cd8e160b475bdccdbedefea3fe66"
  },
  {
    "url": "assets/js/8.7e2c6b0f.js",
    "revision": "284dd6c82f9e0329ae6ad0c28a5c2ca6"
  },
  {
    "url": "assets/js/9.74d3dd21.js",
    "revision": "f6f1351ea44a0ef8e92afa89704984f9"
  },
  {
    "url": "assets/js/app.471be3c8.js",
    "revision": "e1a4f1c95919bd9c1a32453005de14a3"
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
    "revision": "d7ac6a3bee9d676269898f2eb196b744"
  },
  {
    "url": "blogs/Bugfix/2019/092101.html",
    "revision": "18ebdcebf9c2fc1a4bc80841bff90dff"
  },
  {
    "url": "blogs/Feeling/2016/121501.html",
    "revision": "9b148677c245a9dcc48b5111df0e049c"
  },
  {
    "url": "blogs/Feeling/2017/092101.html",
    "revision": "9a587536595380c8728207dd38feb991"
  },
  {
    "url": "blogs/other/first.html",
    "revision": "6c2643184f0d2962e2faed156455838a"
  },
  {
    "url": "categories/Bugfix/index.html",
    "revision": "37936a442cf95dd950fcc88d58a0d7ef"
  },
  {
    "url": "categories/index.html",
    "revision": "ed3c7c0336dfa2bdcbb682931c209cd4"
  },
  {
    "url": "categories/Life perception/index.html",
    "revision": "11bf6a8f18b7f2193516ad565548aeaa"
  },
  {
    "url": "categories/博文/index.html",
    "revision": "08448d6dcaa058ae5bd54ff8245cdd34"
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
    "revision": "d6703ab71dfae0497ae810e6bfdf0b84"
  },
  {
    "url": "Interview/Html+Css/Html5+Css3.html",
    "revision": "cfc0dec747d47a7c224dbee90a5b2569"
  },
  {
    "url": "Interview/index.html",
    "revision": "8806c049ae41caf111e3b24999111104"
  },
  {
    "url": "Interview/JavaScript/JavaScript.html",
    "revision": "6c2f25b1f11f03bf9d037dad4f243da4"
  },
  {
    "url": "logo.png",
    "revision": "0ce0e4962aed92d9d4eae83a75d981f2"
  },
  {
    "url": "notes/Css3/css.html",
    "revision": "2b546ef1753f23aef53b418844b81327"
  },
  {
    "url": "notes/Html5/html.html",
    "revision": "63f9f5463b23e1aeec3bd6dcf3ac2573"
  },
  {
    "url": "notes/Html5/html5.html",
    "revision": "b414d914f3668d7c715988d3215af6d3"
  },
  {
    "url": "notes/index.html",
    "revision": "a464fbddf15668c2ecd5197b1467116a"
  },
  {
    "url": "notes/Javascript/javascript_basis.html",
    "revision": "255d80c25f2277faf5cea0a6111f1225"
  },
  {
    "url": "notes/Javascript/javascript_max.html",
    "revision": "faf0c4b0ca8d21e44a371543fe59ca5c"
  },
  {
    "url": "notes/TypeScript/typescript.html",
    "revision": "4e0032cdd5795558948afc3ce39ad478"
  },
  {
    "url": "tag/Bug解决方案/index.html",
    "revision": "dadb9583a5a9f74cbc8481baf67d17ec"
  },
  {
    "url": "tag/index.html",
    "revision": "9bc92e05f4d58ff35efcb2a6a42dd79d"
  },
  {
    "url": "tag/JavaScript[basis]/index.html",
    "revision": "a56939daa3231c62d36302c2a5702516"
  },
  {
    "url": "tag/JavaScript[max]/index.html",
    "revision": "4f44657fcd1ad00f812402d4cf96c179"
  },
  {
    "url": "tag/TypeScript[basis]/index.html",
    "revision": "a003d08b956fa8aef99f5afd48a6f843"
  },
  {
    "url": "tag/日常/index.html",
    "revision": "6ae4bd9988c0989dff8ff67a886fb092"
  },
  {
    "url": "tag/生活感/index.html",
    "revision": "d60be48de77eb08e2957846a207a20a7"
  },
  {
    "url": "timeline/index.html",
    "revision": "e52681722c587a384a4b09ad3466f47a"
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
