import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from './router'
import store from '../store'
Vue.use(VueRouter)
// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: routers
}

export const router = new VueRouter(RouterConfig)

let loadingTimer
router.beforeEach((to, from, next) => {
  clearTimeout(loadingTimer)
  loadingTimer = setTimeout(() => {
    store.commit('updateLoadingStatus', {isLoading: true})
  }, 1000)
  next()
})

router.afterEach((to) => {
  if (loadingTimer) { clearTimeout(loadingTimer) }
  store.commit('updateLoadingStatus', {isLoading: false})
})
