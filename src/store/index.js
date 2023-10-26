import { createStore } from 'vuex'
import auth from './auth/index'

export default createStore({
  state: {
    isAuth: false,
    token: ''
  },
  getters: {
  },
  mutations: {
    setAuth (state, token) {
      if (token) {
        state.isAuth = true
        state.token = token
        localStorage.setItem('token', token);
        return
      }
      state.isAuth = false
    },
    initialiseStore(state) {
      if(localStorage.getItem('token')){
        let token = localStorage.getItem('token');
        if (token) {
          state.token = token
          state.isAuth = true
        }
       }
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})