import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import CreateUser from "./pages/CreateUser";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {
  return (
    
     
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/create-user" element={<ProtectedRoute><CreateUser /></ProtectedRoute >} />
      <Route path="/user-list" element={<ProtectedRoute><UserList /></ProtectedRoute >} />
      <Route path="/edit-user/:id" element={<ProtectedRoute><EditUser /></ProtectedRoute >} />
    </Routes>
    
  );
};

export default App;

