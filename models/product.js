import Request from '../util/request'

class ProductModel extends Request{
  constructor(){
    super()
  }

  getProductList(data){
    return this.get('/product/list', data)
  }
}

export default ProductModel