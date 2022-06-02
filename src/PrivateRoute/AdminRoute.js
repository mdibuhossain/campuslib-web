import { Typography } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { admin, user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading)
        return <Typography variant='h4'>Wait babu</Typography>
    if (!((user?.email || user?.displayName) && admin))
        return <Navigate to="/" state={{ from: location }} />
    if ((user?.email || user?.displayName) && admin)
        return children
};

export default AdminRoute;