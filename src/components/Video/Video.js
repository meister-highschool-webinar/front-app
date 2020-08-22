import React from 'react'
import './video.scss'
import ReactPlayer from 'react-player'
import homeButton from 'assets/images/home-button@3x.png'

const Video = () => {
  return (
    <div className={'video_section'}>
      <img src={homeButton} alt=""></img>
      <div className={'video'}>
        <ReactPlayer url="" width="100%" height="100%" />
      </div>
    </div>
  )
}

export default Video
