import React from 'react';
import './MainLuckydraw.scss';
import { artwork } from '../../../assets/images/index';
import LuckyDrawTable from './LuckyDrawTable';

const MainLuckydraw = () => {
  return (
    <div className="Background-box">
      <div className="contents">
        <div className="text">럭키드로우</div>
        <div className="Lucky-Draw-Area">
          <img src={artwork} className="Artwork"></img>
          <LuckyDrawTable />
        </div>
      </div>
    </div>
  );
}

export default MainLuckydraw;