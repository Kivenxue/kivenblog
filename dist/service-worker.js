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
    "revision": "f4fcee78bbcd79dd283430adf0dde8eb"
  },
  {
    "url": "about/index.html",
    "revision": "c21b0782f37fc2ecf0c65765dda3d520"
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
    "url": "assets/js/13.47424289.js",
    "revision": "5f1956ec4593507b00e2b6600866c6fd"
  },
  {
    "url": "assets/js/14.d932a91b.js",
    "revision": "3ff98b50ea2e87f4402e1676ff0292b6"
  },
  {
    "url": "assets/js/15.757934f7.js",
    "revision": "553368a571284132253206e2be614fae"
  },
  {
    "url": "assets/js/16.7ca1fca1.js",
    "revision": "4d287f16d5db3dab1969d4cc60c60ad9"
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
    "url": "assets/js/app.cc4bac82.js",
    "revision": "5c94287028b596b59ca2e2b9aa9d8645"
  },
  {
    "url": "avatar.jpg",
    "revision": "45a24472361faa09b431bc062ed996d1"
  },
  {
    "url": "blogs/Bugfix/2018/121501.html",
    "revision": "2e0d34b331fcbebde6c5bd746b802ae7"
  },
  {
    "url": "blogs/Bugfix/2019/092101.html",
    "revision": "2ba2975ac6e03e9adf9820e0d70c4840"
  },
  {
    "url": "blogs/Feeling/2016/121501.html",
    "revision": "ef9e324450abc63b4f9a505722548e7f"
  },
  {
    "url": "blogs/Feeling/2017/092101.html",
    "revision": "5ee7b8993b595e81fce9f97326f584d8"
  },
  {
    "url": "blogs/other/first.html",
    "revision": "44e93fe5ebe90456c5eeca12256b344a"
  },
  {
    "url": "categories/Bugfix/index.html",
    "revision": "e03ab71076846ce880839f9c8bfd70f7"
  },
  {
    "url": "categories/index.html",
    "revision": "40d38a7acbca66caf6a1caf07f9f42ef"
  },
  {
    "url": "categories/Life perception/index.html",
    "revision": "d39dfd7b11a1e02f28ea09e93a6c4f1d"
  },
  {
    "url": "categories/博文/index.html",
    "revision": "d8f8b136747be29d6d330558c1b5960d"
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
    "revision": "79f098fc27426748d8388a3fc758f28c"
  },
  {
    "url": "Interview/Html+Css/Html5+Css3.html",
    "revision": "4f823da35b1ad165e063d6bd439041d1"
  },
  {
    "url": "Interview/index.html",
    "revision": "8657731a102f35b400e419db256dc658"
  },
  {
    "url": "Interview/JavaScript/JavaScript.html",
    "revision": "bea575abd47166a3ad0ab8d2c9900345"
  },
  {
    "url": "logo.png",
    "revision": "0ce0e4962aed92d9d4eae83a75d981f2"
  },
  {
    "url": "notes/Css3/css.html",
    "revision": "476c8a96c31f11ba28c0f0900f9c0097"
  },
  {
    "url": "notes/Html5/html.html",
    "revision": "1baeab60e3a1d2d017ee8fba4a619936"
  },
  {
    "url": "notes/index.html",
    "revision": "1a480597f99a77665932d1852e21b920"
  },
  {
    "url": "notes/Javascript/javascript.html",
    "revision": "5c9ca4d5a4618b1fa5611e79658d346c"
  },
  {
    "url": "tag/Bug解决方案/index.html",
    "revision": "6dc4b7526f4aee3181a2a9127f5a6d12"
  },
  {
    "url": "tag/index.html",
    "revision": "999117483e0b1b9da33c413bcf660c52"
  },
  {
    "url": "tag/日常/index.html",
    "revision": "280d559a5d2d10c405fb2a9a3619bd92"
  },
  {
    "url": "tag/生活感/index.html",
    "revision": "c954327692dea7e10e7e37bb1527738c"
  },
  {
    "url": "timeline/index.html",
    "revision": "24e528746a068f450d187f5c2f982f63"
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
