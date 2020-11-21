import React from 'react'
import './infoLayout.scss'
import { BsQuestionCircleFill } from 'react-icons/bs'

const InfoLayout = (props) => {
  const { menus, changeMenu, menuIndex } = props

  const MenuContents = menus[menuIndex].contents

  return (
    <div className={'info_layout'}>
      <div className={'contents_container'}>
        <MenuContents />
      </div>
      {/*<div className={'menu_container'}>*/}
      {/*  {menus.map((menu, i) => (*/}
      {/*    <div*/}
      {/*      className={menuIndex === i ? 'menu active' : 'menu'}*/}
      {/*      onClick={() => {*/}
      {/*        changeMenu(i)*/}
      {/*      }}*/}
      {/*      key={i}*/}
      {/*    >*/}
      {/*      <div className={'menu_item'}>*/}
      {/*        {i === 0 && <BsQuestionCircleFill style={{ width: '30px', height: '30px', margin: 'auto' }} />}*/}
      {/*        <div className="menu_item_info">{menu.title}</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  )
}

export default InfoLayout
