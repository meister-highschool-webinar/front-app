import { observable } from 'mobx'
import { loginApi } from '../utils/apis'

const UserStore = observable({
  login(authData, callback) {
    let result = loginApi(authData)
      .then((response) => {
        localStorage.setItem('authInfo', response.data.accessToken)
      })
      .catch((error) => {
        console.log(error.response)
      })
      console.log(result)
      callback(result)
  }
})

export default UserStore
