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
    "revision": "75ac1b7538c6659d8cb2180554704192"
  },
  {
    "url": "about/index.html",
    "revision": "7be3bf584dbf315eaacd88dc65eea730"
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
    "url": "assets/js/12.79f6ae80.js",
    "revision": "6ea4e9c1890ef74bb406b4fcd40e7c3d"
  },
  {
    "url": "assets/js/13.0064fa34.js",
    "revision": "b16ca9459d4764282f05687a53f6544a"
  },
  {
    "url": "assets/js/14.1b8b9def.js",
    "revision": "af7a14e10b233d020042e2142d06b2ad"
  },
  {
    "url": "assets/js/15.b4f49efe.js",
    "revision": "24034c7f86589e7938565840f828ff9d"
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
    "url": "assets/js/19.f30c6439.js",
    "revision": "00cd95743478fa3bc6f8b0510633eb0e"
  },
  {
    "url": "assets/js/20.4d854fbf.js",
    "revision": "6056ac48b8e0f54499238360c7931559"
  },
  {
    "url": "assets/js/21.e2e089ae.js",
    "revision": "6c094e8217a667f3f03fc4fd7561ff78"
  },
  {
    "url": "assets/js/22.e83cae1f.js",
    "revision": "134324ea94470245f7f4dde2be564b8b"
  },
  {
    "url": "assets/js/23.b5c0d9a1.js",
    "revision": "24740c7b2ca336784bf8eef514c62bbf"
  },
  {
    "url": "assets/js/24.662cfa1d.js",
    "revision": "1f1d22e60439bde9a21db608817a8f13"
  },
  {
    "url": "assets/js/25.859b0313.js",
    "revision": "ddcf36f19707f7790098f1b214888c66"
  },
  {
    "url": "assets/js/26.c12df9b6.js",
    "revision": "4f978a1ae7b0aec383356ed3b64c4d64"
  },
  {
    "url": "assets/js/27.f838f4cd.js",
    "revision": "b04487fd37e9ea528ba18c2708d80125"
  },
  {
    "url": "assets/js/28.c9552bfe.js",
    "revision": "d6236eb7ccf6d485a0f0f8cc4fda20a4"
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
    "url": "assets/js/30.db8bd55b.js",
    "revision": "ce60518be7aeb9e3c4f35d926ea37cf4"
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
    "url": "assets/js/app.288ca79a.js",
    "revision": "8b69ea672f7d778187683f26e59ff872"
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
    "revision": "4a13f3cc87bdc3d1c852d2072544fdeb"
  },
  {
    "url": "blogs/Bugfix/2019/092101.html",
    "revision": "fab6f31a66a2d4a2b934c9a3bce1d49e"
  },
  {
    "url": "blogs/Feeling/2016/121501.html",
    "revision": "58ac734f1a04e5d9f568fd1fef1bba1e"
  },
  {
    "url": "blogs/Feeling/2017/092101.html",
    "revision": "d84fe2cfddf50191c081eb5d9a91f1f8"
  },
  {
    "url": "blogs/other/first.html",
    "revision": "0bdde7ea72d455c799dd6ea8ce7d9c3d"
  },
  {
    "url": "categories/Bugfix/index.html",
    "revision": "ff2cc6e2a7a391cc73faa720d8541ed4"
  },
  {
    "url": "categories/index.html",
    "revision": "a96e616923e562080fd37b7ccd70d1b0"
  },
  {
    "url": "categories/Life perception/index.html",
    "revision": "1c1c6aa121b429474a1e5b8277c7cafb"
  },
  {
    "url": "categories/博文/index.html",
    "revision": "36615fecf3f632de93617c41ba91f85d"
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
    "revision": "852e19d8764aa1fad9b01f1a92f5e447"
  },
  {
    "url": "Interview/Html+Css/Html5+Css3.html",
    "revision": "6068611570d190b494539a9b41cdc165"
  },
  {
    "url": "Interview/index.html",
    "revision": "948802e1f5efcaf4da5e2fe436e0b093"
  },
  {
    "url": "Interview/JavaScript/JavaScript.html",
    "revision": "df6b0a550097bba662d2ef0265bc835e"
  },
  {
    "url": "logo.png",
    "revision": "0ce0e4962aed92d9d4eae83a75d981f2"
  },
  {
    "url": "notes/Css3/css.html",
    "revision": "a83790f8b345cb27da231f93d8bdd1a8"
  },
  {
    "url": "notes/Flutter/flutter.html",
    "revision": "a904f7a6fe0cef6696c250b62804da81"
  },
  {
    "url": "notes/Html5/html.html",
    "revision": "8985f70a6606e9afb11d4d54623845a8"
  },
  {
    "url": "notes/Html5/html5.html",
    "revision": "981b593f6ec7401b1d80c33b680758fa"
  },
  {
    "url": "notes/index.html",
    "revision": "a60b61e5aa408b197e2af21edb3433b6"
  },
  {
    "url": "notes/Javascript/javascript_basis.html",
    "revision": "3b09f0efa88e2db9d1e390a876182ca4"
  },
  {
    "url": "notes/Javascript/javascript_max.html",
    "revision": "eb22f023366936aabe0f3432535f3692"
  },
  {
    "url": "notes/ReactNative/reactnative.html",
    "revision": "93ad375c21d6f7e3be2053d84129e8ca"
  },
  {
    "url": "notes/TypeScript/typescript.html",
    "revision": "b99d05b7f88b63369c6c2fea6ddac46d"
  },
  {
    "url": "notes/Webpack3.x/webpack.html",
    "revision": "97de1f293b202713f0a14a7f2f28371a"
  },
  {
    "url": "tag/Bug解决方案/index.html",
    "revision": "d0e9d997fc7a9dcd9db78405d2c70fed"
  },
  {
    "url": "tag/Flutter[basis]/index.html",
    "revision": "22109cceddac01d525b03e2d821de6ce"
  },
  {
    "url": "tag/index.html",
    "revision": "2bbb97b1b7a77f756b8fa5e50f307679"
  },
  {
    "url": "tag/JavaScript[basis]/index.html",
    "revision": "224336555007f026d4e0dce7e9e7adf4"
  },
  {
    "url": "tag/JavaScript[max]/index.html",
    "revision": "93305be6f9739914dd30cfacdf470307"
  },
  {
    "url": "tag/TypeScript[basis]/index.html",
    "revision": "08773f207389f25458861be135402598"
  },
  {
    "url": "tag/Webpack/index.html",
    "revision": "8a3d660057bc7748901b40af2523b09e"
  },
  {
    "url": "tag/日常/index.html",
    "revision": "dc2cbef44902383c065a05b211f452c7"
  },
  {
    "url": "tag/生活感/index.html",
    "revision": "f1de32c9ebb999e1e46f602c757d4631"
  },
  {
    "url": "timeline/index.html",
    "revision": "01fc51e20e597ec24f5ee70af21fc4ee"
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
