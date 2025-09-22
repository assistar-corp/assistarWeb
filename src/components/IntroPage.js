// src/components/IntroPage.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// SVG 파일을 React 컴포넌트로 불러옵니다.
import { ReactComponent as IntroLogo } from '../assests/images/intro_logo.svg';

function IntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 4초(4000ms) 후에 페이지를 전환합니다.
    const timer = setTimeout(() => {
      navigate('/main');
    }, 2000);

    // 컴포넌트가 사라질 때 타이머를 정리합니다.
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f9fafb',
      }}
    >
      
      {/* SVG 컴포넌트를 직접 사용하고, 스타일을 적용합니다. */}
      {/* 로고가 안 보일 경우를 대비해 fill: 'black'을 추가했습니다. */}
      <IntroLogo style={{ width: '150px', fill: 'black' }} />
    </div>
  );
}

export default IntroPage;