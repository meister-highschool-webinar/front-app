import React from 'react'
import './AdminLogin.scss'
import Box from 'assets/images/line-art.png'
import managerIcon from 'assets/images/manager-icon.png'
import loginIcon from 'assets/images/login-icon.png'
import adminWebinarLogo from 'assets/images/logo@3x.png'

const AdminLogin = () => {
  return (
    <>
      <div className={'AdminLogin'}>
        <div className={'AdminLogin_webinarBox'}></div>
        <div className={'AdminLogin_lineArt'}>
          <img className={'AdminLogin_lineArt_box'} src={Box} alt="" />
          <div className={'AdminLogin_lineArt_content'}>
            <div className={'AdminLogin_lineArt_content_title'}>
              <img className={'AdminLogin_lineArt_content_title_managerIcon'} src={managerIcon} alt="" />
              <div className={'AdminLogin_lineArt_content_title_WebinarLogo'}>
                <img src={adminWebinarLogo} alt="" />
              </div>
            </div>
            <div className={'AdminLogin_lineArt_content_loginWrap'}>
              <input className={'AdminLogin_lineArt_content_loginWrap_loginForm'} type="password" placeholder="비밀번호를 입력하세요" />
              <div className={'AdminLogin_lineArt_content_loginWrap_loginButton'} onClick={() => console.log('click')}>
                <img className={'AdminLogin_lineArt_content_loginWrap_loginButton_loginIcon'} src={loginIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
