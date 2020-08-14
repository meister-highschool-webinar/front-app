import React from 'react'
import { observer, useLocalStore } from 'mobx-react'
import './infoLayout.scss'

const InfoLayout = observer((props) => {
  const { menus } = props
  const store = useLocalStore(() => ({
    menuIndex: 0,
    changeMenu: (index) => {
      store.menuIndex = index
    },
  }))
  const { menuIndex, changeMenu } = store
  const MenuContents = menus[menuIndex].contents

  return (
    <div className={'info_layout'}>
      <div className={'contents_container'}>
        <MenuContents />
      </div>
      <div className={'menu_container'}>
        {menus.map((menu, i) => (
          <div className={menuIndex === i ? 'menu active' : 'menu'} onClick={() => changeMenu(i)}>
            {menu.title}
          </div>
        ))}
      </div>
    </div>
  )
})

export default InfoLayout
