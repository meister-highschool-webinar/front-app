import React from 'react'
import './AdminTimetable.scss'
import { TimePicker } from 'antd'
import moment from 'moment'
import 'antd/dist/antd.css'

const format = 'HH:mm'

const AdminTimetable = ({ setPopup }) => {
  return (
    <div className="admin-timetable">
      <div className="admin-timetable-area" onClick={() => setPopup(false)} />
      <div className="admin-timetable-box">
        <div className="admin-timetable-box-form">
          <TimePicker defaultValue={moment(new Date(), format)} format={format} />
        </div>
        <div className="admin-timetable-box-form">
          <TimePicker defaultValue={moment(new Date(), format)} format={format} />
        </div>
      </div>
    </div>
  )
}

export default AdminTimetable
