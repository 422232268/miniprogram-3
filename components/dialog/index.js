Component({
  options: {
    multipleSlots: true
  },
  properties: {
    data: {
      type: Array,
      value: []
    }
  },

  data: {
    flag: true,
    viewArray: []
  },

  methods: {
    hidePopup: function () {
      this.setData({
        flag: !this.data.flag
      })
    },
    showPopup (selectedIndex) {
      const data = this.properties.data
      console.log('data', data)
      console.log('selectedIndex', selectedIndex)
      const viewArray = data.find((_, index) => index === selectedIndex)
      console.log('viewArray', viewArray)
      this.setData(
        {
          flag: !this.data.flag,
          viewArray
        },
        () => {
          console.log(this.data.viewArray)
        }
      )
    },
    _error () {
      this.triggerEvent('error')
    },
    _success () {
      this.triggerEvent('success')
    }
  }
})
