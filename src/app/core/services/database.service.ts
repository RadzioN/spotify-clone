import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlists, Track } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private endpoint = 'assets/database/';
  track$!: Observable<Track>;
  playlists$!: Observable<Playlists>;

  constructor(private http: HttpClient) { }

  getTrack() {
    return this.track$ = this.http.get<Track>(this.endpoint + 'track.json');
  }

  getPlaylists() {
    return this.playlists$ = this.http.get<Playlists>(this.endpoint + 'playlists.json');
  }
}
