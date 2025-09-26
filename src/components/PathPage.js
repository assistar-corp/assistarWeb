import Header from './Header';
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.5097030860315!2d126.65367387715959!3d37.448685772069474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b79abb0b1b611%3A0xefaddd1c27fcca5a!2z7J247ZWY65Oc66a87IS87YSwIDHqtIA!5e0!3m2!1sko!2skr!4v1758865964517!5m2!1sko!2skr" 
              height="400"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Inha Dream Center"
            ></iframe>
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
    </div>
  );
}

export default PathPage;
