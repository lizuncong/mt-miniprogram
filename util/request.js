import config from '../config'

// http状态码
const CODE = {
  200: '请求成功',
  201: '创建成功',
  202: '更新成功',
  204: '删除成功',
  301: '永久重定向',
  400: '请求包含不支持的参数',
  401: '未授权',
  403: '被禁止访问',
  404: '请求的资源不存在',
  413: '上传的File体积太大',
  500: '服务器内部错误'
}

// 错误码，用于业务错误
const ERROR_CODE = {
  0: '成功',
  1000: '输入参数错误',
  1001: '输入的json格式不正确',
  1002: '找不到资源',
  1003: '未知错误',
  1004: '禁止访问',
  1005: '服务器内部错误'
}

const showError = (errorCode) => {
  wx.showToast({
    title: CODE[errorCode] || '未知错误',
    icon: 'none',
    duration: 2000, // 2秒
  })
}

class Request {
  constructor() {
    this.apiBaseUrl = config.apiBaseUrl
  }
  request({
    url,
    method = 'GET',
    data = {}
  }) {
    return new Promise(resolve => {
      wx.request({
        url: `${this.apiBaseUrl}${url}`,
        method,
        data,
        header: {
          'content-type': 'application/json',
        },
        success: res => {
          const {
            statusCode
          } = res;
          // console.log('api..request...success...', res)
          if (String(statusCode).startsWith('2')) {
            resolve(res.data)
          } else {
            showError(statusCode)
          }
        },
        fail: err => {
          // console.log('api....request...fail...', err)
          showError()
        }
      })
    })
  }

  get(url, data) {

  }
}

export default Request
