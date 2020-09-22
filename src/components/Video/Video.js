import React from 'react'
import './video.scss'
import ReactPlayer from 'react-player'
import homeButton from 'assets/images/home-button@3x.png'
import ainizeLogo from 'assets/images/ainize.png'

const Video = ({ link }) => {
  return (
    <div className={'video_section'}>
      <div className={'img_container'}>
        <img src={homeButton} alt="" className={'talk'} />
        <img src={ainizeLogo} alt="ainize" className={'ainize'} />
      </div>
      <div className={'video'}>
        <ReactPlayer url={link} width="100%" height="100%" controls={true} />
      </div>
    </div>
  )
}

export default Video
