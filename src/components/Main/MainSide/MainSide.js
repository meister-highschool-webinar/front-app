import React from 'react'
import './mainSide.scss'

const MainSide = ({ sideMenuIndex, changeSideMenu, SideMenuInfo }) => {
  const MainSideContent = SideMenuInfo[sideMenuIndex].content
  const title = SideMenuInfo[sideMenuIndex].title

  return (
    <div className="main_side">
      <div className="main_side_nav">
        {SideMenuInfo.map((menu, i) => {
          return (
            <div className={i !== 2 ? "menu" : "menu timetable"}>
              <img key={i} src={sideMenuIndex === i ? menu.active : menu.img} alt="icon" onClick={() => changeSideMenu(i)} />
              <div className={sideMenuIndex === i ? "menu_title active" : "menu_title" }>{SideMenuInfo[i].title}</div>
            </div>
          )
        })}
      </div>
      {MainSideContent}
    </div>
  )
}

export default MainSide
