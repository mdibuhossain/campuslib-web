import React, { createContext } from 'react';
import useData from '../Hooks/useData';
import useFirebase from '../Hooks/useFirebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AllContext = { ...useFirebase(), ...useData() };
    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };