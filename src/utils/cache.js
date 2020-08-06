
/**
 * 缓存key
 */
const CacheKey = {
  /**
   * 登录token
   */
  LOGIN_TOKEN_KEY: 'current_user_token',

  /**
   * 当前登录session
   */
  CURRENT_SESSION: 'current_session',

  /**
   * 菜单栏关闭状态
   */
  SIDEBAR_STATUS: 'sidebar_status'

}

// 无痕模式下set方法不可用
const _sessionStorage = window.sessionStorage
// 无痕模式下set方法不可用
const _localStorage = window.localStorage

/**
 * session级别的缓存,
 */
const SessionStorageCache = {

  getCache: function(key) {
    return _sessionStorage.getItem(key)
  },
  setCache: function(key, token) {
    try {
      _sessionStorage.setItem(key, token)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  },
  removeCache: function(key) {
    return _sessionStorage.removeItem(key)
  }

}

/**
 * 浏览器端的永久性缓存,除非主动清除
 */
const LocalStorageCache = {

  getCache: function(key) {
    return _localStorage.getItem(key)
  },
  setCache: function(key, token) {
    try {
      _localStorage.setItem(key, token)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  },
  removeCache: function(key) {
    return _localStorage.removeItem(key)
  }

}

export {
  CacheKey,
  SessionStorageCache,
  LocalStorageCache
}
