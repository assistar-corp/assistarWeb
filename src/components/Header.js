import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Header.css';
import koreaFlag from '../assests/images/Flag_of_South_Korea.svg.png';
import mainHeaderLogo from '../assests/images/Main_Header_logo.svg';
import { Menu, X } from 'lucide-react';

function Header() {
  const location = useLocation();
  const [isCompanyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setCompanyMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setCompanyMenuOpen(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="main-header">
      <div className="header-left">
        <Link to="/" className="logo-container">
          <img src={mainHeaderLogo} alt="Assistar Logo" className="header-logo" />
        </Link>
      </div>
      <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/main" className={`nav-link ${location.pathname === '/main' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              홈
            </Link>
          </li>
          <li 
            className="nav-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/introduce/overview" className={`nav-link ${location.pathname.startsWith('/introduce') ? 'active' : ''}`}>
              회사
            </Link>
            {isCompanyMenuOpen && (
              <ul 
                className="dropdown-menu"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <li><Link to="/introduce/overview" onClick={() => setMobileMenuOpen(false)}>회사 개요</Link></li>
                <li><Link to="/introduce/ceo" onClick={() => setMobileMenuOpen(false)}>CEO 인사말</Link></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link to="/path" className={`nav-link ${location.pathname === '/path' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              오시는 길
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <img src={koreaFlag} alt="Korean Flag" className="flag-icon" />
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}

export default Header;