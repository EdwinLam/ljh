// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import {router} from './router/index'
import store from './store'
import { AjaxPlugin, ToastPlugin } from 'vux'
import { sync } from 'vuex-router-sync'
import './assets/fonts/iconfont.css'
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)
Vue.use(ToastPlugin, {position: 'top'})


FastClick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
sync(store, router)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
