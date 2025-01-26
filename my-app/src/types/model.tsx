


export type User = {
    id: string;
    displayName: string;
    accessToken: string;
    country: string;
    refreshToken: string | null;

    lastUpdated: Date;
    image: Image;
    spotifyPlaylists: Playlist[];
}

export type Image = {
    url: string;
    height: number;
    width: number;
}

export type Playlist = {
    id: string;
    name: string;
    discription: string;
}

export type Game = {
    id: string;
    displayName: string;
    discription: string;
    url: string;
}