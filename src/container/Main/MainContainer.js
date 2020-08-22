import React, { useCallback, useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import Info from 'components/Info'
import TimeTable from 'components/TimeTable'
import Main from 'components/Main'
import { stores } from 'stores'

const MainContainer = observer(() => {
  const { getWebinarInfo, link } = stores.WebinarInfoStore
  console.log('getWebinarInfo', getWebinarInfo)
  console.log(link)
  const store = useLocalStore(() => ({
    menuIndex: 0,
    changeMenu: (index) => {
      store.menuIndex = index
    },
  }))
  const handleGetWebinarInfo = useCallback(() => {
    getWebinarInfo().catch((error) => {
      return error
    })
  })

  const { menuIndex, changeMenu } = store

  const InfoMenus = [
    { title: '정보', contents: Info },
    { title: '타임테이블', contents: TimeTable },
  ]

  useEffect(() => {
    handleGetWebinarInfo()
  })

  return (
    <>
      <Main InfoMenus={InfoMenus} menuIndex={menuIndex} changeMenu={changeMenu} link={link} />
    </>
  )
})

export default MainContainer
