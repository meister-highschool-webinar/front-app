import React from 'react'
import { observer } from 'mobx-react'
import { useGoogleLogin, useGoogleLogout } from 'react-google-login'
import Swal from 'sweetalert2'
import { GOOGLE_ID, DEV_SERVER, PROD_SERVER } from 'config/config.json'
import { useStores } from 'stores'
import { refreshTokenSetup } from 'utils/refreshLoginSetup'
import 'components/Login/login.scss'
import googleIcon from 'assets/images/google@2x.png'

const LoginBtn = observer(({ history }) => {
  const {
    userStore: { accessToken, userLogout },
  } = useStores()

  const onSuccess = (res) => {
    console.log('login success', res)
    refreshTokenSetup(res)
    history.push('/signup')
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
  const onLogoutSuccess = (res) => {
    console.log('logout success', res)
  }

  // const { signIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   clientId: GOOGLE_ID,
  //   isSignedIn: true,
  //   accessType: 'offline',
  // })
  //
  // const { signOut } = useGoogleLogout({
  //   clientId: GOOGLE_ID,
  //   onLogoutSuccess,
  //   onFailure,
  // })

  const googleBtnClick = () => {
    if(accessToken.length === 0) {
      // window.location.href = `${PROD_SERVER}/auth/google`
      window.location.href = `${PROD_SERVER}/auth/google`
      // history.push(`${PROD_SERVER}/auth/google`)
    } else {
      userLogout()
    }
  }

  return (
    <button onClick={googleBtnClick} className={'loginBtn'}>
      <img className={'googleIcon'} src={googleIcon} alt={'google'} />
      <span className={'loginBtnText'}>{accessToken.length === 0 ? 'LOGIN with Google' : 'LOGOUT'}</span>
    </button>
  )
})

export default LoginBtn
