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
    "revision": "46c2c1bd014d0f30076e645a011ed18a"
  },
  {
    "url": "about/index.html",
    "revision": "39ea2ba1460535c5387b2c30cc7e8e5b"
  },
  {
    "url": "assets/css/0.styles.211a52b2.css",
    "revision": "757634af395ab4da80e490e1a3c24967"
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
    "url": "assets/js/11.bf92e466.js",
    "revision": "903f2800348c5ee00fa2b65709c6d47d"
  },
  {
    "url": "assets/js/12.b3bfd2b0.js",
    "revision": "f39f88b685935b683f46341934252d71"
  },
  {
    "url": "assets/js/13.2e95a4fd.js",
    "revision": "e089d4826ed2e11f8eb82b80c8c516ef"
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
    "url": "assets/js/16.b04f3fc1.js",
    "revision": "32aef659d2641f2016c5cd80a59a29a2"
  },
  {
    "url": "assets/js/17.d782c3f4.js",
    "revision": "1ec9639e75562b7d7061e520ee2154e5"
  },
  {
    "url": "assets/js/18.f2806ad3.js",
    "revision": "0cb3927d7ae54a8451bff2634e3e545b"
  },
  {
    "url": "assets/js/19.b2261b8c.js",
    "revision": "1c22fae4b74d72218a1c6c6e2f7d7a2c"
  },
  {
    "url": "assets/js/20.9479d377.js",
    "revision": "9810a0a71c5e1cd795d9f05eaac6704a"
  },
  {
    "url": "assets/js/21.0e75732a.js",
    "revision": "58cc3c8f82d92c8f8b8e3b4b493255b6"
  },
  {
    "url": "assets/js/22.3b88fa30.js",
    "revision": "3791e11fa9d4bc1073991127c40ea416"
  },
  {
    "url": "assets/js/23.b17afcb5.js",
    "revision": "d84ac308d7d0239eefa00de0802af65e"
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
    "url": "assets/js/app.442a9159.js",
    "revision": "83c330b2b66d179da9684e084de93827"
  },
  {
    "url": "avatar.jpg",
    "revision": "45a24472361faa09b431bc062ed996d1"
  },
  {
    "url": "blogs/Bugfix/2018/121501.html",
    "revision": "ae125c2ae39d8b05a8d9e0dbbef36425"
  },
  {
    "url": "blogs/Bugfix/2019/092101.html",
    "revision": "aaf6878ec80a3d2176b637e6a879b656"
  },
  {
    "url": "blogs/Feeling/2016/121501.html",
    "revision": "00c846b05bad0508f5be74487268c8c6"
  },
  {
    "url": "blogs/Feeling/2017/092101.html",
    "revision": "2adc5577e7faabef591a34a241427d6c"
  },
  {
    "url": "blogs/other/first.html",
    "revision": "abe05b1a62344a4d4e8e155a3e55941f"
  },
  {
    "url": "categories/Bugfix/index.html",
    "revision": "03140d8cf75504ae1ec607ad0ecb5ee4"
  },
  {
    "url": "categories/index.html",
    "revision": "9b3e68f8262c4649f7251a1dfee97d80"
  },
  {
    "url": "categories/Life perception/index.html",
    "revision": "2317b0db68c9c794c5ad68eaab89e835"
  },
  {
    "url": "categories/博文/index.html",
    "revision": "fffb2b7fdf003438c52812121ce42ab4"
  },
  {
    "url": "index.html",
    "revision": "a8108df94c5026dd9ccba463b5f449f3"
  },
  {
    "url": "Interview/Html+Css/Html5+Css3.html",
    "revision": "cdf0618da07b02178cdfa02940441761"
  },
  {
    "url": "Interview/index.html",
    "revision": "99cb8146cc0d4577ebd5b75152495f72"
  },
  {
    "url": "Interview/JavaScript/JavaScript.html",
    "revision": "9c70db9c8800153d165f3baa38596c2a"
  },
  {
    "url": "logo.png",
    "revision": "0ce0e4962aed92d9d4eae83a75d981f2"
  },
  {
    "url": "notes/Css3/css.html",
    "revision": "42625e6e5777af42c2d4a97c99ea88de"
  },
  {
    "url": "notes/Html5/html.html",
    "revision": "e25f0d86a086de5847850d8e42584d04"
  },
  {
    "url": "notes/index.html",
    "revision": "a306ec73b42f24b590fe76225c2562e0"
  },
  {
    "url": "notes/Javascript/javascript.html",
    "revision": "4fe3725cc50dd4ec037fb57b8bb932ce"
  },
  {
    "url": "tag/Bug解决方案/index.html",
    "revision": "33a2047dd76187d59020e0205cf2b0f6"
  },
  {
    "url": "tag/index.html",
    "revision": "5d387ec038524304c01d2b4ed5a50215"
  },
  {
    "url": "tag/日常/index.html",
    "revision": "5fbbdffa8b7bcf78a7009b8e925ee107"
  },
  {
    "url": "tag/生活感/index.html",
    "revision": "c5a2900ba0176e8e3cd50ff9772fb839"
  },
  {
    "url": "timeline/index.html",
    "revision": "3da1cdc7cb26cf959e8bb4a07ac125d6"
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
