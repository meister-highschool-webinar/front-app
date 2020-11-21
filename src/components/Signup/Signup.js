import React, { useEffect } from 'react'
import { Form, Input } from 'antd'
import { useGoogleLogin, useGoogleLogout } from 'react-google-login'
import { observer } from 'mobx-react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import Swal from 'sweetalert2'
import { signup } from 'utils/apis'
import { gsmReg, dsmReg, dgswReg } from 'utils/stringFormat'
import { GOOGLE_ID, PROD_SERVER } from 'config/config.json'
import SignupForm from 'components/Signup/SignupForm'
import talkLogo from 'assets/images/logo-talk@3x.png'
import './signup.scss'
import { refreshTokenSetup } from '../../utils/refreshLoginSetup'

const Signup = observer(() => {
  const [form] = Form.useForm()
  const location = useLocation()
  const { email } = queryString.parse(location.search)

  const onSuccess = (res) => {
    console.log('login success', res)
    refreshTokenSetup(res)
  }
  const onFailure = (res) => {
    console.log('fail', res)
    if (res.error === 'idpiframe_initialization_failed' || res.error === 'popup_closed_by_user') {
      Swal.fire({
        title: '브라우저 쿠키 설정',
        text: '브라우저 설정에서 쿠키를 허용해주세요.',
        icon: 'warning',
      })
    }
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: GOOGLE_ID,
    isSignedIn: true,
    accessType: 'offline',
  })

  // useEffect(() => {
  //   if(!checkEmail(email)) {
  //     console.log('email', email)
  //     Swal.fire({
  //       title: '잘못된 이메일',
  //       text: '올바른 학교 이메일을 입력해주세요.',
  //       icon: 'error',
  //     })
  //   } else {
  //     console.log('success', form.getFieldsValue())
  //   }
  // }, [])

  const checkEmail = (email) => {
    if(gsmReg.test(email)) {
      return 'GSM'
      // form.setFieldsValue({ schoolCode: 'GSM' })
    } else if(dsmReg.test(email)) {
      return 'DSM'
    } else if(dgswReg.test(email)) {
      return 'DGSW'
    } else {
      return 'ADMIN'
      // return false
    }
  }
  const onSubmit = () => {
    let signupData = form.getFieldsValue()
    signupData = { ...signupData, class: Number(signupData.class), number: Number(signupData.number), schoolCode: checkEmail(email) }
    signup(signupData)
      .then((res) => {
        console.log('success', signupData, res)
      })
      .catch((err) => {
        console.log('signup api call fail', err)
      })
  }

  const onFail = (err) => {
    console.log('fail', err)
    Swal.fire({
      title: '회원가입 실패',
      text: '값을 제대로 입력해주세요.',
      icon: 'warning',
    })
  }

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
        <SignupForm form={form} email={email} onSubmit={onSubmit} onFail={onFail}/>
      </div>
    </div>
  )
})

export default Signup
