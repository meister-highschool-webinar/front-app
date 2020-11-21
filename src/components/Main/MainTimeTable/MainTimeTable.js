import React, { useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import moment from 'moment'
import { getTimeTable } from 'utils/apis'
import './mainTimeTable.scss'

const MainTimeTable = observer(() => {
  const store = useLocalStore(() => ({
    timeTableList: [],
    setTimeTableList: (list) => store.timeTableList = list,
  }))
  const { timeTableList, setTimeTableList } = store

  useEffect(() => {
    getTimeTable().then((res) => {
      const { timeTableList } = res
      setTimeTableList(timeTableList)
    })
  }, [])

  console.log('table', timeTableList)
  const getMainDate = () => {
    if(timeTableList.length !== 0) return moment(timeTableList[0].start_time).format('MM/DD')
  }

  return (
    <div className={'qnaContainer'}>
      <div className={'mainDate'}>
        {getMainDate()}
      </div>
    </div>
  )
})

export default MainTimeTable