import Axios from 'axios'
import Qs from 'qs'
import { MessageBox, Message } from 'element-ui'
import Store from '@/store'

import I18n from '@/i18n/i18n'

import { BaseApiCode, OauthApiCode } from '@/utils/api-code'

import { MethodType, ContentType } from '@/api/api'

import { handleUrl } from '@/utils/validate'

// create an Axios instance
const service = Axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (Store.getters.token) {
      // let each request carry token
      // Authorization 默认Bearer
      config.headers['Authorization'] = 'Bearer ' + Store.getters.token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not success, it is judged as an error.
    if (res.code !== BaseApiCode.SUCCESS) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      if (res.code === OauthApiCode.ACCESS_TOKEN_INVALID || res.code === OauthApiCode.INVALID_TOKEN) {
        // to re-login
        MessageBox.confirm(I18n.t('request.re_login.message'), I18n.t('request.re_login.title'), {
          confirmButtonText: I18n.t('request.re_login.btn_ok'),
          cancelButtonText: I18n.t('request.re_login.btn_cancel'),
          type: 'warning'
        }).then(() => {
          Store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    // console.log('err' + JSON.stringify(error.response)) // for debug
    let message = ''
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          message = I18n.t('request.http_status.400')
          break
        case 401:
          message = I18n.t('request.http_status.401')
          break
        case 404:
          message = I18n.t('request.http_status.404')
          break
        case 405:
          message = I18n.t('request.http_status.405')
          break
        case 403:
          message = I18n.t('request.http_status.403')
          break
        default:
          message = I18n.t('request.http_status.400')
      }
    }

    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

/**
 *
 * @param {import('@/api/api').Api} api api配置
 * @param {Map<String,any>} urlParams 动态url中的参数值
 * @param {(Map<String,any> | Array<Map<String,any>>)} params 消息体
 */
export function send(api, urlParams, params) {
  try {
    // console.log('>>>>>api:', api, '>>urlParams:', urlParams, '>>params:', params)
    const contentType = api.contentType
    const methodType = api.methodType
    const url = handleUrl(api.url, urlParams)

    const config = {
      headers: {
        'Content-Type': contentType
      },
      url: url,
      method: methodType,
      transformRequest: [function(data) { // 在请求之前对data传参进行格式转换
        if (ContentType.JSON === contentType) {
          data = JSON.stringify(data)
        } else {
          data = Qs.stringify(data)
        }
        return data
      }]
    }
    if (params) {
      if (methodType === MethodType.GET) {
        config.params = params
      } else {
        config.data = params
      }
    }
    return service(config)
  } catch (error) {
    console.error('request send error:', error)
  }
}
export default service
