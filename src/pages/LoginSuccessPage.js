import React, { useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { Base64 } from 'js-base64'

import { useStores } from 'stores'

const LoginSuccessPage = () => {
  const { userStore } = useStores()
  const location = useLocation()
  const { userLogin } = userStore
  useEffect(() => {
    if (userLogin) {
      const values = queryString.parse(location.search)
      if (values.accessToken) {
        const info = JSON.parse(Base64.decode(values.accessToken.split('.')[1]))
        userLogin(info, values.accessToken)
      }
    }
  }, [userLogin])
  return <Redirect to={'/'} />
}

export default LoginSuccessPage
