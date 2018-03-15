import Vue from 'vue'
import Vuex from 'vuex'
import modules from './model'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules
})

export default store
