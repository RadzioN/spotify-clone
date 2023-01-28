import { Component } from '@angular/core';
import { NavigationEnd, Event, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  isSearch = false;
  isLibrary = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/search')) {
          this.isSearch = true;
          this.isLibrary = false;
        } else if (event.url.includes('/library')) {
          this.isSearch = false;
          this.isLibrary = true;
        } else {
          this.isSearch = false;
          this.isLibrary = false;
        }
      }
    });
  }

}
