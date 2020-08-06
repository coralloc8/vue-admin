import { CacheKey, SessionStorageCache } from './cache'

const tokenKey = CacheKey.LOGIN_TOKEN_KEY

const TokenInfo = {

  getToken: function() {
    return SessionStorageCache.getCache(tokenKey)
  },
  setToken: function(token) {
    return SessionStorageCache.setCache(tokenKey, token)
  },
  removeToken: function() {
    SessionStorageCache.removeCache(tokenKey)
  }

}

export default TokenInfo
