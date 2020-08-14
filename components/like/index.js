// components/like/index.js
import Pagination from '../behaviors/pagination'

Component({
  behaviors: [Pagination],
  properties: {
    like: {
      type: Boolean,
      value: false,
      observer: function () {
        console.log('监听like变化....')
      }
    },
    count: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal, changedPath) {
        console.log('监听count变化....', newVal, oldVal, changedPath)
        this.setData({
          test: newVal < 10 ? `0${newVal}` : newVal
        })
      }
    }
  },

  data: {
    test: 0,
    iconUrl: './images/like.png'
  },
  // 自定义组件最重要的生命周期：created attached detached
  // 组件实例刚刚被创建好时触发，此时还不能调用setData。
  created: function () {
    console.log('组件created..this.properties..', this.properties)
    console.log('组件created..this.data..', this.data)
    console.log('this.properties === this.data', this.properties === this.data)
  },
  // 在组件完全初始化完毕、进入页面节点树后触发
  attached: function () {
    // console.log('组件attached...')
  },
  // 在组件离开页面节点树后触发。或者退出一个页面时， 如果组件还在
  // 页面节点树中也会触发
  detached: function () {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClick: function (e) {
      console.log('子组件点击了。。。')
      this.triggerEvent('onBtnClick', {
        count: 12
      })
      // console.log('click....', this.properties.like)
      // this.setData({
      //   count: this.data.count + 1,
      // })
    }
  }
})
