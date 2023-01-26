import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player-mobile',
  templateUrl: './music-player-mobile.component.html',
  styleUrls: ['./music-player-mobile.component.scss']
})
export class MusicPlayerMobileComponent {

  isFavorite = false;
  isPause = false;

  addToFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  doPause() {
    this.isPause = !this.isPause;
  }

  openFullscreenPlayer() {
    console.log("player opened");
  }
}
