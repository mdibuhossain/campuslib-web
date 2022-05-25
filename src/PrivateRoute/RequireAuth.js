import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';

const RequireAuth = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading)
        return <h1>Wait babu</h1>
    if (!(user?.email || user?.displayName))
        return <Navigate to="/login" state={{ from: location }} />
    return children
};

export default RequireAuth;