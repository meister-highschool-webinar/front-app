import React, { useEffect } from 'react'
import MainContainer from 'container/Main/MainContainer'
import { useStores } from 'stores'

const MainPage = () => {
  const { chatStore, userStore, luckyStore } = useStores()
  const { chatListUpdate } = chatStore
  const { socket } = userStore

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('socket connected', socket)
        socket.on('connected_change', (data) => {})
      })

      socket.on('receive message', (message) => {
        // console.log('receive message', message)
        console.log('receive message', message)
        chatListUpdate(message)
      })

      socket.on('delete receive message', (id) => {
        console.log('deleted msg id', id)
      })

      socket.on('winner', (info) => {
        // console.log('winner', info)
        luckyStore.setCurrentWinner(info)
      })
      return () => socket.disconnect()
    }
  }, [socket])

  return <MainContainer />
}

export default MainPage
