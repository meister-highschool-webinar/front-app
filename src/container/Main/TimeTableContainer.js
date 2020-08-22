import React, { useCallback, useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import { stores } from 'stores'
import TimeTable from 'components/TimeTable'
import moment from 'moment'
import TimeTableTemp from 'components/TimeTable/TimeTableTemp/TimeTableTemp'

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
        <tr>
          <TimeTableTemp start_time={start_time} end_time={end_time} speech={speech} track_name={track_name} />
        </tr>
      </>
    )
  })

  useEffect(() => {
    handleGetTimeTable()
  }, [handleGetTimeTable])

  return <TimeTable TimeTableListMap={TimeTableListMap} />
})

export default TimeTableContainer
