import React from 'react';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';  // Create this file for styling the dashboard

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        
        <div className="dashboard-welcome">
          <h2>Welcome, Admin!</h2>
        </div>
        
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Active Users</h3>
            <p>982</p>
          </div>
          <div className="card">
            <h3>Pending Requests</h3>
            <p>15</p>
          </div>
          <div className="card">
            <h3>System Health</h3>
            <p>All systems are operational</p>
          </div>
        </div>
        
        <div className="dashboard-recent-activities">
          <h2>Recent Activities</h2>
          <ul>
            <li>John Doe has successfully created a new patient profile.</li>
            <li>System update applied successfully.</li>
            <li>Jane Smith has submitted a new feature request for enhanced patient management.</li>
           <li> New appointment slots have been added to the schedule for increased availability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

