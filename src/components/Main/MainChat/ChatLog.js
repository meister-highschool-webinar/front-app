import React, { useEffect, useRef } from 'react'
import './MainChat.scss'

const ChatLog = (props) => {
  const { chatList, userData } = props
  const chatRef = useRef()

  useEffect(() => {
    chatRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }, [])


  const checkMyMsg = (chat) => {
    if (chat.student_id === userData.studentId && chat.student_name === userData.studentName) {
      return 'inChatBox me'
    } else {
      return 'inChatBox'
    }
  }

  const checkCode = (code) => {
    return code.substr(0,3) === '333'
  }

  return (
    <div className={'chatLogBox'}>
      {chatList.map((chat, idx) => (
        <div className={checkMyMsg(chat)} key={`chat${idx}`}>
          <p className={checkCode(chat.student_id) ? 'chatName teacher' : 'chatName'}>
            {checkCode(chat.student_id) ? chat.student_name + '선생님' : chat.student_name}{' '}
            <em>
              ({chat.student_name === '01' ? 'MIT' : chat.school_name})
            </em>
          </p>
          <p className={'chatContent'}>{chat.text}</p>
        </div>
      ))}
      <div ref={chatRef} />
    </div>
  )
}

export default ChatLog