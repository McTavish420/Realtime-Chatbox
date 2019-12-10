// import axios from './BaseConfig'
import axios from 'axios'

const roomsUrl = '/rooms'

class AuthService {
  // get all rooms
  static allRooms () {
    return axios.get(`${roomsUrl}`).then((res) => {
      // console.log('inside service', res)
      return res
    }).catch((err) => {
      // console.log(err.message)
      return err
    })
  }

  // get a certain room
  static thisRoom (id) {
    // console.log('inside thisRoom', id)
    return axios.get(`${roomsUrl}/${id}`).then((res) => {
      // console.log(res)
      return res
    }).catch(err => {
      // console.log(err)
      return err
    })
  }

  // create a new room
  static createRoom (data, token) {
    return axios.post(`${roomsUrl}/create`, data, token).then((res) => {
      // console.log('inside service', res)
      return res
    }).catch((er) => {
      // console.log(er)
      return er
    })
  }

  // delete a Chat Room
  static deleteRoom (id) {
    return axios.delete(`${roomsUrl}/${id}`).then((res) => {
      // console.log(res)
      return res
    }).catch((err) => {
      // console.log(err)
      return err
    })
  }
}

export default AuthService
