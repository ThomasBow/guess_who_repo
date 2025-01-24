


import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    grantAuth: () => void;
    revokeAuth: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const storedAuth = localStorage.getItem('isAuthenticated') === 'true';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(storedAuth);

    const grantAuth = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    const revokeAuth = () => {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, grantAuth, revokeAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};