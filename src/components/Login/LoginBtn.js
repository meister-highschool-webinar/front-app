import React from 'react'
import { observer } from 'mobx-react'
import { useGoogleLogout } from 'react-google-login'
import Swal from 'sweetalert2'
import { GOOGLE_ID, DEV_SERVER, TEST_SERVER, PROD_SERVER, DEV_CLIENT } from 'config/config.json'
import { useStores } from 'stores'
import { refreshTokenSetup } from 'utils/refreshLoginSetup'
import 'components/Login/login.scss'
import googleIcon from 'assets/images/google@2x.png'
import axios from 'axios'
import { getUserInfo } from '../../utils/apis'

const LoginBtn = observer(() => {
  const {
    userStore: { accessToken, userLogout },
  } = useStores()
  //
  // const onSuccess = (res) => {
  //   getUserInfo({ email: res.profileObj.email })
  //     .then((result) => {
  //       const { userInfo, accessToken='' } = result
  //       console.log('login complete userData: ', userInfo, accessToken)
  //       userLogin(userInfo, accessToken)
  //       window.location.href = `${TEST_SERVER}/auth/google`
  //     })
  //     .catch((err) => {
  //       console.log('get user info err', err)
  //       window.location.href = `${TEST_SERVER}/auth/google`
  //
  //     })
  //   refreshTokenSetup(res)
  // }
  // const onFailure = (res) => {
  //   console.log('fail', res)
  //   if (res.error === 'idpiframe_initialization_failed' || res.error === 'popup_closed_by_user') {
  //     Swal.fire({
  //       title: '브라우저 쿠키 설정',
  //       text: '브라우저 설정에서 쿠키를 허용해주세요.',
  //       icon: 'warning',
  //     })
  //   }
  // }
  // const onLogoutSuccess = (res) => {
  //   console.log('logout success', res)
  //   Swal.fire({
  //     title: '로그아웃 완료',
  //     text: '로그아웃 되었습니다.',
  //     icon: 'info',
  //   })
  // }
  //
  // const { signIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   clientId: GOOGLE_ID,
  //   isSignedIn: true,
  //   accessType: 'offline',
  // })

  // const { signOut } = useGoogleLogout({
  //   clientId: GOOGLE_ID,
  //   onLogoutSuccess,
  // })

  const googleBtnClick = () => {
    if (accessToken.length === 0) {
      // signIn()
      window.location.href = `${PROD_SERVER}/auth/google`
    } else {
      const wnd = window.open('https://accounts.google.com/logout', '_blank')
      setTimeout(() => {
        wnd.close()
      }, 300) // signOut()
      userLogout()
    }
  }

  return (
    <button onClick={() => googleBtnClick()} className={'loginBtn'}>
      <img className={'googleIcon'} src={googleIcon} alt={'google'} />
      <span className={'loginBtnText'}>{accessToken.length === 0 ? 'LOGIN with Google' : 'LOGOUT'}</span>
    </button>
  )
})

export default LoginBtn
