import React from 'react'
import '../Login/login.scss'

const BasicInput = (props) => {
  const { name, type = 'text', value, required = true, onChange, placeholder, autoComplete = 'off' } = props
  return <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} autoComplete={autoComplete} />
}

export default BasicInput
