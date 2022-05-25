import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AllContext = useFirebase();
    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };