import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/IntroducePage.css';

function IntroducePage() {
  return (
    <div className="introduce-page">
      <Header />
      <main className="introduce-main">
        <section className="intro-section">
          <h1>회사 소개</h1>
          <p>어시스타는 기술 혁신, 품질 우선, 사람 중심의 가치를 바탕으로 운동기구의 새로운 기준을 제시하는 기업입니다.</p>
        </section>
        <section className="vision-section">
          <h2>우리의 비전</h2>
          <p>우리는 모든 사람이 건강하고 활기찬 삶을 살 수 있도록 돕는 최고의 피트니스 파트너가 되는 것을 목표로 합니다.</p>
        </section>
        <section className="history-section">
          <h2>연혁</h2>
          <ul>
            <li>2025년: (주)어시스타 설립</li>
            <li>2026년: 첫 번째 스마트 피트니스 기구 출시 (예정)</li>
          </ul>
        </section>
        <section className="team-section">
          <h2>팀 소개</h2>
          <p>어시스타는 열정적이고 숙련된 엔지니어, 디자이너, 피트니스 전문가들로 구성되어 있습니다.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default IntroducePage;
