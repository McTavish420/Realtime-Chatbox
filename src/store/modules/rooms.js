import Vue from 'vue'
import Vuex from 'vuex'
import AllRoomsService from '../../axios/AllRoomsService'
// import io from 'socket.io-client'
import router from '../../router/index'
// import { stat } from 'fs'

Vue.use(Vuex)
// const socket = io('http://localhost:3000')

const token = {
  headers: {
    'x-auth': ''
  }
}

const state = {
  allRooms: null
}
const mutations = {
  getAllRooms (state, roomsData) {
    state.allRooms = roomsData
  }
}
const actions = {
  getAllRooms () {
    return new Promise((resolve, reject) => {
      AllRoomsService.allRooms().then((res) => {
        // console.log('inside store', res.data)
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  newRoom ({ commit, dispatch }, data) {
    let dataToken = localStorage.getItem('token')
    if (!dataToken) {
      return
    }
    // console.log('create data', data)
    data.members = [{
      _id: localStorage.getItem('userID'),
      userName: localStorage.getItem('username'),
      userEmail: JSON.parse(localStorage.getItem('user')).email
    }]
    // console.log('after change', data)
    token.headers['x-auth'] = dataToken
    return new Promise((resolve, reject) => {
      AllRoomsService.createRoom(data, token).then((res) => {
        // console.log('inside store', res.data)
        resolve(res.data)
        router.replace('/')
        router.go()
      }).catch((er) => {
        reject(er)
      })
    })
  },
  removeRoom ({ commit, dispatch }, id) {
    return new Promise((resolve, reject) => {
      AllRoomsService.deleteRoom(id).then((res) => {
        // console.log(res)
        resolve(res)
        router.replace('/')
        router.go()
      }).catch((er) => {
        reject(er)
      })
    })
  }
}

const getters = {
}

export default {
  state,
  mutations,
  getters,
  actions
}
