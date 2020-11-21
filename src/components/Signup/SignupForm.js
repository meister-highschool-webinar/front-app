import React from 'react'
import { Button, Form, Input, Select } from 'antd'
import styled from 'styled-components'
import './signup.scss'

const { Option } = Select

const LargeInput = styled(Input)`
  height: 43px;
  border-radius: 10px;
`

const SmallInput = styled(Input)`
  height: 43px;
  width: 120px;
  border-radius: 10px;
  margin-left: 15px;
`

const StyledSelect = styled(Select)`  
  .ant-select-selector {
    height: 43px !important;
    width: 120px !important;
    border-radius: 10px !important;
    text-align: left;

    span {
      height: 43px;
      line-height: 43px;
    }
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  height: 43px;
  margin-top: 50px;
  background: #209cff;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
`

const SignupForm = (props) => {
  const { form, email, onSubmit, onFail } = props

  const onChangeSelect = (value) => {
    form.setFieldsValue({ grade: value })
  }

  const validateInput = (rule, value) => {
    if(!Number(value)) return Promise.reject('값을 입력해주세요.')
    if(Number(value) > 0 && Number(value) < 100) return Promise.resolve()
    else return Promise.reject('잘못된 값입니다.')
  }

  return (
    <Form className={'signupForm'} form={form} onFinish={onSubmit} onFinishFailed ={onFail}>
      <Form.Item
        name="studentName"
        rules={[{ required: true, message: '이름을 입력해주세요.' }]}
      >
        <LargeInput placeholder="Username" />
      </Form.Item>
      <Form.Item name="email" initialValue={email}>
        <LargeInput placeholder="E-mail(Username)" disabled />
      </Form.Item>
      <div className={'detailInfo'}>
        <Form.Item name={'grade'} rules={[{ required: true, message: '학년을 입력해주세요.'}]}>
          <StyledSelect size={'large'} placeholder="학년" onChange={onChangeSelect} allowClear>
            <Option value={1}>1</Option>
            <Option value={2}>2</Option>
            <Option value={3}>3</Option>
          </StyledSelect>
        </Form.Item>
        <Form.Item name={'class'} rules={[{ validator: validateInput }]}>
          <SmallInput placeholder="반" type={'number'} />
        </Form.Item>
        <Form.Item name={'number'} rules={[{ validator: validateInput }]}>
          <SmallInput placeholder="번호" type={'number'} />
        </Form.Item>
      </div>
      <Form.Item>
        <StyledButton type={'primary'} htmlType={'submit'}>
          SIGN UP
        </StyledButton>
      </Form.Item>
      {/*<Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>*/}
      {/*  <Input type="password" placeholder="Password" />*/}
      {/*</Form.Item>*/}
    </Form>
  )
}

export default SignupForm
