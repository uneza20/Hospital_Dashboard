import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Notification.css'; 

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to create a notification
  const createNotification = (title, message) => {
    const newNotification = {
      id: notifications.length + 1, // Generate a unique ID
      title: title,
      message: message,
      timestamp: new Date().toLocaleString() // Get the current timestamp
    };
    setNotifications([...notifications, newNotification]);
  };

  // Example functions that might be called when a user performs specific actions
  const handleUserSignup = () => {
    createNotification("New User Signup", "A new user has signed up.");
  };

  const handlePasswordChange = () => {
    createNotification("Password Change", "User changed their password.");
  };

  const handleSystemAlert = () => {
    createNotification("System Alert", "Server maintenance scheduled for 2 AM.");
  };

  const handleEmailChange = () => {
    createNotification("Email Change", "User changed their email address.");
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  // Function to navigate back to the dashboard
  const handleBack = () => {
    navigate('/dashboard'); // Navigate to the dashboard route
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Notifications</h2>
      <button onClick={clearNotifications} className="clear-button">Clear All Notifications</button>

<button onClick={handleUserSignup} className="simulate-button password-change-button">Simulate User Signup</button>
<button onClick={handlePasswordChange} className="simulate-button password-change-button">Simulate Password Change</button>
<button onClick={handleSystemAlert} className="simulate-button system-alert-button">Simulate System Alert</button>
<button onClick={handleEmailChange} className="simulate-button email-change-button">Simulate Email Change</button>

<button onClick={handleBack} className="back-button">Back to Dashboard</button>


      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {notifications.map(notification => (
          <li key={notification.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h4>{notification.title}</h4>
            <p>{notification.message}</p>
            <small>{notification.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
