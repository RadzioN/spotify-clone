import { Component } from '@angular/core';
import { NavigationEnd, Event, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar-mobile',
  templateUrl: './top-bar-mobile.component.html',
  styleUrls: ['./top-bar-mobile.component.scss']
})
export class TopBarMobileComponent {

  isSearch = false;
  isLibrary = false;
  goodTime = '';

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
    this.dateTime();
  }

  dateTime() {
    let date = new Date();
    let hours = date.getHours();
    this.goodTime = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
  }
}
