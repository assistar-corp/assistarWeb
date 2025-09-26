import React from 'react';
import Header from './Header';
import './css/MainPage.css';

import PartnerLogos from './PartnerLogos';

function MainPage() {
  return (
    <div className="main-page-container">
      <Header /> 
      
      <section className="main-hero-section">
        <div className="main-text">
          <p><strong>'기술 혁신 · 품질 우선 · 사람중심'</strong> 의 가치를 바탕으로</p>
          <p>운동기구의 새로운 기준을 제시하는 기업</p>
        </div>
        <div className="second-text">
          <p>피트니스 기구 및 시스템 전문 제조 기업</p>
          <p><strong>주식회사 어시스타</strong> 입니다. </p>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
}

export default MainPage;
