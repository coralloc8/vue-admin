const { BaseApiCode } = require('../src/utils/api-code')
const { Api } = require('../src/api/api')

const data = [
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
  }

]

module.exports = [{
  url: '/cms/authorities',
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
