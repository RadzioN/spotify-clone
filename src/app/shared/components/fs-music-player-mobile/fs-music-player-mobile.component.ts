import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fs-music-player-mobile',
  templateUrl: './fs-music-player-mobile.component.html',
  styleUrls: ['./fs-music-player-mobile.component.scss']
})
export class FsMusicPlayerMobileComponent {

  constructor(private dialogRef: MatDialogRef<FsMusicPlayerMobileComponent>) { }

  isFavorite = false;
  isShuffle = false;
  isRepeat = false;
  isPause = false;
  isLyrics = false;
  isQueue = false;


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

  openQueue() {
    this.isQueue = !this.isQueue;
  }

  openShare() {
    console.log("share")
  }

  openMoreActions() {
    console.log("more actions")
  }
}
