import React from 'react'
import { PieChart, Pie, Legend, Cell, Tooltip } from 'recharts'
import './MainSurveyPie.scss'

const COLORS = ['#ff6666', '#ff9966', '#ffcc99', '#999999', '#cccccc']

const MainSurveyPie = ({ datas }) => {
  return (
    <div className="main-survey-pie">
      <PieChart width={440} height={200}>
        <Pie innerRadius={20} outerRadius={90} data={datas} cx={100} cy={100} labelLine={false} fill="#8884d8" dataKey="count" valueKey="name">
          {datas.map((entry, index) => (
            <Cell name={entry.name} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default MainSurveyPie
