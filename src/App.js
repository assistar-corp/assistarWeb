import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

// Dynamically import components for code splitting
const IntroPage = lazy(() => import('./components/IntroPage'));
const MainPage = lazy(() => import('./components/MainPage'));
const IntroducePage = lazy(() => import('./components/IntroducePage'));
const PathPage = lazy(() => import('./components/PathPage'));
const CEOPage = lazy(() => import('./components/CEOPage'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/introduce/overview" element={<IntroducePage />} />
          <Route path="/introduce/ceo" element={<CEOPage />} />
          <Route path="/path" element={<PathPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
