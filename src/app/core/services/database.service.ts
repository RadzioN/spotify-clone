import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private endpoint = 'assets/database/';
  track$!: Observable<Object>;
  playlists$!: Observable<Object>;

  constructor(private http: HttpClient) { }

  getTrack() {
    return this.track$ = this.http.get(this.endpoint + 'track.json');
  }

  getPlaylists() {
    return this.playlists$ = this.http.get(this.endpoint + 'playlists.json');
  }
}
