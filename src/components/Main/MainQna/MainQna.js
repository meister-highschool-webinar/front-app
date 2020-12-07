import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { useStores } from 'stores'
import { getTokenVerification } from 'utils/token'
import usePageTracking from 'utils/ga'
import { getAllChat } from 'utils/apis'
import xIcon from 'assets/images/x-icon@3x.png'
import './mainQna.scss'

const MainQna = observer(() => {
  const { chatStore, userStore } = useStores()
  const { qnaList, setQnaList } = chatStore
  const { socket } = userStore
  usePageTracking('qna')

  const removeMsg = (id) => {
    socket.emit('delete message', { msgId: id })
  }

  useEffect(() => {
    getAllChat()
      .then(({ chatList }) => {
        if(qnaList.length !== chatList.filter((chatData) => chatData.question === true).length) {
          // console.log('update qna', toJS(qnaList), chatList.filter((chatData) => chatData.question === true))
          setQnaList(chatList)
        }
      })
  },[])

  return (
    <div className={'qnaContainer'}>
      {
        qnaList && qnaList.map((qna, idx) => (
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