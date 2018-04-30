import {AuthUtil} from '../../utils'

const state = {
  info: {}
}
const actions = {

}
const mutations = {
  updateHomeName (state, {home_name}) {
    let userInfo = AuthUtil.getUserInfo()
    userInfo.home_name = home_name
    AuthUtil.setUserInfo(userInfo)
    state.info = userInfo
  },
  updateUser (state, {data, phone, password}) {
    if (data) {
      AuthUtil.setPassword(password)
      AuthUtil.setPhone(phone)
      AuthUtil.setUserInfo(data)
      state.info = data
    }
  },
  logout (state) {
    AuthUtil.removePassword()
    AuthUtil.removePhone()
    AuthUtil.removeUserInfo()
    state.info = {}
  }
}
const user = {
  state,
  actions,
  mutations
}
export default user
