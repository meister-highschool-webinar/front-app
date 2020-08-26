import React from 'react'
import './mainSide.scss'

const MainSide = ({ sideMenuIndex, changeSideMenu, SideMenuInfo }) => {
  const MainSideContent = SideMenuInfo[sideMenuIndex].content

  return (
    <div className="main_side">
      <div className="main_side_nav">
        {SideMenuInfo.map((menu, i) => {
          return <img key={i} src={sideMenuIndex === i ? menu.active : menu.img} alt="icon" onClick={() => changeSideMenu(i)} />
        })}
      </div>
      <MainSideContent />
    </div>
  )
}

export default MainSide
