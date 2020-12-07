import React from 'react'
import LoginBtn from './LoginBtn'
import mainLogo from 'assets/images/webinar-logo@2x.png'
import 'components/Login/login.scss'

const Login = (props) => {
  const { history } = props
  return (
    <div className={'loginPage'}>
      <div className={'background'}>
        <div className={'loginSection'}>
          <img className={'mainLogo'} src={mainLogo} alt={'main_logo'} />
          <LoginBtn />
        </div>
      </div>
    </div>
  )
}

export default Login
