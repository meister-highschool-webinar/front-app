import React, { useCallback, useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import { stores } from 'stores'
import InfoContainer from 'container/Main/InfoContainer'
import TimeTable from 'components/TimeTable'
import Main from 'components/Main'
import TimeTableContainer from 'container/Main/TimeTableContainer'
import MainChat from 'components/Main/MainChat'
import MainSurvey from 'components/Main/MainSurvey'
import MainLuckydraw from 'components/Main/MainLuckydraw'
import chatIcon from 'assets/images/chatting-icon@3x.png'
import surveyIcon from 'assets/images/survey-icon@3x.png'
import luckydrawIcon from 'assets/images/luckydraw-icon@3x.png'
import chatActiveIcon from 'assets/images/chatting-active-icon@3x.png'
import surveyActiveIcon from 'assets/images/survey-active-icon@3x.png'
import luckydrawActiveIcon from 'assets/images/luckydraw-active-icon@3x.png'

const MainContainer = observer(() => {
  const { getWebinarInfo, link, title, detail } = stores.WebinarInfoStore
  const store = useLocalStore(() => ({
    menuIndex: 0,
    changeMenu: (index) => {
      store.menuIndex = index
    },
    sideMenuIndex: 0,
    changeSideMenu: (index) => {
      store.sideMenuIndex = index
    },
  }))
  const handleGetWebinarInfo = useCallback(async () => {
    try {
      await getWebinarInfo()
    } catch (error) {
      return error
    }
  }, [getWebinarInfo])

  const { menuIndex, changeMenu, sideMenuIndex, changeSideMenu } = store

  const InfoMenus = [
    { title: '정보', contents: InfoContainer },
    { title: '타임테이블', contents: TimeTableContainer },
  ]

  const SideMenuInfo = [
    { title: '채팅', img: chatIcon, active: chatActiveIcon, content: MainChat },
    { title: '설문결과', img: surveyIcon, active: surveyActiveIcon, content: MainSurvey },
    { title: '럭키드로우', img: luckydrawIcon, active: luckydrawActiveIcon, content: MainLuckydraw },
  ]

  useEffect(() => {
    handleGetWebinarInfo()
  }, [handleGetWebinarInfo])

  return (
    <>
      <Main
        InfoMenus={InfoMenus}
        menuIndex={menuIndex}
        changeMenu={changeMenu}
        sideMenuIndex={sideMenuIndex}
        changeSideMenu={changeSideMenu}
        SideMenuInfo={SideMenuInfo}
        link={link} title={title} detail={detail} 
      />
    </>
  )
})

export default MainContainer
