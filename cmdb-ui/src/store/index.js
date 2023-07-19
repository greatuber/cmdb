/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import app from './global/app'
import user from './global/user'
import routes from './global/routes'
import logo from './global/logo'
import notice from './global/notice'
import getters from './global/getters'
import appConfig from '@/config/app'
console.log(appConfig)

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    routes,
    logo,
    notice
  },
  state: {
    windowWidth: 800,
    windowHeight: 600,
    currentTime: 0,
  },
  mutations: {
    SET_WINDOW_SIZE(state, { width, height }) {
      state.windowWidth = width
      state.windowHeight = height
    },
    SET_TIME: (state, time) => {
      state.currentTime = time
    },
  },
  actions: {
    setWindowSize({ commit }) {
      const width = window.innerWidth
      const height = window.innerHeight
      commit('SET_WINDOW_SIZE', { width, height })
    },
    setTime: ({ commit }, time) => {
      commit('SET_TIME', time)
    }
  },
  getters
})

appConfig.buildModules.forEach(appName => {
    import(`@/modules/${appName}/index.js`).then(m => {
      if (m.default.store) {
        store.registerModule(m.default.store.name || m.deault.name, m.default.store)
      }
    })
})

export default store
