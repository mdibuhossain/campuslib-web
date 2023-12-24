import { Typography } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';

const RequireAuth = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading)
        return <Typography variant='h4'>Wait babu</Typography>
    if (!(user?.email || user?.displayName))
        return <Navigate to="/login" state={{ from: location }} />
    return children
};

export default RequireAuth;