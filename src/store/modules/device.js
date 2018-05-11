import {CommonUtil} from '../../utils'
import {DeviceApi} from '../../api'
import Vue from 'vue'
const state = {
  items: [],
  curItem: []
}
const actions = {
  async getDevices ({commit}, {home_id}) {
    // CommonUtil.openLoading()
    const res = await DeviceApi.list({home_id})
    // CommonUtil.closeLoading()
    res.devices = res.data.map(el => Object.assign({isOn: false, state: ''}, el))
    commit('updateDevices', res.devices)
  }
}
const mutations = {
  setCurItems (state, index) {
    state.curItem = state.items[index]
  },
  updateDevices (state, devices) {
    state.items = devices
  },
  deleteDevice (state, index) {
    state.items.splice(index, 1)
  },
  addTask (state, task) {
    state.curItem.tasks.push(task)
  },
  delTask (state, index) {
    state.curItem.tasks.splice(index, 1)
  },
  refreshMeter (state, {index, data}) {
    let obj = state.items[index]
    obj.data = data
    Vue.set(state.items, index, obj)
  },
  switchDevice (state, {index,isOn}) {
    let obj = state.items[index]
    obj.state = isOn ? 'on' : 'off'
    obj.isOn = isOn
    Vue.set(state.items, index, obj)
  }
}
const user = {
  state,
  actions,
  mutations
}
export default user
