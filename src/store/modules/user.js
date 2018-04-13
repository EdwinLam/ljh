import {AuthUtil} from '../../utils'

const state = {
  info: {}
}
const actions = {

}
const mutations = {
  updateUser (state, {data, phone, password}) {
    if (data) {
      AuthUtil.setPassword(password)
      AuthUtil.setPhone(phone)
      state.info = data
    }
  },
  logout (state) {
    AuthUtil.removePassword()
    AuthUtil.removePhone()
    state.info = {}
  }
}
const user = {
  state,
  actions,
  mutations
}
export default user
