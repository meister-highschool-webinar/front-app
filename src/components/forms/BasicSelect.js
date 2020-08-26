import React, { useState } from 'react'
import '../Login/login.scss'

const BasicSelect = (props) => {
  const { options, ...restProps } = props
  return (
    <select {...restProps}>
      {options.map((option, i) => {
        const { value, name } = option
        return (
          <option key={`option_${name}${i}`} value={value}>
            {name}
          </option>
        )
      })}
    </select>
  )
}

export default BasicSelect
