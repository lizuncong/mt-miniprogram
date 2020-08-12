import productModel from '../../models/product'
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'lzc',
    data: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 监听页面加载
  onLoad: function (options) {
    productModel.getList(res => {
      console.log('success...', res)
      this.setData({
        data: res.data
      })
    })
  },
  onReady: function () {
    console.log('onReady....')
  },
  onShow: function () {
    console.log('onShow....')
  },
  onHide: function () {
    console.log('onHide...')
  }
})
