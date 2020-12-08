import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import Swal from 'sweetalert2'
import { useStores } from 'stores'
import { getTokenVerification } from 'utils/token'
import usePageTracking from 'utils/ga'
import { getAllChat } from 'utils/apis'
import xIcon from 'assets/images/x-icon@3x.png'
import './mainQna.scss'

const MainQna = observer(() => {
  const { chatStore, userStore } = useStores()
  const { chatList: storeChatList, qnaList, setQnaList } = chatStore
  const { socket } = userStore
  usePageTracking('qna')

  const removeMsg = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: '정말 삭제 하시겠습니까?',
      showCancelButton: true,
    })
    if (isConfirmed) socket.emit('delete message', { msgId: id })
  }

  // 웨비나 중간에 채팅 초기화 버튼을 누르면 qna 리스트는 초기화 안됨.
  useEffect(() => {
    getAllChat().then(({ chatList }) => {
      if (toJS(qnaList).length !== chatList.filter((chatData) => chatData.question === true).length) {
        // console.log('update qna', toJS(qnaList), chatList.filter((chatData) => chatData.question === true))
        setQnaList(chatList)
      }
    })
  }, [])

  return (
    <div className={'qnaContainer'}>
      {qnaList &&
        qnaList.map((qna, idx) => (
          <div key={`qna_${idx}`} className={'qnaBox'}>
            <div className={'qnaBox__header'}>
              {getTokenVerification().length > 0 && (
                <img
                  src={xIcon}
                  alt={'xIcon'}
                  onClick={() => {
                    removeMsg(qna.msg_id)
                  }}
                />
              )}
            </div>
            <div className={'qnaBox__contents'}>Q. {qna.text}</div>
          </div>
        ))}
    </div>
  )
})

export default MainQna