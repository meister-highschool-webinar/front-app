import React from 'react'
import moment from 'moment'
import './TimeTableTemp.scss'

const TimeTableTemp = ({ start_time, end_time, speech, track_name, result }) => {
  return (
    <>
      <td className="TimeTableTemp_table_time">
        {moment.parseZone(start_time).format(' HH:mm')} - {moment.parseZone(end_time).format(' HH:mm')}
      </td>
      <td className="TimeTableTemp_table_runTime">{result}분</td>
      <td className="TimeTableTemp_table_title">{track_name}</td>
      <td className="TimeTableTemp_table_name">{speech}</td>
    </>
  )
}

export default TimeTableTemp
