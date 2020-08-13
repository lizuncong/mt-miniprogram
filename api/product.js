import request from '../util/request'

export const getProductList = (data, success) => {
  request({
    url: '/product/list',
    data,
    success,
  })
}
