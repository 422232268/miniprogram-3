Page({
  data: {
    background: [
      '/public/img/carousel/1.png',
      '/public/img/carousel/2.png',
      '/public/img/carousel/3.png'
    ],
    funtionArray: [
      {
        iconName: 'yiyuan',
        text: '功能1'
      },
      {
        iconName: 'xinfeng',
        text: '功能2'
      },
      {
        iconName: 'zizhutuiguang',
        text: '功能3'
      },
      {
        iconName: '7',
        text: '功能4'
      },
      {
        iconName: 'diannao',
        text: '功能5'
      }
    ],
    viewArray: [
      {
        iconName: 'zizhutuiguang',
        text: '功能A',
        children: [
          {
            iconName: 'yiyuan1',
            color: '#4e8dff',
            text: '功能1'
          },
          {
            iconName: 'xinfeng',
            color: '#4e8dff',
            text: '功能2'
          },
          {
            iconName: 'yixue',
            color: '#4e8dff',
            text: '功能3'
          },
          {
            iconName: 'shouye1',
            color: '#4e8dff',
            text: '功能4'
          }
        ]
      },
      {
        iconName: 'zizhutuiguang',
        text: '功能B',
        children: [
          {
            iconName: 'yiyuan1',
            color: '#78be00',
            text: '功能1'
          },
          {
            iconName: 'zuobiaoicon',
            color: '#78be00',
            text: '功能2'
          },
          {
            iconName: 'shouye1',
            color: '#78be00',
            text: '功能3'
          },
          {
            iconName: 'shouye',
            color: '#78be00',
            text: '功能4'
          },
          {
            iconName: 'yiyuan',
            color: '#78be00',
            text: '功能5'
          },
          {
            iconName: 'yao-2',
            color: '#78be00',
            text: '功能6'
          },
          {
            iconName: 'shouye1',
            color: '#78be00',
            text: '功能7'
          },
          {
            iconName: 'shouye',
            color: '#78be00',
            text: '功能8'
          },
          {
            iconName: 'yiyuan',
            color: '#78be00',
            text: '功能9'
          },
          {
            iconName: 'yao-2',
            color: '#78be00',
            text: '功能10'
          }
        ]
      },
      {
        iconName: 'zizhutuiguang',
        text: '功能C',
        children: [
          {
            iconName: '31wode',
            color: '#af85fe',
            text: '功能1'
          },
          {
            iconName: 'zuobiaoicon',
            color: '#af85fe',
            text: '功能2'
          },
          {
            iconName: 'shouye',
            color: '#af85fe',
            text: '功能3'
          },
          {
            iconName: 'mingpian',
            color: '#af85fe',
            text: '功能4'
          }
        ]
      },
      {
        iconName: 'yuan1',
        text: '功能D',
        children: [
          {
            iconName: 'yiyuan1',
            color: '#1cc8cd',
            text: '功能1'
          },
          {
            iconName: '31wode',
            color: '#af85fe',
            text: '功能2'
          },
          {
            iconName: 'yixue',
            color: '#78be00',
            text: '功能3'
          },
          {
            iconName: 'shouye1',
            color: '#78be00',
            text: '功能4'
          }
        ]
      },
      {
        iconName: 'fenxi2',
        color: '#78be00',
        text: '功能E'
      },
      {
        iconName: 'yiyuan',
        color: '#af85fe',
        text: '功能F'
      },
      {
        iconName: '_jiaohutiyan',
        color: '#ffa42c',
        text: '功能G'
      },
      {
        iconName: 'doctor-full',
        color: '#fbb51c',
        text: '功能H'
      },
      {
        iconName: 'xinfeng',
        color: '#7289fe',
        text: '功能I'
      },
      {
        iconName: 'zuobiaoicon',
        color: '#2bb9fe',
        text: '功能J'
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  changeIndicatorDots () {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay () {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange (e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        // 首页为 0
        selected: 0
      })
    }
  },
  onReady: function () {
    this.popup = this.selectComponent('#popup')
  },
  showPopup (index) {
    this.popup.showPopup(index)
  },

  _error () {
    console.log('你点击了取消')
    this.popup.hidePopup()
  },
  _success () {
    console.log('你点击了确定')
    this.popup.hidePopup()
  },
  selected (e) {
    const selectedIndex = e.detail.selectedIndex
    const isChildren = !!this.data.viewArray[selectedIndex].children
    if (isChildren) {
      this.showPopup(selectedIndex)
    } else {
      console.log('跳转到对应的功能')
    }
  }
})
