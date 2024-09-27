// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductExperience from './pages/ProductExperience';
import Shop from './pages/Shop';
import MiniAppPage from './pages/MiniAppPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/trai-xperience" element={<ProductExperience />} />
        <Route path="/gian-hang" element={<Shop />} />
        <Route path="/mini-app/:id" element={<MiniAppPage />} />
      </Routes>
    </Router>
  );
}

export default App;