import React from 'react'
import { InfoLayout } from 'components/Layouts'
import VideoSection from 'components/Video'
import MainSide from './MainSide'
import './Main.scss'

const Main = ({ InfoMenus, changeMenu, menuIndex, sideMenuIndex, changeSideMenu, SideMenuInfo, link }) => {
  return (
    <div className={'mainpage'}>
      <div className={'main_container'}>
        <VideoSection link={link} />
        <InfoLayout menus={InfoMenus} menuIndex={menuIndex} changeMenu={changeMenu} />
      </div>
      <MainSide sideMenuIndex={sideMenuIndex} changeSideMenu={changeSideMenu} SideMenuInfo={SideMenuInfo} />
    </div>
  )
}

export default Main
