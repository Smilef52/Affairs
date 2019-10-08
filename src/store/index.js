import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

const vuexSession = new VuexPersist({
  storage: window.sessionStorage
})

const state = {
  navInde: 0,
  swpierIndex: 0
}

const getters = {}

const mutations = {
  saveNavIndex: function(state,resolv){
    state.navIndex = resolv
  },
  saveSwiperIndex: function (state,res) {
    state.swiperIndex = res
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins:[vuexSession.plugin]
})