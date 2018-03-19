import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    id: '',
    blocks: []
  },
  actions: {
    create (state, project) {
      this.commit('project/create', project)
    },
    add (state, inputObject) {
      this.commit('project/add', inputObject)
    },
    update (state, inputObject) {
      this.commit('project/update', inputObject)
    }
  },
  mutations: {
    create (state, project) {
      state.id = project.id
      state.blocks = project.blocks
    },
    add (state, inputObject) {
      state.blocks.push(inputObject)
    },
    update (state, inputObject) {
      let blocks = state.blocks
      let updateBlockId = this.getters['project/getUpdateBlockId']
      Vue.set(blocks, blocks.findIndex(el => el.id === updateBlockId), inputObject)
    }
  },
  getters: {
    getUpdateBlockId (state, getter, rootState) {
      return rootState.route.params.block_id
    }
  }
}
