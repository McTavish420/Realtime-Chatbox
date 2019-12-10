import Vue from 'vue'
import Vuex from 'vuex'
import AllRoomsService from '../../axios/AllRoomsService'

Vue.use(Vuex)

const state = {
  currentRoom: null,
  messages: null
}
const mutations = {
  getThisRoom (state, roomsData) {
    state.currentRoom = roomsData
  },
  getMessages (state, data) {
    state.messages = data
  }
}
const actions = {
  getRoom ({ commit, dispatch }, data) {
    // console.log('inside getRoom', data)
    return new Promise((resolve, reject) => {
      AllRoomsService.thisRoom(data).then((res) => {
        commit('getThisRoom', res.data)
        let members = res.data.members
        let user = {
          _id: localStorage.getItem('userID'),
          userName: localStorage.getItem('username'),
          userEmail: JSON.parse(localStorage.getItem('user')).email
        }
        members.push(user)
        commit('getMessages', res.data.messages)
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

const getters = {
  room (state) {
    return state.currentRoom
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
