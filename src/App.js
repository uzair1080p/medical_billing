import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DocumentUpload from './components/DocumentUpload';
import CaseProgress from './components/CaseProgress';
import RevenueAnalytics from './components/RevenueAnalytics';
import InsuranceCommunication from './components/InsuranceCommunication';
import './global.css';  // Global CSS import

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/upload">Upload Documents</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/insurance">Insurance Communication</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<DocumentUpload />} />
        <Route path="/progress" element={<CaseProgress />} />
        <Route path="/analytics" element={<RevenueAnalytics />} />
        <Route path="/insurance" element={<InsuranceCommunication />} />
      </Routes>
    </Router>
  );
}

export default App;
