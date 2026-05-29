import React, { FC } from 'react';

import './css/IntroducePage.css';
import InfiniteImageSlider, { InfiniteImageSliderItem } from './InfiniteImageSlider';
import introduceLogo from '../assests/images/introduce1.webp';
import certi1 from '../assests/images/assistar_certi/1.png';
import certi2 from '../assests/images/assistar_certi/2.png';
import certi3 from '../assests/images/assistar_certi/3.png';
import certi4 from '../assests/images/assistar_certi/4.png';
import certi5 from '../assests/images/assistar_certi/5.png';
import certi6 from '../assests/images/assistar_certi/6.png';
import certi7 from '../assests/images/assistar_certi/7.png';

const certificationImages: InfiniteImageSliderItem[] = [
  // title은 이미지 아래에 표시되는 문구입니다. 실제 인증명으로 바꿀 때 이 값만 수정하면 됩니다.
  { src: certi1, alt: '어시스타 인증서 1', title: '인증서 1', className: 'assistar-certi-1' },
  { src: certi2, alt: '어시스타 인증서 2', title: '인증서 2', className: 'assistar-certi-2' },
  { src: certi3, alt: '어시스타 인증서 3', title: '인증서 3', className: 'assistar-certi-3' },
  { src: certi4, alt: '어시스타 인증서 4', title: '인증서 4', className: 'assistar-certi-4' },
  { src: certi5, alt: '어시스타 인증서 5', title: '인증서 5', className: 'assistar-certi-5' },
  { src: certi6, alt: '어시스타 인증서 6', title: '인증서 6', className: 'assistar-certi-6' },
  { src: certi7, alt: '어시스타 인증서 7', title: '인증서 7', className: 'assistar-certi-7' },
];

const IntroducePage: FC = () => {
  return (
    <div className="introduce-page">
      <main className="introduce-main">
        <section className="intro-section">
          <div className="intro-content">
            <div className="desktop-content">
              <h1>기술 혁신 · 품질 우선 · 사람 중심</h1>
              <p>가치를 바탕으로 운동기구의 새로운 기준을 제시하는 기업</p>
              <p>피트니스 기구 및 시스템 전문 제조기업</p>
              <h3>주식회사 어시스타</h3>
            </div>
            <div className="mobile-content">
              <h1>회사개요</h1>
              <p>피트니스 기구 및 시스템 전문 제조 기업</p>
            </div>

          </div>
        </section>
        <section className="intro-second-section">
          <div className="intro-new-layout">
            <img src={introduceLogo} alt="Assistar New Logo" className="introduce-logo" loading="lazy" />
            <div className="text-sections-container">
              <div className="vision-text-section">
                <p className="vision-title"><strong>VISION</strong></p>
                <p className="vision-subtitle">Beyond Limits</p>
              </div>
              <div className="short-vertical-line"></div>
              <div className="user-content-section">
                <p>2022년 시작한 어시스타는</p>
                <p>인간의 잠재력을 깨우고 건강한 삶의 미래를 개척하는</p>
                <p><strong>피트니스 테크놀로지 선도기업을 지향합니다.</strong></p>
                <br />
                <p>'기술 혁신 · 품질 우선 · 사람 중심'을 핵심가치로 삼고,</p>
                <p>모든 사람이 신체적 한계를 넘어 성장하는 즐거움을 누리게 하는 것을</p>
                <p>궁극적인 목표로 삼고있습니다.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="intro-certi-section">
          <InfiniteImageSlider
            title="인증 및 수상"
            images={certificationImages}
            className="assistar-certi-slider"
            ariaLabel="어시스타 인증 및 수상 이미지 슬라이더"
            imageWidth="220px"
            imageHeight="320px"
            imageGap="36px"
            duration="25s"
          />
        </section>
      </main>

    </div>
  );
};

export default IntroducePage;
