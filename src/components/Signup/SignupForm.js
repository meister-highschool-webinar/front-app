import React from 'react'
import { Form, Input, Select } from 'antd'
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
  height: 43px;
  width: 120px;
  border-radius: 10px;
`

const SignupForm = (props) => {
  const { form } = props

  const onChangeSelect = (name, value) => {
    switch (name) {
      case 'grade':
        form.setFieldsValue({ grade: value })
        break
    }
  }

  return (
    <Form className={'signupForm'} form={form}>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: '이름을 입력해주세요.',
          },
        ]}
      >
        <LargeInput placeholder="Username" />
      </Form.Item>
      <Form.Item name="email">
        <LargeInput placeholder="E-mail(Username)" disabled />
      </Form.Item>
      <div className={'detailInfo'}>
        <Form.Item name={'grade'} rules={[{ required: true }]}>
          <StyledSelect placeholder="학년" onChange={(value) => onChangeSelect('grade', value)} allowClear>
            <Option value={1}>1</Option>
            <Option value={2}>2</Option>
            <Option value={3}>3</Option>
          </StyledSelect>
        </Form.Item>
        <Form.Item name={'class'} rules={[{ required: true }]}>
          <SmallInput placeholder="반" />
        </Form.Item>
        <Form.Item name={'Number'} rules={[{ required: true }]}>
          <SmallInput placeholder="번호" />
        </Form.Item>
      </div>
      {/*<Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>*/}
      {/*  <Input type="password" placeholder="Password" />*/}
      {/*</Form.Item>*/}
    </Form>
  )
}

export default SignupForm
