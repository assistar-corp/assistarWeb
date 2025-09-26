
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Header.css';
import koreaFlag from '../assests/images/Flag_of_South_Korea.svg.png';
import mainHeaderLogo from '../assests/images/Main_Header_logo.svg';


function Header() {
  const location = useLocation();

  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo-container">
        <img src={mainHeaderLogo} alt="Assistar Logo" className="header-logo" />
        </div>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/main" className={`nav-link ${location.pathname === '/main' ? 'active' : ''}`}>
              홈
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/introduce" className={`nav-link ${location.pathname === '/introduce' ? 'active' : ''}`}>
              회사소개
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/path" className={`nav-link ${location.pathname === '/path' ? 'active' : ''}`}>
              오시는 길
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <img src={koreaFlag} alt="Korean Flag" className="flag-icon" />
      </div>
    </header>
  );
}

export default Header;