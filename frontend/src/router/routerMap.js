/**
 * 基础路由
 * @type { *[] }
 */

const constantRouterMap = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/views/history/index.vue')
  },
]

export default constantRouterMap