import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserManagement.css';  // Create this file for styling the page

const UserManagement = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
    { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', role: 'User' },
    // Add more sample users as needed
  ]);

  // State for search query, editing, and adding
  const [search, setSearch] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [addingUser, setAddingUser] = useState(false);
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    email: '',
    role: ''
  });

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // Handle edit button click
  const handleEdit = (user) => {
    setEditingUser(user);
    setFormValues(user);
  };

  // Handle save changes
  const handleSave = (e) => {
    e.preventDefault();
    if (editingUser) {
      setUsers(users.map(user =>
        user.id === formValues.id ? formValues : user
      ));
      setEditingUser(null);
    } else {
      // Generate a new ID for the new user
      const newId = users.length ? Math.max(users.map(user => user.id)) + 1 : 1;
      setUsers([...users, { ...formValues, id: newId }]);
      setAddingUser(false);
    }
    setFormValues({
      id: '',
      name: '',
      email: '',
      role: ''
    });
  };

  // Handle delete button click
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="user-management">
      <h1>User Management</h1>
      
      <div className="user-management-controls">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button className="add-user-button" onClick={() => setAddingUser(true)}>Add User</button>
      </div>

      {(editingUser || addingUser) && (
        <form onSubmit={handleSave} className="edit-form">
          <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Enter name"
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
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formValues.role}
              onChange={handleChange}
              placeholder="Enter role"
              required
            />
          </div>

          <button type="submit" className="save-button">Save Changes</button>
          <button type="button" className="cancel-button" onClick={() => {
            setEditingUser(null);
            setAddingUser(false);
          }}>Cancel</button>
          <button type="button" className="back-button" onClick={() => navigate('/dashboard')}>
            Back
          </button>
        </form>
      )}

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;


