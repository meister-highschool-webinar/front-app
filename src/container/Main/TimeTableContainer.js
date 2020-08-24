import React, { useCallback, useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import { stores } from 'stores'
import TimeTable from 'components/TimeTable'
import moment from 'moment'
import TimeTableTemp from 'components/TimeTable/TimeTableTemp/TimeTableTemp'

const TimeTableContainer = observer(() => {
  const { getTimeTable, timeTableList, tableStartTime } = stores.WebinarTimeTableStore
  const { title } = stores.WebinarInfoStore

  const handleGetTimeTable = useCallback(() => {
    getTimeTable().catch((error) => {
      return error
    })
  }, [getTimeTable])

  const timeTableListMap =
    timeTableList &&
    timeTableList.map((data) => {
      const { start_time, end_time, speech, track_name } = data
      const start_time_min = moment.duration(moment(start_time).format('HH:mm'))
      const end_time_min = moment.duration(moment(end_time).format('HH:mm'))
      const time_result = (end_time_min - start_time_min) / 60000
      return (
        <>
          <tr>
            <TimeTableTemp start_time={start_time} end_time={end_time} speech={speech} track_name={track_name} result={time_result} />
          </tr>
        </>
      )
    })

  const timeTableStartTime = moment(tableStartTime).format('MM/DD')
  useEffect(() => {
    handleGetTimeTable()
  }, [handleGetTimeTable])

  return (
    <>
      {!timeTableListMap ? (
        '테이블에 일정이 없습니다.'
      ) : (
        <TimeTable timeTableListMap={timeTableListMap} timeTableStartTime={timeTableStartTime} title={title} />
      )}
    </>
  )
})

export default TimeTableContainer
