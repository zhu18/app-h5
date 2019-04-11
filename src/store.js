import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collectEdit:false
  },
  mutations: {
    changeCollectEdit(state,payload){
      if(payload=='leaveCollect'){
        state.collectEdit=false
      }else{
        state.collectEdit=!state.collectEdit
      }
    }
  },
  actions: {

  }
})
