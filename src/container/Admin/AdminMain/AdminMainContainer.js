import React, { useState } from 'react'
import { observer } from 'mobx-react'
import AdminMain from 'components/Admin/AdminMain'

const AdminMainContainer = () => {
  const [link, setLink] = useState('')
  const [title, setTitle] = useState('')
  const [info, setInfo] = useState('')

  return <AdminMain link={link} setLink={setLink} title={title} setTitle={setTitle} info={info} setInfo={setInfo} />
}

export default observer(AdminMainContainer)
