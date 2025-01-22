import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAuthenticationPage from './pages/unauthorized-pages/user-authentication-page'
import UnauthorizedMainPage from './pages/unauthorized-pages/main-page';
import { useState } from 'react';
import React from 'react';
import { User } from './types/model';
import { GlobalData } from './types/react-types';
import PrivateRoute from './components/PrivateRoute';
import AuthorizedMainPage from './pages/authorized-pages/main-page';


export const UserContext = React.createContext<GlobalData>({
    user: null,
    setUser: () => { console.log('UserContext setUser not implemented') }
});

function App() {

    const [user, setUser] = useState<User | null>(null);

    return (

        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <Routes>

                    <Route
                        path="/"
                        element=
                        {
                            <UnauthorizedMainPage />
                        }
                    />
                    <Route
                        path="/authentication"
                        element=
                        {
                            <UserAuthenticationPage />
                        }
                    />
                    <Route
                        path="/authorized/*"
                        element=
                        {
                            <PrivateRoute
                                element={<AuthorizedMainPage />}
                            />
                        }
                    />

                </Routes>
            </UserContext.Provider>
        </BrowserRouter>


    )
}

export default App
