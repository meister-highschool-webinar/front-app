import React, { useCallback, useState } from 'react'
import { stores } from 'stores'
import { observer, useLocalStore } from 'mobx-react'
import AdminLogin from 'components/Admin/AdminLogin/AdminLogin'
import Swal from 'sweetalert2'
import { withRouter, useHistory } from 'react-router-dom'

const AdminLoginContainer = observer(() => {
  const history = useHistory()
  const { handleAdminLogin } = stores.AdminStore
  const [password, setPassword] = useState('')
  const requestHandleAdminLogin = useCallback(() => {
    const data = {
      password,
    }
    if (password === '') {
      Swal.fire({
        title: '오류',
        text: '비밀번호를 입력해주세요.',
        icon: 'error',
      })
      return
    }
    handleAdminLogin(data)
      .then((response) => {
        const { accessToken } = response
        Swal.fire({
          title: '성공',
          text: '로그인에 성공했습니다.',
          icon: 'success',
        })
        sessionStorage.setItem('adminToken', accessToken)
        history.push('/admin')
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          Swal.fire({
            title: '오류',
            text: '비밀번호가 틀렸어요.',
            icon: 'error',
          })
        } else if (error.response && error.response.status === 500) {
          Swal.fire({
            title: '서버 오류',
            text: '서버 오류 입니다.',
            icon: 'error',
          })
        }
        return error
      })
  })

  return <AdminLogin requestHandleAdminLogin={requestHandleAdminLogin} password={password} setPassword={setPassword} />
})

export default withRouter(AdminLoginContainer)
