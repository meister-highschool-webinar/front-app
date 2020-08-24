import React, { useCallback, useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import InfoContainer from 'container/Main/InfoContainer'
import TimeTable from 'components/TimeTable'
import Main from 'components/Main'
import TimeTableContainer from 'container/Main/TimeTableContainer'

import { stores } from 'stores'

const MainContainer = observer(() => {
  const { getWebinarInfo, link, title, detail } = stores.WebinarInfoStore

  const store = useLocalStore(() => ({
    menuIndex: 0,
    changeMenu: (index) => {
      store.menuIndex = index
    },
  }))
  const handleGetWebinarInfo = useCallback(async () => {
    try {
      await getWebinarInfo()
    } catch (error) {
      return error
    }
  }, [getWebinarInfo])

  const { menuIndex, changeMenu } = store

  const InfoMenus = [
    { title: '정보', contents: InfoContainer },
    { title: '타임테이블', contents: TimeTableContainer },
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
