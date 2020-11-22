import React, { useCallback, useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import { useGoogleLogin } from 'react-google-login'
import Swal from "sweetalert2"
import { useStores } from 'stores'
import { GOOGLE_ID } from 'config/config.json'
import { getUserInfo } from 'utils/apis'
import { refreshTokenSetup } from 'utils/refreshLoginSetup'
import InfoContainer from './InfoContainer'
import TimeTableContainer from './TimeTableContainer'
import Main from 'components/Main'
import MainChat from 'components/Main/MainChat'
import MainTimeTable from 'components/Main/MainTimeTable'
import MainLuckydraw from 'components/Main/MainLuckydraw'
import MainSurveyContainer from './MainSurvey/MainSurveyContainer'
import Header from 'components/Header'

import chatIcon from 'assets/images/chatting-icon@3x.png'
import qnaIcon from 'assets/images/qna-icon@3x.png'
import timeTableIcon from 'assets/images/timetable-icon@3x.png'
import surveyIcon from 'assets/images/survey-icon@3x.png'
import luckydrawIcon from 'assets/images/luckydraw-icon@3x.png'
import chatActiveIcon from 'assets/images/chatting-active-icon@3x.png'
import qnaActiveIcon from 'assets/images/qna-active-icon@3x.png'
import timeTableActiveIcon from 'assets/images/timetable-active-icon@3x.png'
import surveyActiveIcon from 'assets/images/survey-active-icon@3x.png'
import luckydrawActiveIcon from 'assets/images/luckydraw-active-icon@3x.png'

const MainContainer = observer(() => {
  const { WebinarInfoStore, userStore } = useStores()
  const { getWebinarInfo, link, title, detail } = WebinarInfoStore
  const { userLogin, userLogout, accessToken } = userStore
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

  const handleGetWebinarInfo = useCallback(() => {
    getWebinarInfo().catch((error) => {
      return error
    })
  }, [getWebinarInfo])

  const InfoMenus = [
    { title: '정보', contents: InfoContainer },
    { title: '타임테이블', contents: TimeTableContainer },
  ]

  const SideMenuInfo = [
    { title: '채팅', img: chatIcon, active: chatActiveIcon, content: <MainChat /> },
    { title: 'Q&A', img: qnaIcon, active: qnaActiveIcon, content: <MainSurveyContainer /> },
    { title: '타임테이블', img: timeTableIcon, active: timeTableActiveIcon, content: <MainTimeTable /> },
  ]

  const onSuccess = (res) => {
    getUserInfo({ email: res.profileObj.email })
      .then((result) => {
        const { userInfo, accessToken } = result
        console.log('login complete userData: ', userInfo, accessToken)
        userLogin(userInfo, accessToken)
      })
    refreshTokenSetup(res)
  }
  const onFailure = (res) => {
    console.log('login fail', res)
    if (res.error === 'idpiframe_initialization_failed' || res.error === 'popup_closed_by_user') {
      Swal.fire({
        title: '브라우저 쿠키 설정',
        text: '브라우저 설정에서 쿠키를 허용해주세요.',
        icon: 'warning',
      })
    }
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: GOOGLE_ID,
    isSignedIn: true,
    accessType: 'offline',
  })

  useEffect(() => {
    handleGetWebinarInfo()
  }, [])

  return (
    <>
      <Header login={accessToken.length !== 0} logout={userLogout}/>
      <Main
        InfoMenus={InfoMenus}
        menuIndex={menuIndex}
        changeMenu={changeMenu}
        sideMenuIndex={sideMenuIndex}
        changeSideMenu={changeSideMenu}
        SideMenuInfo={SideMenuInfo}
        link={link}
        title={title}
        detail={detail}
      />
    </>
  )
})

export default MainContainer
