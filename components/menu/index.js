// components/menu/index.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    color: {
      type: String,
      value: '',
      observer (color) {
        if (color) {
          this.setData({
            color
          })
        }
      }
    },
    data: {
      type: Array,
      value: [],
      observer (viewArray) {
        if (viewArray) {
          this.setData({
            viewArray
          })
        }
      }
    }
  },

  onReady: () => {
    this.popup = this.selectComponent('#popup')
  },
  data: {
    viewArray: []
  },

  attached: function () {
    const data = this.properties.data
    const showTip = data.map(item => {
      if (item.children) {
        item.showChildren = item.children.slice(0, 4)
      }
      return item
    })
    this.setData({
      viewArray: showTip
    })
  },

  methods: {
    selected (e) {
      const selected = e.currentTarget.dataset.index
      this.triggerEvent('selected', { selectedIndex: selected })
    }
  }
})
