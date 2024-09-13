// components/RouterWrapper.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/index'; // Certifique-se de ajustar os caminhos conforme necessário


const RouterWrapper = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Adicione outras rotas conforme necessário */}
    </Routes>
  </Router>
);

export default RouterWrapper;
