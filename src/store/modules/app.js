// import Cookies from 'js-cookie'
import { LocalStorageCache, CacheKey } from '@/utils/cache'

const opened = LocalStorageCache.getCache(CacheKey.SIDEBAR_STATUS) ? !!+LocalStorageCache.getCache(CacheKey.SIDEBAR_STATUS) : true

const state = {
  sidebar: {
    opened: opened,
    withoutAnimation: false
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      LocalStorageCache.setCache(CacheKey.SIDEBAR_STATUS, 1)
    } else {
      LocalStorageCache.setCache(CacheKey.SIDEBAR_STATUS, 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    LocalStorageCache.setCache(CacheKey.SIDEBAR_STATUS, 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
