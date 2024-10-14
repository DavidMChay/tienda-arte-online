import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/descubre" element={<DiscoverPage />} />
      </Routes>
    </Router>
  );
}

export default App;
