const BaseApiCode = {
  /**
   * 成功
   */
  SUCCESS: 0,
  /**
   * 系统异常，请联系管理员
   */
  FAILURE: 1,
  /**
   * 系统繁忙，请稍后重试
   */
  SYSTEM_BUSY: -1,
  /**
   * 系统错误
   */
  SYSTEM_ERROR: 1001,
  /**
   * 不合法的参数
   */
  ILLEGAL_PARAMETER: 10002,
  /**
   * 不合法的请求格式
   */
  ILLEGAL_REQUEST_FORMAT: 10003,

  /**
   * 日期格式错误
   */
  DATE_FORMAT_ERROR: 10004,

  /**
   * 时间区间不合法
   */
  ILLEGAL_TIME_INTERVAL: 10005,

  /**
   * 上传文件缺失
   */
  UPLOAD_FILE_MISSING: 10006,

  /**
   * 部分必填参数为空
   */
  REQUIRED_PARAMETERS_EMPTY: 10007,

  /**
   * 参数校验错误
   */
  PARAMETER_VERIFICATION_ERROR: 10008,

  /**
   * 不支持此操作
   */
  OPERATION_NOT_SUPPORT: 10009

}

const OauthApiCode = {

  /**
   * access_token无效
   */
  ACCESS_TOKEN_INVALID: 40001,
  /**
   * 资源未授权
   */
  UNAUTHORIZED: 40002,

  /**
   * 访问资源的用户权限不足
   */
  INSUFFICIENT_PERMISSIONS: 40003,

  /**
   * 用户名或密码错误
   */
  INVALID_GRANT: 40004,

  /**
   * 错误的客户端凭证
   */
  INVALID_CLIENT: 40005,
  /**
   * 无效的请求
   */
  INVALID_REQUEST: 40006,
  /**
   * 无效的token
   */
  INVALID_TOKEN: 40007,
  /**
   * 客户端未授权
   */
  UNAUTHORIZED_CLIENT: 40008,

  /**
   * 不支持的grant_type
   */
  UNSUPPORTED_GRANT_TYPE: 40009,

  /**
   * http媒体类型不接受
   */
  HTTP_MEDIA_TYPE_NOT_ACCEPT: 40010,

  /**
   * client_id或者client_secret有误
   */
  BAD_CREDENTIALS: 40011,

  /**
   * user not exist
   */
  USER_NOT_EXIST: 50001

}

module.exports = {
  BaseApiCode,
  OauthApiCode
}
