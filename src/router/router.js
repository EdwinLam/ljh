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
    path: '/verification',
    name: 'Verification',
    component: () => import('@/components/Verification')
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
        path: 'member',
        name: 'Member',
        component: () => import('@/components/Member')
      },
      {
        path: 'device',
        name: 'Device',
        component: () => import('@/components/Device')
      },
      {
        path: 'AddTask',
        name: 'AddTask',
        component: () => import('@/components/AddTask')
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
