import React from 'react';
import './css/CEOPage.css';
import introduceLogo from '../assests/images/introduce_logo.svg';

function CEOPage() {
  return (
    <div className="ceo-page">
      <main className="ceo-main">
        <section className="ceo-intro-section">
          <div className="ceo-intro-content">
            <h1>CEO 인사말</h1>
            <p>(주)어시스타를 방문해 주셔서 감사합니다.</p>
          </div>
        </section>
        <section className="ceo-second-section">
          <div className="ceo-intro-footer">
            <img src={introduceLogo} alt="Assistar Logo" className="ceo-introduce-logo" />
            <div className="ceo-intro-footer-text">
              <p>우리는 열정만으로 부상의 위험과 시행착오를 감수해야 했고,</p>
              <p>운동의 잠재력을 온전히 끌어내지 못했습니다.</p>
              <br />
              <p>우리의 목표는 명확합니다.</p>
              <p>생체 데이터를 기반으로 가장 안전하고 효율적인</p>
              <p>성장 알고리즘을 제공하는 것</p>
              <p>모든 움직임이 최적의 퍼포먼스로 이어지는 놀라운 경험을 선사하는 것.</p>
              <br />
              <p>(주)어시스타는 여러분이 자신의 한계를 효과적으로 돌파하고,</p>
              <p>이전에는 없던 새로운 가능성을 발견하도록 돕는</p>
              <p>가장 강력한 파트너가 될 것을 약속 드립니다.</p>
              <br />
              <br />
              <h3><strong>주식회사 어시스타 대표이사 이 주 영</strong></h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CEOPage;