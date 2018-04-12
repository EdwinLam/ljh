import {AuthUtil} from '../../utils'

const state = {
  info: {}
}
const actions = {

}
const mutations = {
  updateUser (state, {data, phone, password}) {
    if (data) {
      AuthUtil.setPassword(this.password)
      AuthUtil.setPhone(this.phone)
      state.info = data
    } else {
      AuthUtil.removePassword()
      AuthUtil.removePhone()
      state.info = {}
    }
  }
}
const user = {
  state,
  actions,
  mutations
}
export default user
