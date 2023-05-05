import React, { useContext } from 'react';
import { AuthContex } from '../../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    const location = useLocation();

    if(loading){
        return <div className='flex items-center justify-center'><ColorRing></ColorRing></div> 
    };

    if(user){
        return children;
    }
    return  <Navigate state={{from: location}} to="/login" replace ></Navigate>
    
};

export default PrivateRoute;