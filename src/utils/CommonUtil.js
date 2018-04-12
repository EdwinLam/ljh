import store from '../store'
import Vue from 'vue'
export default class CommonUtilUtil {
  static isSuccess (code) {
    return code === 200
  }
  static openLoading () {
    store.commit('updateLoadingStatus', {isLoading: true})
  }
  static closeLoading () {
    store.commit('updateLoadingStatus', {isLoading: false})
  }
  static commonTip ({ctx, msg, type, time}) {
    let params = {
      text: msg,
      type: type
    }
    if (time)params.time = time
    time = time || 1000
    ctx.$vux.toast.show(params)
  }
  static errorToast (ctx, msg, time) {
    this.commonTip({ctx, msg, type: 'cancel', time})
  }
  static textToast (ctx, msg, time) {
    this.commonTip({ctx, msg, type: 'text', time})
  }
  static sucToast (ctx, msg, time) {
    this.commonTip({ctx, msg, type: 'success', time})
  }
  static warnToast (ctx, msg, time) {
    this.commonTip({ctx, msg, type: 'warn', time})
  }
}
