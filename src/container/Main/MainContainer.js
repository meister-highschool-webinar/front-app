import React from 'react'
import { observer, useLocalStore } from 'mobx-react'
import Info from 'components/Info'
import TimeTable from 'components/TimeTable'
import Main from 'components/Main'

const MainContainer = () => {
  const store = useLocalStore(() => ({
    menuIndex: 0,
    changeMenu: (index) => {
      store.menuIndex = index
    },
  }))

  const { menuIndex, changeMenu } = store

  const InfoMenus = [
    { title: '정보', contents: Info },
    { title: '타임테이블', contents: TimeTable },
  ]

  return (
    <>
      <Main InfoMenus={InfoMenus} menuIndex={menuIndex} changeMenu={changeMenu} />
    </>
  )
}

export default observer(MainContainer)
