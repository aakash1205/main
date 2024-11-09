// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import PatientDashboard from './pages/Dashboard/PatientDashboard';
import DoctorDashboard from './pages/Dashboard/DoctorDashboard';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import PatientSignup from './pages/Signup/PatientSignup';
import DoctorSignup from './pages/Signup/DoctorSignup';
import AdminSignup from './pages/Signup/AdminSignup';

const App = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/signup/patient" element={<PatientSignup />} />
        <Route path="/signup/doctor" element={<DoctorSignup />} />
        <Route path="/signup/admin" element={<AdminSignup />} />

        {/* Add other routes as necessary */}
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;