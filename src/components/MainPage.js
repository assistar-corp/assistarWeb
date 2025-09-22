// src/components/MainPage.js

import React from 'react';
import Header from './Header';
// 이제 배경 이미지는 index.css에서 처리하므로 여기서 import 할 필요가 없습니다.
// import mainBackground from '../assests/images/main_background.jpg';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page-container">
      <Header /> {/* 헤더는 맨 위에 고정됩니다. */}
      
      {/* 배경 위에 나타날 메인 문구를 위한 섹션 (스크린샷의 2번 위치) */}
      <section className="hero-content-overlay">
        <div className="main-title">
          <p>
            <h1 style={{color : "white"}}>ASSISTAR</h1>
            <br />
            피트니스 라이브의 새로운 가치를 더합니다.
          </p>
        </div>
      </section>

     
    </div>
  );
}

export default MainPage;