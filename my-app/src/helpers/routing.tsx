


import * as api from './api';

export const redirectToSpotifyOAuth = () => {
    api.GetSpotifyAuthUrl().then((url) => {
        window.location.href = url;
    });
}