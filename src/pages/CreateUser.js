import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './CreateUser.css'; // Import the CSS file

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to create the user
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => response.json())
      .then((newUser) => {
        console.log('Created User:', newUser); // Verify user creation
        alert('User Created Successfully!');
        navigate('/user-list'); // Redirect to the User List page
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        alert('Error creating user');
      });

    // Clear the form after submission
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div>
      <Navbar />
      <div className="create-user-container">
        <h1 className="create-user-title">Create User</h1>
        <form onSubmit={handleSubmit} className="create-user-form">
          <div className="form-field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="form-field">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
