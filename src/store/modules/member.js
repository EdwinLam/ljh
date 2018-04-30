const state = {
  items: []
}
const actions = {

}
const mutations = {
  updateMember (state, members) {
    console.log(members)
    state.items = members
  },
  delMember (state, index) {
    state.items.splice(index, 1)
  },
  addMember (state, item) {
    state.items.push(item)
  }
}
const user = {
  state,
  actions,
  mutations
}
export default user
