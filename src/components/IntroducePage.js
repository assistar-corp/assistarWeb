import React from 'react';
import Header from './Header';
import Footer from './Footer';
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
            <p>피트니스 기구 및 시, 주식회사 어시스타입니다.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default IntroducePage;
