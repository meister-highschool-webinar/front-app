import React, { useState, useCallback } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Text } from 'recharts'
import './MainSurveyBar.scss'

const COLORS = ['#ff6666', '#ff9966', '#ffcc99', '#999999', '#cccccc']

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props

  return (
    <Text x={x} y={y} width={75} fontSize={9} textAnchor="middle" verticalAnchor="start">
      {payload.value}
    </Text>
  )
}

const MainSurveyBar = ({ datas, title, style }) => {
  const sorted = datas.slice(0).sort(function (a, b) {
    return a.count > b.count ? -1 : a.count < b.count ? 1 : 0
  })

  const getColor = (i) => {
    return i > 4 ? COLORS[4] : COLORS[i]
  }

  return (
    <div className="main-survey-bar" style={style}>
      <div className="main-survey-bar-title">{title}</div>
      <BarChart width={374} height={220} data={datas} barSize={15} margin={{ right: 5, left: -35 }} style={{ marginTop: 10, marginBottom: 30 }}>
        <XAxis interval={0} dataKey="name" tick={<CustomizedAxisTick />} scale="point" padding={{ left: 10, right: 10 }} width={3} />
        <YAxis valueKey="count" fontSize={10} />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="count" fill="#8884d8" background={{ fill: '#eee' }}>
          {datas.map((entry, index) => {
            const color = getColor(sorted.indexOf(entry))
            return <Cell key={index} fill={color} />
          })}
        </Bar>
      </BarChart>
    </div>
  )
}

export default MainSurveyBar
