import React from 'react'
import mainLogo from 'assets/images/webinar-logo@2x.png'
import './newLogin.scss'

const NewLogin = () => {
  return (
    <div className={'loginSection'}>
      <img src={mainLogo} alt={'main_logo'} />
      로그인
    </div>
  )
}

export default NewLogin
