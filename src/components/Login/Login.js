import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useStores } from 'stores'
import BasicInput from '../forms/BasicInput'
import BasicSelect from '../forms/BasicSelect'
import loginIcon from 'assets/images/login-icon.png'
import './login.scss'
import { useObserver } from 'mobx-react'

const InputWrapper = (props) => {
  const { options, onChange } = props
  return options.map((option, i) => {
    const { value, name, placeholder } = option
    return <BasicInput key={`input_${name}${i}`} value={value} name={name} placeholder={placeholder} onChange={onChange} />
  })
}

const Login = () => {
  let history = useHistory()
  const { userStore } = useStores()
  const [userData, setUserData] = useState({
    schoolName: '',
    grade: '',
    sclass: '',
    number: '',
    studentName: '',
  })

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
    const pageRoute = (result) => {
      //callback
      alert('로그인성공')
      console.log(result)
    }

    userStore.login(userData, pageRoute) //callback
  }

  const selectOptions = [
    { id: 1, value: '', name: '학교', disabled: true, selected: true },
    { id: 2, value: '대덕소프트웨어마이스터고등학교', name: '대덕SW마이스터고' },
    { id: 3, value: '대구소프트웨어마이스터고등학교', name: '대구SW마이스터고' },
    { id: 4, value: '광주소프트웨어마이스터고등학교', name: '광주SW마이스터고' },
  ]

  const inputOptions = [
    { value: userData.grade, name: 'grade', placeholder: '학년' },
    { value: userData.sclass, name: 'sclass', placeholder: '반' },
    { value: userData.number, name: 'number', placeholder: '번호' },
    { value: userData.studentName, name: 'studentName', placeholder: '이름' },
  ]

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
            <BasicSelect options={selectOptions} onChange={onSelectChange} />
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

export default Login
