import React, { useEffect } from 'react'
import { toJS } from 'mobx'
import { observer, useLocalStore } from 'mobx-react'
import moment from 'moment'
import { getTimeTable } from 'utils/apis'
import { makeLineBreak } from 'utils/stringFormat'
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

  const getMainDate = () => {
    if(timeTableList.length !== 0) return moment(timeTableList[0].start_time).format('MM/DD')
  }

  return (
    <div className={'timeTableContainer'}>
      <div className={'mainDate'}>{getMainDate()}</div>
      <div className={'timeTable'}>
        {
          timeTableList && timeTableList.map((data, idx) => {
            const { start_time, end_time, speech, track_name } = data
            const time_result = (moment(end_time) - moment(start_time)) / 60000
            return (
              <div key={`table_list_${idx}`} className={idx % 2 === 0 ? 'timeTable__list' : 'timeTable__list odd'}>
                <div className={'timeTable__list-number'}>{idx + 1}</div>
                <div className={'timeTable__list-data'}>
                  <div>{moment.parseZone(start_time).format(' HH:mm')} - {moment.parseZone(end_time).format(' HH:mm')} ({time_result}')</div>
                  <div>{makeLineBreak(track_name)}</div>
                  <div>{makeLineBreak(speech)}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
})

export default MainTimeTable