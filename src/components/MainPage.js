// src/components/MainPage.js

import React from 'react';
import Header from './Header';
// 이제 배경 이미지는 index.css에서 처리하므로 여기서 import 할 필요가 없습니다.
// import mainBackground from '../assests/images/main_background.jpg';
import './MainPage.css';

import PartnerLogos from './PartnerLogos';

function MainPage() {
  return (
    <div className="main-page-container">
      <Header /> {/* 헤더는 맨 위에 고정됩니다. */}
      
      <section className="main-hero-section">
        <div className="main-text">
          <p>'기술 혁신 . 품질 우선 . 사람중심' 의 가치를 바탕으로</p>
          <p>운동기구의 새로운 기준을 제시하는 기업</p>
        </div>
        <div className="second-text">
          <p>피트니스 기구 및 시스템 전문 제조 기업</p>
          <p>주식회사 어시스타 입니다. </p>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
}

export default MainPage;
