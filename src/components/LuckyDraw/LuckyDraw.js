import React from 'react';
import './LuckyDraw.scss';
import { artwork, chattingIcon, surveyIcon, luckydrawIcon} from './img';
import LuckyDrawTable from './LuckyDrawTable';


const LuckyDraw = () => {
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
          <div className="table__flist">
            <div />
            <div>
                <span>학교</span>
            </div>
            <div>
                <span>학년</span>
            </div>
            <div>
                <span>반</span>
            </div>
            <div>
                <span>번호</span>
            </div>
          </div>
          <LuckyDrawTable />
        </div>
      </div>
    </div>
  );
}

export default LuckyDraw;