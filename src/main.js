import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import i18n from './i18n/i18n'

import '@/icons' // icon
import '@/permission' // permission control

// import { CacheKey } from './utils/cache'

// import TokenInfo from './utils/token'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const {
    mockXHR
  } = require('../mock')
  mockXHR()
}

router.addRoutes([
  {
    path: '/table1',
    name: 'Table1',
    component: () => import('@/views/table/index'),
    meta: { title: 'Table', icon: 'table' }
  }
])

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  created() {
    // if (window.addEventListener) {
    //   window.addEventListener('storage', handleStorage)
    // } else {
    //   window.attachEvent('onstorage', handleStorage)
    // }

    // function handleStorage(event) {
    //   if (!event) {
    //     event = window.event
    //   }

    //   if (event.key === 'getSessionStorage') {
    //     // 已存在的标签页会收到这个事件
    //     localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage))
    //     localStorage.removeItem('sessionStorage')
    //   } else if (event.key === 'sessionStorage' && !sessionStorage.length) {
    //     // 新开启的标签页会收到这个事件
    //     var data = JSON.parse(event.newValue)

    //     for (const key in data) {
    //       sessionStorage.setItem(key, data[key])
    //     }
    //   }
    // }
    // //
    // window.localStorage.setItem('getSessionStorage', Date.now())
  },
  render: h => h(App)
})
