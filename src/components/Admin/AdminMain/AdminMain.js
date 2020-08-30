import React from 'react'
import './AdminMain.scss'
import webinar from 'assets/images/logo@3x.png'
import video from 'assets/images/video-icon@3x.png'
import timetable from 'assets/images/timetable-icon@3x.png'
import download from 'assets/images/download-button@3x.png'
import chat from 'assets/images/chatting-icon@3x.png'
import survey from 'assets/images/survey-icon@3x.png'
import luckydraw from 'assets/images/luckydraw-icon@3x.png'
import webinaStart from 'assets/images/webina-start@3x.png'

const AdminMain = ({ handleCreateWebinarInfo, linkInput, setLinkInput, titleInput, setTitleInput, detailInput, setDetailInput }) => {
  return (
    <>
      <div className={'AdminMain'}>
        <div className={'AdminMain_header'}>
          <img src={webinar} alt="webinar" />
          <h3>{'SW마이스터고 온라인 톡톡톡 관리자'}</h3>
        </div>
        <div className={'AdminMain_wrap'}>
          <div className={'AdminMain_wrap_item'}>
            <div className="AdminMain_wrap_item_icon">
              <div>
                <img src={video} alt="video_icon" />
                <span>영상</span>
              </div>
            </div>
            <div className={'AdminMain_wrap_item_input'}>
              <span>링크</span>
              <input type="text" placeholder={'유튜브 주소 입력'} value={linkInput} onChange={(e) => setLinkInput(e.target.value)} />
            </div>
          </div>
          <div className={'AdminMain_wrap_item'}>
            <div className={'AdminMain_wrap_item_input'}>
              <span>타이틀</span>
              <input type="text" placeholder={'웨비나 타이틀 입력'} value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
            </div>
          </div>
          <div className={'AdminMain_wrap_item'}>
            <div className={'AdminMain_wrap_item_input'}>
              <span>상세정보</span>
              <textarea
                placeholder={'사용자 메인화면에서 보여주는 웨비나 정보 입력'}
                value={detailInput}
                onChange={(e) => setDetailInput(e.target.value)}
              />
            </div>
          </div>

          <div className={'AdminMain_wrap_item'}>
            <div className="AdminMain_wrap_item_icon">
              <div>
                <img src={timetable} alt="timetable_icon" />
                <span>타임테이블</span>
              </div>
              <img className={'AdminMain_wrap_item_icon_download'} src={download} alt="download-button" />
            </div>
            <div className={'AdminMain_wrap_item_timetable'} />
          </div>

          <div className={'AdminMain_wrap_footer'}>
            <div className={'AdminMain_wrap_footer_item'}>
              <img src={chat} alt="chatting-icon" />
              <span>채팅내역</span>
              <img className={'AdminMain_wrap_footer_item_download'} src={download} alt="download-button" />
            </div>
            <div className={'AdminMain_wrap_footer_item'}>
              <img src={survey} alt="chatting-icon" />
              <span>설문결과</span>
              <img className={'AdminMain_wrap_footer_item_download'} src={download} alt="download-button" />
            </div>
            <div className={'AdminMain_wrap_footer_item'}>
              <img src={luckydraw} alt="chatting-icon" />
              <span>럭키드로우</span>
              <img className={'AdminMain_wrap_footer_item_download'} src={download} alt="download-button" />
            </div>
            <img className={'AdminMain_wrap_footer_start'} src={webinaStart} alt="webina_start" onClick={() => handleCreateWebinarInfo()} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminMain
