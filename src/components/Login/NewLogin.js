import React from 'react'
import LoginBtn from './LoginBtn'
import mainLogo from 'assets/images/webinar-logo@2x.png'
import './newLogin.scss'

const NewLogin = () => {
  return (
    <div className={'loginSection'}>
      <img className={'mainLogo'} src={mainLogo} alt={'main_logo'} />
      <LoginBtn />
    </div>
  )
}

export default NewLogin
