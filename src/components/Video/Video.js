import React from 'react'
import './video.scss'
import ReactPlayer from 'react-player'
import homeButton from 'assets/images/home-button@3x.png'

const Video = ({ link }) => {
  return (
    <div className={'video_section'}>
      <img src={homeButton} alt=""></img>
      <div className={'video'}>
        <ReactPlayer url={link} width="100%" height="100%" controls={true} />
      </div>
    </div>
  )
}

export default Video
