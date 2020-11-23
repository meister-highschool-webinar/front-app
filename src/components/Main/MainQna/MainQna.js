import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'stores'
import xIcon from 'assets/images/x-icon@3x.png'
import './mainQna.scss'

const MainQna = observer(() => {
  const { chatStore } = useStores()
  const { chatList, questionList } = chatStore

  return (
    <div className={'qnaContainer'}>
      {
        questionList && questionList.map((qna) => (
          <div className={'qnaBox'}>
            <div className={'qnaBox__header'}>
              {/*<img src={xIcon} alt={'xIcon'} />*/}
            </div>
            <div className={'qnaBox__contents'}>Q. {qna.text}</div>
          </div>
        ))
      }
    </div>
  )
})

export default MainQna