import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import AdminLoginContainer from 'container/Admin/AdminLogin/AdminLoginContainer'

const AdminLoginPage = observer(() => {
  return <AdminLoginContainer />
})

export default AdminLoginPage
