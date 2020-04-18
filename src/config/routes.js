export default [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '登录页'
    },
    component: () => import('@/page/index'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页'
    },
    component: () => import('@/page/login'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/page/index'),
    meta: {
      title: '首页'
    },
  }
]
