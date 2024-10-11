import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage'; // Nueva página

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<HomePage />} />
        {/* Ruta para la página de catálogo "Descubre" */}
        <Route path="/descubre" element={<DiscoverPage />} />
      </Routes>
    </Router>
  );
}

export default App;
