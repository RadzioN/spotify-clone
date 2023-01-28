import { Playlist } from "./playlist.model";

export interface Playlists {
    playlists: [{
        name: string;
        list: Playlist[];
    }]
}
