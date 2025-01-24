


import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAuthenticationPage from './pages/unauthorized-pages/user-authentication-page'
import UnauthorizedMainPage from './pages/unauthorized-pages/main-page';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthProvider';
import { GlobalContextProvider } from './components/GlobalContextProvider';
import { GamesPage } from './pages/authorized-pages/games-page';

function App() {
    return (

        <BrowserRouter>
            <AuthProvider>
                <GlobalContextProvider>
                    <Routes>

                        <Route
                            path="/"
                            element={<UnauthorizedMainPage />}
                        />
                        <Route
                            path="/authentication"
                            element={<UserAuthenticationPage />}
                        />
                        <Route
                            element={<PrivateRoute />}
                        >
                            <Route
                                path="/games"
                                element={<GamesPage />}
                            />
                        </Route>

                    </Routes>
                </GlobalContextProvider>
            </AuthProvider>
        </BrowserRouter >


    )
}

export default App
