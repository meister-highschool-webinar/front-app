import { observable } from 'mobx'
import { loginApi } from '../utils/apis'

const UserStore = observable({
  login(authData, callback) {
    let schoolName = authData[0]
    let grade = parseInt(authData[1].grade)
    let sclass = parseInt(authData[1].sclass)
    let number = parseInt(authData[1].number)
    let studentId = parseInt(`${authData[1].grade}${authData[1].sclass}${authData[1].number < 10 ? `0${authData[1].number}` : authData[1].number}`)
    let studentName = authData[1].name

    let result = loginApi(schoolName, grade, sclass, number, studentId, studentName)
      .then((response) => {
        localStorage.setItem('authInfo', response.data.accessToken)
      })
      .catch((error) => {
        alert(error)
      })
    callback(result)
  },
})

export default UserStore
