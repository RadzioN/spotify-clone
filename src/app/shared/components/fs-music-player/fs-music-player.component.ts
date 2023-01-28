import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DatabaseService, Track } from 'src/app/core';

@Component({
  selector: 'app-fs-music-player',
  templateUrl: './fs-music-player.component.html',
  styleUrls: ['./fs-music-player.component.scss']
})
export class FsMusicPlayerComponent implements OnInit {

  track$: Observable<Track>;
  isFavorite = false;
  isShuffle = false;
  isRepeat = false;
  isPause = false;
  isLyrics = false;
  isNext = false;

  constructor(private dialogRef: MatDialogRef<FsMusicPlayerComponent>, private dbs: DatabaseService) {
    this.track$ = this.dbs.getTrack();
  }

  ngOnInit() {
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === "Escape") {
        this.dialogRef.close();
      }
    });
  }

  addToFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  doShuffle() {
    this.isShuffle = !this.isShuffle;
  }

  doPause() {
    this.isPause = !this.isPause;
  }

  doRepeat() {
    this.isRepeat = !this.isRepeat;
  }

  openLyrics() {
    this.isLyrics = !this.isLyrics;
  }
}
