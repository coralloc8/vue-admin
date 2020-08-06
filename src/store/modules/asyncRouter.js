import { getNavigationBarMenus } from '@/api/menu'

import { loadAsyncRoutes, addViewTagRoute, exist } from '@/utils/router'

const state = {
  // 所有的routes路由(包含动态和静态)
  routes: []

}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  },
  ADD_ROUTES: (state, routes) => {
    routes.forEach(element => {
      state.routes.push(element)
    })
  }

}

const actions = {

  getNavigationBarMenus({ commit }) {
    return new Promise((resolve, reject) => {
      getNavigationBarMenus().then(response => {
        const { data } = response

        const allRoutes = loadAsyncRoutes(data)

        commit('SET_ROUTES', allRoutes)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  addRoutes({ commit }, route) {
    return new Promise((resolve, reject) => {
      if (!exist(route)) {
        addViewTagRoute(route)

        commit('ADD_ROUTES', [route])
      }

      resolve()
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
