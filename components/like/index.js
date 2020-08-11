// components/like/index.js
Component({
  properties: {
    like: {
      type: Boolean,
      value: false,
      observer: function(){
        console.log('监听like变化....')
      }
    },
    // count: {
    //   type: Number,
    //   value: 0,
    // }
  },

  data: {
    count: 0,
    iconUrl: './images/like.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick: function(e) {
      console.log('click....', this.properties.like)
      this.setData({
        count: this.data.count + 1,
      })
    }
  }
})
