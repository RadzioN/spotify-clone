import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FsMusicPlayerMobileComponent } from '..';

@Component({
  selector: 'app-music-player-mobile',
  templateUrl: './music-player-mobile.component.html',
  styleUrls: ['./music-player-mobile.component.scss']
})
export class MusicPlayerMobileComponent {

  constructor(public dialog: MatDialog) { }

  isFavorite = false;
  isPause = false;

  addToFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  doPause() {
    this.isPause = !this.isPause;
  }

  openFullScreen() {
    this.dialog.open(FsMusicPlayerMobileComponent, {
      disableClose: true,
      closeOnNavigation: false,
      panelClass: ['full-screen-modal']
    })
  }
}
