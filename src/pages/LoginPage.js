import React from 'react'
import LoginSection from 'components/Login'
import './loginPage.scss'

const LoginPage = () => {
  return (
    <div className={'container'}>
      <div className={'background'} />
      <div>
        <LoginSection />
      </div>
    </div>
  )
}

export default LoginPage
