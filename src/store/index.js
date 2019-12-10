import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import rooms from './modules/rooms'
import currentRoom from './modules/currentRoom'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    rooms,
    currentRoom
  }
})
