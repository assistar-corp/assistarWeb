import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/PathPage.css';

function PathPage() {
  return (
    <div className="path-page">
      <Header />
      <main className="path-main">
        <h1>오시는 길</h1>
        <section className="address-section">
          <h2>주소</h2>
          <p>인천광역시 미추홀구 인하로100, 인하드림센터1관 605호 / 606호 (우편번호: 22212)</p>
        </section>
        <section className="map-section">
          <h2>지도</h2>
          <div className="map-placeholder">
            <p>지도 이미지 또는 임베드된 지도가 여기에 표시됩니다.</p>
          </div>
        </section>
        <section className="directions-section">
          <h2>교통편 안내</h2>
          <div className="transport-method">
            <h3>대중교통 이용 시</h3>
            <p>인하대역 2번 출구에서 도보 10분 거리에 위치해 있습니다.</p>
          </div>
          <div className="transport-method">
            <h3>자가용 이용 시</h3>
            <p>건물 내 주차장을 이용하실 수 있습니다. (주차 공간이 협소할 수 있으니 가급적 대중교통 이용을 부탁드립니다.)</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PathPage;
