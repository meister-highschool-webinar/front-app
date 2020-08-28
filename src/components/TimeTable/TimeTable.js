import React from 'react'
import './timetable.scss'
import moment from 'moment'

const TimeTable = ({ timeTableListMap, timeTableStartTime, title }) => {
  console.log('title', title)
  return (
    <div className={'timetable'}>
      <h1>{title}</h1>
      <div className={'contents'}>
        <div className="contents_date">
          <div>{timeTableStartTime}</div>
        </div>
        <div className="contents_table">
          <table style={{ borderSpacing: '0' }}>{timeTableListMap}</table>
        </div>
      </div>
    </div>
  )
}

export default TimeTable
