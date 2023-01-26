import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent {

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

}
