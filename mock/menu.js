const { BaseApiCode } = require('../src/utils/api-code')
const { Api } = require('../src/api/api')

const data = [
  {
    no: '01',
    parent: '',
    path: '/system',
    component: 'Layout',
    hidden: false,
    hasAuthority: false,
    title: '系统管理',
    icon: 'setting',
    enabled: true,
    children: [{
      no: '0101',
      parentNo: '01',
      path: 'menu',
      name: 'Menu',
      page: '/views/system/menu/index',
      hidden: false,
      title: '资源权限',
      icon: '',
      hasAuthority: true,
      enabled: true,
      authorities: [
        {
          no: '1',
          name: '查询',
          icon: '',
          uniqueKey: 'find'
        }, {
          no: '2',
          name: '新增',
          icon: '',
          uniqueKey: 'add'
        }, {
          no: '3',
          name: '编辑',
          icon: '',
          uniqueKey: 'edit'
        }, {
          no: '4',
          name: '删除',
          icon: '',
          uniqueKey: 'delete'
        }

      ]
    }, {
      no: '0102',
      parentNo: '01',
      path: 'i18n',
      name: 'I18n',
      page: '/views/system/i18n/index',
      hidden: false,
      title: '国际化设置',
      icon: '',
      hasAuthority: true,
      enabled: true,
      authorities: [
        {
          no: '1',
          name: '查询',
          icon: '',
          uniqueKey: 'find'
        }, {
          no: '2',
          name: '新增',
          icon: '',
          uniqueKey: 'add'
        }, {
          no: '3',
          name: '编辑',
          icon: '',
          uniqueKey: 'edit'
        }, {
          no: '4',
          name: '删除',
          icon: '',
          uniqueKey: 'delete'
        }

      ]
    }]

  }

]

module.exports = [{
  url: Api.menuList.url,
  type: Api.menuList.methodType,
  response: config => {
    const items = data
    // console.log(JSON.stringify(items))
    return {
      code: BaseApiCode.SUCCESS,
      data: items
    }
  }
}]
