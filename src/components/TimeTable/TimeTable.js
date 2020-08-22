import React from 'react'
import './timetable.scss'

const TimeTable = ({ TimeTableListMap }) => {
  return (
    <div className={'timetable'}>
      <h1>타임테이블</h1>
      <div className={'contents'}>asdas{TimeTableListMap}</div>
    </div>
  )
}

export default TimeTable
