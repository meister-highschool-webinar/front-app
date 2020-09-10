import React from 'react'

function LuckyDrawItem(props) {
  return (
    <div className="table__list">
      <div>
        <span>{props.ix + 1}</span>
      </div>
      <div>
        <span className="school">{props.schoolName}</span>
      </div>
      <div>
        <span className="grade">{props.grade}</span>
      </div>
      <div>
        <span className="class">{props.class}</span>
      </div>
      <div>
        <span className="number">{props.number}</span>
      </div>
    </div>
  )
}

export default LuckyDrawItem
