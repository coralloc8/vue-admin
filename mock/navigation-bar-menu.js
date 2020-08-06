const { BaseApiCode } = require('../src/utils/api-code')
const { Api } = require('../src/api/api')

const data = [
  {
    path: '/example',
    name: 'Example',
    component: 'Layout',
    redirect: '/example/table',
    hidden: false,
    title: 'Example',
    icon: 'el-icon-s-help',
    children: [{
      path: 'table',
      name: 'Table',
      page: '/views/table/index',
      hidden: false,
      title: 'Table',
      icon: 'table'
    }, {
      path: 'tree',
      name: 'Tree',
      page: '/views/tree/index',
      hidden: false,
      title: 'Tree',
      icon: 'tree'
    }]
  },

  {
    path: '/form',
    component: 'Layout',
    hidden: false,
    children: [{
      path: 'index',
      name: 'Form',
      page: '/views/form/index',
      hidden: false,
      title: 'Form',
      icon: 'form'
    }]
  },

  {
    path: '/nested',
    name: 'Nested',
    component: 'Layout',
    redirect: '/nested/menu1',
    hidden: false,
    title: 'Nested',
    icon: 'nested',
    children: [{
      path: 'menu1',
      name: 'Menu1',
      page: '/views/nested/menu1/index',
      hidden: false,
      title: 'Menu1',
      children: [{
        path: 'menu1-1',
        name: 'Menu1-1',
        page: '/views/nested/menu1/menu1-1',
        hidden: false,
        title: 'Menu1-1'
      }, {
        path: 'menu1-2',
        name: 'Menu1-2',
        page: '/views/nested/menu1/menu1-2',
        hidden: false,
        title: 'Menu1-2',
        children: [{
          path: 'menu1-2-1',
          name: 'Menu1-2-1',
          page: '/views/nested/menu1/menu1-2/menu1-2-1',
          hidden: false,
          title: 'Menu1-2-1'
        }, {
          path: 'menu1-2-2',
          name: 'Menu1-2-2',
          page: '/views/nested/menu1/menu1-2/menu1-2-2',
          hidden: false,
          title: 'Menu1-2-2'
        }]
      }, {
        path: 'menu1-3',
        name: 'Menu1-3',
        page: '/views/nested/menu1/menu1-3',
        hidden: false,
        title: 'Menu1-3'
      }]
    }, {
      path: '/menu2',
      name: 'Menu2',
      page: '/views/nested/menu2/index',
      hidden: false,
      title: 'Menu2'
    }]
  },

  {
    path: '/external-link',
    component: 'Layout',
    hidden: false,
    children: [{
      path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
      title: '外链',
      icon: 'link'
    }]
  },

  {
    no: '01',
    parentNo: '',
    path: '/system',
    name: 'System',
    component: 'Layout',
    hidden: false,
    title: '系统管理',
    icon: 'setting',
    hasAuthority: false,
    children: [{
      no: '0101',
      parentNo: '01',
      path: 'menu',
      name: 'Menu',
      page: '/views/system/menu/index',
      hidden: false,
      title: '资源权限',
      icon: '',
      hasAuthority: false,
      authorities: []
    }, {
      no: '0102',
      parentNo: '01',
      path: 'i18n',
      name: 'I18n',
      page: '/views/system/i18n/index',
      hidden: false,
      title: '国际化配置',
      icon: '',
      hasAuthority: false,
      authorities: []
    }]

  }

]

module.exports = [{
  url: Api.navigationBarMenus.url,
  type: Api.navigationBarMenus.methodType,
  response: config => {
    const items = data
    // console.log(JSON.stringify(items))
    return {
      code: BaseApiCode.SUCCESS,
      data: items
    }
  }
}]
