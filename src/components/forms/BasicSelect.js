import React, { useState } from 'react'
import 'components/Login/pastLogin.scss'

const BasicSelect = (props) => {
  const { options, ...restProps } = props
  return (
    <select {...restProps}>
      {options.map((option, i) => {
        const { value, name, ...restOptions } = option
        return (
          <option key={`option_${name}${i}`} value={value} {...restOptions}>
            {name}
          </option>
        )
      })}
    </select>
  )
}

export default BasicSelect
