import React, { useCallback, useState } from 'react'
import { stores } from 'stores'
import { observer, useLocalStore } from 'mobx-react'
import AdminLogin from 'components/Admin/AdminLogin/AdminLogin'

const AdminLoginContainer = observer(() => {
  const { handleAdminLogin } = stores.AdminStore
  const [password, setPassword] = useState('')
  const requestHandleAdminLogin = useCallback(() => {
    const data = {
      password,
    }
    console.log(data)
    handleAdminLogin(data)
      .then((responese) => {
        console.log(responese)
      })
      .catch((error) => {
        return error
      })
  })

  return <AdminLogin requestHandleAdminLogin={requestHandleAdminLogin} password={password} setPassword={setPassword} />
})

export default AdminLoginContainer
