import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import { Checkbox } from 'antd'
import { useStores } from 'stores'
import { limitEnterNum, checkLineOver, checkLength } from 'utils/stringFormat'
import Swal from 'sweetalert2'
import nonConnectIcon from 'assets/images/non-connect-icon@2x.png'
import connectIcon from 'assets/images/connect-icon@2x.png'
import './MainChat.scss'

const MainChat = observer(() => {
  let history = useHistory()
  const { chatStore, userStore } = useStores()
  const { chatData, chatList, onChatChange } = chatStore
  const { accessToken, socket, userData } = userStore
  const chatRef = useRef()

  const inputChange = (e) => {
    let chat = limitEnterNum(e.target.value)
    const maxRow = e.target.rows
    if (checkLineOver(chat, maxRow)) {
      Swal.fire({
        title: '줄 제한',
        text: '7줄 이상 입력할 수 없습니다.',
        icon: 'warning',
      })
      return
    }
    if (checkLength(chat, 300)) {
      Swal.fire({
        title: '300자 제한',
        text: '300자 이상 채팅할 수 없습니다.',
        icon: 'warning',
      })
      chat = chat.substring(0, 300)
    }
    onChatChange(chat)
  }
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
      if (chatData.length > 0 && (chatData.trim() !== '' || chatData.trim().length !== 0)) socket.emit('send message', chatData)
      onChatChange('')
    }
  }

  const showImg = () => {
    if (accessToken.length === 0) {
      return (
        <img
          src={nonConnectIcon}
          alt={'non_connect'}
          onClick={() => {
            Swal.fire({
              title: '로그인 필요',
              text: '로그인 페이지로 이동합니다.',
              icon: 'info',
            })
            history.push('/login')
          }}
        />
      )
    } else {
      if (chatList.length === 0) {
        return <img src={connectIcon} alt={'connect'} />
      }
    }
  }

  const checkMyMsg = (chat) => {
    if (chat.student_id === userData.studentId && chat.student_name === userData.studentName) {
      return 'inChatBox me'
    } else {
      return 'inChatBox'
    }
  }

  const qnaCheck = (e) => {
    console.log('checked?', e.target.checked)
  }

  const handleUserKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // e.preventDefault();
      onSubmit(e) // this won't be triggered
    }
  }

  useEffect(() => {
    chatRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }, [])

  return (
    <div className={'chatContainer'}>
      <div className={'chatLogBox'}>
        {showImg()}
        {chatList.map((chat, idx) => (
          <div className={checkMyMsg(chat)} key={`chat${idx}`}>
            <p className={'chatName'}>
              {chat.student_name}{' '}
              <em>
                ({chat.student_name === '01' ? 'MIT' : chat.school_name} | {chat.student_name === '01' ? '0000' : chat.student_id})
              </em>
            </p>
            <p className={'chatContent'}>{chat.text}</p>
          </div>
        ))}
        <div ref={chatRef} />
      </div>
      <Checkbox className={'checkbox'} onChange={qnaCheck}>Q&A 탭에 노출하기</Checkbox>
      <form onSubmit={onSubmit}>
        <div className={'chatBox'}>
          <textarea
            rows={6}
            id="chatInput"
            value={chatData}
            onKeyPress={handleUserKeyPress}
            onChange={inputChange}
            placeholder={'대화 내용을 입력...'}
          />
        </div>
        <div className={'chatEnterArea'}>
          <button type="submit" className={'chatEnterIcon'} />
        </div>
      </form>
    </div>
  )
})

export default MainChat
