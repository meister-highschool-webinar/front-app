import React, { useCallback, useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import InfoContainer from 'container/Main/InfoContainer'
import TimeTable from 'components/TimeTable'
import Main from 'components/Main'
import { stores } from 'stores'

const MainContainer = observer(() => {
  const { getWebinarInfo, link, title, detail } = stores.WebinarInfoStore
  console.log('getWebinarInfo', getWebinarInfo)
  console.log(link, title, detail)
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
  }, [getWebinarInfo])

  const { menuIndex, changeMenu } = store

  const InfoMenus = [
    { title: '정보', contents: InfoContainer },
    { title: '타임테이블', contents: TimeTable },
  ]

  useEffect(() => {
    handleGetWebinarInfo()
  }, [handleGetWebinarInfo])

  return (
    <>
      <Main InfoMenus={InfoMenus} menuIndex={menuIndex} changeMenu={changeMenu} link={link} title={title} detail={detail} />
    </>
  )
})

export default MainContainer
