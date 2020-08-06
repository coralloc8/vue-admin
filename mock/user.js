
const { Api } = require('../src/api/api')

const { BaseApiCode, OauthApiCode } = require('../src/utils/api-code')

const tokens = {
  admin: {
    code: BaseApiCode.SUCCESS,
    message: 'success',
    data: {
      access_token: 'admin-token',
      refresh_token:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFsbCJdLCJhdGkiOiI4MjI5NjhhOC03ODc4LTQ5NmYtYmVhOC00YWMzYTc2NDgwODAiLCJleHAiOjE1OTUwNTg1ODcsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiOWMwODBiNmMtZjcyNS00YWIzLTllYzItZmI2M2Y3YmZlYzgzIiwiY2xpZW50X2lkIjoidGVzdDEifQ.UUPjVdWEz1J_NvhWXWeYCc2KJSkLqBA7LvsBpV3FY8K28P8WDuq4iC3VwcB13O4WTe4PGyWYseR44YIPvi-ab69wvfjGLEnEWauUud2J_aPYbawORqw2yznMPACsiN7pW5Qg-tTsA_wY-sX8kUQIXV8wH-6ijSCGMm4LY8zPfxsRoHcCIVQLWTmB9_sp-AMn1U5j4VnUMUx-ssvBAXtyrjAHj-YvUqLzuYcrAzmVDZRk-osidjDqR52PvvD1HQ98Qq5I87KpnAJ_nVlFPpDiKbdetBUuk2jEJtnPa7uzLEmZUZLRmxpo9lq031FJZ0zxR60_O0B3wpmN7XCXPxDoFA',
      scope: 'all',
      token_type: 'bearer',
      expires_in: 7199
    }
  },
  editor: {
    code: BaseApiCode.SUCCESS,
    message: 'success',
    data: {
      access_token: 'editor-token',
      refresh_token:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFsbCJdLCJhdGkiOiI4MjI5NjhhOC03ODc4LTQ5NmYtYmVhOC00YWMzYTc2NDgwODAiLCJleHAiOjE1OTUwNTg1ODcsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiOWMwODBiNmMtZjcyNS00YWIzLTllYzItZmI2M2Y3YmZlYzgzIiwiY2xpZW50X2lkIjoidGVzdDEifQ.UUPjVdWEz1J_NvhWXWeYCc2KJSkLqBA7LvsBpV3FY8K28P8WDuq4iC3VwcB13O4WTe4PGyWYseR44YIPvi-ab69wvfjGLEnEWauUud2J_aPYbawORqw2yznMPACsiN7pW5Qg-tTsA_wY-sX8kUQIXV8wH-6ijSCGMm4LY8zPfxsRoHcCIVQLWTmB9_sp-AMn1U5j4VnUMUx-ssvBAXtyrjAHj-YvUqLzuYcrAzmVDZRk-osidjDqR52PvvD1HQ98Qq5I87KpnAJ_nVlFPpDiKbdetBUuk2jEJtnPa7uzLEmZUZLRmxpo9lq031FJZ0zxR60_O0B3wpmN7XCXPxDoFA',
      scope: 'all',
      token_type: 'bearer',
      expires_in: 7199
    }
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    userName: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    userName: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: Api.login.url,
    type: Api.login.methodType,
    response: config => {
      const { username } = config.body
      const data = tokens[username]

      const { code } = data

      // mock error
      if (!code === BaseApiCode.SUCCESS) {
        return {
          code: OauthApiCode.INVALID_GRANT,
          message: 'Account and password are incorrect.'
        }
      }

      return data
    }
  },

  // get user info
  {
    url: Api.userInfo.url + '.*',
    type: Api.userInfo.methodType,
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: BaseApiCode.FAILURE,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: BaseApiCode.SUCCESS,
        data: info
      }
    }
  }

  // user logout
  // {
  //   url: Api.logout.url,
  //   type: Api.logout.methodType,
  //   response: _ => {
  //     return {
  //       code: BaseApiCode.SUCCESS,
  //       data: 'success'
  //     }
  //   }
  // }
]
