import React from 'react'
import { observer } from 'mobx-react'
import { useGoogleLogin, useGoogleLogout } from 'react-google-login'
import { GOOGLE_ID } from 'config/config.json'
import { useStores } from 'stores'
import googleIcon from 'assets/images/google@2x.png'
import './newLogin.scss'
import { refreshTokenSetup } from '../../utils/refreshLoginToken'

const LoginBtn = observer(() => {
  const { userStore: { accessToken } } = useStores()
  const onSuccess = (res) => {
    console.log('login success', res)
    refreshTokenSetup(res)
  }
  const onFailure = (err) => {
    console.log('fail', err)
  }
  const onLogoutSuccess = (res) => {
    console.log('logout success', res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: GOOGLE_ID,
    isSignedIn: true,
    accessType: 'offline'
  })

  const { signOut } = useGoogleLogout({
    clientId: GOOGLE_ID,
    onLogoutSuccess,
    onFailure
  })

  return (
    <button onClick={accessToken.length === 0 ? signIn : signOut} className={'loginBtn'}>
      <img className={'googleIcon'} src={googleIcon} alt={'google'}/>
      <span className={'loginBtnText'}>{accessToken.length === 0 ? 'LOGIN with Google' : 'LOGOUT'}</span>
    </button>
  )
})

export default LoginBtn