import React from 'react'
import { useHistory } from 'react-router-dom'
import talkLogo from 'assets/images/logo-talk@3x.png'
import './header.scss'

const Header = () => {
  const history = useHistory()
  return (
    <header className={'header'}>
      <img src={talkLogo} onClick={() => history.push('/')} alt={'talk_logo'}/>
      <span onClick={() => history.push('/login')}>로그인</span>
    </header>
  )
}

export default Header
