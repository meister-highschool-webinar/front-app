import React from 'react'
import Header from 'components/Header/Header'

const Template = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Template
