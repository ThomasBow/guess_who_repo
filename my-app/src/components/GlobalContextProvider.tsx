


import React, { createContext, useContext, useState } from "react";
import { User } from "../types/model";

type GlobalContextType = {
    user: User | undefined;
    setUser: (user: User) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [user, setUser] = useState<User | undefined>(undefined);

    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within an GlobalContextProvider');
    }
    return context;
};