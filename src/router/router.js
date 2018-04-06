export const appRouter = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/register')
  },
  {
    path: '/sceneExecute',
    name: 'sceneExecute',
    component: () => import('@/components/scene/SceneExecute')
  },
  {
    path: '/verification',
    name: 'verification',
    component: () => import('@/components/verification')
  },
  {
    path: '/addDeviceByQRCode',
    name: 'AddDeviceByQRCode',
    component: () => import('@/components/device/AddDeviceByQRCode')
  },
  {
    path: '/addDeviceByManual',
    name: 'AddDeviceByManual',
    component: () => import('@/components/device/AddDeviceByManual')
  },
  {
    path: '/sceneExecuteEdit',
    name: 'SceneExecuteEdit',
    component: () => import('@/components/scene/SceneExecuteEdit')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/scene/SceneExecuteEdit')
  }

]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  ...appRouter
]
