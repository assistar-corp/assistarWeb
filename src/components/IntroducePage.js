import React from 'react';

import './css/IntroducePage.css';
import introduceLogo from '../assests/images/introduce1.webp';

function IntroducePage() {
  return (
    <div className="introduce-page">
      <main className="introduce-main">
        <section className="intro-section">
          <div className="intro-content">
            <div className="desktop-content">
              <h1>기술 혁신 · 품질 우선 · 사람 중심</h1>
              <p>가치를 바탕으로 운동기구의 새로운 기준을 제시하는 기업</p>
              <p>피트니스 기구 및 시스템 전문 제조기업</p>
              <h3>주식회사 어시스타</h3>
            </div>
            <div className="mobile-content">
              <h1>회사개요</h1>
              <p>피트니스 기구 및 시스템 전문 제조 기업</p>
            </div>

          </div>
        </section>
        <section className="intro-second-section">
          <div className="intro-new-layout">
            <img src={introduceLogo} alt="Assistar New Logo" className="introduce-logo" />
            <div className="text-sections-container">
              <div className="vision-text-section">
                <p className="vision-title"><strong>VISION</strong></p>
                <p className="vision-subtitle">Beyond Limits</p>
              </div>
              <div className="short-vertical-line"></div>
              <div className="user-content-section">
                <p>2022년 시작한 어시스타는</p>
                <p>인간의 잠재력을 깨우고 건강한 삶의 미래를 개척하는</p>
                <p><strong>피트니스 테크놀로지 선도기업을 지향합니다.</strong></p>
                <br />
                <p>'기술 혁신 · 품질 우선 · 사람 중심'을 핵심가치로 삼고,</p>
                <p>모든 사람이 신체적 한계를 넘어 성장하는 즐거움을 누리게 하는 것을</p>
                <p>궁극적인 목표로 삼고있습니다.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default IntroducePage;
