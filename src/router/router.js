export const appRouter = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login')
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  ...appRouter
]
