import React, { useContext } from 'react';
import { AuthContex } from '../../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    };

    if(user){
        return children;
    }
    return  <Navigate state={{from: location}} to="/login" replace ></Navigate>
    
};

export default PrivateRoute;