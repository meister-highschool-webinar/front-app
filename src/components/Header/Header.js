import React from 'react'
import { useHistory } from 'react-router-dom'
import talkLogo from 'assets/images/logo-talk@3x.png'
import './header.scss'
import { PROD_SERVER } from '../../config/config.json'

const Header = (props) => {
  const history = useHistory()
  return (
    <header className={'header'}>
      <img src={talkLogo} onClick={() => history.push('/')} alt={'talk_logo'}/>
      {
        props.login ?
          <span onClick={() => {
            props.logout()
            window.location.href = `${PROD_SERVER}/auth/logout`
          }}>로그아웃</span>
          :
          <span onClick={() => history.push('/login')}>로그인</span>
      }
    </header>
  )
}

export default Header
