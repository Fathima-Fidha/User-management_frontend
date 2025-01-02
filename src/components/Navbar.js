import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file


const Navbar = () => {
 
  const navigate=useNavigate();
  const handleLogout=()=>{
  
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <nav className="navbar">
      <h1 className="navbar-title">User management</h1>
      <div className="navbar-links">
        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>
        <Link to="/user-list" className="navbar-link">
          Userlist
        </Link>
        <Link to="/" className="navbar-link">
         < button className='logout' onClick={handleLogout}>Logout</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
