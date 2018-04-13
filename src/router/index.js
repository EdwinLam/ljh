import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from './router'
import store from '../store'
import {AuthUtil} from '../utils'

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()

Vue.use(VueRouter)
// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: routers,
  saveScrollPosition: true
}

export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  // store.commit('updateLoadingStatus', {isLoading: true})
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', {direction: ''})
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    if (!AuthUtil.getPhone() && to.name !== 'Login' && to.name !== 'Ad') {
      next({name: 'Login'})
    } else if ((to.name === 'Login' || to.name === 'Register' || to.name === 'Verification') && AuthUtil.getPhone()) {
      next({name: 'Index'})
    } else {
      next()
    }
  }
})

router.afterEach((to) => {
  // store.commit('updateLoadingStatus', {isLoading: false})
})
