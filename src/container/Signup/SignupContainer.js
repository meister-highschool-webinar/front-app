import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from 'antd'
import queryString from 'query-string'
import Swal from 'sweetalert2'
import Signup from 'components/Signup'
import { useStores } from 'stores'
import { dgswReg, dsmReg, gsmReg } from 'utils/stringFormat'
import { signup } from 'utils/apis'

const SignupContainer = () => {
  const [form] = Form.useForm()
  const history = useHistory()
  const { email } = queryString.parse(history.location.search)
  const { userStore } = useStores()

  const checkEmail = (email) => {
    if (gsmReg.test(email)) {
      return 'GSM'
    } else if (dsmReg.test(email)) {
      return 'DSM'
    } else if (dgswReg.test(email)) {
      return 'DGSW'
    } else {
      return 'GUEST'
    }
  }
  const onSubmit = () => {
    let signupData = form.getFieldsValue()
    signupData = { ...signupData, class: Number(signupData.class), number: Number(signupData.number), schoolCode: checkEmail(email) }
    signup(signupData)
      .then((res) => {
        const { userInfo, accessToken, message } = res
        Swal.fire({
          title: '회원가입 성공',
          text: message,
          icon: 'success',
        })
        userStore.userLogin(userInfo, accessToken)
        history.push('/')
      })
      .catch((err) => {
        console.log('signup api call fail', err)
      })
  }

  const onFail = (err) => {
    console.log('signup fail', err)
    Swal.fire({
      title: '회원가입 실패',
      text: '값을 제대로 입력해주세요.',
      icon: 'warning',
    })
  }

  return <Signup onSubmit={onSubmit} onFail={onFail} form={form} email={email} />
}

export default SignupContainer
