import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './EditUser.css'; // Import the CSS file

const EditUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data by ID to populate the form
    fetch(`http://localhost:5000/users/${id}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a PUT request to update the user
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        alert('User updated successfully!');
        navigate('/user-list'); // Redirect back to the user list
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        alert('Error updating user');
      });
  };

  return (
    <div>
      <Navbar />
      <div className="edit-user-container">
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit} className="edit-user-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
