const { Api } = require('../src/api/api')

const { BaseApiCode } = require('../src/utils/api-code')

const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [
    {
      id: '@id',
      title: '@sentence(10, 20)',
      'status|1': ['published', 'draft', 'deleted'],
      author: 'name',
      display_time: '@datetime',
      pageviews: '@integer(300, 5000)'
    }
  ]
})

module.exports = [
  {
    url: Api.tableList.url,
    type: Api.tableList.methodType,
    response: config => {
      const items = data.items
      return {
        code: BaseApiCode.SUCCESS,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
