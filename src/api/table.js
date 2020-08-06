import { Api } from './api'
import { send } from '@/utils/request'

export function getTableList(params) {
  return send(Api.tableList, {}, params)
}
