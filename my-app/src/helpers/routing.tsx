


import * as api from './api';

export const redirectToSpotifyOAuth = () => {
    api.GetSpotifyAuthUrl().then((url) => {
        window.location.href = url;
    });
}

export const isAuthenticated = () => {
    // Replace this logic with your actual auth check
    return localStorage.getItem("user") ? true : false;
};