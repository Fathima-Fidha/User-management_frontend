import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './UserList.css'; // Import the CSS file

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Users:', data);
        setUsers(data);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const deleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        alert(data.message);
      })
      .catch((error) => {
        console.error('Error deleting user:', error.message);
        alert('Error deleting user');
      });
  };

  return (
    <div>
      <Navbar />
      <div className="user-list-container">
        <h1 className="user-list-title">User List</h1>
        <Link to="/create-user" className="add-user-link">
          <button className="add-user-button">Add User</button>
        </Link>
        <table className="user-list-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="actions">
                  <Link to={`/edit-user/${user._id}`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                  <button onClick={() => deleteUser(user._id)} className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
