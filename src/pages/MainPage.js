import React, { useEffect } from 'react'
import MainContainer from 'container/Main/MainContainer'
import { useStores } from 'stores'

const MainPage = () => {
  const { chatStore, userStore } = useStores()
  const { chatListUpdate } = chatStore
  const { socket } = userStore

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('connected')
        socket.on('connected_change', (data) => {})
      })

      socket.on('receive message', (message) => {
        chatListUpdate(message)
      })
      return () => socket.disconnect()
    }
  }, [socket])

  return <MainContainer />
}

export default MainPage
