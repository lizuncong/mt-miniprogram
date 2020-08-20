import ProductModel from '../../models/product'

const productModel = new ProductModel()
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'lzc',
    data: [],
    date: new Date(),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onBtnClick: function (e) {
    console.log('子组件传递回来的信息。。。', e.detail)
  },
  // 监听页面加载
  onLoad: function (options) {
    productModel.getProductList({ id: 12 }).then(res => {
      console.log('success...', res)
      this.setData({
        data: res.data
      })
    })
  },
  onReady: function () {
    // console.log('onReady....')
  },
  onShow: function () {
    // console.log('onShow....')
  },
  onHide: function () {
    // console.log('onHide...')
  }
})
