import React, { useCallback, useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import { stores } from 'stores'
import TimeTable from 'components/TimeTable'
import moment from 'moment'
import TimeTableTemp from 'components/TimeTable/TimeTableTemp/TimeTableTemp'

const TimeTableContainer = observer(() => {
  const { getTimeTable, timeTableList, tableStartTime } = stores.WebinarTimeTableStore
  const { title } = stores.WebinarInfoStore
  console.log(timeTableList)

  const handleGetTimeTable = useCallback(() => {
    getTimeTable().catch((error) => {
      return error
    })
  }, [getTimeTable])

  const timeTableListMap =
    timeTableList &&
    timeTableList.map((data) => {
      const { start_time, end_time, speech, track_name } = data
      const start_time_min = new Date(start_time).getMinutes()
      const end_time_min = new Date(end_time).getMinutes()
      const start_time_hour = new Date(start_time).getHours()
      const end_time_hour = new Date(end_time).getHours()
      const min_result = end_time_min - start_time_min
      const hour_result = (end_time_hour - start_time_hour) * 60
      const time_result = hour_result + min_result

      return (
        <>
          <tr>
            <TimeTableTemp art_time={start_time} end_time={end_time} speech={speech} track_name={track_name} result={time_result} />
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
