import { observable } from 'mobx'
import { loginApi } from '../utils/apis'

const UserStore = observable({
  login(authData, callback) {
    const { schoolName, grade, sclass, number, studentName } = authData
    const studentId = parseInt(`${grade}${sclass}${number < 10 ? `0${number}` : number}`)
    const userData = {
      schoolName: schoolName,
      grade: parseInt(grade),
      class: parseInt(sclass),
      number: parseInt(number),
      studentId: studentId,
      studentName: studentName,
    }

    let result = loginApi(userData)
      .then((response) => {
        console.log(response)
        localStorage.setItem('authInfo', response.data.accessToken)
      })
      .catch((error) => {
        alert(error)
      })
    callback(result)
  },
})

export default UserStore
