import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('/create-user'); // Route to the create user page
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Welcome to Dashboard</h1>
        <button onClick={handleAddUser} className="add-user-button">
          Add User
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
