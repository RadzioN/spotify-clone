import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DatabaseService, Track } from 'src/app/core';
import { FsMusicPlayerMobileComponent } from '..';

@Component({
  selector: 'app-music-player-mobile',
  templateUrl: './music-player-mobile.component.html',
  styleUrls: ['./music-player-mobile.component.scss']
})
export class MusicPlayerMobileComponent {

  track$: Observable<Track>;
  isFavorite = false;
  isPause = false;

  constructor(public dialog: MatDialog, private dbs: DatabaseService) {
    this.track$ = this.dbs.getTrack();
  }

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
