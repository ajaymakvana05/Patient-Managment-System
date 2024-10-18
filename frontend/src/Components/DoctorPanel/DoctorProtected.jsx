// src/Components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const DoctorProtect = ({ children }) => {
    const isAuthenticated = localStorage.getItem('Dtoken');

    if (isAuthenticated) {
        return <Navigate to="/dashboard" />; 
    } else {
        return children; 
    }
};

export default DoctorProtect;
