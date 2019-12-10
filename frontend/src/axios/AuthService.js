// import axios from './BaseConfig'
import axios from 'axios'
const authUrl = '/users'

class AuthService {
  // create a new user
  static createUser (text) {
    // console.log(text)
    return axios.post(`${authUrl}/create`, text).then((res) => {
      // console.log(res.data)
      return res
    }).catch((err) => {
      // console.log(err.message)
      return err
    })
  }

  // logging in a user
  static userLogin (text) {
    return axios.post(`${authUrl}/login`, text).then((res) => {
      // console.log(res)
      // console.log(res.data)
      return res
    }).catch((err) => {
      // console.log(err.message)
      return err.message
    })
  }

  // logging out a user

  static userLogout (text) {
    return axios.delete(`${authUrl}/logout`, text).then((res) => {
      // console.log(res.data)
    }).catch((err) => {
      // console.log(err)
      return err
    })
  }

  // get a certain user

  static getUser (id) {
    // console.log('sending from service', id)
    return axios.get(`${authUrl}/${id}`).then((res) => {
      // console.log('inside service', res)
      return res
    }).catch((er) => {
      // console.log(er)
      return er
    })
  }

  // update a userinfo
  static updateUser (id, info) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await axios.patch(`${authUrl}/${id}`, info)
        // console.log(res)
        let data = res.data
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  }

  // get all users
  static getAll () {
    return axios.get(`${authUrl}`).then((res) => {
      // console.log(res.data)
      return res
    }).catch((er) => {
      // console.log(er)
      return er
    })
  }

  // delete a user
  static deleteUser (id) {
    return axios.delete(`${authUrl}/${id}`).then((res) => {
      return res
    }).catch((er) => {
      // console.log(er)
      return er
    })
  }
}
export default AuthService
