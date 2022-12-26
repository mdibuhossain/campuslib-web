import React, { createContext } from 'react';
import useData from '../Hooks/useData';

const UtilityContext = createContext();

const UtilityProvider = ({ children }) => {
    const util = { ...useData() };
    return (
        <UtilityContext.Provider value={util}>
            {children}
        </UtilityContext.Provider>
    );
};

export { UtilityProvider, UtilityContext };