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
    "revision": "23e70aa09e2be598dcbc3cbc18a565d0"
  },
  {
    "url": "about/index.html",
    "revision": "76236e87e1d3944775d5c37e8dda6f2d"
  },
  {
    "url": "assets/css/0.styles.a79cc79a.css",
    "revision": "142076522810b97d7263b80863f804fb"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.934d42e1.js",
    "revision": "b8687b99a446a655bf1a4bfd6f895344"
  },
  {
    "url": "assets/js/10.373d365b.js",
    "revision": "782c885f534c66b02cabaed53ab7437e"
  },
  {
    "url": "assets/js/11.1c04fc82.js",
    "revision": "5c2ab6074a5beefd7886e0de14a34c9a"
  },
  {
    "url": "assets/js/12.0d75f84c.js",
    "revision": "7a93ba3b9e7136c150cb85b67b6dfe1f"
  },
  {
    "url": "assets/js/13.75f125f7.js",
    "revision": "6cb997d9e8f598816b5789e378705a97"
  },
  {
    "url": "assets/js/14.507faa64.js",
    "revision": "4241eb1501cf483b6e09cb5a89b747ca"
  },
  {
    "url": "assets/js/15.1e410d53.js",
    "revision": "1b86330ccad0338519df71be5142c6f0"
  },
  {
    "url": "assets/js/16.7fba926b.js",
    "revision": "dd2c11d54da680cfd80ecb2015cd6c9f"
  },
  {
    "url": "assets/js/17.9d22d4fc.js",
    "revision": "554f4482d27b61bea2d3e395c6d0854c"
  },
  {
    "url": "assets/js/18.3424fd03.js",
    "revision": "630b06d2c1f9a0d07f954b45790879df"
  },
  {
    "url": "assets/js/19.3d0f0e12.js",
    "revision": "cb686b526ca3d11f100c89e325a47556"
  },
  {
    "url": "assets/js/20.36be3ef8.js",
    "revision": "eb14f7be7342c4f2f1fd2c14c39399fd"
  },
  {
    "url": "assets/js/21.7933e650.js",
    "revision": "aaf1f5c62191264d6f89e06688cac307"
  },
  {
    "url": "assets/js/22.3b88fa30.js",
    "revision": "3791e11fa9d4bc1073991127c40ea416"
  },
  {
    "url": "assets/js/23.dd22a439.js",
    "revision": "bd9efa7ca2d44cc3c6b31dd1be9b0d3b"
  },
  {
    "url": "assets/js/24.6cbb2cea.js",
    "revision": "0f4b17b42d8e2636652bab37d3825edf"
  },
  {
    "url": "assets/js/3.b3bf4910.js",
    "revision": "0d5bce20bb68825818b8f6411530c476"
  },
  {
    "url": "assets/js/4.e5f4fe42.js",
    "revision": "6a77e26c98c3257b06499ba8908eded1"
  },
  {
    "url": "assets/js/5.bcf490ce.js",
    "revision": "cbd21901484bcd0de55772aaafa0f1e9"
  },
  {
    "url": "assets/js/6.46062c0d.js",
    "revision": "e91b89806e201b2f88fc0b9b3f6c5d68"
  },
  {
    "url": "assets/js/7.b63c691e.js",
    "revision": "0ab9705fdffe5eafb896b3ed7e6e7ff0"
  },
  {
    "url": "assets/js/8.68772c5a.js",
    "revision": "aa69a824a492d4da776267408bb4e0eb"
  },
  {
    "url": "assets/js/9.926425dd.js",
    "revision": "463d724d2d7cdc29470468516098b7b5"
  },
  {
    "url": "assets/js/app.a3e72db9.js",
    "revision": "f5ed04d013a7223fbabcf957173260ec"
  },
  {
    "url": "avatar.jpg",
    "revision": "45a24472361faa09b431bc062ed996d1"
  },
  {
    "url": "blogs/Bugfix/2018/121501.html",
    "revision": "53cd0b0dd944bdeb69a3080fb421d3a3"
  },
  {
    "url": "blogs/Bugfix/2019/092101.html",
    "revision": "db983bbfaef944b8b559ad2e18b47437"
  },
  {
    "url": "blogs/Feeling/2016/121501.html",
    "revision": "403df9b36747ccb1347c48634133d30e"
  },
  {
    "url": "blogs/Feeling/2017/092101.html",
    "revision": "7ec344b613ede8358ca929ea97716728"
  },
  {
    "url": "blogs/other/first.html",
    "revision": "ae6d295d6068a8393496aec78ebb38e2"
  },
  {
    "url": "categories/Bugfix/index.html",
    "revision": "ff0288c6c54f6f91d65b319b6aead4a1"
  },
  {
    "url": "categories/index.html",
    "revision": "741b7d9dad4588c97c597489e2b43a5a"
  },
  {
    "url": "categories/Life perception/index.html",
    "revision": "e8d43e069b4313e1e9410ecb273ff350"
  },
  {
    "url": "categories/博文/index.html",
    "revision": "e569a9c4eaf95062df796d0d160d00d6"
  },
  {
    "url": "index.html",
    "revision": "fb4e66e9fc0ce074181436da374328cf"
  },
  {
    "url": "Interview/Html+Css/Html5+Css3.html",
    "revision": "81e9e0ac488ac239278f8593bfb0beee"
  },
  {
    "url": "Interview/index.html",
    "revision": "66353c64e15e70ec8aa8a0e9de560a4d"
  },
  {
    "url": "Interview/JavaScript/JavaScript.html",
    "revision": "e68b72e1a17bae2a1e1c13ca3e3c3ede"
  },
  {
    "url": "logo.png",
    "revision": "0ce0e4962aed92d9d4eae83a75d981f2"
  },
  {
    "url": "notes/Css3/css.html",
    "revision": "4b055db7665e66058fc32fc1a1f065dc"
  },
  {
    "url": "notes/Html5/html.html",
    "revision": "8697f130be55a90a2a1ad3f9a21ea10c"
  },
  {
    "url": "notes/index.html",
    "revision": "9d6753e008c406644d2feac20d5693b1"
  },
  {
    "url": "notes/Javascript/javascript.html",
    "revision": "7ee19827b304f83f2b3ed10639f10cf6"
  },
  {
    "url": "tag/Bug解决方案/index.html",
    "revision": "3a8414d39c0bf4e633c0af27a7ee0343"
  },
  {
    "url": "tag/index.html",
    "revision": "1268c688efb4a7878b9a585406c8b38e"
  },
  {
    "url": "tag/日常/index.html",
    "revision": "02743f78ad34415188471d41a55a66bd"
  },
  {
    "url": "tag/生活感/index.html",
    "revision": "5383b503118dfceab2fd1d736ba46d2f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b059362300400349906796fa7f2566d6"
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
