module.exports = {
  dest: 'dist',
  theme: 'reco',
  title: "KivenBlog",
  description: 'Record learning hobbies',
  head: [
    ["link", { "rel": "icon", "href": "/kiven.ico" }],
    ["meta", { "name": "viewport", "content": "width=device-width,initial-scale=1,user-scalable=no" }]
  ],
  themeConfig: {
    type: 'blog',
    huawei: false,
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Notes', link: '/notes/', icon: 'reco-document' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Interview', link: '/Interview/', icon: 'reco-blog' },
      {
        text: 'About', link: '/about/', icon: 'reco-account',
        items: [
          { text: "Github", link: "https://github.com/recoluan" },
        ]
      }
    ],

    sidebar: {
      '/notes/': [
        {
          title: 'Html5',
          collapsable: true,
          children: [
            "Html5/html",
          ]
        },
        {
          title: 'Css3',
          collapsable: true,
          children: [
            "Css3/css",
          ]
        },
        {
          title: 'JavaScript',
          collapsable: true,
          children: [
            "Javascript/javascript",
          ]
        },
      ],
      '/Interview/': [
        {
          title: 'Html+Css',
          collapsable: true,
          children: [
            "Html+Css/Html5+Css3",
          ]
        },
        {
          title: 'JavaScript',
          collapsable: true,
          children: [
            "JavaScript/JavaScript",
          ]
        },
      ]
  
    },

    //友情链接
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com"
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com"
      },
      {
        title: "Aftersoil-wiki",
        desc: "Aftersoil-wiki focuses on front-end technology",
        avatar: "https://gitee.com/master0037/publicImg/raw/master/chrome-256x256.png",
        link: "https://wiki.aftersoil.xyz/"
      }
    ],
  
    blogConfig: {
      category: {
        location: 2,
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag'
      }
    },
  
    logo: "/logo.png",
    author: "KivenXue",
    authorAvatar: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    sidebarDepth: 1,
    displayAllHeaders: false,
        
    //备案号
    record: false,
    recordLink: 'http://www.beian.miit.gov.cn/',
    startYear: "2017",
    noFoundPageByTencent: false,


  },
  markdown: {
    lineNumbers: true
  },


  plugins: [
    // ["@vuepress-reco/vuepress-plugin-kan-ban-niang",
    //   {
    //     theme: ["whiteCat"],
    //     clean: false,
    //     messages: {
    //       welcome: 'Kiven欢迎关注',
    //       home: '看点什么',
    //       theme: '好吧，希望你能喜欢我的其他小伙伴。',
    //       close: '再见哦'
    //     }
    //   }],
    ["@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: '夜撫でるメノウ',
            artist: '夜撫でるメノウ',
            url: 'http://music.xf1433.com/up/view.php/bdd54db28be7bc21993e763af31e2ad0.mp3',
            cover: 'https://gitee.com/master0037/publicImg/raw/master/1.jpg'
          }
        ],
        // 自动缩小
        autoShrink: true,
        // 悬浮窗模式，吸边
        shrinkMode: 'float',
        // 悬浮窗位置
        floatStyle: { bottom: '200px', 'z-index': '999999' },
      }],
    
    ["ribbon", {
      size: 90,
      opacity: 0.2,
      zIndex: -1
    }],
    ["cursor-effects",
      {
        size: 2,
        shape: ['star' | 'circle'],
        zIndex: 999999999
      }],
    ['@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }]

  ]
}  