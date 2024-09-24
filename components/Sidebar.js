import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';  // Create this file for styling the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">User Management</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/notifications">Notifications</Link></li> {/* Add link here */}
      </ul>
    </div>
  );
};

export default Sidebar;
