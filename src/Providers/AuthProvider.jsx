import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState} from 'react'; 
import app from '../firebase/firebase.init';

export const AuthContex = createContext({})

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, curentUser => {
            console.log('Auth state change', curentUser);
            setUser(curentUser)
        })
        return () => {
            unsuscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    // const user = {displayName: 'Sraboni P'}
    return (
        <AuthContex.Provider value={authInfo }>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;