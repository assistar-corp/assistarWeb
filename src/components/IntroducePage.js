import React from 'react';
import Header from './Header';

import './css/IntroducePage.css';
import introduceLogo from '../assests/images/introduce_logo.svg';

function IntroducePage() {
  return (
    <div className="introduce-page">
      <Header />
      <main className="introduce-main">
        <section className="intro-section">
          <div className="intro-content">
            <h1>비전</h1>
            <br />
            <p>저희 어시스타는인간의 잠재력을 깨우고 건강한 삶의 미래를 개척하는 피트니스 테크톨로지 선도기업을 지향합니다.</p>
            <p>'기술 혁신 . 품질 우선. 사람중심' 을 핵심가치로 삼고, 모든 사람이 신체적 한계를 넘어</p>
            <p>성장하는 즐거움을 누리게 하는 것을 궁극적인 목표로 삼고 있습니다.</p>
          </div>
        </section>
        <section className="intro-second-section">
          <div className="intro-footer">
            <img src={introduceLogo} alt="Assistar Logo" className="introduce-logo" />
            <div className="intro-footer-text">
              <p>저는 오랫동안 '어떻게 하면 모든 사람의 신체적 고유성을 존중하며,</p>
              <p>가장 안전하고 효율적인 성장을 이끌어낼 수 있을까?" 라는 질문을 품어왔습니다.</p>
              <p>우리는 열정만으로 부상의 위험과 시행착오를 감수해야 했고, 운동의 잠재력을 온전히 끌어내지 못했습니다.</p>
              <br />
              <p>우리의 목표는 명확합니다.</p>
              <p>생체 데이터를 기반으로 가장 안전하고 효율적인 성장 알고리즘을 제공하는 것.</p>
              <p>모든 움직임이 최적의 퍼포먼스로 이어지는 놀라운 경험을 선사하는 것.</p>
              <br />
              <p>(주)어시스타는 여러분이 자신의 한계를 효과적으로 돌파하고,</p>
              <p>이전에는 없던 새로운 가능성을 발견하도록 돕는 가장 강력한 파트너가 될 것을 약속드립니다.</p>
              <br />
              <br />
              <p>주식회사 어시스타 대표이사 이 주 영</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default IntroducePage;
