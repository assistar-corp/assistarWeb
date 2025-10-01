import './css/PartnerLogos.css';

import logo1 from '../assests/images/etc/logo_1.png';
import logo2 from '../assests/images/etc/logo_2.jpg';
import logo3 from '../assests/images/etc/logo_3.jpg';
import logo4 from '../assests/images/etc/logo_4.jpg';

const logos = [
  { src: logo1, alt: 'Partner 1', id: 'logo-1' },
  { src: logo2, alt: 'Partner 2', id: 'logo-2' },
  { src: logo3, alt: 'Partner 3', id: 'logo-3' },
  { src: logo4, alt: 'Partner 4', id: 'logo-4' },
  // 로고 추가 부분

];

function PartnerLogos() {
  return (
    <div className="partner-logos-container">
      <h2 className="partner-logos-title">파트너</h2>
      
      <div className="logos-marquee">
        
        {/* 1. 원본 로고 목록 (logos-slide) */}
        <div className="logos-slide">
            {logos.map((logo, index) => (
                <div key={`original-${index}`} className={`logo-container ${logo.id}`}>
                    <img src={logo.src} alt={logo.alt} className="partner-logo" />
                </div>
            ))}
        </div>
        
        {/* 2. 복제 로고 목록 */}
        <div className="logos-slide">
            {logos.map((logo, index) => (
                <div key={`duplicate-${index}`} className={`logo-container ${logo.id}`}>
                    <img src={logo.src} alt={logo.alt} className="partner-logo" />
                </div>
            ))}
        </div>
        
      </div>
    </div>
  );
}

export default PartnerLogos;