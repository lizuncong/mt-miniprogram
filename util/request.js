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

const request = ({
  url,
  method,
  data,
  success
}) => {
  wx.request({
    url: `${config.apiBaseUrl}${url}`,
    method: method || 'GET',
    data,
    header: {
      'content-type': 'application/json',
    },
    success: res => {
      const {
        statusCode
      } = res;
      // console.log('api..request...success...', res)
      if (String(statusCode).startsWith('2') && success) {
        success(res.data)
      } else {
        showError(statusCode)
      }
    },
    fail: err => {
      // console.log('api....request...fail...', err)
      showError()
    }
  })
}

export default request
