import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoading: false
  },
  getters: {
    GET_LOADING(state) {
      return state.showLoading;
    }
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.showLoading = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
