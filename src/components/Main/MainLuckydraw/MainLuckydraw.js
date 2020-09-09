import React from 'react'
import './MainLuckydraw.scss'
import { artwork, chattingIcon, surveyIcon, luckydrawIcon} from '../../../assets/images/index';
import LuckyDrawTable from './LuckyDrawTable';

const MainLuckydraw = () => {
  return (
    <div className="Background-box">
      <div className="contents">
        <div className="Icons">
          <img  src={chattingIcon} className="chatting-icon" />
          <img src={surveyIcon} className="survey-icon" />
          <img src={luckydrawIcon} className="luckydraw-icon" />
        </div>
        <div className="text">럭키드로우</div>
        <div className="Lucky-Draw-Area">
          <img src={artwork} className="Artwork"></img>
          <LuckyDrawTable />
        </div>
      </div>
    </div>
  );
}

export default MainLuckydraw
