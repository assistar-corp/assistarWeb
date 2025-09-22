
import React from 'react';
import './Header.css';
import { ReactComponent as HeaderLogo } from '../assests/images/Header_logo.svg'; 
import koreaFlag from '../assests/images/Flag_of_South_Korea.svg.png';

function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo-container">
          <HeaderLogo className="header-logo" />
        </div>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#company" className="nav-link">
              홈
            </a>
          </li>
          <li className="nav-item">
            <a href="#company" className="nav-link">
              회사소개
            </a>
          </li>
          <li className="nav-item">
            <a href="#directions" className="nav-link">
              오시는 길
            </a>
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