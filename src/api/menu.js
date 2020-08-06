import { Api } from './api'
import { send } from '@/utils/request'

/**
 *
 */
export function getNavigationBarMenus() {
  return send(Api.navigationBarMenus)
}

/**
 *
 */
export function getMenuList() {
  return send(Api.menuList)
}

/**
 *
 */
export function getAuthorityList() {
  return send(Api.authorityList)
}
