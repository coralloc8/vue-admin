/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * 判断字符串是否是https?:|mailto:|tal: 开头的
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 检验字符串是否是 admin  editor
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * 判断都是小写字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 判断都是大写字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * 判断是否是字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 校验邮箱
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * 判断是否字符串
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * 判断是否是数组
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
/**
 * 判断url是否是动态url 包含最少一个{}的
 * @param {string} url
 */
export function isDynamicUrl(url) {
  const reg = /\{\w+\}*/
  return reg.test(url)
}

/**
 * 获取动态url中的{}部分数据
 * @param {string} url
 */
export function getDynamicUrlParams(url) {
  const reg = /\{\w+\}*/
  return reg.match(url)
}

/**
 * 处理url
 * @param {string} url
 * @param {Map<String,any>} urlParams
 */
export function handleUrl(url, urlParams) {
  // url部分包含动态元素并且urlParams有值
  const needHandleUrl = isDynamicUrl(url) && urlParams && Object.keys(urlParams).length > 0
  if (needHandleUrl) {
    for (const [key, value] of Object.entries(urlParams)) {
      url = url.replace('{' + key + '}', value)
    }
  }
  return url
}

/**
 * 判断是否是对象
 * @param {any} obj
 */
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function notEmpty(obj) {
  return obj && obj.length !== 0
}
