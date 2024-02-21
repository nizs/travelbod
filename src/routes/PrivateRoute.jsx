import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../shared/Loader/Loader';
import { AuthContext } from '../shared/provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <Loader />
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoute;