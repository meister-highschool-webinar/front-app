import React from 'react'
import './timetable.scss'

const TimeTable = ({ title, timeTableListMap, timeTableStartTime }) => {
  return (
    <div className={'timetable'}>
      {title && <h1>{title}</h1>}
      <div className={'contents'}>
        <div className="contents_date">
          <div>{timeTableStartTime}</div>
        </div>
        <div className="contents_table">
          <table style={{ borderSpacing: '0' }}>
            <tbody>{timeTableListMap}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TimeTable
