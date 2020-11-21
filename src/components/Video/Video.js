import React from 'react'
import './video.scss'
import ReactPlayer from 'react-player'

const Video = ({ link }) => {
  return (
    <div className={'video_section'}>
      <div className={'video'}>
        <ReactPlayer url={link} width="100%" height="100%" controls={true} />
      </div>
    </div>
  )
}

export default Video
