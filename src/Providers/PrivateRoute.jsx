import React, { useContext } from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const user = useContext(AuthContex);
    if(user){
        return children;
    }
    console.log(user);

    return <Navigate to='/login' state={{from:location}} > </Navigate>;
    
};

export default PrivateRoute;