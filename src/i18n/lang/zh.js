const zh = {
  // request.js
  request: {
    re_login: {
      message: '登录过期，您需要重新登录',
      title: '确认重新登录',
      btn_ok: '重新退出',
      btn_cancel: '取消'
    },
    http_status: {
      400: '请求错误',
      401: '未授权，请重新登录',
      404: '请求错误，未找到该资源',
      405: '不支持的请求类型',
      403: '授权失败，拒绝访问'

    }
  },
  // layout 窗口栏
  view_tag: {
    right_menu: {
      refresh: '刷新',
      close: '关闭',
      close_other: '关闭其他',
      close_all: '关闭所有'

    }
  },
  // 路由
  route: {
    dashboard: '首页'
  },
  // Bodysearch
  body_search: {
    keyword_text: '请输入搜索内容',
    search_btn_text: '搜索',
    reset_btn_text: '重置'
  }
}

export default zh
