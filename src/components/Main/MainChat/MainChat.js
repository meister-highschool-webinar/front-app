import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import { useStores } from 'stores'
import Swal from 'sweetalert2'
import './MainChat.scss'

const MainChat = observer(() => {
  let history = useHistory()
  const { chatStore, userStore } = useStores()
  const { chatData, chatList, onChatChange } = chatStore
  const { accessToken, socket } = userStore
  const chatRef = useRef()

  const inputChange = (e) => onChatChange(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault()
    if (accessToken.length === 0) {
      Swal.fire({
        title: '오류',
        text: '로그인이 필요한 서비스 입니다.',
        icon: 'error',
      })
      history.push('/login')
    } else {
      if (chatData.length > 0) socket.emit('send message', chatData)
      onChatChange('')
    }
  }

  useEffect(() => {
    chatRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }, [chatList[chatList.length - 1]])

  return (
    <div className={'chatContainer'}>
      <div className={'chatLogBox'}>
        {chatList.map((chat, idx) => (
          <div className={'inChatBox'} key={`chat${idx}`}>
            <p className={'chatName'}>{chat.student_name}</p>
            <p className={'chatContent'}>{chat.text}</p>
          </div>
        ))}
        <div ref={chatRef} />
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
