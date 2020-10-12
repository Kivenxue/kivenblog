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
    "revision": "1605339ee83d928f0bc75a477d87baaf"
  },
  {
    "url": "about/index.html",
    "revision": "0910d55ad825ef980e049a1ee8bd41cc"
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
    "url": "assets/js/12.14b516f4.js",
    "revision": "2cfd1e778739ce14e32ca7c348cdd67b"
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
    "url": "assets/js/21.c5b59f87.js",
    "revision": "68421963a995101dacc3da6e7776c8b3"
  },
  {
    "url": "assets/js/22.495253fd.js",
    "revision": "b9f2e5111b9c48ab400b892aa3fc39e7"
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
    "url": "assets/js/app.2de41e91.js",
    "revision": "48640597774d8323a6977332415e9a43"
  },
  {
    "url": "avatar.jpg",
    "revision": "45a24472361faa09b431bc062ed996d1"
  },
  {
    "url": "blogs/Bugfix/2018/121501.html",
    "revision": "03ae1946d58de4004dce9cbd6f23e26a"
  },
  {
    "url": "blogs/Bugfix/2019/092101.html",
    "revision": "bbfaf49c51a719a5b05402558632c062"
  },
  {
    "url": "blogs/Feeling/2016/121501.html",
    "revision": "4f2546a86591b7bfb4c64ffa9c8ee7c8"
  },
  {
    "url": "blogs/Feeling/2017/092101.html",
    "revision": "10374217f04de766512a340d95d8416e"
  },
  {
    "url": "blogs/other/first.html",
    "revision": "dcd07cf842ff91d40a0ec9de7b98ecda"
  },
  {
    "url": "categories/Bugfix/index.html",
    "revision": "7757beebf4526930276709eeeb2dc1af"
  },
  {
    "url": "categories/index.html",
    "revision": "b6ac5337ed14d9474394bd58ca5ce695"
  },
  {
    "url": "categories/Life perception/index.html",
    "revision": "b65a7558f31ad0d6d5941edf4f10d726"
  },
  {
    "url": "categories/博文/index.html",
    "revision": "2ce77d554c47f166d98ca762f52be0e9"
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
    "revision": "d0b04ccc36a81933a9e1d332cffe5469"
  },
  {
    "url": "Interview/Html+Css/Html5+Css3.html",
    "revision": "57d6488b1c3d3f8fc2532c4fa5e6431f"
  },
  {
    "url": "Interview/index.html",
    "revision": "e2379ec8052f8a13cca05f06e0ca156a"
  },
  {
    "url": "Interview/JavaScript/JavaScript.html",
    "revision": "2d4a2a2ccd47364dbe6c06a4cc4bb721"
  },
  {
    "url": "logo.png",
    "revision": "0ce0e4962aed92d9d4eae83a75d981f2"
  },
  {
    "url": "notes/Css3/css.html",
    "revision": "1b658144290a2efb440fbf4ab64c8365"
  },
  {
    "url": "notes/Html5/html.html",
    "revision": "e14f1ac80463a37bd3a11d6f04373f8b"
  },
  {
    "url": "notes/index.html",
    "revision": "375d403ab6ba8a11972c24413d3805f0"
  },
  {
    "url": "notes/Javascript/javascript.html",
    "revision": "7cf892d29d7b3fb02bfd4f0c8a4f9bd5"
  },
  {
    "url": "tag/Bug解决方案/index.html",
    "revision": "d8b0f4816bf41b63f50fae86d1ae4c44"
  },
  {
    "url": "tag/index.html",
    "revision": "5bea73c15121d71a5afd0abf74cadca9"
  },
  {
    "url": "tag/日常/index.html",
    "revision": "5bfa3d48208e805cd040c1933822b1db"
  },
  {
    "url": "tag/生活感/index.html",
    "revision": "725ea33a809941f2ad7ed4f56b1f2fdf"
  },
  {
    "url": "timeline/index.html",
    "revision": "2ecdd249a3b7c9bd7fdc0cf418dd5770"
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
