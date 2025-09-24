import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './components/IntroPage';
import MainPage from './components/MainPage';
import IntroducePage from './components/IntroducePage';
import PathPage from './components/PathPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/path" element={<PathPage />} />
      </Routes>
    </Router>
  );
}

export default App;
