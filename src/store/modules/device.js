import {CommonUtil} from '../../utils'
import {DeviceApi} from '../../api'

const state = {
  items: [],
  curItem: []
}
const actions = {
  async getDevices ({commit}, {home_id}) {
    // CommonUtil.openLoading()
    const res = await DeviceApi.list({home_id})
    // CommonUtil.closeLoading()
    res.devices = res.data.map(el => Object.assign({isOn: el.state === 'on'}, el))
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
    state.items[index].data = data
  },
  switchDevice (state, {index, data}) {
    state.items[index].state = data
  }
}
const user = {
  state,
  actions,
  mutations
}
export default user
