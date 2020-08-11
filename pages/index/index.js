//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 监听页面加载
  onLoad: function (options) {
    console.log('onload...')
    wx.request({
      url: 'http://www.baidu.com/v1/product/list',
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