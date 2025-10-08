import React from 'react';
import Header from './Header';
import './css/MainPage.css';
import mainPageLogo from '../assests/images/mainpage_logo.svg';

import PartnerLogos from './PartnerLogos';

function MainPage() {
  return (
    <div className="main-page-container">
      <Header /> 
      
      <section className="main-hero-section">
        <div className="hero-content-wrapper">
          <img src={mainPageLogo} alt="Main Page Logo" className="main-page-logo" />
          <p className='main-text'>피트니스 라이프의 새로운 가치를 만듭니다.</p>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
}

export default MainPage;
