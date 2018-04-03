import Vue from 'vue'

export default {
  namespaced: true,

  state: {
    projects: JSON.parse(localStorage.getItem('projects')) ? JSON.parse(localStorage.getItem('projects')) : []
  },

  actions: {
    save (state, project) {
      this.commit('storage/save', project)
    }
  },

  mutations: {
    save (state, project) {
      let findProjectIndex = state.projects.findIndex(el => el.id === project.id)
      let isNewProject = (findProjectIndex === -1)

      if (isNewProject) {
        state.projects.push(project)
        localStorage.setItem('projects', JSON.stringify(state.projects))
      } else {
        Vue.$set(state.projects, findProjectIndex, project)
        localStorage.setItem('projects', JSON.stringify(state.projects))
      }
    }
  },

  getters: {}

}
