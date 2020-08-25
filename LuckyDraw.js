import React, {useEffect, useState} from 'react'
import './LuckyDraw.scss'
import artwork from './img/artwork.png'
import chattingIcon from './img/chatting-icon.png'
import surveyIcon from './img/survey-icon.png'
import luckydrawIcon from './img/luckydraw-icon.png'
import socketio from 'socket.io-client'



const LuckyDraw = () => {
  const [data, setData] = useState([
    {},{},{},{},{},{},{},{},{},{}
  ])
  const socket = socketio.connect('http://localhost:4000');
  socket.on('winner', (data) => {
    setData(data);
  })

  return (
    <div className="Background-box">
      <div className="contents">
        <div className="Icons">
          <img  src={chattingIcon} className="chatting-icon"></img>
          <img src={surveyIcon} className="survey-icon"></img>
          <img src={luckydrawIcon} className="luckydraw-icon"></img>
        </div>
        <div className="text">럭키드로우</div>
        <div className="Lucky-Draw-Area">
          <img src={artwork} className="Artwork"></img>
          <div className="table">
            <div className="table__list" style={{ backgroundColor: "rgb(153, 153, 153)" }}>
              <div style={{ flex: 1 }} />
              <div style={{ flex: 3 }}>
                <span style={{ color: "white" }}>학교</span>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ color: "white" }}>학년</span>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ color: "white" }}>반</span>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ color: "white" }}>번호</span>
              </div>
            </div>
            {data.map((item, ix) => {
              return (
                <div className="table__list">
                  <div style={{ flex: 1 }}>
                    <span>{ix + 1}</span>
                  </div>
                  <div style={{ flex: 3 }}>
                    <span className="school">{item.schoolName}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span className="grade">{item.grade}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span className="class">{item.class}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span className="num">{item.number}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LuckyDraw;