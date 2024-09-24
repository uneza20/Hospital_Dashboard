import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';  // Create this file for styling the page

const Settings = () => {
  // State to manage form values
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    notifications: true
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., updating user settings
    console.log('Form submitted:', formValues);
  };

  return (
     <div className="settings">
      <div className="settings-header">
        <Link to="/dashboard" className="back-link">Back to Dashboard</Link>
        <h1>Settings</h1>
      </div>

      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Enter a new password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="notifications">Enable Notifications:</label>
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={formValues.notifications}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
