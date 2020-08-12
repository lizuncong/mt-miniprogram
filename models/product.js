import Request from '../util/request'

class ProductModel extends Request{
  getList(callback){
    this.request({
      url: '/product/list',
      success: (res) => {
        callback(res)
      }
    })
  }
}

export default new ProductModel()