import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import AdminLogin from 'components/Admin/AdminLogin/AdminLogin'

const AdminLoginPage = observer(() => {
  return <AdminLogin />
})

export default AdminLoginPage
