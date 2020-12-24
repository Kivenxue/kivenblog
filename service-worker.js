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
    "revision": "f68460ac2e6b122395eb3d68e95d5a5c"
  },
  {
    "url": "about/index.html",
    "revision": "f689fbc1a200143c2f22ef43d5d1698b"
  },
  {
    "url": "assets/css/0.styles.3896bed5.css",
    "revision": "98c0c725e85afb5153b2fccdcf027e23"
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
    "url": "assets/js/13.237c70bb.js",
    "revision": "7972d47cae097236b3d2af413b422cab"
  },
  {
    "url": "assets/js/14.1b8b9def.js",
    "revision": "af7a14e10b233d020042e2142d06b2ad"
  },
  {
    "url": "assets/js/15.5a9fa8fd.js",
    "revision": "a693e4f9f304e369b43da00d63e6d62d"
  },
  {
    "url": "assets/js/16.7830ebec.js",
    "revision": "6fed6d807e126e44411f43e4772e5ccd"
  },
  {
    "url": "assets/js/17.7d2e8db1.js",
    "revision": "a966f4c126bc0929ac4e7ffaadaaa431"
  },
  {
    "url": "assets/js/18.cf1dc0af.js",
    "revision": "f6624be16d5bbbb015e9c99dea1432ef"
  },
  {
    "url": "assets/js/19.fcf41ac6.js",
    "revision": "6a62ccb6c4a7657eaba46f6cb0429984"
  },
  {
    "url": "assets/js/20.b7a4a42a.js",
    "revision": "4f9959da11ff857dcce0099237b7624f"
  },
  {
    "url": "assets/js/21.2f745257.js",
    "revision": "86db8c0c0fcffcb15174c76e7aa61650"
  },
  {
    "url": "assets/js/22.c9766348.js",
    "revision": "595027d8f5578c698ce81950ef3ba331"
  },
  {
    "url": "assets/js/23.f894edf8.js",
    "revision": "9f838d07be511757a850a23cb71013ba"
  },
  {
    "url": "assets/js/24.33d53f67.js",
    "revision": "6b520489f071b006975ebb5ac548f2e4"
  },
  {
    "url": "assets/js/25.859b0313.js",
    "revision": "ddcf36f19707f7790098f1b214888c66"
  },
  {
    "url": "assets/js/26.441115dd.js",
    "revision": "486f4cc6b2177d4bd581b0b67f4f0df3"
  },
  {
    "url": "assets/js/27.f838f4cd.js",
    "revision": "b04487fd37e9ea528ba18c2708d80125"
  },
  {
    "url": "assets/js/28.005ffb27.js",
    "revision": "2643617ff715ea1452306f4d598e26fc"
  },
  {
    "url": "assets/js/29.903a7845.js",
    "revision": "8b5ecaf8875f8516acc41e2cdec98a82"
  },
  {
    "url": "assets/js/3.03a1a095.js",
    "revision": "fe6e454dddae0d663a3e21c9ae98f252"
  },
  {
    "url": "assets/js/30.9622dc18.js",
    "revision": "519e33ecd94b9ca89085e0701294bf1c"
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
    "url": "assets/js/9.e473b028.js",
    "revision": "d25c7f3f67b250c8306f6aa78fb291e5"
  },
  {
    "url": "assets/js/app.60db5213.js",
    "revision": "7d52b5336fc011097972b2bdb76091c0"
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
    "revision": "b54ddee9d9581843617a85cd25b22ef0"
  },
  {
    "url": "blogs/Bugfix/2019/092101.html",
    "revision": "4b28d5c62656dbf48ab1dfa255c29038"
  },
  {
    "url": "blogs/Feeling/2016/121501.html",
    "revision": "7f56dda0fcf30896ba6e8ab0bed43836"
  },
  {
    "url": "blogs/Feeling/2017/092101.html",
    "revision": "7efcbad0be2b333fff7740db2c576de5"
  },
  {
    "url": "blogs/other/first.html",
    "revision": "4fe4d1773ad5fe89bd8520d2cfd7b056"
  },
  {
    "url": "categories/Bugfix/index.html",
    "revision": "9becf66b6edf751cc1f4a4a6ac43a79e"
  },
  {
    "url": "categories/index.html",
    "revision": "5c796460127530c33a61441a2f701065"
  },
  {
    "url": "categories/Life perception/index.html",
    "revision": "6e7613eb10e175a97e043eadc99a0017"
  },
  {
    "url": "categories/博文/index.html",
    "revision": "8116ba618d31b4c4b1e3a48eab0cf832"
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
    "revision": "8b33003745e84e4bdaf4ad01e74a5844"
  },
  {
    "url": "Interview/Html+Css/Html5+Css3.html",
    "revision": "a956daead546f1f401b8b2570d8c91d5"
  },
  {
    "url": "Interview/index.html",
    "revision": "7f7ff352257e04af678736cccf54e64b"
  },
  {
    "url": "Interview/JavaScript/JavaScript.html",
    "revision": "317de665304973d73c6d9ec00bcae39d"
  },
  {
    "url": "logo.png",
    "revision": "0ce0e4962aed92d9d4eae83a75d981f2"
  },
  {
    "url": "notes/Css3/css.html",
    "revision": "f4a51d5ecd5a64a7db1c341f13899613"
  },
  {
    "url": "notes/Flutter/flutter.html",
    "revision": "cbf4dd53a230bb72afe22b16bdb8e947"
  },
  {
    "url": "notes/Html5/html.html",
    "revision": "739c39aa8feb5784f1a4efcf100329bf"
  },
  {
    "url": "notes/Html5/html5.html",
    "revision": "50f4972a74f1f333a1ebb858447ee0f4"
  },
  {
    "url": "notes/index.html",
    "revision": "2cf2e945e28948f01f800a0e52eea674"
  },
  {
    "url": "notes/Javascript/javascript_basis.html",
    "revision": "05983fd7ca9042495c10d779d5eccd09"
  },
  {
    "url": "notes/Javascript/javascript_max.html",
    "revision": "f01200a4248070cb3ed4b27c2bf802f1"
  },
  {
    "url": "notes/ReactNative/reactnative.html",
    "revision": "fd9aaed377e7c0b47eccb1b9d333120b"
  },
  {
    "url": "notes/TypeScript/typescript.html",
    "revision": "c6b44a02356688455ee84ffb56317c8b"
  },
  {
    "url": "notes/Webpack3.x/webpack.html",
    "revision": "a5f9ff090f0cdcc89a72b06db0195d38"
  },
  {
    "url": "tag/Bug解决方案/index.html",
    "revision": "77a131b7fc01d9e8dba052de063784bb"
  },
  {
    "url": "tag/Flutter[basis]/index.html",
    "revision": "3bbd15f91f126cef6a9a37ed63b3c52f"
  },
  {
    "url": "tag/index.html",
    "revision": "6e172b397a76e7b4837efb3a43a2c860"
  },
  {
    "url": "tag/JavaScript[basis]/index.html",
    "revision": "e275a439f5d0192942734732f5c0c129"
  },
  {
    "url": "tag/JavaScript[max]/index.html",
    "revision": "378d587a5b62d204cb9a76c64e024665"
  },
  {
    "url": "tag/TypeScript[basis]/index.html",
    "revision": "44cd5efcd245577070665eccbaec977d"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "bf022c39aceb23fa75b080110c1d979c"
  },
  {
    "url": "tag/日常/index.html",
    "revision": "0d5797c6ea67676243689c3739feaf9b"
  },
  {
    "url": "tag/生活感/index.html",
    "revision": "079fe6dd9d5a2a8e1ffef07007024445"
  },
  {
    "url": "timeline/index.html",
    "revision": "29f9c42716d55c2225f791c9a29d33f9"
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
