import I18n from '@/i18n/i18n'

// 获取i18n数据
export function getI18n(key) {
  return I18n.t(key)
}

// 获取面板
export function getI18nDashboard() {
  return I18n.t('route.dashboard')
}
