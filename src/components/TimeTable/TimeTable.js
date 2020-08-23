import React from 'react'
import './timetable.scss'
// import { Table } from 'react-bootstrap'

const TimeTable = ({ TimeTableListMap }) => {
  return (
    <div className={'timetable'}>
      <h1>타임테이블</h1>
      <div className={'contents'}>
        <div className="contents_date">
          <div>여기 시간</div>
        </div>
        <div className="contents_table">
          <table style={{ borderSpacing: '0' }}>{TimeTableListMap}</table>
        </div>
      </div>
    </div>
  )
}

export default TimeTable
