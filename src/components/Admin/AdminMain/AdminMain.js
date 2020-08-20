import React from 'react'
import './AdminMain.scss'
import webinar from 'assets/images/webinar@3x.png'

const AdminMain = () => {
  return (
    <>
      <div className={'AdminMain'}>
        <div className={'AdminMain_header'}>
          <img src={webinar} alt="" />
        </div>
        <div className={'AdminMain_wrap'}></div>
      </div>
    </>
  )
}

export default AdminMain
