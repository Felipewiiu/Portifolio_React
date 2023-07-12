import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from 'components/DefaultPage';
import React from 'react';
import Menu from 'components/Menu';

export default function AppRoutes() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />} />
        </Routes>
      </Router>
    </main>
  );
}
