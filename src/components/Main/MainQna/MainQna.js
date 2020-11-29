import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'stores'
import { getTokenVerification } from 'utils/token'
import usePageTracking from 'utils/ga'
import xIcon from 'assets/images/x-icon@3x.png'
import './mainQna.scss'

const MainQna = observer(() => {
  const { chatStore, userStore } = useStores()
  const { questionList } = chatStore
  const { socket } = userStore
  usePageTracking('qna')

  const removeMsg = (id) => {
    socket.emit('delete message', { msgId: id })
  }

  return (
    <div className={'qnaContainer'}>
      {
        questionList && questionList.map((qna, idx) => (
          <div key={`qna_${idx}`} className={'qnaBox'}>
            <div className={'qnaBox__header'}>
              { getTokenVerification().length > 0 && <img src={xIcon} alt={'xIcon'} onClick={() => {removeMsg(qna.msg_id)}}/> }
            </div>
            <div className={'qnaBox__contents'}>Q. {qna.text}</div>
          </div>
        ))
      }
    </div>
  )
})

export default MainQna