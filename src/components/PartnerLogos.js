import './css/PartnerLogos.css';

import logo1 from '../assests/images/etc/logo_1.svg';
import logo2 from '../assests/images/etc/logo_2.PNG';
import logo3 from '../assests/images/etc/logo_3.PNG';
import logo4 from '../assests/images/etc/logo_4.svg';
import logo5 from '../assests/images/etc/logo_5.svg';
import logo6 from '../assests/images/etc/logo_6.svg';
import logo7 from '../assests/images/etc/logo_7.jpg';


const logos = [
  { src: logo1, alt: 'Partner 1', id: 'logo-1' }, // 기술 보증 로고
  { src: logo2, alt: 'Partner 2', id: 'logo-2' }, // 네임텍 로고
  { src: logo3, alt: 'Partner 3', id: 'logo-3' }, // 엔디바이스 로고
  { src: logo4, alt: 'Partner 4', id: 'logo-4' }, // 인천광역시 로고
  { src: logo5, alt: 'Partner 5', id: 'logo-5' }, // 인천대 로고
  { src: logo6, alt: 'Partner 6', id: 'logo-6' }, // 인하대 로고
  { src: logo7, alt: 'Partner 7', id: 'logo-7' }, // 알앤디 로고
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