export default {
  namespaced: true,
  state: {
    cache: []
  },
  actions: {
    add () {
      this.commit('project/add')
    }
  },
  mutations: {
    add () {
      console.log('mutations')
    }
  },
  getters: {}
}
