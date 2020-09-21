export default {
  pages: [
    'pages/index/index',
    'pages/test/test'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50,
    pageOrientation: 'auto'
  },
  tabBar: {
    list: [{
      'iconPath': 'resource/latest.png',
      'selectedIconPath': 'resource/lastest_on.png',
      pagePath: 'pages/index/index',
      text: '最新'
    }, {
      'iconPath': 'resource/latest.png',
      'selectedIconPath': 'resource/lastest_on.png',
      pagePath: 'pages/test/test',
      text: '最新2'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'black',
    position: 'bottom'
  },
  // 使用分包
  subpackages: [
    {
      "root": "packageA",
      "pages": [
        "pages/cat",
        "pages/dog"
      ]
    }, {
      "root": "packageB",
      "name": "pack2",
      "pages": [
        "pages/apple",
        "pages/banana"
      ]
    }
  ],
  // 分包预下载(没效果)
  preloadRule: {
    "packageA/pages/cat": {
      "network": "all",
      "packages": ["pack2"]
    },
  },
  workers: "workers",
}
