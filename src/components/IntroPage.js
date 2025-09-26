
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IntroLogo } from '../assests/images/intro_logo.svg';

function IntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 2초(2000ms) 후에 페이지를 전환
    const timer = setTimeout(() => {
      navigate('/main');
    }, 2000);

    // 컴포넌트가 사라질 때 타이머를 정리
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
      

      <IntroLogo style={{ width: '150px', fill: 'black' }} />
    </div>
  );
}

export default IntroPage;