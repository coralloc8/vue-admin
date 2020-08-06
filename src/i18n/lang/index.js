import EnLocale from './en'
import ZhLocale from './zh'

import EnElementLocale from 'element-ui/lib/locale/lang/en'
import ZhElementLocale from 'element-ui/lib/locale/lang/zh-CN'

const en = Object.assign(EnLocale, EnElementLocale)
const zh = Object.assign(ZhLocale, ZhElementLocale)

export default {
  en,
  zh
}
