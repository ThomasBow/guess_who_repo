


import { useContext } from 'react';
import * as api from './api';
import { UserContext } from '../App';

export const redirectToSpotifyOAuth = () => {
    api.GetSpotifyAuthUrl().then((url) => {
        window.location.href = url;
    });
}

export const isAuthenticated = () => {
    const { user } = useContext(UserContext);

    const authtorized = user !== null;
    console.log('isAuthenticated:', authtorized);
    return authtorized;
};