import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FsMusicPlayerComponent } from '../fs-music-player/fs-music-player.component';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent {

  constructor(public dialog: MatDialog) { }

  isFavorite = false;
  isShuffle = false;
  isRepeat = false;
  isPause = false;
  isLyrics = false;
  isQueue = false;

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

  openFullScreen() {
    this.dialog.open(FsMusicPlayerComponent, {
      disableClose: true,
      closeOnNavigation: false,
      panelClass: ['full-screen-modal']
    })
  }

}
