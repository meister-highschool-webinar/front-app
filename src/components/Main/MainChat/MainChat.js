import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './MainChat.scss'

const getToken = localStorage.getItem('accessToken')
const socket = io(`http://54.180.138.80:3000?token=${getToken}`)

const MainChat = () => {
  const [chatData, setChatData] = useState('')

  socket.on('connect', () => {
    console.log('connection')

    socket.on('connected_change', (data) => {
      console.log('현재 접속 인원', data)
    })
  })

  useEffect(() => {
    console.log('채팅 불러오기!')
    socket.on('receive message', (chatList) => {
      console.log('receove', chatList)
    })
  })

  const onChange = (e) => {
    setChatData(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    console.log('content', chatData)
    socket.emit('send message', (chatData) => {
      console.log(chatData)
    })
  }

  return (
    <div>
      <div className={'chatlogBox'}>채팅박스</div>
      <form onSubmit={onSubmit}>
        <div className={'chatBox'}>
          <textarea value={chatData} onChange={onChange} />
        </div>
        <div className={'chatEnterArea'}>
          <button type="submit" className={'chatEnterIcon'}></button>
        </div>
      </form>
    </div>
  )
}

export default MainChat
