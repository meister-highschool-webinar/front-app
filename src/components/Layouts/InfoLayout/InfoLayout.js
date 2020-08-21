import React from 'react'
import './infoLayout.scss'

const InfoLayout = (props) => {
  const { menus, changeMenu, menuIndex } = props

  const MenuContents = menus[menuIndex].contents

  return (
    <div className={'info_layout'}>
      <div className={'contents_container'}>
        <MenuContents />
      </div>
      <div className={'menu_container'}>
        {menus.map((menu, i) => (
          <div className={menuIndex === i ? 'menu active' : 'menu'} onClick={() => changeMenu(i)} key={i}>
            {menu.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoLayout
