import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import io from 'socket.io-client'
import './MainChat.scss'

const MainChat = () => {
  let history = useHistory()
  const [chatData, setChatData] = useState('')
  const [chatList, setChatList] = useState([])

  const getToken = sessionStorage.getItem('accessToken')
  const socket = io(`http://54.180.138.80:3000`, {
    query: {
      token: getToken,
    },
  })

  socket.on('connect', () => {
    console.log('connection')
    socket.on('connected_change', (data) => {
      console.log(data)
    })
  })

  useEffect(() => {
    socket.on('receive message', (message) => {
      console.log(message)
      setChatList(chatList.concat(message))
    })
  })

  const onChange = (e) => {
    setChatData(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (getToken == null) {
      alert('로그인이 필요한 서비스 입니다.')
      history.push('/login')
    } else {
      console.log(chatData)
      socket.emit('send message', chatData)
      setChatData('')
    }
  }

  return (
    <div>
      <div className={'chatlogBox'}>
        {chatList.map((chat) => (
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
