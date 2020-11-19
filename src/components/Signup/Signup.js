import React from 'react'
import { Form, Input } from 'antd'
import SignupForm from 'components/Signup/SignupForm'
import talkLogo from 'assets/images/logo-talk@2x.png'
import './signup.scss'

const Signup = () => {
  const [form] = Form.useForm()
  return (
    <div className={'signupPage'}>
      <img src={talkLogo} className={'talkLogo'} alt={'talk-logo'} />
      <div className={'background'}>
        <div className={'signupLabel'}>
          <span className={'engTitle'}>
            <p>Create</p> <p>Account</p>
          </span>
          <span className={'korTitle'}>회원가입</span>
        </div>
        <SignupForm form={form} />
      </div>
    </div>
  )
}

export default Signup
