import { createStore } from 'vuex'
import auth from './auth/index'

export default createStore({
  state: {
    isAuth: false
  },
  getters: {
  },
  mutations: {
    setAuth (state, payload) {
      if (payload) {
        state.isAuth = true
        return
      }
      state.isAuth = false
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})