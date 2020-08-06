
import store from '@/store'
import Layout from '@/layout'

import { basePath, notFoundRoute } from '@/router'
import router from '@/router'

import { notEmpty } from '@/utils/validate'

export function exist(route) {
  if (store.getters.routes.some(element => element.path && element.path === route.path)) {
    return true
  }

  return false
}

/**
 * 返回所有静态+动态路由
 * @param {Array} routes
 */
export function loadAsyncRoutes(menus) {
  const routes = createRoutes(menus)
  const dynaRoutes = [...routes, ...notFoundRoute]
  router.addRoutes(dynaRoutes)
  return [...router.options.routes, ...dynaRoutes]
}

/**
 * 返回此次的动态路由
 * @param {*} route
 */
export function addViewTagRoute(route) {
  if (!exist(route)) {
    router.addRoutes([route])

    return route
  }
}

export class ViewTagRouteCreator {
  /**
   * tagview动态路由创建器
   * @param {string} path vue router path
   * @param {string} name vue router name
   * @param {string} page 页面路径
   * @param {string} title vue router meta title
   * @param {string} icon vue router meta icon
   * @param {string} activeMenu tagview打开时时候需要激活的菜单路径
   */
  // eslint-disable-next-line space-before-function-paren
  constructor (path, pathParams, name, page, title, icon, activeMenu) {
    this.path = path,
    this.pathParams = pathParams,
    this.name = name
    this.page = page
    this.title = title
    this.icon = icon
    this.activeMenu = activeMenu
  }
}

/**
 *
 * 创建临时tagView路由 不会在左侧菜单栏展示
 * @param {*} viewTagRouteCreator
 */
export function addTemporarytTagView(viewTagRouteCreator) {
  const route = createTagViewRoute(viewTagRouteCreator)
  const visitRoute = createTagViewVisitRoute(viewTagRouteCreator)
  store
    .dispatch('asyncRouter/addRoutes', route)
    .then(() => {
      store
        .dispatch('tagsView/addView', visitRoute)
      router.push({ name: route.path, params: viewTagRouteCreator.pathParams })
    })
}

// ###############################################

/**
 * 创建tagview动态路由 左侧菜单导航不会展示该路由
 * @param {ViewTagRouteCreator} viewTagRouteCreator
 */
const createTagViewRoute = (viewTagRouteCreator) => {
  const { path, name, page, title, icon, activeMenu } = viewTagRouteCreator
  const routePath = path.startsWith('/') ? path : '/' + path

  let component
  if (notEmpty(page)) {
    const newPage = concatPage(page)
    component = resolve => require([`@/views` + newPage], resolve)
  }

  const route = {
    path: '/view' + routePath,
    component: Layout,
    hidden: TextTrackCueList,
    children: [
      {
        path: '',
        component: component,
        meta: {
          title: title,
          name: name,
          icon: icon,
          noCache: true,
          activeMenu: activeMenu
        }
      }
    ]
  }
  return route
}

/**
 *  创建tagview动态访问路由
 * @param {ViewTagRouteCreator} viewTagRouteCreator
 */
const createTagViewVisitRoute = (viewTagRouteCreator) => {
  const { path, name, page, title, icon, activeMenu } = viewTagRouteCreator
  const routePath = path.startsWith('/') ? path : '/' + path

  let component
  if (notEmpty(page)) {
    const newPage = concatPage(page)
    component = resolve => require([`@/views` + newPage], resolve)
  }

  const route = {
    path: '/view' + routePath,
    component: component,
    meta: {
      title: title,
      name: name,
      icon: icon,
      noCache: true,
      activeMenu: activeMenu
    }
  }
  return route
}

/**
 * 创建路由
 *
 * @param {*} menus  {page, path, redirect, hidden, title, icon, name, no, parentNo, children}
 */
const createRoutes = (menus) => {
  return menus.map(function(value, index, array) {
    const node = createRouteNode(value)
    const children = createChildren(value)
    if (children) {
      node.children = children
    }
    return node
  })
}

const createChildren = (node) => {
  const { children } = node
  if (notEmpty(children)) {
    return createRoutes(children)
  }
}

/**
 * 创建route node节点
 * @param {*} node  {page, path, redirect, hidden, title, icon, name, no, parentNo}
 */
const createRouteNode = (node) => {
  let { component } = node

  if (component && component.toLowerCase() === 'layout') {
    component = Layout
  }

  const { page, path, redirect, hidden, title, icon, name, no, parentNo } = node

  const routes = {
    path: path,
    hidden: hidden || false
  }

  if (notEmpty(name)) {
    routes.name = name
  }

  if (notEmpty(redirect)) {
    routes.redirect = redirect
  }

  if (notEmpty(page)) {
    const newPage = concatPage(page)
    component = resolve => require([`@/views` + newPage], resolve)
    // component = () => require(newPage)
  }

  if (component) {
    routes.component = component
  }

  // 设置meta
  const meta = {}
  if (notEmpty(title)) {
    meta.title = title
  }
  if (notEmpty(icon)) {
    meta.icon = icon
  }
  if (notEmpty(no)) {
    meta.no = no
  }
  if (notEmpty(parentNo)) {
    meta.parentNo = parentNo
  }

  if (meta.title || meta.icon) {
    routes.meta = meta
  }

  return routes
}

const concatPage = (path) => {
  let newPath = path
  if (path.startsWith(basePath)) {
    newPath = path.substring(basePath.length, path.length)
  }
  if (!newPath.startsWith('/')) {
    newPath += '/'
  }

  return newPath
}
