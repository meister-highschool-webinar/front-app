import React from 'react'
import { observer } from 'mobx-react'
import Info from 'components/Info'
import { stores } from 'stores'

const InfoContainer = observer(() => {
  const { title, detail } = stores.WebinarInfoStore
  return <Info title={title} detail={detail} />
})

export default InfoContainer
