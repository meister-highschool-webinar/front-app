import React, { useCallback, useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import Info from 'components/Info'
import { stores } from 'stores'

const InfoContainer = observer(() => {
  const { title, detail } = stores.WebinarInfoStore

  return <Info title={title} detail={detail} />
})

export default InfoContainer
