import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useObserver } from 'mobx-react'
import Swal from 'sweetalert2'
import { useStores } from 'stores'
import { loginApi } from 'utils/apis'
import BasicInput from '../forms/BasicInput'
import BasicSelect from '../forms/BasicSelect'
import loginIcon from 'assets/images/login-icon.png'
import 'components/Login/pastLogin.scss'

const InputWrapper = (props) => {
  const { options, onChange } = props
  return options.map((option, i) => {
    const { value, name, placeholder } = option
    return <BasicInput key={`input_${name}${i}`} value={value} name={name} placeholder={placeholder} onChange={onChange} />
  })
}

const PastLogin = () => {
  let history = useHistory()
  const { userStore } = useStores()
  const [userData, setUserData] = useState({
    schoolName: '',
    grade: '',
    sclass: '',
    number: '',
    studentName: '',
    code: '',
  })

  const selectOptions = [
    { id: 1, value: '', name: '학교', disabled: true },
    { id: 2, value: '대덕SW마이스터고', name: '대덕SW마이스터고' },
    { id: 3, value: '대구SW고등학교', name: '대구SW고등학교' },
    { id: 4, value: '광주SW마이스터고', name: '광주SW마이스터고' },
  ]

  const inputOptions = [
    { value: userData.grade, name: 'grade', placeholder: '학년' },
    { value: userData.sclass, name: 'sclass', placeholder: '반' },
    { value: userData.number, name: 'number', placeholder: '번호' },
    { value: userData.studentName, name: 'studentName', placeholder: '이름' },
    { value: userData.code, name: 'code', placeholder: '코드' },
  ]

  const onInputChange = (e) => {
    const { value, name } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const onSelectChange = (e) => {
    setUserData({
      ...userData,
      schoolName: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const { schoolName, grade, sclass, number, studentName, code } = userData
    const studentId = parseInt(`${grade}${sclass}${number < 10 ? `0${number}` : number}`)
    const loginData = {
      schoolName: schoolName,
      grade: parseInt(grade),
      class: parseInt(sclass),
      number: parseInt(number),
      studentId: studentId,
      studentName: studentName,
      code: code,
    }

    loginApi(loginData)
      .then((response) => {
        const { accessToken } = response
        sessionStorage.setItem('accessToken', accessToken)
        userStore.userLogin(loginData, accessToken)
        Swal.fire({
          title: '성공',
          text: '로그인 되었습니다.',
          icon: 'success',
        })
        history.push('/')
      })
      .catch((err) => {
        userStore.userLogin('')
        Swal.fire({
          title: '오류',
          text: '잘못된 로그인 정보입니다.',
          icon: 'error',
        })
      })
  }

  return useObserver(() => (
    <div className={'loginSection'}>
      <div>
        <p className={'loginTitle'}>
          <a>로그인</a> 정보를 입력하세요
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className={'divSelect'}>
          <div className={'schoolSelect'}>
            <BasicSelect options={selectOptions} onChange={onSelectChange} defaultValue={''} />
          </div>
          <div>
            <InputWrapper options={inputOptions} onChange={onInputChange} />
          </div>
        </div>
        <div className={'submitArea'}>
          <button type="submit" className={'loginButton'}>
            <img src={loginIcon} alt="loginIcon" />
          </button>
        </div>
      </form>
    </div>
  ))
}

export default PastLogin
