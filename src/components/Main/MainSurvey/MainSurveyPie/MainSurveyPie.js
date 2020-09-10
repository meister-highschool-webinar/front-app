import React from 'react'
import { PieChart, Pie, Legend, Cell, Tooltip } from 'recharts'
import './MainSurveyPie.scss'

const COLORS = ['#ff6666', '#ff9966', '#ffcc99', '#999999', '#cccccc']

const MainSurveyPie = ({ datas, title }) => {
  const sorted = datas.slice(0).sort(function (a, b) {
    return a.count > b.count ? -1 : a.count < b.count ? 1 : 0
  })

  const getColor = (i) => {
    return i > 4 ? COLORS[4] : COLORS[i]
  }

  return (
    <div className="main-survey-pie">
      <PieChart width={374} height={200}>
        <text style={{ fontWeight: '700' }} x={105} y={105} textAnchor="middle" dominantBaseline="middle">
          {title}
        </text>
        <Pie innerRadius={30} outerRadius={80} data={datas} cx={100} cy={100} labelLine={false} fill="#8884d8" dataKey="count" valueKey="name">
          {datas.map((entry, index) => {
            const color = getColor(sorted.indexOf(entry))
            return <Cell name={entry.name} key={`cell-${index}`} fill={color} />
          })}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default MainSurveyPie
