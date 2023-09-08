// src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes

import Home from './pages/Home';

const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use 'element' instead of 'component' */}
        {/* Add routes for other pages or blog posts */}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
