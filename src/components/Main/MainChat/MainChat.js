import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import './MainChat.scss'

const getToken = localStorage.getItem('accessToken')
const socket = io(`http://54.180.138.80:3000`, {
  query: {
    token: getToken
  }
})

const MainChat = () => {
  const [chatData, setChatData] = useState('')
  const [chatList, setChatList] = useState([])
  socket.on('connect', () => {
    console.log('connection')
    socket.on('connected_change')
  })

  useEffect(() => {
    socket.on('receive message', (message) => {
      setChatList(chatList.concat(message))
    })
  })

  const onChange = (e) => {
    setChatData(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    socket.emit('send message', chatData)
    setChatData('')
  }

  return (
    <div>
      <div className={'chatlogBox'}>
        {chatList.map(chat => (
          <div className={'inChatBox'}>
            <p className={'chatName'}>{chat.student_name}</p>
            <p className={'chatContent'}>{chat.text}</p>            
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <div className={'chatBox'}>
          <input id="chatInput" type="textarea" value={chatData} onChange={onChange}></input>
        </div>
        <div className={'chatEnterArea'}>
          <button type="submit" className={'chatEnterIcon'}></button>
        </div>
      </form>
    </div>
  )
}

export default MainChat
