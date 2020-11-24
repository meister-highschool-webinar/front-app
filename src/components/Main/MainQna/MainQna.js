import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'stores'
import xIcon from 'assets/images/x-icon@3x.png'
import './mainQna.scss'

const MainQna = observer(() => {
  const { chatStore, userStore } = useStores()
  const { chatList, questionList } = chatStore
  const { socket } = userStore

  console.log('qna', questionList)

  const removeMsg = (id) => {
    console.log('remove msg id', id, socket)
    socket.emit('delete message', { msgId: id })
  }

  return (
    <div className={'qnaContainer'}>
      {
        questionList && questionList.map((qna, idx) => (
          <div key={`qna_${idx}`} className={'qnaBox'}>
            <div className={'qnaBox__header'}>
              <img src={xIcon} alt={'xIcon'} onClick={() => {removeMsg(qna.msg_id)}}/>
            </div>
            <div className={'qnaBox__contents'}>Q. {qna.text}</div>
          </div>
        ))
      }
    </div>
  )
})

export default MainQna