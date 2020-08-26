import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserStore from '../../stores/UserStore'
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
  const [school, setSchool] = useState('학교')
  const [inputs, setInputs] = useState({
    grade: '',
    sclass: '',
    number: '',
    name: '',
  })

  const { grade, sclass, number, name } = inputs

  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const selectOnChange = (e) => {
    setSchool(e.target.value)
  }

  const onSubmit = (e) => {
    let userData = [school, inputs]
    e.preventDefault()

    const pageRoute = (result) => { //callback
      alert("로그인성공")
      console.log(result)
    }

    UserStore.login(userData, pageRoute) //callback

    setInputs({
      school: '',
      grade: '',
      sclass: '',
      number: '',
      name: '',
    })
  }

  const selectOptions = [
    { id: 1, value: '', name: '학교' },
    { id: 2, value: '대덕소프트웨어마이스터고등학교', name: '대덕SW마이스터고' },
    { id: 3, value: '대구소프트웨어마이스터고등학교', name: '대구SW마이스터고' },
    { id: 4, value: '광주소프트웨어마이스터고등학교', name: '광주SW마이스터고' },
  ]

  const inputOptions = [
    { value: inputs.grade, name: 'grade', placeholder: '학년' },
    { value: inputs.sclass, name: 'sclass', placeholder: '반' },
    { value: inputs.number, name: 'number', placeholder: '번호' },
    { value: inputs.name, name: 'name', placeholder: '이름' },
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
            <BasicSelect options={selectOptions} onChange={selectOnChange} />
          </div>
          <div>
            <InputWrapper options={inputOptions} onChange={onChange} />
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
