// custom-tab-bar/index.js
Component({
  data: {
    color: '#515151',
    selectedColor: '#88c000',
    backgroundColor: '#ffffff',
    selected: 0,
    list: [
      {
        pagePath: '/pages/index/index',
        text: '工作',
        iconPath: '/public/img/menu/index.png',
        selectedIconPath: '/public/img/menu/index-selected.png'
      },
      {
        pagePath: '/pages/assitant/assitant',
        text: '助手',
        iconPath: '/public/img/menu/assitant.png',
        selectedIconPath: '/public/img/menu/assitant-selected.png'
      },
      {
        bulge: true,
        pagePath: '/pages/add/add',
        text: '常用',
        iconPath: '/public/img/menu/add.png',
        selectedIconPath: '/public/img/menu/add-selected.png'
      },
      {
        pagePath: '/pages/analyse/analyse',
        text: '分析',
        iconPath: '/public/img/menu/analyse.png',
        selectedIconPath: '/public/img/menu/analyse-selected.png'
      },
      {
        pagePath: '/pages/my/my',
        text: '我',
        iconPath: '/public/img/menu/my.png',
        selectedIconPath: '/public/img/menu/my-selected.png'
      }
    ]
  },
  attached () {},
  methods: {
    switchTab (e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
    }
  }
})
