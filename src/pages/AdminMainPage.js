import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import AdminMainContainer from 'container/Admin/AdminMain/AdminMainContainer'

const AdminMainPage = observer(() => {
  return <AdminMainContainer />
})

export default AdminMainPage
