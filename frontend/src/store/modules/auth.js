import Vue from 'vue'
import Vuex from 'vuex'
import router from '../../router/index'
import AuthService from '../../axios/AuthService'

Vue.use(Vuex)

const token = {
  headers: {
    'x-auth': ''
  }
}

const state = {
  idToken: null,
  userID: null,
  userEmail: null,
  username: null,
  user: null,
  role: null,
  error: null
}
const mutations = {
  authUser (state, userData) {
    state.idToken = userData.token
    state.userID = userData.userID
    state.userEmail = userData.userEmail
    state.username = userData.username
    state.user = userData.user
    state.role = userData.role
  },
  clearAuthData (state) {
    state.idToken = null
    state.userID = null
    state.userEmail = null
    state.username = null
    state.user = null
    state.role = null
  },
  takeError (state, err) {
    state.error = err
  }
}
const actions = {
  registration ({ commit, dispatch }, data) {
    // console.log(data)
    AuthService.createUser(data).then((res) => {
      // console.log(res)
      // console.log('line 50', res.data)
      // console.log(res.headers['x-auth'])
      token.headers['x-auth'] = res.headers['x-auth']
      // console.log(token.headers['x-auth'])
      commit('authUser', {
        token: res.headers['x-auth'],
        userID: res.data._id,
        userEmail: res.data.email,
        username: res.data.username,
        role: res.data.role,
        user: JSON.stringify(res.data)
      })
      let user = state.user
      localStorage.setItem('token', res.headers['x-auth'])
      localStorage.setItem('userID', res.data._id)
      localStorage.setItem('username', res.data.username)
      localStorage.setItem('user', user)
      router.replace('/')
      router.go()
    }).catch((e) => {
      console.log(e)
    })
  },
  login ({ commit, dispatch }, data) {
    // console.log(data)
    AuthService.userLogin(data).then((res) => {
      // console.log('line 71', res.data)
      // console.log(res.headers['x-auth'])
      // token.headers['x-auth'] = res.headers['x-auth']
      // console.log(token.headers['x-auth'])
      commit('authUser', {
        token: res.headers['x-auth'],
        userID: res.data._id,
        userEmail: res.data.email,
        username: res.data.username,
        role: res.data.role,
        user: JSON.stringify(res.data)
      })
      let user = state.user
      // console.log('line 83', state.user)
      localStorage.setItem('token', res.headers['x-auth'])
      localStorage.setItem('userID', res.data._id)
      localStorage.setItem('username', res.data.username)
      localStorage.setItem('user', user)
      router.replace('/')
      router.go()
    }).catch((e) => {
      console.log(e)
      commit('takeError', {
        error: e
      })
    })
  },
  logout ({ commit }) {
    AuthService.userLogout(token).then((res) => {
      // console.log(res)
      commit('clearAuthData')
      token.headers['x-auth'] = ''
      localStorage.removeItem('token')
      localStorage.removeItem('userID')
      localStorage.removeItem('username')
      localStorage.removeItem('user')
      router.replace('/login')
      router.go()
    }).catch((e) => {
      console.log(e)
    })
  },
  tryAutoLogin ({ commit }) {
    let dataToken = localStorage.getItem('token')
    if (!token) {
      return
    }
    token.headers['x-auth'] = dataToken
    let dataUser = JSON.parse(localStorage.getItem('user'))
    let dataUserRole
    if (dataUser) {
      dataUserRole = dataUser.role
    }
    let dataUserID = localStorage.getItem('userID')
    let dataUsername = localStorage.getItem('username')
    commit('authUser', {
      token: dataToken,
      userID: dataUserID,
      username: dataUsername,
      role: dataUserRole,
      user: dataUser
    })
  },
  getAUser ({ commit, dispatch }, data) {
    // console.log('sending from store', data)
    return new Promise((resolve, reject) => {
      AuthService.getUser(data).then((res) => {
        // console.log('inside store', res)
        resolve(res.data)
      }).catch((er) => {
        reject(er)
      })
    })
  },
  changeUser ({ commit, dispatch }, data) {
    // console.log(data)
    let id = data._id
    commit('authUser', {
      token: localStorage.getItem('token'),
      userID: data._id,
      userEmail: data.email,
      username: data.username,
      role: data.role,
      user: JSON.stringify(data)
    })
    let user = state.user
    localStorage.setItem('user', user)
    localStorage.setItem('username', data.username)
    // console.log(id)
    AuthService.updateUser(id, data).then((res) => {
      // console.log('inside store', res)
      router.replace('/')
      router.go()
    }).catch((err) => {
      console.log(err)
    })
  },
  // admin section
  // get all users
  getAllUsers ({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      AuthService.getAll().then((res) => {
        // console.log(res.data)
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  // remove a user
  removeUser ({ commit, dispatch }, id) {
    console.log(id)
    AuthService.deleteUser(id).then((res) => {
      // console.log(res)
      router.replace('/admin')
      router.go()
    }).catch((er) => {
      console.log(er)
    })
  },
  // make user or admin
  makeChange ({ commit, dispatch }, data) {
    // console.log(data)
    let id = data._id
    // console.log(id)
    AuthService.updateUser(id, data).then((res) => {
      // console.log(res)
      router.replace('/admin')
      router.go()
    }).catch((err) => {
      console.log(err)
    })
  }
}

const getters = {
  getUserName (state) {
    // console.log(state.username)
    return state.username
  },
  isAuthenticated (state) {
    // console.log('line 107: ', state.idToken)

    return state.idToken != null
  },
  getRole (state) {
    return state.role
  },
  isError (state) {
    return state.error != null
  },
  getUserID (state) {
    return state.userID
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
