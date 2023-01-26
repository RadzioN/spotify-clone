import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player-mobile',
  templateUrl: './music-player-mobile.component.html',
  styleUrls: ['./music-player-mobile.component.scss']
})
export class MusicPlayerMobileComponent {

  isFavorite: boolean = false;
  isPause: boolean = false;

  addToFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  doPause() {
    this.isPause = !this.isPause;
  }

  openFullscreenPlayer() {

  }
}
