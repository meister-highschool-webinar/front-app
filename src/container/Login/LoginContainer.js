import React from 'react'
import { useHistory } from 'react-router-dom'
import Login from 'components/Login'

const LoginContainer = () => {
  const history = useHistory()
  return <Login history={history} />
}

export default LoginContainer
