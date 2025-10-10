import React, { useState, useEffect } from 'react';
import './css/Footer.css';

// Function to set the viewport meta tag
const setViewport = (content) => {
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  if (!viewportMeta) {
    viewportMeta = document.createElement('meta');
    viewportMeta.setAttribute('name', 'viewport');
    document.head.appendChild(viewportMeta);
  }
  viewportMeta.setAttribute('content', content);
};

export default function Footer() {
  const [isPcMode, setIsPcMode] = useState(false);

  useEffect(() => {
    const currentViewMode = localStorage.getItem('viewMode');
    if (currentViewMode === 'pc') {
      setIsPcMode(true);
      setViewport('width=1280');
    } else {
      setIsPcMode(false);
      setViewport('width=device-width, initial-scale=1');
    }
  }, []);

  const handleToggleViewMode = () => {
    const newMode = !isPcMode;
    localStorage.setItem('viewMode', newMode ? 'pc' : 'mobile');
    window.location.reload();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-logo-container">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%A7%80%EA%B5%AC%EB%B3%B8.PNG-KVah1mAN25dtMeuARtLucIXCCvTW5o.png"
                alt="어시스타 심볼"
                className="footer-logo-symbol"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EA%B8%80%EC%94%A8.PNG-8WX0AOiNuOOG1XNIxMtGWCUFvUQjiE.png"
                alt="ASSISTAR STRENGTH EQUIPMENT"
                className="footer-logo-text"
              />
            </div>
            <div>
              <p>
                상호 : 주식회사 어시스타&nbsp;&nbsp;&nbsp;&nbsp;대표이사 : 이주영&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호 :
                5468603128
              </p>
              <p>
                주소 : 22212 인천광역시 미추홀구 인하로100, 인하드림센터1관 605호 &nbsp;&nbsp;&nbsp;&nbsp;대표전화 :
                010-4556-4948
              </p>
              <p className="copyright">
                © 2025 <span style={{ fontWeight: '900' }}>어시스타</span>, Inc. All Rights Reserved
              </p>
            </div>
          </div>
          <div className="footer-bottom-right">
            <a href="/">이용약관</a>
            <a href="/">개인정보처리방침</a>
            <button onClick={handleToggleViewMode} className="footer-view-mode-button">
              {isPcMode ? '모바일 버전' : 'PC 버전'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}