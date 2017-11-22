import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

import * as actions from './actions'
import * as getters from './getters'
import modules from './modules'

Vue.use(Vuex)

const state = {
  isLogged: !!localStorage.getItem('token')
}

const mutations = {
  LOGIN_USER (state) {
    state.isLogged = true
  },

  LOGOUT_USER (state) {
    localStorage.removeItem('token')
    localStorage.removeItem('usr')
    state.isLogged = false
    router.push('login')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
