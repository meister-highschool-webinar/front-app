import React from 'react'
import LoginSection from 'components/Login'
import NewLogin from 'components/Login/NewLogin'
import './loginPage.scss'

const LoginPage = () => {
  return (
    <div className={'container'}>
      <div className={'background'}>
        <NewLogin />
        {/*<div>*/}
        {/*  <LoginSection />*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default LoginPage
