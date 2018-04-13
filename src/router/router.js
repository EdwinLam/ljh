export const appRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/Register')
  },
  {
    path: '/sceneExecute',
    name: 'SceneExecute',
    component: () => import('@/components/scene/SceneExecute')
  },
  {
    path: '/verification',
    name: 'Verification',
    component: () => import('@/components/Verification')
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
    path: '/sceneExecuteSelect',
    name: 'SceneExecuteSelect',
    component: () => import('@/components/scene/SceneExecuteSelect')
  },
  {
    path: '/deviceView',
    name: 'DeviceView',
    component: () => import('@/components/device/DeviceView')
  },
  {
    path: '/deviceEdit',
    name: 'DeviceEdit',
    component: () => import('@/components/device/DeviceEdit')
  },
  {
    path: '/deviceScene',
    name: 'DeviceScene',
    component: () => import('@/components/device/DeviceScene')
  },

  {
    path: '/personInfoSet',
    name: 'PersonInfoSet',
    component: () => import('@/components/my/personInfoSet')
  },
  {
    path: '/ad',
    name: 'Ad',
    component: () => import('@/components/Ad')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/components/Main'),
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/components/Index')
      },
      {
        path: 'device',
        name: 'Device',
        component: () => import('@/components/Device')
      },
      {
        path: 'addDevice',
        name: 'AddDevice',
        component: () => import('@/components/AddDevice')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/components/About')
      },
      {
        path: 'editDevice',
        name: 'EditDevice',
        component: () => import('@/components/EditDevice')
      },
      {
        path: 'setTask',
        name: 'SetTask',
        component: () => import('@/components/SetTask')
      }
    ]
  },
  {
    path: '/',
    redirect: '/ad'
  }

]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  ...appRouter
]
