import React from 'react'
import './info.scss'

const Info = ({ title = '제목', detail = '내용' }) => {
  return (
    <div className={'info'}>
      <span className={'titleLabel'}>TITLE</span>
      <div className={'contents'}>
        <h1 className={'title'}>{title}</h1>
        <div className={'detail'}>{detail}</div>
      </div>
    </div>
  )
}

export default Info
