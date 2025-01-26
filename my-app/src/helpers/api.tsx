


import axios from 'axios';
import { Game, User } from '../types/model';

//// GETS ////

async function Get<T>(endpoint: string, base: string = "http://localhost:5221/api/"): Promise<T | undefined> {
    const fullUrl = base + endpoint;
    console.log('GET:', fullUrl);
    try {
        return (await axios.get<T>(fullUrl)).data;
    } catch (error) {
        console.error('Error fetching from ', fullUrl, ":", error);
    }
}

async function ExpectGet<T>(endpoint: string, base?: string): Promise<T> {
    const response = await Get<T>(endpoint, base);
    if (response !== undefined) {
        return response;
    }
    else {
        return Promise.reject('Data not as expected');
    }
}

export const Example = async (): Promise<string> => {
    console.log('Fetching example gg...');
    const response = await ExpectGet<string>('example');
    console.log('response:', response);
    return response;
}

export const GetSpotifyAuthUrl = async (): Promise<string> => {
    console.log('Fetching Spotify auth URL...');
    return await ExpectGet<string>('spotify/auth-url');
}

export const CheckNameExists = async (name: string): Promise<boolean> => {
    console.log('Checking name existence:', name);
    const response = await ExpectGet<boolean>(`user/check-name?name=${name}`);
    return response;
};

export const GetGames = async (): Promise<Game[]> => {
    console.log('Fetching games...');
    const games = await ExpectGet<Game[]>('game/games');
    return games;
}

//// POSTS ////

async function Post<T>(endpoint: string, body: any = "", base: string = "http://localhost:5221/api/"): Promise<T | undefined> {
    const fullUrl = base + endpoint;

    try {
        return (await axios.post<T>(fullUrl, body)).data;
    } catch (error) {
        console.error('Error posting to ', fullUrl, ":", error);
    }
}

async function ExpectPost<T>(endpoint: string, body: any = "", base?: string): Promise<T> {
    const response = await Post<T>(endpoint, body, base);
    if (response !== undefined) {
        return response;
    }
    else {
        return Promise.reject('Data not as expected');
    }
}


export const GetUserOrCreateNew = async (authCode: string): Promise<User> => {
    const endpoint = 'user/' + authCode;
    return await ExpectPost<User>(endpoint);
};



//// DELETES ////

export const Delete = async (endpoint: string, body: any = "", base: string = "http://localhost:5221/api/"): Promise<boolean> => {
    const fullUrl = base + endpoint;
    try {
        await axios.delete(fullUrl, { data: body });
        return true;
    } catch (error) {
        console.error('Error deleting from ', fullUrl, ":", error);
        return false;
    }
}


export const DeleteUserData = async (user: User): Promise<boolean> => {
    const endpoint = 'user/' + user.id;
    return await Delete(endpoint);
}

