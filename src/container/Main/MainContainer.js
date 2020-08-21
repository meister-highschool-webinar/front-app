import React from 'react'
import Info from 'components/Info'
import TimeTable from 'components/TimeTable'
import Main from 'components/Main'

const MainContainer = () => {
  const InfoMenus = [
    { title: '정보', contents: Info },
    { title: '타임테이블', contents: TimeTable },
  ]

  return (
    <>
      <Main InfoMenus={InfoMenus} />
    </>
  )
}

export default MainContainer
