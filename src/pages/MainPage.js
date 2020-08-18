import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import backgroundImg from 'assets/images/background@3x.png'
import VideoSection from 'components/Video'
import { InfoLayout } from 'components/Layouts'
import Info from 'components/Info'
import TimeTable from 'components/TimeTable'
import './mainPage.scss'
import Template from 'components/Template'

const MainPage = observer(() => {
  const history = useHistory()
  const InfoMenus = [
    { title: '정보', contents: Info },
    { title: '타임테이블', contents: TimeTable },
  ]
  return (
    <Template>
      <div className={'mainpage'}>
        <div className={'main_container'}>
          <VideoSection />
          <InfoLayout menus={InfoMenus} />
        </div>
        <div className={'side_container'}>Side Menu</div>
        {/*<img src={backgroundImg} className={'background'} alt={'background'} />*/}
      </div>
    </Template>
  )
})

export default MainPage
