import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAuthenticationPage from './pages/user-authentication-page'
import MainPage from './pages/main-page';
import { useState } from 'react';
import React from 'react';
import { User } from './types/model';
import { GlobalData } from './types/react-types';


export const UserContext = React.createContext<GlobalData>({
    user: null,
    setUser: () => { }
});

function App() {

    const [user, setUser] = useState<User | null>(null);

    return (

        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <Routes>

                    <Route path="/" element={<MainPage />} />
                    <Route path="/authentication" element={<UserAuthenticationPage />} />

                </Routes>
            </UserContext.Provider>
        </BrowserRouter>


    )
}

export default App
