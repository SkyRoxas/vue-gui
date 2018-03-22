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
      let updateBlockId = this.getters['project/getSelectBlock']['id']
      let updateBlockIndex = blocks.findIndex(el => el.id === updateBlockId)
      Vue.set(blocks, updateBlockIndex, Object.assign(blocks[updateBlockIndex], inputObject))
    }
  },
  getters: {
    getSelectBlock (state, getter, rootState) {
      const blockId = rootState.route.params.block_id
      const selectIndex = state.blocks.findIndex(el => el.id === blockId)
      return state.blocks[selectIndex]
    }
  }
}
