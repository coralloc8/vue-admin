
/**
 * @enum {string}
 */
const MethodType = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch'
}

/**
 * @enum {string}
 */
const ContentType = {
  FORM: 'application/x-www-form-urlencoded; charset=UTF-8',
  FORM_DATA: 'multipart/form-data; charset=UTF-8',
  JSON: 'application/json; charset=UTF-8'

}

/**
 * 创建api
 * @param {string} desc 接口说明
 * @param {string} url 接口url
 * @param {MethodType} methodType api methodType
 * @param {ContentType} contentType api contentType
 */
function ApiCreator(desc, url, methodType, contentType) {
  this.desc = desc
  this.url = url
  this.methodType = methodType || MethodType.GET
  this.contentType = contentType || ContentType.FORM
}

/**
 * @enum {ApiCreator}
 *
 */
const Api = {
  login: new ApiCreator('登录接口', '/auth/oauth/token', MethodType.POST, ContentType.FORM),
  // logout: new ApiCreator('退出登录', '/vue-admin-template/user/logout', MethodType.POST, ContentType.FORM),
  userInfo: new ApiCreator('获取用户信息', '/cms/user', MethodType.GET, ContentType.FORM),

  //
  navigationBarMenus: new ApiCreator('获取导航栏menu列表', '/cms/authorities/navigation', MethodType.GET, ContentType.FORM),
  //
  authorityList: new ApiCreator('获取授权用户的资源权限列表', '/cms/authorities', MethodType.GET, ContentType.FORM),
  //
  menuList: new ApiCreator('获取资源权限列表', '/cms/menus', MethodType.GET, ContentType.FORM),
  //
  tableList: new ApiCreator('获取表格信息', '/vue-admin-template/table/list', MethodType.GET, ContentType.FORM)

}

module.exports = {
  MethodType,
  ContentType,
  Api
}

