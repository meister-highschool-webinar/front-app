import React from 'react'
import './info.scss'

const Info = ({ title, detail }) => {
  return (
    <div className={'info'}>
      <h1>{title}</h1>
      <div className={'contents'}>{detail}</div>
    </div>
  )
}

export default Info
