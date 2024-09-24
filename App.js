import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './pages/UserManagement';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Ensure you have this import
import Notification from './pages/Notification'; // This should match your file name

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notification />} /> {/* This is correct */}
      </Routes>
    </Router>
  );
};

export default App;
