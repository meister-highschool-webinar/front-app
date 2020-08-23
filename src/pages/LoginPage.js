import React from 'react'
import backgroundImg from 'assets/images/login_background.png'
import LoginSection from 'components/Login'
import './loginPage.scss'
const LoginPage = () => {
  return (
    <div className={'container'}>
      <div>
        <img src={backgroundImg} alt="loginBackground" className={'background'}></img>
      </div>
      <div>
        <LoginSection />
      </div>
    </div>
  )
}

export default LoginPage
