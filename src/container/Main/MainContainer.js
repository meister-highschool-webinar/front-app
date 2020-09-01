import React from 'react'
import { observer, useLocalStore } from 'mobx-react'
import Info from 'components/Info'
import TimeTable from 'components/TimeTable'
import Main from 'components/Main'
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

  const { menuIndex, changeMenu, sideMenuIndex, changeSideMenu } = store

  const InfoMenus = [
    { title: '정보', contents: Info },
    { title: '타임테이블', contents: TimeTable },
  ]

  const SideMenuInfo = [
    { title: '채팅', img: chatIcon, active: chatActiveIcon, content: MainChat },
    { title: '설문결과', img: surveyIcon, active: surveyActiveIcon, content: MainSurvey },
    { title: '럭키드로우', img: luckydrawIcon, active: luckydrawActiveIcon, content: MainLuckydraw },
  ]

  return (
    <>
      <Main
        InfoMenus={InfoMenus}
        menuIndex={menuIndex}
        changeMenu={changeMenu}
        sideMenuIndex={sideMenuIndex}
        changeSideMenu={changeSideMenu}
        SideMenuInfo={SideMenuInfo}
      />
    </>
  )
})

export default MainContainer
