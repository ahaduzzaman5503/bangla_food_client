import React, { useContext } from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContex);
    if(loading){
        return <div className='flex items-center justify-center'><ColorRing></ColorRing></div>
    }
    if(user ){
        return children;
    }else{
        return <Navigate to='/login' state={{from:location}} > </Navigate>;
    }

    
};

export default PrivateRoute;