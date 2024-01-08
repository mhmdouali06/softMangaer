// src/router/index.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>

  );
};

export default AppRouter;
