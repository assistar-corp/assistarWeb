import './css/PartnerLogos.css';
import { FC } from 'react';

import logo1 from '../assests/images/etc/logo_1.svg';
import logo2 from '../assests/images/etc/logo_2.webp';
import logo3 from '../assests/images/etc/logo_3.webp';
import logo4 from '../assests/images/etc/logo_4.svg';
import logo5 from '../assests/images/etc/logo_5.svg';
import logo6 from '../assests/images/etc/logo_6.svg';
import logo7 from '../assests/images/etc/logo_7.jpg';
import logo8 from '../assests/images/etc/logo_8.png';

interface Logo {
  src: string;
  alt: string;
  id: string;
}

const logos: Logo[] = [
  { src: logo1, alt: 'Partner 1', id: 'logo-1' },
  { src: logo2, alt: 'Partner 2', id: 'logo-2' },
  { src: logo3, alt: 'Partner 3', id: 'logo-3' },
  { src: logo4, alt: 'Partner 4', id: 'logo-4' },
  { src: logo5, alt: 'Partner 5', id: 'logo-5' },
  { src: logo6, alt: 'Partner 6', id: 'logo-6' },
  { src: logo7, alt: 'Partner 7', id: 'logo-7' },
  { src: logo8, alt: 'Partner 8', id: 'logo-8' },
];

const PartnerLogos: FC = () => {
  return (
    <div className="partner-logos-container">
      <h2 className="partner-logos-title">파트너</h2>
      
      <div className="logos-marquee">
        
        {/* 1. 원본 로고 목록 (logos-slide) */}
        <div className="logos-slide">
            {logos.map((logo, index) => (
                <div key={`original-${index}`} className={`logo-container ${logo.id}`}>
                    <img src={logo.src} alt={logo.alt} className="partner-logo" loading="lazy" />
                </div>
            ))}
        </div>
        
        {/* 2. 복제 로고 목록 */}
        <div className="logos-slide">
            {logos.map((logo, index) => (
                <div key={`duplicate-${index}`} className={`logo-container ${logo.id}`}>
                    <img src={logo.src} alt={logo.alt} className="partner-logo" loading="lazy" />
                </div>
            ))}
        </div>
        
      </div>
    </div>
  );
};

export default PartnerLogos;