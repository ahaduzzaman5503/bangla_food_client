import React, { useContext } from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContex);
    if(loading){
        return <div>loading...</div>
    }
    if(user ){
        return children;
    }else{
        return <Navigate to='/login' state={{from:location}} > </Navigate>;
    }

    
};

export default PrivateRoute;