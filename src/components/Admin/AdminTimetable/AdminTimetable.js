import React from 'react'
import './AdminTimetable.scss'
import { TimePicker } from 'antd'
import moment from 'moment'
import 'antd/dist/antd.css'

const format = 'HH:mm'

const AdminTimetable = ({ setPopup, track, setTrack, speech, setSpeech, setStart, setEnd, handleTimetable }) => {
  return (
    <div className="admin-timetable">
      <div className="admin-timetable-area" onClick={() => setPopup(false)} />
      <div className="admin-timetable-box">
        <div className="admin-timetable-box-form">
          <span>Track Name</span>
          <input type="text" autoFocus value={track} onChange={(e) => setTrack(e.target.value)} />
        </div>
        <div className="admin-timetable-box-form">
          <span>Speech</span>
          <input type="text" value={speech} onChange={(e) => setSpeech(e.target.value)} />
        </div>
        <div className="admin-timetable-box-form">
          <span>Start Time</span>
          <TimePicker defaultValue={moment(new Date(), format)} format={format} onChange={(moment, val) => setStart(val)} />
        </div>
        <div className="admin-timetable-box-form">
          <span>End Time</span>
          <TimePicker defaultValue={moment(new Date(), format)} format={format} onChange={(moment, val) => setEnd(val)} />
        </div>
        <div className="admin-timetable-box-btn">
          <button onClick={() => setPopup(false)}>취소</button>
          <button onClick={() => handleTimetable()}>저장</button>
        </div>
      </div>
    </div>
  )
}

export default AdminTimetable
