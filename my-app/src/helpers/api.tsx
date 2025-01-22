


import axios from 'axios';
import { User } from '../types/model';

async function Get<T>(url: string, base: string = "http://localhost:5221/api/"): Promise<T | undefined> {
    const fullUrl = base + url;
    console.log('GET:', fullUrl);
    try {
        return (await axios.get<T>(fullUrl)).data;
    } catch (error) {
        console.error('Error fetching from ', fullUrl, ":", error);
    }
}

async function ExpectGet<T>(url: string, base?: string): Promise<T> {
    const response = await Get<T>(url, base);
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

async function Post<T>(url: string, body: any = "", base: string = "http://localhost:5221/api/"): Promise<T | undefined> {
    const fullUrl = base + url;

    try {
        return (await axios.post<T>(fullUrl, body)).data;
    } catch (error) {
        console.error('Error posting to ', fullUrl, ":", error);
    }
}

async function ExpectPost<T>(url: string, body: any = "", base?: string): Promise<T> {
    const response = await Post<T>(url, body, base);
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

