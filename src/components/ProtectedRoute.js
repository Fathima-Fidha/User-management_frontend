import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token); // Update token state when it changes
  }, []);

  if (!token) {
    return <Navigate to="/" />;  
  }

  return children;  
};

export default ProtectedRoute;