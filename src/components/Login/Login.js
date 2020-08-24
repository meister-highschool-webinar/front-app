import React, { useState } from 'react'
import BasicInput from '../forms/BasicInput'
import BasicSelect from '../forms/BasicSelect'
import loginIcon from 'assets/images/login-icon.png'
import './login.scss'

const Login = () => {
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
    console.log(e.target)
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const selectOnChange = (e) => {
    setSchool(e.target.value)
  }

  const onSubmit = (e) => {
    let loginData = [school, Object.values(inputs)]
    e.preventDefault()
    alert(loginData) //test
    setInputs({
      school: '',
      grade: '',
      sclass: '',
      number: '',
      name: '',
    })
  }

  const InputWrapper = (props) => {
    const { options } = props
    return options.map((option, i) => {
      const { value, name, placeholder } = option
      return <BasicInput key={`input_${name}${i}`} value={value} name={name} placeholder={placeholder} onChange={onChange} />
    })
  }

  const selectOptions = [
    { id: 1, value: '', name: '학교' },
    { id: 2, value: 'daeduk', name: '대덕SW마이스터고' },
    { id: 3, value: 'daegu', name: '대구SW마이스터고' },
    { id: 4, value: 'gwangju', name: '광주SW마이스터고' },
  ]

  const inputOptions = [
    { value: inputs.grade, name: 'grade', placeholder: '학년' },
    { value: inputs.sclass, name: 'sclass', placeholder: '반' },
    { value: inputs.number, name: 'number', placeholder: '번호' },
    { value: inputs.name, name: 'name', placeholder: '이름' },
  ]

  return (
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
            <InputWrapper options={inputOptions}/>
          </div>
        </div>
        <div className={'submitArea'}>
          <button type="submit" className={'loginButton'}>
            <img src={loginIcon} alt="loginIcon" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
