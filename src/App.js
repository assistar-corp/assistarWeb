import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import IntroPage from './components/IntroPage';
import MainPage from './components/MainPage';
import IntroducePage from './components/IntroducePage';
import PathPage from './components/PathPage';
import CEOPage from './components/CEOPage';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/introduce/overview" element={<IntroducePage />} />
        <Route path="/introduce/ceo" element={<CEOPage />} />
        <Route path="/path" element={<PathPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
