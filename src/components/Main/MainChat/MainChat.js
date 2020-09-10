import React, { useEffect } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import { useStores } from 'stores'
import io from 'socket.io-client'
import Swal from 'sweetalert2'
import './MainChat.scss'

const MainChat = observer(() => {
  let history = useHistory()
  const { chatStore } = useStores()
  const { chatData, chatList, onChatChange, chatListUpdate } = chatStore
  const token = sessionStorage.getItem('accessToken')

  const socket = io(`http://54.180.138.80:3000`, {
    query: {
      token: token,
    },
  })

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected')
      socket.on('connected_change', (data) => {})
    })

    socket.on('receive message', (message) => {
      // console.log('receive message', message)
      chatListUpdate(message)
    })
    return () => socket.disconnect()
  }, [])

  const inputChange = (e) => onChatChange(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault()
    if (token == null) {
      Swal.fire({
        title: '오류',
        text: '로그인이 필요한 서비스 입니다.',
        icon: 'error',
      })
      history.push('/login')
    } else {
      socket.emit('send message', chatData)
      onChatChange('')
    }
  }

  // console.log('chatList', toJS(chatList))

  return (
    <div className={'chatContainer'}>
      <div className={'chatLogBox'}>
        {chatList.map((chat) => (
          <div className={'inChatBox'}>
            <p className={'chatName'}>{chat.student_name}</p>
            <p className={'chatContent'}>{chat.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <div className={'chatBox'}>
          <input id="chatInput" type="textarea" value={chatData} onChange={inputChange} />
        </div>
        <div className={'chatEnterArea'}>
          <button type="submit" className={'chatEnterIcon'} />
        </div>
      </form>
    </div>
  )
})

export default MainChat
