import React, { useCallback, useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import { stores } from 'stores'
import TimeTable from 'components/TimeTable'
import moment from 'moment'

const TimeTableContainer = observer(() => {
  const { getTimeTable, TimeTableList } = stores.WebinarTimeTableStore

  console.log(TimeTableList)
  const handleGetTimeTable = useCallback(() => {
    getTimeTable()
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        return error
      })
  }, [getTimeTable])

  const TimeTableListMap = TimeTableList.map((data) => {
    const { start_time, end_time, speech, track_name } = data
    return (
      <>
        <div>
          {moment(start_time).format('YYYY-MM-DD')},{moment(end_time).format('YYYY-MM-DD')},{track_name},{speech}
        </div>
      </>
    )
  })

  useEffect(() => {
    handleGetTimeTable()
  }, [handleGetTimeTable])

  return <TimeTable TimeTableListMap={TimeTableListMap} />
})

export default TimeTableContainer
