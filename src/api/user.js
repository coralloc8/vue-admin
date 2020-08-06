import { Api } from './api'
import { send } from '@/utils/request'

/**
 * 登录
 * @param {oject} data
 * {
 *    username, //用户名
 *    password, //密码
 *    grant_type, //授权方式 这里填固定值 password
 *    client_id,  //客户端id，由服务端分配
 *    client_secret //客户端secret，由服务端分配
 * }
 */
export function login(data) {
  const { username, password } = data
  const params = {
    username: username.trim(),
    password: password,
    grant_type: 'password',
    client_id: 'test1',
    client_secret: '123456'
  }
  return send(Api.login, {}, params)
}

/**
 * 获取用户信息
 * @param {string} token  access_token
 */
export function getInfo(token) {
  return send(Api.userInfo, {}, { token })
}

// export function logout() {
//   return send(Api.logout)
// }
