// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import {router} from './router/index'
import store from './store'
import { ToastPlugin, ConfirmPlugin  } from 'vux'
import { sync } from 'vuex-router-sync'
import VueSocketio from 'vue-socket.io'
import './assets/fonts/iconfont.css'
Vue.use(ToastPlugin)
Vue.use(ToastPlugin, {position: 'top'})
// Vue.use(VueSocketio, process.env.SOCKET_URL)
Vue.use(ConfirmPlugin)
FastClick.attach(document.body)

Vue.filter('deviceState', function (value) {
  return value === 'on' ? '开'
    : value === 'off' ? '关'
      : value === 'online' ? '在线'
        : value === 'offline' ? '离线' : '未知'
})

Vue.config.productionTip = false
/* eslint-disable no-new */
sync(store, router)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
