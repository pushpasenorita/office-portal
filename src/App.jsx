import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SVHeader from './All pages/Admin3Dashboard/Components4/SVHeader';
import SVBody from './All pages/Admin3Dashboard/Components4/SVBody'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <SVHeader /> {/* Remove onLogout prop; handle logout in SAHeader */}
        <Routes>
          <Route path="/dashboard" element={<SVBody />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;