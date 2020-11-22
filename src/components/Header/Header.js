import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { DEV_SERVER, PROD_SERVER } from 'config/config.json'
import talkLogo from 'assets/images/logo-talk@3x.png'
import './header.scss'

const Header = (props) => {
  const history = useHistory()
  return (
    <header className={'header'}>
      <img src={talkLogo} onClick={() => history.push('/')} alt={'talk_logo'}/>
      {
        props.login ?
          <span onClick={() => {
            props.logout()
            // axios.get(`${PROD_SERVER}/auth/logout`)
            //   .then((res) => {
            //     console.log('logout complete', res)
            //     history.replace('/')
            //   })
            //   .catch((err) => {
            //     console.log('logout fail', err)
            //   })
          }}>로그아웃</span>
          :
          <span onClick={() => history.push('/login')}>로그인</span>
      }
    </header>
  )
}

export default Header