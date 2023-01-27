import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fs-music-player',
  templateUrl: './fs-music-player.component.html',
  styleUrls: ['./fs-music-player.component.scss']
})
export class FsMusicPlayerComponent {

  constructor(private dialogRef: MatDialogRef<FsMusicPlayerComponent>) { }

  isFavorite = false;
  isShuffle = false;
  isRepeat = false;
  isPause = false;
  isLyrics = false;

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
