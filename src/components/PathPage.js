import React from 'react';
import './css/PathPage.css';

function PathPage() {
  const headquarterAddress = "인천광역시 미추홀구 인하로 100, 인하드림센터 1관 605호";
  const cheongnaAddress = "인천광역시 서구 봉수대로 806, 인천 아시아드 주경기장 (스포츠 창업 지원실)";

  return (
    <div className="path-page">
      <main className="path-main">
        <section className="path-intro-section">
          <div className="path-intro-content">
            <h1>COMPANY</h1>
            <h2>위치를 안내해드립니다.</h2>
          </div>
        </section>
        <section className="path-body-section">
          <div className="location-section">
            <div className="location-description">
              <h2>주식회사 어시스타 본사 및 R&D 센터</h2>
              <p>{headquarterAddress} / 606호</p>
            </div>
            <div className="map-container">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURI(headquarterAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Headquarter Location"
              ></iframe>
            </div>
          </div>
          <div className="location-section">
            <div className="location-description">
              <h2>청라국제도시 지점</h2>
              <p>{cheongnaAddress}</p>
            </div>
            <div className="map-container">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURI(cheongnaAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Cheongna Branch Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PathPage;