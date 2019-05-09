import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fontSize: 'middle'
  },
  mutations: {
    changeFontSize(state, v) {
      state.fontSize = v
    }
  },
  actions: {}
})
