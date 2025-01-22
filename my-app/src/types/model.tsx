


export type User = {
    id: string;
    display_name: string;
    access_token: string;
    country: string;
    refresh_token: string | null;

    last_updated: Date;
    image: Image;
    spotify_playlists: Playlist[];
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