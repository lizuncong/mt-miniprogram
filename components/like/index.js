// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    like: true,
    count: 9,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick: (e) => {
      console.log('click....', e)
      this.setData({ count: this.count + 1})
    }
  }
})
