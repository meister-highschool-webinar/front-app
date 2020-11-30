import React, { useEffect } from 'react'
import MainContainer from 'container/Main/MainContainer'
import { useStores } from 'stores'

const MainPage = () => {
  const { chatStore, userStore, luckyStore, WebinarInfoStore } = useStores()
  const { chatListUpdate, removeChat, removeAllChat, removeQnaList } = chatStore
  const { socket } = userStore
  const { getWebinarInfo } = WebinarInfoStore

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        // console.log('socket connected', socket)
        socket.on('connected_change', (data) => {})
      })

      socket.on('receive message', (message) => {
        // console.log('receive message', message)
        chatListUpdate(message)
      })

      socket.on('delete receive message', (id) => {
        // console.log('deleted msg id', id)
        removeChat(id)
      })

      socket.on('remove_all_chat', (res) => {
        removeAllChat()
      })

      socket.on('remove_all_qna', (res) => {
        removeQnaList()
      })

      socket.on('refresh_page', (res) => {
        getWebinarInfo()
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
