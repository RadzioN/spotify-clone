import { Component } from '@angular/core';
import { IconsService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  scrollTop: number = 0;

  constructor(private iconsService: IconsService) {
    this.iconsService.registerIcons();
  }

  onScroll(event: Event) {
    let target = event.target as HTMLElement;
    this.scrollTop = target.scrollTop;
  }
}
